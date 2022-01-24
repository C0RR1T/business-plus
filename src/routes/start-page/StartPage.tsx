import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import travel from '../../static/travel.jpg';
import meeting from '../../static/meeting.jpg';
import { Link } from 'react-router-dom';

import './start-page.css';

export default function StartPage() {
    return (
        <div>
            <Container className={'start-page__container'}>
                <Row>
                    <Col>
                        <Card>
                            <Card.Header>
                                <h5 className={'start-page__card-header'}>
                                    Geschäftsreisen
                                </h5>
                            </Card.Header>
                            <Card.Img
                                className={'start-page__card_image'}
                                src={travel}
                            />
                            <Card.Body>
                                <div>
                                    Einfach und unkompliziert Ihre
                                    Geschäftsreisen mit uns buchen
                                </div>
                                <Link to={'/flights'}>
                                    <Button>Geschäftsreise buchen</Button>
                                </Link>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col>
                        <Card>
                            <Card.Header className={'start-page__card-header'}>
                                <h5 className={'start-page__card-header'}>
                                    Meetings
                                </h5>
                            </Card.Header>
                            <Card.Img src={meeting} />
                            <Card.Body>
                                <div>
                                    Einfach und unkompliziert Ihre
                                    Geschäftsreisen mit uns buchen
                                </div>
                                <Link to={'/meetings'}>
                                    <Button>Meetingraum buchen</Button>
                                </Link>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
