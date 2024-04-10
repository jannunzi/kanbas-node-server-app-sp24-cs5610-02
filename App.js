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
import LikesRoutes from "./Napster/likes/routes.js";
import ChatCompletionRoutes from "./openai/chat/routes.js";
// import ImageGenerationRoutes from "./openai/images/routes.js";
// import VisionRoutes from "./openai/vision/routes.js";

import mongoose from "mongoose";

// mongoose.connect("mongodb://localhost:27017/kanbas-sp24-mon");
mongoose.connect(
  "mongodb+srv://jannunzi:KV7uCTUWcD71COUh@cluster0.qzab2w4.mongodb.net/kanbas-sp24-mon?retryWrites=true&w=majority&appName=Cluster0"
);

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
    resave: false,
    saveUninitialized: false,
    proxy: true,
    cookie: {
      sameSite: "none",
      secure: true,
      domain: ".onrender.com",
    },
  })
);

Hello(app);
Lab5(app);
CourseRoutes(app);
ModuleRoutes(app);
SecurityController(app);
UserRoutes(app);
LikesRoutes(app);
// ChatCompletionRoutes(app);
// ImageGenerationRoutes(app);
// VisionRoutes(app);
ChatCompletionRoutes(app);

app.listen(process.env.PORT || 4000);
