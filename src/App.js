import React, { Component } from 'react'
import Navbar from "./components/navbar/Navbar";
import Calculator from "./components/calculator/Calculator";
import axios from 'axios'

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