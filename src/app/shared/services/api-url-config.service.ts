import { environment } from '../../../environments/environment';

const baseApi = environment.apiBaseUrl;


export const ApiUrlsConfig = {

  game: () => `${baseApi}/blogPosts`
};
