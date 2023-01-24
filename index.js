const fs = require('fs');

// reading file synchronously
let playerDataViaSynchronousMethod = JSON.parse(fs.readFileSync('player.json'));
console.log("PLAYER DATA VIA SYNCHRONOUS METHOD", playerDataViaSynchronousMethod)

// reading file asynchronously
fs.readFile('player.json', (err, data) => {
  if(err) throw err;
  let playerDataViaAsynchronousMethod = JSON.parse(data);
  console.log("PLAYER DATA VIA ASYNCHRONOUS METHOD", playerDataViaAsynchronousMethod) 
})

// ADDING ANOTHER PLAYER TO JSON FILE
let playerData = JSON.parse(fs.readFileSync('player.json'));
playerData.push({ firstname: 'GHI', lastname: 'JKL', runs: 1000, iplTeam: 'Jaipur', wickets: 3, matchPlayed: 15 });
fs.writeFileSync('player.json', JSON.stringify(playerData));
 
