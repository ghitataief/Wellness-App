import styled from "styled-components";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useState,useContext } from "react";
import "react-calendar/dist/Calendar.css";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { CurrentUserContext } from "../login/CurrentUserContext";
import agenda from "../images/agenda.png"
import workout from "../images/workout.png"

const Body = () => {
  const [value, onChange] = useState(new Date());
  const { currentUser, setCurrentUser, replaceUserEvent } =
    useContext(CurrentUserContext);
  //Add event
  const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" });
  const [allEvents, setAllEvents] = useState(currentUser.events);

  //handle event
  const handleAddEvent = () => {
    const events = [...allEvents, newEvent];

    fetch("/api/add-event", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        allEvents: events,
        id: currentUser._id,
      }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err))
      .finally(() => {
        replaceUserEvent(events);
        setAllEvents(events);
      });
  };

  const localizer = momentLocalizer(moment);

  return (
    <Wrapper>
      <Title>Body Practice</Title>
      <img src={workout} alt="workout women" className="workout"/>
      <Description>

        Track your physical health.
        <ul>
          <li>Organize your weekly meals</li>
          <li>Plan your daily exercises</li>
          <li>Set your body goals</li>
        </ul>
        <img src={agenda} alt="agenda" className="agenda"/>
      </Description>
      <AddEventWrapper>
        <h1>Start Planning</h1>
        <div className="AddEventRange">
          <input
            className="AddEventInput"
            type="text"
            placeholder="Add Title"
            value={newEvent.title}
            onChange={(e) =>
              setNewEvent({ ...newEvent, title: e.target.value })
            }
          />

          <DatePicker
            placeholderText="Start Date"
            selected={newEvent.start}
            onChange={(start) => setNewEvent({ ...newEvent, start })}
          />

          <DatePicker
            placeholderText="End Date"
            selected={newEvent.end}
            onChange={(end) => setNewEvent({ ...newEvent, end })}
          />

          <button className="AddEventButton" onClick={handleAddEvent}>
            Add Event
          </button>
        </div>
      </AddEventWrapper>

      <Calendar
        localizer={localizer}
        events={allEvents}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500, margin: "50px" }}
      />
    </Wrapper>
  );
};

export default Body;

const Wrapper = styled.div`
  margin: 100px;

  .workout{
    width: 600px;
    position: absolute;
    margin-left: 1800px;
  }

  .agenda{
    width: 250px;
    position: absolute;
    margin-left: 500px;
  }

  .rbc-toolbar {
    font-size: 60px;
    font-style: italic;
  }
`;
const Title = styled.h1`
  font-weight: bold;
  font-size: 100px;
  display: flex;
  font-family: "Roboto", sans-serif;
  font-style: italic;
  justify-content: center;
  text-align: center;
  letter-spacing: 15px;
  text-shadow: 2px 7px 5px rgba(0, 0, 0, 0.3),
    0px -4px 10px rgba(255, 255, 255, 0.3);
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
  padding: 25px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px,
    rgba(0, 0, 0, 0.3) 0px 18px 36px -18px;
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
  margin: 180px 0px;

  h1,
  h2,
  input {
    font-family: "Roboto", sans-serif;
    font-style: italic;
  }
  h1 {
    margin: 50px;
    font-size: 90px;
  }

  input {
    display: flex;
    align-self: center;
    align-items: center;
    width: 300px;
    padding: 20px;
    border-radius: 30px;
    font-size: 40px;
  }
  .AddEventButton {
    font-size: 30px;
    font-family: "Roboto", sans-serif;
    top: 50%;
    background-color: #c1e7f6;
    color: #fff;
    border: none;
    border-radius: 10px;
    padding: 15px;
    min-height: 30px;
    width: 520px;
    :hover {
      background-color: #119bd3;
      transition: 0.1s;
    }
  }
  .AddEventRange {
    display: flex;
    justify-content: space-evenly;
  }

  .AddEventInput {
    margin-right: 150px;
  }
`;
