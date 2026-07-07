import { useNavigate } from "react-router-dom";
import "../styles/Dashboard.css";
import {
  FaPaperPlane,
  FaHistory,
  FaBell,
  FaUser
} from "react-icons/fa";

function Dashboard() {

  const navigate = useNavigate();

  return (

    <div className="dashboard">

      <div className="header">

        <h2>👋 Welcome Back</h2>

        <h1>Ramesh Kumar</h1>

        <p>EduPay Global Dashboard</p>

      </div>

      <div className="balance-card">

          <h3>Available Balance</h3>

          <h1>₹4,77,500</h1>

          <hr className="balance-line" />

          <div className="balance-info">

            <div className="info-row">
                <span>Monthly Transfer Limit</span>
                <strong>₹86,00,000</strong>
            </div>

            <div className="info-row">
                <span>Remaining Limit</span>
                <strong>₹75,55,500</strong>
            </div>

          </div>

      </div>

      <h3 className="section-title">
        Quick Actions
      </h3>

      <div className="button-grid">

      <button
        className="action-btn"
        onClick={() => navigate("/sendmoney")}
      >
        <FaPaperPlane />
        <p>Send Money</p>
      </button>

      <button
        className="action-btn"
        onClick={() => navigate("/history")}
      >
        <FaPaperPlane />
        <p>History</p>
      </button>

      <button
        className="action-btn"
        onClick={() => navigate("/notifications")}
      >
        <FaPaperPlane />
        <p>Notifications</p>
      </button>

      <button
        className="action-btn"
        onClick={() => navigate("/profile")}
      >
        <FaPaperPlane />
        <p>Profile</p>
      </button>

      </div>

      <h3
        style={{marginTop:"30px"}}
      >
        Recent Transactions
      </h3>

      <div className="summary">

        <p>

          <span>Tuition Fee</span>

          <span>₹10,00,000</span>

        </p>

      </div>

      <div className="summary">

        <p>

          <span>Living Expenses</span>

          <span>₹45,000</span>

        </p>

      </div>

      <div className="summary">

        <p>

          <span>Refund</span>

          <span>₹18,000</span>

        </p>

      </div>

    </div>

  );

}

export default Dashboard;