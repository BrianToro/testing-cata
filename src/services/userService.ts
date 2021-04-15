import UserModel from '../models/userModel'

interface IUserCreate {
    username: string
    password: string
}

interface IUserGet {
    id: string
}

interface ServiceResponse {
    status: 'success' | 'error'
    user?: IUserCreate
    error?: string
}

class UserServices {

    public create = async (params: IUserCreate): Promise<ServiceResponse> => {

        //@INFO: Comprobar que vengan los campos
        if (!params.username && !params.password) {
            return {
                status: 'error',
                error: 'No se ha enviado información'
            }
        }

        //@INFO: Validación de que no venga vació
        if (params.username === '' || params.password === '') {
            return {
                status: 'error',
                error: 'Campos no rellenados'
            }
        }

        //@INFO: Validación de que no haya otro usuario con el mismo username
        const validateUsername = await UserModel.findOne({ username: params.username })
        if (validateUsername) {
            return {
                status: 'error',
                error: 'Username repetido'
            }
        }

        try {
            const response = await UserModel.create(params)
            return {
                status: 'success',
                user: response
            }

        } catch (e) {
            return {
                status: 'error',
                error: 'Sucedió un error durante la creación'
            }
        }
    }

    public get = async (params: IUserGet): Promise<ServiceResponse> => {

        try {
            const findUser = await UserModel.findOne({ _id: params.id })

            if (findUser) {
                return {
                    status: 'success',
                    user: findUser
                }
            } else {
                return {
                    status: 'error',
                    error: 'Usuario no encontrado'
                }
            }
        } catch (e) {
            return {
                status: 'error',
                error: 'Usuario no encontrado'
            }
        }
    }

}

const userService = new UserServices()
export { userService }