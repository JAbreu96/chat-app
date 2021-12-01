import express from "express";
const app = express();
const port = 3030;

app.get('/', (req: any, res: any) => {
  res.sendStatus(200);
});



app.listen(port, () => {
  console.log(`Server listening to Port ${port}`);
})