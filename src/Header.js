import { Link } from "react-router-dom";

export default function Header() {
const menu = ['About','Service','Support','Contact'];
  return (
    <header>
        <Link to="/">Businnes Acount</Link>
        <ul>
            <Link to='/'>Home</Link>
            {menu.map(item => <Link to={`/${item}`}>{item}</Link>)}
        </ul>
    </header>
  )
}