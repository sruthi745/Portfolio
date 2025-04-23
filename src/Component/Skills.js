import React from 'react'
import CurrentCompany from './CurrentCompany'
import { Link } from 'react-router-dom'


function Skills() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div className='frame f1' style={{ width: '100%', height: '10vh', marginTop: '5vh', padding:'10px' }}>
      Current Company: <br />
      Designation:  <br />
      Duration : Febuaray 2023 to Present
    </div>
            <div className='df' style={{ width: '100%', marginTop: '5vh' }}>
               
            </div>

        </div>
    )
}

export default Skills