const { Client } = require('../models')

class userController {
    static async register(req, res) {
        try {
            const { name, phoneNumber, email, password, address, photo } = req.body
            const createClient = await Client.create({ name, phoneNumber, email, password, address, photo })
            res.status(201).json({ message: `user with id ${createClient.id} and email ${createClient.name} has been created` })
        } catch (err) {
            console.log(err);
            res.status(500).json({ message: `internal server error` })
        }
    }

    static async getClient(req, res){
        try {
            const response = await Client.findAll()
            res.status(200).json(response)
        } catch (err) {
            console.log(err);
            res.status(500).json({ message: `internal server error` })
        }
    }
}

module.exports = userController