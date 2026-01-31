import FloatingLines from "@/components/FloatingLines";

export default function Home() {
  return (
    <div
      className="bg-black absolute top-0 left-0 w-full h-full z-0"
    >
      <FloatingLines
        enabledWaves={["top", "middle", "bottom"]}
        // Array - specify line count per wave; Number - same count for all waves
        lineCount={5}
        // Array - specify line distance per wave; Number - same distance for all waves
        lineDistance={10}
        bendRadius={10}
        bendStrength={-0.5}
        interactive={true}
        parallax={false}
        animationSpeed={0.7}
      />
    </div>
  );
}
