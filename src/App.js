import "./App.css";
import Home from "./components/pages/home/Home";
import Sidebar from "./components/sidebar/Sidebar";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Home/>
    </div>
  );
}

export default App;
