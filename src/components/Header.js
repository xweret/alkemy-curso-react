import {Link} from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Buscador from './Buscador';

function Header () {
    return (
        
        <Navbar className='navone bg-light md-12'  expand="md">
    <Container className='navigation'>
        <Navbar.Brand href="#home">Cueva-na</Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav  className="links me-auto">
            <Link className='links me-2' to='/listado'>Home </Link>
            <Link className='links' to="/listado">Listado</Link>
            <Buscador/>
        </Nav>
        </Navbar.Collapse>
    </Container>
    </Navbar>
);
}

//         <header>
//             <nav>
//                 <ul>
//                     <li><Link to='/'>Home </Link></li>
//                     <li><Link to='/Listado'>Listado</Link></li>
//                     <li><Link to='/Listado'>Conctacto</Link></li>
//                 </ul>
//             </nav>
//         </header>
//     )
// }

export default Header