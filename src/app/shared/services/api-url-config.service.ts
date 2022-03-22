import { environment } from '../../../environments/environment';

const baseApi = environment.apiBaseUrl;


export const ApiUrlsConfig = {
  publicStashTabs: (id: string) => `${baseApi}/public-stash-tabs?id=${id}`
};
