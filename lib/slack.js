function post_slack_message(channel, message) {
    console.log(`[SlackBot - ${channel}]: ${message}`)
}

module.exports = post_slack_message;