import { useState } from 'react';
import './App.css';
import Card from './components/Card';

const cardData = [
  {
    title: 'Image 01',
    image: 'https://images.unsplash.com/photo-1696834137815-1b26965e9f57?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, officiis?'
  },
  {
    title: 'Image 02',
    image: 'https://images.unsplash.com/photo-1696834137457-02b3d1ca323b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste, saepe.'
  },
  {
    title: 'Image 03',
  }
];


function App() {
  let [count, setCount] = useState(10);
  let [color, setColor] = useState('white');

  return (
    <div className='pl-4 pt-16 w-full h-screen duration-200' style={{ backgroundColor: color }}>
      <h1 className='text-4xl font-bold pt-4 pb-4'>First React App</h1>
      <span>
        Counter: {count}
      </span>
      <div>
        <button onClick={() => setCount(count + 1)}>Add One</button>
      </div>

      <div className='flex flex-wrap'>
        {cardData.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            image={card.image}
            description={card.description}
          />
        ))}
      </div>

      <div id="toast-bottom-right" className="fixed flex items-center w-60 max-w-xs p-4 space-x-4 right-5 bottom-5" role="alert">
        <div className='color-picker' style={{backgroundColor: '#ffff00'}} onClick={() => setColor('#ffff00')}></div>
        <div className='color-picker' style={{backgroundColor: '#ff6347'}} onClick={() => setColor('#ff6347')}></div>
        <div className='color-picker' style={{backgroundColor: '#70ffce'}} onClick={() => setColor('#70ffce')}></div>
      </div>
    </div>
  );
}

export default App;
