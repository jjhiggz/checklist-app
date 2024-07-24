import { Hono } from "hono";
import { cors } from "hono/cors";
import { prisma } from "../prisma/prisma";

const app = new Hono();
app.use("/*", cors());
app.get("/", (c) => {
  return c.text("Hello Hono!");
});

app.get("/tasks", async (c) => {
  return c.json(await prisma.task.findMany());
});

export default app;
