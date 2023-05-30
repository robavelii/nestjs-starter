import { IPaginationOptions } from './types/pagination-options';

export const infinityPagination = <T>(
  data: T[],
  options: IPaginationOptions,
) => ({
  data,
  hasNextPage: data.length === options.limit,
});
