const express = require ('express')
const cors = require ('cors')
const bodyParser = require ('body-parser')


const app = express()

const {connectDb , mongoose} = require('./db')
const { handleRegistration , handleLogin } = require('./service')

app.use(cors())
app.use(bodyParser.json())

connectDb();

app.post('/registration' , (apiReq , apiRes) => {
   handleRegistration(apiReq , apiRes);
})

app.get('/login/:username/:password' , (apiReq , apiRes) => {
    handleLogin(apiReq , apiRes);
 })

app.get('/' , (req , res) => {
    if(mongoose.connection.readyState === 1){
        res.send("Server working fine and connected to Database")
        return;
    }
    res.send("Server started and working fine")
})



app.listen(4000 , () => {
    console.log("Server started at 4000")
})