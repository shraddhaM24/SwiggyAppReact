const Contact = () =>{
    return<div>
        <h1 className="text-xl font-extrabold m-2 p-2">Contact Us Page</h1>
        <form>
            <input type="text" placeholder="name" className="border border-black p-2 m-2" />
            <input type="text" placeholder="message" className="border border-black p-2 m-2"/>
            <button className="border border-black p-2 m-2 bg-gray-100 rounded-lg">Submit</button>
        </form>
        </div>;
}

export default Contact;