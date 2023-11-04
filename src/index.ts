import express from "express";
import router from "./routes/resize";

const app = express();
const port = 3000;

app.use("/api", router);

app.listen(port, () => {
  console.log(`listening on port ${port}!`);
});

export default app;
