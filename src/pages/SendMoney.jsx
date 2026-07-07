import { useNavigate } from "react-router-dom";
import "../styles/SendMoney.css";

function SendMoney(){

    const navigate = useNavigate();

    return(

        <div className="page">

            <div className="card">

            <h2>Send Money</h2>

            <h3>Recipient</h3>

            <p><strong>Priya Ramesh</strong></p>

            <div className="summary">

            <p>
            <span>University</span>
            <span>University of Manchester</span>
            </p>

            <p>
            <span>Country</span>
            <span>United Kingdom 🇬🇧</span>
            </p>

            </div>

            <hr />

        <select>

            <option>Priya Ramesh</option>

            <option>Rahul Sharma</option>

            </select>

            <input
                placeholder="Amount (INR)"
            />

                <select>

                    <option>Tuition Fees</option>

                    <option>Living Expenses</option>

                    <option>Emergency</option>

                </select>

                <div className="summary">

                    <p>

                        <span>Transfer Amount</span>

                        <span>₹10,00,000</span>

                    </p>

                    <p>

                        <span>Platform Fee</span>

                        <span>₹5,000</span>

                    </p>

                    <p>

                        <span>Bank Charges</span>

                        <span>₹500</span>

                    </p>

                    <p>

                        <span>TCS</span>

                        <span>₹59,000</span>

                    </p>

                    <hr/>

                    <p>

                        <strong>Total Debit</strong>

                        <strong>₹10,64,500</strong>

                    </p>

                    <p>

                    <span>Recipient Gets</span>

                    <span>£7,850.20</span>

                    </p>

                </div>

                <button
                    onClick={()=>navigate("/transferstatus")}
                >
                    Confirm Transfer
                </button>

            </div>

        </div>

    );

}

export default SendMoney;