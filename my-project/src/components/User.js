import { useState } from "react";

const User = (props) => {

    const [count] = useState(0);
    const [count2] = useState(1);

    return(
        <div className="user-card">
            <h3>Count: {count}</h3>
            <h3>Count2: {count2}</h3>
            <h2>Name : {props.name}</h2>
            <h3>Location : Mumbai</h3>
            <h4>Contact : shraddhamistry37@gmail.com</h4>
        </div>
    )
}

export default User;