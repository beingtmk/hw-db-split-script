import { StudentHomework } from "../mongo/student/studentHomework/model";
import { StudentHomeworkActive } from "../mongo/student/studentHomeworkActive/model";

export const copyStudentHomework = async () => {
  const startIdHomeworks = process.env.STUDENT_HOMEWORK_START_ID;
  let totalStudentHomeworks = 0;

  let tStartIdHomeworks = startIdHomeworks;
  while (true) {
    const students: any = await StudentHomework.find(
      { _id: { $gte: tStartIdHomeworks } },
      {
        __v: false,
      }
    ).limit(1000);

    const studentsCount = students.length;
    if (studentsCount === 0) {
      break;
    }

    // update count & pagination index
    tStartIdHomeworks = students[studentsCount - 1]._id;
    totalStudentHomeworks += studentsCount;

    // insert into student_classroom_active
    await StudentHomeworkActive.insertMany(students);
  }

  console.log({ totalStudentHomeworks });
};
