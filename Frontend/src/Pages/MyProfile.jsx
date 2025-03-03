import React, { useState } from "react";
import { assets } from "../assets/assets_frontend/assets";

const MyProfile = () => {
  const [userData, setUserData] = useState({
    name: "Shreyas Gadave",
    image: assets.profile_pic,
    email: "shreyasgadave777@gmail.com",
    phone: "7028934703",
    address: {
      line1: "Main Road Kolhapur",
      line2: "Ram Mandir",
    },
    gender: "Male",
    dob: "1999-02-02",
  });

  const [isEdit, setIsEdit] = useState(false);
  return (
    <div>
      <img src={userData.image} alt="" />
      {isEdit ? 
        <input
          type="text"
          value={userData.name}
          onChange={(e) =>
            setUserData((prev) => ({ ...prev, name: e.target.value }))
          }
        />
       : 
        <p>{userData.name}</p>
      }

      <hr />
      <div>
        <p>CONTACT INFORMATION</p>
        <div>
          <p>Email id:</p>
          <p>{userData.email}</p>
          <p>Phone:</p>
          {isEdit ? (
            <input
              type="text"
              value={userData.phone}
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, phone: e.target.value }))
              }
            />
          ) : (
            <p>{userData.phone}</p>
          )}
          <p>Address</p>
          {isEdit ? (
            <p>
                        <input onChange={(e)=>setUserData(prev=>({...prev, address:{...prev.address,line1:e.target.value}}))} value={userData.address.line1} type="text" />
              <br />
              <input onChange={(e)=>setUserData(prev=>({...prev, address:{...prev.address,line2:e.target.value}}))} value={userData.address.line2} type="text" />
            </p>
          ) : (
            <p>
              {userData.address.line1} <br />
              {userData.address.line2}
            </p>
          )}
        </div>
      </div>
      <div>
        <p>BASIC INFORMATION</p>
        <div>
          <p>Gender:</p>
          {isEdit ? 
       <select onChange={(e)=>setUserData(prev=>({...prev, gender:e.target.value}))}>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
       </select>
      : 
        <p>{userData.gender}</p>
      }
        </div>
      </div>
    </div>
  );
};

export default MyProfile;