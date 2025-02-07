import './Home.css'
import React from 'react';
import { Image, ConfigProvider } from 'antd';
import { Flex, Progress, Button } from 'antd';
import '/src/App.css'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import Calendar from 'react-calendar';
import { Card } from 'antd';
import 'react-calendar/dist/Calendar.css'; // default styling
import useFetchDataPercentages from '@/components/useFetchDataPercentages';
import wearables from '@/assets/applewatch.png'
import ouraring from '@/assets/ouraring.png'
import fitbit from '@/assets/fitbit.png'
import dob from '@/assets/dob.png'
import email from '@/assets/email.png'
import phone from '@/assets/phone.png'
import home from '@/assets/home.png'
import jane from '@/assets/janepfp.png'
import {
  LogoutOutlined,
  BookOutlined,
  LineChartOutlined,
  TrophyOutlined,
  RightOutlined
} from "@ant-design/icons";
import insurance from '@/assets/insurance.png'
import id from '@/assets/id.png'
import provider from '@/assets/provider.png'




const WelcomeHeader = () => (
  <h1 className="welcome-header">Welcome, Jane!</h1>
);

const csvs = ['analysis_cal.csv','analysis_dist.csv','analysis_heart.csv','analysis_steps.csv']
const x = 50;

const ProgressCheck = () => {
  return (
  // This will display 100 if the data from the requested date range is successfully imported, and if not it will display the percentage of data successfully imported
  <div className = 'progress'>
    {/* <Flex gap="large" style={{ gap: '50px' }}> */}
      <ConfigProvider theme={{
          components: {
            Progress: {
              circleTextFontSize: "0.75em"
            },
          },
        }}> 
        <Progress type="circle" percent={useFetchDataPercentages(csvs[0])} format = {(percent) => `Calorie Data: ${percent}%`} />
        <Progress type="circle" percent={useFetchDataPercentages(csvs[1])} format = {(percent) => `Dist. Data: ${percent}%`} />
        <Progress type="circle" percent={useFetchDataPercentages(csvs[2])} format = {(percent) => `Heartrate Data: ${percent}%`} />
        <Progress type="circle" percent={useFetchDataPercentages(csvs[3])} format = {(percent) => `Step Data: ${percent}%`}/>
      </ConfigProvider>
    {/* </Flex> */}
  </div>  
  )   
};

const MoodSurvey = () => {
  const [date, setDate] = useState(new Date());
  const [moods, setMoods] = useState({}); // Object to store moods with date keys

  const handleMoodSelect = (selectedDate, mood) => {
    setMoods({ ...moods, [selectedDate.toISOString().split('T')[0]]: mood });
  };

  const renderCalendarDay = ({ date, view }) => {
    if (view === 'month') {
      const moodEmoji = moods[date.toISOString().split('T')[0]];
      return (
        <div>
          {moodEmoji && <span>{moodEmoji}</span>}
        </div>
      );
    }
  };
  
  return (
    <div className="container">
      <div className='flex-container'>
      <div className='patient-info'>
        <div className="team-member-container">
            <img src={jane} alt="Team Member 4"/>
            <div className="text-container">
                <h3 style={{fontSize: '28px' }}>Jane Madison Doe</h3>
                <p style={{display: "flex"}}><span style={{display: "flex", fontWeight: 'bold' }} > <img src={dob} alt="HealthSensors" style={{width:'2em', height:'2em'}}/>DOB: </span> 05/25/1990</p>
                <p style={{display: "flex"}}><span style={{display: "flex", fontWeight: 'bold' }} > <img src={email} alt="HealthSensors" style={{width:'2em', height:'2em'}}/> </span> jdoe@gmail.com</p>
                <p style={{display: "flex"}}><span style={{display: "flex", fontWeight: 'bold' }} > <img src={phone} alt="HealthSensors" style={{width:'2em', height:'2em'}}/></span> 649-899-9990</p>
                <p style={{display: "flex"}}><span style={{display: "flex", fontWeight: 'bold' }} > <img src={home} alt="HealthSensors" style={{width:'2em', height:'2em'}}/> </span> 3489 Lebon Dr. San Diego, CA, 92122</p>
            </div>
        </div>
        <div className = "team-member-container">
        <h1 style={{fontSize: 22}}> How are you feeling today?</h1>
          <MoodSelector  onMoodSelect={(mood) => handleMoodSelect(date, mood)}/>
          <Calendar
            className="right-aligned-calender"
            onChange={setDate}
            value={date}
            tileContent={({ date, view }) => renderCalendarDay({ date, view })}
          />
        </div>
        </div>
        
        <div className='mood-container'style={{ textAlign: 'right' }}>
        <div className="team-member-container">
           <h3 style={{fontSize: '25px' }}>Medical Information</h3>
            <div className="text-container">
              <p style={{ display: 'flex', alignItems: 'center', fontWeight: 'bold' }}>
                <span style={{ display: 'flex', alignItems: 'center',marginRight: '10px' }}><img src={id} alt="HealthSensors" style={{width:'2em', height:'2em', margin: '10px'}}/> ID:</span>
                <span style={{ marginRight: '20px', fontWeight: 'normal' }}>283490</span>
                <span style={{ display: 'flex', alignItems: 'center',marginRight: '10px' }}><img src={provider} alt="HealthSensors" style={{width:'2em', height:'2em', margin:'10px'}}/> Provider:</span>
                <span style={{ fontWeight: 'normal' }}>Dr. Reid Stevens</span>
              </p>

              <p style = {{display: 'flex', alignItem: 'center'}}>
                <span style={{ display: 'flex', fontWeight: 'bold'}}><img src={insurance} alt="HealthSensors" style={{width:'2em', height:'2em'}}/> Insurance: </span> Cigna
              </p>
            </div>
        </div>

        <div className="team-member-container">
           <h3 style={{display: 'flex', alignItems: 'center',fontSize: '25px' }}> <img src={wearables} alt="HealthSensors" style={{width:'2em', height:'2em'}}/>Your Wearables</h3>
            <div className="text-container">
              <p style={{ display: 'flex', alignItems: 'center'}}><span style={{ display: 'flex', alignItems: 'center',fontWeight: 'bold' }}> <img src={ouraring} alt="HealthSensors" style={{width:'2em', height:'2em'}}/>Oura Ring: </span>  Not Connected ❌</p>
              <p style={{ display: 'flex', alignItems: 'center'}}><span style={{ display: 'flex', alignItems: 'center',fontWeight: 'bold' }}>  <img src={fitbit} alt="HealthSensors" style={{width:'2em', height:'2em'}}/>Fitbit: </span> Connected! ✅</p>
            </div>
        </div>
          <div className="team-member-container">
            <div style={{ display: 'flex', margin: '20px'}}>
                <Link to="/user/healthAnalysis"> <Button className='linkbtn' icon = {<LineChartOutlined/>}>   Health Analysis {<RightOutlined/>}</Button></Link>
                <Link to="/user/diary"><Button className='linkbtn' icon = {<BookOutlined/>}> Diary {<RightOutlined/>}</Button></Link>
            </div>
            <div style= {{width: "100%"}}>
              <Link to="/user/healthTracker"><Button className='linkbtn' icon = {<TrophyOutlined/>}>Health Habit Tracker{<RightOutlined/>}</Button></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const MoodSelector = ({ onMoodSelect }) => {
  const moods = ['😃', '😊', '😐', '😞', '😢'];
  return (
    <div>
      {moods.map((mood, index) => (
        <button key={index} className="mood-button" onClick={() => onMoodSelect(mood)}>
          {mood}
        </button>
      ))}
    </div>
  );
};



const Home = () => (
    <div>
      <WelcomeHeader/>
      <MoodSurvey/>
    </div>
  );
  
  export default Home;