import express from 'express';
import path from 'path';

// Databases
import { connectDB } from './database'

// Routes
import userRoutes from './routes/userRoute'

// Initializations
const app = express();
connectDB()

// settings
app.set('port', process.env.PORT || 4000);

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
userRoutes(app)

// Starting the Server
app.listen(app.get('port'), () => {
    console.log(`Server on port`, app.get('port'));
});

export default app