import express, {Request, Response} from 'express';
import process from 'process';

const app = express()
// PORT=3002 npm run app
const port = process.env.PORT ?? 3000;

app.set("view engine", "ejs");
app.use(express.static(__dirname + '/../node_modules/bootstrap/dist'));
app.use(express.static(__dirname + '/../node_modules/popper.js/dist'));
app.use(express.static(__dirname + '/../public'));

app.get('/', (req: Request, res: Response) => {
  res.render('homepage');
})

app.listen(port, () => {
  console.log(`DirName: ${__dirname}`);
  console.log(`Example app listening on port ${port}`)
})
