"use client"
import { useState } from "react"
import Image from "next/image"
import { Star, MapPin, Search, Menu, ChevronDown, ChevronRight } from "lucide-react"

type Product = {
  name: string
  description: string
  image: string
  price: number
  category?: string
}

export default function Home() {
  const [cartItems, setCartItems] = useState<Product[]>([])

  const addToCart = (product: Product) => {
    setCartItems([...cartItems, product])
  }

  const topPicks = [
    {
      name: "Cakwe Medan",
      description: "Cakwe gurih dan renyah khas Medan",
      image: "/images/cakwe-medan.jpg",
      price: 5000,
    },
    {
      name: "Bakso Goreng",
      description: "Bakso goreng isi ayam udang",
      image: "/images/bakso-goreng-ayam-udang.jpg",
      price: 5000,
    },
    {
      name: "Es Liang Teh",
      description: "Minuman herbal khas Medan",
      image: "/images/es-liang-teh.jpg",
      price: 5000,
    },
  ]

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Spacer untuk fixed headers */}
      <div className="h-[180px]"></div>

      {/* App Banner - Fixed */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-gray-50 px-4 py-3 flex items-center justify-between border-b border-gray-200">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center">
            <MapPin className="w-4 h-4 text-white" />
          </div>
          <span className="text-sm font-medium text-gray-800">Switch to the app?</span>
        </div>
        <div className="flex items-center gap-3">
          <button className="bg-green-600 text-white px-4 py-2 rounded-full text-sm font-medium">Open app</button>
          <button className="text-gray-400 text-lg">×</button>
        </div>
      </div>

      {/* Header - Fixed */}
      <div className="fixed top-[52px] left-0 right-0 z-40 bg-white px-4 py-4 flex items-center justify-between border-b border-gray-200">
        <div className="flex items-center gap-3">
          <Menu className="w-6 h-6 text-gray-700" />
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">B</span>
            </div>
            <span className="font-bold text-xl text-gray-800">BAGOJO</span>
          </div>
        </div>
        <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
          <Search className="w-5 h-5 text-green-600" />
        </div>
      </div>

      {/* Location Selector - Fixed */}
      <div className="fixed top-[116px] left-0 right-0 z-30 px-4 py-4 bg-white border-b border-gray-200">
        <div className="flex items-center justify-between bg-gray-50 rounded-full px-4 py-3">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-red-500" />
            <span className="font-medium text-gray-800">Bekasi</span>
          </div>
          <ChevronDown className="w-4 h-4 text-gray-500" />
        </div>
      </div>

      {/* Restaurant Header - Scrollable */}
      <div className="bg-white px-4 py-4 mt-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <Image
              src="/images/logo-bagojo.png"
              alt="Logo Bagojo"
              width={120}
              height={56}
              className="w-18 h-14 rounded-lg"
            />
            <div>
              <h1 className="text-xl font-bold text-gray-800">Cakwe Medan Kranji</h1>
              <div className="flex items-center gap-2 mt-1">
                <span className="bg-orange-600 text-white px-2 py-1 rounded text-xs font-medium">Super Nagih</span>
                <span className="text-sm text-gray-600">Fast food, Snacks</span>
              </div>
            </div>
          </div>
          <ChevronRight className="w-5 h-5 text-gray-400" />
        </div>

        {/* Restaurant Stats - Exact GoFood Style */}
        <div className="grid grid-cols-4 gap-1 text-center">
          <div>
            <div className="flex items-center justify-center gap-1 mb-1">
              <Star className="w-4 h-4 text-yellow-500 fill-current" />
              <span className="font-bold text-gray-800">4.8</span>
            </div>
            <span className="text-xs text-green-600 font-medium">See reviews</span>
          </div>
          <div>
            <div className="flex items-center justify-center gap-1 mb-1">
              <MapPin className="w-4 h-4 text-red-500" />
              <span className="font-bold text-gray-800">4.74 km</span>
            </div>
            <span className="text-xs text-gray-600">Distance</span>
          </div>
          <div>
            <div className="mb-1">
              <span className="font-bold text-gray-800">$$$</span>
              <span className="text-gray-300">$</span>
            </div>
            <span className="text-xs text-gray-600">5k-10k</span>
          </div>
          <div>
            <div className="flex items-center justify-center gap-1 mb-1">
              <div className="w-4 h-4 bg-green-600 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">✓</span>
              </div>
              <span className="font-bold text-gray-800">Halal</span>
            </div>
            <span className="text-xs text-gray-600">Certified</span>
          </div>
        </div>
      </div>

      {/* The People's Favorites - Exact GoFood Style */}
      <div className="bg-white px-4 py-6 mt-4">
        <h2 className="text-lg font-bold text-gray-800 mb-6">Cemilan's favorites</h2>

        <div className="space-y-6">
          {topPicks.map((product, index) => (
            <div key={index} className="flex items-start justify-between">
              <div className="flex-1 pr-4">
                <h3 className="font-semibold text-gray-800 text-base mb-1">{product.name}</h3>
                <p className="text-sm text-gray-600 mb-3 leading-relaxed">{product.description}</p>
                <div className="flex items-center gap-2">
                  <span className="font-bold text-gray-800">{product.price.toLocaleString("id-ID")}</span>
                </div>
                <div className="flex items-center gap-1 mt-2 text-xs text-gray-500">
                  <span>🍽️</span>
                  <span>Customizable</span>
                </div>
              </div>
              <div className="flex flex-col items-end gap-3">
                <div className="relative w-24 h-24">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <button
                  onClick={() => addToCart(product)}
                  className="border-2 border-green-600 text-green-600 px-6 py-2 rounded-full text-sm font-medium hover:bg-green-50 transition-colors"
                >
                  Add
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Menu Button - Exact GoFood Style */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t p-4">
        <button className="w-full bg-red-600 text-white py-3 rounded-lg font-medium flex items-center justify-center gap-2">
          <Menu className="w-5 h-5" />
          Menu
        </button>
      </div>

      {/* Spacer for fixed bottom button */}
      <div className="h-20"></div>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/6281299686378"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-24 right-4 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full p-3 shadow-lg"
      >
        <Image
          src="/images/whatsapp.png"
          alt="WhatsApp"
          width={24}
          height={24}
          className="h-6 w-6"
        />
      </a>
    </main>
  )
}
