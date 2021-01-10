const _ = require('../Constructors/AllVarriables')


const pagination = (model)=>{

    return(req,res,next)=>{
        
        const data={}

        const page = parseInt(req.query.page)
        const limit = _.PAGINATION_ITEM_LIMIT
        const startIndex = (page - 1) * limit
        const endIndex = page * limit


        data.products = model.slice(startIndex,endIndex)
        if(startIndex > 0){
            data.prev = {
                page:page - 1,
                limit:data.products.length,
            }
        }

        if(endIndex < model.length)
            data.next = {
                page:page + 1,
                limit:data.products.length,
            }
        res.data = data
        next()
    }
}

module.exports = pagination