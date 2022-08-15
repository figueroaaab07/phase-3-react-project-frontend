import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function UserForm( {addUser} ) {
  const initUser = {id: null, first_name: '', last_name: '', birth_date: ''};
  const [user, setUser] = useState(initUser);
  const [date, setDate] = useState(new Date());
  const locale = 'fr-CA'; 

  function handleChange(e) {
    console.log(e.target);
    const {name, value} = e.target;
    setUser({...user, [name]: value});
  }

  function handleSubmit(e) {
    e.preventDefault();
    const new_birth_date = {
      ["birth_date"]: new Intl.DateTimeFormat(
        locale, 
        {
          year: "numeric", 
          month: "2-digit", 
          day: "2-digit"
        }
        ).format(date)
    }
    setUser({...user, new_birth_date})
    console.log(new_birth_date["birth_date"])
    console.log(user.birth_date)
    console.log(user);
    handleChange(e, addUser(user, new_birth_date["birth_date"]));
  }

  return (
    <div className="form">
      <form>
        <label>First Name</label>
        <input className="user_name" type="text" value={user.first_name} name="first_name" onChange={handleChange} /><br></br>
        <label>Last Name</label>
        <input className="user_name" type="text" value={user.last_name} name="last_name" onChange={handleChange} /><br></br>
        <label>Date of Birth</label>
        <Calendar
          onChange={setDate}
          value={date}
          maxDate={new Date()}
        />
        <button className="button-primary" type="submit" onClick={handleSubmit} >Add user</button>
      </form>
    </div>
  )
}

export default UserForm;