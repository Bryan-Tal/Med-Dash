import React, { useState } from "react";

function GoalTracker() {
 const [habits, setHabits] = useState([]);

 const [habitName, setHabitName] = useState("");

 const [habitType, setHabitType] = useState("");

 const [habitAmount, setHabitAmount] = useState("");

 const [habitTimePeriod, setHabitTimePeriod] = useState("");

 const [habitStartDate, setHabitStartDate] = useState("");

 const [habitEndDate, setHabitEndDate] = useState("");

 const [startValue, setStartValue] = useState("");

 const [goalValue, setGoalValue] = useState("");

 const [clickedGoal, setClickedGoal] = useState(null); // State for clicked goal

 const [availableColors, setAvailableColors] = useState([
 "#ffadad",

 "#e6e6ff",

 "#e4f1ee",

 "#e6ccb3",

 "#8fcaca",

 "#ffffb5",

 "#ffccb6",

 "#fee1e8",
 ]);

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

 const handleHabitEndDateChange = (e) => {
 setHabitEndDate(e.target.value);
 };

 const handleStartValueChange = (e) => {
 setStartValue(e.target.value);
 };

 const handleGoalValueChange = (e) => {
 setGoalValue(e.target.value);
 };

 const handleHabitSubmit = (e) => {
 e.preventDefault();

 if (availableColors.length === 0) {
 alert("No available colors left!");

 return;
 }

 const randomIndex = Math.floor(Math.random() * availableColors.length);

 const randomColor = availableColors[randomIndex];

 const updatedColors = [...availableColors];

 updatedColors.splice(randomIndex, 1); // Remove selected color

 setAvailableColors(updatedColors);

 const newHabit = {
 name: habitName,

 type: habitType,

 amount: habitAmount,

 timePeriod: habitTimePeriod,

 startDate: habitStartDate,

 endDate: habitEndDate,

 startValue: habitType === "target" ? startValue : null,

 goalValue: habitType === "target" ? goalValue : null,

 progress: 0,

 color: randomColor,
 };

 setHabits([...habits, newHabit]);

 resetForm();
 };

 const resetForm = () => {
 setHabitName("");

 setHabitType("");

 setHabitAmount("");

 setHabitTimePeriod("");

 setHabitStartDate("");

 setHabitEndDate("");

 setStartValue("");

 setGoalValue("");
 };

 const updateProgress = (index, increment) => {
 const updatedHabits = [...habits];

 updatedHabits[index].progress += increment;

 setHabits(updatedHabits);
 };

 const isGoalAccomplished = (habit) => {
 return habit.progress >= habit.amount;
 };

 const calculateAccomplishedPercentage = () => {
 if (habits.length === 0) return 0;

 const accomplishedGoals = habits.filter((habit) =>
 isGoalAccomplished(habit)
 );

 return (accomplishedGoals.length / habits.length) * 100;
 };

 const renderProgressBar = (habit) => {
 const progressPercentage = (habit.progress / habit.amount) * 100 + "%";

 return (
 <div
 style={{
 backgroundColor: "#ddd",

 borderRadius: "4px",

 height: "10px",

 width: "100%",

 position: "relative", // Add position relative for positioning the message
 }}
 >
 <div
 style={{
 backgroundColor: habit.color,

 borderRadius: "4px",

 height: "100%",

 width: progressPercentage,
 }}
 ></div>

 {/* Conditionally render message if goal is accomplished */}

 {isGoalAccomplished(habit) && (
 <div
 style={{
 position: "absolute",

 top: "-20px", // Adjust as needed for positioning

 left: "50%", // Adjust as needed for positioning

 transform: "translateX(-50%)", // Center horizontally

 backgroundColor: habit.color, // Use habit color for "Goal Accomplished" box

 color: "#00001a",

 padding: "5px 10px",

 borderRadius: "5px",
 }}
 >
 Goal Accomplished!
 </div>
 )}
 </div>
 );
 };

 const renderPieChart = () => {
 const accomplishedGoals = habits.filter((habit) =>
 isGoalAccomplished(habit)
 );

 const totalAccomplished = accomplishedGoals.length;

 // If there's only one accomplished goal, fill the donut completely

 if (totalAccomplished === 1) {
 return (
 <div style={{ textAlign: "center" }}>
 <svg width="200" height="200">
 <circle
 cx="100"
 cy="100"
 r="80"
 fill={accomplishedGoals[0].color}
 />
 </svg>
 </div>
 );
 }

 // If there are no accomplished goals, return empty donut chart

 if (totalAccomplished === 0) {
 return (
 <div style={{ textAlign: "center" }}>
 <svg width="200" height="200">
 <circle cx="100" cy="100" r="80" fill="#fff" />

 <text
 x="100"
 y="100"
 textAnchor="middle"
 dominantBaseline="middle"
 fill="#001433"
 >
 None Accomplished
 </text>
 </svg>
 </div>
 );
 }

 // Calculate the total number of goals accomplished

 const totalGoals = accomplishedGoals.reduce((acc, habit) => acc + 1, 0);

 // Calculate radius and center

 const radius = 80;

 const centerX = 100;

 const centerY = 100;

 const innerRadius = 40; // Set inner radius for the donut

 // Determine legend labels

 const legendLabels = accomplishedGoals.map((habit) => habit.name);

 // Render the donut chart with individual segments for each accomplished goal

 return (
 <div style={{ textAlign: "center" }}>
 <svg width="200" height="200">
 {accomplishedGoals.map((habit, index) => {
 const percentage = (1 / totalGoals) * 360;

 const startAngle =
 index === 0
 ? 0
 : accomplishedGoals

 .slice(0, index)

 .reduce((acc, goal) => acc + (1 / totalGoals) * 360, 0);

 const endAngle = startAngle + percentage;

 const largeArcFlag = percentage > 180 ? 1 : 0;

 // Calculate outer edge coordinates

 const outerStartX =
 centerX + radius * Math.cos((startAngle * Math.PI) / 180);

 const outerStartY =
 centerY + radius * Math.sin((startAngle * Math.PI) / 180);

 const outerEndX =
 centerX + radius * Math.cos((endAngle * Math.PI) / 180);

 const outerEndY =
 centerY + radius * Math.sin((endAngle * Math.PI) / 180);

 // Calculate inner edge coordinates

 const innerStartX =
 centerX + innerRadius * Math.cos((startAngle * Math.PI) / 180);

 const innerStartY =
 centerY + innerRadius * Math.sin((startAngle * Math.PI) / 180);

 const innerEndX =
 centerX + innerRadius * Math.cos((endAngle * Math.PI) / 180);

 const innerEndY =
 centerY + innerRadius * Math.sin((endAngle * Math.PI) / 180);

 // Create path for outer arc

 const outerArc = `M ${outerStartX} ${outerStartY} A ${radius} ${radius} 0 ${largeArcFlag} 1 ${outerEndX} ${outerEndY} L ${centerX} ${centerY} Z`;

 // Create path for inner arc

 const innerArc = `M ${innerStartX} ${innerStartY} A ${innerRadius} ${innerRadius} 0 ${largeArcFlag} 0 ${innerEndX} ${innerEndY} Z`;

 return (
 <g key={index}>
 <path
 d={outerArc}
 fill={habit.color}
 stroke="#b3b3b3"
 strokeWidth="2"
 />

 <path d={innerArc} fill={habit.color} />

 {index === accomplishedGoals.length - 1 && (
 <circle
 cx={centerX}
 cy={centerY}
 r={innerRadius}
 fill="#b3b3b3"
 />
 )}
 </g>
 );
 })}

 <text
 x="100"
 y="100"
 textAnchor="middle"
 dominantBaseline="middle"
 fill="#333"
 >
 {`${calculateAccomplishedPercentage().toFixed(1)}%`}
 </text>
 </svg>

 {/* Legend */}

 <div style={{ marginTop: "10px" }}>
 {legendLabels.map((label, index) => (
 <div key={index} style={{ display: "flex", alignItems: "center" }}>
 <div
 style={{
 width: "10px",

 height: "10px",

 backgroundColor: accomplishedGoals[index].color,

 marginRight: "5px",
 }}
 ></div>

 <span>{label}</span>
 </div>
 ))}
 </div>
 </div>
 );
 };

 // Define a function to generate a heatmap cell based on the progress of a habit

 const renderHeatmapCell = (habit) => {
 // Customize color based on progress level

 const color =
 habit.progress > 0
 ? `rgba(76, 175, 80, ${habit.progress / habit.amount})`
 : "#66b3ff";

 return (
 <div
 key={habit.name}
 style={{
 backgroundColor: color,

 width: "20px",

 height: "20px",

 border: "1px solid #fff",
 }}
 ></div>
 );
 };

 const renderHeatmap = () => {
 return (
 <div style={{ marginTop: "20px", position: "relative" }}>
 {/* X-axis labels and progress bars */}

 <div style={{ display: "flex", flexWrap: "wrap" }}>
 {/* X-axis labels */}

 <div style={{ display: "flex", flexDirection: "column" }}>
 {habits.map((habit, index) => (
 <div key={index} style={{ marginBottom: "10px" }}>
 {habit.name}
 </div>
 ))}
 </div>

 {/* Progress bars */}

 <div style={{ display: "flex", flexDirection: "column" }}>
 {habits.map((habit, index) => (
 <div
 key={index}
 style={{
 display: "flex",

 flexDirection: "row",

 marginBottom: "10px",

 alignItems: "center",
 }}
 >
 {/* Render progress bar */}

 <div
 style={{
 width: "100px",

 height: "20px",

 border: "1px solid #66b3ff",

 marginRight: "10px",

 position: "relative",
 }}
 >
 <div
 style={{
 position: "absolute",

 backgroundColor: habit.color,

 height: "100%",

 width: `${(habit.progress / habit.amount) * 100}%`,
 }}
 ></div>
 </div>

 {/* Render progress text */}

 <div>{`${habit.progress}/${habit.amount}`}</div>
 </div>
 ))}
 </div>
 </div>
 </div>
 );
 };

 return (
 <div
 style={{
 fontFamily: "Arial, sans-serif",

 maxWidth: "1000px",

 margin: "0 auto",

 backgroundColor: "#cce6ff",

 padding: "20px",

 borderRadius: "10px",
 }}
 >
 <h1 style={{ textAlign: "center", color: "#333" }}>Goal Tracker</h1>

 <form
 onSubmit={handleHabitSubmit}
 style={{
 backgroundColor: "#e6f2ff",

 padding: "20px",

 borderRadius: "10px",

 boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
 }}
 >
 <div style={{ marginBottom: "15px" }}>
 <label>Name Your Goal:</label>

 <input
 type="text"
 value={habitName}
 onChange={handleHabitNameChange}
 style={{ marginLeft: "10px" }}
 />
 </div>

 <div style={{ marginBottom: "15px" }}>
 <label>Select Goal Type:</label>

 <select
 value={habitType}
 onChange={handleHabitTypeChange}
 style={{ marginLeft: "10px" }}
 >
 <option value="">Select</option>

 <option value="habit">Habit: Repeating Action</option>

 <option value="target">Target: Number by Date</option>

 <option value="average">Average: Repeating Number</option>
 </select>
 </div>

 {habitType === "habit" && (
 <>
 <div style={{ marginBottom: "15px" }}>
 <label>How Many Times?:</label>

 <input
 type="number"
 value={habitAmount}
 onChange={handleHabitAmountChange}
 style={{ marginLeft: "10px" }}
 />
 </div>

 <div style={{ marginBottom: "15px" }}>
 <label>Time Period:</label>

 <select
 value={habitTimePeriod}
 onChange={handleHabitTimePeriodChange}
 style={{ marginLeft: "10px" }}
 >
 <option value="">Select</option>

 <option value="per day">Per Day</option>

 <option value="per week">Per Week</option>

 <option value="per month">Per Month</option>

 <option value="per year">Per Year</option>
 </select>
 </div>

 <div style={{ marginBottom: "15px" }}>
 <label>Start Date:</label>

 <input
 type="date"
 value={habitStartDate}
 onChange={handleHabitStartDateChange}
 style={{ marginLeft: "10px" }}
 />
 </div>
 </>
 )}

 {habitType === "target" && (
 <>
 <div style={{ marginBottom: "15px" }}>
 <label>Start Value:</label>

 <input
 type="number"
 value={startValue}
 onChange={handleStartValueChange}
 style={{ marginLeft: "10px" }}
 />
 </div>

 <div style={{ marginBottom: "15px" }}>
 <label>Goal Value:</label>

 <input
 type="number"
 value={goalValue}
 onChange={handleGoalValueChange}
 style={{ marginLeft: "10px" }}
 />
 </div>

 <div style={{ marginBottom: "15px" }}>
 <label>Start Date:</label>

 <input
 type="date"
 value={habitStartDate}
 onChange={handleHabitStartDateChange}
 style={{ marginLeft: "10px" }}
 />
 </div>
 </>
 )}

 {habitType === "average" && (
 <>
 <div style={{ marginBottom: "15px" }}>
 <label>Goal:</label>

 <input
 type="number"
 value={habitAmount}
 onChange={handleHabitAmountChange}
 style={{ marginLeft: "10px" }}
 />
 </div>

 <div style={{ marginBottom: "15px" }}>
 <label>
 <input type="radio" value="or more" name="averageType" /> Or
 More
 </label>

 <label>
 <input type="radio" value="or less" name="averageType" /> Or
 Less
 </label>
 </div>

 <div style={{ marginBottom: "15px" }}>
 <label>Time Period:</label>

 <select
 value={habitTimePeriod}
 onChange={handleHabitTimePeriodChange}
 style={{ marginLeft: "10px" }}
 >
 <option value="">Select</option>

 <option value="per day">Per Day</option>

 <option value="per week">Per Week</option>

 <option value="per month">Per Month</option>

 <option value="per year">Per Year</option>
 </select>
 </div>

 <div style={{ marginBottom: "15px" }}>
 <label>Start Date:</label>

 <input
 type="date"
 value={habitStartDate}
 onChange={handleHabitStartDateChange}
 style={{ marginLeft: "10px" }}
 />
 </div>
 </>
 )}

 <button
 type="submit"
 style={{
 marginLeft: "110px",

 marginTop: "10px",

 padding: "8px 20px",

 backgroundColor: "#4caf50",

 color: "#fff",

 border: "none",

 borderRadius: "5px",

 cursor: "pointer",
 }}
 >
 Set Goal
 </button>
 </form>

 <div
 style={{
 marginTop: "30px",

 backgroundColor: "#fff",

 padding: "20px",

 borderRadius: "10px",

 boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
 }}
 >
 <h2 style={{ color: "#333" }}>Goals</h2>

 <ul>
 {habits.map((habit, index) => (
 <li
 key={index}
 style={{ color: isGoalAccomplished(habit) ? habit.color : "" }}
 onClick={() => setClickedGoal(habit.name)}
 >
 {habit && ( // Add null check for habit
 <>
 <div>
 {habit.name} - {habit.type}
 </div>

 {renderProgressBar(habit)}

 {habit.type === "habit" && (
 <>
 <p>
 Progress: {habit.progress}/{habit.amount}
 </p>

 <button
 onClick={() => updateProgress(index, -1)}
 disabled={habit.progress === 0}
 >
 -
 </button>

 <button
 onClick={() => updateProgress(index, 1)}
 disabled={habit.progress === habit.amount}
 >
 +
 </button>
 <hr></hr>
 </>
 )}

 {habit.type === "target" && (
 <>
 <p>Start Value: {habit.startValue}</p>

 <p>Goal Value: {habit.goalValue}</p>

 <p>
 Progress: {habit.progress}/{habit.goalValue}
 </p>

 <button
 onClick={() => updateProgress(index, -1)}
 disabled={habit.progress === 0}
 >
 -
 </button>

 <button
 onClick={() => updateProgress(index, 1)}
 disabled={habit.progress === habit.amount}
 >
 +
 </button>
 <hr></hr>
 </>
 )}

 {habit.type === "average" && (
 <>
 <p>
 Progress: {habit.progress}/{habit.amount}
 </p>

 <button
 onClick={() => updateProgress(index, -1)}
 disabled={habit.progress === 0}
 >
 -
 </button>

 <button
 onClick={() => updateProgress(index, 1)}
 disabled={habit.progress === habit.amount}
 >
 +
 </button>
 <hr></hr>
 </>
 )}
 </>
 )}
 </li>
 ))}
 </ul>
 </div>

 {/* Conditionally render clicked goal */}

 {clickedGoal && <div>{clickedGoal}</div>}

 {/* Render pie chart */}

 <div style={{ marginTop: "30px" }}>
 <h2 style={{ color: "#333", textAlign: "center" }}>
 Accomplished Goals Percentage
 </h2>

 {renderPieChart()}
 </div>

 {/* Render heatmap */}

 {/*<div style={{ marginTop: "30px" }}>
 <h2 style={{ color: "#333", textAlign: "center" }}>Habit Progress</h2>

 {renderHeatmap()}
 </div>*/}
 </div>
 );
}

export default GoalTracker;