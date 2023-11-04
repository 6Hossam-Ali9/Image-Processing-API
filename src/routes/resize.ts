import path from "path";
import validator from "../middleware/validator";
import express, { Request, Response } from "express";
import { existsSync } from "fs";
import transform from "../utils/transform";

const router = express.Router();

router.get("/resize", validator, async (req: Request, res: Response) => {
  const outputsDir: string = path.join(__dirname, "../../outputs");
  const { img, width, height } = res.locals.imgOptions; //I got this using my validator middleware
  const outputPath: string = path.join(
    outputsDir,
    `${img}_${width}x${height}.jpg`,
  );
  if (existsSync(outputPath)) {
    //check for caching system
    return res.status(200).sendFile(outputPath, (err: Error) => {
      if (err) {
        res.status(500).json({ error: err });
      }
    });
  } else {
    try {
      await transform(img, width, height, outputPath);
      return res.status(200).sendFile(outputPath, (err: Error) => {
        if (err) {
          res.status(500).json({ error: err });
        }
      });
    } catch (err) {
      res.status(500).json({ error: err });
    }
  }
});

export default router;
