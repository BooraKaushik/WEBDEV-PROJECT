import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginComponent from "./Components/LoginComponent";
import Template from "./Components/Template";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Template />}>
            {/* ROUTES MUST BE DECLARED IN THIS AS CHILDREN */}
            <Route index element={<LoginComponent />}></Route>
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
