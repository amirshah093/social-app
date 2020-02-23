
let User = (data) =>{
    this.data = data
    this.errors = []
}

User.prototype.validate = () =>{
    if(this.data.username == "") {
        this.errors.push("you must provide the a valid user name")
    }
    if(this.data.email == "") {
        this.errors.push("you must provide the a valid email")
    }
    if(this.data.password == "") {
        this.errors.push("you must provide the a valid Password")
    }
}

User.prototype.register = () => {
    //step #1: Validate User Data
    this.validate()

    // Step #2 Only if tere are no validation errors

    // then save the user data into a database
}

module.exports = User