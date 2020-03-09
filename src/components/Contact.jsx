import React from 'react';

const Contact = prop => (
      <div>
        <div className="n">
           <p>
            Name:
          <span className="nameSpan">
            {prop.Name}
          </span>
          </p>
          <button type="button" className="xButton" onClick={()=>prop.deleteContact(prop.Key)} >remove</button>
        </div>
        <div className="p">
            Phone: 
          <span className="phoneSpan">
            {prop.Phone}
          </span>
        </div>
      </div>
    )
export default Contact;
