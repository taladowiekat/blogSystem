import userModel from "../../../DB/model/user.model.js";

export const getAuth = (req , res)=>{
    return res.json({message : "Auth"});
}

export const register = async (req , res)=>{
    try{
        const {email,password,name,age} = req.body;
        const user =await userModel.create({email,password,name,age})
        return res.json ({message:"success",user});
    }catch(error){
        if(error.original?.errno==1062){
            return res.json("email already exists")
        }
        return res.json({message:"error",error:error.stack});
    }
}

export const login = async (req, res) => {
    const{email, password} = req.body;
    const checkUser = await userModel.findAll(
        {
            attributes:["id","email"],
            where:{
                email,
                password
            }
        }
    )
    if(!checkUser.length) {return res.json({ message: 'email or password is wrong' });}
    return res.json({ message:"success",user:checkUser });
}

export const destroy = async (req, res) => {
    const {id} = req.params;
    const user = await userModel.destroy(
        {
            where:{id}
        }
    )

    if(!user){
        return res.json({ message:"user not found"});
    }

    return res.json({ message:"Done!",user})
}


export const update = async (req,res) => {
    try{
    const {id} = req.params;
    const {name} =req.body;
    const user = await userModel.update({name},{where:id});
    if(!user) return res.json({ message : "User not found"});
    return res.json({ message:"success",user})

    }catch(error){
        return res.json({ message:"error",error:error.stack})
    }





}