import React, {Component} from 'react';
import s from './style.module.css';
import formatCurrency from "../../utils";

export default class Cart extends Component{
    render() {

        const {cartItems,removeFromCart} = this.props;
        return (
            <>
                <div>
                    {cartItems.length === 0 ? <div className={s.cart + ' ' + s.cartHead}> The CARD is empty </div>
                        : <div className={s.cart + ' ' + s.cartHead}>
                            You have {cartItems.length} items in the Cart {''}
                        </div>

                    }
                </div>
                <div>
                    <div className={s.cart}>
                        <ul className={s.cartItems}>
                            {cartItems.map(item => (
                                <li key={item._id}>
                                    <div>
                                        <img src={item.image} alt={item.title}/>
                                    </div>
                                    <div>
                                    <div>{item.title}</div>
                                        <div className={s.right}>
                                            {formatCurrency(item.price)} x {item.count} {" "}
                                        <button className={s.button} onClick={() => {
                                            removeFromCart(item)
                                        }}>Remove
                                        </button>
                                        </div>
                                    </div>

                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                {
                    cartItems.length !==0 &&   <div className={s.cart}>
                    <div className={s.total}>
                        <div>
                            Total:{" "}
                            {formatCurrency(
                                    cartItems.reduce((a, c) => a + c.price * c.count, 0))
                            }
                        </div>
                        <button className={s.button+ ' ' + s.primary}>Proceed</button>
                    </div>
                </div>
                }
            </>
        )

    }

}
