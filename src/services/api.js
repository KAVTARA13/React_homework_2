const baseUrl = 'https://jsonplaceholder.typicode.com';

export class API_SERVICE {
  static async getUsersListAsync({ start = 0, limit = 10 }) {
    try {
      const response = await fetch(
        baseUrl + `/users?_start=${start}&_limit=${limit}&`,
      );

      const result = await response.json();
      return result;
    } catch (err) {
      console.trace(err);
    }
  }

  static async getPostsListAsync({ start = 0, limit = 10 }) {
    try {
      const response = await fetch(
        baseUrl + `/posts?_start=${start}&_limit=${limit}&`,
      );

      const result = await response.json();
      return result;
    } catch (err) {
      console.trace(err);
    }
  }

  static async getUserAsync(userId) {
    try {
      const item = await fetch(baseUrl + `/users/${userId}`);
      const result = await item.json();
      console.log('[api@getTodoItemAsync]', result);
    } catch (err) {}
  }
}

export default API_SERVICE;
