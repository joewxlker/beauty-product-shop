import { Link } from 'react-router-dom';
import '../HeaderBig.css'
import './NavLinks.css'
import NavDropdowns from './NavD/Dropdowns';
import { useState } from 'react';

export const NavLinks = ({ props }) => {

  const [hover, setHover] = useState(false);
  const displayDD = (name) => {
    setHover(true)
    console.log(hover)
  }
  const hideDD = (name) => {
    setHover(false)
    console.log(hover)
  }

  return (
    <>
      <Link
        to={`${props.link}`}
        className='nav-links'
        id={`${props.id}`}
        // onMouseEnter={e => {
        //   e.preventDefault();
        //   displayDD(props.name)
        // }}
        >{props.name}
      </Link>
      <NavDropdowns
        display={props.display}
        boolean={hover}
        onMouseLeave={hideDD} />
    </>
  );
}

