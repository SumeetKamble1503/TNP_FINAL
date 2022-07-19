import React from 'react';
import '../CSS/selectionPopup.css';
import { AiFillCloseSquare } from 'react-icons/ai';
function Popup(props) {
  //   const data = props.selections;
  return props.trigger ? (
    <div className='popup'>
      <div className='popup-inner'>
        <button className='close-btn' onClick={() => props.setTrigger(false)}>
          <AiFillCloseSquare
            size={'2em'}
            color={'#FF5C5C'}
            onMouseOver={({ target }) => (target.style.color = '#FF0000')}
            onMouseOut={({ target }) => (target.style.color = '#FF5C5C')}
          />
        </button>
        {props.children}
      </div>
    </div>
  ) : null;
}

export default Popup;
