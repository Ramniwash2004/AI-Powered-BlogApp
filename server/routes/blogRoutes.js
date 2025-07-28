// import express from "express";
// import {addBlog, addComment, deleteBlogById, generateContent, getAllBlogs, getBlogById, getBlogComments, togglePublish} from "../controllers/blogController.js"
// import upload from "../middleware/multer.js";
// import auth from "../middleware/auth.js";

// const blogRouter = express.Router();

// // Add this middleware to log all requests to blog routes
// blogRouter.use((req, res, next) => {
//     console.log(`Blog Route: ${req.method} ${req.path}`);
//     next();
// });

// blogRouter.post("/add", upload.single("image"), auth, addBlog);
// blogRouter.get("/all", getAllBlogs);
// blogRouter.post("/delete", auth, deleteBlogById);
// blogRouter.post("/toggle-publish", auth, togglePublish);
// blogRouter.post("/add-comment", addComment);
// blogRouter.post("/comments", getBlogComments);
// blogRouter.post("/generate", auth, generateContent);
// blogRouter.get("/:blogId", getBlogById);

// export default blogRouter;
import express from "express";
import {addBlog, addComment, deleteBlogById, generateContent, getAllBlogs, getBlogById, getBlogComments, togglePublish} from "../controllers/blogController.js"
import upload from "../middleware/multer.js";
import auth from "../middleware/auth.js";

const blogRouter = express.Router();

// Add this logging middleware
blogRouter.use((req, res, next) => {
    console.log(`Blog Route Hit: ${req.method} ${req.originalUrl}`);
    console.log(`Request Body:`, req.body);
    next();
});

blogRouter.post("/add", upload.single("image"), auth, addBlog);
blogRouter.get("/all", getAllBlogs);
blogRouter.post("/delete", auth, deleteBlogById);
blogRouter.post("/toggle-publish", auth, togglePublish);
blogRouter.post("/add-comment", addComment);
blogRouter.post("/comments", getBlogComments);
blogRouter.post("/generate", auth, generateContent);
blogRouter.get("/:blogId", getBlogById);

export default blogRouter;