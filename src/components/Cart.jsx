const Cart = ({cart ,emptyCart}) => {
    if(cart.length === 0) return;

  return (
    <div className='border ml-auto w-72 p-4  mt-2 rounded-lg shadow-lg'>
        <h2 className='text-2xl font-semibold mb-4'>Səbət</h2>
        <ul>
            {cart.map((item)=>{
                <li className='mt-2 flex justify-between '>
                <span>{item.name}loigubkj</span>
                <span>{item.price} manat</span>
                </li>})}
        </ul>
        <hr className='my-4' />
        <p className='font-semibold text-xl'>Ümumi: 100 manat</p>
        <button onClick={()=> emptyCart()} className='bg-red-500 py-2 px-4 rounded w-full text-white hover:bg-red-600 transition-all mt-4'>Səbəti təmizlə</button>
    </div>
  )
}

export default Cart