import { Op } from "sequelize";
import userModel from "../../../DB/model/user.model.js"
import blogModel from "../../../DB/model/blog.model.js";

export const getUser = async (req, res) => {
    try {
        const users = await userModel.findAll({
            include:blogModel,
            where:{
                age:{
                    [Op.gte]:25
                }
            }
        });
        return res.json({ message: "success", users })
    } catch (error) {
        return res.json({ message: "error", error:error.stack });
    }

}