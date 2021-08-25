const legends = ["Seer","Octane","Gibraltar","Caustic","Lifeline","Bloodhound","Wattson","Horizon","Valkyrie","Banglore","Revenant","Crypto","Mirage","Loba","Rampart","Pathfinder","Wraith","Fuse"];

export const name = 'legend';
export const description = 'generates a random Apex Legend for your next match!!';
export const args = 0;
export const execute = (message) => {

	message.channel.send({ content: `${legends[Math.floor(Math.random() * [legends.length])]}` });

}