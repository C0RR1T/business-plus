import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import { createFlight } from '../../api/EventService';

import 'react-datepicker/dist/react-datepicker.css';
import './flight.css';

export default function Flight() {
    const [flightName, setFlightName] = useState('');
    const [email, setEmail] = useState('');
    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');
    const [startDate, setStartDate] = useState(new Date());
    const [returnDate, setReturnDate] = useState(new Date());
    const [usersAdded, setUsersAdded] = useState(['']);
    const [addUser, setAddUser] = useState('');

    function addFlight() {
        console.log('Hello Foolks');
        usersAdded.splice(1, 1);

        createFlight(
            flightName,
            from,
            to,
            startDate.getMilliseconds(),
            returnDate.getMilliseconds(),
            usersAdded,
            email
        );
        console.log('Hello Foolks ');
    }

    return (
        <Container className={'form-container'}>
            <Row className={'input-row'}>
                <Col>
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        value={flightName}
                        onChange={e => setFlightName(e.target.value)}
                        type='text'
                        placeholder='Mit dem Namen fällt es dir einfacher den Flug wiederzuerkennen'
                    />
                </Col>
            </Row>
            <Row className={'input-row'}>
                <Col>
                    <Form.Label>eMail</Form.Label>
                    <Form.Control
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        type='email'
                        placeholder='Ihre EMail Adresse, sodass wir Ihre Buchungen für Sie finden können'
                    />
                </Col>
            </Row>
            <Row className={'input-row'}>
                <Col>
                    <Form.Label>Startflughafen</Form.Label>
                    <Form.Control
                        value={from}
                        onChange={e => setFrom(e.target.value)}
                        type='text'
                        placeholder='Zürich'
                    />
                </Col>
                <Col>
                    <Form.Label>Zielflughafen</Form.Label>
                    <Form.Control
                        value={to}
                        onChange={e => setTo(e.target.value)}
                        type='text'
                        placeholder='Miami'
                    />
                </Col>
            </Row>
            <Row className={'input-row'}>
                <Col>
                    <Form.Label>Abflugdatum</Form.Label>
                    <DatePicker
                        selected={startDate}
                        onChange={date => setStartDate(date || new Date())}
                    />
                </Col>
                <Col>
                    <Form.Label>Rückkehrdatum</Form.Label>
                    <DatePicker
                        selected={returnDate}
                        onChange={date => {
                            setReturnDate(date || new Date());
                        }}
                    />
                </Col>
            </Row>
            <Row className={'input-row'}>
                <Form.Label>Begleitpersonen</Form.Label>
                {usersAdded.map(() => {
                    return (
                        <Form.Control
                            style={{ width: '90%', marginRight: '2.5%' }}
                            type='email'
                            placeholder='example@example.example'
                            onChange={e => setAddUser(e.target.value)}
                        />
                    );
                })}
                <Button
                    style={{ width: '7.5%' }}
                    variant={'secondary'}
                    onClick={() =>
                        addUser != null && addUser !== ''
                            ? setUsersAdded([...usersAdded, addUser])
                            : setUsersAdded([...usersAdded])
                    }>
                    +
                </Button>
            </Row>
            <Row className={'input-row'}>
                <Button onClick={addFlight}>Abschliessen</Button>
            </Row>
        </Container>
    );
}
