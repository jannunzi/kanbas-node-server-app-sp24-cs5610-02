export default function SecurityController(app) {
  app.get("/api/session/set/:key/:value", (req, res) => {
    const key = req.params.key;
    const value = req.params.value;
    req.session[key] = value;
    res.send(`Key: ${key} and Value: ${value} are set`);
  });
  app.get("/api/session/get/:key", (req, res) => {
    const key = req.params.key;
    const value = req.session[key];
    res.send(`Value of Key: ${key} is ${value}`);
  });
}
