import { useNavigate } from "react-router-dom";
import "../styles/SendMoney.css";

function History() {

  const navigate = useNavigate();

  return (
    <div className="page">
      <div className="card">

        <h2>Transaction History</h2>

        <div className="summary">
          <p>
            <span>Priya Ramesh</span>
            <span>₹10,00,000</span>
          </p>

          <div className="status-success">
              Completed
          </div>
        </div>

        <div className="summary">
          <p>
            <span>Living Expenses</span>
            <span>₹45,000</span>
          </p>

          <div className="status-success">
              Completed
          </div>
        </div>

        <div className="summary">
          <p>
            <span>Emergency Transfer</span>
            <span>₹18,000</span>
          </p>
          
          <div className="status-success">
              Refunded
          </div>
        </div>

        <button onClick={() => navigate("/dashboard")}>
            Back to Dashboard
        </button>

      </div>
    </div>
  );
}

export default History;