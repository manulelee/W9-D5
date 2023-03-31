import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNavbar from "./components/MyNavbar";
import MyFooter from "./components/MyFooter";
import MyCarousel from "./components/MyCarousel";

function App() {
  return (
    <>
      <MyNavbar></MyNavbar>
      <MyCarousel nameSaga="Harry Potter" query="harry+potter"></MyCarousel>
      <MyCarousel nameSaga="Star Wars" query="star+wars"></MyCarousel>
      <MyCarousel nameSaga="Lord of the Rings" query="lord+of+the+rings"></MyCarousel>
      <MyFooter></MyFooter>
    </>
  );
}

export default App;
