import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';



const Home = () => {

    const [users, setUser] = useState([]);


    useEffect(() => {
        loadUsers();

    }, [])                           // this blank array is given so that this function
    // only run onle otherwise it will run infinite time



    const loadUsers = async () => {

        const result = await axios.get("http://localhost:3001/users");
        setUser(result.data.reverse());         //the data will come at the top whatever we are 
                                              //adding it is happening reverse function 

    }

    const deleteUser = async id => {

        await axios.delete(`http://localhost:3001/users/${id}`);
        loadUsers();
    }

    return (
        <div className="container">
            <div className="py-4">
                <h1>Hello World! </h1>
                <table class="table border shadow">
                    <thead class="thead-dark">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">User Name</th>
                            <th scope="col">Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => (
                                <tr>
                                    <th scope="row"> {index + 1} </th>
                                    <td>{user.name}</td>
                                    <td>{user.username}</td>
                                    <td>{user.email}</td>
                                    <td>
                                        <Link className="btn btn-primary mr-2" to={`/users/${user.id}`}>View</Link>
                                        <Link className="btn btn-outline-primary mr-2" to={`/users/edit/${user.id}`}>Edit</Link>
                                        <Link className="btn btn-danger" onClick={() => deleteUser(user.id)} >Delete</Link>

                                    </td>
                                </tr>
                            ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}



export default Home;