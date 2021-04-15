import supertest from 'supertest'
import app from '../../index'
import UserModel from '../../models/userModel'

const api = supertest(app)

describe('User Test suit', () => {

    beforeAll(async () => {
        await UserModel.collection.drop()
    })

    test('UserRoute: /create - success', async () => {

        const user = {
            username: 'user-demo',
            password: '123456'
        }

        await api
            .post('/api/user/create')
            .send(user)
            .expect(201)
            .expect((res) => {
                expect(res.body.user).toBeDefined()
            })
    })
})