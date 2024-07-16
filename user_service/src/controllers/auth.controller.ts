import express, { Request, Response } from 'express'
import { createUser, getUserByEmail } from '../service/user.service';
import "../helper/auth/github";
import passport from 'passport';


//@desc create category
//@route POST /api/category
//@access ???
export const createAuthController = async (req: Request, res: Response) => {
    try {
        res.status(200).json({ message: 'category created' });
    } catch (error) {
        const err = error as Error;
        res.status(500).json({ message: err.message });
    }
}

//@desc login user
//@route GET /api/user
//@access public
export const loginAuthController = async (req: Request, res: Response) => {
    try {
        passport.authenticate('github', { scope: ['user:email'] })(req, res);
        res.status(200).json({ message: 'user logged in' });
    } catch (error) {
        const err = error as Error;
        res.status(500).json({ message: err.message });
    }
}
