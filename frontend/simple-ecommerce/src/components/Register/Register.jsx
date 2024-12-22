import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Register.css';
import api from '../../api/api';

const Register = () => {
    const [formData, setFormData] = useState({
        username: '',
        address: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        if(formData.password !== formData.confirmPassword){
            alert("Parola uyuşmamaktadır. Lütfen yeniden deneyin.")
        }
        e.preventDefault();
        try {
            const response = await api.post("/auth", formData);
            alert("Kullanıcı başarıyla oluşturuldu");
            window.location.href = "/login";
            console.log("Kullanıcı başarıyla oluşturuldu:", response.data);
          } catch (error) {
            console.error("Kullanıcı oluşturulurken hata oluştu:", error);
          }        
    };

    return (
        <div className="register-container">
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="username">Name</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="address">Address</label>
                    <input
                        type="text"
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button className="register-button" type="submit">Register</button>
            </form>
            <p>Do you have an acoount already? So you can <a id='navigate-login' onClick={() => navigate("/login")}>login</a>.</p>
        </div>
    );
};

export default Register;