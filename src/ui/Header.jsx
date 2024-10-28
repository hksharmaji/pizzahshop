import { Link } from "react-router-dom"
import SearchOrder from "../features/order/SearchOrder"
import Username from "../features/user/Username"
import logo from '../assets/pizza-logo.png'
function Header() {
  return (
    <header className="flex px-4 py-3 bg-orange-400 justify-between items-center border-b border-stone-200
    uppercase sm:px-6">
        <Link to='/' className="text-zinc-900 tracking-widest font-semibold">
        Pizza Shoap
        </Link>
        <SearchOrder />
        <Username/>
    </header>
  )
}

export default Header