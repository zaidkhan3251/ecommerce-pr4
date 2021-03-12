import React from 'react'
import './Checkout.css'
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';
import HomeIcon from '@material-ui/icons/Home';
import Subtotal from './Subtotal'
import { Link } from 'react-router-dom';
function Checkout() {
    const [{basket,user}] = useStateValue();
    return (
        <div className="checkout">
            <div className="checkout__left">
                
                
                <div>
                    <h3>Hello {user?`${user.email}`:"Guest. Please Sign In For Checkout"}</h3>
                    <Link to="/"><HomeIcon/> Continue Shopping</Link>
                    <h2 className="checkout__title">Your shopping basket</h2>
                    

                    {basket.map(item=>(
                        <CheckoutProduct

                            id= {item.id}
                            desc={item.desc}
                            title= {item.title}
                            image= {item.image}
                            price= {item.price}
                            rating= {item.rating}
                        />
                    ))}
                </div>
            </div>
            <div className="checkout__right">
                <Subtotal/>
            </div>
        </div>
    )
}

export default Checkout
