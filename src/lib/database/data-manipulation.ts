
export class DataManipulation {
  public paginationParse<D = any>(data: D[], total: number, page: number, limit: number) {
    const lastPage = Math.ceil(total / limit)
    const nextPage = page + 1 > lastPage ? null : page + 1
    const prevPage = page - 1 < 1 ? null : page - 1

    return {
      data: [...data],
      count: total,
      actualPage: page,
      nextPage,
      prevPage,
      lastPage
    }
  }
}