// from http://api.football-data.org/v1/soccerseasons/398/fixtures
// for equivalent api call for another league and/or season:
// copy only the fixtures array into a variable called 'array', then:


const convertJSON = (array) => {
  let dict = {}

  array.forEach((fixture) => {
    delete fixture.links;
    delete fixture.date;
    delete fixture.status;
    delete fixture.matchday;

    dict[fixture[homeTeamName]] = {};
  });

  Object.keys(dict).forEach((team, index) => {
    dict[team]['id'] = index;
    dict[team]['results'] = [];
  });

  array.forEach((result) => {
    dict[result['homeTeamName']].results.push({
      location: 'home',
      opponent: result['awayTeamName'],
      scored: result['result']['goalsHomeTeam'],
      conceded: result['result']['goalsAwayTeam']
    });

    dict[result['awayTeamName']].results.push({
      location: 'away',
      opponent: result['homeTeamName'],
      scored: result['result']['goalsAwayTeam'],
      conceded: result['result']['goalsHomeTeam']
    });
  });

  return dict;
};

/*
Simple dict example:
var dict = {
  "Manchester United FC": {
    "id": 0,
    "results": []
  },
  "Everton FC": {
    "id": 1,
    "results": []
  },
  "AFC Bournemouth": {
    "id": 2,
    "results": []
  },
  "Leicester City FC": {
    "id": 3,
    "results": []
  },
  "Norwich City FC": {
    "id": 4,
    "results": []
  },
  "Chelsea FC": {
    "id": 5,
    "results": []
  },
  "Arsenal FC": {
    "id": 6,
    "results": []
  },
  "Newcastle United FC": {
    "id": 7,
    "results": []
  },
  "Stoke City FC": {
    "id": 8,
    "results": []
  },
  "West Bromwich Albion FC": {
    "id": 9,
    "results": []
  },
  "Aston Villa FC": {
    "id": 10,
    "results": []
  },
  "Southampton FC": {
    "id": 11,
    "results": []
  },
  "West Ham United FC": {
    "id": 12,
    "results": []
  },
  "Sunderland AFC": {
    "id": 13,
    "results": []
  },
  "Swansea City FC": {
    "id": 14,
    "results": []
  },
  "Watford FC": {
    "id": 15,
    "results": []
  },
  "Tottenham Hotspur FC": {
    "id": 16,
    "results": []
  },
  "Crystal Palace FC": {
    "id": 17,
    "results": []
  },
  "Manchester City FC": {
    "id": 18,
    "results": []
  },
  "Liverpool FC": {
    "id": 19,
    "results": []
  }
}
*/
