const { urlencoded } = require("express")
const express = require("express")
const app = express()
const PORT = process.env.PORT || 4000
const {sequelize} = require('./models')
const homePage = require("./Routes/HomePage")
const shopPage = require("./Routes/ShopPage")
const orderDetails = require("./Routes/OrderDetails")
const vendorPage = require("./Routes/VendorPage")
const signupPage = require("./Routes/RegisterPage")
const loginPage = require("./Routes/LoginPage")
const vendorDelivery = require("./Routes/Vendor_delivery")
const CustomerPage = require("./Routes/Customers")
// MIDDLEWARES
app.use(urlencoded({extended:true}))
app.use(express.json())

// API'S PAGES
app.use('/api/uparzon_store/home_page',homePage)

app.use('/api/uparzon_store/shop_page',shopPage)

app.use('/api/uparzon_store/allvendors',vendorPage)

app.use('/api/uparzon_store/orders/:id',orderDetails)

app.use('/api/uparzon_store/signup',signupPage)

app.use('/api/uparzon_store/login',loginPage)

app.use('/api/uparzon_store/customer_page',CustomerPage)

app.use('/api/uparzon_store/all_vendor_deliveries',vendorDelivery)





// SEQUELIZE DB CONNCTION / LISTENING TO THE PORT
sequelize.authenticate().then(()=>{
    app.listen(PORT,()=>{
        console.log(`Connected to database.`);
    })
}).catch(() => {
    console.log('DB connected ERROR');
})
