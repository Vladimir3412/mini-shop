import React from 'react';
import { useState } from 'react';
import Header from './components/header';
import Footer from './components/footer';
import Main from './components/Main';

function App() {
  const [cartCount, setCartCount] = useState(0);
  const [favorites, setFavorites] = useState([]);
  const [scale, setScale] = useState([]);


  // const [count, setCount] = useState(0)

  return (

    <>
      <div className='bg-white min-h-screen fontAll w-[1280px] my-8 mx-auto'>
        <Header cartCount={cartCount} favoriteCount={favorites.length} onScale={scale.length} />
        <Main
          onAddToCart={() => setCartCount(cartCount + 1)}

          onToggleFavorite={(productId) => {
            setFavorites((prev) => prev.includes(productId)
              ? prev.filter((id) => id !== productId)
              : [...prev, productId]
            )
          }}
          favorites={favorites}

          onScale={(productId) => {
            setScale((prev) => prev.includes(productId)
              ? prev.filter((id) => id !== productId)
              : [...prev, productId]
            )
          }}
          scale={scale}
        />
        <Footer />

      </div>
    </>
  )
}

export default App;
