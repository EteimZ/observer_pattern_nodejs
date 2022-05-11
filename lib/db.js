const { createHash } = require('node:crypto');
  
const hash = createHash('sha256');

let users = []

class User {
    constructor(name, password, email) {
        this.name = name;
        this.password = hash.update(password).digest('hex');
        this.email = email;
        this.plan = "basic";
        this.reset_code = "";
    }

    reset_password(code, new_password) {
        if (this.reset_code != code) {
            throw "Invalid reset code";
        }

        this.password = hash.update(new_password).digest('hex');
    }

}

function create_user(name, password, email) {
    console.log(`DB: creating user database entry ${name} ${password} ${email}.`)
    let new_user = users.push(new User(name, password, email))
    return new_user
}

function find_user(email) {
    for (let i = 0; i < users.length; i++) {
        if (users[i].email == email) {
            return users[i]
        }
    throw "User with email address not found.";    
    }
}

exports.create_user = create_user;
exports.find_user = find_user;

/* create_user("John", "123", "john@gmail.com")
console.log(users)
let user = find_user("john@gmail.com") */