import Header from "./components/header";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Chat from "./pages/chat.jsx";
import { useAuth } from "./context/Authcontext";

function App() {
  const auth = useAuth();

  return (
    <main>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        {auth?.isLoggedIn && auth.user && (
          <Route path="/chat" element={<Chat />} />
        )}
      
      </Routes>
    </main>
  );
}

export default App;
