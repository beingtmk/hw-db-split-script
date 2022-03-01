import { Document, Schema, model } from "mongoose";

interface Flags {
    enrolled_for_revision_series: boolean;
}

export interface StudentClassroomInterface extends Document {
    classroom_id: string;
    student_id: string;
    added_on: string;
    create_datetime: string;
    flags?: Flags;
}

const FlagsSchema = new Schema(
    {
        enrolled_for_revision_series: {
            type: Boolean,
        },
    },
    {
        _id: false,
        versionKey: false,
    }
);

const StudentClassroomSchema = new Schema(
    {
        classroom_id: {
            type: String,
            required: true,
        },
        student_id: {
            type: String,
            required: true,
        },
        added_on: {
            type: String,
        },
        create_dateime: {
            type: String,
        },
        flags: {
            type: FlagsSchema,
            required: false,
        },
    },
    {
        collection: "student_classroom",
        versionKey: false,
    }
);

export const StudentClassroom = model<StudentClassroomInterface>(
    "student_classroom",
    StudentClassroomSchema
);
