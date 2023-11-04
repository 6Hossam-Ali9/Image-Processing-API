import request from "supertest";
import app from "../../index";

describe("Resize API", () => {
  it("should return 400 if invalid width or height values are provided", async () => {
    await request(app)
      .get("/api/resize?img=image&width=hi&height=200") //width is NaN
      .expect(400)
      .then((response) => {
        expect(response.body.error).toEqual("Invalid width or height values");
      });
  });

  it("should return 400 if img name is not provided", async () => {
    await request(app)
      .get("/api/resize?width=100&height=100") //no img
      .expect(400)
      .then((response) => {
        expect(response.body.error).toEqual("img name is not provided");
      });
  });

  it("should return 400 if required img is not found", async () => {
    await request(app)
      .get("/api/resize?img=random&width=100&height=100") //img name doesn't exist
      .expect(400)
      .then((response) => {
        expect(response.body.error).toEqual("Required img is not found");
      });
  });

  it("should resize and return the image", async () => {
    await request(app)
      .get("/api/resize?img=cat&width=100&height=100") //ideal call
      .expect(200)
      .then((response) => {
        expect(response.headers["content-type"]).toBe("image/jpeg");
      });
  });
});
