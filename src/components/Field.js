import React from 'react';

function Field(props) {
  return (
    <button className="field" onClick={props.onClick}>
      {props.value}
    </button>
  )
}

export default Field;