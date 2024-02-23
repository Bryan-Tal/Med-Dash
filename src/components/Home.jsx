import '/src/css/Home.css'
import React from 'react';
import { Image } from 'antd';
import { Flex, Progress } from 'antd';
import '~/App.css'
import { useState } from 'react';

const WelcomeHeader = () => (
  <h1 className="welcome-header">Welcome, Ben!</h1>
);


const App = () => (

  <div className='right-align'>
    <Image
        width={500}
        src="https://med-dash.github.io/static/media/dashboard-growth.9e985101d7d337104387.png"
    />
  </div>


);

const x = 50;
const App2 = () => (

  <div className = 'center-align'>
    <Flex gap="large" style={{ gap: '50px' }}>
      <Progress type="circle" percent={10} strokeColor = "red"/>
      <Progress type="circle" percent={100 - x} />
      <Progress type="circle" percent={100} />
      <Progress type="circle" percent={70}  />
      <Progress type="circle" percent={5} strokeColor = "red" />
    </Flex>
  </div>
);

// Emoji component
const Emoji = ({ symbol, onClick }) => (
  <span
    onClick={() => onClick(symbol)}
    style={{ cursor: 'pointer', fontSize: '24px', margin: '0 10px' }}
    role="img"
    aria-label="Mood Emoji"
  >
    {symbol}
  </span>
);

// Main component
const MoodSurvey = () => {
  const [selectedMood, setSelectedMood] = useState(null);

  const handleEmojiClick = (emoji) => {
    setSelectedMood(emoji);
    // Additional actions can be performed here
  };

  return (
    <div className='left-align'>
      <p>How are you doing today?</p>
      <div>
        <Emoji symbol="😄" onClick={handleEmojiClick} /> {/* Smiley */}
        <Emoji symbol="🙂" onClick={handleEmojiClick} /> {/* Slightly Smiley */}
        <Emoji symbol="😐" onClick={handleEmojiClick} /> {/* Neutral */}
        <Emoji symbol="🙁" onClick={handleEmojiClick} /> {/* Slightly Sad */}
        <Emoji symbol="😢" onClick={handleEmojiClick} /> {/* Sad */}
      </div>
      {selectedMood && <p>You selected: {selectedMood}</p>}
    </div>
  );
};

const MainApp = () => (
    <div>
      <WelcomeHeader/>
      <MoodSurvey/>
      <App />
      <App2 />
    </div>
  );
  
  export default MainApp;