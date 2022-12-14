import { Canvas } from "@react-three/fiber";
import { A11yAnnouncer } from "@react-three/a11y";
import { Preload } from "@react-three/drei";

const CanvasWrapper = ({ children }) => {
  return (
    <>
      <Canvas
      camera={{ position: [33, 1, 26], fov: 40 }}
        // Is this deprecated or typed wrong? Ignoring for now.
        // @ts-ignore
        // mode="concurrent"
        style={{
          position: "absolute",
          top: 0
        }}
      >
        <Preload all />
        {children}
      </Canvas>
      <A11yAnnouncer />
    </>
  );
};

export default CanvasWrapper;
