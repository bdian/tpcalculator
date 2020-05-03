import React, { Component } from 'react'
import Navbar from "./components/navbar/Navbar";
//import Calculator from "./components/Calculator";

import GlobalStyle from './styles/Global';

class App extends Component {
  state = {
    navbarOpen: false,
    calcResult: 6,
    noRollsInHouse: 3,
    noSheetsPerRoll: 160,
    noSheetsPerWipe: 3,
    noWipeableVisits: 3,
    noWipesPerTrip: 3,
    noPeopleInHousehold: 3
  }

  handleNavbar = () => {
    this.setState({ navbarOpen: !this.state.navbarOpen });
  }

  handleNoRollsInHouseChange(event) {
    this.setState({noRollsInHouse: event.target.value});
    this.runCalculation();
  }

  handleNoWipeableVisitsChange(event) {
    this.setState({noWipeableVisits: event.target.value});
    this.runCalculation();
  }

  handleNoSheetsPerWipeChange(event) {
    this.setState({noSheetsPerWipe: event.target.value});
    this.runCalculation();
  }

  handleNoWipesPerTripChange(event) {
    this.setState({noWipesPerTrip: event.target.value});
    this.runCalculation();
  }

  handleNoSheetsPerRollChange(event) {
    this.setState({noSheetsPerRfoll: event.target.value});
    this.runCalculation();
  }

  handleNoPeopleInHouseholdChange(event) {
    this.setState({noPeopleInHousehold: event.target.value});
    this.runCalculation();
  }

  runCalculation = () => {
    var res = -1;
    var rollsInHouse = this.state.noRollsInHouse;
    var wipeableVisits = this.state.noWipeableVisits;
    var sheetsPerWipe = this.state.noSheetsPerWipe;
    var wipesPerTrip = this.state.noWipesPerTrip;
    var sheetsPerRoll = this.state.noSheetsPerRoll;
    var peopleInHousehold = this.state.noPeopleInHousehold;

    var availableWipeage =  sheetsPerRoll * rollsInHouse
    var usage = sheetsPerWipe * wipesPerTrip * wipeableVisits * peopleInHousehold 

    res = Math.round(availableWipeage / usage)

    this.setState({calcResult: res});

  }

  render() {

    return (
      <>
        <Navbar
          navbarState={this.state.navbarOpen}
          handleNavbar={this.handleNavbar}
        />
        <GlobalStyle />

        <div class="CalcContainer">
          <div class="CalcFieldsContainer">
            <div class="CalcField"><label>Number of rolls in your house</label><input type="number" min="0" value={this.state.noRollsInHouse} onChange={this.handleNoRollsInHouseChange.bind(this)}></input></div>
            <div class="CalcField"><label>Number of wipeable toilet visits per day</label><input type="number" min="1" value={this.state.noWipeableVisits} onChange={this.handleNoWipeableVisitsChange.bind(this)}></input></div>
            <div class="Advanced">Advanced Settings</div>
            <div class="CalcField"><label>Number of wipes per trip</label><input type="number" min="1" value={this.state.noWipesPerTrip} onChange={this.handleNoWipesPerTripChange.bind(this)}></input></div>
            <div class="CalcField"><label>Number of sheets per wipe</label><input type="number" min="1" value={this.state.noSheetsPerWipe} onChange={this.handleNoSheetsPerWipeChange.bind(this)}></input></div>
            <div class="CalcField"><label>Number of sheets on a roll</label><input type="number" min="1" value={this.state.noSheetsPerRoll} onChange={this.handleNoSheetsPerRollChange.bind(this)}></input></div>
            <div class="CalcField"><label>Number of people in household</label><input type="number" min="1" value={this.state.noPeopleInHousehold} onChange={this.handleNoPeopleInHouseholdChange.bind(this)}></input></div>
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

export default App