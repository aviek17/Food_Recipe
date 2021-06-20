import React from 'react';
import style from "./recipe.module.css"

const Recipe = (props) => {
    return (
        <>
            <div className={style.recipe}>
                <h1 >Title :{props.title}</h1>
                <p> Calories: {props.calories}</p>
                
                    <ol>
                        {props.ingridients.map(item => (
                            <li>{item}</li>
                        ))}
                    </ol>
                
                <img className={style.image} src={props.img} alt={props.title} height="200px" width="200px"/>
            </div>

        </>
    )
}

export default Recipe;
