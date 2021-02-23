import React from 'react';
import s from './style.module.css';
import data from '../../data';
import Products from "./Products/products";
import Filter from "../Filter/filter";

class Main extends React.Component{
    constructor() {
        super();
        this.state={
            products:data.products,
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
                            <Products products={this.state.products}/>
                        </div>
                        <div className={s.sidebar}>CardItems</div>
                    </div>
                </main>

            </>
        )
    }
}
export default Main;
