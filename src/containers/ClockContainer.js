import React from 'react';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Clock from "../components/Clock";

const ClockContainer = ({ deration }) => (
    <Clock deration={deration} />
)

ClockContainer.propTypes = {
    deration: PropTypes.number.isRequired
}

const mapStateToProps = state => ({
    deration: state.clock.deration
})

export default connect(
    mapStateToProps
)(ClockContainer);