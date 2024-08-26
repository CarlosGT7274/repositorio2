
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { Canvas, useThree } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { ThreeMFLoader } from 'three-stdlib';

function Scene() {
  const { scene, camera, gl: renderer } = useThree();
  const objectRef = useRef();
  const groundRef = useRef();

  useEffect(() => {
    // Configurar escena
    scene.background = null;
    scene.fog = new THREE.Fog(0xa0a0a0, 10, 500);

    // Configurar cámara
    camera.position.set( - 50, 40, 50); // Ajusta la posición de la cámara
    camera.lookAt(0, 0, 0); // Asegúrate de que la cámara apunte al centro de la escena

    // Configurar luces
    const hemiLight = new THREE.HemisphereLight(0xffffff, 0x8d8d8d, 3);
    hemiLight.position.set(0, 100, 0);
    scene.add(hemiLight);

    const dirLight = new THREE.DirectionalLight(0xffffff, 3);
    dirLight.position.set(- 0, 40, 50); // Ajusta la posición de la luz
    dirLight.castShadow = true;
    dirLight.shadow.camera.top = 50;
    dirLight.shadow.camera.bottom = -25;
    dirLight.shadow.camera.left = -25;
    dirLight.shadow.camera.right = 25;
    dirLight.shadow.camera.near = 0.1;
    dirLight.shadow.camera.far = 200;
    dirLight.shadow.mapSize.set(1024, 1024);
    scene.add(dirLight);

    // Cargar modelo
    const loader = new ThreeMFLoader();
    loader.load('/models/truck.3mf', (object) => {
      object.rotation.set(-Math.PI / 2, 0, 0); // z-up conversion

      object.traverse((child) => {
        if (child.isMesh) {
          child.castShadow = true;
        }
      });

      objectRef.current = object;

      // Centrar el modelo en la escena
      const boundingBox = new THREE.Box3().setFromObject(object);
      const size = boundingBox.getSize(new THREE.Vector3());
      const center = boundingBox.getCenter(new THREE.Vector3());

      object.position.sub(center); // Mueve el modelo para centrarlo en la escena

      scene.add(object);
    });

    // Crear suelo
    const ground = new THREE.Mesh(
      new THREE.PlaneGeometry(1000, 1000),
      new THREE.MeshPhongMaterial({ color: 0xcbcbcb, depthWrite: false })
    );
    ground.rotation.x = -Math.PI / 2;
    ground.position.y = 11;
    ground.receiveShadow = true;
    groundRef.current = ground;
    //scene.add(ground);

    // Configurar renderer
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    // Función de renderizado
    function render() {
      renderer.render(scene, camera);
    }

    // Función para manejar el cambio de tamaño de la ventana
    function onWindowResize() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      render();
    }

    // Agregar event listener para el cambio de tamaño de la ventana
    window.addEventListener('resize', onWindowResize);

    // Inicializar render
    render();

    // Cleanup function
    return () => {
      window.removeEventListener('resize', onWindowResize);
      scene.remove(hemiLight);
      scene.remove(dirLight);
      scene.remove(objectRef.current);
      scene.remove(groundRef.current);
    };
  }, [scene, camera, renderer]);

  return null;
}

function ThreeScene() {
  return (
    <Canvas camera={{ fov: 35, near: 1, far: 500 }}>
      <Scene />
      <OrbitControls
        minDistance={50}
        maxDistance={200}
        enablePan={false}
        target={[0, 0, 0]} 
      />
    </Canvas>
  );
}

export default ThreeScene;

