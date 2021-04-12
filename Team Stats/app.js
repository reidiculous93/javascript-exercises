const team = {
  _players: [
    {
      firstName: "George",
      lastName: "Springer",
      age: 29,
    },
    {
      firstName: "Yordan",
      lastName: "Alvarez",
      age: 25,
    },
    {
      firstName: "Carlos",
      lastName: "Correa",
      age: 28,
    },
  ],
  _games: [
    {
      opponent: "Athletics",
      teamPoints: 9,
      opponentPoints: 2,
    },
    {
      opponent: "Angels",
      teamPoints: 6,
      opponentPoints: 4,
    },
    {
      opponent: "Rangers",
      teamPoints: 6,
      opponentPoints: 1,
    },
  ],
  get players() {
    return this._players;
  },
  get games() {
    return this._games;
  },
  addPlayer(firstName, lastName, age) {
    let player = {
      firstName: firstName,
      lastName: lastName,
      age: age,
    };
    this.players.push(player);
  },
  addGame(opponentName, teamPoints, opponentPoints) {
    let game = {
      opponent: opponentName,
      teamPoints: teamPoints,
      opponentPoints: opponentPoints,
    };
    this.games.push(game);
  },
};

team.addPlayer("Steph", "Curry", 28);
team.addPlayer("Lisa", "Leslie", 44);
team.addPlayer("Bugs", "Bunny", 76);

team.addGame("Mariners", 5, 3);
team.addGame("Yankees", 15, 3);
team.addGame("Red Sox", 12, 3);

console.log(team._players);
console.log(team._games);
