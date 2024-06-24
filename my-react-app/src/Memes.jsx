import React, { useState } from 'react';
import './index.css';

const memes = [
  {
    id: 1,
    quote: "Life is 10% what happens to me and 90% of how I react to it.",
    author: "Charles Swindoll",
    bgColor: "bg-red-200",
  },
  {
    id: 2,
    quote: "The best way to predict the future is to invent it.",
    author: "Alan Kay",
    bgColor: "bg-blue-200",
  },
  {
    id: 3,
    quote: "An unexamined life is not worth living.",
    author: "Socrates",
    bgColor: "bg-green-200",
  },
  {
    id: 4,
    quote: "Your time is limited, so don’t waste it living someone else’s life.",
    author: "Steve Jobs",
    bgColor: "bg-yellow-200",
  },
  {
    id: 5,
    quote: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
    bgColor: "bg-purple-200",
  },
  {
    id: 6,
    quote: "The mind is everything. What you think you become.",
    author: "Buddha",
    bgColor: "bg-pink-200",
  },
  {
    id: 7,
    quote: "The best revenge is massive success.",
    author: "Frank Sinatra",
    bgColor: "bg-orange-200",
  },
];

const Memes = () => {
  const [currentMemeIndex, setCurrentMemeIndex] = useState(0);

  const nextMeme = () => {
    setCurrentMemeIndex((prevIndex) => (prevIndex + 1) % memes.length);
  };

  const prevMeme = () => {
    setCurrentMemeIndex((prevIndex) =>
      prevIndex === 0 ? memes.length - 1 : prevIndex - 1
    );
  };

  const currentMeme = memes[currentMemeIndex];

  return (
    <div className={`App ${currentMeme.bgColor} min-h-screen flex flex-col items-center justify-center`}>
      <header className="text-3xl font-bold text-center my-6">
        Meme Quotes
      </header>
      <div className="w-full max-w-md">
        <div className="p-6 rounded-lg bg-white shadow-md">
          <p className="text-xl font-semibold">{currentMeme.quote}</p>
          <p className="text-right text-sm">- {currentMeme.author}</p>
        </div>
      </div>
      <div className="flex mt-4">
        <button
          className="mr-2 p-2 bg-blue-500 text-white rounded"
          onClick={prevMeme}
        >
          Previous
        </button>
        <button
          className="ml-2 p-2 bg-blue-500 text-white rounded"
          onClick={nextMeme}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Memes;
