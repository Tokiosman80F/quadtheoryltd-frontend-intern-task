import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div >
      <div className="max-w-screen-lg mx-auto">
      <Navbar></Navbar>
      <Banner></Banner>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
