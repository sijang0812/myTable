import React from 'react';
import './App.css';
import Question from './Question';
// import homeLogo from './img/homeLogo.png';
// import homeDlvryBtn from './img/homeDlvryBtn.png';
// import homeRstrntBtn from './img/homeRstrntBtn.png';

export default function Main({ categories }) {
  return (
    <div className="bg">
      <div className="divLogo">
        <p className="logo">DA GOCHE</p>
        {categories.map(category => {
          return <Question category={category} key={category.id} name={category.name} url={category.url} />
        })}
      </div>
    </div>
  )
}