import React, { useEffect } from 'react';
import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.jpg';

const Products = () => {

    useEffect(() => {
        window.scrollTo(0, 0, 'smooth');
    })
    

    const products = [{
        id: 1,
        img: img1,
        title: 'SSVG 1',
        description: 'Included Suport Resistance',
        price: '$79'
    },
    {
        id: 2,
        img: img2,
        title: 'SSVG 2',
        description: 'Included Suport Resistance',
        price: '$79'
    },
    {
        id: 3,
        img: img3,
        title: 'SSVG 3',
        description: 'Included Suport Resistance',
        price: '$79'
    },
    {
        id: 2,
        img: img2,
        title: 'SSVG 2',
        description: 'Included Suport Resistance',
        price: '$79'
    },
    {
        id: 3,
        img: img3,
        title: 'SSVG 3',
        description: 'Included Suport Resistance',
        price: '$79'
    }
    ]
    return (

        <section className="products h-[fit-content] pt-24 py-16">
            <div className=" text-white h-full w-full flex justify-center items-center">
                <div className="indicators flex items-center flex-col">
                    <h1 className=' w-[60%] max-w-[60%] left-0 text-left pb-10 text-[32px] font-bold ml-4'>Indicators</h1>
                    <div className="content max-w-[60%] flex-wrap flex gap-10">
                        {products.map((product) => (
                            <div key={product.id} className="card cursor-pointer backdrop-blur-xl  hover:scale-[1.02] rounded-3xl flex flex-col gap-2 backdrop:backdrop-blur-md border p-10">
                                <div className="image w-48 rounded-lg aspect-square">
                                    <img src={product.img} className=' rounded-md w-full h-full aspect-square' alt="" />
                                </div>
                                <h1 className='text-white'>{product.title}</h1>
                                <p className="description">{product.description}</p>
                                <p className="price">{product.price}</p>
                                <div className="btns flex gap-2">
                                    <button className=' hover:bg-blue-400 px-4 border border-blue-300 rounded-lg p-2 '>BUY</button>
                                    <button className=' hover:bg-blue-400 border border-blue-300 ml-2 rounded-lg p-2'>Demo</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Products