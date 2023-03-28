const chai = require("chai");
const chaiHttp = require("chai-http");
chai.use(chaiHttp);
const { setupServer } = require("../src/server");
chai.should();

const server = setupServer();
describe("SOLO-API Server", () => {
  let request;
  beforeEach(() => {
    request = chai.request(server);
  });

  describe("GET /api/view/:id", () => {
    it("viewUser", async () => {
      const ans = { id: 1, name: "TestUser1" };
      const res = await request.get("/api/view/1");
      JSON.parse(res.text).should.deep.equal(ans);
    });
  });

  describe("POST /api/new", () => {
    it("addUser", async () => {
      const ans = { id: 10, name: "addTest" };
      const res = await request.post("/api/new").send(ans);
      JSON.parse(res.text).should.deep.equal(ans);
    });
  });

  describe("PATCH /api/edit/:id", () => {
    it("editUser", async () => {
      const ans = { id: 3, name: "editTest" };
      const res = await request.patch("/api/edit/3").send({ name: "editTest" });
      JSON.parse(res.text).should.deep.equal(ans);
    });
  });

  describe("DELETE /api/delete/:id", () => {
    it("deleteUser", async () => {
      const res = await request.delete("/api/delete/2");
      res.text.should.deep.equal("Done");
    });
  });

  describe("GET /api/user/all", () => {
    it("allUser", async () => {
      const ans1 = { id: 1, name: 'TestUser1' };
      const ans2 = { id: 10, name: 'addTest' };
      const ans3 = { id: 3, name: 'editTest' };
      const res = await request.get("/api/user/all");
      JSON.parse(res.text)[0].should.deep.equal(ans1);
      JSON.parse(res.text)[1].should.deep.equal(ans2);
      JSON.parse(res.text)[2].should.deep.equal(ans3);
    });
  });
});
