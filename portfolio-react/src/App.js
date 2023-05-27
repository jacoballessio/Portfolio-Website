import logo from './logo.svg';
import portfolioss from './assets/portfoliowebsitess.png';
import './App.css';
import './styles.css';
import Nav from './Nav.js';
import ProjectCard from './ProjectCard.js';
import ProjectTypeCard from './ProjectTypeCard.js';
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
        
        <div className='ProjectSection'>
          
          <ProjectTypeCard title="Websites">
            <ProjectCard title="Portfolio Website" image={portfolioss} description="The site you're on right now!" link="https://www.google.com" />
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
          
        </div>
      </header>
    </div>
  );
}

export default App;
