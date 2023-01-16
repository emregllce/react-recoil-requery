import * as React from "react";
import Home from "./Home";
import Navbar from "./Navbar";
import Navbar2 from "./Navbar2";
import { QueryClientProvider, QueryClient } from "react-query";

const queryClient = new QueryClient()

function App() {

  const [view, setView] = React.useState("module");


  return (
    <QueryClientProvider client = {queryClient}>
      <div>
        <Navbar />
        <Navbar2 view={view} setView = {setView} />
        <Home view={view} />
      </div>
    </QueryClientProvider>
  );
}

export default App;
