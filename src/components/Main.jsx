import React from 'react'
import { HeartIcon as HeartOutline } from '@heroicons/react/outline';
import { HeartIcon as HeartSolid } from '@heroicons/react/solid';
import { ScaleIcon as ScaleSolid } from '@heroicons/react/solid';
import { ScaleIcon as ScaleOutline } from '@heroicons/react/outline';


// import footbolka from '../assets/footbolka.png';

export default function Main({ onAddToCart, onToggleFavorite, favorites, scale, onScale }) {
    const products = [
        {
            id: 1,
            title: 'Футболка Oversize',
            description: 'Описание товара',
            image: '/images/footbolka.png',
            price: 1290,
        },
        {
            id: 2,
            title: 'Футболка Oversize',
            description: 'Описание товара',
            image: '/images/footbolka2.png',
            price: 2290,
        },
        {
            id: 3,
            title: 'Футболка Oversize',
            description: 'Описание товара',
            image: '/images/footbolka3.png',
            price: 4990,
        },
        {
            id: 4,
            title: 'Футболка Oversize',
            description: 'Описание товара',
            image: '/images/footbolka4.png',
            price: 4990,
        },
        {
            id: 5,
            title: 'Футболка Oversize',
            description: 'Описание товара',
            image: '/images/footbolka5.png',
            price: 4990,
        },
        {
            id: 6,
            title: 'Футболка Oversize',
            description: 'Описание товара',
            image: '/images/footbolka6.png',
            price: 4990,
        },
    ];
    return (
        <>
            <div className='grid grid-cols-3 gap-10 mt-10 '>
                {products.map((product) => (
                    <div key={product.id} className='shadow rounded-xl p-4 text-left relative bg-white  hover:shadow-lg transition-shadow duration-200 '>

                        <div className='relative'>
                            <img className='w-full' src={product.image} alt={product.title} />

                            <button onClick={() => onToggleFavorite(product.id)} className="absolute top-4 right-4" >
                                {favorites.includes(product.id) ? (
                                    <HeartSolid className='h-7 w-7 text-red-500 scale-110' />
                                ) : (
                                    <HeartOutline className='h-7 w-7 text-gray-400' />
                                )
                                }
                            </button>

                            <button onClick={() => onScale(product.id)} className='absolute top-4 right-14'>
                                {scale.includes(product.id) ? (
                                    <ScaleSolid className="h-7 w-7 text-indigo-400 " />) : (<ScaleOutline className="h-7 w-7 text-gray-950" />
                                )
                                }
                            </button>

                        </div>
                        <h1 className='mt-6'><b>{product.title}</b></h1>
                        <p className='text-gray-500'>{product.description}</p>
                        <p>{product.price} ₽</p>

                        <button onClick={onAddToCart}
                            className='right-5 bottom-5 absolute mt-4 items-end bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition hover:scale-105 hover:-translate-y-1 duration-300'>
                            +</button>



                    </div>
                ))}
            </div>
        </>

    )
}
