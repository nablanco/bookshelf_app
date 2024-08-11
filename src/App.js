import React from "react";
import { Box } from "@chakra-ui/react";

import Navigation from "./components/navigation/navigation";
import Home from "./components/main/home/home";
import Library from "./components/main/library/library";
import Footer from "./components/footer/footer";
import { Route, Routes } from "react-router";

function App() {
  return (
    <Box className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/library" element={<Library />} />
      </Routes>
      <Footer />
    </Box>
  );
}

export default App;
