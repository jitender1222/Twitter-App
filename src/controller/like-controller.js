import LikeService from "../services/like-service.js";

const likeService = new LikeService();

export const toggleLike = async (req, res) => {
  try {
    const response = await likeService.toggleLike(
      req.query.modelId,
      req.query.modelType,
      req.body.userId
    );
    return res.status(200).json({
      success: true,
      data: response,
      err: {},
      message: "Successfully toggle like",
    });
  } catch (error) {
    console.log(error);
    return res.status(401).json({
      success: false,
      data: {},
      err: error,
      message: "Something went wrong",
    });
  }
};
