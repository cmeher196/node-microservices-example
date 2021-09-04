const readLater = async (req,res) =>{
    res.send('success data')
}

const readNow = async (req, res) =>{
    res.send('read now');
}

module.exports={
    readLater,
    readNow
}