import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";
import { Link } from 'react-router-dom';
import * as Yup from "yup";
import { useHistory } from "react-router";

const SignUp = () => {
    let history = useHistory();

    const onSubmit = (data) => {
        axios.post("http://localhost:3002/register", data).then(() => {
            history.push('/login');
        })
    }

    const initialValues = {
        username: "",
        mail: "",
        password: "",
    }

    const validationSchema = Yup.object().shape({
        username: Yup.string().min(3).max(15).required("Please enter your username"),
        mail: Yup.string().email().required("Please enter your mail"),
        password: Yup.string().required("Please enter your password").matches(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*).{6,12}$/, "Must Contain 6 Characters, One Uppercase, One Lowercase and One Number"),
    })

    return (
        <div className="min-w-screen min-h-screen bg-gray-900 flex items-center justify-center px-5 py-5">
            <div className="bg-gray-100 text-gray-500 rounded-3xl shadow-xl w-1/2 overflow-hidden signin">
                <div className="md:flex w-full">
                    <div className="hidden md:block w-1/2 bg-indigo-500 py-10 px-10" style={{ backgroundImage: `url("https://images.unsplash.com/photo-1495929427389-a6451f2e01fa?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")` }}>
                    </div>
                    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
                        <div className="w-full md:w-1/2 py-10 px-5 md:px-10">
                            <div className="text-center mb-2">
                                <h1 className="font-bold text-3xl text-gray-900">REGISTER</h1>
                                <p>Enter your information to register</p>
                            </div>
                            <div className="text-center mb-5">
                                <p>Already have an account? <Link to="/login" className="font-bold text-indigo-500" >Sign In</Link></p>
                            </div>
                            <Form>
                                <div>
                                    <div className="flex -mx-3">
                                        <div className="w-full px-3 mb-5">
                                            <label htmlFor="" className="text-xs font-semibold px-1">Username</label>
                                            <div className="flex">
                                                <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-account-outline text-gray-400 text-lg"></i></div>
                                                <Field name="username" className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="Tiiksi" />
                                            </div>
                                            <ErrorMessage className="error" name="username" component="span" />
                                        </div>
                                    </div>
                                    <div className="flex -mx-3">
                                        <div className="w-full px-3 mb-5">
                                            <label htmlFor="" className="text-xs font-semibold px-1">Email</label>
                                            <div className="flex">
                                                <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-email-outline text-gray-400 text-lg"></i></div>
                                                <Field name="mail" className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="johnsmith@example.com" />
                                            </div>
                                            <ErrorMessage className="error" name="mail" component="span" />
                                        </div>
                                    </div>
                                    <div className="flex -mx-3">
                                        <div className="w-full px-3 mb-12">
                                            <label htmlFor="" className="text-xs font-semibold px-1">Password</label>
                                            <div className="flex">
                                                <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-lock-outline text-gray-400 text-lg"></i></div>
                                                <Field name="password" type="password" className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="************" />
                                            </div>
                                            <ErrorMessage className="error" name="password" component="span" />
                                        </div>
                                    </div>
                                    <div className="flex -mx-3">
                                        <div className="w-full px-3 mb-5">
                                            <button type="submit" className="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold">REGISTER NOW</button>
                                        </div>
                                    </div>
                                </div>
                            </Form>
                        </div>
                    </Formik>
                </div>
            </div>
        </div >

    )
}

export default SignUp;