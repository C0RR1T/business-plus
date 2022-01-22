import { Flight, Meeting } from './API';
import axios from '../AxiosInstance';

const getFlightsOfUser = async (email: string, time: number = 0): Promise<Array<Flight>> => {
    return await axios.get<Array<Flight>>(`/flights`).then((res) => res.data.filter(val => val.users.includes(email) && val.end >= time));
};

const getMeetingOfUser = async (email: string, time: number = 0): Promise<Array<Meeting>> => {
    return await axios.get<Array<Meeting>>('/meetings').then(res => res.data.filter(val => val.users.includes(email) && val.end >= time));
};

type Events = {
    meetings: Array<Meeting>,
    flights: Array<Flight>
}
const getEventsOfUser = async (email: string, time: number = 0): Promise<Events> => {
    const meetings = await getMeetingOfUser(email, time);
    const flights = await getFlightsOfUser(email, time);

    return {
        meetings,
        flights
    };
};

const createMeeting = async (end: number, start: number, place: string, name: string, description: string, users: Array<string>) => {
    await axios.post<Meeting>('/meetings', {
        end,
        start,
        place,
        name,
        description,
        users
    });
};

const createFlight = async (name: string, from: string, to: string, start: number, end: number, users: Array<string>) => {
    await axios.post('/flights', {
        name,
        from,
        to,
        start,
        end,
        users
    })
}

export { getEventsOfUser, getFlightsOfUser, getMeetingOfUser, createFlight, createMeeting };