export default function Hello(app) {
  function sayHello(req, res) {
    res.send("Hello World");
  }

  function lifeIsGood(req, res) {
    res.send("Life is Good!!!");
  }

  function rootResponse(req, res) {
    res.send("Welcome to Node.js HTTP Restful Server");
  }

  app.get("/hello", sayHello);
  app.get("/", rootResponse);
  app.get("/good", lifeIsGood);
}
