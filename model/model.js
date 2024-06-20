// let mongoose = require('mongoose')
// let userScheme= mongoose.Schema({
//     name:
// {
//     type:String,
//     require:true
// },

// lastName:
// {
//     type:String,
//     require:true
// },
// email:
// {
//     type: String,
// },
// passward:
// {
//     type:String
// }
// })



// let User = mongoose.model('User',userScheme);
// module.exports=User;




let mongoose=   require('mongoose')

let userSchema=  mongoose.Schema({
    firstName:{
        type:String
    },
    lastName:{
        type:String
    },
    email:{
        type:String
    },
    passWord:{
        type:String

    }

})
let User=  mongoose.model('User',userSchema)
module.exports=User