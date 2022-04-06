import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Template from "./Components/Template";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Template />}>
            {/* ROUTES MUST BE DECLARED IN THIS AS CHILDREN */}
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
