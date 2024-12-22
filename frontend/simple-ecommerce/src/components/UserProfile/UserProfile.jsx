import React from 'react'
import './UserProfile.css'  
import axios from 'axios';
import { useState, useEffect } from 'react';
import api from '../../api/api.jsx';


const UserProfile = () => {
  const [user, setUser] = useState("")
  const [isEditing, setIsEditing] = useState(false); 
  const [editedUser, setEditedUser] = useState({}); 

  const getUser = async () => {
    try {
      const res = await api.get(`/user/${localStorage.getItem("userId")}`)
      setUser(res.data.response)
      setEditedUser(res.data.response)
      // console.log("user:", user)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    if(!user){
      getUser()
    }}
  , [user])

  const toggleEditMode = () => {
    setIsEditing(!isEditing); // Düzenleme modunu aç/kapat
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedUser({ ...editedUser, [name]: value });
  };

  const handleSave = async () => {
    try {
      await api.put(`/user/${localStorage.getItem("userId")}`, editedUser);
      setUser(editedUser); // Kullanıcı bilgilerini güncelle
      toggleEditMode(); // Düzenleme modundan çık
      alert('Kullanıcı bilgileri başarıyla güncellendi!');
    } catch (error) {
      console.error('Kullanıcı bilgileri güncellenirken hata oluştu:', error);
    }
  };

  return (
    <div className="profile-container">
      <div className="profile-card">
      {isEditing ? (
          <div className="profile-edit">
            <input
              type="text"
              name="username"
              id='input-username'
              value={editedUser.username}
              onChange={handleChange}
              className="profile-name"
            />
            <input
              type="email"
              name="email"
              id='input-email'
              value={editedUser.email}
              onChange={handleChange}
              className="profile-email"
            />
            <input
              type="text"
              name="address"
              id='input-address'
              value={editedUser.address}
              onChange={handleChange}
              className="profile-address"
            />
            <div>
              <button className="profile-save-btn" onClick={handleSave}>
                Save
              </button>
              <button className="profile-cancel-btn" onClick={toggleEditMode}>
                Cancel
              </button>
            </div>
          </div>
        ) : (
          <div>
            <h1 className="profile-name">{user.username}</h1>
            <p className="profile-email">{user.email}</p>
            <p className="profile-address">{user.address}</p>
            <button className="profile-edit-btn" onClick={toggleEditMode}>Edit Profile</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserProfile;