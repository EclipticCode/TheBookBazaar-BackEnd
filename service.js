const { RegistrationModel } = require('./Schema')
const bcrypt = require ('bcryptjs')


const handleRegistration = async (apiReq , apiRes) => {

      const {username , password} = apiReq.body
      if(username?.length && password?.length){
        const hashedPassword = await bcrypt.hash(password, 10)
        const dbResponse = await RegistrationModel.create({
           username : username , 
           password : hashedPassword
        });
        if(dbResponse){
            apiRes.send(dbResponse)
            return;
        }
      }
     apiRes.send("In correct Data") 
}

const handleLogin = async (apiReq , apiRes) => {

    const { username , password } = apiReq.params
    const dbResponse = await RegistrationModel.findOne({
        username : username ,
        password : password ,
    })  
    if(dbResponse?._id){
        console.log(dbResponse)
        apiRes.send(dbResponse.username);
        return;
    }
    apiRes.send("Login Failed")
}


module.exports = {
    handleRegistration , 
    handleLogin
}