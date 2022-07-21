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
      <input 
        type='text'
        value={name}
        placeholder='name'
        onChange={(e) => setName(e.target.value)}/>
      <input 
        type='tel'
        value={number}
        placeholder='(123)-456-7890'
        onChange={(e) => setNumber(e.target.value)}
        pattern="[1-9][0-9]{2}-[1-9][0-9]{2}-[0-9]{4}"/>
      <input 
        type='email'
        value={email}
        placeholder='email@example.com'
        onChange={(e) => setEmail(e.target.value)}/>
      <input 
        type='submit'/>
    </form>
  );
};
