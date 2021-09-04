import axios from 'axios';
import React, { useState } from 'react';
import { useHistory } from 'react-router';

function Register(props) {
    const [userData, setUserData] = useState({
        userName: "",
        fullName: "",
        emailID: "",
        password: "",
        mobile: ""
    })
    const history = useHistory();
    const register = e => {
        e.preventDefault();
        console.log(userData);
        axios({
            url: 'http://localhost:8080/register',
            method: 'post',
            data: {
                query: `
                    mutation{
                        register(userInput:{
                            userName:"${userData.userName}",
                            fullName:"${userData.fullName}",
                            emailID:"${userData.emailID}",
                            mobile:"${userData.mobile}",
                            password:"${userData.password}"
                        })
                        {
                            _id,
                            userName,
                            emailID
                        }
                    }
                `
            }

        }).then(res=>{
            let response = res.data.data;
            alert(response.register._id, response.register.userName)
            history.push('/')
        }).catch(err=>console.log(err))
    }
    return (
        <div className="container" style={{ padding: '40px' }}>
            <div className="row">
                <div className="col-md-4 py-5 bg-primary text-white text-center ">
                    <div className=" ">
                        <div className="card-body">
                            {/* <img src="http://www.ansonika.com/mavia/img/registration_bg.svg" alt="" style={{ width: "10%" }} /> */}
                            <h2 className="py-3">Registration</h2>
                            <p>Please register here to add self to view daily news</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-8 py-5 border">
                    <h4 className="pb-4">Please fill with your details</h4>
                    <form onSubmit={e => register(e)}>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <input id="Full Name" name="Full Name" placeholder="Full Name" className="form-control" type="text" onChange={e => setUserData({ ...userData, fullName: e.target.value })} />
                            </div>
                            <div className="form-group col-md-6">
                                <input type="email" className="form-control" id="inputEmail4" placeholder="Email" onChange={e => setUserData({ ...userData, emailID: e.target.value })} />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <input id="Mobile No." name="Mobile No." placeholder="Mobile No." className="form-control" required="required" type="text" onChange={e => setUserData({ ...userData, mobile: e.target.value })} />
                            </div>
                            <div className="form-group col-md-6">
                                <input id="Password" name="Password" placeholder="Password" className="form-control" required="required" type="password" onChange={e => setUserData({ ...userData, password: e.target.value })} />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <input id="UserName" name="UserName" placeholder="User Name" className="form-control" required="required" type="text" onChange={e => setUserData({ ...userData, userName: e.target.value })} />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group">
                                <div className="form-group">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="invalidCheck2" required />
                                        <label className="form-check-label" >
                                            <small>By clicking Submit, you agree to our Terms & Conditions, Visitor Agreement and Privacy Policy.</small>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="form-row">
                            <button type="submit" className="btn btn-danger">Submit</button>
                        </div>
                        <div className="form-row">
                            <p>Already Member ? <a href='/'>Please login here</a> </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Register;