import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Card from "./components";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      refetchOnReconnect: false,
      retry: false,
      staleTime: 86400000,
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Card />
    </QueryClientProvider>
  );
};

export default App;
