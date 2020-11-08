import axios from 'axios';
import React, { useState ,useEffect } from 'react';
import { useHistory , useParams} from 'react-router-dom';



const EditUser = () => {


    let history = useHistory();

    const{id}=useParams();

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

    useEffect(()=>{
        loadUser();
    } , [])

    const onSubmits = async event => {
        event.preventDefault();
        await axios.put(`http://localhost:3001/users/${id}`, user);
        history.push("/");

    }

    const loadUser =async()=>{
    const result = await axios.get(`http://localhost:3001/users/${id}`);
    setUser(result.data);
    
    }

    return (
        <>
            <h2>Edit A User</h2>
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

                <button className="btn btn-warning btn-block mr-2">Update User</button>
            </form>
        </>
    );

}


export default EditUser;