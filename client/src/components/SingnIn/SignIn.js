import { Link } from "react-router-dom"
import { useState } from "react";
import { useHistory } from "react-router";
import axios from "axios";

const SignIn = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    let history = useHistory();

    const login = () => {
        const data = { username: username, password: password }
        axios.post("http://localhost:3002/register/login", data).then((res) => {
            if (res.data.error) {
                setError(res.data.error);
            } else {
                localStorage.setItem("accessToken", res.data);
                history.push('/users');
            }
        }, {
            headers: {
                accessToken: localStorage.getItem("accessToken")
            }
        })
    }
    return (
        <div className="min-w-screen min-h-screen bg-gray-900 flex items-center justify-center px-5 py-5">
            <div className="bg-gray-100 text-gray-500 rounded-3xl shadow-xl w-1/2 overflow-hidden signin">
                <div className="md:flex w-full">
                    <div className="hidden md:block w-1/2 bg-indigo-500 py-10 px-10" style={{ backgroundImage: `url("https://images.unsplash.com/photo-1623658839098-303e856176ee?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1048&q=80")` }}></div>
                    <div className="w-full md:w-1/2 py-10 px-5 md:px-10">
                        <div className="text-center mb-2">
                            <h1 className="font-bold text-3xl text-gray-900">SIGN IN</h1>
                            <p>Please enter your login and password</p>
                        </div>
                        <div className="text-center mb-5">
                            <p>If you don't have an account yet? Please <Link to="/register" className="font-bold text-indigo-500" >Sign Up</Link></p>
                        </div>
                        <div>
                            <div className="flex -mx-3">
                                <div className="w-full px-3 mb-5">
                                    <label htmlFor="" className="text-xs font-semibold px-1">Username</label>
                                    <div className="flex">
                                        <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-account-outline text-gray-400 text-lg"></i></div>
                                        <input type="text" onChange={(e) => { setUsername(e.target.value) }} className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="Tiiksi" />
                                    </div>
                                </div>
                            </div>
                            <div className="flex -mx-3">
                                <div className="w-full px-3 mb-5">
                                    <label htmlFor="" className="text-xs font-semibold px-1">Password</label>
                                    <div className="flex">
                                        <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-lock-outline text-gray-400 text-lg"></i></div>
                                        <input type="password" onChange={(e) => { setPassword(e.target.value) }} className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="************" />
                                    </div>
                                </div>
                            </div>
                            <div className="flex -mx-3">
                                <div className="w-full px-3 mb-5">
                                    <button onClick={login} className="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold" >SIGN IN</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default SignIn;