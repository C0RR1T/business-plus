import axios from '../AxiosInstance';
import { Flight, Meeting, User } from './API';

const getUser = async (email: string, password: string): Promise<User> => {
    return await axios.get<User>(encodeURI(`/users?email=${email}&password=${password}`)).then(data => data.data);
};

const createUser =  async (email: string, password: string) => {
    await axios.post<User>('/users', {
        email,
        password
    })
}


export {getUser, createUser}