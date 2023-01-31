import React from 'react'

function Form(props) {
  return (
    <form className="form">
      <input type="text" placeholder="Username"/>
      <input type="text" placeholder="Password"/>
      {!props.isRegistered&&<input type="text" placeholder="Confirm-Password"/>}
      <button type="submit">{(props.isRegistered)?"Login":"Register"}</button>
    </form>
  )
}

export default Form
