// import Database from "../Kanbas/Database/index.js";
import * as dao from "./dao.js";
export default function CourseRoutes(app) {
  app.get("/api/courses", async (req, res) => {
    const courses = await dao.findAllCourses();
    res.send(courses);
  });
  app.post("/api/courses", (req, res) => {
    const course = { ...req.body, _id: Date.now().toString() };
    Database.courses.push(course);
    res.send(Database.courses);
  });
  app.get("/api/courses/:courseId", async (req, res) => {
    const courseId = req.params.courseId;
    const course = await dao.findCourseById(courseId); // Database.courses;
    // const course = courses.find((course) => course._id === courseId);
    res.send(course);
  });
  app.delete("/api/courses/:courseId", (req, res) => {
    const courseId = req.params.courseId;
    Database.courses = Database.courses.filter(
      (course) => course._id !== courseId
    );
    res.send(Database.courses);
  });
}
