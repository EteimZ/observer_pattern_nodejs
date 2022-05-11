const post_slack_message = require('../lib/slack');
const eventEmitter = require('../api/event');

function handle_user_registered_event(user) {
    post_slack_message('sales', `${user.name} has registered with email address ${user.email}. Please spam this person incessantly.`);
}

function handle_user_upgrade_plan_event(user) {
    post_slack_message('sales', `${user.name} has upgraded their plan.`);
}

function setup_slack_event_handlers() {
    eventEmitter.on('user_registered', handle_user_registered_event);
    eventEmitter.on('user_upgrade_plan', handle_user_upgrade_plan_event);
}

module.exports = setup_slack_event_handlers;