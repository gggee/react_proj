import React, { useState } from 'react';
import "../pages/css/counter_stl.css";

function Event({ onSubmit }) {
  const [eventData, setEventData] = useState({
    title: '',
    date: '',
  });

  const input_chang = (e) => {
    const { name, value } = e.target;
    setEventData({
      ...eventData,
      [name]: value,
    });
  };

  const submit = (e) => {
    e.preventDefault();
    if (typeof onSubmit === 'function') {
      onSubmit(eventData);
    }
    setEventData({
      title: '',
      date: '',
    });
  };

  return (
    <form onSubmit={submit}>
      <label>Title: <input type="text" name="title" value={eventData.title} onChange={input_chang}/></label>
      <label>Date: <input type="date" name="date" value={eventData.date} onChange={input_chang}/></label>
      <button type="submit">Add Event</button>
    </form>
  );
}

export default Event;
