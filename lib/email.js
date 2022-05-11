function send_email(name, address, subject, body) {
    console.log(`Sending email to ${name} (${address})`)
    console.log("===================")
    console.log(`Subject: ${subject}`)
    console.log(body)
}

module.exports = send_email;
// send_email("Eteimorde", "10 wichella", "Caking", "The is a cake.")