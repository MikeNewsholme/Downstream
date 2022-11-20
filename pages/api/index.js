
const express = require ('express')
const app = express();
app.use(express.json())
const jwt = require("jsonwebtoken");


const users = [
  {
    id: "1",
    username: "admin",
    password: "123456",
    isAdmin: true,
  },
  {
    id: "2",
    username: "mike",
    password: "mike",
    isAdmin: false,
  },
];
app.post("/api/login", (req,res) =>{
    const {username, password} = req.body
    const user = users.find(u=>{
        return u.username === username && u.password === password
    })
    if (user){
    //generate access token
    const accessToken = jwt.sign({id:user.id, isAdmin: user.isAdmin}, "mySecretKey",  {expires:"1728000s"})
   
    res.json({
        username: user.username,
        isAdmin:user.isAdmin,
        accessToken
    })
    } else {
        res.status(400).json("Username or password incorrect")
    }

    
})

const verify = (req, res, next) => {
    const authHeader = req.headers.authorization
    if(authHeader) {
        const token= authHeader.split(" ")[1]

        jwt.verify(token, "mySecretKey", (err, user) =>{
            if(err){
                return res.status(403).json("Token is not valid")
            }
            req.user = user;
            next()
        })

    }else {
        res.status(401).json("Not authenticated")
    }
}

app.delete("api/users/:userId", verify, (req,res) => {
    if (req.user.id === req.params.userId || req.user.isAdmin) {
        res.status(200).json("Item has been deleted")
    } else {
        res.status(403).json("you are not allowed to delete this")
    }

})

app.listen(5000, () => console.log("hey im connected to port 5000"))