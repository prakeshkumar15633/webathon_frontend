import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import ReactLoading from 'react-loading';
import './Signin.css';

function Signin() {
    let [err, setErr] = useState('');
    let {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    let navigate = useNavigate();

    async function handleFormSubmit(user) {
        // console.log(user);
        // user = {
        //     id: "",
        //     email: "john@example.com",
        //     password: "hashed_password",
        //     name: "John Doe",
        //     gender: "Male",
        //     mobileNumber: "1171728822",
        //     room: {
        //         roomNo: "104",
        //         roomType: "AC",
        //         sharingNo: 5
        //     },
        //     checkInOut: [
        //         {}
        //     ],
        //     isPresent: true,
        //     joinDate: "2025-06-01",
        //     leaveRequests: [
        //         {
        //             reason: "",
        //             checkOutTime: "",
        //             checkInTime: ""
        //         }
        //     ],
        //     paymentBalance: 0,
        //     paymentStatus: true
        // }
        if (user.role == "user") {
            const res = await axios.post('http://localhost:4000/user-api/login', user);
            if (res.data.message === "Login successful") {
                localStorage.setItem("user", JSON.stringify(res.data.payload));
                localStorage.setItem("token", JSON.stringify(res.data.token));
                localStorage.setItem("userType", "user");
                navigate('/user-profile')
            } else {
                setErr(res.data.message);
            }
        }
        else if(user.role == "admin"){
            const res = await axios.post('http://localhost:4000/admin-api/login', user);
            if (res.data.message === "Login successful") {
                localStorage.setItem("user", JSON.stringify(res.data.payload));
                localStorage.setItem("token", JSON.stringify(res.data.token));
                localStorage.setItem("userType", "admin");
                navigate('/user-profile')
            } else {
                setErr(res.data.message);
            }
        }
        else{
            const res = await axios.post('http://localhost:4000/security-api/login', user);
            if (res.data.message === "Login successful") {
                localStorage.setItem("user", JSON.stringify(res.data.payload));
                localStorage.setItem("token", JSON.stringify(res.data.token));
                localStorage.setItem("userType", "security");
                navigate('/user-profile')
            } else {
                setErr(res.data.message);
            }
        }
    }

    return (
        <div>
            <h1 className="display-3 fs-2 text-center mb-3">Signin</h1>
            {err.length !== 0 && <p className="text-danger fs-3">{err}</p>}

            <form className="w-100 row mx-auto ps-3 pe-3" onSubmit={handleSubmit(handleFormSubmit)}>
                <div className="mb-3">
                    <label htmlFor="role" className="form-label">Select Role</label>
                    <select
                        id="role"
                        className="form-select shadow-sm"
                        {...register("role", { required: true })}
                    >
                        <option value="">-- Select Role --</option>
                        <option value="user">User</option>
                        <option value="security">Security</option>
                        <option value="admin">Admin</option>
                    </select>
                    {errors.role?.type === "required" && (
                        <span className="text-danger">Role is required</span>
                    )}
                </div>

                <div className="mb-1">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                        type="email"
                        id="email"
                        className="form-control shadow-sm"
                        placeholder="Email"
                        {...register("email", { required: true })}
                    />
                    {errors.email?.type === "required" && (
                        <span className="text-danger">Email is required</span>
                    )}
                </div>

                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input
                        type="password"
                        id="password"
                        className="form-control shadow-sm"
                        placeholder="Password"
                        {...register("password", { required: true })}
                    />
                    {errors.password?.type === "required" && (
                        <span className="text-danger">Password is required</span>
                    )}
                </div>

                <button className="btn btn-success col-sm-6 col-md-4 col-lg-3 d-block mx-auto mb-3">Signin</button>
            </form>
        </div>
    );
}

export default Signin;
