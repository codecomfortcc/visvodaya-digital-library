import joi from 'joi'

export const createBookValidator= (req,res,next)=>{
    const schema = joi.object({
        title:joi.string().required(),
        author:joi.string().required(),
        publishedDate:joi.date().default(Date.now()),
        branch:joi.enum(['Computer Science', 'Electronics', 'Electrical', 'Mechanical', 'Civil', 'Chemical', 'Bio-Technology', 'Others']).required(),
        pages:joi.number().required(),
        summary:joi.string(),
    });
    const {error} = schema.validate(req.body);
    if(error){
        return res.status(400).json({success:false,message:error.message});
    }
    next();
}
