import request from '@/utils/request';

export async function fakeTableList({ page, PAGE_SIZE }) {
  return request(`/api/users?_page=${page}&_limit=${PAGE_SIZE}`);
}

