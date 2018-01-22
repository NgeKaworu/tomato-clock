import React from 'react';
import ClockContainer from "./ClockContainer";
import ControlGroupContainer from "./ControlGroupContainer";

const TomatoClock = () => (
  <div className="container">
    <ClockContainer />
    <ControlGroupContainer/>
    <ControlGroupContainer todoStyle/>
  </div>
)

export default TomatoClock

