
import React from 'react';
import { Image } from 'antd';
import { Flex, Progress } from 'antd';

const App = () => (
    <div style={{ textAlign: 'right' }}>
        <Image
            width={500}
            src="https://med-dash.github.io/static/media/dashboard-growth.9e985101d7d337104387.png"
        />
    </div>
);
const x = 50;
const App2 = () => (

  <Flex gap="small" wrap="wrap">
    <Progress type="circle" percent={100 - x} />
    <Progress type="circle" percent={70}  />
    <Progress type="circle" percent={100} />
  </Flex>
);


const MainApp = () => (
    <div>
      <App />
      <App2 />
    </div>
  );
  
  export default MainApp;