import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import './App.css';
import News from './News';

const queryClient = new QueryClient(
  {
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false, // default: true
      },
    },
  }
);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <News />
    </QueryClientProvider>
  );
}

export default App;
