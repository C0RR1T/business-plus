import logo from '../../static/business_plus__logo.png';
import { Col, Container, Row } from 'react-bootstrap';
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
                            to={'/login'}>
                            Log In
                        </Link>
                        <Link
                            className={'navigation__routing-link'}
                            to={'/profile'}>
                            Profil
                        </Link>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
