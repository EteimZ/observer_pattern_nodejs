const { create_user, find_user } = require('../lib/db');
const eventEmitter = require('../api/event');
const get_random_string = require('../lib/stringtools');

function register_new_user(name, password, email) {
    // create a new user
    let user = create_user(name, password, email);

    // emit an event
    eventEmitter.emit('user_registered', user);
}

function password_forgetten(email) {
    // find the user
    let user = find_user(email);

    // generate a new reset code
    user.reset_code = get_random_string(16);

    // post an event
    eventEmitter.emit('user_password_forgetten', user);

}


function reset_password(email, code, new_password) {
    // find the user
    let user = find_user(email);

    // reset the password
    user.reset_password(code, new_password);
}

exports.register_new_user = register_new_user;
exports.password_forgetten = password_forgetten;
exports.reset_password = reset_password;
