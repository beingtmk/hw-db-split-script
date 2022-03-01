import { HomeworkSubmission } from "./model";

export const createHomeworkSubmission = (
    homework_submission: any,
    callback: any
) => {
    let _session = new HomeworkSubmission(homework_submission);
    _session.save(callback);
};

export const updateHomeworkSubmission = (
    query: object,
    homework_submission: any,
    callback: any
) => {
    HomeworkSubmission.updateOne(query, homework_submission, callback);
};

export const getOneHomeworkSubmissionByQuery = async (query: object) => {
    let queryHomeworkSubmission = await HomeworkSubmission.findOne(query, {
        _id: false,
        __v: false,
    });
    return queryHomeworkSubmission;
};
