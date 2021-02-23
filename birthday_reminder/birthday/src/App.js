import React, { useState } from 'react';
import List from './List';
import Form from './Form';
import data from './data';

import './App.css';

// class Birthdays extends React.Component {

// }

function App() {
  const [people, setPeople] = useState(data);
  return (
    <main>
      <section className='container' id='mainbox'>
        <h2>{people.length} birthdays today</h2>
        <List people={people} />
        <button onClick={() => console.log('cliked here')}>Clear List</button>
        <br />
        <Form />
      </section>
      <br />
      {/* <section className="container" id="form">
        
        <p>infor</p>
      </section> */}
    </main>
  );
}

export default App;
