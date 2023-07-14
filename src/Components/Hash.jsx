import React from 'react'
import './Hash.css';

function Hash({title, imageUrl, body, BlogLink }) {
    return (
        <div className='card-container'>
            <div className='image-container'>
                <img src={imageUrl} alt='' />
            </div>
            <div className='card-content'>

            </div>
            <div className='card-title'>
                <h3>{title}</h3>
            </div>
            <div className='card-body'>
                <p>{body}</p>
            </div>
            <div className='btn-2'>
                <button>
                    <a href={BlogLink} target="_blank">
                        Read
                    </a>
                </button>
            </div>
        </div>
    )
}

export default Hash