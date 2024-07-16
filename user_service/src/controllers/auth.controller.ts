import express, { Request, Response } from 'express'
import { createUser, getUserByEmail } from '../service/user.service';
import "../helper/auth/github";
import github from '../helper/auth/github';



//@desc login user
//@route GET /api/user
//@access public
export const loginAuthController = async (req: Request, res: Response) => {
    try {
        github.authenticate('github', { scope: ['user:email'] })(req, res);
        res.status(200).json({ message: 'user logged in' });
    } catch (error) {
        const err = error as Error;
        res.status(500).json({ message: err.message });
    }
}


//@desc logout user
//@route GET /api/user/logout
//@access public
export const logoutAuthController = async (req: Request, res: Response) => {
    try {
        req.logout((err) => {
            if (err) {
                return res.status(500).json({ message: err.message });
            }
        });
        res.status(200).json({ message: 'user logged out' });
    } catch (error) {
        const err = error as Error;
        res.status(500).json({ message: err.message });
    }
}