const assignment = {
  _id: 123,
  title: "Node HTTP Server with ExpressJS",
  description: "Create a calculator using ExpressJS",
  due: "2021-10-15",
  completed: false,
  score: 0,
};
const todos = [
  { _id: 123, title: "Learn HTML", completed: true },
  { _id: 124, title: "Learn CSS", completed: true },
  { _id: 125, title: "Learn JavaScript", completed: true },
  { _id: 126, title: "Learn Node.js", completed: false },
  { _id: 127, title: "Learn Express.js", completed: false },
  { _id: 128, title: "Learn MongoDB", completed: false },
];
export default function Lab5(app) {
  app.get("/a5/todos/completed", (req, res) => {
    const completedTodos = todos.filter((todo) => todo.completed);
    res.send(completedTodos);
  });
  app.get("/a5/todos", (req, res) => {
    res.send(todos);
  });
  app.get("/a5/assignment", (req, res) => {
    res.send(assignment);
  });
  app.get("/a5/assignment/title", (req, res) => {
    res.send(assignment.title);
  });
  app.get("/a5/assignment/title/:newTitle", (req, res) => {
    const newTitle = req.params.newTitle;
    assignment.title = newTitle;
    res.send(assignment);
  });
  const lab5 = (qwe, wer) => {
    wer.send("<h1>Lab5</h1>");
  };
  app.get("/a5/calculator", (req, res) => {
    const query = req.query;
    const a = parseInt(query.a);
    const b = parseInt(query.b);
    const op = query.operation;
    switch (op) {
      case "add":
        res.send(`Sum of ${a} and ${b} is ${a + b}`);
        break;
      case "sub":
        res.send(`Difference of ${a} and ${b} is ${a - b}`);
        break;
      default:
        res.send("Invalid operation");
    }
  });
  app.get("/a5/add/:num1/:num2", (req, res) => {
    // const params = req.params;
    // res.send(params);
    const num1 = parseInt(req.params.num1);
    const num2 = parseInt(req.params.num2);
    const sum = num1 + num2;
    res.send(`Sum of ${num1} and ${num2} is ${sum}`);
  });
  app.get("/a5/welcome", lab5);
}
