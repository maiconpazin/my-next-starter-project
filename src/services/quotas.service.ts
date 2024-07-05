import { IQuotasListFilter } from '@/types';

class QuotasService {
  private url = 'quotas';

  public filter(page?: number, limit?: number, filter?: IQuotasListFilter) {
    const params = { paginate: 1, page, limit, ...filter };
    // eslint-disable-next-line no-console
    console.log('params', params);
    return fetch(this.url);
  }
}

const quotaService = new QuotasService();

export default quotaService;
