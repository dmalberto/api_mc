import { Application, Request, Response } from 'express';
import NewsController from '../controller/newsController';

export default (app: Application) => {
  app.route('/').get((req: Request, res: Response) => {
    res.send({ versao: '0.0.1' });
  });

  app.route('/api/v1/news/:page/:qtd').get((req: Request, res: Response) => {
    return NewsController.get(req, res);
  });

  app.route('/api/v1/news/:id').get((req: Request, res: Response) => {
    return NewsController.getById(req, res);
  });
};
