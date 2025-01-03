import React, { useState } from 'react'

function ProjectWidget(props){
    const {name, imgLink, tools} = props.project;
    return(
        <div className='flex flex-col gap-3 items-center'>
            <img href = {`${imgLink}`}></img>
            <h2 className="text-xl">{name}</h2>
            <div className='flex flex-row flex-wrap gap-2'>
                {tools.map((tool, index) => {
                    return (
                    <div
                    key={index}
                    className={`bg-grey rounded-lg border-4 px-4 py-2`} 
                    >
                        <h3 className='text-lg font-semibold'>{tool}</h3>
                    </div>
                    );
                })}
            </div>
        </div>
    )
}

export default ProjectWidget