import React, { Component } from 'react'
import Navbar from "./components/navbar/Navbar";
import Calculator from "./components/calculator/Calculator";
import axios from 'axios'
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

  handleNoRollsInHouseChange = (event) => {
    this.setState({ noRollsInHouse: event.target.value });
    this.runCalculation();
  }

  handleNoWipeableVisitsChange = (event) => {
    this.setState({ noWipeableVisits: event.target.value });
    this.runCalculation();
  }

  handleNoSheetsPerWipeChange(event) {
    this.setState({ noSheetsPerWipe: event.target.value });
    this.runCalculation();
  }

  handleNoWipesPerTripChange(event) {
    this.setState({ noWipesPerTrip: event.target.value });
    this.runCalculation();
  }

  handleNoSheetsPerRollChange(event) {
    this.setState({ noSheetsPerRoll: event.target.value });
    this.runCalculation();
  }

  handleNoPeopleInHouseholdChange(event) {
    this.setState({ noPeopleInHousehold: event.target.value });
    this.runCalculation();
  }

  runCalculation = () => {
    const axiosconfig = {
      method: 'get',
      url: 'https://tp-calc-fa.azurewebsites.net/api/CountdownToExstinktion',
      params: {
        rollsInHouse: this.state.noRollsInHouse.toString(),
        wipeableVisits: this.state.noWipeableVisits.toString(),
        sheetsPerWipe: this.state.noSheetsPerWipe.toString(),
        wipesPerTrip: this.state.noWipesPerTrip.toString(),
        sheetsPerRoll: this.state.noSheetsPerRoll.toString(),
        peopleInHousehold: this.state.noPeopleInHousehold.toString(),
      },
      headers: {
        'x-functions-key': 'CB5i/ZkjhzCbc5Lx84015L2KUsRzJJdBwqJo43J8AdDyZ9r2MGYQQg=='
      }
    }

    axios(axiosconfig)
      .then(function (response) {
        this.setState({ calcResult: response.data });
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
        alert(error.message);
      })
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
        <Navbar
          navbarState={this.state.navbarOpen}
          handleNavbar={this.handleNavbar}
        />
        <GlobalStyle />
        <Calculator />
      </>
    )
  }
}

export default App