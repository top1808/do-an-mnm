import React from 'react'
import ProductCard from '../components/ProductCard'

const Home = () => {
  return (
    <div className='grid grid-cols-4 gap-12'>
        {Array.from(new Array(20)).map((item, i) => (
            <ProductCard key={i} index={i} />
        ))}
    </div>
  )
}

export default Home