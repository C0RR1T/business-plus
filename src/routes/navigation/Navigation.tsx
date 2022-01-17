import logo from '../../static/business_plus__logo.png';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './navigation.css';

export default function Navigation() {
    return (
        <div className={'navigation__container'}>
            <img
                className={'navigation__logo-image'}
                src={logo}
                alt={'Business+'}
            />
            <Container className={'navigation__routing-container'}>
                <Row>
                    <Col>
                        <Link className={'navigation__routing-link'} to={'/'}>
                            Startpage
                        </Link>
                        <Link
                            className={'navigation__routing-link'}
                            to={'/profile'}>
                            Profil
                        </Link>
                    </Col>
                    <Col className={'navigation__registration-and-logIn'}>
                        <Link
                            className={'navigation__routing-link'}
                            to={'/login'}>
                            <Button variant={'secondary'}>Log In</Button>
                        </Link>
                        <Link
                            className={'navigation__routing-link'}
                            to={'/register'}>
                            <Button>Registration</Button>
                        </Link>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
