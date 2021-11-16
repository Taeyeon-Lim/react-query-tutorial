import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

// 쿼리 클라이언트 생성
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // + 데이터 리페칭!
      // refetchOnMount: true, // 마운트 시
      // refetchInterval: true // 정해진 ms 간격으로
      refetchOnWindowFocus: false, // 화면이 포커스 시
      // refetchIntervalInBackground: true // 백그라운드에서 일정 ms 간격으로
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
