import { BrowserRouter } from "react-router-dom";
import { store } from "./store";
import { Footer } from "./components/Footer";
import { HeaderRouting, Routing } from "./routes";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <HeaderRouting />
        <Routing />
        <Footer />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
