import { string } from "@hapi/joi";
import { Document, Schema, model } from "mongoose";

export interface EventDataStudentObjectInterface {
    name: string;
    student_id: string;
    submitted_timestamp?: number;
    started_timestamp?: number;
    auto_submitted?: boolean;
}
export interface EventDataInterface {
    students?: [EventDataStudentObjectInterface];
    total_count?: number;
    deadline?: string;
    no_of_students?: number;
    hours_left?: number;
    total_submissions?: number;
    previous_due_timestamp?: number;
    previous_deadline?: string;
    due_timestamp?: number;
    previous_date_time?: string;
    date_time?: string;
    action?: string;
}

export interface HomeworkTimelineInterface extends Document {
    homework_id: string;
    created_date: string;
    created_time: string;
    created_timestamp: number;
    updated_date: string;
    updated_time: string;
    updated_timestamp: number;
    event_name: string;
    event_version: number;
    event_data: EventDataInterface;
    seeded?: boolean;
}
const EventDataStudentObjectSchema = new Schema(
    {
        name: String,
        student_id: String,
        submitted_timestamp: Number,
        started_timestamp: Number,
        auto_submitted: Boolean,
    },
    { _id: false, versionKey: false }
);
const EventDataSchema = new Schema(
    {
        students: [EventDataStudentObjectSchema],
        total_count: Number,
        deadline: String,
        no_of_students: Number,
        hours_left: Number,
        total_submissions: Number,
        previous_due_timestamp: Number,
        previous_deadline: String,
        due_timestamp: Number,
        previous_date_time: String,
        date_time: String,
        action: String,
    },
    { _id: false, versionKey: false }
);

const HomeworkTimelineSchema = new Schema(
    {
        homework_id: String,
        created_date: String,
        created_time: String,
        created_timestamp: Number,
        updated_date: String,
        updated_time: String,
        updated_timestamp: Number,
        event_name: String,
        event_version: Number,
        event_data: EventDataSchema,
        seeded: Boolean,
    },
    {
        collection: "homework_timeline",
        versionKey: false,
        minimize: false,
    }
);

export const HomeworkTimeline = model<HomeworkTimelineInterface>(
    "homework_timeline",
    HomeworkTimelineSchema
);
