const { urlencoded } = require("express")
const express = require("express")
const app = express()
const PORT = process.env.PORT || 4000
const {sequelize} = require('./models')
const homePage = require("./Routes/HomePage")


app.use(urlencoded({extended:true}))
app.use(express.json())

app.use('/',homePage)


sequelize.authenticate().then(()=>{
    app.listen(PORT,()=>{
        console.log(`Connected to database.`);
    })
}).catch(() => {
    console.log('DB connected ERROR');
})
