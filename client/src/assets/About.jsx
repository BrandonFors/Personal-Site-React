import React, { useState } from 'react'
function About(){
    return(
        <div className='flex flex-1 flex-col gap-6'>
            <h2 className='text-4xl font-bold'>About</h2>
            <p className='text-xl'>
                I am currently a 19 year old freshman at the University of Notre Dame studying Computer Engineering. 
                I enjoy exploring my interests in computer software through expanding my knowledge on the many facets of the software world.
            </p>
            <p className='text-xl'>
                On my own time, I often can be found increasing my web development skills, looking into a new code topic, or doing work for a club I'm involved in.
                At Notre Dame I am involved in 
                <span className='text-blue hover:text-orange'><a href = "https://ndirishsat.com/" target="_blank"> IrishSAT </a></span>
                 and 
                <span className='text-blue hover:text-orange'><a href = "https://sites.nd.edu/cs4good/" target="_blank"> CS4Good </a></span>.
                I am also in the school's Freshman Engineering Leadership Council.
            </p>
            <p className='text-xl'>
                When I'm not on my computer or doing homework I love to play card/board games and watch Notre Dame football.
                Throughout my high school years as a Boy Scout, I also earned the rank of Eagle Scout.
            </p>
        </div>
        
    )
}
export default About