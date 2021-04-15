import { Request, Response } from 'express';
import { userService }  from '../services/userService'

class UserController {

    public create = async (req: Request, res: Response) => {
        const response = await userService.create(req.body)

        if (response.status === 'success') {
            res.status(201).json({
                user: response.user,
            })
        }

        if (response.status === 'error') {
            res.status(400).json({
                error: response.error
            })
        }
    }

    public get = async (req: Request, res: Response) => {
        const response = await userService.get(req.params as any)
        if (response.status === 'success') {
            res.status(200).json({
                user: response.user,
            })
        }

        if (response.status === 'error') {
            res.status(404).json({
                error: response.error
            })
        }
    }
}

const userController = new UserController()
export { userController }