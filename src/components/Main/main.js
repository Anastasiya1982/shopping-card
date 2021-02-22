import React from 'react';
import s from './style.module.css';
import data from '../../data';
import Products from "./Products/products";

class Main extends React.Component{
    constructor() {
        super();
        this.state={
            products:data.products,
            size:"",
            sort:""
        }
    }
    render() {
        return (
            <>
                <main>
                    <div className={s.content}>
                        <div className={s.main}>
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
