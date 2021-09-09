const team = {
    _players: [
      {
        firstName: 'Michael',
        lastName: 'Jordan',
        age: 56
      },
  
      {
        firstName: 'LeBron',
        lastName: 'James',
        age: 36
      },
  
      {
        firstName: 'Kevin',
        lastName: 'Durant',
        age: 32
      }
    ],
    _games: [
      {
        opponent: 'Knicks',
        teamPoints: 90,
        opponentPoints: 84
      },
  
      {
        opponent: 'Lakers',
        teamPoints: 88,
        opponentPoints: 92
      },
  
      {
        opponent: 'Suns',
        teamPoints: 103,
        opponentPoints: 100
      }
    ],
  
  
    get players(){
      return this._players;
    },
  
    get games(){
      return this._games;
    },
  
    addPlayer(firstName, lastName, age){
      let player = {
        firstName: firstName,
        lastName: lastName,
        age: age
      };
  
      this.players.push(player);
    },
  
    addGame(oppName, myTeamsPoints, oppPoints){
      const game = {
        opponent: oppName,
        teamPoints: myTeamsPoints,
        opponentPoints: oppPoints
      };
  
      this.games.push(game);
    }
  
  };
  
  team.addPlayer('Steph', 'Curry', 28);
  team.addPlayer('Lisa', 'Leslie', 44);
  team.addPlayer('Bugs', 'Bunny', 76);
  
  console.log(team.players);
  
  team.addGame('GSW', 112, 100);
  team.addGame('Clippers', 96, 101);
  team.addGame('OKC', 120, 119);
  
  console.log(team.games);