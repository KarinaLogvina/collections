import { Link } from "react-router-dom";

const Start = () => {
    return (
        <>
            <div className="w-full bg-center bg-no-repeat bg-cover" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1616663395731-d70897355fd8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80')` }}>
                <div className="w-full h-screen bg-opacity-50 bg-black flex justify-center items-center">
                    <div className="mx-4 text-center text-white">
                        <h1 className="font-bold text-6xl mb-4">Fill your collections</h1>
                        <h2 className="font-bold text-3xl mb-12">Big marketplase for collections</h2>
                        <div>
                            <Link to="/login" className="uppercase border-2 border-indigo-800 bg-indigo-800 rounded-md font-bold text-white px-4 py-3 transition duration-300 ease-in-out hover:bg-blue-500 hover:text-white mr-6">
                                Sign In
                            </Link>
                            <Link to="/registration" className="uppercase border-2 border-white rounded-md font-bold text-white px-4 py-3 transition duration-300 ease-in-out hover:bg-blue-500 hover:text-white mr-6">
                                Sign Up
                            </Link>
                        </div>
                    </div>
                    <div className="absolute bottom-14">
                        <p className="border-2 border-white rounded-md font-bold text-white px-4 py-3 transition duration-300 ease-in-out hover:bg-blue-500 hover:text-white mr-6">
                            See collections
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Start;