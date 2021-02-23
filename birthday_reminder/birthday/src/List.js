import React from 'react';

const List = ({ people }) => {
  return (
    <>
      {people.map((person) => {
        const { id, name, age, date, photo } = person;
        return (
          <article key={id} className='person'>
            <img src={photo} alt={name} />
            <div>
              <h4>{name}</h4>
              <p>Age: {age}</p>
              <p>Date: {date}</p>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default List;
