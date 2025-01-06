import React, { useState } from 'react'
import ProjectWidget from './ProjectWidget'

function Projects(){
    const webProjects = [
        {name:"KeeperApp",imgLink:"",tools:["React", "Node.js", "Express","PostgreSQL"]},
        {name:"TriviaApp",imgLink:"",tools:["React", "Node.js", "Express"]},
        {name:"Personal Site",imgLink:"",tools:["React", "TailwindCSS"]}
    ]
    return(
        <div className='flex items-center flex-col gap-6'>
            <h2 className='text-4xl font-bold'>Web Projects</h2>
            <div className='flex flex-row flex-wrap gap-6 center-items'>
            {
                webProjects.map((project, index)=>{
                    return(
                        <ProjectWidget 
                        key={index}
                        project = {project}
                        ></ProjectWidget>
                    )
                    
                })
            }
            
            </div>
        </div>
        
    )

}
export default Projects