import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Signup from "./pages/Signup";
import KYC from "./pages/KYC";
import Dashboard from "./pages/Dashboard";
import SendMoney from "./pages/SendMoney";
import History from "./pages/History";
import Notifications from "./pages/Notifications";
import Profile from "./pages/Profile";
import TransferStatus from "./pages/TransferStatus";

function App() {
  return (
    <Routes>

      <Route path="/" element={<Home />} />

      <Route path="/signup" element={<Signup />} />

      <Route path="/kyc" element={<KYC />} />

      <Route path="/dashboard" element={<Dashboard />} />

      <Route path="/sendmoney" element={<SendMoney />} />

      <Route path="/history" element={<History />} />

      <Route path="/notifications" element={<Notifications />} />

      <Route path="/profile" element={<Profile />} />

      <Route path="/transferstatus"  element={<TransferStatus/>} />
    

    </Routes>
  );
}

export default App;
