import { number } from 'echarts';
import { useState, useEffect } from 'react';
//Create an editable today's entry page


export default function MyApp() {
  return (
    <div>
      <h1>Health Habits and Heart Rate Analysis</h1>
      <HealthHabit />
      <HeartRateAnalysis />
    </div>
  );
}


function HealthHabit() {
  const [editingEntries, setEditingEntries] = useState(false);
  const [addingGoal, setAddingGoal] = useState(false);
  const [isRepeatable, setRepeatable] = useState(false);
  const [numberByDate, setNumberByDate] = useState('');
  const [date, setDate] = useState('')
  const [addNewGoal, setNewGoal] = useState('')
  const [editingGoal, setEditingGoal] = useState(false);
  const [weight, setWeight] = useState('');
  const [water, setWater] = useState('');
  const [sleep, setSleep] = useState('');




  //implement target number by date

  //edit entries after clicking the corresponding button
  function editEntries(e) {
    setEditingEntries(true);
    //setEditingEntries(e.editingEntries);
  }
  

//   function StopEditingEntries(e) {
//     setEditingEntries(false);
//   }

function addGoal(e) {
    setAddingGoal(true);
}

function isRepeating(e) {
    setRepeatable(e.target.checked);
}

function numByDate(e) {
    setNumberByDate(e.target.value);
}

function byDate(e) {
    setDate(e.target.value)
}

function editGoal() {
    setEditingGoal(true);
}

  function changeWeight(e) {
    setWeight(e.target.value);
  }

  function changeWater(e) {
    setWater(e.target.value);
  }

  function changeSleep(e) {
    setSleep(e.target.value);
  }

  function addingNewGoal(e) {
    setNewGoal(true);
  }
  //Stop editting feature not used rn: <div onClick={StopEditingEntries}></div>

  // Aesthetic <span style={{ color: habits.exercise[day] >= goal.exercise ? 'green' : 'red' }}>
  return (
    <>

    <p> Today's Entries </p>

      <p>Weight: {weight}</p>
      <input value={weight} onChange={changeWeight} disabled={!editingEntries} />
      
      <p>Water: {water}</p>
      <input value={water} onChange={changeWater} disabled={!editingEntries} />
      
      <p>Sleep: {sleep}</p>
      <input value={sleep} onChange={changeSleep} disabled={!editingEntries} />
      <p></p>

      {addNewGoal &&(<label>
        Goal is {numberByDate} by {byDate}
      </label>

      )}
      <p></p>

      <button onClick={editEntries}>Edit Today's Entries </button>

      <button onClick={addGoal}>Add Goal </button>
      <button onClick={editGoal}>Edit/Delete Goal</button>
      <p></p>
      {addingGoal && (<label>
      <input type="checkbox" checked={isRepeatable} onChange={isRepeating} />
      Goal is {isRepeatable ? 'Repeatable' : 'One Time'}
      <p></p>
      Achieve <input value={numberByDate} onChange={numByDate} /> by 
      <input value={date} onChange={byDate} />
      <p></p>
      <button onClick={addingNewGoal}>Add New Goal</button>
      </label>
      )}
      <p></p>
    </>
  );
}
function HeartRateAnalysis() {
  // Define state for today's heart rate and weekly average heart rate
  const [todayHeartRate, setTodayHeartRate] = useState(0);
  const [weeklyAverageHeartRate, setWeeklyAverageHeartRate] = useState(0);
  const [comparison, setComparison] = useState('');

  // Simulated function to fetch today's heart rate (Replace with actual logic)
  const fetchTodaysHeartRate = () => {
    // Simulated logic to fetch today's heart rate from an API or database
    // For demonstration purposes, generating a random heart rate between 60 and 100
    return Math.floor(Math.random() * (100 - 60 + 1) + 60);
  };

  // Simulated function to fetch weekly average heart rate (Replace with actual logic)
  const fetchWeeklyAverageHeartRate = () => {
    // Simulated logic to fetch weekly average heart rate from an API or database
    // For demonstration purposes, generating a random weekly average between 65 and 85
    return Math.floor(Math.random() * (85 - 65 + 1) + 65);
  };

  useEffect(() => {
    // Fetch today's heart rate and update state
    const todayRate = fetchTodaysHeartRate();
    setTodayHeartRate(todayRate);

    // Fetch weekly average heart rate and update state
    const weeklyAverageRate = fetchWeeklyAverageHeartRate();
    setWeeklyAverageHeartRate(weeklyAverageRate);

    // Compare today's heart rate with weekly average heart rate
    if (todayRate > weeklyAverageRate) {
      setComparison('HIGHER');
    } else if (todayRate < weeklyAverageRate) {
      setComparison('LOWER');
    } else {
      setComparison('EQUAL');
    }
  }, []);

  return (
    <div>
      <h2>Heart Rate Analysis</h2>
      <p>Today's Heart Rate: {todayHeartRate}</p>
      <p>Weekly Average Heart Rate: {weeklyAverageHeartRate}</p>
      <p>Today's heart rate was {comparison} than your typical heart rate average over the week.</p>
    </div>
  );
}





import React, { useState } from 'react';

function GoalTracker() {
  const [habits, setHabits] = useState([]);
  const [habitName, setHabitName] = useState('');
  const [habitType, setHabitType] = useState('');
  const [habitAmount, setHabitAmount] = useState('');
  const [habitTimePeriod, setHabitTimePeriod] = useState('');
  const [habitStartDate, setHabitStartDate] = useState('');
  const [startValue, setStartValue] = useState('');
  const [goalValue, setGoalValue] = useState('');

  const handleHabitNameChange = (e) => {
    setHabitName(e.target.value);
  };

  const handleHabitTypeChange = (e) => {
    setHabitType(e.target.value);
  };

  const handleHabitAmountChange = (e) => {
    setHabitAmount(e.target.value);
  };

  const handleHabitTimePeriodChange = (e) => {
    setHabitTimePeriod(e.target.value);
  };

  const handleHabitStartDateChange = (e) => {
    setHabitStartDate(e.target.value);
  };

  const handleStartValueChange = (e) => {
    setStartValue(e.target.value);
  };

  const handleGoalValueChange = (e) => {
    setGoalValue(e.target.value);
  };

  const handleHabitSubmit = (e) => {
    e.preventDefault();
    const newHabit = {
      name: habitName,
      type: habitType,
      amount: habitAmount,
      timePeriod: habitTimePeriod,
      startDate: habitStartDate,
      startValue: habitType === 'target' ? startValue : null,
      goalValue: habitType === 'target' ? goalValue : null,
    };
    setHabits([...habits, newHabit]);
    setHabitName('');
    setHabitType('');
    setHabitAmount('');
    setHabitTimePeriod('');
    setHabitStartDate('');
    setStartValue('');
    setGoalValue('');
  };

  const resetForm = () => {
    setHabitName('');
    setHabitType('');
    setHabitAmount('');
    setHabitTimePeriod('');
    setHabitStartDate('');
    setStartValue('');
    setGoalValue('');
  };

  return (
    <div>
      <h1>Goal Tracker</h1>
      <form onSubmit={handleHabitSubmit}>
        <label>
          Name Your Goal:
          <input type="text" value={habitName} onChange={handleHabitNameChange} />
        </label>
        <label>
          Select Goal Type:
          <select value={habitType} onChange={handleHabitTypeChange}>
            <option value="">Select</option>
            <option value="habit">Habit: Repeating Action</option>
            <option value="target">Target: Number by Date</option>
            <option value="average">Average: Repeating Number</option>
          </select>
        </label>
        {habitType === 'habit' && (
          <>
            <label>
              How Many Times?:
              <input type="number" value={habitAmount} onChange={handleHabitAmountChange} />
            </label>
            <label>
              Time Period:
              <select value={habitTimePeriod} onChange={handleHabitTimePeriodChange}>
                <option value="">Select</option>
                <option value="per day">Per Day</option>
                <option value="per week">Per Week</option>
                <option value="per month">Per Month</option>
                <option value="per year">Per Year</option>
              </select>
            </label>
            <label>
              Start Date:
              <input type="date" value={habitStartDate} onChange={handleHabitStartDateChange} />
            </label>
          </>
        )}
        {habitType === 'target' && (
          <>
            <label>
              Start Value:
              <input type="number" value={startValue} onChange={handleStartValueChange} />
            </label>
            <label>
              Goal Value:
              <input type="number" value={goalValue} onChange={handleGoalValueChange} />
            </label>
            <label>
              Start Date:
              <input type="date" value={habitStartDate} onChange={handleHabitStartDateChange} />
            </label>
          </>
        )}
        {habitType === 'average' && (
          <>
            <label>
              Goal:
              <input type="number" value={habitAmount} onChange={handleHabitAmountChange} />
            </label>
            <label>
              <input type="radio" value="or more" name="averageType" />
              Or More
            </label>
            <label>
              <input type="radio" value="or less" name="averageType" />
              Or Less
            </label>
            <label>
              Time Period:
              <select value={habitTimePeriod} onChange={handleHabitTimePeriodChange}>
                <option value="">Select</option>
                <option value="per day">Per Day</option>
                <option value="per week">Per Week</option>
                <option value="per month">Per Month</option>
                <option value="per year">Per Year</option>
              </select>
            </label>
            <label>
              Start Date:
              <input type="date" value={habitStartDate} onChange={handleHabitStartDateChange} />
            </label>
          </>
        )}
        <button type="submit">Set Goal</button>
      </form>

      <div>
        <h2>Goals</h2>
        <ul>
          {habits.map((habit, index) => (
            <li key={index}>
              {habit.name} - {habit.type}
              {habit.type === 'habit' && (
                <>
                  <p>Amount: {habit.amount}</p>
                  <p>Time Period: {habit.timePeriod}</p>
                </>
              )}
              {habit.type === 'target' && (
                <>
                  <p>Start Value: {habit.startValue}</p>
                  <p>Goal Value: {habit.goalValue}</p>
                </>
              )}
              {habit.type === 'average' && (
                <>
                  <p>Goal: {habit.amount}</p>
                  <p>Time Period: {habit.timePeriod}</p>
                </>
              )}
            </li>
          ))}
        </ul>
      </div>

      <button onClick={resetForm}>Add Another Goal</button>
    </div>
  );
}

export default GoalTracker;
