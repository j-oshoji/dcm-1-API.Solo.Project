const userModel = require("./user/user.model");
const express = require("express");

const app = express();

const setupServer = () => {
  app.use(express.json());

  app.get("/api/user/:id", async (req, res) => {
    const id = req.params.id;
    const user = await userModel.getUser(id);
    res.send(user);
  });

  app.post("/api/user", async (req, res) => {
    const { body } = req;
    await userModel.addUser(body);
    const user = await userModel.getUser(body.id);
    res.send(user);
  });

  app.patch("/api/user/:id", async (req, res) => {
    const id = req.params.id;
    const { body } = req;
    await userModel.editUser(id, body);
    const user = await userModel.getUser(id);
    res.send(user);
  });

  app.delete("/api/user/:id", async (req, res) => {
    const id = req.params.id;
    await userModel.deleteUser(id);
    res.send("Done");
  });

  app.get("/api/users", async (req, res) => {
    const users = await userModel.getAll();
    res.send(users);
  });

  return app;
};

module.exports = { setupServer };
