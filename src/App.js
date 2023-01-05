import './App.css';
import Card from './components/Card';
import cardsArr from './data';
import Counter from './Counter'

const cards = cardsArr.map((element, index) => {
  return (
    <Card 
    {...element}
    key={index}
    />
  )
})

function App() {
  return (
    <div className="App">
      {/* <h2>Places to Visit</h2>
      <section className='cards'>
    {cards}
    </section> */}
    <Counter />
    </div>
  );
}

export default App;