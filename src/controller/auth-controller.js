import userService from "../services/user-service.js";
const userservice = new userService();

export const signup = async (req, res) => {
  try {
    const response = await userservice.signup({
      email: req.body.email,
      password: req.body.password,
      name: req.body.name,
    });
    return res.status(201).json({
      success: true,
      message: "Successfully created a new user",
      data: response,
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "error while creating a new user",
      err: error,
    });
  }
};

export const logIn = async (req, res) => {
  try {
    const token = await userservice.signin(req.body);
    return res.status(201).json({
      success: true,
      message: "Successfully logged in",
      data: token,
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Something went wrong",
      data: {},
      success: false,
      err: error,
    });
  }
};
