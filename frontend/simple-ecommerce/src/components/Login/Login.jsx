import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Login.css';
import api from '../../api/api';

const Login = () => {

    const [formData, setFormData] = useState({
        email: "",
        password: ""
    })
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    }; 
        
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:3000/api/auth/login", formData)
            console.log("response: ", res.data.response)
            const userId = res.data.response.user.id
            localStorage.setItem("authToken", res.data.response.token);
            localStorage.setItem("userId", userId);
            console.log("authToken: ", localStorage.getItem("authToken"))
            console.log("userId: ", localStorage.getItem("userId"))
            alert("Giriş başarılı");
            window.location.href = "/";
            // console.log("Kullanıcı başarıyla oluşturuldu:", response.data);
        } catch (error) {
            console.error("Giriş yapılırken hata oluştu:", error);
        }        
    };

    return (
        <div className="login-container">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
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
                <button className="login-button" type="submit">Login</button>
            </form>
            <p>Do you haven't an acoount? So <a id='navigate-register' onClick={() => navigate("/register")}>create an account</a>.</p>
        </div>
    );
};

export default Login;

