import { Carousel, CarouselProvider } from 'nuka-carousel';
import logo from './logo.svg';
import './App.css';
import Header from './Header.js';
import Work from './Work.js';
import Footer from './footer.js';
import Home from './Home.js';
import Education from './Education.js';
import { a, b, c } from './Header.js';
import Pcard from './productcard.js';
import { useEffect } from 'react';


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


// const testCompponent = ({text,typingSpeed=50,deletingSpeed=100}) => {

//     const [displayedText,setDisplayedText] = useState("");
//     const [isDeleting,setIsDeleting] = useState(false);
//     const [index,setIndex] = useState(0);

//     useEffect(() => {
//       const handleTyping = () => {
//         if(!isDeleting){
//           if(displayedText.length < text[index].length){
//             setDisplayedText()
            
//           }
//         }
//       };

//       const timeout = setTimeout(
//         handleTyping,
//         isDeleting ? deletingSpeed : typingSpeed
//       );
//     })

//     return (
//       <div className='typing'>
//         text
//         <span className='pipe-symbol'>
//         |
//         </span>
//       </div>
//     );
// }


const GenericTile = ({heading,images,content}) => {

  return (
    <div className="generic-tile">
      
      <h1>{heading}</h1> 
      
      <ul className="image-list">
        {images.map((image,index) => (
          <li key={index}>
            <img className="image" src={image.src} alt={image.alt || "The image will be displayed here"} />
          </li>
        ))}
      </ul>

      <ul className='Content'>
        {content.map((text,index) => (
          <li key={index}>
            <p>{text}</p>
          </li>
        ))}
      </ul>


    </div>
  );
}

// function temp(){

//   const [prog,setProg] = useState(0);
//   return (
//     <div>
//       {    useEffect(setTimeout() => ()
  
//     ))
//   }
//     </div>

//   );
// }


const Test = () => {
  
  const tileData1 = {
    heading: 'Data Analytics & ML',

    images: [
      { src: 'https://ajitverma15.github.io/Interactive-Portfolio/Image/numpy-ar21.svg', alt: 'First Image' },
      { src: 'https://ajitverma15.github.io/Interactive-Portfolio/Image/kindpng_5747046.png', alt: 'Second Image' },
      { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFCHi18uXFtRb1_q7pQIVxYlwqvhVzCzZ4PQ&s', alt: 'Third Image' }
    ],

    content: [
      '💥 Developing Models that clean, tranform and analyse raw data to discover useful information, in order to make conclusions about the data.',
      'This is the second content'
    ]
  };
  
  return (
    <div className="tileBox">
      <GenericTile heading={tileData1.heading} images={tileData1.images} content={tileData1.content}/>
    </div>
  );
}


// const Carousel = () => {
//   return (
//     <Carousel>
//   <div>Slide 1</div>
//   <img src="/img/image3.png" />
//   <MyCustomComponent />
//   </Carousel>
//   );
// }

// function CarouselImage(image) {
//   return (
//     <div className="min-w-[400px]">
//       <Image src={image} alt="image" />
//       <div className="">Title</div>
//     </div>
//   );
// }



const carousel = () => {
  return (
    <Carousel autoplay showDots>
      <div>Slide 1</div>
      <div>Slide 2</div>
      <div>Slide 3</div>
    </Carousel>
  );
};

export default MyApp;
