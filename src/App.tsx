import { BrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import { SearchProvider } from "./context/SearchProvider";

function App() {
  return (
    <SearchProvider>
      <BrowserRouter>
        <Layout>
          <Dashboard />
        </Layout>
      </BrowserRouter>
    </SearchProvider>
  );
}

export default App;
