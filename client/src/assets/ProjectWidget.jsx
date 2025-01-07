import React, { useState } from 'react'

function ProjectWidget(props){
    const {name, imgLink, tools} = props.project;
    return(
        <div className='flex flex-col gap-3 items-center max-w-sm h-auto p-3 border rounded-xl shadow-lg'>
            <img src = {`${imgLink}`} className='w-auto'></img>
            <h2 className="text-xl">{name}</h2>
            <div className='flex flex-row flex-wrap gap-2 justify-center'>
                {tools.map((tool, index) => {
                    return (
                    <div
                    key={index}
                    className={'bg-gray-100 rounded-lg border-4 px-4 py-2'} 
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