
import React, {useState, useEffect} from 'react';

export default function Menu({menu}){
    const [imgUrl, setImgUrl] = useState('');
    const API_KEY = '90f272f6bec044debff90c278a79cc27';
    const API_KEY_2 ='47db0067b4cb45faaffcc2037bd7cc54';

    useEffect(()=>{
        fetch(`https://api.spoonacular.com/recipes/${menu.id}/information?apiKey=${API_KEY_2}`)
        .then((response) => response.json())
        .then((data) => {
            setImgUrl(data.image)
        })
        .catch(() => {
            console.log('error')
        })
    }, [menu.id])

    return(
        <div className=' '>
            
            <img className='img-thumbnail' src={imgUrl} alt='receta'></img>
            <h5>{menu.title}</h5>
                <p>Tiempo preparación: {menu.readyInMinutes} min <br />
                Comensales: {menu.servings}</p>
            <button className="btn btn-secondary rounded-pill px-5"><a target='_blank' className="text-light text-decoration-none" href={menu.sourceUrl}>Ver receta</a></button>
        </div>

    )
}
