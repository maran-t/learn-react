// import React from 'react';

function Card({title = "NA", image, description = "No description available at the moment, Try later"}) { // includes image, title, description
  return (
    <div className='card cursor-pointer rounded-lg shadow-sm border border-gray-200 bg-white max-w-sm hover:bg-gray-100 m-2 mt-8' style={{ maxWidth: '19rem' }}>
      <img className='card-image grayscale' style={{ objectFit: 'cover', width: '100%', height: '154px' }} src={image} alt={`Splash ${title}`} />
      <div className='pl-2'>
        <h5 className='mb-2 mt-4 text-xl font-bold tracking-tight text-gray-900 dark:text-white'>{title}</h5>
        <p className='card-description mb-4'>{description}</p>
      </div>
    </div>
  )
}

export default Card;