import React from 'react';
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Clock from "../components/Clock";
import CtrlBar from "../containers/CtrlBar";

const App = ({ deration, actions }) => (
  <div className="container">
    <Clock deration={deration} />
    <CtrlBar />
  </div>

)

App.PropTypes = {
  deration: PropTypes.number.isRequired
}

const mapStateToProps = state => ({
  deration: state.deration
})

export default connect(
    mapStateToProps  
  )(App);
