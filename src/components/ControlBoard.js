import React from 'react';
import Button from './Button';

const ControlBoard = ({onIncrement, onDecrement}) =>
  <div className="control-board">
    <Button
      onClick={()=> onIncrement()}
      >
      Up
    </Button>
    <Button
      onClick={()=> onDecrement()}
      >
      Down
    </Button>
  </div>

export default ControlBoard;
