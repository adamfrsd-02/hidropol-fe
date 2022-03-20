// import logo from './logo.svg';
import { Routes } from "../Config";
import "./App.css";
import Navbar from "../Components/Navbar/index";
import Footer from "../Components/Footer/index";
import { Provider } from "react-redux";
import store from "../store";

function App() {
  return (
    <>
      <Navbar />
      <div class="content mt-4">
        <Provider store={store}>
          <Routes />
        </Provider>
      </div>
      <Footer />
    </>
  );
}

export default App;
