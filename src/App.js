import './App.js';
import "./bootstrap.min.css"
import Books from "./books"
import Header from './header/header.js';
import Card from './card/card.js';
import Filter from './filter/filter.js';

function App() {
  return (
    <>
      <Header />

      <section>
        <div className="collapse" id="collapseExample">
          <Filter />
        </div>

        <div className="container-xl">
          <div className="books__list row">
            {Books.map(book => <Card {...book} />)}

            <p className="text-center text-secondary">Please wait...</p>
          </div>
        </div>
     </section>

      <Card />
    </>
  )
}

export default App;
