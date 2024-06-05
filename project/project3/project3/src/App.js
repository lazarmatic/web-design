import "./App.css";
import Navbar from "./components/Navbar";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Products from "./pages/products";
import About from "./pages/about";
import Portfolio from "./pages/portfolio";
import Posts from "./pages/posts";
import MyForm from "./components/MyForm";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "./theme";
function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <CssBaseline />
      </ThemeProvider>
      <Navbar />
      <MyForm />
      <div className="container">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/products" element={<Products />} />
          <Route path="/Posts" element={<Posts />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
