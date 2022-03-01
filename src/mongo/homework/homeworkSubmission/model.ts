import { string } from "@hapi/joi";
import { Document, Schema, model } from "mongoose";

export interface SubmissionInterface {
    student_id: string;
    name: string;
}

export interface HomeworkSubmissionInterface extends Document {
    homework_id: string;
    submissions: SubmissionInterface[] | [];
    created_at: string;
    updated_at: string;
}

const SubmissionSchema = new Schema(
    {
        student_id: String,
        name: String,
    },
    {
        _id: false,
        versionKey: false,
    }
);

const HomeworkSubmissionSchema = new Schema(
    {
        homework_id: {
            type: String,
            unique: true,
        },
        submissions: {
            type: [SubmissionSchema] || [],
        },
        created_at: {
            type: String,
        },
        updated_at: {
            type: String,
        },
    },
    {
        collection: "homework_submission",
        versionKey: false,
    }
);

export const HomeworkSubmission = model<HomeworkSubmissionInterface>(
    "homework_submission",
    HomeworkSubmissionSchema
);
