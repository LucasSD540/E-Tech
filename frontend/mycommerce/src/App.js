import { BrowserRouter } from "react-router-dom";
import { store } from "./store";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Routing } from "./routes";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Routing />
        <Footer />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
