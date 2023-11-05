"use client"
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';

const cloudUrl = 'https://djjjk9bjm164h.cloudfront.net/';

const initialData = [
  { img: `/sampleImages/amorphous.webp`, name: 'Korean Fried', price: '20', distance: '2' },
  { img: `/sampleImages/austere.webp`, name: 'Grilled', price: '23', distance: '5' },
  { img: `/sampleImages/cerebral.webp`, name: 'Fried', price: '25', distance: '11' },
  { img: `/sampleImages/congenial.webp`, name: 'Deep Fried', price: '23', distance: '6' }
];

function Card({ data, onSwipeComplete }) {
  const cardRef = useRef();

  const handlePointerDown = (event) => {
    // ... pointer down logic
  };

  useEffect(() => {
    const card = cardRef.current;
    card.addEventListener('pointerdown', handlePointerDown);

    return () => {
      card.removeEventListener('pointerdown', handlePointerDown);
    };
  }, []);

  return (
    <div ref={cardRef} className="card absolute" style={{ backgroundImage: `url(${data.img})` }}>
       <Image src={data.img} alt={data.name} width={300} height={300} />
    </div>
  );
}

function Cards() {
  const [cardsData, setCardsData] = useState(initialData);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const handleSwipe = (direction) => {
    // ... swipe logic, update state accordingly
  };

  return (
    <div className="frame">
      {cardsData.map((data, index) => (
        <Card key={index} data={data} onSwipeComplete={() => handleSwipe(index)} />
      ))}
      <button id="like" onClick={() => handleSwipe('like')}>Like</button>
      <button id="hate" onClick={() => handleSwipe('hate')}>Hate</button>
    </div>
  );
}

export default Cards;
