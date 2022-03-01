import { readPreferenceType } from "../../../types/mongoose";
import { StudentHomework, StudentHomeworkInterface } from "./model";

export const createStudentHomework = (student_homework: any, callback: any) => {
    let _session = new StudentHomework(student_homework);
    _session.save(callback);
};

export const createStudentHomeworkAwait = async (student_homework: any) => {
    let _session = await StudentHomework.create(student_homework);
    return _session;
};

export const updateStudentHomework = (
    query: object,
    student_homework: any,
    callback: any
) => {
    StudentHomework.updateOne(query, student_homework, callback);
};

export const updateManyStudentHomework = (
    query: object,
    setStudentHomework: any,
    callback: any
) => {
    StudentHomework.updateMany(query, setStudentHomework, callback);
};

export const getStudentHomeworkByQuery = async (
    query: object,
    read: readPreferenceType = "i"
) => {
    let queryStudentHomework: StudentHomeworkInterface[];
    if (!["i", "inherit"].includes(read)) {
        queryStudentHomework = await StudentHomework.find(query, {
            _id: false,
            __v: false,
        }).read(read);
    } else {
        queryStudentHomework = await StudentHomework.find(query, {
            _id: false,
            __v: false,
        });
    }
    return queryStudentHomework;
};

export const getOneStudentHomeworkByQuery = async (
    query: object,
    read: readPreferenceType = "i"
) => {
    let queryStudentHomework: StudentHomeworkInterface;
    if (!["i", "inherit"].includes(read)) {
        queryStudentHomework = await StudentHomework.findOne(query, {
            _id: false,
            __v: false,
        }).read(read);
    } else {
        queryStudentHomework = await StudentHomework.findOne(query, {
            _id: false,
            __v: false,
        });
    }
    return queryStudentHomework;
};

export const getStudentHomeworkCount = async (query: object) => {
    let studentHomeworkCount: number = await StudentHomework.countDocuments(
        query
    );
    return studentHomeworkCount;
};

export const getStudentHomeworkSorted = async (
    sort_field: object,
    query: object
) => {
    let studentHomeworkSorted: StudentHomeworkInterface[] =
        await StudentHomework.find(query, {
            _id: false,
            __v: false,
        }).sort(sort_field);

    return studentHomeworkSorted;
};

export const getLimitedStudentHomeworkSorted = async (
    sort_field: string,
    query: object,
    limit: number
) => {
    let studentHomeworkSorted: StudentHomeworkInterface[] =
        await StudentHomework.find(query, {
            _id: false,
            __v: false,
        })
            .sort(sort_field)
            .limit(limit);

    return studentHomeworkSorted;
};

export const getStudentHomeworkSortedPagination = async (
    sort_field: object,
    query: object,
    limit: number,
    skip: number
) => {
    try {
        let count = await StudentHomework.countDocuments(query);
        let result = await StudentHomework.find(query, {
            _id: false,
            __v: false,
            csv: false,
        })
            .limit(limit)
            .skip(skip)
            .sort(sort_field);
        return { result, count };
    } catch {
        return { result: [], count: 0 };
    }
};
