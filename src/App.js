import React from 'react';
import { Helmet } from 'react-helmet';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faSquareCaretUp } from '@fortawesome/free-solid-svg-icons';
import './App.css';

function App() {
  return (
    <div className="Resume">
      <Helmet>
        <link 
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css" 
          integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg==" 
          crossOrigin="anonymous" 
          referrerPolicy="no-referrer" 
        />
      </Helmet>
      
      <div className="Header">
        <h1>LAURENCE ANDRE S. MALANA</h1>
        <h2>Senior Web Developer</h2>
      </div>

      <div className="Main">
        <div className="LeftColumn">
          <div className="ContactInfo">
            <h3 className="SectionTitle">CONTACT</h3>
            <p>lasmalana.student@ua.edu.ph</p>
            <p>+63 9752966823</p>
            <p>Mexico, Pampanga</p>
            
            <div 
              onClick={() => window.open('https://vercel.com/dedoy28s-projects', '_blank')} 
              className="IconLink"
              style={{ cursor: 'pointer', display: 'inline-block', marginRight: '10px' }}
            >
              <FontAwesomeIcon icon={faSquareCaretUp} size="2x" />
            </div>

            <div 
              onClick={() => window.open('https://github.com/Dedoy28', '_blank')} 
              className="IconLink"
              style={{ cursor: 'pointer', display: 'inline-block', marginLeft: '10px' }}
            >
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </div>
          </div>

          <div className="Education">
            <h3 className="SectionTitle">EDUCATION</h3>
            <p>Bachelor of Science</p>
            <p>Information Technology</p>
            <p>University of the Assumption</p>
            <p>2011 - 2015</p>
            <p>Pampanga, Philippines</p>
          </div>

          <div className="Skills">
            <h3 className="SectionTitle">SKILLS</h3>
            <ul>
              <li>JavaScript</li>
              <li>React</li>
              <li>Node.js</li>
              <li>CSS</li>
              <li>MongoDB</li>
              <li>REST APIs</li>
            </ul>
          </div>
        </div>

        <div className="RightColumn">
          <div className="Experience">
            <h3>WORK EXPERIENCE</h3>
            <div className="Job">
              <h3>Lead Frontend Developer</h3>
              <p>Google | 2020 - Present | Mountain View, CA</p>
              <ul>
                <li>Led a team of 5 developers to build responsive web applications, enhancing user engagement by 30%.</li>
                <li>Collaborated with UX designers to improve application usability, resulting in a 25% decrease in user complaints.</li>
                <li>Implemented CI/CD pipelines, reducing deployment time by 40%.</li>
              </ul>
            </div>

            <div className="Job">
              <h3>Frontend Developer</h3>
              <p>Facebook | 2016 - 2020 | Menlo Park, CA</p>
              <ul>
                <li>Developed features for the Facebook Marketplace, increasing transaction volume by 50%.</li>
                <li>Utilized React and Redux to optimize performance, reducing load times by 15%.</li>
                <li>Participated in code reviews and mentored junior developers, fostering a collaborative team environment.</li>
              </ul>
            </div>

            <div className="Job">
              <h3>Software Engineer Intern</h3>
              <p>Microsoft | 2015 - 2016 | Redmond, WA</p>
              <ul>
                <li>Assisted in developing internal tools using C# and .NET, improving operational efficiency by 20%.</li>
                <li>Contributed to open-source projects, enhancing community engagement.</li>
                <li>Worked closely with senior developers to learn best practices and agile methodologies.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
