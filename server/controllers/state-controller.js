const States = require('../models/states-model')

getStates = async(req, res) =>{
    debugger;
    await States.find({}, (err,states) =>{
        if(err){
            debugger;
            return res.status(400).json({sucess : false, error: err})
        }
        if(!states.length){
            return res
                   .status(404)
                   .json({success : false, error : 'States Not found'})
        }
        return res.status(200).json({ success: true, data: articles })
    }).catch(err => console.log(err))
}

module.exports = {
    getStates
}