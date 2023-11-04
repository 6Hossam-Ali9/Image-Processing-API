import { NextFunction, Request, Response } from "express";
import isExist from "../utils/isExist";

interface MyQuery {
  img: string;
  width: string;
  height: string;
}

const validator = (req: Request, res: Response, next: NextFunction) => {
  //all data checks goes here
  const { img, width, height } = req.query as unknown as MyQuery;

  const parsedWidth = parseInt(width, 10);
  const parsedHeight = parseInt(height, 10);

  if (isNaN(parsedWidth) || isNaN(parsedHeight)) {
    return res.status(400).json({ error: "Invalid width or height values" });
  }
  if (!img) {
    return res.status(400).json({ error: "img name is not provided" });
  }
  if (!isExist(`../../inputs/${img}.jpg`)) {
    return res.status(400).json({ error: "Required img is not found" });
  }

  res.locals.imgOptions = {
    img,
    width: parsedWidth,
    height: parsedHeight,
  };
  next();
};

export default validator;
