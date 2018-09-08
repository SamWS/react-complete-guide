import React from 'react';

const userInput = (props) => {
  const style = {
    margin: '20px 0',
    border: '2px solid red'
  }

  return (
    <div>
      <input 
        type="text"
        style={style}
        onChange={props.usernameChangeHandler}
        value={props.username} />
    </div>
  )
}

export default userInput;
