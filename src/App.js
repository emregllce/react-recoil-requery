import "./App.css";
import Home from "./Home";
import Navbar from "./Navbar";
import Navbar2 from "./Navbar2";
import { QueryClientProvider, QueryClient } from "react-query";

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client = {queryClient}>
      <div>
        <Navbar />
        <Navbar2 />
        <Home />
      </div>
    </QueryClientProvider>
  );
}

export default App;
