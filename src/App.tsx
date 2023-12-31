import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';

import Card from "./components";

const queryClient = new QueryClient()

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Card />
    </QueryClientProvider>
  )
}

export default App;

