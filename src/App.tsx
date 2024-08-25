import { BrowserRouter } from "react-router-dom";
import RouteApp from "./routes/RouteApp";
import "./App.css";

const App = () => (
  <BrowserRouter>
    <div className="App">
      <RouteApp />
    </div>
  </BrowserRouter>
);

export default App;
