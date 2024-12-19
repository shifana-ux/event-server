const mongoose = require('mongoose');

const connectDb = async () => {
    const url=process.env.MONGO_URI || "";
    await mongoose.connect(url)
    .then(()=>{
        console.log("mongodb connected successfully")
    })
    .catch((err)=>{
        console.log(err)
    })
}

module.exports=connectDb