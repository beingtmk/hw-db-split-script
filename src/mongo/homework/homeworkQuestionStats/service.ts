import { readPreferenceType } from "../../../types/mongoose";
import {
    HomeworkQuestionsStats,
    HomeworkQuestionsStatsInterface,
} from "./model";

export const createHomeworkQuestionsStats = (
    homework_questions_stats: any,
    callback: any
) => {
    let _session = new HomeworkQuestionsStats(homework_questions_stats);
    _session.save(callback);
};

export const updateHomeworkQuestionsStats = (
    query: object,
    homework_questions_stats: any,
    callback: any
) => {
    HomeworkQuestionsStats.updateOne(query, homework_questions_stats, callback);
};

export const getOneHomeworkQuestionsStatsByQuery = async (
    query: object,
    read: readPreferenceType = "i"
) => {
    let queryHomeworkQuestionsStats: HomeworkQuestionsStatsInterface;
    if (!["i", "inherit"].includes(read)) {
        queryHomeworkQuestionsStats = await HomeworkQuestionsStats.findOne(
            query,
            {
                _id: false,
                __v: false,
            }
        ).read(read);
    } else {
        queryHomeworkQuestionsStats = await HomeworkQuestionsStats.findOne(
            query,
            {
                _id: false,
                __v: false,
            }
        );
    }
    return queryHomeworkQuestionsStats;
};
