const setup_slack_event_handlers = require('./api/slack_listener');
const setup_log_event_handlers = require('./api/log_listener');
const setup_email_event_handlers = require('./api/email_listener');

const { register_new_user, password_forgetten, reset_password } = require('./api/user');
const upgrade_plan = require('./api/plan');

// initialize the event handlers
setup_slack_event_handlers();
setup_log_event_handlers();
setup_email_event_handlers();


// register a new user
register_new_user('John Doe', '123456', 'John@gmail.com');

// request a password reset
password_forgetten('John@gmail.com');

// upgrade the user's plan
upgrade_plan('John@gmail.com');