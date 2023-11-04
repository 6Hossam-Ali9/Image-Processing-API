import { existsSync } from "fs";
import path from "path";

const isExist = (myPath: string): boolean => {
  return existsSync(path.join(__dirname, myPath));
};

export default isExist;
