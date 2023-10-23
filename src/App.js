import "./App.css";
import ButtonComponent from "./components/ButtonComponent";
import ImageComponent from "./components/ImageComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ButtonComponent buttonText="CLICCAMI" />
        <ImageComponent
          imageSrc="https://loremflickr.com/640/360"
          imageAlt="photo"
        />
      </header>
    </div>
  );
}

export default App;
