import userRepository from "../../src/repository/user-repository";
import userService from "../../src/services/user-service";

jest.mock("../../src/repository/user-repository");

describe("test for signup", () => {
  test("should successfully create a user", async () => {
    const data = {
      email: "jit@gmail.com",
      password: "12345",
    };
    userRepository.prototype.create.mockReturnValue({ ...data });
    const service = new userService();
    const response = await service.signup();
    expect(response.email).toBe(data.email);
  });
});
