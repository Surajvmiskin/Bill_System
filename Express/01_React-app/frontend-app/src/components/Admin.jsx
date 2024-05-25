import React, { useState, useEffect } from 'react';

const Admin = () => {
    function convertDate(inputFormat) {
        function pad(s) { return (s < 10) ? '0' + s : s; }
        var d = new Date(inputFormat);
        return [d.getFullYear(), pad(d.getMonth() + 1), pad(d.getDate())].join('-');
    }

    const handleSubmit = (index) => {
        const user = users[index];
        fetch(`http://localhost:3001/api/users/${user._id}`, { // Ensure the URL is correct
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user)
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.text();  // Use text() first to handle empty responses
            })
            .then(text => text.length ? JSON.parse(text) : {})
            .then(data => {
                alert('User updated successfully');
                // Update local state if necessary
            })
            .catch(error => {
                console.error('Error updating user:', error);
                alert('Failed to update user');
            });
    };

    const handleBillPaidChange = (index) => {
        const newUsers = [...users];
        newUsers[index].bill_paid = !newUsers[index].bill_paid;
        setUsers(newUsers);
    };

    const [users, setUsers] = useState([]);
    const [newUser, setNewUser] = useState({
        name: '',
        bill_no: '',
        Start_date: '',
        Billing_date: '',
        Due_date: '',
        Total_Amount: '',
        email: '', // Ensure email is included
        password: '' // Ensure password is included if required
    });

    useEffect(() => {
        fetch('http://localhost:3001/api/users')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => setUsers(data))
            .catch(error => console.error('Error fetching users:', error));
    }, []);

    const handleInputChange = (index, field, value) => {
        const newUsers = [...users];
        newUsers[index][field] = value;
        setUsers(newUsers);
    };

    const handleNewUserChange = (field, value) => {
        if (field === 'Start_date' || field === 'Billing_date' || field === 'Due_date') {
            value = convertDate(value);
        }
        setNewUser(prev => ({ ...prev, [field]: value }));
    };

    const handleAddUser = () => {
        if (!newUser.email) {
            alert('Email is required');
            return;
        }
        fetch('http://localhost:3001/api/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newUser)
        })
            .then(response => response.json())
            .then(data => {
                setUsers([...users, data]);
                setNewUser({ name: '', bill_no: '', Start_date: '', Billing_date: '', Due_date: '', Total_Amount: '', email: '', password: '' }); // Reset form
                alert('User added successfully');
            })
            .catch(error => {
                console.error('Error adding user:', error);
                alert('Failed to add user');
            });
    };

    return (
        <div className="container mt-5">
            <h3 className="text-dark mb-4"><strong>Consumer Bills</strong></h3>
            <div className="card shadow">
                <div className="card-header py-3">
                    <p className="fw-bold text-primary m-0">Consumer Bills</p>
                </div>
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th>Bill Number</th>
                                    <th>Start Date</th>
                                    {/* <th>Billing Date</th> */}
                                    <th>Due Date</th>
                                    <th>Total Amount</th>
                                    <th>Email</th> {/* New column for Email */}
                                    <th>Actions</th>
                                    <th>Paid</th> {/* New column for Paid status */}
                                </tr>
                            </thead>
                            <tbody>
                                {users.map((user, index) => (
                                    <tr key={index}>
                                        <td><input type="text" value={user.bill_no} onChange={(e) => handleInputChange(index, 'bill_no', e.target.value)} /></td>
                                        <td><input type="date" value={user.Start_date} onChange={(e) => handleInputChange(index, 'Start_date', e.target.value)} /></td>
                                        {/* <td><input type="date" value={user.Billing_date} onChange={(e) => handleInputChange(index, 'Billing_date', e.target.value)} /></td> */}
                                        <td><input type="date" value={user.Due_date} onChange={(e) => handleInputChange(index, 'Due_date', e.target.value)} /></td>
                                        <td><input type="number" value={user.Total_Amount} onChange={(e) => handleInputChange(index, 'Total_Amount', e.target.value)} /></td>
                                        <td><input type="email" value={user.email} onChange={(e) => handleInputChange(index, 'email', e.target.value)} /></td> {/* Email input */}
                                        <td>
                                            <button onClick={() => handleSubmit(index)}>Save</button>
                                        </td>
                                        <td>
                                            <input
                                                type="checkbox"
                                                checked={user.bill_paid}
                                                onChange={() => handleBillPaidChange(index)}
                                            />
                                            {user.bill_paid ? 'Paid' : 'Unpaid'}
                                        </td>
                                    </tr>
                                ))}
                                <tr>
                                    {/* Inputs for adding a new user */}
                                    <td><input type="text" value={newUser.bill_no} onChange={(e) => handleNewUserChange('bill_no', e.target.value)} /></td>
                                    <td><input type="date" value={newUser.Start_date} onChange={(e) => handleNewUserChange('Start_date', e.target.value)} /></td>
                                    {/* <td><input type="date" value={newUser.Billing_date} onChange={(e) => handleNewUserChange('Billing_date', e.target.value)} /></td> */}
                                    <td><input type="date" value={newUser.Due_date} onChange={(e) => handleNewUserChange('Due_date', e.target.value)} /></td>
                                    <td><input type="number" value={newUser.Total_Amount} onChange={(e) => handleNewUserChange('Total_Amount', e.target.value)} /></td>
                                    <td><input type="email" value={newUser.email} onChange={(e) => handleNewUserChange('email', e.target.value)} /></td> {/* Email input */}
                                    <td>
                                        <button onClick={handleAddUser}>Add User</button>
                                    </td>
                                    <td></td> {/* Empty cell for alignment */}
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Admin;