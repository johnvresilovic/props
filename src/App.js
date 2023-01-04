import './App.css';
import Card1 from './components/Card1';
import Card2 from './components/Card2';
import cardsArr from './data';

const cards = cardsArr.map((element, index) => {
  return (
    <Card1 
    img={element.img} 
    title={element.title} 
    text={element.text} 
    url={element.url}
    key={index}
    />
  )
})

function App() {
  return (
    <div className="App">
      <h2>Places to Visit</h2>
      <section className='cards'>
    {cards}
    </section>
    </div>
  );
}

export default App;