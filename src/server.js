const userModel = require("./user/user.model");
const express = require("express");

const app = express();

const setupServer = () => {
  app.use(express.json());

  app.get("/api/view/:id", async (req, res) => {
    const id = req.params.id;
    const user = await userModel.getUser(id);
    res.send(user);
  });

  app.post("/api/new", async (req, res) => {
    const { body } = req;
    await userModel.addUser(body);
    const user = await userModel.getUser(body.id);
    res.send(user);
  });

  app.patch("/api/edit/:id", async (req, res) => {
    const id = req.params.id;
    const { body } = req;
    await userModel.editUser(id, body);
    const user = await userModel.getUser(id);
    res.send(user);
  });

  app.delete("/api/delete/:id", async (req, res) => {
    const id = req.params.id;
    await userModel.deleteUser(id);
    res.send("Done");
  });

  app.get("/api/user/all", async (req, res) => {
    const users = await userModel.getAll();
    res.send(users);
  });

  return app;
};

module.exports = { setupServer };
