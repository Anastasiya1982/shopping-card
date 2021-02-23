import React, {Component} from 'react';
import s from './style.module.css';
import formatCurrency from "../../utils";

export default class Cart extends Component{
    constructor(props) {
        super(props);
        this.state={
            name:"",
            address:"",
            email:"",
            showCheckout:false
        }
    }
    onHandleClick=()=>{
        console.log('hadle click')
       this.setState({
           showCheckout:true
       })
    }

    handleInput=(e)=>{
      this.setState({
          [e.currentTarget.name]:e.currentTarget.value
      })
    }
    createOrder=(e)=>{
        e.preventDefault();

        const order={
            name:this.state.name,
            email:this.state.email,
            address:this.state.address,
            cartItems:this.props.cartItems
        };
        this.props.createOrder(order);

    }

    render() {

        const {cartItems,removeFromCart} = this.props;
        return (
            <div>
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
                    cartItems.length !== 0 && (
                        <>
                            <div className={s.cart}>
                                <div className={s.total}>
                                    <div>
                                        Total:{" "}
                                        {formatCurrency(
                                            cartItems.reduce((a, c) => a + c.price * c.count, 0))
                                        }
                                    </div>
                                    <button className={s.button + ' ' + s.primary}
                                            onClick={() => this.onHandleClick()}
                                    >Proceed
                                    </button>
                                </div>
                            </div>
                            {this.state.showCheckout && (
                                <div className={s.cart}>
                                    <form onSubmit={this.createOrder}>
                                        <ul className={s.formContainer}>
                                            <li>
                                                <lable>Email</lable>
                                                <input  name="e-mail" type='email' required onChange={this.handleInput} />
                                            </li>
                                            <li>
                                                <lable>Name</lable>
                                                <input name="name" type='text' required onChange={this.handleInput} />
                                            </li>
                                            <li>
                                                <lable>Adress</lable>
                                                <input  name="adress" type='text' required onChange={this.handleInput} />
                                            </li>
                                            <li>
                                            <button type="submit" className={s.button + ' ' + s.primary}>Checkout</button>
                                            </li>
                                        </ul>
                                    </form>

                                </div>
                            )}
                        </>
                    )
                }
            </div>
        )

    }

}
