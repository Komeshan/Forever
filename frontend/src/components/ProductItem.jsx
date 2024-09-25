import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext';
import { useNavigate } from 'react-router-dom';

const ProductItem = ({id, image, name, price}) => {

    const { currency } = useContext(ShopContext);
    const navigate = useNavigate();

  return (
    <div className='text-gray-700 cursor-pointer' onClick={() => {navigate(`/product/${id}`); scrollTo(0,0)}}>
        <div className='overflow-hidden'>
            <img className='hover:scale-110 transition ease-in-out' src={image[0]} alt="" />
        </div>
        <p className='pt-3 pb-1 text-sm'>{name}</p>
        <p className='text-sm font-medium'>{currency}{price}</p>
    </div>
  )
}

export default ProductItem