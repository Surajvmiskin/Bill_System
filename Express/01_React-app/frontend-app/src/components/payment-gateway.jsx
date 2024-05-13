import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const PaymentGateway = () => {
    const [billNo, setBillNo] = useState('');
    const [remainingAmount, setRemainingAmount] = useState(null);
    const [connectionType, setConnectionType] = useState('');
    const history = useNavigate();

    useEffect(() => {
        if (billNo && connectionType) {
            // Fetch the remaining amount from the database
            // Adjust the API endpoint as necessary
            fetch(`/api/get-remaining-amount/${billNo}/${connectionType}`)
                .then(response => response.json())
                .then(data => setRemainingAmount(data.amount))
                .catch(error => console.error('Error fetching data:', error));
        }
    }, [billNo, connectionType]);

    const handleBillNoChange = (event) => {
        setBillNo(event.target.value);
    };

    const handleConnectionTypeChange = (event) => {
        setConnectionType(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Redirect to the payment page
        history.push(`/payment-page/${billNo}`);
    };

    return (
        <main className="page payment-page">
            <section className="clean-block payment-form dark">
                <div className="container">
                    <div className="block-heading">
                        <h2 className="text-info">Payment</h2>
                    </div>
                    <div>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group" style={{ background: 'none', border: 'none' }}>
                                <div id="formdiv">
                                    <div className="row" style={{ marginRight: '0px', marginLeft: '0px', paddingTop: '24px' }}>
                                        <div className="col-md-8 offset-md-1">
                                            <p style={{ marginLeft: '2%', fontFamily: 'Roboto, sans-serif', fontSize: '24px' }}><strong>Bill no</strong></p>
                                        </div>
                                        <div className="col-md-10 offset-md-1">
                                            <input
                                                className="form-control"
                                                type="text"
                                                style={{ marginLeft: '0px', fontFamily: 'Roboto, sans-serif' }}
                                                name="BillNo"
                                                placeholder="Enter your bill no"
                                                value={billNo}
                                                onChange={handleBillNoChange}
                                            />
                                        </div>
                                    </div>
                                    <div className="row" style={{ marginRight: '0px', marginLeft: '0px', paddingTop: '24px' }}>
                                        <div className="col-md-8 offset-md-1">
                                            <p style={{ marginLeft: '2%', fontFamily: 'Roboto, sans-serif', fontSize: '24px' }}><strong>Type</strong></p>
                                        </div>
                                        <div className="col-md-10 offset-md-1">
                                            <select
                                                className="form-select"
                                                style={{ fontFamily: 'Roboto, sans-serif' }}
                                                name="connectionType"
                                                value={connectionType}
                                                onChange={handleConnectionTypeChange}
                                            >
                                                <option value="">Select Type</option>
                                                <option value="domestic">Domestic</option>
                                                <option value="commercial">Commercial</option>
                                            </select>
                                        </div>
                                    </div>
                                    {remainingAmount !== null && (
                                        <div className="row" style={{ paddingTop: '24px' }}>
                                            <div className="col-md-8 offset-md-1">
                                                <p style={{ fontFamily: 'Roboto, sans-serif', fontSize: '18px' }}>
                                                    Remaining Amount to Pay: ${remainingAmount}
                                                </p>
                                            </div>
                                        </div>
                                    )}
                                    <div className="row" style={{ marginRight: '0px', marginLeft: '0px', paddingTop: '24px' }}>
                                        <div className="col-12 col-md-4 offset-md-4">
                                            <button className="btn btn-light btn-lg" id="pay_bill_button1" style={{ marginLeft: '13px' }} type="submit">Pay Bill</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default PaymentGateway;