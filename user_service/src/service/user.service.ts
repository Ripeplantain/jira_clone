import User from '../models/user.model';
import logger from '../helper/logger';


export const createUser = async (name: string, email: string, password: string) => {
    try {
        const user = await User.create({ name, email, password });
        return user;
    } catch (error) {
        logger.error(error);
        return null;
    }
}

export const getUserByEmail = async (email: string) => {
    try {
        const user = await User.findOne({ where: { email } });
        return user;
    } catch (error) {
        logger.error(error);
        return null;
    }
}

export const getUserById = async (id: string) => {
    try {
        const user = await User.findByPk(id);
        return user;
    } catch (error) {
        logger.error(error);
        return null;
    }
}

export const deleteUserById = async (id: string) => {
    try {
        const user = await User.findByPk(id);
        if (user) {
            await user.destroy();
            return true;
        }
        return false;
    } catch (error) {
        logger.error(error);
        return false;
    }
}

export const updateUserById = async (id: string, name: string, email: string, password: string) => {
    try {
        const user: any = await User.findByPk(id);
        if (user) {
            user.name = name;
            user.email = email;
            user.password = password;
            await user.save();
            return true;
        }
        return false;
    } catch (error) {
        logger.error(error);
        return false;
    }
}