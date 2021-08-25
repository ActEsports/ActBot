const agents = ["Yoru","Astra","KAY/O","Brimstone","Phoenix","Sage","Skye","Raze","Jett","Omen","Breach","Killjoy","Reyna","Cypher","Viper","Sova"];

export const name = 'agent';
export const description = 'generates a random Apex agent for your next match!!';
export const args = 0;
export const execute = (message) => {

	message.channel.send({ content: `${agents[Math.floor(Math.random() * [agents.length])]}` });

}