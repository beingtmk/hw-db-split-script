import { HomeworkClassroom } from "../mongo/homework/homeworkClassroom/model";
import { HomeworkClassroomActive } from "../mongo/homework/homeworkClassroomActive/model";

export const copyHomeworkClassroom = async () => {
  const startIdHomeworks = process.env.HOMEWORK_CLASSROOM_START_ID;
  let totalHomeworks = 0;

  let tStartIdHomeworks = startIdHomeworks;
  while (true) {
    const homeworks: any = await HomeworkClassroom.find(
      { _id: { $gt: tStartIdHomeworks } },
      {
        __v: false,
      }
    ).limit(1000);

    const homeworksCount = homeworks.length;
    if (homeworksCount === 0) {
      break;
    }

    // update count & pagination index
    tStartIdHomeworks = homeworks[homeworksCount - 1]._id;
    totalHomeworks += homeworksCount;

    // insert into homework_classroom_active
    await HomeworkClassroomActive.insertMany(homeworks);
  }

  console.log({ totalHomeworks });
};
