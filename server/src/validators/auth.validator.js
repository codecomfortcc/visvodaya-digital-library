import joi from 'joi';
export const signupValidator = (req, res, next) => {
  const schema = joi.object({
    name: joi.string().required(),
    email: joi.string().email().required(),
    password: joi.string().pattern(new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})')).required(),
  });
  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).json({ success: false, message: error.message });
  }
  next();
}
export const loginValidator = (req,res,next)=>{
  const schema = joi.object({
    email: joi.string().email().required(),
    password: joi.string().pattern(new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})')).required(),
  });
  const {error} = schema.validate(req.body);
  if(error){
    return res.status(400).json({success:false,message:error.message});
  }
  next();
}
export const verifyEmailValidator = (req,res,next)=>{
  const schema = joi.object({
    code: joi.string().min(6).max(6).required(),
    email: joi.string().email().required(),
  });
  const {error} = schema.validate(req.body);
  if(error){
    return res.status(400).json({success:false,message:error.message});
  }
  next();
}
export const resendTokenValidator = (req,res,next)=>{
  const schema = joi.object({
    email: joi.string().email().required(),
  });
  const {error} = schema.validate(req.body);
  if(error){
    return res.status(400).json({success:false,message:error.message});
  }
  next();
}

