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
function App() {

  return (
    <div className="App">
      <header className="App-header">
        <Nav />
        <section id="home">
          <h1>Welcome to Jacob Allessio's Portfolio</h1>
          <p id="main-description">I'm Jacob Allessio, a Computer Science undergraduate with experience in various fields. Check out my projects and skills below!</p>
        </section>

        <h1 className="SectionHeading">Projects</h1>

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

            <ProjectCard title="Project 1" image={logo} description="This is a project" link="https://www.google.com" />
          </ProjectTypeCard>
          <ProjectTypeCard title="Miscellaneous">
            <ProjectCard title="Project 1" image={logo} description="This is a project" link="https://www.google.com" />
          </ProjectTypeCard>


        </section>
        <h1 className="SectionHeading">Skills</h1>
        <section className='SkillsSection CommonSection'>
          <SkillTypeCard title="Programming Languages">
            <SkillCard skill="Python" skillBackground>
              <TechList title="Experience with" techList={["Flask", "TensorFlow", "Keras", "Pandas", "Numpy", "Matplotlib"]} />
            </SkillCard>
            <SkillCard skill="JavaScript" skillBackground>
              <TechList title="Experience with" techList={['React.js', 'Node.js', 'Express.js', 'HTML', 'CSS']} />
            </SkillCard>
            <SkillCard skill="Java" skillBackground>
              <TechList title="Experience with" techList={['JavaFX']} />
            </SkillCard>
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
    </div>
  );
}

export default App;
