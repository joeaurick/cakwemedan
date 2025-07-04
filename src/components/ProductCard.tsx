import { useState } from "react";
import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface ProductCardProps {
  name: string;
  description: string;
  image: string;
  price: number;
  onOrder: () => void;
}

export default function ProductCard({
  name,
  description,
  image,
  price,
  onOrder,
}: ProductCardProps) {
  const [imgSrc, setImgSrc] = useState(image);

  return (
    <div className="bg-white rounded-xl shadow hover:shadow-md transition overflow-hidden">
      <Image
        src={imgSrc}
        alt={name}
        width={400}
        height={300}
        className="w-full h-48 object-cover"
        onError={() => setImgSrc("/images/default.webp")} // fallback manual
      />
      <div className="p-4 space-y-2">
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-gray-500 text-sm">{description}</p>
        <p className="text-blue-600 font-bold text-base">
          Rp{price.toLocaleString()}
        </p>
        <Button className="w-full mt-2" onClick={onOrder}>
          <ShoppingCart className="mr-2 h-4 w-4" />
          Pesan Sekarang
        </Button>
      </div>
    </div>
  );
}
