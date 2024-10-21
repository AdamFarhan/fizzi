"use client";
import { forwardRef, ReactNode } from "react";
import { Float } from "@react-three/drei";

import { SodaCan, SodaCanProps } from "@/components/SodaCan";
import { Group } from "three";

type FloatingCanProps = {
  /** Flavor */
  flavor?: SodaCanProps["flavor"];
  /** Animation speed, defaults to 1.5 */
  floatSpeed?: number;
  /** XYZ rotation intensity, defaults to 1 */
  rotationIntensity?: number;
  /** Up/down float intensity, works like a multiplier with floatingRange,defaults to 1 */
  floatIntensity?: number;
  /** Range of y-axis values the object will float within, defaults to [-0.1,0.1] */
  floatingRange?: [number, number];
  children?: ReactNode;
};

const FloatingCan = forwardRef<Group, FloatingCanProps>(
  (
    {
      flavor = "blackCherry",
      floatSpeed = 1.5,
      rotationIntensity = 1,
      floatIntensity = 1,
      floatingRange = [-0.1, 0.1],
      children,
      ...props
    },
    ref,
  ) => {
    return (
      <group ref={ref} {...props}>
        <Float
          speed={floatSpeed}
          rotationIntensity={rotationIntensity}
          floatIntensity={floatIntensity}
          floatingRange={floatingRange}
        >
          {children}
          <SodaCan flavor={flavor} />
        </Float>
      </group>
    );
  },
);

FloatingCan.displayName = "FloatingCan";

export default FloatingCan;
