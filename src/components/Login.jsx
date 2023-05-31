import { clear } from "@testing-library/user-event/dist/clear";
import { useState } from "react";

const Login = ({setAlert}) =>{

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const validarLogin = (e) =>{
        e.preventDefault();

        if(email.trim() === "prueba@prueba.com" && password.trim() === "123456"){
                
                setAlert({
                    mensaje : "Sesion Iniciada",
                    color : "success"
                });
                setEmail("");
                setPassword("");
           
           

            return
        }

        //alert
        setAlert({
            mensaje : "Los datos son incorrectos",
            color : "danger"
        });

    };

    return(
        <form onSubmit={validarLogin}>
            <h1>Desafio 2 - Login / Alert</h1>
            <label htmlFor="email">Email</label>
            <br />
            <input type="email" 
                name="email"
                id="email"
                className="form-control "
                onChange={(e) => setEmail(e.target.value)}
                value={email}/>
            <br />

            <label htmlFor="password">Password</label>
            <br />
            <input type="password" 
                name="password"
                id="password"
                className="form-control"
                onChange={(e) => setPassword(e.target.value)}
                value={password}/>
            <br />
            
            <button 
                    className="btn btn-success" 
                    type="submit"
                    disabled ={!email.trim() || !password.trim() }
            >Ingresar</button>

        </form>
    );
};

export default Login;