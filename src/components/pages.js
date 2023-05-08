import styled from "styled-components";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const PageBox = styled(motion.div)`
  width: inherit;
  height: inherit;
  max-width: 200px;
  max-height: 200px;
  border-radius: 26px;
  background-color: gray;
  position: relative;
  z-index: 1;
  top: 0;
  left: 0;
  transform: translate(0%, 0%);
`;

const PageBoxCage = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.width};
  max-width: 200px;
  max-height: 200px;
  margin: 4px;
  display: flex; /* 추가 */
  align-items: center; /* 추가 */
  justify-content: center; /* 추가 */
`;

function Page() {
  const [isOpen, setOpen] = useState(false);
  const [isClick, setClick] = useState(false);

  const displyWidth = window.outerWidth;
  const boxWidth = window.outerWidth / 2.3 + "px";

  useEffect(() => {
    if (isClick) {
      setOpen(true);
    } else {
      const timeoutId = setTimeout(() => setOpen(false), 1);
      return () => clearTimeout(timeoutId);
    }
  }, [isClick]);

  return (
    <PageBoxCage width={boxWidth}>
      <PageBox
        animate={{
          width: isOpen ? `${(width = displyWidth)}` : "inherit",
          height: isOpen ? "80vh" : "inherit",
          maxWidth: isOpen ? "none" : "200px",
          maxHeight: isOpen ? "none" : "200px",
          position: isOpen ? "fixed" : "relative",
          zIndex: isOpen ? 2 : 1,
          left: isOpen ? "50%" : "0",
          transform: isOpen ? "translateX(-50%)" : "translateX(0%)",
          margin: isOpen ? "auto" : "0",
          top: isOpen ? "10%" : "0",
        }}
        onClick={() => setClick(!isClick)}
      />
    </PageBoxCage>
  );
}

export default Page;
