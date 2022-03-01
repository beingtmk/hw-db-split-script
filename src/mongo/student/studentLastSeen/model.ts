import { Document, model, Schema } from "mongoose";

export interface StudentLastSeenInterface extends Document {
    student_id: string;
    screen: string;
    tab: string;
    last_seen_at: number;
}

const StudentLastSeenSchema = new Schema(
    {
        student_id: {
            type: String,
        },
        screen: {
            type: String,
        },
        tab: {
            type: String,
        },
        last_seen_at: {
            type: Number,
        },
    },
    {
        collection: "student_last_seen",
        versionKey: false,
    }
);

export const StudentLastSeen = model<StudentLastSeenInterface>(
    "student_last_seen",
    StudentLastSeenSchema
);
