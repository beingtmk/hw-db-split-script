import { readPreferenceType } from "../../../types/mongoose";
import { StudentProfileInterface, StudentProfile } from "./model";

export const createStudentProfile = (student_profile: any, callback: any) => {
    let _session = new StudentProfile(student_profile);
    _session.save(callback);
};

export const updateStudentProfile = (
    query: object,
    student_profile: any,
    callback: any
) => {
    StudentProfile.updateOne(query, student_profile, callback);
};

export const updateManyStudentProfile = (
    query: object,
    student_profile: any,
    callback: any
) => {
    StudentProfile.updateMany(query, student_profile, callback);
};

export const getStudentProfilesByQuery = async (
    query: object,
    read: readPreferenceType = "i"
) => {
    let queryStudents: StudentProfileInterface[] = [];
    if (!["i", "inherit"].includes(read)) {
        queryStudents = await StudentProfile.find(query, {
            _id: false,
            __v: false,
        }).read(read);
    } else {
        queryStudents = await StudentProfile.find(query, {
            _id: false,
            __v: false,
        });
    }
    return queryStudents;
};

export const getOneStudentProfilesByQuery = async (
    query: object,
    read: readPreferenceType = "i"
) => {
    let queryStudents: StudentProfileInterface = null;
    if (!["i", "inherit"].includes(read)) {
        queryStudents = await StudentProfile.findOne(query, {
            _id: false,
            __v: false,
        }).read(read);
    } else {
        queryStudents = await StudentProfile.findOne(query, {
            _id: false,
            __v: false,
        });
    }
    return queryStudents;
};

export const deleteManyStudentProfilesByConditions = async (
    conditions: object,
    callback: any
) => {
    StudentProfile.deleteMany(conditions, callback);
};
