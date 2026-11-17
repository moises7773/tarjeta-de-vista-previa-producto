import "./tipografia-color-App.css"
import imagenPerfumeMobile from './assets/image-product-mobile.jpg'
import imagenPerfumeDesktop from "./assets/image-product-desktop.jpg"
import "./estructura.css"
import carrito from "./assets/icon-cart.svg"

function App (){
return (
<>
<main>
  <article>
    
    <figure>
      <img src={imagenPerfumeMobile} alt="perfume" className="image-mobile" />
      <img src={imagenPerfumeDesktop} alt="perfume" className="image-desktop" />
    </figure>
    
    
    <div className="info-container">
      <header>
        <p className="text-preset-4 grey">PERFUME</p>
        <h1 className="text-preset-1 black">Gabrielle Essence Eau De Parfum</h1>
        <p className="text-preset-3 grey">A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.</p>
      </header>


      <div className="price-container">
        <p className="text-preset-1 green-500">$149.99</p>
        <p className="text-preset-5 grey">
          <del>169.99</del>
        </p>
      </div>
      <button className="text-preset-2 white"><img src={carrito} /> Add to cart</button>
    </div>
  </article>
</main>
</>)
}

export default App
