import axios from 'axios';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';



const AddUser = () => {


    let history = useHistory();

    const [user, setUser] = useState({
        name: "",
        usename: " ",
        email: " ",
        phone: " ",
        website: " ",
    });

    const { name, username, email, phone, website } = user;

    const onInputChange = (event) => {

        setUser({ ...user, [event.target.name]: event.target.value })
    }

    const onSubmits = async event => {
        event.preventDefault();
        await axios.post("http://localhost:3001/users", user);
        history.push("/");

    }

    return (
        <>
            <h2>AddUser</h2>
            <form onSubmit={event => onSubmits(event)}>
                <div className="form-group">
                    <input
                        type="text"
                        className=" form-control form-control-lg"
                        placeholder="Enter your First Name "
                        name="name"
                        value={name}
                        onChange={event => onInputChange(event)}
                    />
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        className=" form-control form-control-lg"
                        placeholder="Enter your User Name "
                        name="username"
                        value={username}
                        onChange={event => onInputChange(event)}
                    />
                </div>

                <div className="form-group">
                    <input
                        type="email"
                        className=" form-control form-control-lg"
                        placeholder="Enter your Email Address "
                        name="email"
                        value={email}
                        onChange={event => onInputChange(event)}
                    />
                </div>

                <div className="form-group">
                    <input
                        type="number"
                        className=" form-control form-control-lg"
                        placeholder="Enter your Phone Number"
                        name="phone"
                        value={phone}
                        onChange={event => onInputChange(event)}
                    />
                </div>

                <div className="form-group">
                    <input
                        type="text"
                        className=" form-control form-control-lg"
                        placeholder="Enter your website "
                        name="website"
                        value={website}
                        onChange={event => onInputChange(event)}
                    />
                </div>

                <button className="btn btn-primary btn-block mr-2">Add User</button>
            </form>
        </>
    );

}


export default AddUser;