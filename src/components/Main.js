import restaurantfood from'../restauranfood.jpg'
import salad from '../greek salad.jpg'
import dessert from '../lemon dessert.jpg'
import restaurant from '../restaurant.jpg'
import testimony1 from '../disheswife.jpg'
import testimony2 from '../download.jpeg'
import testimony3 from '../images.jpeg'
import Menu from './Menu'
function Main() {
    return (
        <main className="main">
          <article className="banner">
          <div className='present'>  
          <h3>LITTLE LEMON</h3>
          <p>Cotonou</p>
          <p>This website allows to reserve dishes </p>
          <h5> Reservation  Table</h5>
          </div>
          <img src={restaurant} height="150" width="800" className='img'/>
          </article>
          <br/>
          < Menu/>
    <br/>
    <h1>Testimonials</h1>
    <section className='testimonials'>
        <article>
        <img src={testimony1}  height="80" width="150" alt="restaurant"/>
        <p> YATAKPO Henoc</p>
        <p> <a>View more</a></p>  
        </article>
        <article>
        <img src={testimony2}  height="80" width="150" alt="restaurant"/>  
        <p> YATAKPO Henoc</p>
        <p> <a>View more</a></p> 
        </article>
        <article>
        <img src={testimony3}  height="80" width="150" alt="restaurant"/>
        <p> YATAKPO Henoc</p>
        <p> <a>View more</a></p> 
        </article>
        <article>
        <img src={testimony1}  height="80" width="150" alt="restaurant"/>
        <p> YATAKPO Henoc</p>
        <p> <a>View more</a></p> </article>
    </section>

    </main>
    )
  }
export default Main;
