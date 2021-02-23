import React,{ Component} from 'react';
import s from './style.module.css';
import formatCurrency from "../../../utils";


export default class Products extends Component{
    render() {
        return (
            <div>
                <ul className={s.products}>
                    {this.props.products.map((product)=>(
                        <li key={product.id}>
                            <div className={s.product}>
                                <a href={'#' + product._id}>
                                    <img src={product.image} alt={product.title}/>
                                    <p>
                                        {product.title}
                                    </p>
                                </a>
                                <div className={s.productPrice}>
                                    <div>{formatCurrency(product.price)}</div>
                                <button className={s.button+ ' ' + s.primary}
                                         onClick={()=>this.props.addToCart(product)}
                                >Add to Cart</button>
                                </div>
                                </div>
                        </li>
                    ))
                    }
                </ul>
            </div>
        );
    }

}
