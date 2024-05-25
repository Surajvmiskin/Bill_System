import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const PaymentGateway = () => {
    const [billNo, setBillNo] = useState('');
    const [remainingAmount, setRemainingAmount] = useState(null);
    const [email, setEmail] = useState('');  // Changed from connectionType to email
    const navigate = useNavigate();

    useEffect(() => {
        if (billNo && email) {
            const url = `http://localhost:3001/api/get-remaining-amount/${encodeURIComponent(billNo)}/${encodeURIComponent(email)}`;
            fetch(url)
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`HTTP error! status: ${response.status}`);
                    }
                    return response.json();
                })
                .then(data => {
                    if (data.amount !== undefined) {
                        setRemainingAmount(data.amount);
                    } else {
                        console.error('No amount returned:', data);
                    }
                })
                .catch(error => {
                    console.error('Error fetching data:', error);
                });
        }
    }, [billNo, email]);

    const handleBillNoChange = (event) => {
        const input = event.target.value;
        // Allow only digits and limit length to 6
        if (input.match(/^\d{0,6}$/)) {
            setBillNo(input);
        }
    };

    const handleEmailChange = (event) => {  // Changed from handleConnectionTypeChange
        setEmail(event.target.value);  // Changed from setConnectionType
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        // Validate email and bill number before submitting
        if (!email || !billNo) {
            alert('Both email and bill number are required.');
            return;
        }
        if (billNo.length !== 6) {
            alert('Bill number must be exactly 6 digits.');
            return;
        }

        try {
            const response = await fetch(`http://localhost:3001/api/get-remaining-amount/${encodeURIComponent(billNo)}/${encodeURIComponent(email)}`);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            if (data.amount !== undefined) {
                setRemainingAmount(data.amount);
                // Update bill_paid to true
                const payResponse = await fetch('http://localhost:3001/api/pay-bill', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ billNo, email }),
                });
                if (!payResponse.ok) {
                    throw new Error(`HTTP error! status: ${payResponse.status}`);
                }
                const payData = await payResponse.json();
                console.log('Bill paid successfully:', payData);
                alert('Payment successful! Your bill has been paid.');
            } else {
                console.error('No amount returned:', data);
            }
        } catch (error) {
            console.error('Error fetching remaining amount:', error);
            alert('Failed to fetch remaining amount. Please try again.');
        }
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
                                            <p style={{ marginLeft: '2%', fontFamily: 'Roboto, sans-serif', fontSize: '24px' }}><strong>Email</strong></p>
                                        </div>
                                        <div className="col-md-10 offset-md-1">
                                            <input
                                                className="form-control"
                                                type="email"
                                                style={{ marginLeft: '0px', fontFamily: 'Roboto, sans-serif' }}
                                                name="email"
                                                placeholder="Enter your email"
                                                value={email}
                                                onChange={handleEmailChange}
                                            />
                                        </div>
                                    </div>
                                    {remainingAmount !== null && (
                                        <div className="row" style={{ paddingTop: '24px' }}>
                                            <div className="col-md-8 offset-md-1">
                                                <p style={{ fontFamily: 'Roboto, sans-serif', fontSize: '18px' }}>
                                                    Remaining Amount to Pay: {remainingAmount} Rs
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
                    </div></div></section></main>);
};

export default PaymentGateway;