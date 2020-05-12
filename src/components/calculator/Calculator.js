import React from "react";
import axios from 'axios';

class Calculator extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      navbarOpen: false,
      calcResult: 6,
      noRollsInHouse: 3,
      noSheetsPerRoll: 160,
      noSheetsPerWipe: 3,
      noWipeableVisits: 3,
      noWipesPerTrip: 3,
      noPeopleInHousehold: 3
    };
  }

  handleInputChange = async (event) => {
    switch (event.target.name) {
      case "noRollsInHouse":
        this.setState({ noRollsInHouse: event.target.value });
        break;
      case "noSheetsPerRoll":
        this.setState({ noSheetsPerRoll: event.target.value });
        break;
      case "noSheetsPerWipe":
        this.setState({ noSheetsPerWipe: event.target.value });
        break;
      case "noWipeableVisits":
        this.setState({ noWipeableVisits: event.target.value });
        break;
      case "noWipesPerTrip":
        this.setState({ noWipesPerTrip: event.target.value });
        break;
      case "noPeopleInHousehold":
        this.setState({ noPeopleInHousehold: event.target.value });
        break;
    }

    const axiosconfig = {
      method: 'get',
      url: 'https://tp-calc-fa.azurewebsites.net/api/CountdownToExstinktion',
      params: {
        rollsInHouse: this.state.noRollsInHouse,
        wipeableVisits: this.state.noWipeableVisits,
        sheetsPerWipe: this.state.noSheetsPerWipe,
        wipesPerTrip: this.state.noWipesPerTrip,
        sheetsPerRoll: this.state.noSheetsPerRoll,
        peopleInHousehold: this.state.noPeopleInHousehold
      },
      headers: {
        'x-functions-key': 'CB5i/ZkjhzCbc5Lx84015L2KUsRzJJdBwqJo43J8AdDyZ9r2MGYQQg=='
      }
    }

    var calcRes;
    
    await axios(axiosconfig)
      .then(function (response) {
          calcRes = response.data;
      })
      .catch(function (error) {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log('Error', error.message);
        }
        console.log(error.config);
        return alert(error.message);
      })
      this.setState({ calcResult: calcRes });
  }

  /*
  runCalculation = () => {
    var res = -1;
    var rollsInHouse = this.state.noRollsInHouse;
    var wipeableVisits = this.state.noWipeableVisits;
    var sheetsPerWipe = this.state.noSheetsPerWipe;
    var wipesPerTrip = this.state.noWipesPerTrip;
    var sheetsPerRoll = this.state.noSheetsPerRoll;
    var peopleInHousehold = this.state.noPeopleInHousehold;

    var availableWipeage = sheetsPerRoll * rollsInHouse
    var usage = sheetsPerWipe * wipesPerTrip * wipeableVisits * peopleInHousehold

    res = Math.round(availableWipeage / usage)

    this.setState({ calcResult: res });

  }
*/

  render() {

    return (
      <>
        <div class="CalcContainer">
          <div class="CalcFieldsContainer">
            <div class="CalcField"><label>Number of rolls in your house</label><input name="noRollsInHouse" type="number" min="0" value={this.state.noRollsInHouse} onChange={this.handleInputChange.bind(this)}></input></div>
            <div class="CalcField"><label>Number of wipeable toilet visits per day</label><input name="noWipeableVisits" type="number" min="1" value={this.state.noWipeableVisits} onChange={this.handleInputChange.bind(this)}></input></div>
            <div class="Advanced">Advanced Settings</div>
            <div class="CalcField"><label>Number of wipes per trip</label><input name="noWipesPerTrip" type="number" min="1" value={this.state.noWipesPerTrip} onChange={this.handleInputChange.bind(this)}></input></div>
            <div class="CalcField"><label>Number of sheets per wipe</label><input name="noSheetsPerWipe" type="number" min="1" value={this.state.noSheetsPerWipe} onChange={this.handleInputChange.bind(this)}></input></div>
            <div class="CalcField"><label>Number of sheets on a roll</label><input name="noSheetsPerRoll" type="number" min="1" value={this.state.noSheetsPerRoll} onChange={this.handleInputChange.bind(this)}></input></div>
            <div class="CalcField"><label>Number of people in household</label><input name="noPeopleInHousehold" type="number" min="1" value={this.state.noPeopleInHousehold} onChange={this.handleInputChange.bind(this)}></input></div>
          </div>
          <div class="About">
            <div class="Result">
              <div class="Prefix">Number of days until you wipe your last</div><div class="NoSheets">{this.state.calcResult}</div>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default Calculator