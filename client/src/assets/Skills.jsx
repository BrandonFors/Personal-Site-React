import React, { useState } from 'react'
import SkillsWidget from './SkillsWidget'
  
const sections = [
  {
    title: 'Programming Languages',
        skillList: [
        
            { name: 'Python', proficiency: 'proficient' },
            { name: 'Java', proficiency: 'proficient' },
            { name: 'JavaScript', proficiency: 'proficient' },
            { name: 'HTML/CSS', proficiency: 'proficient' },
            { name: 'C', proficiency: 'intermediate' },
            { name: 'SQL', proficiency: 'intermediate' }
            ]
    },
    {
        title: 'Frameworks/Libraries',
        skillList: [

            { name: 'React', proficiency: 'proficient' },
            { name: 'Node.js', proficiency: 'proficient' },
            { name: 'Express', proficiency: 'proficient' },
            { name: 'TailwindCSS', proficiency: 'intermediate' },
            { name: 'Bootstrap', proficiency: 'intermediate' },
            ]
    },
    {
        title: 'Tools',
        skillList: [
            { name: 'VS Code', proficiency: 'proficient' },
            { name: 'Git', proficiency: 'proficient' },
            { name: 'Excel', proficiency: 'proficient' },
            { name: 'Canva', proficiency: 'intermediate' },
            { name: 'PostgreSQL', proficiency: 'intermediate' },
            { name: 'MongoDB', proficiency: 'learning' },
            ]
        },
  ];
function Skills(){
    return(
        <div className='flex flex-1 flex-col gap-6'>
            <h2 className='text-4xl font-bold'>Skills</h2>
            
            {
                sections.map((section, index)=>{
                    return(
                        <SkillsWidget 
                        key = {index}
                        section = {section}
                        ></SkillsWidget>
                    )
                    
                })
            }
            

        </div>
    )
}
export default Skills