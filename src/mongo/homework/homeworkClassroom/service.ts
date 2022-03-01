import { readPreferenceType } from "../../../types/mongoose";
import { HomeworkClassroom, HomeworkClassroomInterface } from "./model";

export const createHomeworkClassroom = (
    homework_classroom: any,
    callback: any
) => {
    let _session = new HomeworkClassroom(homework_classroom);
    _session.save(callback);
};

export const createHomeworkClassroomAwait = async (homework_classroom: any) => {
    let _session = await HomeworkClassroom.create(homework_classroom);
    return _session;
};

export const updateHomeworkClassroom = (
    query: object,
    homework_classroom: any,
    callback: any
) => {
    HomeworkClassroom.updateOne(query, homework_classroom, callback);
};

export const updateImagesInHomeworkClassroom = (
    query: object,
    homework_classroom: any,
    callback: any
) => {
    HomeworkClassroom.updateOne(query, homework_classroom, callback);
};

export const updateManyHomeworkClassroom = (
    query: object,
    setHomeworkClassroom: any,
    callback: any
) => {
    HomeworkClassroom.updateMany(query, setHomeworkClassroom, callback);
};

export const getHomeworkClassroomByQuery = async (
    query: object,
    read: readPreferenceType = "i"
) => {
    let queryHomeworkClassroom: HomeworkClassroomInterface[] = [];
    if (!["i", "inherit"].includes(read)) {
        queryHomeworkClassroom = await HomeworkClassroom.find(query, {
            _id: false,
            __v: false,
        }).read(read);
    } else {
        queryHomeworkClassroom = await HomeworkClassroom.find(query, {
            _id: false,
            __v: false,
        });
    }
    return queryHomeworkClassroom;
};

export const getOneHomeworkClassroomByQuery = async (
    query: object,
    read: readPreferenceType = "i"
) => {
    let queryHomeworkClassroom = null;
    if (!["i", "inherit"].includes(read)) {
        queryHomeworkClassroom = await HomeworkClassroom.findOne(query, {
            _id: false,
            __v: false,
        }).read(read);
    } else {
        queryHomeworkClassroom = await HomeworkClassroom.findOne(query, {
            _id: false,
            __v: false,
        });
    }
    return queryHomeworkClassroom;
};

export const getHomeworkClassroomCount = async (
    query: object,
    read: readPreferenceType = "i"
) => {
    let homeworkClassroomsCount: number = 0;
    if (!["i", "inherit"].includes(read)) {
        homeworkClassroomsCount = await HomeworkClassroom.countDocuments(
            query
        ).read(read);
    } else {
        homeworkClassroomsCount = await HomeworkClassroom.countDocuments(query);
    }
    return homeworkClassroomsCount;
};

export const getHomeworkDetail = async (query: object) => {
    let homeworkDetail: HomeworkClassroomInterface[] =
        await HomeworkClassroom.find(query, {
            _id: false,
            __v: false,
        });
    return homeworkDetail;
};

export const getHomeworkClassroomSorted = async (
    sort_field: object,
    query: object
) => {
    let homeworkClassroomSorted: HomeworkClassroomInterface[] =
        await HomeworkClassroom.find(query, {
            _id: false,
            __v: false,
        }).sort(sort_field);

    return homeworkClassroomSorted;
};

export const getHomeworksClassroomByQuery = async (query: Object) => {
    let queryHomeworkClassroom: HomeworkClassroomInterface[] =
        await HomeworkClassroom.find(query, {
            homework_id: true,
            classroom_id: true,
            teacher_id: true,
            homework_type: true,
            create_datetime: true,
            deadline: true,
            title: true,
        });
    return queryHomeworkClassroom;
};

export const getHomeworkClassroomAndStudentsByQuery = async (query: object) => {
    let queryHomeworkClassroom: StudentClassReport[] =
        await HomeworkClassroom.aggregate([
            {
                $match: query,
            },
            {
                $lookup: {
                    from: "student_homework",
                    localField: "homework_id",
                    foreignField: "homework_id",
                    as: "student_homework",
                },
            },
            {
                $unwind: {
                    path: "$student_homework",
                    preserveNullAndEmptyArrays: true,
                },
            },
            {
                $match: {
                    "student_homework.isDummy": {
                        $ne: true,
                    },
                },
            },
            {
                $lookup: {
                    from: "student_profile",
                    localField: "student_homework.student_id",
                    foreignField: "student_id",
                    as: "student",
                },
            },
            {
                $unwind: {
                    path: "$student",
                },
            },
            {
                $group: {
                    _id: "$student.student_id",
                    name: { $first: "$student.name" },
                    homeworks: {
                        $push: {
                            title: "$title",
                            homework_type: "$homework_type",
                            create_datetime: "$create_datetime",
                            total_viewed: "$student_homework.total_viewed",
                            total_attempted:
                                "$student_homework.total_attempted",
                            total_correct: "$student_homework.total_correct",
                            total_questions: {
                                $size: "$student_homework.questions_with_type",
                            },
                        },
                    },
                },
            },
        ]);
    return queryHomeworkClassroom;
};

export interface StudentClassReport {
    name: string;
    homeworks: HomeworkClassReport[];
}

export interface HomeworkClassReport {
    title: string;
    homework_type: string;
    create_datetime: string;
    total_viewed: number;
    total_attempted: number;
    total_correct: number;
    total_questions: number;
}
