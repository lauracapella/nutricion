
import React, {useState, useEffect} from 'react';

export default function Menu({menu}){
    const [imgUrl, setImgUrl] = useState('');
    useEffect(()=>{
        fetch(`https://api.spoonacular.com/recipes/${menu.id}/information?apiKey=bcb3f5e2c205486885c61c1621f39f98`)
        .then((response) => response.json())
        .then((data) => {
            setImgUrl(data.image)
        })
        .catch(() => {
            console.log('error')
        })
    }, [menu.id])

    return(
        <div>
            <h1>{menu.title}</h1>
            <img src={imgUrl} alt='receta'></img>
            <ul>
                <li>Tiempo preparación: {menu.readyInMinutes} min</li>
                <li>Comensales: {menu.servings}</li>
            </ul>
            <a href={menu.sourceUrl}>Ver receta</a>
        </div>

    )
}