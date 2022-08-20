import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import styles from './Product.module.css';
import { deleteFavProduct, getFavoriteProduct, getCartProduct, deleteCartProduct } from '../../Redux/Action';

export default function Product({ id, name, price, image }) {
    const dispatch = useDispatch()
    const productFav = useSelector(state => state.productFav)
    const productCart = useSelector(state => state.productCart)

    const handleOnFav = () => {
        const findProduct = productFav.find(e => e.id === id)

        if (findProduct) {
            dispatch(deleteFavProduct(id))
        } else {
            dispatch(getFavoriteProduct(id))
        }
    }

    const handleOnCart = () => {
        const findProduct = productCart.find(e => e.id === id)

        if (findProduct) {
            dispatch(deleteCartProduct(id))
        } else {
            dispatch(getCartProduct(id))
        }
    }

    return (

        <div className={`${styles.container}`}>
            <div>
                <div>
                    <Link to={`/ProductDetail/${id}`}>
                        <img src={image} alt="Imagen no encontrada" className={`img-fluid`} />
                    </Link>
                </div>
                <div>  {/*Despues este div aparecera solo cuando se le pase el mouse por arriba de la img*/}
                    <button onClick={handleOnCart}>Carrito</button>
                    <button onClick={handleOnFav}>Favoritos</button>
                </div>
            </div>
            <div>
                <h1 className={styles.name_Product}>{name}</h1>
                <h2 className={`${styles.price_Product}`}>$ {price}</h2>
            </div>
        </div>
    )
}
