import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Complaint = () => {
    const [formData, setFormData] = useState({
        category: '',
        description: '',
        urgency: '',
    });
    const [userType, setUserType] = useState(null);
    const [complaints, setComplaints] = useState([]); // Initialize as an empty array
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const user = JSON.parse(localStorage.getItem('user'));

            if (user && user.room && user.room.roomNo) {
                const complaintData = {
                    ...formData,
                    roomNo: user.room.roomNo,
                };

                setFormData(complaintData);
                console.log(complaintData);  

                let res = await axios.post('http://localhost:4000/user-api/complaints', complaintData);
                alert('Complaint submitted successfully');
            } else {
                throw new Error('User or room information is missing');
            }
        } catch (err) {
            console.error(err);
            alert(err.message);
        }
    };

    useEffect(() => {
        setUserType(localStorage.getItem('userType'));

        if (userType === 'admin') {
            async function fetchComplaints() {
                setLoading(true);
                try {
                    let response = await axios.get('http://localhost:4000/admin-api/complaints');
                    setComplaints(response.data.complaints);
                    console.log(response.data.complaints);  // Ensure the data fetched is as expected
                } catch (err) {
                    setError('Failed to fetch complaints');
                    console.error(err);
                } finally {
                    setLoading(false);
                }
            };

            fetchComplaints();
        }
    }, [userType]);

    return (
        <div className="container mt-4">
            {userType === 'user' && (
                <div>
                    <h2>Complaint & Maintenance Form</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label className="form-label">Category:</label>
                            <select
                                name="category"
                                value={formData.category}
                                onChange={handleChange}
                                required
                                className="form-select"
                            >
                                <option value="">-- Select Category --</option>
                                <option value="Electrical">Electrical</option>
                                <option value="Plumbing">Plumbing</option>
                                <option value="Cleanliness">Cleanliness</option>
                                <option value="Furniture">Furniture</option>
                                <option value="Others">Others</option>
                            </select>
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Urgency:</label>
                            <select
                                name="urgency"
                                value={formData.urgency}
                                onChange={handleChange}
                                required
                                className="form-select"
                            >
                                <option value="">-- Select Urgency --</option>
                                <option value="Low">Low</option>
                                <option value="Moderate">Moderate</option>
                                <option value="High">High</option>
                            </select>
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Description:</label>
                            <textarea
                                name="description"
                                value={formData.description}
                                onChange={handleChange}
                                placeholder="Explain the issue in detail..."
                                required
                                className="form-control"
                            />
                        </div>

                        <button type="submit" className="btn btn-primary">
                            Submit Complaint
                        </button>
                    </form>
                </div>
            )}

            {userType === 'admin' && (
                <div className='px-5'>
                    <h2>All Complaints</h2>
                    {loading && <p>Loading complaints...</p>}
                    {error && <p style={{ color: 'red' }}>{error}</p>}

                    {/* Display complaints in a table */}
                    <table className="table table-bordered mt-4">
                        <thead>
                            <tr>
                                <th>Category</th>
                                <th>Description</th>
                                <th>Room No</th>
                                <th>Urgency</th>
                            </tr>
                        </thead>
                        <tbody>
                            {complaints.length === 0 ? (
                                <tr>
                                    <td colSpan="4" className="text-center">
                                        No complaints available
                                    </td>
                                </tr>
                            ) : (
                                complaints.map((complaint, index) => (
                                    <tr key={index}>
                                        <td>{complaint.category}</td>
                                        <td>{complaint.description}</td>
                                        <td>{complaint.roomNo}</td>
                                        <td>{complaint.urgency}</td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default Complaint;
