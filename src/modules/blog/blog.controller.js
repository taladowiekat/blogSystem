import blogModel from "../../../DB/model/blog.model.js";

// Controller to get all blogs
export const getBlog = async (req, res) => {
    try {
        const blogs = await blogModel.findAll(); // No need for an empty object
        return res.json({ message: "Blogs retrieved successfully", blogs });
    } catch (error) {
        return res.status(500).json({ message: "Error retrieving blogs", error: error.message });
    }
}

// Controller to add a new blog
export const addBlog = async (req, res) => {
    try {
        const { title, body, UserId } = req.body;
        const blog = await blogModel.create({ title, body, UserId });
        return res.json({ message: "Blog added successfully", blog });
    } catch (error) {
        return res.json({ message: "Error adding blog", error: error.stack});
    }
}
