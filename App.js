// const express = require("express");
import express from "express";
import session from "express-session";
import Hello from "./Hello.js";
import Lab5 from "./Lab5.js";
import cors from "cors";
import CourseRoutes from "./Courses/routes.js";
import ModuleRoutes from "./Kanbas/modules/routes.js";
import SecurityController from "./SecurityController.js";
import UserRoutes from "./Users/routes.js";
import mongoose from "mongoose";

mongoose.connect("mongodb://localhost:27017/kanbas-sp24-mon");

const app = express();
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(express.json());
app.use(
  session({
    secret: "keyboard cat",
  })
);

Hello(app);
Lab5(app);
CourseRoutes(app);
ModuleRoutes(app);
SecurityController(app);
UserRoutes(app);

app.listen(4000);
