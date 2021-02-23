import React, {Component} from 'react';
import s from './style.module.css';

export default class Filter extends Component{
    render() {
        return (
            <div className={s.filter}>
                <div className={s.filterResult}>{this.props.count} Products</div>
                <div className={s.filterSort}>{" "} Order
                    <select value={this.props.sort} onChange={this.props.sortProduct}>
                        <option>Latest</option>
                        <option value="lowest">lowest</option>
                        <option value="highest">highest</option>
                    </select>
                </div>
                <div className={s.filterSize}>
                    Filter
                    <select value={this.props.size} onChange={this.props.filterProduct}>
                        <option value=" ">All</option>
                        <option value="XS ">XS</option>
                        <option value="S">S</option>
                        <option value="M">M</option>
                        <option value="L">L</option>
                        <option value="XL">Xl</option>
                        <option value="XXL">XXL</option>
                        <option value="XXXL">XXXL</option>
                    </select>
                </div>
            </div>
        )
    }

}

