import Product from './Product';

const UpdateProduct = async({params}) => {
    const id = await params.id;
  return (
    <Product id={id} />
  )
}

export default UpdateProduct
