import './Footer.css'
import { useFilters } from '../hooks/useFilters'

export function Footer () {
   const { filter } = useFilters()

  return (
    <footer className='footer'>
      {
        JSON.stringify
        (filter)
      }
    </footer>
  )
}