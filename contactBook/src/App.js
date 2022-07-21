import { React, useState } from "react";
import { Switch, Route, Redirect, NavLink } from "react-router-dom";

import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";
// import { useState } from "react/cjs/react.production.min";

function App() {
  /*
  Define state variables for 
  contacts and appointments 
  */
  const [appointments, setAppointment] = useState([]);
  const [contacts, setContact] = useState([]);

  const ROUTES = {
    CONTACTS: "/contacts",
    APPOINTMENTS: "/appointments",
  };

  /*
  Implement functions to add data to
  contacts and appointments
  Define a callback function that, given a title, contact, date, and time, 
  adds a new appointment object with that data to the array of appointments
  */

  const addContact = (name, number, email) => {
    setContact((prev) => ([
      ...prev,
     { name: name,
      number: number,
      email: email,
     }
    ]))
  }

  const addAppointment = (title, contact, date, time) => {
    setAppointment((prev) => ([
      ...prev,
     { title: title,
      contact: contact,
      date: date,
      time: time,
     }
    ]))
  }

  return (
    <>
      <nav>

        <NavLink to={ROUTES.CONTACTS} activeClassName="active">
          Contacts
        </NavLink>

        <NavLink to={ROUTES.APPOINTMENTS} activeClassName="active">
          Appointments
        </NavLink>

      </nav>

      <main>
        <Switch>

          <Route exact path="/">
            <Redirect to={ROUTES.CONTACTS} />
          </Route>

          <Route path={ROUTES.CONTACTS}>
             {/* Add props to ContactsPage */}
            <ContactsPage contacts={contacts} addContact={addContact}/>
          </Route>

          <Route path={ROUTES.APPOINTMENTS}>
            {/* Add props to AppointmentsPage */}
            <AppointmentsPage appointments={appointments} addAppointment={addAppointment} />
          </Route>

        </Switch>
      </main>
    </>
  );
}

export default App;
