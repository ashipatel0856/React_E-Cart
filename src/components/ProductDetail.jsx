import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { items } from './Data'
import Product from './Product'

const ProductDetail = () => {

  const {id} = useParams()
  const [product ,setProduct] = useState({})
  const [relatedProducts, setRelatedProducts] = useState([])

  useEffect(() => {
    const filterProduct = items.filter((product) => product.id == id)
    // console.log(filterProduct)
    setProduct(filterProduct[0])

    const relatedProducts = items.filter((product) => product.category === product.category)
    // console.log(relatedProducts)
    setRelatedProducts[relatedProducts]
  },[id, product.category]);

  return (
        <>
        <div className="container con">
          <div className="img">
            <img src={product.imgSrc} alt="" />
          </div>


          <div className='text-center'>
             <h1 className="card-title">{product.title}</h1>
              <p className="card-text">{product.description}</p>
              <button className='btn btn-primary mx-3'>{product.price} Rs.</button>
              <button className='btn btn-warning'>Add To Cart</button>
          </div>

        </div>
        <h1 className='text-center'>Related Products</h1>
        <Product items={relatedProducts} />
        </>
  )
}

export default ProductDetail