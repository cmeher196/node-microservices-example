import axios from 'axios';
import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
function Login(props) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory()

    const login = (e) => {
        e.preventDefault();
        console.log(username, password)
        axios({
            url: `http://localhost:8080/login`,
            method: 'post',
            data: {
                query: `
                            query{
                                 login(email:"${username}",password:"${password}"){
                                     token,
                                     userID,
                                     tokenExpiration,
                                     fullName
                                 }
                             }
                `
            }
        }).then(res => {
            let response = res.data.data;
            sessionStorage.setItem('token', response.login.token);
            sessionStorage.setItem('tokenExpiration', response.login.tokenExpiration);
            sessionStorage.setItem('userID', response.login.userID)
            sessionStorage.setItem('userName', response.login.fullName)
            let query = `
            query{
                isAuthenticated(token:"${sessionStorage.getItem('token')}"){
                    isAuthenticated
                }
            }
        `
            axios.get(`http://localhost:8080/isAuthenticated?query=${query}`, {
                headers: {
                    'content-type': 'application/json'
                }
            }).then(res => {
                let response = res.data.data.isAuthenticated.isAuthenticated;
                sessionStorage.setItem('isAuthenticated',response)
                // console.log(isAuthenticated) 
                setInterval(() => {
                    sessionStorage.getItem('isAuthenticated')? history.push('dashboard') :alert('hello')
                }, 1000);
                

            })
                .catch(err => console.log(err))

           

        })
            .catch(err => console.log(err))
    }
    return (
        <div className="container" style={{ padding: '50px' }}>
            <div className="row">
                <div className="col-md-4 py-5 bg-primary text-white text-center ">
                    <div className=" ">
                        <div className="card-body">
                            <h2 className="py-3">Login</h2>
                            <h6>Welcome News 24 x 7. Please login to view the currents news</h6>
                        </div>
                    </div>
                </div>
                <div className="col-md-8 py-5 border">
                    <h4 className="pb-4">Please fill with your details</h4>
                    <form onSubmit={e => login(e)}>
                        <div className="row">
                            <div className="form-group col">
                                <input placeholder="Enter Email Id" id='login' className="form-control" type="text" onChange={e => setUsername(e.target.value)} />
                            </div>
                            <div className="form-group col-md-6">
                                <input type="password" className="form-control" id='password' placeholder="Enter Password" onChange={e => setPassword(e.target.value)} />
                            </div>
                        </div>
                        <div className="form-row">
                            <button type="submit" className="btn btn-danger submit">Submit</button>
                        </div>
                        <div className="form-row">
                            <p>New to this site ? <Link to='/register'>register here</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;