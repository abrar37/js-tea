function setUserName(username){
    // Complex DB calls
    this.username = username
    console.log("Called");
}

function createUser(username, email, password) {
    setUserName.call(this, username)

    this.email = email
    this.password = password
}

const chai = new createUser("Chai", "chai@fb.com", "a1b2c3")
console.log(chai);