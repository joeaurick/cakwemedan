"use client"
import { useState } from "react"
import Image from "next/image"
import ProductCard from "@/components/ProductCard"
import { Star, MapPin, ThumbsUp, Soup } from 'lucide-react'
import PromoBanner from "@/components/PromoBanner"

type Product = {
  name: string
  description: string
  image: string
  price: number
  category?: string
}

export default function Home() {
  console.log("✅ Home Page Loaded")
  const [cartItems, setCartItems] = useState<Product[]>([])
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [activeCategory, setActiveCategory] = useState("Semua")

  const addToCart = (product: Product) => {
    setCartItems([...cartItems, product])
  }

  const getTotal = () => {
    return cartItems.reduce((total, item) => total + item.price, 0)
  }

  const products = [
    {
      name: "Cakwe Medan",
      description: "Cakwe gurih dan renyah khas Medan Asli lembut dan tidak keras.",
      image: "/images/cakwe-medan.jpg",
      price: 5000,
      category: "Gorengan",
    },
    {
      name: "Bakso Goreng",
      description: "Bakso goreng isi ayam udang, dengan tekstur sedikit kopong.",
      image: "/images/bakso-goreng-ayam-udang.jpg",
      price: 5000,
      category: "Gorengan",
    },
    {
      name: "Es Liang Teh",
      description: "Minuman herbal khas Medan, dengan rasa manis yang khas.",
      image: "/images/es-liang-teh.jpg",
      price: 5000,
      category: "Minuman",
    },
  ]

  const filteredProducts =
    activeCategory === "Semua" ? products : products.filter((product) => product.category === activeCategory)

  const topPicks = [
    {
      name: "Cakwe Medan",
      description: "Cakwe gurih dan renyah khas Medan Asli lembut dan tidak keras.",
      image: "/images/cakwe-medan.jpg",
      price: 5000,
    },
    {
      name: "Bakso Goreng",
      description: "Bakso goreng isi ayam udang, dengan tekstur sedikit kopong.",
      image: "/images/bakso-goreng-ayam-udang.jpg",
      price: 5000,
    },
    {
      name: "Es Liang Teh",
      description: "Minuman herbal khas Medan, dengan rasa manis yang khas.",
      image: "/images/es-liang-teh.jpg",
      price: 5000,
    },
  ]

  return (
    <main className="min-h-screen overflow-x-hidden flex flex-col bg-gradient-to-b from-blue-100 to-white">
      {/* PromoBanner - Fixed di paling atas */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <PromoBanner />
      </div>
      {/* Header - Fixed tepat di bawah PromoBanner */}
      <div className="fixed top-[36px] left-0 right-0 z-40 bg-white shadow-md">
        <div className="px-3 py-2 max-w-full">
          {/* Desktop Layout */}
          <div className="hidden sm:block">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-3">
                <Image
                  src="https://i.ibb.co/4Qkft5z/logo-bagojo.png"
                  alt="Logo Bagojo"
                  width={32}
                  height={32}
                  className="h-8 w-auto"
                />
                <div>
                  <h1 className="text-sm font-bold text-gray-800">Cakwe Medan Kranji</h1>
                  <p className="text-xs text-red-500">🔴 Tutup – Buka 12.00-21.00</p>
                </div>
              </div>
              <div className="text-right">
                <div className="text-xs text-gray-500">Bekasi / Cakwe Medan</div>
                <span className="bg-orange-100 text-orange-700 px-2 py-0.5 rounded-full font-semibold text-xs">
                  Super Nagih
                </span>
              </div>
            </div>
            <div className="flex items-center justify-center gap-4 text-xs text-gray-600 border-t pt-2">
              <div className="flex items-center gap-1">
                <Star className="text-yellow-500 w-3 h-3" />
                <span className="font-semibold">4.7</span>
              </div>
              <div className="flex items-center gap-1">
                <MapPin className="text-red-500 w-3 h-3" />
                <span>4.66 km</span>
              </div>
              <div className="flex items-center gap-1">
                <ThumbsUp className="text-red-500 w-3 h-3" />
                <span>100+ ratings</span>
              </div>
              <div className="flex items-center gap-1">
                <Soup className="text-red-500 w-3 h-3" />
                <span>Fresh</span>
              </div>
            </div>
          </div>

          {/* Mobile Layout - Ultra Compact & Clean */}
          <div className="block sm:hidden">
            <div className="flex items-center justify-between py-1">
              {/* Left side - Logo & Info */}
              <div className="flex items-center gap-2 flex-1 min-w-0">
                <Image
                  src="/images/logo-bagojo.png"
                  alt="Logo Bagojo"
                  width={28}
                  height={28}
                  className="h-7 w-7 flex-shrink-0"
                />
                <div className="min-w-0 flex-1">
                  <h1 className="text-sm font-bold text-gray-800 truncate">Cakwe Medan Kranji</h1>
                  <div className="flex items-center gap-3 text-xs">
                    <span className="text-red-500 flex items-center gap-1">
                      🔴 <span className="hidden xs:inline">Tutup</span>
                    </span>
                    <div className="flex items-center gap-1">
                      <Star className="text-yellow-500 w-3 h-3" />
                      <span className="font-semibold">4.7</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="text-red-500 w-3 h-3" />
                      <span className="text-gray-600">4.66km</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right side - Badge */}
              <div className="flex-shrink-0 ml-2">
                <span className="bg-orange-100 text-orange-700 px-2 py-1 rounded-full font-semibold text-xs whitespace-nowrap">
                  Super Nagih
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Spacer untuk memberikan ruang karena header sekarang fixed */}
      <div className="h-[36px]"></div> {/* Space untuk PromoBanner */}
      <div className="h-[70px] sm:h-[100px]"></div> {/* Space untuk Header - lebih kecil di mobile */}
      <div className="overflow-x-auto whitespace-nowrap py-4 px-4">
        <div className="container">
          {["Semua", "Gorengan", "Minuman"].map((cat, idx) => (
            <button
              key={idx}
              className={`inline-block text-sm px-4 py-2 mx-1 rounded-full border ${activeCategory === cat ? "bg-blue-600 text-white" : "border-blue-600 text-blue-600"} hover:bg-blue-600 hover:text-white transition`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>
      <div className="container py-6 space-y-6">
        <h2 className="text-lg font-semibold text-gray-800">Cemilan's Top Picks</h2>
        <div className="flex overflow-x-auto space-x-4 py-2">
          {topPicks.map((product, index) => (
            <div key={index} className="flex-shrink-0 w-48">
              <ProductCard
                name={product.name}
                description={product.description}
                image={product.image}
                price={product.price}
                onOrder={() => addToCart(product)}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="container py-6 space-y-6">
        <h2 className="text-lg font-semibold text-gray-800">Menu Kategori: {activeCategory}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {filteredProducts.map((product, index) => (
            <ProductCard
              key={index}
              name={product.name}
              description={product.description}
              image={product.image}
              price={product.price}
              onOrder={() => addToCart(product)}
            />
          ))}
        </div>
      </div>
      <div className="container py-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-4 text-center">Lokasi Cakwe Medan Kami</h2>
        <div className="w-full h-64">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31729.99939959203!2d106.94790287910156!3d-6.230746700000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e698d924738095b%3A0x8d2a3f42d3a275c2!2sBakso%20Goreng%20Ayam%20Udang%20-%20BAGOJO!5e0!3m2!1sid!2sth!4v1751563720287!5m2!1sid!2sth"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-xl shadow"
          ></iframe>
        </div>
      </div>
      <footer className="bg-[#ee3131] text-white py-10 mt-10 text-center text-sm">
        <div className="container space-y-4">
          <h3 className="text-lg sm:text-xl font-bold">
            Gak perlu repot lagi buat ngemanjain lidahmu, tinggal ketik BAGOJO di Google kesayangan!
          </h3>
          <p className="text-sm">
            Nikmati BAKSO GORENG Ayam Udang dan CAKWE MEDAN rasa PREMIUM. #Makin di Gigit Makin Nagih!
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 items-center">
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              alt="Get it on Google Play"
              width={120}
              height={40}
              className="h-10"
            />
            <Image
              src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
              alt="Download on the App Store"
              width={120}
              height={40}
              className="h-10"
            />
          </div>
          <div className="text-xs text-white/80 mt-6">
            © 2025 BAGOJO | Cakwe Medan Bagojo berlokasi di Kranji, Bekasi Barat.
          </div>
        </div>
      </footer>
      <a
        href="https://wa.me/6281299686378"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 z-50 animate-bounce bg-green-500 hover:bg-green-600 text-white rounded-full p-3 shadow-lg"
      >
        <Image
          src="/images/whatsapp.png"
          alt="WhatsApp"
          width={32}
          height={32}
          className="h-8 w-8"
        />
      </a>
    </main>
  )
}