const { create_user, find_user } = require('../lib/db');
const eventEmitter = require('../api/event');

function upgrade_plan(email){
    // find the user
    let user = find_user(email);

    // upgrade the plan
    user.plan = "paid";

    // post an event
    eventEmitter.emit('user_upgrade_plan', user);
}

module.exports = upgrade_plan;