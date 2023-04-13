import alanBtn from "@alan-ai/alan-sdk-web"
import { useCallback, useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { removeFromCart } from "./actions/cartActions"

const COMMANDS = {
  OPEN_CART: "open-cart",
  ADD_ITEM: "add-item",
  SHOW_CATEGORY: "show-category",
  VISIT_CHECKOUT: "visit-checkout",
  REMOVE_ITEM: "remove-item",
}
// function to remove spaces and convert to lowercase and also remove symbols
export const normalize = (str) => str.replace(/\s/g, "").toLowerCase()

export default function useAlan() {
  const [alanInstance, setAlanInstance] = useState()
  const navigate = useNavigate()
  const cart = useSelector((state) => state.cart)
  const { cartItems } = cart
  console.log(cartItems)
  const dispatch = useDispatch()

  const openCart = useCallback(() => {
    alanInstance.playText("Opening cart")
    navigate("/cart")
  }, [alanInstance, navigate])

  const addItem = useCallback(
    async ({ detail: { name, quantity } }) => {
      const data = await fetch("/api/products").then((res) => res.json())
      console.log(data)
      // match
      const product = data.find(
        (p) => p.title && normalize(p.title).includes(name.toLowerCase())
      )
      console.log(product)
      if (!product) {
        alanInstance.playText(`I cannot find ${name} item`)
      } else {
        if (product.countInStock < quantity) {
          alanInstance.playText(
            `Sorry, we only have ${product.countInStock} of the ${name} item in stock.`
          )
          return
        }
        alanInstance.playText(
          `Adding ${quantity} of the  ${name} item to the cart`
        )
        navigate(`/cart/${product._id}?qty=${quantity}`)
      }
    },
    [alanInstance, navigate]
  )

  const removeItem = useCallback(
    async ({ detail: { name } }) => {
      const data = await fetch("/api/products").then((res) => res.json())
      console.log(data)
      // match
      const product = data.find(
        (p) => p.title && normalize(p.title).includes(name.toLowerCase())
      )
      console.log(product)
      if (!product) {
        alanInstance.playText(`I cannot find ${name} item`)
      }
      if (!cartItems.find((x) => x.product === product._id)) {
        alanInstance.playText(`I cannot find ${name} item in the cart`)
      }

      alanInstance.playText(`Removing ${name} item from the cart`)
      dispatch(removeFromCart(product._id))
    },
    [alanInstance, cartItems, dispatch]
  )

  const showCategory = useCallback(
    ({ detail: { name } }) => {
      alanInstance.playText(`Showing ${name} category`)
      navigate(`/category/${name}`)
    },
    [alanInstance, navigate]
  )

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const visitCheckout = useCallback(() => {
    if (!userInfo) {
      alanInstance.playText(`Please login to continue`)
      navigate(`/login?redirect=shipping`)
      return
    }
    alanInstance.playText(`Proceeding to checkout`)
    navigate(`/shipping`)
  }, [alanInstance, navigate, userInfo])

  useEffect(() => {
    if (alanInstance == null) return

    window.addEventListener(COMMANDS.OPEN_CART, openCart)
    window.addEventListener(COMMANDS.ADD_ITEM, addItem)
    window.addEventListener(COMMANDS.SHOW_CATEGORY, showCategory)
    window.addEventListener(COMMANDS.VISIT_CHECKOUT, visitCheckout)
    window.addEventListener(COMMANDS.REMOVE_ITEM, removeItem)

    return () => {
      window.removeEventListener(COMMANDS.OPEN_CART, openCart)
      window.removeEventListener(COMMANDS.ADD_ITEM, addItem)
      window.removeEventListener(COMMANDS.SHOW_CATEGORY, showCategory)
      window.removeEventListener(COMMANDS.VISIT_CHECKOUT, visitCheckout)
      window.removeEventListener(COMMANDS.REMOVE_ITEM, removeItem)
    }
  }, [alanInstance, openCart, addItem, showCategory, visitCheckout, removeItem])

  useEffect(() => {
    if (alanInstance != null) return

    setAlanInstance(
      alanBtn({
        key: "85a3f6c2b2fd57b29cb2e9d3e338c88c2e956eca572e1d8b807a3e2338fdd0dc/stage",
        onCommand: ({ command, payload }) => {
          console.log(payload)
          window.dispatchEvent(
            new CustomEvent(command, {
              detail: payload,
            })
          )
        },
      })
    )
  }, [])

  return null
}
