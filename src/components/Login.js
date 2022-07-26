import axios from 'axios';
import swAlert from '@sweetalert/with-react';
import {useNavigate} from 'react-router-dom';



function Login() {

    let navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const regexEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        

        // valido que no este vacio niguno de los inputs 

        console.log(regexEmail.test(email));
        if (email === "" || password === "") {
            swAlert (<h2>Please fill in all fields</h2>)
            return;
        }

        // valido que el email tenga un foramto valido

        if (email !== "" && !regexEmail.test(email)) {
            swAlert (<h2>You must enter a valid email</h2>)
            return;
        }

        // valido el usuario y contraseña

        if (email !== 'challenge@alkemy.org' || password !== 'react') {
            swAlert (<h2>Invalid email or password</h2>)
            return;
        }
    // envio del request a la api usando axios y el metodo post con una promise
        axios
            .post('http://challenge-react.alkemy.org', {email, password})
            .then(res => {
                swAlert (<h2>Login Valid, you are loged-in </h2>)
                const tokenRecibido = res.data.token;
                localStorage.setItem('token', tokenRecibido);
                navigate('/listado');
            })

    }
    return (
    <>
        
        <h1>Login</h1>
        <form onSubmit={handleSubmit} className='login-container'>
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

