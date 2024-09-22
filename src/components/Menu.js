import restaurantfood from'../restauranfood.jpg'
import salad from '../greek salad.jpg'
import dessert from '../lemon dessert.jpg'
import restaurant from '../restaurant.jpg'
import testimony1 from '../disheswife.jpg'
import testimony2 from '../download.jpeg'
import testimony3 from '../images.jpeg'
function Menu (){
    return (
        <>
        <article className='specialmessage'>
        <h4>This spécials week dishes</h4>
        <button>Online Menu</button>
        </article>
        <br/>
        <div className="dishes">
         <article>
         <img src={salad}  height="100" width="300" alt="restaurant"/>
         <div className='price'>
         <h5>Greek Salad </h5>
         <p>12$ </p>
         </div>
            <p> le produit 1 permet de faire la distintion du blablabla et du blobloblo
              le produit 1 permet de faire la distintion du blablabla et du blobloblo
              le produit 1 permet de faire la distintion du blablabla et du blobloblo
            </p>
             <button><a></a>Order Delivery</button>
         </article>

        <article>
          <img src={dessert} alt="restaurant" height="100" width="300"/>
          <div className='price'>
         <h5>Greek Salad </h5>
         <p>12$ </p>
         </div>
          <p> le produit 1 permet de faire la distintion du blablabla et du blobloblo
            le produit 1 permet de faire la distintion du blablabla et du blobloblo
            le produit 1 permet de faire la distintion du blablabla et du blobloblo
          </p>
          <button><a></a>Order Delivery</button>
       </article>
       <article>
        <img src={restaurantfood} alt="restaurant" height="100" width="300"/>
        <div className='price'>
         <h5>Greek Salad </h5>
         <p>12$ </p>
         </div>
         <p> le produit 1 permet de faire la distintion du blablabla et du blobloblo
              le produit 1 permet de faire la distintion du blablabla et du blobloblo
              le produit 1 permet de faire la distintion du blablabla et du blobloblo
            </p>
        <button>Order Delivery</button>
      </article>
    </div>
    </>
    )
}
export default Menu