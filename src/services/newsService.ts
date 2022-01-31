import { INewsService } from '../contracts/iNewsService';
import { Result } from '../infra/result';
import { NewsRepository } from '../repository/newsRepository';

export class NewsService implements INewsService {
  async get(_id: string) {
    return NewsRepository.findById(_id);
  }
  async getAll(page: number, qtd: number): Promise<Result> {
    const total = await NewsRepository.count({});
    const data = await NewsRepository.find({})
      .skip(page * qtd - qtd)
      .limit(qtd);
    return {
      Page: page,
      Qtd: qtd,
      Total: total,
      Data: data,
    };
  }
}
