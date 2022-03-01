import { HomeworkTimeline, HomeworkTimelineInterface } from "./model";

export const createHomeworkTimeline = (
    homework_timeline: any,
    callback: any
) => {
    let _session = new HomeworkTimeline(homework_timeline);
    _session.save(callback);
};

export const getHomeworkTimelineByQuery = async (query: object) => {
    let queryHomeworkTimeline: HomeworkTimelineInterface[] =
        await HomeworkTimeline.find(query, {
            _id: false,
            __v: false,
        });
    return queryHomeworkTimeline;
};

export const getOneHomeworkTimelineByQuery = async (query: object) => {
    let queryHomeworkTimeline = await HomeworkTimeline.findOne(query, {
        _id: false,
        __v: false,
    });
    return queryHomeworkTimeline;
};
export const getHomeworkTimelineByQuerySorted = async (
    query: object,
    sorted: object
) => {
    let queryHomeworkTimeline: HomeworkTimelineInterface[] =
        await HomeworkTimeline.find(query, {
            _id: false,
            __v: false,
        }).sort(sorted);
    return queryHomeworkTimeline;
};

export const updateHomeworkTimeline = (
    query: object,
    homework_timeline: any,
    callback: any
) => {
    HomeworkTimeline.updateOne(query, homework_timeline, callback);
};
