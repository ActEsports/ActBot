export const name = 'ping';
export const description = 'Test command';
export const args = 0;
export const execute = (message) => {

	message.channel.send({ content: "pong!" });

}