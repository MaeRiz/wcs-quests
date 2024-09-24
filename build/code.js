"use strict";
const messsageText = "Hello Bob!"; // you should type on this line
const messageCreatedAt = new Date(); // this one too
function stringifyMessage(text, createdAt) {
    return `${text}, the ${createdAt.toLocaleDateString()}`;
}
const message1 = { from: "Bob", message: "Hello Alice!", isRead: true };
const message2 = { from: "Alice", message: "Hi Bob!" };
const messages = [message1, message2]; // type this line
function readMessages(messages) {
    messages.map(item => item.isRead = true);
    return messages.length;
}
readMessages(messages);
console.log(messages);
const notification1 = { at: 1694011133, state: "unread" };
const notification2 = { at: 1694011532, state: "read" };
function readNotificationOrMessage(notificationOrMessage) {
    if ("state" in notificationOrMessage) {
        notificationOrMessage.state = "read";
    }
    else {
        notificationOrMessage.isRead = true;
    }
}
readNotificationOrMessage(notification2);
// console.log(notification2)
