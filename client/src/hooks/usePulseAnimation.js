import { useMemo } from "react";

/**
 * Custom hook for creating a pulsing animation variant for buttons
 * @param {Object} options - Configuration options for the pulse animation
 * @param {string} options.color - The RGB color values (e.g., "34, 197, 94" for success green or "245, 158, 11" for warning gold)
 * @param {number} options.duration - Animation duration in seconds (default: 2)
 * @param {number} options.scale - Maximum scale value for the pulse (default: 1.05)
 * @param {number} options.shadowSize - Maximum shadow size in pixels (default: 15)
 * @returns {Object} Framer Motion variants object for the pulse animation
 */
const usePulseAnimation = ({
  color,
  duration = 2,
  scale = 1.05,
  shadowSize = 15,
}) => {
  const pulseVariant = useMemo(
    () => ({
      initial: { scale: 1, boxShadow: `0 0 0 0 rgba(${color}, 0.4)` },
      animate: {
        scale: [1, scale, 1],
        boxShadow: [
          `0 0 0 0 rgba(${color}, 0.4)`,
          `0 0 0 ${shadowSize}px rgba(${color}, 0)`,
          `0 0 0 0 rgba(${color}, 0)`,
        ],
        transition: {
          duration,
          repeat: Infinity,
          ease: "easeInOut",
        },
      },
      tap: { scale: 0.95 },
    }),
    [color, duration, scale, shadowSize]
  );

  return pulseVariant;
};

// Predefined color constants for common use cases
export const PULSE_COLORS = {
  SUCCESS: "34, 197, 94", // Green
  WARNING: "245, 158, 11", // Gold
  PRIMARY: "59, 130, 246", // Blue
  DANGER: "239, 68, 68", // Red
};

export default usePulseAnimation;
