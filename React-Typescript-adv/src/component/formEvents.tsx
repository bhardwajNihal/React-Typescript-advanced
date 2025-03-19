// Form events, change events generic types 

import React, { useState } from "react";


interface formDataType {
    name: string;
    email: string;
    password: string
}

export const ContactForm: React.FC = () => {

    const [formData, setFormData] = useState<formDataType>({
        name: "",
        email: "",
        password: ""
    })              // defining type and initial value for the state


    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {   // event type is a change event coming from an html input

        // destructuring the event, to extract the name and value from the input triggering that event
        const { name, value } = e.target;
        setFormData((prevState) => ({ ...prevState, [name]: value }))
    }

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {       // event is a form event coming from html form

        e.preventDefault()                          // necessary to avoid page reload on submit, - a default behavious triggered by forms
        console.log("User Data : ", formData);
    }

    return <div>

        <form onSubmit={handleSubmit}>

            <input type="text" placeholder="name"
                name="name"
                value={formData.name}
                onChange={handleChange} />
            <input type="text" placeholder="email"
                name="email"
                value={formData.email}
                onChange={handleChange} />
            <input type="password" placeholder="password"
                name="password"
                value={formData.password}
                onChange={handleChange} />

            <button type="submit">Submit</button>
        </form>

    </div>

}


// 1️⃣ Destructuring { name, value } = e.target; → Extracts values from the input
// 2️⃣ ...prevState → Keeps old form data intact
// 3️⃣ [name]: value → Dynamically updates the correct field