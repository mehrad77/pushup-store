import Link from 'next/link';
import NavStyles from './styles/NavStyles';
import User from './User';

const Nav = () => (
  <NavStyles>
    <Link href="/items">
      <a>Shop</a>
    </Link>
    <Link href="/sell">
      <a>Sell</a>
    </Link>
    <Link href="/signup">
      <a>Signup</a>
    </Link>
    <Link href="/orders">
      <a>Orders</a>
    </Link>
    <Link href="/me">
      <a>
        <User>
          {({ data: { me } }) => {
            console.log(me);
            if (me) return <p>{me.name}</p>;
            return "Account";
          }}
        </User>
        
        
      </a>
    </Link>
  </NavStyles>
);

export default Nav;