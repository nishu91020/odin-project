const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const passoportJWT = require('passport-jwt');
const JWTStrategy = passoportJWT.Strategy;
const ExtractJWT = passoportJWT.ExtractJwt;
const mongoose = require('mongoose');

const UserModel = 'mongodb+srv://nishu:Nishu123@cluster0.djgss.mongodb.net/users?retryWrites=true&w=majority';
mongoose.connect(UserModel, { useNewUrlParser: true, useUnifiedTopology: true });
passport.use(
    new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password'
    }),
    function (email, password, cb) {
        return UserModel.findOne({ email, password }).then(user => {
            if (!user) {
                return cb(null, false, { message: 'incorrect email/password' });
            }
            return cb(null, user, { message: 'welcome user' }).catch(err => {
                cb(err);
            });
        });
    }
);
passport.use(
    new JWTStrategy(
        {
            jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken,
            secretOrKey: 'secret'
        },
        function (jwtPayload, cb) {
            //find the user in db if needed. This functionality may be omitted if you store everything you'll need in JWT payload.
            return UserModel.findOneById(jwtPayload.id)
                .then(user => {
                    return cb(null, user);
                })
                .catch(err => {
                    return cb(err);
                });
        }
    )
);
