import React from 'react';
import style from "./recipe.module.css";

const Recipe = ({title, kcal, img, ingredients, url}) => {
    return(
        <div className={style.recipe}>
            <a className = {style.target} target ="_blank" href = {url}>
            <h1>{title}</h1>
            <ol>
                {ingredients.map(ingredient =>(
                    <li>{ingredient.text}</li>
                ))}
            </ol>
            <p>{kcal} Calories</p>
            </a>
            <a target="_blank" href={img}>
                <img className={style.image} src ={img} alt=""/>
            </a>
        </div>
    );
};

export default Recipe;