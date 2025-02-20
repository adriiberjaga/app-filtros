import './Footer.css'
import { useFilters } from '../hooks/useFilters'
import { useCart } from '../hooks/useCart'
export function Footer () {
   const { filter } = useFilters()
    const { cart } = useCart()
  return (
    <footer className='footer'>
      {
        JSON.stringify
        (filter)
      } 
      {
        JSON.stringify
        (cart)
      }
    </footer>
  )
}