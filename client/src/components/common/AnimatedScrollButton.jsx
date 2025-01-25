import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { Tooltip } from "@heroui/tooltip";

const AnimatedScrollButton = ({
  onClick,
  tooltipText = "SCROLL TO EXPLORE MORE",
  hasTooltip = true,
}) => {
  return (
    <StyledWrapper>
      {hasTooltip ? (
        <Tooltip content={tooltipText} placement="top">
          <motion.button
            onClick={onClick}
            className="scrolldown"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            style={{ "--color": "green" }}
          >
            <div className="chevrons">
              <div className="chevrondown" />
              <div className="chevrondown" />
            </div>
          </motion.button>
        </Tooltip>
      ) : (
        <motion.button
          onClick={onClick}
          className="scrolldown"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          style={{ "--color": "green" }}
        >
          <div className="chevrons">
            <div className="chevrondown" />
            <div className="chevrondown" />
          </div>
        </motion.button>
      )}
    </StyledWrapper>
  );
};

AnimatedScrollButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  tooltipText: PropTypes.string,
  hasTooltip: PropTypes.bool,
};

const StyledWrapper = styled.div`
  .scrolldown {
    --color: white;
    --sizeX: 30px;
    --sizeY: 50px;
    position: relative;
    width: var(--sizeX);
    height: var(--sizeY);
    margin-left: var(--sizeX / 2);
    border: calc(var(--sizeX) / 10) solid var(--color);
    border-radius: 50px;
    box-sizing: border-box;
    margin-bottom: 16px;
    cursor: pointer;
  }

  .scrolldown::before {
    content: "";
    position: absolute;
    bottom: 30px;
    left: 50%;
    width: 6px;
    height: 6px;
    margin-left: -3px;
    background-color: var(--color);
    border-radius: 100%;
    animation: scrolldown-anim 2s infinite;
    box-sizing: border-box;
    box-shadow: 0px -5px 3px 1px #2a547066;
  }

  @keyframes scrolldown-anim {
    0% {
      opacity: 0;
      height: 6px;
    }

    40% {
      opacity: 1;
      height: 10px;
    }

    80% {
      transform: translate(0, 20px);
      height: 10px;
      opacity: 0;
    }

    100% {
      height: 3px;
      opacity: 0;
    }
  }

  .chevrons {
    padding: 6px 0 0 0;
    margin-left: -3px;
    margin-top: 48px;
    width: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .chevrondown {
    margin-top: -6px;
    position: relative;
    border: solid var(--color);
    border-width: 0 3px 3px 0;
    display: inline-block;
    width: 10px;
    height: 10px;
    transform: rotate(45deg);
  }

  .chevrondown:nth-child(odd) {
    animation: pulse54012 500ms ease infinite alternate;
  }

  .chevrondown:nth-child(even) {
    animation: pulse54012 500ms ease infinite alternate 250ms;
  }

  @keyframes pulse54012 {
    from {
      opacity: 0;
    }

    to {
      opacity: 0.5;
    }
  }
`;

export default AnimatedScrollButton;
