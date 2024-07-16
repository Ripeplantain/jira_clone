import passport from "passport";
import { Strategy as GitHubStrategy } from 'passport-github2';
import dotenv from 'dotenv';

import User from '../../models/user.model';
import type { IGithubProfile } from "../../types";

dotenv.config();

passport.serializeUser((user: any, done) => {
    done(null, user.id);
});

passport.deserializeUser((id: string, done) => {
    User.findByPk(id).then((user) => {
        done(null, user);
    });
});


export default passport.use(new GitHubStrategy({
    clientID: process.env.GITHUB_CLIENT_ID as string,
    clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
    callbackURL: process.env.GITHUB_CALLBACK_URL as string
}, 
    function(accessToken: string, refreshToken: string, profile: IGithubProfile, done: any) {
        User.findOrCreate({
            where: { githubId: profile.id },
            defaults: {
                name: profile.username,
                email: profile.emails[0].value,
            }
        }).then(([user, created]) => {
            return done(null, user);
        });
    }
));

