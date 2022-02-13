import React from 'react'
import { FaRegTrashAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { useSnackbar } from 'notistack'
import { removeItemWishList } from '../../Slice/WishListSlice'
import { addToCart, setTotalPrice } from '../../Slice/CartSlice'

const WishList = (props) => {
    const wishListItems = useSelector((state) => state.wishlist.wishListItems)

    const dispatch = useDispatch()

    const { enqueueSnackbar } = useSnackbar()

    const handleDelete = (id) => {
        const actionDelete = removeItemWishList(id)
        dispatch(actionDelete)
        enqueueSnackbar('Remove item in wishlist.', {
            anchorOrigin: {
                vertical: 'top',
                horizontal: 'left',
            },
            autoHideDuration: 2000,
            variant: 'error',
        })
    }
    const handleAdd = (id) => {
        let product = wishListItems.filter((item) => item.product.p_id === id)
        const actionAddToCart = addToCart(product[0])
        dispatch(actionAddToCart)
        const actionTotalPrice = setTotalPrice()
        dispatch(actionTotalPrice)
        enqueueSnackbar('Add item in Cart', {
            anchorOrigin: {
                vertical: 'top',
                horizontal: 'left',
            },
            autoHideDuration: 2000,
            variant: 'success',
        })
    }
    return (
        <div className='main'>
            <div className="main_content">
                <div className="titlePage" style={{ backgroundImage: 'url(https://img.freepik.com/free-vector/white-abstract-background_23-2148810113.jpg)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                    <h1>WishList</h1>
                </div>
                <div className="table">
                    <div className="container">
                        {wishListItems.length !== 0 ? (
                            <div className="table-content">
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Hình Ảnh</th>
                                            <th>Tên Sản Phẩm</th>
                                            <th>Giá tiền</th>
                                            <th>Số lượng</th>
                                            <th>Tổng cộng</th>
                                            <th>Hủy</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {wishListItems &&
                                            wishListItems.map((item, index) => {
                                                return (
                                                    <tr key={index}>
                                                        <td>
                                                            <Link to={`/products/${item.id}`}>
                                                                <img src={item.product.p_image} alt="" />
                                                            </Link>
                                                        </td>
                                                        <td>
                                                            <Link to={`/products/${item.id}`}>
                                                                {item.product.p_name}
                                                            </Link>
                                                        </td>
                                                        <td>
                                                            <span>{item.product.p_price} đ</span>
                                                        </td>
                                                        <td>
                                                            <div
                                                                className="btn btn-add"
                                                                onClick={() => {
                                                                    handleAdd(item.product.p_id)
                                                                }}
                                                            >
                                                                add to cart
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <span>{item.product.p_price} đ</span>
                                                        </td>
                                                        <td>
                                                            <div
                                                                className="cart-remove"
                                                                onClick={() => handleDelete(item.product.p_id)}
                                                            >
                                                                <FaRegTrashAlt />
                                                            </div>
                                                        </td>
                                                    </tr>
                                                )
                                            })}
                                    </tbody>
                                </table>
                            </div>
                        ) : (
                            <h2 className="pro-nof">No Product Found</h2>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WishList