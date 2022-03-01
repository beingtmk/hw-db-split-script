import { StudentGamificationInterface, StudentGamification } from "./model";

export const createStudentGamification = (student_gamification: any, callback: any) => {
    let _session = new StudentGamification(student_gamification);
    _session.save(callback);
};

export const updateStudentGamification = (
    query: object,
    student_gamification: any,
    callback: any
) => {
    StudentGamification.updateOne(query, student_gamification, callback);
};

export const updateManyStudentGamification = (
    query: object,
    student_gamification: any,
    callback: any
) => {
    StudentGamification.updateMany(query, student_gamification, callback);
};

export const getStudentGamificationsByQuery = async (query: object) => {
    let queryStudents: StudentGamificationInterface[] = await StudentGamification.find(
        query,
        {
            _id: false,
            __v: false,
        }
    );
    return queryStudents;
};

export const getOneStudentGamificationByQuery = async (query: object) => {
    let queryStudents = await StudentGamification.findOne(query, {
        _id: false,
        __v: false,
    });
    return queryStudents;
};