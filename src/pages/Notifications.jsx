import { useNavigate } from "react-router-dom";
import "../styles/SendMoney.css";


function Notifications() {

  const navigate = useNavigate();

  return (
    <div className="page">
      <div className="card">

        <h2>Notifications</h2>

        <p>💸 ₹10,00,000 transfer initiated</p>
        <hr />

        <p>✅ Transfer completed successfully</p>
        <hr />

        <p>📄 KYC verification approved</p>
        <hr />

        <p>💰 Refund of ₹18,000 processed</p>

        <button onClick={() => navigate("/dashboard")}>
            Back to Dashboard
        </button>

      </div>
    </div>
  );
}

export default Notifications;