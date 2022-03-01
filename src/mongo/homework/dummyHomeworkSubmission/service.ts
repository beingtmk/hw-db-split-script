import { DummyHomework, DummyHomeworkInterface } from "./model";

export const createDummyHomework = (dummy_homework: any, callback: any) => {
    let _session = new DummyHomework(dummy_homework);
    _session.save(callback);
};

export const getDummyHomeworkByQuery = async (query: object) => {
    let queryDummyHomework: DummyHomeworkInterface[] = await DummyHomework.find(
        query,
        {
            _id: false,
            __v: false,
        }
    );
    return queryDummyHomework;
};
