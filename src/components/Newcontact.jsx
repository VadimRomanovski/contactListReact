import React from 'react';



const Newcontact = prop => (
    <div className="main">
    <form onSubmit = {prop.setNewContact}>
      Name:
      <input type="text" id="name"  onChange = {prop.setContactName}/>
      <br></br>
      Phone:
      <input type="text" id="phone" onChange = {prop.setPhone}/>
      <br></br>
      {prop.setErr}
      <br></br>
      <input type="submit" value="ADD" id="ADD"/>
    </form>
  </div>
);


export default Newcontact;
