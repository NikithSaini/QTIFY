import "./styles.css";
import ButtonComponent from "../../ButtonComponent";
import SearchBar from "./SearchBar.js";
import Logo from "./Logo.js";

export default function App() {
  return (
    <div className="App">
      <ButtonComponent />
      <SearchBar />
      <Logo />
    </div>
  );
}
