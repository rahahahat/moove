import React from "react";
import {
  Nav,
  NavLink,
  LinkWrap,
  Hamburger,
  Wrapper,
  //   SideNav,
  //   SideNavWrap,
  //   SideNavItem,
} from "./navbar-style.jsx";
import { Link } from "react-scroll";
import logo from "../../images/logo.jpg";
const Navbar = () => {
  const [selected, setSelected] = React.useState("Home");
  const navs = ["Moove and Shake", "Review Your House"];
  const setLink = (link) => {
    setSelected(link);
  };
  const switchLinks = (link) => {
    switch (link) {
      case "Moove and Shake":
        return "moove-n-shake";
      case "Review Your House":
        return "review-your-house";
    }
  };
  React.useEffect(() => {
    document.addEventListener(
      "scroll",
      () => {
        if (window.scrollY == 0) {
          setState(false);
        } else if (window.scrollY != 0 && state == false) {
          setState(true);
        }
      },
      false
    );
  }, []);
  const [state, setState] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <Nav prop={state}>
        <Wrapper prop={state}>
          <Hamburger
            prop={state}
            open={open}
            onClick={() => {
              setOpen((open) => !open);
            }}
          >
            <div />
            <div />
            <div />
          </Hamburger>
          <Link
            to="home"
            smooth={true}
            duration={500}
            css={`
              align-self: center;
            `}
          >
            <img
              src={logo}
              css={`
                display: ${state ? "block" : "none"};
                width: 60px;
                height: 60px;
                align-self: center;
              `}
            />
          </Link>
          <LinkWrap>
            {navs.map((link, index) => {
              return (
                <Link
                  key={index}
                  to={switchLinks(link)}
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-50}
                  onSetActive={() => {
                    setLink(link);
                  }}
                >
                  <NavLink selected={true} prop={state}>
                    {link}
                  </NavLink>
                </Link>
              );
            })}
          </LinkWrap>
        </Wrapper>
      </Nav>
    </>
  );
};

export default Navbar;
