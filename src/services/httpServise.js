export class useHttp {
  static request = async (url, method = 'GET', body = null, headers = {}) => {
    const options = {
      method,
      body: null,
      headers: {},
    };

    if (body) {
      options.body = JSON.stringify(body);
      options['Content-Type'] = 'application/json';
    }

    if (headers) {
      options.headers = headers;
    }

    const response = await fetch(url, options);
    return this.parseRespons(response);
  };

  static get = (url) => {
    /**
     * @param {string} url
     */
    return this.request(url);
  };

  static post = (url, body, method = 'POST') => {
    /**
     * @param {string} url
     * @param {object} body
     * @param {string} method - if you need another method
     */
    if (method === 'GET') throw new Error('You try using GET method in POST`s handler');
    if (!body) throw new Error('There must be a request <body>');
    return this.request(url, method, body);
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

  static redirect = (toUrl) => {
    window.location = toUrl;
    return;
  };
}
