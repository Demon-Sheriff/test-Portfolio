import logo from './logo.svg';
import './App.css';
import Header from './Header.js';
import Work from './Work.js';
import Footer from './footer.js';
import Home from './Home.js';
import Education from './Education.js';
import { a, b, c } from './Header.js';
import Pcard from './productcard.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}




function MyApp(){
  return (
    <div className="App">
      <Header />
      <Home/>
      <Work />
      <Footer />

    </div>
  );
}


function Check() {
  const products = [
    { id: 1, title: "Apple iPhone 14", price: "Rs. 1,00,000" },
    { id: 2, title: "Apple iPhone 13", price: "Rs. 70,000" },
    { id: 3, title: "Google Pixel 7", price: "Rs. 50,000" },
    { id: 4, title: "Nokia 1100", price: "Rs. 2,000" },
    { id: 5, title: "Samsung Galaxy S10", price: "Rs. 1,00,000" },
    { id: 6, title: "Sony Xperia S10", price: "Rs. 1,00,000" }
  ];

  return (
    <div className="container">
      <h1>I am products</h1>
      {products.map((product) => (
        <div className="product-card" key={product.id}>
          <Pcard title={product.title} price={product.price} />
        </div>
      ))}
    </div>
  );
}

export default MyApp;
