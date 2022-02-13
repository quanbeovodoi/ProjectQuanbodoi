import { useSnackbar } from 'notistack'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addToCart, setTotalPrice } from '../../Slice/CartSlice'

const HomeItemAct = () => {
    const [products, setProducts] = useState([])
    const dispatch = useDispatch()
    const [open, setOpen] = useState(false)
    const [value, setValue] = useState('1')

    const handleChange = (event, newValue) => {
        setValue(newValue)
    }
    const { enqueueSnackbar } = useSnackbar()

    const { id } = props

    useEffect(() => {
        const getProducts = async () => {
            const productItems = await ProductApi.getOne(id)
            let data = productItems.data
            setProducts(data)
        }

        getProducts()

        return () => {
            setProducts([])
        }
    }, [])

    const handleAdd = () => {
        if (products.length !== 0) {
            const itemData = {
                product: products,
                id: id,
                quantity: 1,
            }
            const actionAddToCart = addToCart(itemData)
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
    }
    return (
        <div>HomeItemAct</div>
    )
}

export default HomeItemAct