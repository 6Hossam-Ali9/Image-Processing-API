import sharp from "sharp";
import path from "path";

const transform = async (
  img: string,
  width: number,
  height: number,
  outputPath: string,
): Promise<void> => {
  const inputsDir: string = path.join(__dirname, "../../inputs");
  return new Promise((resolve, reject) => {
    sharp(`${inputsDir}/${img}.jpg`)
      .resize(width, height)
      .toFile(outputPath, (err: Error) => {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      });
  });
};

export default transform;
