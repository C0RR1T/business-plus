import logo from '../../static/business_plus__logo.png';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import './navigation.css';

export default function Navigation() {
    return (
        <Navbar bg={'dark'} >
            <Container>
                <Navbar.Brand><img src={logo} alt={'Logo von Business+'} /></Navbar.Brand>
                <Navbar.Collapse>
                    <Nav>
                        <Nav.Link href={'/'}>Startseite</Nav.Link>
                        <Nav.Link href={'/flights'}>Flug buchen</Nav.Link>
                        <Nav.Link href={'/meetings'}>Meeting buchen</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <Nav>
                    <Button>Log in</Button>
                    <Button>Registrieren</Button>
                </Nav>
            </Container>
        </Navbar>
    );
}
