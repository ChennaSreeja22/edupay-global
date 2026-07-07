import { useNavigate } from "react-router-dom";
import "../styles/KYC.css";

function KYC() {

  const navigate = useNavigate();

  return (

    <div className="kyc-page">

      <div className="kyc-card">

        <div className="success-icon">
          ✅
        </div>

        <h2>KYC Verified Successfully</h2>

        <p>
          Your identity has been verified.
          You can now start sending money.
        </p>

        <div className="status">

          <div className="status-item">
            <span>✔</span>
            <span>Account Created</span>
          </div>

          <div className="status-item">
            <span>✔</span>
            <span>PAN Uploaded</span>
          </div>

          <div className="status-item">
            <span>✔</span>
            <span>Face Verification</span>
          </div>

          <div className="status-item">
            <span>✔</span>
            <span>Identity Approved</span>
          </div>

        </div>

        <button onClick={() => navigate("/dashboard")}>
          Continue to Dashboard →
        </button>

      </div>

    </div>

  );

}

export default KYC;