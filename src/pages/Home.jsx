import { useNavigate } from "react-router-dom";
import "../styles/Home.css";
import { FaUniversity } from "react-icons/fa";

function Home() {

    const navigate = useNavigate();

    return (

        <div className="home">

            <div className="card">

                <div className="logo">
                    <FaUniversity /> EduPay Global
                </div>

                <h2>
                    International Education Payments Made Simple
                </h2>

                <p>

                    Fast, secure and transparent cross-border
                    payments for students studying abroad.

                </p>

                <button
                    onClick={() => navigate("/signup")}
                >
                    Get Started
                </button>

                <div className="features">

                    <div className="feature">

                        <h3>⚡ Fast Transfers</h3>

                        <p>
                            Near real-time international payments.
                        </p>

                    </div>

                    <div className="feature">

                        <h3>🔒 Secure Payments</h3>

                        <p>
                            KYC & AML compliant payment process.
                        </p>

                    </div>

                    <div className="feature">

                        <h3>📍 Live Tracking</h3>

                        <p>
                            Track every transfer from sender to recipient.
                        </p>

                    </div>

                </div>

                <div className="footer">

                    Trusted by international students worldwide.

                </div>

            </div>

        </div>

    );

}

export default Home;