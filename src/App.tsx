import { BrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Dashboard />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
