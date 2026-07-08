import { useNavigate } from "react-router-dom";
import "../styles/SendMoney.css";

function TransferStatus() {

  const navigate = useNavigate();

  return (
    <div className="page">
      <div className="card">

      <h2>🎉 Transfer Successful</h2>

      <div className="summary">

      <p>

      <span>Transfer ID</span>

      <span>EDU2026001</span>

      </p>

      <p>

      <span>Recipient</span>

      <span>Priya Ramesh</span>

      </p>

      <p>

      <span>Purpose</span>

      <span>Tuition Fees</span>

      </p>

      <p>

      <span>Status</span>

      <span style={{color:"green"}}>Completed</span>

      </p>

      <p>

      <span>Expected Arrival</span>

      <span>8 Minutes</span>
      
      </p>

      <button
          onClick={() => navigate("/dashboard")}
      >
          Back to Dashboard
      </button>

      </div>

      </div>
    </div>
  );
}

export default TransferStatus;