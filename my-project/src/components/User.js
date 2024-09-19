const User = (props) => {
    return(
        <div className="user-card">
            <h2>Name : {props.name}</h2>
            <h3>Location : Mumbai</h3>
            <h4>Contact : shraddhamistry37@gmail.com</h4>
        </div>
    )
}

export default User;