import styled from "styled-components";
import { motion } from "framer-motion";

const NavWrap = styled(motion.div)`
  width: 100%;
  height: 60px;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(15px);

  position: fixed;
  top: -1px;
`;

const item = {
  invisible: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const [id, path, title] = [
  [1, "/", "Home"],
  [2, "/Rules", "Rules"],
];

function Nav() {
  return (
    <>
      <NavWrap variants={item} initial="invisible" whileInView="show"></NavWrap>
    </>
  );
}

export default Nav;
