function Login() {
    const handleSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const regexEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        

        // valido que no este vacio niguno de los inputs 

        console.log(regexEmail.test(email));
        if (email === "" || password === "") {
            console.log("Please fill in all fields");
            return
        }

        // valido que el email sea valido

        if (email !== "" && !regexEmail.test(email)) {
            console.log("You must enter a valid email");
        }
    }
    return (
    <>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
            <label>
            <span> Correo Electronico:</span> <br/>
                <input type="text" name="email" />
            </label>
            <label>
            <br/>
                <span> Contraseña:</span> <br/>
                    <input type="password" name="password" />
                </label>
                <br/>
                <button type="submit">Login</button>
        </form>
    </>
    )
}

export default Login;

