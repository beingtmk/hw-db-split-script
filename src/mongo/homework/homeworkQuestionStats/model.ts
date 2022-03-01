import { model, Schema, Document } from "mongoose";

interface SubmissionsMapItemInterface {
    student_homework_id: string;
    student_id: string;
}

interface QuestionStatsInterface {
    attempted_correct: string[];
    attempted_wrong: string[];
    attempted_not: string[];
    correction_pending: string[];
}

export interface SubQuestionStatsArrItemInterface {
    type: string;
    item_index: number;
    question_index: number;
    stats: QuestionStatsInterface;
}

export interface QuestionStatsMapItemInterface {
    question_id: string;
    type: string;
    item_index: number;
    question_index: number;
    stats: QuestionStatsInterface;
    sub_questions: SubQuestionStatsArrItemInterface[];
}

export type QuestionStatsMapType = Map<string, QuestionStatsMapItemInterface>;

export type QuestionStatsSubmissionsMapType = Map<
    string,
    SubmissionsMapItemInterface
>;
export interface HomeworkQuestionsStatsInterface extends Document {
    homework_id: string;
    total_questions: number;
    questions: QuestionStatsMapType;
    submissions: QuestionStatsSubmissionsMapType;
    created_timestamp: number;
    updated_timestamp: number;
}

const SubmissionsMapItemSchema = new Schema(
    {
        student_homework_id: {
            type: String,
            required: true,
        },
        student_id: {
            type: String,
            required: true,
        },
    },
    {
        _id: false,
        versionKey: false,
    }
);

const QuestionStatsSchema = new Schema(
    {
        attempted_correct: {
            type: [String],
            required: true,
        },
        attempted_wrong: {
            type: [String],
            required: true,
        },
        attempted_not: {
            type: [String],
            required: true,
        },
        correction_pending: {
            type: [String],
            required: true,
        },
    },
    {
        _id: false,
        versionKey: false,
    }
);

const SubQuestionStatsArrItemSchema = new Schema(
    {
        type: {
            type: String,
            required: true,
        },
        item_index: {
            type: Number,
            required: true,
        },
        question_index: {
            type: Number,
            required: true,
        },
        stats: {
            type: QuestionStatsSchema,
            required: true,
        },
    },
    {
        _id: false,
        versionKey: false,
    }
);

const QuestionStatsMapItemSchema = new Schema(
    {
        question_id: {
            type: String,
            required: true,
        },
        type: {
            type: String,
            required: true,
        },
        item_index: {
            type: Number,
            required: true,
        },
        question_index: {
            type: Number,
            required: true,
        },
        stats: {
            type: QuestionStatsSchema,
            required: true,
        },
        sub_questions: {
            type: [SubQuestionStatsArrItemSchema],
            required: true,
        },
    },
    {
        _id: false,
        versionKey: false,
    }
);

const HomeworkQuestionsStatsSchema = new Schema(
    {
        homework_id: {
            type: String,
            required: true,
            unique: true,
        },
        total_questions: {
            type: Number,
            required: true,
        },
        questions: {
            type: Map,
            of: QuestionStatsMapItemSchema,
            required: true,
            default: {},
        },
        submissions: {
            type: Map,
            of: SubmissionsMapItemSchema,
            required: true,
            default: {},
        },
        created_timestamp: {
            type: Number,
            required: true,
        },
        updated_timestamp: {
            type: Number,
            required: true,
        },
    },
    {
        collection: "homework_questions_stats",
        versionKey: false,
    }
);

export const HomeworkQuestionsStats = model<HomeworkQuestionsStatsInterface>(
    "homework_questions_stats",
    HomeworkQuestionsStatsSchema
);
