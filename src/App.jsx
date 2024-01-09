import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DataProvider } from "./context/DataContext";
import Genre from "./features/genres/Genre";
import Details from "./features/movies/Details";
import Home from "./ui/Home";
import ScrollToTop from "./ui/ScrollToTop";

const queryClient = new QueryClient();

const App = () => {
  return (
    <DataProvider>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <BrowserRouter>
          <ScrollToTop>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/genre/:id" element={<Genre />} />
              <Route path="/movie/:id" element={<Details />} />
              <Route path="/movie/:id" element={<Details />} />
            </Routes>
          </ScrollToTop>
        </BrowserRouter>
      </QueryClientProvider>
    </DataProvider>
  );
};
export default App;
