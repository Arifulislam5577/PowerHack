import asyncHandler from "express-async-handler";
import jwt from "jsonwebtoken";
import User from "../model/userModel.js";

export const protectedRoute = asyncHandler(async (req, res, next) => {
  let token;
  console.log({ header: req.headers.authorization });
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      // Get token from header
      token = req.headers.authorization.split(" ")[1];

      // Verify token
      const decoded = jwt.verify(token, process.env.SECRET_KEY);

      // Get user from the token
      req.user = await User.findById(decoded.id).select("-password");

      next();
    } catch (error) {
      res.status(401);
      throw new Error("Not authorized");
    }
  }

  if (!token) {
    res.status(401);
    throw new Error("Not authorized, no token");
  }
});
