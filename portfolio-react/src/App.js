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
function App() {

  return (
    <div className="App">
      <header className="App-header">
        <Nav />
        <section id="home">
            <h1>Welcome to Jacob Allessio's Portfolio</h1>
            <p id="main-description">I'm Jacob Allessio, a Computer Science enthusiast with experience in various fields. Check out my projects and skills below!</p>
        </section>
        <h1 id="projects" style={{ padding: "10px", borderRadius: "10px", fontSize:"25px"}}>Projects</h1>
        
        <section className='ProjectSection CommonSection'>
          
          <ProjectTypeCard title="Websites">
            <ProjectCard techList={["React.js", "HTML", "Javascript", "Node.js"]} title="Portfolio Website" image={portfolioss} description="The site you're on right now!" github="https://github.com/jacoballessio/Portfolio-Website" link="https://www.google.com" />
          </ProjectTypeCard>
          <ProjectTypeCard title="Applications">
            <ProjectCard title="Project 1" image={logo} description="This is a project" link="https://www.google.com" />
          </ProjectTypeCard>
          <ProjectTypeCard title="Back-end">
            <ProjectCard title="Project 1" image={logo} description="This is a project" link="https://www.google.com" />
          </ProjectTypeCard>
          <ProjectTypeCard title="Machine learning">
            <ProjectCard title="Project 1" image={logo} description="This is a project" link="https://www.google.com" />
          </ProjectTypeCard>
          
        </section>
        <h1 id="projects" style={{ padding: "10px", borderRadius: "10px", fontSize:"25px"}}>Skills</h1>
        <section className='SkillsSection CommonSection'>
          <SkillTypeCard title="Programming Languages">
            <SkillCard displayElement={<TechComp tech="Python" />}>
              <TechList title="Experience with" techList={["Flask", "TensorFlow", "Keras", "Pandas", "Numpy", "Matplotlib"]} />
            </SkillCard>
            <SkillCard displayElement={<TechComp tech="JavaScript" />}>
              <TechList title="Experience with" techList={['React.js', 'Node.js', 'Express.js', 'HTML', 'CSS']} />
            </SkillCard>
            <SkillCard displayElement={<TechComp tech="Java" />}>
              <TechList title="Experience with" techList={['JavaFX']} />
            </SkillCard>
          </SkillTypeCard>
          <SkillTypeCard title="Software and tools">
            <SkillCard displayElement={<TechComp tech="Photoshop" />} />
            <SkillCard displayElement={<TechComp tech="VSCode" />} />
            <SkillCard displayElement={<TechComp tech="Github" />} />
            <SkillCard displayElement={<TechComp tech="Unity 3D" />} />
            <SkillCard displayElement={<TechComp tech="Blender" />} />
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
