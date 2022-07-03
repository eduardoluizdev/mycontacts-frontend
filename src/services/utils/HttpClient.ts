import APIError from 'errors/APIError';
import delay from 'utils/delay';

type JSONValue =
    | string
    | number
    | boolean
    | { [x: string]: JSONValue }
    | Array<JSONValue>;

type HeadersProps = {
  [name: string]: string
};

type MethodProps = {
  body?: JSONValue;
  headers?: HeadersProps;
};

type MakeRequestProps = {
  body?: JSONValue;
  headers?: HeadersProps;
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
};

class HttpClient {
  baseURL: string;

  constructor(baseURL: string) {
    this.baseURL = baseURL;
  }

  get(path:string, options?:MethodProps) {
    return this.makeRequest(path, {
      method: 'GET',
      ...options,
    });
  }

  post(path:string, options:MethodProps) {
    return this.makeRequest(path, {
      method: 'POST',
      ...options,
    });
  }

  async makeRequest(path: string, options: MakeRequestProps) {
    await delay(500);

    const headers = new Headers();

    if (options.body) {
      headers.append('Content-Type', 'application/json');
    }

    if (options.headers) {
      Object.entries(options.headers).forEach(([name, headerValue]) => {
        headers.append(name, headerValue);
      });
    }

    const response = await fetch(`${this.baseURL}${path}`, {
      method: options.method,
      body: JSON.stringify(options.body),
      headers,
    });

    let responseBody = null;
    const contentType = response.headers.get('Content-Type');

    if (contentType?.includes('application/json')) {
      responseBody = await response.json();
    }

    if (response.ok) {
      return responseBody;
    }

    throw new APIError(response, responseBody);
  }
}

export default HttpClient;
