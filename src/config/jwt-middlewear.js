import JWT from "passport-jwt";
import User from "../models/user.js";

const JWTStrategy = JWT.Strategy;
const ExtractJwt = JWT.ExtractJwt;

const optns = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken,
  secretOrKey: "twitter_secret",
};

export const passportAuth = (passport) => {
  passport.use(
    new JWTStrategy(optns, async (jwt_payload, done) => {
      const user = await User.findById(jwt_payload.id);

      if (!User) {
        done(null, false);
      } else {
        done(null, user);
      }
    })
  );
};
