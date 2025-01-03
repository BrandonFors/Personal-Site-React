import React from 'react';
import './App.css';
import Intro from './assets/Intro';
import About from './assets/About';
import Skills from './assets/Skills';
import Experience from './assets/Experience';
import Projects from './assets/Projects';
import Footer from './assets/Footer';
import Sidebar from './assets/Sidebar';


function App() {

  return (
    
    <div className="flex flex-col gap-16 content-center justify-center px-24">
      <Sidebar></Sidebar>
      <div className="flex lg:flex-row flex-col-reverse justify-center items-center h-screen">
        <Intro></Intro>
        <div className='flex flex-col justify-center items-center'>
          <img className="w-auto h-auto max-w-full max-h-full" src="/Web Logo.png" alt="Web Logo"></img>
        </div>
      </div>
      <div className="flex lg:flex-row flex-col justify-center gap-6">
        <About></About>
        <Skills></Skills>
      </div>
      <Experience></Experience>
      <Projects></Projects>
      <Footer></Footer>
    </div>
  );
}

export default App;
