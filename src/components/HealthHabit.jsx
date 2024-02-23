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