import React, { useState } from 'react'

function SkillsWidget(props) {
    const { title, skillList } = props.section;

    return (
      <div className='flex flex-col gap-3'>
        <h2 className="text-2xl flex items-center gap-2">
            <img src="/icons/bulb.svg" className="w-6 h-6" />
            {title}
        </h2>
        <div className='flex flex-row flex-wrap gap-2'>
            {skillList.map((skill, index) => {
                const { name, proficiency } = skill;
                return (
                <div
                key={index}
                className={`bg-${proficiency} rounded-lg border-4 px-4 py-2`} 
                >
                    <h3 className='text-lg font-semibold'>{name}</h3>
                </div>
                );
            })}
        </div>
      </div>
    );
  }
  
export default SkillsWidget