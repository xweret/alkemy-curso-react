import {useNavigate} from 'react-router-dom';
import {useEffect} from 'react';
function Listado(){

    let navigate = useNavigate();
    

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token === null) {
            navigate('/');
        }
        },[])
    return (
        <div className='listado-container'>
        <h2>Listado</h2>
        </div>
    )
}

export default Listado