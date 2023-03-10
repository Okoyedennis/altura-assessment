import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import InforSection from "./components/InforSection";
import TopFold from "./components/TopFold";
import TrendingNfts from "./components/TrendingNfts";

function App() {
  return (
    <div className="max-width">
      <Header />
      <TopFold />
      <TrendingNfts />
      <InforSection />
      <Footer />
    </div>
  );
}

export default App;
