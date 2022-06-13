import styled from "styled-components";
//import Calendar from "react-calendar";
import 'react-big-calendar/lib/css/react-big-calendar.css'
import { useState } from "react";
import "react-calendar/dist/Calendar.css";
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "react-big-calendar/lib/css/react-big-calendar.css";



const Body = () => {
  const [value, onChange] = useState(new Date());

  //Events data 
  const events = [
    {
        title: "Big Meeting",
        allDay: true,
        start: new Date(2021, 6, 0),
        end: new Date(2021, 6, 0),
    },
    {
        title: "Vacation",
        start: new Date(2021, 6, 7),
        end: new Date(2021, 6, 10),
    },
];

  //Add event 
  const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" });
  const [allEvents, setAllEvents] = useState(events);

  //handle event 
  const handleAddEvent = () => {
    setAllEvents([...allEvents, newEvent]);
}

  const localizer = momentLocalizer(moment)

  return (
    <Wrapper>
      <Title>Body Practice</Title>
      <Description>
        Track your physical health.
        <ul>
          <li>Organize your weekly meals</li>
          <li>Plan your daily exercises</li>
          <li>Set your body goals</li>
        </ul>
      </Description>
            <AddEventWrapper>
            <h1>Plan your month</h1>
            <div className="AddEventRange">
                <input type="text" placeholder="Add Title" value={newEvent.title} onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })} />
                <DatePicker placeholderText="Start Date" selected={newEvent.start} onChange={(start) => setNewEvent({ ...newEvent, start })} />
                <DatePicker placeholderText="End Date" selected={newEvent.end} onChange={(end) => setNewEvent({ ...newEvent, end })} />


                <button  className="AddEventButton" onClick={handleAddEvent}>
                    Add Event
                </button>
            </div>
            </AddEventWrapper>
            <Calendar localizer={localizer} events={allEvents} startAccessor="start" endAccessor="end" style={{ height: 500, margin: "50px" }} />

    </Wrapper>
  );
};

export default Body;

const Wrapper = styled.div`
  margin: 100px;
`;
const Title = styled.h1`
  font-weight: bold;
  font-size: 50px;
  display: flex;
  font-family: "Roboto", sans-serif;
  font-style: italic;
  justify-content: center;
`;

const Description = styled.h1`
  font-weight: bold;
  font-size: 40px;
  margin: 0px 350px;
  display: flex;
  font-family: "Roboto", sans-serif;
  font-style: italic;
  display: flex;
  flex-direction: column;
  ul {
    font-size: 30px;
    font-style: normal;
    font-weight: 300;
  }
`;

const AddEventWrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;

h1, h2, input{
  font-family: "Roboto", sans-serif;
  font-style: italic;
}

input{
  display: flex;
  align-self: center;
  align-items: center;
  width: 300px;
  padding: 20px;
  border-radius: 30px;
  font-size: 40px;
}
.AddEventButton{
  font-size: 30px;
  font-family: "Roboto", sans-serif;
  top: 50%;
  background-color: #C1E7F6 ;
  color: #fff;
  border: none;
  border-radius: 10px;
  padding: 15px;
  min-height: 30px;
  width: 520px;
  :hover {
    background-color: #119BD3;
    transition: 0.1s;
  }
}
.AddEventRange{
  display: flex;
  justify-content: space-evenly;
}
`
