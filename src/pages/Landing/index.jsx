import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './styles.css';

import logo from "@/assets/dashboard_icon.svg";
import wearables from "@/assets/wearables.PNG";
import teammember1 from '@/assets/team-member1.jpeg'
import teammember2 from '@/assets/team-member2.jpeg'
import teammember3 from '@/assets/team-member3.jpeg'
import teammember4 from '@/assets/team-member4.jpeg'
import teammember5 from '@/assets/team-member5.jpeg'
import teammember6 from '@/assets/team-member6.jpeg'
import teammember7 from '@/assets/team-member7.jpeg'
import teammember8 from '@/assets/team-member8.jpeg'
import teammember9 from '@/assets/team-member9.jpeg'
import teammember10 from '@/assets/team-member10.jpeg'
import teammember11 from '@/assets/team-member11.jpeg'
import teammember12 from '@/assets/team-member12.jpeg'
import teammember13 from '@/assets/team-member13.jpeg'
import teammember14 from '@/assets/team-member14.jpeg'
import mentor from '@/assets/mentor.jpeg'
import clinic from '@/assets/clinic.jpeg'
import vite from '@/assets/vite.svg'
import aboutsolution from '@/assets/about-solution.jpg'
import aboutissue from '@/assets/about-issue.jpg'
import supabase from '@/assets/supabase.png'
import testdata from '@/assets/testdata.jpg'
import aboutgoals from '@/assets/about-goals.jpg'

const LandingPage = () => {
    const navigate = useNavigate(); // Initialize useNavigate hook

    const handleHomeClick = () => {
        navigate('/'); // Navigate to the home page
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };
//
    const handleLoginClick = () => {
        navigate('/login'); // Navigate to the login page
    };

    const handleFeedbackClick=() => {
        navigate('/feedback')
    }

    return (
        <div>
            <div className="logo-account-container">
                <div className="logo-container">
                    <img className="logo" onClick={handleHomeClick} src={logo} alt =""/>
                    <span className="logo-text">MedDash</span>
                </div>
                <button className='sign-up-button' onClick={handleFeedbackClick}>Feedback</button>
                <button className="login-button" onClick={handleLoginClick}>Login</button>
            </div>
            <div className="navbar">
                <div className="navbar-links">
                    <li> 
                        <a href="#about">About</a>
                        <a href="#goals">Goals</a>
                        <a href="#ourteam">Our Team</a>
                        <a href="#faq">FAQ</a>
                    </li> 
                </div>
            </div>
            <div className="container">
                <h1 className="title">Welcome to <span style={{color:"#1e539e"}}>MedDash</span>!</h1>
                <p className="paragraph">
                    The platform that consolidates multiple sources of health data into a comprehensive medical dashboard
                </p>
                <br />
                <img src={wearables} alt="Wearables" style={{width:'30em'}}/>
            </div>

            <section id="about">
                <h2 class='section-title'>About</h2>
                <div class='scroll-container'>
                <div class='card card1'>
                    <div class='column column1'>
                        <h3>The Issues</h3>
                        <ul style={{ fontSize: '25px', color: '#1287ed', textAlign: 'center', padding: '10px', whiteSpace: 'pre-wrap', overflowWrap: 'break-word'}}><li> 1. Lack of an integrated electronic health record, life log, and personal omics data</li> <li> 2. Lack of Standardization across healthcare systems, data standards, and terminologies </li></ul>
                    </div>
                    <div class='column column2'>
                        <img src={aboutissue} alt="HealthSensors" style={{width:'30em'}}/>
                    </div>
                </div>
                <div class='card card2'>
                    <h3>Our Solution</h3>
                    <p style={{whiteSpace: 'pre-wrap', overflowWrap: 'break-word'}}> Combine all different forms of sensor data into consolidated dashboard that will provide the user with a snapshot of their current health status.</p>
                    <img src={aboutsolution} alt="HealthSensors" style={{width:'100%'}}/>
                </div>
                <div class='card card3'>
                    <div class='column column1'>
                        <h3 style={{whiteSpace: 'pre-wrap', overflowWrap: 'break-word'}}>Test Data Collection</h3>
                        <ul style={{ fontSize: '25px', color: 'rgb(18, 135, 237)', textAlign: 'center', padding: '10px', margin: '20px', whiteSpace: 'pre-wrap', overflowWrap: 'break-word'}}>
                            <li>- From volunteer patients eager to help with our project</li>
                            <br />
                            <li>-Vital API: heart rate, calories burned, number of steps, and distance traveled</li>
                        </ul>
                    </div>
                    <div class='column column2'>
                        <img src={testdata} alt="HealthSensors" style={{width:'30em'}}/>
                    </div>
                </div>
                <div class='card card4'>
                    <div class='column column1'>
                        <h3 style={{whiteSpace: 'pre-wrap', overflowWrap: 'break-word'}}>Figma Wireframe</h3>
                        <iframe width="600em" height="400em" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FJPJjbZ2u7vChFA5TZPSZDr%2FWebsite-Brainstorm%3Ftype%3Dwhiteboard%26t%3D3oKX5i7KCSgVZmX8-1" allowFullScreen></iframe>
                        
                    </div>
                    <div class='column column2'>
                        <h3 style={{fontSize: '40px', whiteSpace: 'pre-wrap', overflowWrap: 'break-word'}}>Frontend</h3>
                        
                        <p style={{ fontSize: '30px',justifyContent: 'center', alignItems: 'center'}}> <img src={vite} alt="HealthSensors" style={{width:'2em', height:'2em'}} />Vite with</p> 
                        <ul style={{ fontSize: '25px', color: 'rgb(18, 135, 237)', textAlign: 'center', whiteSpace: 'pre-wrap', overflowWrap: 'break-word'}}><li>- AntDesign</li> <li>- shadcn/ui</li></ul>
                        <br /><br />
                        <h3 style={{fontSize: '40px', whiteSpace: 'pre-wrap', overflowWrap: 'break-word'}}>Backend</h3>
                        
                        <p style={{ fontSize: '30px',justifyContent: 'center', alignItems: 'center', whiteSpace: 'pre-wrap', overflowWrap: 'break-word'}}> <img src={supabase} alt="HealthSensors" style={{width:'2em', height:'2em'}} /> Supabase</p> 
                        <p style={{ fontSize: '30px',justifyContent: 'center', alignItems: 'center', whiteSpace: 'pre-wrap', overflowWrap: 'break-word'}}> with Pandas and Numpy</p> 
                    </div>
                </div>
                <div class='card card5'>
                    <div class='column column1'>
                            <h3 style={{whiteSpace: 'pre-wrap', overflowWrap: 'break-word'}}>Future Upcoming Features</h3>
                            <ul style={{ fontSize: '25px', color: 'rgb(18, 135, 237)', textAlign: 'center', padding: '10px', margin: '20px', whiteSpace: 'pre-wrap', overflowWrap: 'break-word'}}><li>- Different input data types for diary entry</li> <li>- Predictive Analysis</li> <li>- Real-time Health Alerts</li></ul>
                        </div>
                        <div class='column column2'>
                            <img src={aboutgoals} alt="HealthSensors" style={{width:'30em', marginTop:'5em'}}/>
                    </div>
                </div>
                </div>
            </section>

            <section id="goals">
                <h2 className='section-title'>Goals Section</h2>
                <div className="side-by-side">
                    <div className="left">
                        <h3>Problem Statement</h3>
                        <p><ul>
                            <li>- Lack of holistic view of patients’ health</li>
                            <li>- Difficulties in data storage, platform syncing, and data security</li>
                            <li>- Difficult user experiences and skepticism of health data apps for both clinicians and patients</li></ul></p>
                    </div>
                    <div className="right">
                        <h3>Overview of Solution</h3>
                        <p><ul>
                            <li>- Integrates data from different sources and displaying it in joined graphs and statistics</li>
                            <li>- Implement a backend to the website that pulls Vital data</li>
                            <li>- Correlation and analysis of data through Diary Entries and Health Habit Trackers</li></ul> </p>
                    </div>
                </div>
            </section>

            <section id="ourteam">
                <h2 className='section-title'>Our Team</h2>
                <div className= "team-members-container">
                    <div className="team-member-container">
                        <img src={teammember1} alt="Team Member 1"/>
                        <div className="text-container">
                        <h3>Ruchi Kamboj</h3>
                        <p>
                            Hi, I’m Ruchi Kamboj and I’m a fourth year Bioengineering: Bioinformatics major. Through this 
                            dashboard, I want to empower individuals with a clearer comprehension of their health data, 
                            enhancing patient-provider communication. My intended goal is to be a pediatrician. In my free time, 
                            I like to go on walks and bake.
                        </p>
                        </div>
                    </div>
                    <div className="team-member-container">
                        <img src={teammember2} alt="Team Member 2"/>
                        <div className="text-container">
                            <h3>Jessica Fong</h3>
                            <p>
                                Hi! I’m Jessica, a 4th year Bioengineering: Bioinformatics major. I want to use my computer science 
                                knowledge and coding skills to build projects that will improve people’s lives. In my free time, I 
                                like to watch anime, read, or go on a walk.
                            </p>
                        </div>
                    </div>
                    <div className="team-member-container">
                        <img src={teammember3} alt="Team Member 3"/>
                        <div className="text-container">
                            <h3>Owen Guan</h3>
                            <p>
                                I’m Owen a 4th year Bioengineering: Bioinformatics major. My career goal is to apply bioinformatics 
                                to health or biological data to create meaningful, practical quality of life improvements for 
                                patients and everyday people. In my free time, I enjoy socializing with friends about TV shows and 
                                movies, and going to the gym and video games.
                            </p>
                        </div>
                    </div>
                    <div className="team-member-container">
                        <img src={teammember4} alt="Team Member 4"/>
                        <div className="text-container">
                            <h3>Melissa Osheroff</h3>
                            <p>
                                Hello, my name is Melissa and I am part of the Bioengineering team! I plan on graduating with a degree 
                                in Bioinformatics in June 2024. After college I hope to be able to pursue a career which combines 
                                technology with improving people’s day to day lives. In my free time, I like to hike in national parks, 
                                attend pizookie Tuesdays, and paint with friends.
                            </p>
                        </div>
                    </div>
                    <div className="team-member-container">
                        <img src={teammember5} alt="Team Member 5"/>
                        <div className="text-container">
                            <h3>Marina Xu</h3>
                            <p>
                                Hi! I’m Marina, and I’m a graduating Bioengineering: Bioinformatics major. I’m not too sure what I want 
                                to do after graduation, but my ultimate career goal is to teach science or technology to high schoolers. 
                                I like hiking, playing with my dog, and going out with my friends in my free time!
                            </p>
                        </div>
                    </div>
                    <div className="team-member-container">
                        <img src={teammember6} alt="Team Member 6"/>
                        <div className="text-container">
                            <h3>Shreya Nagesh</h3>
                            <p>
                                Hi! I’m Shreya, a 4th year Bioengineering: Bioinformatics major. After graduation, I am aiming to work in 
                                health or clinical informatics, as I hope to work with data that positively impacts people’s health. In 
                                my free time I like to spend time outdoors, curate Spotify playlists, and hang out with friends!
                            </p>
                        </div>
                    </div>
                    <div className="team-member-container">
                        <img src={teammember7} alt="Team Member 7"/>
                        <div className="text-container">
                            <h3>Hede Yang</h3>
                            <p>
                                Hi! I’m Hede and I’m a fourth year data science student at UCSD. I enjoy crocheting, hiking and free diving 
                                during my free time.
                            </p>
                        </div>
                    </div>
                    <div className="team-member-container">
                        <img src={teammember8} alt="Team Member 8"/>
                        <div className="text-container">
                            <h3>Wenhua Tang</h3>
                            <p>
                                Hi! I'm Wenhua. I am currently in my third year at UC San Diego studying Data Science. I hope to find a 
                                job in data engineering in the future. During my free time, I enjoy playing video games and cooking.
                            </p>
                        </div>
                    </div>
                    <div className="team-member-container">
                        <img src={teammember9} alt="Team Member 9"/>
                        <div className="text-container">
                            <h3>Teresa Lee</h3>
                            <p>
                                Hi! I’m a fourth year data science student at UCSD. I hope to leverage data science in health to help 
                                patients. I enjoy cooking and going on walks during my free time.
                            </p>
                        </div>
                    </div>
                    <div className="team-member-container">
                        <img src={teammember10} alt="Team Member 10"/>
                        <div className="text-container">
                            <h3>Eric Park</h3>
                            <p>
                                Hi, I’m Eric and I’m currently a fourth year data science student at UCSD. In my free time, I enjoy 
                                playing basketball with friends and playing video games.
                            </p>
                        </div>
                    </div>
                    <div className="team-member-container">
                        <img src={teammember11} alt="Team Member 11"/>
                        <div className="text-container">
                            <h3>Zhilin Guo</h3>
                            <p>
                                Fourth year student at UCSD, majoring in Data Science. I hope AI can provide more specific health 
                                services in the future.
                            </p>
                        </div>
                    </div>
                    <div className="team-member-container">
                        <img src={teammember12} alt="Team Member 12"/>
                        <div className="text-container">
                            <h3>Bryan Talavera</h3>
                            <p>
                                Hi, I’m Bryan. I am a fourth year Data Science major. I hope to use my understanding of Data Science 
                                to help others make informed data-driven decisions. I enjoy skateboarding and playing video games 
                                with friends.
                            </p>
                        </div>
                    </div>
                    <div className="team-member-container">
                        <img src={teammember13} alt="Team Member 13"/>
                        <div className="text-container">
                            <h3>Yuchu Yan</h3>
                            <p>
                                Hi, I'm a senior student at UCSD, majoring in Data Science with a minor in General Biology. My 
                                ambition is to integrate data science with other fields, particularly in the realm of biology. In my 
                                spare time, I enjoy go-karting, motorcycling, and baking.
                            </p>
                        </div>
                    </div>
                    <div className="team-member-container">
                        <img src={teammember14} alt="Team Member 14"/>
                        <div className="text-container">
                            <h3>Shrishti Seksaria</h3>
                            <p>
                                Hi! Im Shrishti, senior at UCSD pursuing Data Science and Economics. I hope to use data and technology 
                                to help others make better data driven decisions across all industries. In my free time I like to write 
                                poetry, play badminton, or go hiking!
                            </p>
                        </div>
                    </div>
                </div>
                <div className="side-by-side-our-team">
                    <div className="mentor">
                    <h2>Mentor</h2>
                        <div className="special-container">
                        <img src={mentor} alt="Mentor"/>
                
                        <div className="text-container">
                            <h3> <a href= "https://smarr.ucsd.edu/" style={{textDecoration:"underline"}}>Benjamin Smarr</a></h3>
                            <p>
                                Assistant Professor in Department of Bioengineering, with a 50% appointment to the Halicioglu Data 
                                Science Institute
                            </p>
                        </div>
                    </div>
                    </div>
                    <div className="clinic">
                        <h2>Clinic</h2>
                        <div className="special-container">
                        <img src={clinic} alt="Clinic"/>
                        <div className="text-container">
                            <h3> <a href= "https://www.measured-wellness.com/about" style={{textDecoration:"underline"}}>Measured Wellness</a> </h3>
                            <p>
                                Empowering their patients to gain insight into their health through personal trackers, and provide 
                                the holistic care needed to optimize their well-being
                            </p>
                        </div>
                    </div>
                    </div>
                </div>
            </section>

            <section id="faq">
                <h2 className='section-title'>FAQs</h2>
                <div className="faq">
                <details>
                    <summary>What does MedDash currently provide?</summary>
                    <p>MedDash currently provides a comprehensive overview of health data in graph form. It also has features such as Diary Entries, where users can write about their day, and Health Habit Tracker, where users can track specific habits.</p>
                </details>
                <details>
                    <summary>What makes MedDash unique or different from existing dashboards?</summary>
                    <p>It compiles many devices into one convenient place for the user to access, and has features to help users track variables that can't be captured with wearable data.</p>
                </details>
                <details>
                    <summary>Where does the data come from?</summary>
                    <p>The data comes from multiple wearables, which the users have to connect to an API company called Vital. Vital pulls the data from the wearables and our code pulls from the Vital API through an API key and the user's ID. </p>
                </details>
                <details>
                    <summary>How was MedDash created?</summary>
                    <p>MedDash was created with Javascript, React, Vite, and Python. React and Vite were primarily for building and running the website, while Python was used to pull from the Vital API. It is deployed as a website in Netlify. </p>
                </details>
                <details>
                    <summary>What features would be added to MedDash in the future?</summary>
                    <p>In the future, MedDash would ideally have a chatbot for the patients to ask general questions, talk to text for Diary Entries, integrating ER records, and adding the backend to a HIPAA compliance database. </p>
                </details>
            {/* Add more questions and answers as needed */}
                 </div>
            </section>
        </div>
    );
};

export default LandingPage;