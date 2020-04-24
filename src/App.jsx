import React from 'react';
import { useHttp } from './services/httpServise';

const api = 'https://jsonplaceholder.typicode.com/posts';
const App = () => {
  useHttp.get(api).then((data) => console.log(data));
  useHttp
    .patch(`${api}/1`, {
      title: 'foo',
    })
    .then((data) => console.log(data));

  useHttp
    .post(`${api}`, {
      title: 'foo',
      body: 'bar',
      userId: 1,
    })
    .then((data) => console.log(data));
  return (
    <div>
      <h1>app</h1>
    </div>
  );
};

export default App;
