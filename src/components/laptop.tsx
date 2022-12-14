// /*
// Auto-generated by: https://github.com/pmndrs/gltfjsx
// */

import * as THREE from "three";
import React, { useEffect, useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRouter } from "next/router";
import { a as three } from "@react-spring/three";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Cube010: THREE.Mesh;
    Cube010_1: THREE.Mesh;
    Cube010_2: THREE.Mesh;
    Cube012: THREE.Mesh;
    Cube012_1: THREE.Mesh;
    touchbar: THREE.Mesh;
    keyboard: THREE.Mesh;
  };
  materials: {
    Chassis: THREE.MeshStandardMaterial;
    ["Screen Texture"]: THREE.MeshStandardMaterial;
    ["Screen Border"]: THREE.MeshStandardMaterial;
    ["trackpad.002"]: THREE.MeshStandardMaterial;
    ["touchbar.002"]: THREE.MeshStandardMaterial;
    ["keys.002"]: THREE.MeshStandardMaterial;
  };
};

export function Model({ open, ...props }) {
  const group = useRef<THREE.Group>();

  const router = useRouter();

  const hinge = useRef<THREE.Group>();

  const [hovered, setHovered] = useState<boolean>(false);

  useEffect(
    () => void (document.body.style.cursor = hovered ? "pointer" : "auto"),
    [hovered]
  );

  useFrame(state => {
    const t = state.clock.getElapsedTime();

    group.current.position.x = THREE.MathUtils.lerp(
      group.current.position.x,
      open ? Math.cos(t / 10) / 10 + -15.15 : -15,
      0.1
    );

    group.current.rotation.x = THREE.MathUtils.lerp(
      group.current.rotation.x,
      open ? Math.cos(t / 10) / 10 - 0.25 : 0,
      0.075
    );
    group.current.rotation.y = THREE.MathUtils.lerp(
      group.current.rotation.y,
      open ? Math.sin(t / 10) / 2 - 3 : -Math.PI / 1.15,
      0.025
    );
    group.current.rotation.z = THREE.MathUtils.lerp(
      group.current.rotation.z,
      open ? Math.sin(t / 10) / 10 : 0,
      0.075
    );
    group.current.position.y = THREE.MathUtils.lerp(
      group.current.position.y,
      open ? (-3.5 + Math.cos(t)) + 3.5 : -1,
      0.075
    );
  });

  useFrame(({ gl, scene, camera }) => {
    gl.render(scene, camera);
    hinge.current.rotation.x = THREE.MathUtils.lerp(
      hinge.current.rotation.x,
      open ? 0 : 0,
      0.02
    );
  }, 2);


  const { nodes, materials } = useGLTF("/laptop_iteration10.glb") as any; // GLTFResult
  return (
    <three.group
      ref={group}
      {...props}
      dispose={null}
      onPointerOver={e => (e.stopPropagation(), setHovered(true))}
      onPointerOut={e => setHovered(false)}
      rotation={[0, 3.75, 0]}
      position={[-15, -3.3, 0]}
    >
      <group position={[0, 0.33, 0.41]} rotation={[Math.PI / 2, 0, 0]} ref={hinge}>
        <group position={[0, 2.96, -0.13]} rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube010.geometry}
            material={materials.Chassis}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube010_1.geometry}
            material={materials["Screen Texture"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube010_2.geometry}
            material={materials["Screen Border"]}
          />
        </group>
      </group>
      <group position={[0, 0.27, 3.39]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube012.geometry}
          material={materials.Chassis}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube012_1.geometry}
          material={materials["trackpad.002"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.touchbar.geometry}
        material={materials["touchbar.002"]}
        position={[0, 0.34, 1.2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.keyboard.geometry}
        material={materials["keys.002"]}
        position={[1.79, 0.37, 3.45]}
      />
    </three.group>
  );
}

useGLTF.preload("/laptop_iteration10 (1).glb");