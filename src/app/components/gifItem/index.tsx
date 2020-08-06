import React from 'react'
import './index.scss'

interface I_item {
    id: string;
    title: string;
    image: string;
}

const GifItem = ({id, title, image:url}: I_item) => (
    <div className='img'>
        <img src={url} alt={title}/>
        <p>{title}</p>
    </div>
)


export default GifItem