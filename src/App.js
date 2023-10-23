import "./App.css";
import ButtonComponent from "./components/ButtonComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ButtonComponent buttonText="CLICCAMI" />
        <imageComponent imageSrc="https://picsum.photo/200" />
      </header>
    </div>
  );
}

export default App;
