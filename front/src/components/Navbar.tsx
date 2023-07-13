import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import ModalCompo from "./ModalCompo";

function NavBar() {
    const returnHome = () => {
        window.location.reload();
    };
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home" onClick={returnHome}><img
                    src={"https://cdn-icons-png.flaticon.com/512/25/25231.png"}
                    alt="Logo"
                    height={30}
                    className="d-inline-block align-top"
                />
                    To Do List
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home" onClick={returnHome}>Home</Nav.Link>
                        <ModalCompo buttonLabel="Thanks to" />
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;