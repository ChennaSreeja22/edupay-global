import { useNavigate } from "react-router-dom";
import "../styles/Signup.css";

function Signup(){

    const navigate = useNavigate();

    return(

        <div className="auth-page">

            <div className="auth-card">

                <h1>Create Account</h1>

                <input placeholder="Full Name"/>

                <input placeholder="Email"/>

                <input placeholder="Mobile Number"/>

                <input placeholder="PAN Number"/>

                <input
                    type="password"
                    placeholder="Password"
                />

                <button
                    onClick={()=>navigate("/kyc")}
                >
                    Continue
                </button>

            </div>

        </div>

    );

}

export default Signup;