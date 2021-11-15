import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

// 쿼리 클라이언트 생성
const queryClient = new QueryClient();

function App() {
  return (
    // 쿼리 클라이언트 프로바이더로 감싸기
    <QueryClientProvider client={queryClient}>
      <div> Hello, React! </div>
      {/* 개발자 도구 닫힌 상태로 App에 붙여주기 */}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
