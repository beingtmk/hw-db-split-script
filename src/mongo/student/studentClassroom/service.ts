import { StudentClassroomInterface, StudentClassroom } from "./model";

export const createStudentClassroom = (
    student_classroom: any,
    callback: any
) => {
    let _session = new StudentClassroom(student_classroom);
    _session.save(callback);
};

export const createStudentClassroomAwait = async (student_classroom: any) => {
    let _session = await StudentClassroom.create(student_classroom);
    return _session;
};

export const updateStudentClassroom = (
    query: object,
    student_classroom: any,
    callback: any
) => {
    StudentClassroom.updateOne(query, student_classroom, callback);
};

export const updateManyStudentClassroom = (
    query: object,
    student_classroom: any,
    callback: any
) => {
    StudentClassroom.updateMany(query, student_classroom, callback);
};

export const getStudentClassroomByQuery = async (query: object) => {
    let queryStudentClassroom: StudentClassroomInterface[] =
        await StudentClassroom.find(query, {
            _id: false,
            __v: false,
        });
    return queryStudentClassroom;
};

export const getStudentClassroomSorted = async (
    sort_field: object,
    query: object
) => {
    let studentClassroomSorted: StudentClassroomInterface[] =
        await StudentClassroom.find(query, {
            _id: false,
            __v: false,
        }).sort(sort_field);

    return studentClassroomSorted;
};

export const getStudentClassroomCount = async (query: object) => {
    let studentHomeworkCount: number = await StudentClassroom.countDocuments(
        query
    );
    return studentHomeworkCount;
};
