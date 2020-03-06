import React from 'react'
import classes from './Output.module.css'

function Output({ charArr, click }) {
    
    return (
        <div >
            {charArr.map((char, index) => {
                return (
                    <div key={index}  onClick={()=>click(index)} className={classes.Output} >{char}</div>
                )
            })
            }
        </div>
    )
}

export default Output
