import { StudentLastSeen } from "./model";

export const getStudentLastSeenByQuery = async (query: object) => {
    let queryLastSeens = await StudentLastSeen.find(query, {
        _id: false,
        __v: false,
    });
    return queryLastSeens;
};

export const createStudentLastSeen = (lastSeen: any, callback: any) => {
    let _session = new StudentLastSeen(lastSeen);
    _session.save(callback);
};

export const updateStudentLastSeen = (
    query: object,
    lastSeen: any,
    callback: any
) => {
    StudentLastSeen.updateOne(query, lastSeen, callback);
};
