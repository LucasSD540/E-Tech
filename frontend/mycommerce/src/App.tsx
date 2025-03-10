import React from "react";
import { BrowserRouter } from "react-router-dom";
import { RootState, store } from "./store";
import { Footer } from "./components/Footer";
import { Routing } from "./routes";
import { Provider, useSelector } from "react-redux";
import { Header } from "./components/Header";
import { Overlay } from "./components/Overlay";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <OverlayWrapper />
        <Header />
        <Routing />
        <Footer />
      </BrowserRouter>
    </Provider>
  );
}

function OverlayWrapper() {
  const overlay = useSelector((state: RootState) => state.overlay.overlay);
  return <Overlay overlay={overlay} />;
}

export default App;
