const send_email  = require('../lib/email.js');
const eventEmitter = require('../api/event.js');

function handle_user_registered_event(user) {
    // send a welcome email
    send_email(user.name, user.email, 
        "Welcome",
        `Thanks for registering, ${user.name}!\nRegards, The DevNotes team`)
}

function handle_user_password_forgetten_event(user) {
    // send a password reset message
    send_email(user.name, user.email, "Reset your password",
     `To reset your password, use this very secure code: ${user.reset_code}.\nRegards, The DevNotes team"`)
}

function handle_user_upgrade_plan_event(user) {
    // send a thank you email
    send_email(user.name, user.email, "Thank you", `Thanks for upgrading, ${user.name}! You're gonna love it. \nRegards, The DevNotes team`)
}

function setup_email_event_handlers() {
    eventEmitter.on('user_registered', handle_user_registered_event);
    eventEmitter.on('user_password_forgetten', handle_user_password_forgetten_event);
    eventEmitter.on('user_upgrade_plan', handle_user_upgrade_plan_event);
}

module.exports = setup_email_event_handlers;