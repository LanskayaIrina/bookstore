export class useHttp {
  static request = async (url, method = 'GET', body, headers = {}) => {
    const options = {
      method,
      body,
      headers,
    };

    if (body) {
      options.body = JSON.stringify(body);
      options.headers['Content-type'] = 'application/json';
    }

    if (headers) {
      options.headers = headers;
    }

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

    if (!body) throw new Error('There must be a request <body>');
    return this.request(url, 'POST', body);
  };

  static patch(url, body) {
    /**
     * @param {string} url
     * @param {object} body
     */
    if (!body) throw new Error('There must be a request <body>');

    return this.request(url, 'PATCH', body);
  }

  static put(url, body) {
    /**
     * @param {string} url
     * @param {object} body
     */
    if (!body) throw new Error('There must be a request <body>');

    return this.request(url, 'PUT', body);
  }

  static delete(url) {
    /**
     * @param {string} url
     * @param {object} body
     */

    return this.request(url, 'DELETE');
  }

  static redirect = (toUrl) => {
    window.location = toUrl;
    return;
  };
}
