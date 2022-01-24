import { Flight, Meeting } from './API';
import axios from '../AxiosInstance';

/**
 * Gets all the Flights of a user
 * @param email Email of a user
 * @param time Flights after specified time. Defaults to 0 (--> 1.1.1970).
 * @return The Flights of the user.
 */
const getFlightsOfUser = async (email: string, time: number = 0): Promise<Array<Flight>> => {
    return await axios.get<Array<Flight>>(`/flights`).then((res) => res.data.filter(val => val.users.includes(email) && val.end >= time));
};

/**
 * Gets all the Meetings of a specific User
 * @param email Email of a user.
 * @param time Meetings after specified time. Defaults to 0 (--> 1.1.1970).
 * @return The Meetings of the user
 */
const getMeetingOfUser = async (email: string, time: number = 0): Promise<Array<Meeting>> => {
    return await axios.get<Array<Meeting>>('/meetings').then(res => res.data.filter(val => val.users.includes(email) && val.end >= time));
};

type Events = {
    meetings: Array<Meeting>,
    flights: Array<Flight>
}
/**
 * Gets all the Events (Meetings AND Flights) of a specific user
 * @param email Email of the user
 * @param time Meetings after specified time. Defaults to 0 (--> 1.1.1970)
 */
const getEventsOfUser = async (email: string, time: number = 0): Promise<Events> => {
    const meetings = await getMeetingOfUser(email, time);
    const flights = await getFlightsOfUser(email, time);

    return {
        meetings,
        flights
    };
};

/**
 * Creates meeting
 * @param end End of the meeting as Unix timestamp.
 * @param start Start of the meeting as Unix timestamp.
 * @param place Location of the Meeting.
 * @param name Name of the meeting.
 * @param description Description of the meeting.
 * @param users E-Mail of users participating.
 * @param email E-Mail of the user that creates the event.
 */
const createMeeting = async (end: number, start: number, place: string, name: string, description: string, users: Array<string>, email: string): Promise<void> => {
    await axios.post<Meeting>('/meetings', {
        end,
        start,
        place,
        name,
        description,
        users: [
            ...users,
            email
        ]
    });
};

/**
 * Creates a flight
 * @param name Name of the Flight
 * @param from Start of the flight
 * @param to Destination of the flight
 * @param start Time the flight starts as Unix timestamp.
 * @param end Time the flight ends as Unix timestamp
 * @param users E-Mail of the users participating
 * @param email E-Mail of the user that creates the flight
 */
const createFlight = async (name: string, from: string, to: string, start: number, end: number, users: Array<string>, email: string): Promise<void> => {
    await axios.post('/flights', {
        name,
        from,
        to,
        start,
        end,
        users: [
            ...users,
            email
        ]
    });
}

export { getEventsOfUser, getFlightsOfUser, getMeetingOfUser, createFlight, createMeeting };