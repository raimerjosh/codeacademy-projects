import React from "react";
import { ContactPicker } from "../contactPicker/ContactPicker";

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };
  
  console.log(contacts);
  
  const getContactNames = () => {
    return contacts.map((contact) => contact.name);
  };

  

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input type='text' 
                placeholder="Appointment Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}>
        </input>
      </label>
      <ContactPicker value={contact} 
                      onChange={(e) => setContact(e.target.value)} 
                      name='contact'
                      placeholder='Appointment with'
                      contacts={getContactNames()}/>
      <label>
        <input type='date' 
                value={date}
                onChange={(e) => setDate(e.target.value)}>
        </input>
      </label>
      <label>
        <input type='time' 
                value={time}
                onChange={(e) => setTime(e.target.value)}>
        </input>
      </label>
      
      <input type='submit' value='Add Appointment'></input>
      
    </form>
  );
};
