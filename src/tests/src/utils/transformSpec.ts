import transform from "../../../utils/transform";
import { existsSync } from "fs";
import path from "path";

describe("Transform Function", () => {
  const outputsDir: string = path.join(__dirname, "../../../../outputs");

  it("should resize an image and save it to the specified output path", async () => {
    const img = "cat";
    const width = 100;
    const height = 100;
    const outputPath: string = path.join(
      outputsDir,
      `${img}_${width}x${height}.jpg`,
    );
    try {
      await transform(img, width, height, outputPath);
      expect(existsSync(outputPath)).toBeTruthy();
    } catch (error) {
      fail(error);
    }
  });

  it("should reject the promise if an error occurs during transformation", async () => {
    const img = "random"; // This image doesn't exist
    const width = 100;
    const height = 100;
    const outputPath: string = path.join(
      outputsDir,
      `${img}_${width}x${height}.jpg`,
    );

    await expectAsync(transform(img, width, height, outputPath)).toBeRejected();
  });
});
