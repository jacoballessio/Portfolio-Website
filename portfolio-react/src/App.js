import logo from './logo.svg';
import portfolioss from './assets/portfoliowebsitess.png';
import './App.css';
import './styles.css';
import Nav from './Nav.js';
import ProjectCard from './ProjectCard.js';
import ProjectTypeCard from './ProjectTypeCard.js';
import SkillTypeCard from './SkillTypeCard';
import SkillCard from './SkillCard';
import TechComp from './TechComp';
import TechList from './TechList';
import TechListLogos from './TechListLogos.json';
import EducationCard from './EducationCard';
import TechImg from './TechImg.js';
function App() {

  return (
    <div id="top" className="App">
      <header className="App-header">
        <Nav />
        <section id="home">
          <h1>Welcome to Jacob Allessio's Portfolio</h1>
          <p id="main-description">I'm Jacob Allessio, a Computer Science undergraduate with experience in various fields. Check out my projects and skills below!</p>
        </section>

        <h1 id="projects" className="SectionHeading">Projects</h1>

        <section className='ProjectSection CommonSection'>

          <ProjectTypeCard title="Websites">
            <ProjectCard type="Personal" techList={["React.js", "HTML", "Javascript", "Node.js"]} title="Portfolio Website" image={portfolioss} description="The site you're on right now!" github="https://github.com/jacoballessio/Portfolio-Website" link="https://www.google.com" />
            <ProjectCard type="Personal" techList={["HTML", "Javascript"]} title="Shakey Snake" image={portfolioss} description="ShakySnake is a clone of the classic 'snake' game, with the added feature that you can upload music and watch the snake dance to it." github="https://github.com/jacoballessio/ShakySnake" link="https://www.google.com" />
            <ProjectCard type="School" techList={["HTML","CSS", "Javascript"]} title="CIS 155" image={portfolioss} description="Several websites projects from my CIS 155 course." github="https://github.com/jacoballessio/Assignments" link="https://www.google.com" />
            
          </ProjectTypeCard>
          <ProjectTypeCard title="Applications">
            <ProjectCard type="Personal" title="Jacobot" techList={["Python", "GPT-4", "Langchain", "AWS", "python-telegram-bot"]} image={logo} description="Jacobot a helpful personalized chatbot powered by GPT-4. The goal is to create an easily accessible telegram chatbot that takes advantage of the major advancements in LLM technology. " github="https://github.com/jacoballessio/Jacobot" link="https://www.google.com" />
          </ProjectTypeCard>
          <ProjectTypeCard title="Machine learning">
            <ProjectCard type="Competition" title="ICR - Identifying Age-Related Conditions" techList={["Python", "Keras", "Pandas", "Numpy", "Matplotlib"]} image={logo} description="This is a machine learning coding competition. The goal of this competition is to predict if a person has any of three medical conditions; a binary classification problem." link="https://www.google.com" />
           
          </ProjectTypeCard>
          <ProjectTypeCard title="Miscellaneous">
            <ProjectCard type="Open-source contribution" title="FastChat" description="Repository for vicuna. Fixed issue with download-model." github="https://github.com/jacoballessio/FastChat" techList={["Python", "Flask", "Keras", "Pandas", "Numpy", "Matplotlib"]} image={logo} link="https://www.google.com" />
          </ProjectTypeCard>


        </section>
        <h1 className="SectionHeading">Education</h1>
        <section className='EducationSection CommonSection'>
          <EducationCard school="Olympic College" description="General AA degree with focus towards computer science" datesAttended="September 2017 - June 2019" degree="Associate Of Arts" graduationDate="June 2019"/>
          <EducationCard school="Western Governers University" description="Bachelor of Science in Computer Science" datesAttended="December 2022 - Present" degree="Computer Science - Bachelor of Science" stillAttending graduationDate="December 2023"/>
        </section>
        <h1 className="SectionHeading">Work History</h1>
        <section className='WorkSection CommonSection'></section>
        <h1 id="skills" className="SectionHeading">Skills</h1>
        <section className='SkillsSection CommonSection'>
          <SkillTypeCard title="Programming Languages">
            <SkillCard skill="Python">
              <TechList title="Experience with" techList={["Flask", "TensorFlow", "Keras", "Pandas", "Numpy", "Matplotlib"]} />
            </SkillCard>
            <SkillCard skill="JavaScript">
              <TechList title="Experience with" techList={['React.js', 'Node.js', 'Express.js', 'HTML', 'CSS']} />
            </SkillCard>
            <SkillCard skill="Java">
              <TechList title="Experience with" techList={['JavaFX']} />
            </SkillCard>
            <SkillCard skill="C++" />
            <SkillCard skill="C#" />
            <SkillCard skill="SQL" />
            <SkillCard skill="Ubuntu" />
            <SkillCard skill="Docker" />
          </SkillTypeCard>
          <SkillTypeCard title="Software and tools" >
            <SkillCard skill="Photoshop" />
            <SkillCard skill="VSCode" />
            <SkillCard skill="Github" />
            <SkillCard skill="Unity 3D" />
            <SkillCard skill="Blender" />
            <SkillCard skill="ChatGPT" />
          </SkillTypeCard>
          <SkillTypeCard title="Soft Skills">
            <SkillCard displayElement={<p>Fast learner</p>} />
            <SkillCard displayElement={<p>Ability to work as part of a team</p>} />
            <SkillCard displayElement={<p>Ability to work independently</p>} />
            <SkillCard displayElement={<p>Ability to adapt to fast-paced environments</p>} />
          </SkillTypeCard>
        </section>
        
      </header>
      <footer id="contact">
        <h1>Contact me</h1>
        <p>Email(Preferred):
          <a href="mailto:
          jacob.allessio@gmail.com">
            jacob.allessio@gmail.com
            </a>  
        </p>
        <p>Phone(you will likely need to leave a voicemail): <a href="tel:360-434-3912">360-434-3912</a></p>
        <p>Social media:
     
        </p>
        <div className='SocialMedia'>

          <a href="https://www.linkedin.com/in/jacob-allessio-0b1b3b1b0/">
              <TechImg tech="linkedin"/>
            </a>
            <a href="https://www.github.com/jacoballessio">
              <TechImg tech="github"/>
            </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
