import React from 'react';
import {connect} from 'react-redux';


export function AuralStatus(props) {
  return (
    <p
      id="status-readout"
      className="visuallyhidden"
      aria-live="assertive"
      aria-atomic="true"
    >
      {props.auralStatus}
    </p>
  );
}

function mapToStateToProps(state){
  return{
    auralStatus: state.auralStatus
  }
}

export default connect(mapToStateToProps)(AuralStatus)