"use client";

import { useEffect, useLayoutEffect, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Html, Line, OrbitControls } from "@react-three/drei";
import { Color, Group, InstancedMesh, Object3D, Quaternion, Vector3 } from "three";

export type GeoPoint = {
  name: string;
  city: string;
  address: string;
  latitude: number;
  longitude: number;
};

const SHIFA_LOCATION: GeoPoint = {
  name: "Shifa International Hospital",
  city: "Islamabad, Pakistan",
  address: "4 Pitras Bukhari Rd, H-8/4, Islamabad",
  latitude: 33.6752945,
  longitude: 73.0667049,
};

const BRAND = {
  red: "#E30613",
  blue: "#009FE3",
  white: "#FFFFFF",
  bg: "#050A14",
  bgSoft: "#0B1324",
};

const DUMMY = new Object3D();
const Y_AXIS = new Vector3(0, 1, 0);

export function latLonToCartesian(latitude: number, longitude: number, radius: number) {
  const phi = ((90 - latitude) * Math.PI) / 180;
  const theta = ((longitude + 180) * Math.PI) / 180;

  const x = -(radius * Math.sin(phi) * Math.cos(theta));
  const z = radius * Math.sin(phi) * Math.sin(theta);
  const y = radius * Math.cos(phi);

  return new Vector3(x, y, z);
}

function createFibonacciSphere(count: number, radius: number) {
  const points: Vector3[] = [];
  const goldenAngle = Math.PI * (3 - Math.sqrt(5));

  for (let i = 0; i < count; i += 1) {
    const y = 1 - (i / (count - 1)) * 2;
    const radiusAtY = Math.sqrt(1 - y * y);
    const theta = goldenAngle * i;
    const x = Math.cos(theta) * radiusAtY;
    const z = Math.sin(theta) * radiusAtY;

    points.push(new Vector3(x * radius, y * radius, z * radius));
  }

  return points;
}

function hashNoise(input: number) {
  const value = Math.sin(input * 12.9898 + 78.233) * 43758.5453123;
  return value - Math.floor(value);
}

function Starfield({ count = 1200 }: { count?: number }) {
  const positions = useMemo(() => {
    const values = new Float32Array(count * 3);
    for (let i = 0; i < count; i += 1) {
      const r = 8 + hashNoise(i * 1.13 + 5.21) * 6;
      const theta = hashNoise(i * 2.37 + 11.7) * Math.PI * 2;
      const phi = Math.acos(2 * hashNoise(i * 3.91 + 2.4) - 1);

      values[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      values[i * 3 + 1] = r * Math.cos(phi);
      values[i * 3 + 2] = r * Math.sin(phi) * Math.sin(theta);
    }
    return values;
  }, [count]);

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial color="#2C4C7A" size={0.03} sizeAttenuation depthWrite={false} transparent opacity={0.82} />
    </points>
  );
}

function DottedGlobe({ target }: { target: GeoPoint }) {
  const globeRef = useRef<Group>(null);
  const dotsRef = useRef<InstancedMesh>(null);
  const pulseRef = useRef<Group>(null);
  const ringOneRef = useRef<Group>(null);
  const ringTwoRef = useRef<Group>(null);
  const interactingRef = useRef(false);

  const radius = 1.8;
  const dotCount = 6400;

  const points = useMemo(() => createFibonacciSphere(dotCount, radius), [dotCount, radius]);

  const markerPosition = useMemo(() => latLonToCartesian(target.latitude, target.longitude, radius + 0.02), [target, radius]);

  const markerQuaternion = useMemo(() => {
    const normal = markerPosition.clone().normalize();
    return new Quaternion().setFromUnitVectors(Y_AXIS, normal);
  }, [markerPosition]);

  useLayoutEffect(() => {
    if (!dotsRef.current) return;

    const instance = dotsRef.current;
    const colorA = new Color(BRAND.white);
    const colorB = new Color(BRAND.blue);

    points.forEach((point, index) => {
      DUMMY.position.copy(point);
      DUMMY.scale.setScalar(1);
      DUMMY.updateMatrix();
      instance.setMatrixAt(index, DUMMY.matrix);

      const blend = 0.15 + Math.min(0.85, Math.abs(point.y / radius) * 0.72 + hashNoise(index * 4.71 + 0.31) * 0.18);
      const dotColor = colorA.clone().lerp(colorB, blend);
      instance.setColorAt(index, dotColor);
    });

    instance.instanceMatrix.needsUpdate = true;
    if (instance.instanceColor) instance.instanceColor.needsUpdate = true;
  }, [points, radius]);

  useFrame(({ clock }, delta) => {
    if (globeRef.current && !interactingRef.current) {
      globeRef.current.rotation.y += delta * 0.16;
    }

    const t = clock.getElapsedTime();

    if (pulseRef.current) {
      const pulse = 1 + Math.sin(t * 3.2) * 0.12;
      pulseRef.current.scale.setScalar(pulse);
    }

    if (ringOneRef.current) {
      const p = (t * 0.65) % 1;
      const s = 0.2 + p * 1.9;
      ringOneRef.current.scale.setScalar(s);
      ringOneRef.current.children.forEach((child) => {
        if ("material" in child && child.material && typeof child.material === "object" && "opacity" in child.material) {
          (child.material as { opacity: number }).opacity = Math.max(0, 0.65 - p * 0.65);
        }
      });
    }

    if (ringTwoRef.current) {
      const p = ((t * 0.65 + 0.5) % 1);
      const s = 0.2 + p * 1.9;
      ringTwoRef.current.scale.setScalar(s);
      ringTwoRef.current.children.forEach((child) => {
        if ("material" in child && child.material && typeof child.material === "object" && "opacity" in child.material) {
          (child.material as { opacity: number }).opacity = Math.max(0, 0.65 - p * 0.65);
        }
      });
    }
  });

  return (
    <>
      <Starfield />

      <group ref={globeRef}>
        <mesh>
          <sphereGeometry args={[radius + 0.05, 64, 64]} />
          <meshBasicMaterial color={BRAND.blue} transparent opacity={0.06} />
        </mesh>

        <mesh>
          <sphereGeometry args={[radius + 0.15, 64, 64]} />
          <meshBasicMaterial color={BRAND.blue} transparent opacity={0.03} />
        </mesh>

        <instancedMesh ref={dotsRef} args={[undefined, undefined, dotCount]} frustumCulled={false}>
          <sphereGeometry args={[0.009, 4, 4]} />
          <meshStandardMaterial
            vertexColors
            emissive={new Color(BRAND.blue)}
            emissiveIntensity={0.38}
            roughness={0.32}
            metalness={0.05}
            toneMapped
          />
        </instancedMesh>

        <group position={markerPosition} quaternion={markerQuaternion}>
          <group ref={pulseRef}>
            <mesh>
              <sphereGeometry args={[0.052, 24, 24]} />
              <meshStandardMaterial color={BRAND.red} emissive={new Color(BRAND.red)} emissiveIntensity={2.2} />
            </mesh>
          </group>

          <group ref={ringOneRef}>
            <mesh rotation={[Math.PI / 2, 0, 0]}>
              <ringGeometry args={[0.095, 0.125, 48]} />
              <meshBasicMaterial color={BRAND.red} transparent opacity={0.64} side={2} />
            </mesh>
          </group>

          <group ref={ringTwoRef}>
            <mesh rotation={[Math.PI / 2, 0, 0]}>
              <ringGeometry args={[0.11, 0.14, 48]} />
              <meshBasicMaterial color={BRAND.red} transparent opacity={0.64} side={2} />
            </mesh>
          </group>

          <Line
            points={[
              [0, 0.02, 0],
              [0, 0.32, 0],
              [0.84, 0.56, 0],
            ]}
            color={BRAND.white}
            lineWidth={1.1}
            transparent
            opacity={0.95}
          />

          <Html position={[1.06, 0.58, 0]} transform sprite distanceFactor={8.2} occlude={false}>
            <div className="pointer-events-none w-[250px] rounded-xl border border-white/20 bg-[#050D1CCC] p-4 text-white shadow-[0_12px_34px_-18px_rgba(0,159,227,0.45)] backdrop-blur-md">
              <p className="text-sm font-semibold">{target.name}</p>
              <p className="mt-1 text-sm text-[#86D9FF]">{target.city}</p>
              <p className="mt-2 text-xs leading-relaxed text-slate-200">{target.address}</p>
            </div>
          </Html>
        </group>
      </group>

      <OrbitControls
        enablePan={false}
        enableDamping
        dampingFactor={0.08}
        rotateSpeed={0.55}
        zoomSpeed={0.6}
        minDistance={2.7}
        maxDistance={5}
        onStart={() => {
          interactingRef.current = true;
        }}
        onEnd={() => {
          interactingRef.current = false;
        }}
      />
    </>
  );
}

export type GlobeProps = {
  className?: string;
  target?: GeoPoint;
};

export function Globe({ className, target = SHIFA_LOCATION }: GlobeProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const element = containerRef.current;

    let frameId = 0;
    const observer = new ResizeObserver(() => {
      cancelAnimationFrame(frameId);
      frameId = requestAnimationFrame(() => {
        element.style.setProperty("--globe-ready", "1");
      });
    });

    observer.observe(element);
    return () => {
      cancelAnimationFrame(frameId);
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={[
        "relative h-[420px] w-full overflow-hidden rounded-3xl border border-[#1A2D4D] bg-gradient-to-b from-[#050A14] to-[#020611] sm:h-[520px] lg:h-[640px]",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <Canvas camera={{ position: [0, 0, 3.2], fov: 44 }} dpr={[1, 1.8]} gl={{ antialias: true, alpha: true }}>
        <color attach="background" args={[BRAND.bg]} />
        <fog attach="fog" args={[BRAND.bgSoft, 4.2, 13]} />

        <ambientLight intensity={0.45} />
        <directionalLight position={[2.2, 1.6, 2.4]} intensity={1.2} color={new Color(BRAND.white)} />
        <pointLight position={[-2.2, -1.4, -2.2]} intensity={0.7} color={new Color(BRAND.blue)} />

        <DottedGlobe target={target} />
      </Canvas>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#050A14] to-transparent" />
    </div>
  );
}
