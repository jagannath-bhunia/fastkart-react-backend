import React, { useEffect, useState } from 'react'
import { authget, authpost, get } from '../../utils/service';
import Switch from "react-switch";

function User() {
    const [allUser, setAllUser] = useState([]);
    useEffect(() => {
        fetchUser();

    }, []);

    function fetchUser() {
        const data = {
            user_id: localStorage.getItem('user_id')
        }
        authget('/api/all-user')
            .then((response) => {
                console.log(response.data);
                setAllUser(response.data.users);
            })
            .catch(function (error) {
                console.log(error);

            });
    }

    const handleChange = state =>{
      
        const data = {
            user_id: localStorage.getItem('user_id'),
            status: state
          }
        console.log(data);
        authpost(`/api/user-changestatus`, data)
        .then((response) => {
            setAllUser(response.data.users);
            console.log(response.data);
            
        })
        .catch(function (error) {
            console.log(error);

        });
    }
    return (
        <div className="content-wrapper">
            <section className="content-header">
                <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-6">
                            <h1>DataTables</h1>
                        </div>
                        <div className="col-sm-6">
                            <ol className="breadcrumb float-sm-right">
                                <li className="breadcrumb-item"><a href="#">Home</a></li>
                                <li className="breadcrumb-item active">DataTables</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </section>
            <section className="content">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <div className="card">
                                <div className="card-header">
                                    <h3 className="card-title">DataTable with minimal features & hover style</h3>
                                </div>
                                <div className="card-body">
                                    <table className="table table-bordered table-hover">
                                        <thead>
                                            <tr style={{ backgroundColor: '#17a2b8' }}>
                                                <th>Name</th>
                                                <th>Email</th>
                                                <th>Status</th>
                                                <th>Action</th>

                                            </tr>
                                        </thead>
                                        <tbody>
                                            {allUser && allUser.map((data) => (
                                                <tr key={data.id}>
                                                    <td>{data.name}</td>
                                                    <td> {data.email}</td>
                                                    <td className="text-center">
                                                        <Switch onChange={handleChange} checked={data.status=='1'? true:false} />
                                                    </td>
                                                    <td> 4</td>

                                                </tr>
                                            ))}


                                        </tbody>

                                    </table>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default User;
