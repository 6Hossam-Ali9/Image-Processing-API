import sharp from "sharp";
import path from "path";
import validator from "../middleware/validator";
import express from "express";
import { existsSync } from "fs";

const router = express.Router();

const inputsDir = path.join(__dirname, "../../inputs");
const outputsDir = path.join(__dirname, "../../outputs");

router.get("/resize", validator, (req, res) => {
  const { img, width, height } = res.locals.imgOptions; //I got this using my validator middleware
  const outputPath = path.join(outputsDir, `${img}_${width}x${height}.jpg`);

  if (existsSync(outputPath)) {
    //check for caching system
    // console.log("exist!");
    return res.status(200).sendFile(outputPath, (err) => {
      if (err) {
        return res.status(500).json({ error: err });
      }
    });
  }

  sharp(`${inputsDir}/${img}.jpg`) // my image processing in case the inputs are valid and no cache
    .resize(width, height)
    .toFile(outputPath, (err) => {
      if (err) {
        return res.status(500).json({ error: err });
      }
      res.status(200).sendFile(outputPath, (err) => {
        if (err) {
          return res.status(500).json({ error: err });
        }
      });
    });
});

export default router;
