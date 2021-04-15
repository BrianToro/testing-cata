import mongoose, { Schema, model } from 'mongoose';

export interface User extends mongoose.Document {
    username: string
    password: string
}

const UserSchema = new Schema({
    username: String,
    password: String,
})

export default model<User>('User', UserSchema);