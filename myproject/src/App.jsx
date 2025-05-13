import './App.css'
import pampeo from '@/assets/Pompeo.png'
import img1 from '@/assets/img1.png'
import fr1 from '@/assets/fr1.png'
import fr2 from '@/assets/fr2.png'
import fr3 from '@/assets/fr3.png'
import s1 from '@/assets/s1.png'
import s2 from '@/assets/s2.png'
import s3 from '@/assets/s3.png'
import s4 from '@/assets/s4.png'
import s5 from '@/assets/s5.png'
import s6 from '@/assets/s6.png'

import kuza1 from '@/assets/kuza1.png'
import kuza2 from '@/assets/kuza2.png'
import tarelkaho from '@/assets/tarelkaho.png'
import telegram from '@/assets/telegram.png'
import Button from './components/buttons/button'
import { Article1 } from './components/buttons/article1/article'
import { ImgAside } from './components/buttons/sectionimageandaside/sectionimageanaside'
import { Article2 } from './components/buttons/article2/article2'
export default function App(){
  return <>

<nav>
<img src={pampeo} alt="" />
<ul>
  <li className='home'>Home</li>
  <li>About</li>
  <li>Shop</li>
  <li>Contact</li>
  <div className='cardButton'>
      <li>Cart</li>
  <button>🛒</button>
  </div>
</ul>
</nav>
<section className='section_1'>
  <aside>
    <h1>Unique Porcelain Stone Collection</h1>
    <p>Unique & modern pottery made by our master in porcelain & stones</p>
<Button>
  Shop Collection
</Button>
  </aside>
 
  <img src={img1} alt="" />
 
</section>

<section className='section_2'>
<div className='ProductCategories'>
  <p>Product Categories</p>
  <h1>Porcelain  Pottery</h1>
</div>
<div className='fren'>
<img src={fr1} alt="" />
<img src={fr2} alt="" />
<img src={fr3} alt="" />
</div>
<div className='article111'>
<Article1>
<h1>Hand Grafted Pottery since 1990</h1>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus posuere.</p>
</Article1>
  <Article1>
<h1>We Provide Premiu</h1>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus posuere..</p>
</Article1>
</div>

</section>
<section className='section_3'>
  <ImgAside>
  <img className='kuza1' src={kuza1} alt="" />
  <aside className='aside_3'>
<h1>Gold & Black Pottery</h1>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore dolore aua. Ut enim ad minim veniam, quis nostrud exercitationulco laboris nisi ut aliquip ex ea commodo consequatuisaute.</p>
<h3>View Details</h3>
  </aside>
  </ImgAside>
</section>
<section className='section_3'>
  <ImgAside>
   <aside className='aside_3'>
<h1>Orange Ceramic</h1>
<p>Pri cu dico labores officiis, odio principes complectitur ad sea. Sea id doctus forensibus, nec lorem vocent aliquam eu. Aliquid definitiones id cum, ad meliore perpetua referrentur sed. Quas suscipit ad mea verear vivendo tincidunt.</p>
<h3>View Details</h3>
  </aside>
  <img className='kuza1' src={kuza2} alt="" />

  </ImgAside>
</section>
<section className='section_4'>

<div className='ourProperty'> 
  <p>Our online store</p>
  <h1>Pottery Collection</h1>
</div>
<div className='articl22'>
<Article2>
<img src={s1} alt="" />
<p>Decor Plate</p>
<h2>$ 65.00 USD</h2>

</Article2>
<Article2>
<img src={s2} alt="" />
<p>Decor Plate</p>
<h2>$ 65.00 USD</h2>

</Article2>
<Article2>
<img src={s3} alt="" />
<p>Decor Plate</p>
<h2>$ 65.00 USD</h2>

</Article2>
<Article2>
<img src={s4} alt="" />
<p>Decor Plate</p>
<h2>$ 65.00 USD</h2>

</Article2>
<Article2>
<img src={s5} alt="" />
<p>Decor Plate</p>
<h2>$ 65.00 USD</h2>

</Article2>
<Article2>
<img src={s6} alt="" />
<p>Decor Plate</p>
<h2>$ 65.00 USD</h2>

</Article2>

</div>
<div className='butt11'>

  <Button>
    Veiw All Products
  </Button>
</div>
</section>


<section className='section_5'>
  <div>
    <h1>Unique Porcelain Stone Collection</h1>
    <p>Unique & modern pottery made by our master in porcelain & stones</p>
<Button>
  Shop Collection
</Button>
  </div>
</section>

<section className='section_6'>


  <img src={telegram} alt="" />

  <h1>Latest news New updates</h1>
  <div className='butinp'>    

    <input type="text" placeholder='Enter your Email' />
    <button className='SUBSCRIBE'>SUBSCRIBE</button>
  </div>
</section>

<footer>

<ul>
  <li><img src={pampeo} alt="" /></li>
  <li>Category</li>
  <li>About</li>
  <li>Decpition</li>
</ul>
<ul>
  <li>NOrekat</li>
  <li>Category</li>
  <li>About</li>
  <li>Decpition</li>
</ul>
<ul>
  <li>FeedBack</li>
  <li>Category</li>
  <li>About</li>
  <li>Decpition</li>
</ul>
<ul>
  <li>Contact</li>
  <li>Category</li>
  <li>About</li>
  <li>Decpition</li>
</ul>


</footer>
  </>
}