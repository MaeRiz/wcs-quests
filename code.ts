const messsageText: string = "Hello Bob!"; // you should type on this line
const messageCreatedAt: Date = new Date(); // this one too

function stringifyMessage(text: string, createdAt: Date): string { // this one too
	return `${text}, the ${createdAt.toLocaleDateString()}`;
}

type Message = {
    from: string;
    message: string;
    isRead?: boolean
}

const message1: Message = { from: "Bob", message: "Hello Alice!", isRead: true };
const message2: Message = { from: "Alice", message: "Hi Bob!" };


const messages: Message[] = [message1, message2]; // type this line
function readMessages(messages: Message[]): number { // this one too
    messages.map(item => item.isRead = true)
    return messages.length
}
readMessages(messages);
console.log(messages)

type Notif = {
    at: number;
    state: "unread" | "read";
}

const notification1: Notif = { at: 1694011133, state: "unread" };
const notification2: Notif = { at: 1694011532, state: "read" };

function readNotificationOrMessage(notificationOrMessage: Message | Notif): void { // type this line
	if ("state" in notificationOrMessage) {
        notificationOrMessage.state = "read"
    } else {
        notificationOrMessage.isRead = true
    }
}

readNotificationOrMessage(notification2)
// console.log(notification2)

