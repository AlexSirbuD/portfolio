/* eslint-disable react/no-unknown-property */
import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'

import CanvasLoader from "../Loader"

const Earth = () => {

  const earth = useGLTF('./planet-2/scene-2.gltf.glb')
  return (

    <mesh>
      <hemisphereLight intensity={8} groundColor='#06004B' />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={4}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={4} />
      <primitive
        object={earth.scene}
        scale={18}
        position-y={0}
        rotation-y={0}
      />
    </mesh>
    // <primitive
    //   object={earth.scene}
    //   scale={3}
    //   position-y={0}
    //   rotation-y={0}
    // />
  )
}

const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop='demand'
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6]
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth />
      </Suspense>
    </Canvas>
  )
}

export default EarthCanvas