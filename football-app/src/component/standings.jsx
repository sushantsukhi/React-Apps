import React, { Component } from "react";
import "../App.css";

class Standings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isStandingsLoaded: false
    };
  }

  componentDidMount() {
    fetch(
      "https://apifootball.com/api/?action=get_standings&league_id=62&APIkey=5259455af2e41bf730e37e6c4cd48c9c03a8c2dfa89f610cd7eee3bf38a4ab84"
    )
      .then(result => result.json())
      .then(jsonResult => {
        console.log(jsonResult);
        this.setState({
          isStandingsLoaded: true,
          items: jsonResult
        });
      });
  }

  render() {
    var { isStandingsLoaded, items } = this.state;

    if (!isStandingsLoaded) {
      return (
        <div>
          <strong>Loading Standings....</strong>
        </div>
      );
    } else {
      return (
        <div className="App">
          <h3>Standings</h3>

          {/* This logic is used to filter JSON object items */}
          {items
            .reduce(
              (x, y) =>
                x.findIndex(e => e.team_name == y.team_name) < 0
                  ? [...x, y]
                  : x,
              []
            )
            .map(item => console.log(item))}

          {/* This logic is used to sort JSON object items */}
          {items
            .sort(
              (a, b) => a.overall_league_position - b.overall_league_position
            )
            .map(item => console.log(item))}
          <table>
            <thead>
              <tr>
                <th colSpan="2" />
                <th colSpan="7">Overall</th>
                <th colSpan="7">Home</th>
                <th colSpan="7">Away</th>
              </tr>
              <tr>
                <th>Position</th>
                <th>Team</th>
                <th>Matches</th>
                <th>Won</th>
                <th>Draw</th>
                <th>Lost</th>
                <th>GF</th>
                <th>GA</th>
                <th>Points</th>
                <th>Matches</th>
                <th>Won</th>
                <th>Draw</th>
                <th>Lost</th>
                <th>GF</th>
                <th>GA</th>
                <th>Points</th>
                <th>Matches</th>
                <th>Won</th>
                <th>Draw</th>
                <th>Lost</th>
                <th>GF</th>
                <th>GA</th>
                <th>Points</th>
              </tr>

              {items.map(item => (
                <tr key={item}>
                  <td>{item.overall_league_position}</td>
                  <td>{item.team_name}</td>
                  <td>{item.overall_league_payed}</td>
                  <td>{item.overall_league_W}</td>
                  <td>{item.overall_league_D}</td>
                  <td>{item.overall_league_L}</td>
                  <td>{item.overall_league_GF}</td>
                  <td>{item.overall_league_GA}</td>
                  <td>{item.overall_league_PTS}</td>
                  <td>{item.home_league_payed}</td>
                  <td>{item.home_league_W}</td>
                  <td>{item.home_league_D}</td>
                  <td>{item.home_league_L}</td>
                  <td>{item.home_league_GF}</td>
                  <td>{item.home_league_GA}</td>
                  <td>{item.home_league_PTS}</td>
                  <td>{item.away_league_payed}</td>
                  <td>{item.away_league_W}</td>
                  <td>{item.away_league_D}</td>
                  <td>{item.away_league_L}</td>
                  <td>{item.away_league_GF}</td>
                  <td>{item.away_league_GA}</td>
                  <td>{item.away_league_PTS}</td>
                </tr>
              ))}
            </thead>
          </table>
        </div>
      );
    }
  }
}

export default Standings;
