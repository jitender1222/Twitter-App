import userRepository from "../repository/user-repository.js";

class userService {
  constructor() {
    this.userRepository = new userRepository();
  }

  async signup(data) {
    try {
      const signup = await this.userRepository.create(data);
      return signup;
    } catch (error) {
      console.log(error);
    }
  }

  async getUserByEmail(email) {
    try {
      const user = await this.userRepository.findBy({ email });
      return user;
    } catch (error) {
      throw error;
    }
  }

  async signin(data) {
    try {
      const user = await this.getUserByEmail(data.email);

      if (!user) {
        return res.status(500).json({
          message: "No user found",
        });
      }
      if (!user.comparePassword(data.password)) {
        return res.status(500).json({
          message: "incorrect password",
        });
      }
      const token = user.genJWT();
      return token;
    } catch (error) {
      throw error;
    }
  }
}

export default userService;
