import axios from 'axios';

const client = axios.create({ baseURL: 'http://localhost:4000' });

export const request = ({ ...options }) => {
  // 보통, 사용될 JWT 토큰을 헤더에 설정합니다.
  client.defaults.headers.common.Authorization = `Bearer token`;

  const onSuccess = response => response;
  const onError = error => {
    // 추가적인 에러 catch 또는 log 표시를 할 수 있습니다.
    return error;
  };

  return client(options).then(onSuccess).catch(onError);
};
