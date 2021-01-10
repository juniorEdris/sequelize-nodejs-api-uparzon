const { urlencoded } = require("express")
const express = require("express")
const app = express()
const PORT = process.env.PORT || 4000
const {sequelize} = require('./models')
const homePage = require("./Routes/HomePage")
const shopPage = require("./Routes/ShopPage")
const orderDetails = require("./Routes/OrderDetails")
const vendorPage = require("./Routes/VendorPage")
// MIDDLEWARES
app.use(urlencoded({extended:true}))
app.use(express.json())

// API'S PAGES
app.use('/api/uparzon_store',homePage)

app.use('/api/uparzon_store',shopPage)

app.use('/api/uparzon_store',vendorPage)

app.use('/api/uparzon_store',orderDetails)




// SEQUELIZE DB CONNCTION / LISTENING TO THE PORT
sequelize.authenticate().then(()=>{
    app.listen(PORT,()=>{
        console.log(`Connected to database.`);
    })
}).catch(() => {
    console.log('DB connected ERROR');
})
