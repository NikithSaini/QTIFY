import "./styles.css";
import NavBar from "./components/Navbar/Navbar";
import HeroSection from "./components/HeroSection/HeroSection";
import CardComponent from "./components/CardComponent/CardComponent";
import TopAlbums from "./components/TopAlbums/TopAlbums";
import NewAlbums from "./components/NewAlbums/NewAlbums";
export default function App() {
  return (
    <div className="App">
      <NavBar />
      <HeroSection />
      <TopAlbums />
      <CardComponent />
      <NewAlbums/>
    </div>
  );
}
