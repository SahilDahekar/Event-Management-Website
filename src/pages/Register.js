import {React,useState} from "react";
import { useNavigate } from "react-router-dom";


function Register() {

    const Navigate = useNavigate();
    const [credentials, setCredentials] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        Query: "",
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        const responce = await fetch("http://localhost:8000/api/Query", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({
                firstName: credentials.firstName,
                lastName: credentials.lastName,
                email: credentials.email,
                phoneNumber: credentials.phoneNumber,
                Query: credentials.Query,
            }),
        });
        const json = await responce.json();
        console.log(json);

        if (!json.success) {
            alert("enter valid credentials");
        }
        if (json.success) {
            Navigate("/");
        }
    };

    const onChange = (event) => {
        setCredentials({
            ...credentials,
            [event.target.name]: event.target.value,
        });
    };
    return (
        
        <form className="max-w-[800px] mx-auto mt-10">
            <div class="grid gap-6 mb-6 lg:grid-cols-2">
                <div>
                    <label
                        for="first_name"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                        First name
                    </label>
                    <input
                    name="firstName"
                        type="text"
                        id="first_name"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="First Name"
                        required=""
                        value={credentials.firstName}
                        onChange={onChange}
                    />
                </div>
                <div>
                    <label
                        for="last_name"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                        Last name
                    </label>
                    <input
                        type="text"
                        id="last_name"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Last Name"
                        name="lastName"
                        value={credentials.lastName}
                        onChange={onChange}
                        required=""
                    />
                </div>
         
                <div>
                    <label
                        for="phone"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                        Phone number
                    </label>
                    <input
                        type="tel"
                        id="phone"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Phone number"
                        name="phoneNumber"
                        value={credentials.phoneNumber}
                        onChange={onChange}
                    />
                </div>
            
            
            </div>
            <div class="mb-6">
                <label
                    for="email"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                    Email address
                </label>
                <input
                    type="email"
                    id="email"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Email Address"
                    name="email"
                    value={credentials.email}
                    onChange={onChange}
                />
            </div>
            <div>
                    <label
                        for="company"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                        Event Name
                    </label>
                    <input
                        type="text"
                        id="company"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        name="Query"
                        value={credentials.Query}
                        onChange={onChange}
                    />
                </div>
           
        
            <div class="flex items-start mb-6">
                <div class="flex items-center h-5">
                    <input
                        id="remember"
                        type="checkbox"
                        value=""
                        class="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                        required=""
                    />
                </div>
             
            </div>
            <button
            onClick={handleSubmit}
                type="submit"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
                Register
            </button>
        </form>
    );
}

export default Register;
