export class HttpService {
  static request = async (url, method = 'GET', body = {}, headers = {}) => {
    /**
     * @param {string} - url
     * @param {string} - method
     * @param {object} - body
     * @param {object} - headers
     */

    const options = {
      method,
      body: JSON.stringify(body),
      headers: {
        'Content-type': 'application/json',
        ...headers,
      },
    };

    const response = await fetch(url, options);
    return this.parseResponse(response);
  };

  static parseResponse = (response) => {
    const { ok, status, statusText } = response;

    if (status === 401) {
      this.redirect('/login');
      return;
    }

    if (ok) {
      return response.json();
    }

    return Promise.reject(statusText);
  };

  static get = (url) => {
    /**
     * @param {string} url
     */
    return this.request(url);
  };

  static post = (url, body) => {
    /**
     * @param {string} url
     * @param {object} body
     */

    return this.request(url, 'POST', body);
  };

  static redirect = (toUrl) => {
    window.location = toUrl;
    return;
  };
}
