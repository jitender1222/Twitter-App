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
}

export default userService;
