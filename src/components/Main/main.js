import React from 'react';
import s from './style.module.css';
import data from '../../data';
import Products from "./Products/products";
import Filter from "../Filter/filter";
import Cart from "../Cart/cart";

class Main extends React.Component{
    constructor() {
        super();
        this.state={
            products:data.products,
            cartItems:localStorage.getItem('cartItems')? JSON.parse(localStorage.getItem("cartItems")) :[],
            size:" ",
            sort:" "
        };
    }
//функция сортировки товара по цене
    sortProduct = (event) => {
        console.log(event.target.value);
        let sort = event.target.value;
        this.setState((state) => ({
            sort: sort,
            products: this.state.products
                .slice()
                .sort((a, b) => (
                    sort === "lowest" ?
                        ((a.price > b.price) ? 1 : -1) :
                        sort === "highest" ?
                            ((a.price < b.price) ? 1 : -1) :
                            (a._id > b._id) ? 1 : -1
                ))
        }))
    }

// сортировка по размеру
    filterProduct = (event) => {
        console.log(event.target.value);
        if (event.target.value === " ") {
            this.setState({
                size: event.target.value,
                products: data.products
            })
        } else {
            this.setState({
                size: event.target.value,
                products: data.products.filter((product) => product.availableSizes.indexOf(event.target.value) >= 0)
            })
        }

}
   removeFromCart=(product)=>{
       console.log('remove from cart');
       console.log(product);
       const cartItems=this.state.cartItems.slice();
       this.setState({
           cartItems:cartItems.filter(item=>item._id !==product._id)
       });
       localStorage.setItem("cartItems", JSON.stringify(cartItems.filter(item=>item._id !==product._id)));
    }

   addToCart=(product)=>{
       console.log('Product is added');
       const cartItems=this.state.cartItems;
       let alreadyInCart=false
       cartItems.forEach((item)=>{
           if(item._id===product._id){
               item.count++;
               alreadyInCart=true;
           }
       });
       if(!alreadyInCart){
           cartItems.push({...product,count:1})
       }
       this.setState({
           cartItems:cartItems
       });
       localStorage.setItem("cartItems",JSON.stringify(cartItems));
   }
 createOrder=(order)=>{
        alert("Need to save an order");
     console.log(order)
 }
    render() {
        return (
            <>
                <main>
                    <div className={s.content}>
                        <div className={s.main}>
                            <Filter count={this.state.products.length}
                                     size={this.state.size}
                                    sort={this.state.sort}
                                    filterProduct={this.filterProduct}
                                    sortProduct={this.sortProduct}
                            />
                            <Products products={this.state.products}
                                      addToCart={this.addToCart}
                            />
                        </div>
                        <div className={s.sidebar}>
                            <Cart cartItems={this.state.cartItems}
                            removeFromCart={this.removeFromCart}
                            createOrder={this.createOrder}/>
                        </div>
                    </div>
                </main>

            </>
        )
    }
}
export default Main;
