// import logo from './logo.svg';
import './App.css'

import mobileImage from './images/image-product-mobile.jpg'
import desktopImage from './images/image-product-desktop.jpg'
import CartSVG from './cartSVG'

function App() {
  console.log(window.innerWidth)

  return (
    <div className="min-h-screen flex justify-center items-center font-montse">
      <article className="flex flex-col sm:flex-row w-11/12 max-w-xl bg-white rounded-xl overflow-hidden">
        <div className="max-h-[30%] sm:max-h-full sm:w-1/2 object-contain">
          {/* <img
            src={window.innerWidth < 640 ? mobileImage : desktopImage}
            alt="Gabrielle Essence Eau De Parfum"
            className="object-contain"
          /> */}
          <picture className="object-contain">
            <source media="(min-width: 640px)" srcSet={desktopImage}></source>
            <img src={mobileImage} alt="Gabrielle Essence Eau De Parfum" />
          </picture>
        </div>
        <div className="p-6 text-sm sm:w-1/2">
          <span className="inline-block mb-3 uppercase text-darkGrayishBlue tracking-widest2">
            perfume
          </span>
          <h4 className="mb-5 text-3xl font-fraunces text-veryDarkBlue">
            Gabrielle Essence Eau De Parfum
          </h4>
          <p className="mb-7 text-darkGrayishBlue leading-6">
            A floral, solar and voluptuous interpretation composed by Olivier
            Polge, Perfumer-Creator for the House of CHANEL.
          </p>
          <div className="flex items-center gap-4 mb-4 sm:mb-6">
            <span className="font-fraunces text-4xl sm:text-3xl text-darkCyan">
              $149.99
            </span>
            <span className="text-darkGrayishBlue line-through">$169.99</span>
          </div>
          <button className="flex justify-center items-center gap-3 w-full m-0 py-4 bg-darkCyan hover:bg-darkCyanHover rounded-xl font-bold text-white transition-colors">
            <CartSVG />
            Add to Cart
          </button>
        </div>
      </article>
    </div>
  )
}

export default App
