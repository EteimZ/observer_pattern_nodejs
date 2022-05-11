const log = require('../lib/log');
const eventEmitter = require('../api/event');


function handle_user_registered_event(user) {
    log(`User registered with email address ${user.email}`);
}

function handle_user_password_forgetten_event(user) {
    log(`User with email address ${user.email} requested a password reset`);
}

function handle_user_upgrade_plan_event(user) {
    log(`User with email address ${user.email} upgraded to their plan`);
}

function setup_log_event_handlers() {
    eventEmitter.on('user_registered', handle_user_registered_event);
    eventEmitter.on('user_password_forgetten', handle_user_password_forgetten_event);
    eventEmitter.on('user_upgrade_plan', handle_user_upgrade_plan_event);
}

module.exports = setup_log_event_handlers;