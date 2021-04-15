import express, { Router, Application } from 'express'
import { userController } from '../controllers/userController'

const userRoutes = (app: Application) => {

    const router: Router = Router()

    app.use('/api/user/', router)
    app.use(express.json())
    router.post('/create', userController.create)
    router.get('/:id', userController.get)
}

export default userRoutes