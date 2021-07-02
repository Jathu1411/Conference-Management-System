const notification = require('../models/notification')

const postNotification = async (req,res) => {
    if(req.body){
        const noti = new notification({
            content : req.body.content,
            user : req.body.user
        })
        await noti.save()
        .then(data => {
            res.status(200).send({data : data})
        })
        .catch(error => {
            res.status(500).send({error : error.message})
        })
    }
}

module.exports = {
    postNotification
}