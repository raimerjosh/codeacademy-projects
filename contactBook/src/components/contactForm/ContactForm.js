import React from "react";

export const ContactForm = ({
  name,
  setName,
  number,
  setNumber,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <label> 
        <input 
          type='text'
          value={name}
          placeholder='Contact Name'
          onChange={(e) => setName(e.target.value)}/>
      </label> 
      <label> 
        <input 
          type='tel'
          value={number}
          placeholder='Phone Number (###-###-####)'
          onChange={(e) => setNumber(e.target.value)}
          pattern="[1-9][0-9]{2}-[1-9][0-9]{2}-[0-9]{4}"/>
        </label> 
      <label>
        <input 
          type='email'
          value={email}
          placeholder='Contact Email (email@example.com)'
          onChange={(e) => setEmail(e.target.value)}/>
      </label> 
        <input 
          type='submit' value="Add Contact"/>
      
      
    </form>
  );
};
