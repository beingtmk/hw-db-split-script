import { Document, Schema, model } from "mongoose";

export interface QuestionsInterface extends Document {
    question_id: string;
    option_selected: string;
    viewed: boolean;
    attempted: boolean;
    correct: boolean;
}

export interface commentInterface extends Document {
    X: string;
    Y: string;
}

export interface AnswerImagesInterface extends Document {
    answer_image: string;
    comments: [] | [commentInterface];
    feedback_image: string;
}

export interface QuestionsWithTypeInterface extends Document {
    question_id: string;
    answer_images?: [AnswerImagesInterface] | [];
    option_selected?: string;
    type: string;
    viewed: boolean;
    attempted: boolean;
    correct: boolean;
    corrected?: boolean;
}

export interface DummyHomeworkInterface extends Document {
    homework_id: string;
    total_viewed: number;
    total_attempted: number;
    total_correct: number;
    ordinal_tag: string;
    questions_with_type: [] | [QuestionsWithTypeInterface];
    questions: [QuestionsInterface];
    create_datetime: string;
    started: boolean;
    started_on: string;
    started_timestamp: number;
    status: string;
    status_timestamp: number;
    last_attempt_timestamp: number;
    submitted: boolean;
    submitted_on: string;
    submitted_timestamp: number;
    deleted?: boolean;
    deleted_at?: number;
    total_marks?: number;
    marks_obtained?: number;
    auto_submitted?: boolean;
    is_streak_marker?: boolean;
}

const QuestionsSchema = new Schema(
    {
        question_id: {
            type: String,
            required: true,
        },
        option_selected: {
            type: String,
        },
        viewed: {
            type: Boolean,
            default: false,
        },
        attempted: {
            type: Boolean,
            default: false,
        },
        correct: {
            type: Boolean,
            default: false,
        },
    },
    {
        _id: false,
        versionKey: false,
    }
);

const commentSchema = new Schema(
    {
        X: { type: String },
        Y: { type: String },
    },
    {
        _id: false,
        versionKey: false,
    }
);

const AnswerImagesSchema = new Schema(
    {
        answer_image: { type: String },
        comments: {
            type: [{ type: commentSchema }] || [],
        },
        feedback_image: { type: String },
    },
    {
        _id: false,
        versionKey: false,
    }
);

const QuestionsWithTypeSchema = new Schema(
    {
        question_id: {
            type: String,
            required: true,
        },
        answer_images: {
            type:
                [
                    {
                        type: AnswerImagesSchema,
                    },
                ] || [],
        },
        option_selected: {
            type: String,
        },
        type: {
            type: String,
            required: true,
        },
        viewed: {
            type: Boolean,
            default: false,
        },
        attempted: {
            type: Boolean,
            default: false,
        },
        correct: {
            type: Boolean,
            default: false,
        },
        corrected: {
            type: Boolean,
            default: false,
        },
    },
    {
        _id: false,
        versionKey: false,
    }
);

const DummyHomeworkSchema = new Schema(
    {
        homework_id: {
            type: String,
            required: true,
        },
        total_viewed: {
            type: Number,
            default: 0,
        },
        total_attempted: {
            type: Number,
            default: 0,
        },
        total_correct: {
            type: Number,
            default: 0,
        },
        ordinal_tag: {
            type: String,
        },
        questions_with_type: {
            type: [QuestionsWithTypeSchema],
        },
        questions: {
            type: [QuestionsSchema],
        },
        create_datetime: {
            type: String,
        },
        started: {
            type: Boolean,
        },
        started_on: {
            type: String,
        },
        started_timestamp: {
            type: Number,
        },
        status: {
            type: String,
        },
        status_timestamp: {
            type: Number,
        },
        last_attempt_timestamp: {
            type: Number,
        },
        submitted: {
            type: Boolean,
        },
        submitted_on: {
            type: String,
        },
        submitted_timestamp: {
            type: Number,
        },
        deleted: {
            type: Boolean,
        },
        deleted_at: {
            type: Number,
        },
        total_marks: {
            type: Number,
        },
        marks_obtained: {
            type: Number,
        },
        auto_submitted: {
            type: Boolean,
        },
        is_streak_marker: {
            type: Boolean,
        },
    },
    {
        collection: "dummy_homework_submission",
        versionKey: false,
    }
);

export const DummyHomework = model<DummyHomeworkInterface>(
    "dummy_homework_submission",
    DummyHomeworkSchema
);
