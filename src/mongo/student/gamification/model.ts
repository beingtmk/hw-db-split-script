import { Document, Schema, model } from "mongoose";

export interface StudentGamificationInterface extends Document {
    student_id: string;
    create_datetime: string;
    gamification_type: string;
    quantity: number;
    awarded_for: string;
    reward_message: string;
    reward_title: string;
    revealed: boolean;
    pending: boolean;
    gamification_id: string;
    revealed_at?: number;
    rendered_at?: number;
    sub_streak?: number;
}

const StudentGamificationSchema = new Schema(
    {
        student_id: {
            type: String,
        },
        gamification_id: {
            type: String,
        },
        gamification_type: {
            type: String,
        },
        quantity: {
            type: Number,
        },
        create_datetime: {
            type: String,
        },
        awarded_for: {
            type: String,
        },
        reward_message: {
            type: String,
        },
        reward_title: {
            type: String,
        },
        pending: {
            type: Boolean,
        },
        revealed: {
            type: Boolean,
        },
        revealed_at: {
            type: Number,
        },
        rendered_at: {
            type: Number,
        },
        sub_streak: {
            type: Number,
        },
    },
    {
        collection: "student_gamification",
        versionKey: false,
    }
);

export const StudentGamification = model<StudentGamificationInterface>(
    "student_gamification",
    StudentGamificationSchema
);
