import clsx from "clsx";
import { ComponentPropsWithoutRef } from "react";

type LineDashedProps = ComponentPropsWithoutRef<"div"> & {
  color?: string;
  thickness?: number;
  dashLength?: number;
  gapLength?: number;
  spacing?: string;
};

export const LineDashed = ({
  color = "#C0C0C0",
  thickness = 2,
  dashLength = 3,
  gapLength = 3,
  spacing = "my-4",
  className,
  ...props
}: LineDashedProps) => {
  return (
    <div
      className={clsx('min-w-5 w-5', spacing, className)}
      role="separator"
      aria-orientation="horizontal"
      {...props}
    >
      <svg
        width="100%"
        height={thickness}
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <line
          x1="0"
          y1={thickness / 2}
          x2="100%"
          y2={thickness / 2}
          stroke={color}
          strokeWidth={thickness}
          strokeDasharray={`${dashLength},${gapLength}`}
        />
      </svg>
    </div>
  );
};