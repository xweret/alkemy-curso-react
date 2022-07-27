import {Redirect } from "react-router-dom";
function Detalle (){
    // let navigate = useNavigate();
    let token = localStorage.getItem("token");
    return (
        <>
        { !token && <Redirect to="/" />}
        <h2>Detalles de la pelicula</h2>
        </>
    )

}

export default Detalle