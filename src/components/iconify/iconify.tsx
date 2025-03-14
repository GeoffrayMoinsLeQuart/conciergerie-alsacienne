import { forwardRef } from "react";
import { Icon } from "@iconify/react";

// ----------------------------------------------------------------------

interface Props {
  width?: number;
  icon: string; // ou votre type IconifyProps
  style?: React.CSSProperties;
  [key: string]: any; // Pour d'autres propriétés
}

const Iconify = forwardRef<HTMLDivElement, Props>(
  ({ icon, width = 20, style, ...other }, ref) => (
    <div
      ref={ref}
      className="component-iconify"
      style={{ width: `${width}px`, height: `${width}px`, ...style }}
      {...other}
    >
      <Icon icon={icon} width={width} height={width} />
    </div>
  )
);

export default Iconify;