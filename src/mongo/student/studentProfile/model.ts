import { Document, Schema, model } from "mongoose";

export interface StudentProfileInterface extends Document {
    name: string;
    email?: string;
    gender: string;
    phone_number: string;
    student_id: string;
    parent_phone_number: string;
    create_datetime: string;
    whatsapp_consent?: boolean;
    streak?: number;
    points?: number;
    badges?: number;
    is_teacher_app?: boolean;
    isDummy?: boolean;
    class_name?: string;
    section?: string;
    school_institute?: string;
    registration_id?: string;
    api_version?: string;
    create_mode?: string;
    class_and_section?: string;
    roll_number?: string;
    update_datetime?: string;
}

const StudentProfileSchema = new Schema(
    {
        name: {
            type: String,
        },
        email: {
            type: String,
        },
        gender: {
            type: String,
        },
        phone_number: {
            type: String,
        },
        student_id: {
            type: String,
            unique: true,
        },
        parent_phone_number: {
            type: String,
        },
        create_datetime: {
            type: String,
        },
        whatsapp_consent: {
            type: Boolean,
            default: false,
        },
        streak: {
            type: Number,
            default: 0,
        },
        points: {
            type: Number,
            default: 0,
        },
        badges: {
            type: Number,
            default: 0,
        },
        is_teacher_app: {
            type: Boolean,
            default: false,
        },
        isDummy: {
            type: Boolean,
        },
        class_name: {
            type: String,
        },
        section: {
            type: String,
        },
        school_institute: {
            type: String,
        },
        registration_id: {
            type: String,
        },
        api_version: {
            type: String,
            default: "v1",
        },
        create_mode: {
            type: String,
            default: "pwa",
        },
        class_and_section: {
            type: String,
        },
        roll_number: {
            type: String,
        },
        update_datetime: {
            type: String,
        },
    },
    {
        collection: "student_profile",
        versionKey: false,
    }
);

export const StudentProfile = model<StudentProfileInterface>(
    "student_profile",
    StudentProfileSchema
);
