import Chat from "./components/chat/Chat";
import Sidebar from "./components/sidebar/Sidebar";
import "./css/App.css";
function App() {
  return (
    <div className="app">
      <div className="app__body">
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
}

export default App;
