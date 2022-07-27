import { useNavigate } from "react-router-dom";
function Detalle (){
    let navigate = useNavigate();
    let token = sessionStorage.getItem('token');
    return (
        <>
        {!token && navigate("/")}
        <h2>Detalles de la pelicula</h2>
        </>
    )

}

export default Detalle