import React from "react";
import logo2 from "../../images/logo.jpg";
import img1 from "../../images/img1.jpg";
import img2 from "../../images/img2.png";
import { useTransition, animated, config } from "react-spring";

const imgs = [img1, img2];

const Carousal = ({}) => {
  const [img, setImg] = React.useState(0);
  React.useEffect(() => {
    const time = setTimeout(() => {
      setImg((img) => {
        return (img + 1) % 2;
      });
    }, 3000);
    return () => {
      clearTimeout(time);
    };
  });
  const transitions = useTransition(imgs[img], (item) => item, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: config.gentle,
  });
  return (
    <div
      css={`
        width: 100vw;
        height: 800px;
        box-sizing: border-box;
        display: flex;
        justify-content: center;
        @media (max-width: 800px) {
          height: 600px;
        }
        @media (max-width: 650px) {
          height: 500px;
        }
        @media (max-width: 450px) {
          height: 350px;
        }
      `}
    >
      {transitions.map(({ item, key, props }) => {
        return (
          <animated.img
            key={key}
            src={item}
            style={props}
            css={`
              width: 100vw;
              height: 800px;
              box-sizing: border-box;
              position: absolute;
              top: 0;
              left: 0;
            `}
          />
        );
      })}

      <div
        css={`
          background-color: #2c5b77;
          width: 100vw;
          height: 800px;
          top: 0;
          display: flex;
          position: absolute;
          z-index: 1;
          box-sizing: border-box;
          opacity: 0.7;
        `}
      />
      <animated.img
        src={logo2}
        css={`
          display: flex;
          align-self: center;
          width: 20vw;
          position: relative;
          z-index: 10;
        `}
      />
    </div>
  );
};

export default Carousal;
