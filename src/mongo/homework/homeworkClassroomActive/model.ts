import { Document, Schema, model } from "mongoose";

export interface QuestionsWithTypeInterface extends Document {
    type: string;
    question_id: string;
    index?: number;
}

export interface FileImagesInterface {
    thumbnail_url: string;
    original_url: string;
}

export interface Metadata {
    parent_homework_id?: string;
    homework_for?: string;
    master?: boolean;
    instructions?: string;
    questions_stats?: string;
    term?: string;
    academic_year?: string;
}

export interface HomeworkClassroomInterface extends Document {
    classroom_id: string;
    teacher_id: string;
    deadline: string;
    due_timestamp?: number | null;
    partial_submission: boolean;
    questions: [string];
    questions_with_type: [QuestionsWithTypeInterface];
    title: string;
    homework_id: string;
    submitted_on: string;
    ordinal_tag: string;
    create_datetime: string;
    deleted?: boolean;
    deleted_at?: number;
    deadline_extended?: boolean;
    deadline_extended_at?: number;
    homework_type?: string;
    quiz_duration?: number;
    start_date?: string;
    start_timestamp?: number | null;
    show_answer_key_after?: string;
    is_top_scorer_marker?: boolean;
    state?: string;
    file_url?: string;
    file_images?: FileImagesInterface[];
    show_score_after_submission?: boolean;
    created_by?: string;
    total_questions?: number;
    metadata?: Metadata;
}

const QuestionsWithTypeSchema = new Schema(
    {
        type: {
            type: String,
            required: true,
        },
        question_id: {
            type: String,
            required: true,
        },
        index: {
            type: Number,
            required: false,
        },
    },
    {
        _id: false,
        versionKey: false,
    }
);

const FileImagesSchema = new Schema(
    {
        thumbnail_url: {
            type: String,
        },
        original_url: {
            type: String,
        },
    },
    {
        _id: false,
        versionKey: false,
    }
);

const MetadataSchema = new Schema(
    {
        parent_homework_id: {
            type: String,
            required: false,
        },
        homework_for: {
            type: String,
            required: false,
        },
        master: {
            type: Boolean,
            required: false,
        },
        instructions: {
            type: String,
            required: false,
        },
        questions_stats: {
            type: String,
            required: false,
        },
        term: {
            type: String,
            required: false,
        },
        academic_year: {
            type: String,
            required: false,
        },
    },
    {
        _id: false,
        versionKey: false,
    }
);

const HomeworkClassroomSchema = new Schema(
    {
        classroom_id: String,
        teacher_id: String,
        deadline: String,
        due_timestamp: Number || null,
        partial_submission: Boolean,
        questions: [String],
        questions_with_type: [
            {
                type: QuestionsWithTypeSchema,
            },
        ],
        title: String,
        homework_id: {
            type: String,
            unique: true,
        },
        submitted_on: String,
        ordinal_tag: String,
        create_datetime: String,
        deleted: {
            type: Boolean,
        },
        deleted_at: {
            type: Number,
        },
        deadline_extended: {
            type: Boolean,
        },
        deadline_extended_at: {
            type: Number,
        },
        homework_type: {
            type: String,
            required: false,
        },
        quiz_duration: {
            type: Number,
            required: false,
        },
        start_date: {
            type: String,
            required: false,
        },
        start_timestamp: Number || null,
        show_answer_key_after: {
            type: String,
            required: false,
        },
        is_top_scorer_marker: {
            type: Boolean,
        },
        state: {
            type: String,
            required: false,
        },
        file_url: {
            type: String,
            required: false,
        },
        file_images: {
            type: [
                {
                    type: FileImagesSchema,
                },
            ],
            required: false,
        },
        show_score_after_submission: {
            type: Boolean,
            required: false,
            default: true,
        },
        created_by: {
            type: String,
            required: false,
            default: "own",
        },
        total_questions: {
            type: Number,
            required: false,
        },
        metadata: {
            type: MetadataSchema,
            required: false,
        },
    },
    {
        collection: "homework_classroom_active",
        versionKey: false,
    }
);

export const HomeworkClassroomActive = model<HomeworkClassroomInterface>(
    "homework_classroom_active",
    HomeworkClassroomSchema
);
