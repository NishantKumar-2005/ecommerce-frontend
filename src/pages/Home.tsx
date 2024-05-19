import { Link } from 'react-router-dom'
import ProductCard from "../components/productCards"

const Home = () => {
  const addToCart = () => {}
  return (
    <div className="home">
      <section></section>
       <h1>
        Latest Product
        <Link to="/search" className='findmore'>More</Link>
       </h1>
       <main>
        <ProductCard productId="1" photo="https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcT55uJPqq12tVPzWphJLwHP_Niw8A8b1CVcPSdvX1DIAYWqTNIsEsFt5FfaiQSNPA2aBLvHZUODFIMtvbg" price={1} name="hello" stock={1} handler={addToCart} />
       </main>
    </div>
  )
}

export default Home
