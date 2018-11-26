import React, { Component } from "react";
import "../App.css";

class Match extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isStandingsLoaded: false
    };
  }

  componentDidMount() {
    fetch(
      "https://apifootball.com/api/?action=get_events&from=2018-11-24&to=2018-11-25&league_id=62&APIkey=5259455af2e41bf730e37e6c4cd48c9c03a8c2dfa89f610cd7eee3bf38a4ab84"
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
          <strong>Loading Matches....</strong>
        </div>
      );
    } else {
      return (
        <div className="App">
          <h3>Standings</h3>
          <ul>
            {items.map(item => (
              <li key={item.match_id}>
                {item.match_hometeam_score != item.match_awayteam_score ? (
                  item.match_hometeam_score > item.match_awayteam_score ? (
                    <span role="img" aria-label="emoji">
                      &#9989;
                    </span>
                  ) : (
                    <span role="img" aria-label="emoji">
                      &#10060;
                    </span>
                  )
                ) : (
                  ""
                )}
                {item.match_hometeam_name} ({item.match_hometeam_score}) : (
                {item.match_awayteam_score}) {item.match_awayteam_name}
                {item.match_hometeam_score != item.match_awayteam_score ? (
                  item.match_hometeam_score < item.match_awayteam_score ? (
                    <span role="img" aria-label="emoji">
                      &#9989;
                    </span>
                  ) : (
                    <span role="img" aria-label="emoji">
                      &#10060;
                    </span>
                  )
                ) : (
                  ""
                )}
              </li>
            ))}
          </ul>
        </div>
      );
    }
  }
}

export default Match;
