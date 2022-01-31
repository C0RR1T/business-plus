import axios from './AxiosInstance';
import { User } from './API';

/**
 * Gets a user
 * @param email Email of the user specified
 * @param password Password of the user
 */
const getUser = async (email: string, password: string): Promise<User> => {
    return await axios
        .get<User>(encodeURI(`/users?email=${email}&password=${password}`))
        .then(data => data.data);
};

/**
 * Creates a user
 * @param email Email of the user
 * @param password Password of the user
 */
const createUser = async (email: string, password: string): Promise<void> => {
    await axios.post<User>('/users', {
        email,
        password,
    });
};

export { getUser, createUser };
