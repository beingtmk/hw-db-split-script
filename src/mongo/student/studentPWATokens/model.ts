import { Document, model, Schema } from "mongoose";

export interface StudentPwaTokensInterface extends Document {
    phone_number: string;
    permission?: string;
    created_at?: number;
    updated_at?: number;
    token?: string;
}

const StudentPwaTokensSchema = new Schema(
    {
        phone_number: {
            type: String,
            required: true,
            unique: true,
        },
        permission: {
            type: String,
        },
        created_at: {
            type: Number,
        },
        updated_at: {
            type: Number,
        },
        token: {
            type: String,
        },
    },
    {
        collection: "student_pwa_tokens",
        versionKey: false,
    }
);

export const StudentPwaTokens = model<StudentPwaTokensInterface>(
    "student_pwa_tokens",
    StudentPwaTokensSchema
);
