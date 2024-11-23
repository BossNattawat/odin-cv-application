import Image from "next/image";
import CVPreview from "./components/CVPreview";

export default function Home() {
  return (
    <div className="flex justify-center">
      <CVPreview/>
    </div>
  );
}
