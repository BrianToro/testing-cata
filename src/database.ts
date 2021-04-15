import mongoose from 'mongoose'


export const connectDB = () => {
    const mongodb = {
        "URI": "mongodb://localhost/test_cata"
    }
    mongoose.connect(mongodb.URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
        serverSelectionTimeoutMS: 60000,
    })
        .then(db => console.log('DB is connected'))
        .catch(err => console.error(err))
}