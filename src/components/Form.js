import React from 'react'
import './FormStyles.css'



const Form = () => {
  return (
    <div>
      <div className="form">
        <form>
          <label>Your Name</label>
          <input type="text" required></input>
          <label>Email</label>
          <input type="email" required></input>
          <label>Subject</label>
          <input type="text" required></input>
          <label>Details</label>
          <textarea rows="6" placeholder="Type a short message here" required />
          <button className="btn">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Form


/*           method="POST"
          action="https://getform.io/f/edb63de3-539b-42e1-adf1-e455a912fdbe" */