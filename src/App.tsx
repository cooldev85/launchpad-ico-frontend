import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import { routes } from "./routes";
import { Box, Toolbar } from "@mui/material";


function App() {
  return (
    <div className="App">
      <Box sx={{ display: "flex" }}>
        <Router>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              {routes}
            </Route>
          </Routes>
        </Router>
      </Box>
    </div>
  );
}

export default App;
