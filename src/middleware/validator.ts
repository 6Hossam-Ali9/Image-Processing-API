import { NextFunction, Request, Response } from "express";
import isExist from "../utils/isExist";

interface MyQuery {
  img: string;
  width: string;
  height: string;
}

const validator = (
  req: Request,
  res: Response,
  next: NextFunction,
): Response | void => {
  //all data checks goes here
  const { img, width, height } = req.query as unknown as MyQuery;

  const parsedWidth: number = (width as unknown as number) * 1;
  const parsedHeight: number = (height as unknown as number) * 1;

  if (
    isNaN(parsedWidth) ||
    isNaN(parsedHeight) ||
    parsedWidth <= 0 ||
    parsedHeight <= 0
  ) {
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
