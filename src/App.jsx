import React from 'react';
import { useState } from 'react';
import Header from './components/header';
import Footer from './components/footer';
import Main from './components/Main';

function App() {
  const [cartCount, setCartCount] = useState(0);
  const [favorites, setFavorites] = useState([]);
  const [scale, setScale] = useState([]);

  const [products, setProducts] = React.useState([
    {
      id: 1,
      title: 'Футболка Oversize',
      description: 'Описание товара',
      image: '/images/footbolka.png',
      price: 1290,
      cart: 0
    },
    {
      id: 2,
      title: 'Футболка Oversize',
      description: 'Описание товара',
      image: '/images/footbolka2.png',
      price: 2290,
      cart: 0

    },
    {
      id: 3,
      title: 'Футболка Oversize',
      description: 'Описание товара',
      image: '/images/footbolka3.png',
      price: 4990,
      cart: 0

    },
    {
      id: 4,
      title: 'Футболка Oversize',
      description: 'Описание товара',
      image: '/images/footbolka4.png',
      price: 4990,
      cart: 0

    },
    {
      id: 5,
      title: 'Футболка Oversize',
      description: 'Описание товара',
      image: '/images/footbolka5.png',
      price: 4990,
      cart: 0

    },
    {
      id: 6,
      title: 'Футболка Oversize',
      description: 'Описание товара',
      image: '/images/footbolka6.png',
      price: 4990,
      cart: 0

    },
  ])

  const onIncrement = (productId) => {
    setProducts(prevProducts =>
      prevProducts.map(p =>
        p.id === productId ? { ...p, cart: p.cart + 1 } : p
      )
    );
    setCartCount(prev => prev + 1);
  };


  const onDecrement = (productId) => {
    setProducts(prevProducts => {
      const updatedProducts = prevProducts.map(p => {
        if (p.id === productId) {
          return { ...p, cart: p.cart > 0 ? p.cart - 1 : 0 };
        }
        return p;
      });

      const newCartCount = updatedProducts.reduce((sum, p) => sum + p.cart, 0);
      setCartCount(newCartCount);

      return updatedProducts;
    });
  };


  const onAddToCart = (product) => {
    setProducts(prev =>
      prev.map(p =>
        p.id === product.id && p.cart === 0
          ? { ...p, cart: 1 }
          : p
      )
    );
    setCartCount(prev => prev + 1);
  };


  return (

    <>
      <div className='bg-white min-h-screen fontAll w-[1280px] my-8 mx-auto'>
        <Header cartCount={cartCount} favoriteCount={favorites.length} onScale={scale.length} />
        <Main
          onIncrement={onIncrement}
          onDecrement={onDecrement}
          onAddToCart={onAddToCart}
          products={products}
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
