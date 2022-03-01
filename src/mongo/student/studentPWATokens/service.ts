import { StudentPwaTokens } from "./model";

export const getSudentPwaTokensByQuery = async (query: object) => {
    let queryTokens = await StudentPwaTokens.find(query, {
        _id: false,
        __v: false,
    });
    return queryTokens;
};

export const createStudentPwaToken = (tokenObj: any, callback: any) => {
    let _session = new StudentPwaTokens(tokenObj);
    _session.save(callback);
};

export const updateStudentPwaToken = (
    query: object,
    tokenObj: any,
    callback: any
) => {
    StudentPwaTokens.updateOne(query, tokenObj, callback);
};
