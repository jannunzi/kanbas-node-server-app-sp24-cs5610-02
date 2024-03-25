import Database from "../Database/index.js";
export default function CourseRoutes(app) {
  app.get("/api/courses", (req, res) => {
    const courses = Database.courses;
    res.send(courses);
  });
  app.post("/api/courses", (req, res) => {
    const course = { ...req.body, _id: Date.now().toString() };
    Database.courses.push(course);
    res.send(Database.courses);
  });
  app.get("/api/courses/:courseId", (req, res) => {
    const courses = Database.courses;
    const courseId = req.params.courseId;
    const course = courses.find((course) => course._id === courseId);
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
