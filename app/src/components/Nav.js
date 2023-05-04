import styled from "styled-components";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

const NavWrap = styled(motion.div)`
  width: 100%;
  height: 60px;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(15px);

  position: fixed;
  top: -1px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const NavItem = styled(NavLink)`
  margin: 10px;
  color: black;
  text-decoration: none;
  border-radius: 5px;
  padding: 5px 10px 5px 10px;

  &.active {
    background-color: white;
  }
`;

const wrapAni = {
  hidden: {
    width: "50%",
    left: "20%",
  },
  show: {
    width: "100%",
    left: "0",
    transition: {
      duration: 0.5,
      staggerChildren: 0.2,
    },
  },
};

const itemAni = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
  },
};

const navItems = [
  [1, "/", "Home"],
  [2, "/Rules", "Rules"],
  [3, "/My", "My"],
];

function Nav() {
  return (
    <>
      <NavWrap variants={wrapAni} initial="hidden" animate="show">
        {navItems.map(([id, path, title]) => (
          <motion.div variants={itemAni}>
            <NavItem id={id} to={path}>
              {title}
            </NavItem>
          </motion.div>
        ))}
      </NavWrap>
    </>
  );
}

export default Nav;
