import React from 'react';

import banner from '../assets/banner.png';

export default function Header({ cartCount, favoriteCount, onScale }) {
    return (
        <header>
            <div>
                <nav className='flex justify-between items-center'>
                    <div className='flex gap-4'>
                        <button href="" className='relative inline-block text-gray-800 font-medium after:absolute after:left-1/2 after:bottom-0 after:h-[2px] after:w-0 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full hover:after:left-0'>
                            Главная
                        </button>
                        <button type="button" class="relative inline-block text-gray-800 font-medium after:bg-blue-600 after:h-[2px] after:w-0 after:absolute after:left-1/2 after:bottom-0 after:transition-all duration-300 hover:after:w-full hover:after:left-0 ">
                            Контакты
                        </button>

                        <button type="button" class="relative inline-block text-gray-800 font-medium after:bg-blue-600 after:h-[2px] after:w-0 after:absolute after:left-1/2 after:bottom-0 hover:after:w-full after:transition-all duration-300 hover:after:left-0 ">
                            Заказы
                        </button>
                    </div>
                    <div className="relative w-full max-w-xl">
                        <input
                            type="text"
                            placeholder="Поиск товаров..."
                            className="w-full pl-10 pr-4 py-2.5 border border-blue-300 rounded-3xl shadow-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition duration-300 "
                        />
                        <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">

                            <svg xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                class="size-6 w-5 h-9 ">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                            </svg>

                        </div>

                    </div>

                    <div className='flex flex-row items-center gap-6'>
                        <div className='flex flex-col items-center text-gray-500 hover:text-black font-semibold cursor-pointer'>

                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                                <path d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
                            </svg>

                            <div className='absolute'>
                                {cartCount > 0 && (
                                    <span className="absolute -top-2 -right-6 bg-indigo-600 text-white text-xs rounded-full px-1.5 py-[1.5px] border-2 border-white">
                                        {cartCount}
                                    </span>

                                )}
                            </div>
                            <p className='mt-1 block'>Корзина</p>

                        </div>
                        <div className=' relative flex flex-col items-center text-gray-500 hover:text-black font-semibold cursor-pointer'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                                <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
                            </svg>

                            {favoriteCount > 0 && (
                                <span className='absolute -top-2 right-5 bg-indigo-600 text-white text-xs rounded-full px-1.5 py-[1.5px] border-[1.5px] border-white '>
                                    {favoriteCount}
                                </span>
                            )}



                            <p className='mt-1 block'>Избранное</p>


                        </div>

                        <div className='relative flex flex-col items-center text-gray-500 hover:text-black font-semibold cursor-pointer'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                                <path d="M18.75 12.75h1.5a.75.75 0 0 0 0-1.5h-1.5a.75.75 0 0 0 0 1.5ZM12 6a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 12 6ZM12 18a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 12 18ZM3.75 6.75h1.5a.75.75 0 1 0 0-1.5h-1.5a.75.75 0 0 0 0 1.5ZM5.25 18.75h-1.5a.75.75 0 0 1 0-1.5h1.5a.75.75 0 0 1 0 1.5ZM3 12a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 3 12ZM9 3.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM12.75 12a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0ZM9 15.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z" />
                            </svg>
                            {onScale > 0 && (
                                <span className='absolute -top-2 right-5 bg-indigo-600 text-white text-xs rounded-full px-1.5 py-[1.5px] border-[1.5px] border-white '>
                                    {onScale}
                                </span>


                            )}
                            <p className='mt-1 block'>Сравнить</p>




                        </div>

                        <div className='flex flex-col items-center text-gray-500 hover:text-blue-700 font-semibold cursor-pointer'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6 ">
                                <path fill-rule="evenodd" d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" clip-rule="evenodd" />
                            </svg>

                            <p className='mt-1 block '>Войти</p>

                        </div>

                    </div>
                </nav>

                <h1 className='mt-4 font-semibold text-4xl text-gray-600 mb-10'>Интернет-магазин фирменной одежды</h1>
                <div className=' relative w-full h-[400px] bg-cover bg-center items-center justify-center bg-no-repeat rounded-lg bg-blend-multiply bg-gray-300 ' style={{ backgroundImage: `url(${banner})` }}>
                    <div className='absolute left-20 top-5'>
                        <p className=' mt-20 left-20 font-semibold text-[39px] text-white w-1/2'>Новая коллекция 2025 Футболки, худи и многое другое</p>
                        <button className='bg-white text-black p-3 hover:bg-blue-600 hover:text-white mt-2 transition-all duration-200 ease-in-out rounded-sm hover:scale-105 '>Купить сейчас</button>
                    </div>
                </div>




            </div>
            <div></div>
        </header>
    )
}
