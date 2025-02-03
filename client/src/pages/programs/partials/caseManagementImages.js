import img1 from "../../../assets/assessment1.webp";
import img2 from "../../../assets/recover4.webp";
import img3 from "../../../assets/mentalSuppor.webp";
import img4 from "../../../assets/health_wellness.webp";
import img5 from "../../../assets/housing_support2.webp";

export const caseManagementImages = {
  intake: {
    path: img1,
    alt: "Initial assessment and planning session",
    mask: `M 50,0 L 100,25 L 100,75 L 50,100 L 0,75 L 0,25 Z`, // Hexagon
  },
  recovery: {
    path: img2,
    alt: "Recovery support and guidance",
    mask: `M 0,25 Q 50,0 100,25 Q 100,75 50,100 Q 0,75 0,25`, // Smooth curves
  },
  mentalHealth: {
    path: img3,
    alt: "Mental health and counseling services",
    mask: `M 50,0 L 90,20 L 90,80 L 50,100 L 10,80 L 10,20 Z`, // Diamond
  },
  health: {
    path: img4,
    alt: "Health and wellness services",
    mask: `M 0,40 Q 20,0 50,0 Q 80,0 100,40 Q 100,60 50,100 Q 0,60 0,40`, // Wave
  },
  housing: {
    path: img5,
    alt: "Housing transition support",
    mask: `M 20,0 L 80,0 L 100,30 L 100,70 L 80,100 L 20,100 L 0,70 L 0,30 Z`, // Octagon
  },
};
