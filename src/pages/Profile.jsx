import { useNavigate } from "react-router-dom";
import "../styles/SendMoney.css";

function Profile() {

  const navigate = useNavigate();

  return (
    <div className="page">
      <div className="card">

        <h2>Profile</h2>

        <p><strong>Name:</strong> Ramesh Kumar</p>

        <p><strong>Email:</strong> rameshkumar@email.com</p>

        <p><strong>KYC:</strong> ✅ Verified</p>

        <p><strong>PAN:</strong> Linked</p>

        <p><strong>LRS Limit:</strong> ₹12L / ₹86L</p>

        <p><strong>LRS Limit:</strong> ₹12L / ₹86L</p>

        <hr />

        <p><strong>Registered Mobile</strong></p>

        <p>+91 98765 43210</p>

        <hr />

        <p><strong>Support</strong></p>

        <p>support@edupayglobal.com</p>

        <button style={{ marginTop: "20px" }}>
            Logout
        </button>

        <button
            style={{ marginTop: "10px" }}
            onClick={() => navigate("/dashboard")}
        >
            Back to Dashboard
        </button>

      </div>
    </div>
  );
}

export default Profile;