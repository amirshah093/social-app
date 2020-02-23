const User = require("../module/User");



exports.login = () =>{
    
}

exports.logout = () =>{

}

exports.register = (req, res) =>{
    let user = new User(req.body)
    user.register()
    if(user.errors.length ){
        res.send(user.errors)
    }
    else {
        res.send(user.errors)
    }
    else {
        res.send("congrates There are no  errors")
    }
}
exports.home = (req, res) =>{
    res.render('home-guest');
}