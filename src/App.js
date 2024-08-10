import React from "react";

import Navigation from "./components/navigation/navigation";
import Home from "./components/main/home/home";
import Library from "./components/main/library/library";
import Footer from "./components/footer/footer";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Home />
      <Library />
      <Footer />
    </div>
  );
}

export default App;
