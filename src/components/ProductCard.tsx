"use client"

import Image from "next/image"

interface ProductCardProps {
  name: string
  description: string
  image: string
  price: number
  onOrder: () => void
}

export default function ProductCard({ name, description, image, price, onOrder }: ProductCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow">
      <div className="relative h-48 w-full">
        <Image
          src={image || "/placeholder.svg"}
          alt={name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-gray-800 mb-2">{name}</h3>
        <p className="text-sm text-gray-600 mb-3 line-clamp-2">{description}</p>
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold text-red-600">Rp {price.toLocaleString("id-ID")}</span>
          <button
            onClick={onOrder}
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
          >
            Pesan
          </button>
        </div>
      </div>
    </div>
  )
}