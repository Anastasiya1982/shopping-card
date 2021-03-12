import React,{ Component} from 'react';
import s from './style.module.css';
import formatCurrency from "../../../utils";
import Fade from 'react-reveal/Fade';
import Modal from 'react-modal'
import Zoom from "react-reveal/Zoom";
import {fetchProducts} from "../../../actions/productActions";
import {connect} from "react-redux";


 class Products extends Component{
    constructor(props) {
        super(props);
        this.state={
            product:null
        }

    }

    componentDidMount() {
        this.props.fetchProducts();
    }

     openModal=(product)=>{
        this.setState({
            product:product
        })
    };

    closeModal=()=>{
        this.setState({
            product:null
        })
    }
    render() {

        return (
            <div>
                <Fade bottom cascade>
                    {!this.props.products ?( <div> LOADING...</div>)
                        :(<ul className={s.products}>
                            {this.props.products.map((product) => (
                                <li key={product.id}>
                                    <div className={s.product}>
                                        <a href={'#' + product._id} onClick={() => this.openModal(product)}>
                                            <img src={product.image} alt={product.title}/>
                                            <p>
                                                {product.title}
                                            </p>
                                        </a>
                                        <div className={s.productPrice}>
                                            <div>{formatCurrency(product.price)}</div>
                                            <button className={s.button + ' ' + s.primary}
                                                    onClick={() => this.props.addToCart(product)}
                                            >Add to Cart
                                            </button>
                                        </div>
                                    </div>
                                </li>
                            ))
                            }
                        </ul>)
                    }
                </Fade>
                {this.state.product && <Modal isOpen={true} onRequestClose={this.closeModal}>
                    <Zoom>
                       <button  className={s.closeModal} onClick={this.closeModal}> X </button>
                   <div className={s.productDetails}>
                       <img src={this.state.product.image} alt={this.state.product.title}/>
                   <div className={s.productDescription}>
                       <p>
                           <strong>{this.state.product.title}</strong>
                       </p>
                       <p>{this.state.product.description}</p>
                       <p>
                           Availiable Sizez: {' '}
                           {this.state.product.availableSizes.map(item=>(
                               <span>{' '}
                                   <button className={s.button}>{item}</button>
                               </span>

                           ))}
                       </p>

                       <div className={s.productPrice}>
                       <div>{formatCurrency(this.state.product.price)}</div>
                           <button className={s.button + ' ' +s.primary}
                                    onClick={()=>{
                                        this.props.addToCart(this.state.product);
                                        this.closeModal();
                                    }}
                           >Add to Cart </button>
                       </div>
                   </div>

                   </div>
                    </Zoom>
                </Modal>}
            </div>
        );
    }

}
export default connect((state)=>({products: state.products.items}),{
    fetchProducts
})(Products);
