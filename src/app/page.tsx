"use client"
import { useState } from "react"
import Image from "next/image"
import ProductCard from "@/components/ProductCard"
import { Star, MapPin, ThumbsUp, Soup, Wallet } from "lucide-react"
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
  const [activeCategory, setActiveCategory] = useState("Semua")

  const addToCart = (product: Product) => {
    setCartItems([...cartItems, product])
  }

  const products = [
    {
      name: "Cakwe Medan",
      description: "Cakwe gurih dan renyah khas Medan Asli lembut dan tidak keras.",
      image: "/images/cakwe-medan.webp",
      price: 5000,
      category: "Gorengan",
    },
    {
      name: "Bakso Goreng",
      description: "Bakso goreng isi ayam udang, dengan tekstur sedikit kopong.",
      image: "/images/bakso-goreng-ayam-udang.webp",
      price: 5000,
      category: "Gorengan",
    },
    {
      name: "Es Liang Teh",
      description: "Minuman herbal khas Medan, dengan rasa manis yang khas.",
      image: "/images/es-liang-teh.webp",
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
      image: "/images/cakwe-medan.webp",
      price: 5000,
    },
    {
      name: "Bakso Goreng",
      description: "Bakso goreng isi ayam udang, dengan tekstur sedikit kopong.",
      image: "/images/bakso-goreng-ayam-udang.webp",
      price: 5000,
    },
    {
      name: "Es Liang Teh",
      description: "Minuman herbal khas Medan, dengan rasa manis yang khas.",
      image: "/images/es-liang-teh.webp",
      price: 5000,
    },
  ]

  return (
    <main className="min-h-screen overflow-x-hidden flex flex-col bg-gradient-to-b from-blue-100 to-white">
      {/* PromoBanner dibekukan di atas */}
      <PromoBanner />

      <header className="sticky top-[36px] z-50 bg-white shadow">
        <div className="container p-4 space-y-4 text-center">
          <Image
            src="https://i.ibb.co/4Qkft5z/logo-bagojo.png"
            alt="Logo Bagojo"
            width={48}
            height={48}
            className="h-12 w-auto mx-auto"
          />
          <div className="text-xs text-gray-500">
            Beranda / Bekasi / <span className="text-gray-800 font-medium">Cakwe Medan</span>
          </div>
          <h1 className="text-lg sm:text-xl font-bold text-gray-800">Cakwe Medan Kranji - Bekasi</h1>
          <p className="text-sm text-red-500 font-medium">🔴 Tutup – Buka jam 12.00 - 21.00</p>
          <div className="flex flex-wrap justify-center gap-2 text-sm text-gray-600">
            <span className="bg-orange-100 text-orange-700 px-2 py-0.5 rounded-full font-semibold text-xs">
              Super Nagih
            </span>
            <span>• Cepat saji</span>
            <span>• Jajanan</span>
            <span>• Gurih</span>
          </div>
        </div>

        <section className="bg-white border-t border-gray-200 px-4 py-3">
          <div className="container">
            <div className="flex flex-nowrap items-center justify-center gap-6 text-sm text-gray-800">
              <div className="flex flex-col items-center border-r pr-4 min-w-[80px]">
                <div className="flex items-center gap-1">
                  <Star className="text-yellow-500 w-4 h-4" />
                  <span className="font-semibold">4.7</span>
                </div>
                <span className="text-green-600 text-xs">See reviews</span>
              </div>
              <div className="flex flex-col items-center border-r pr-4 min-w-[80px]">
                <div className="flex items-center gap-1">
                  <MapPin className="text-red-500 w-4 h-4" />
                  <span className="font-semibold">4.66 km</span>
                </div>
                <span className="text-green-600 text-xs">Distance</span>
              </div>
              <div className="flex flex-col items-center border-r pr-4 min-w-[80px]">
                <div className="flex items-center gap-1">
                  <span className="text-gray-800 font-semibold">$$</span>
                </div>
                <span className="text-xs text-gray-500">40k–100k</span>
              </div>
              <div className="flex flex-col items-center border-r pr-4 min-w-[100px]">
                <div className="flex items-center gap-1">
                  <ThumbsUp className="text-red-500 w-4 h-4" />
                  <span className="font-semibold">100+ ratings</span>
                </div>
                <span className="text-xs text-gray-500">Great taste</span>
              </div>
              <div className="flex flex-col items-center border-r pr-4 min-w-[100px]">
                <div className="flex items-center gap-1">
                  <Soup className="text-red-500 w-4 h-4" />
                  <span className="font-semibold">60+ ratings</span>
                </div>
                <span className="text-xs text-gray-500">Freshly made</span>
              </div>
              <div className="flex flex-col items-center min-w-[120px]">
                <div className="flex items-center gap-1">
                  <Wallet className="text-red-500 w-4 h-4" />
                  <span className="font-semibold">60+ ratings</span>
                </div>
                <span className="text-xs text-gray-500">Value for money</span>
              </div>
            </div>
          </div>
        </section>
      </header>

      <div className="overflow-x-auto whitespace-nowrap py-4 px-4">
        <div className="container">
          {["Semua", "Gorengan", "Minuman"].map((cat, idx) => (
            <button
              key={idx}
              className={`inline-block text-sm px-4 py-2 mx-1 rounded-full border ${
                activeCategory === cat ? "bg-blue-600 text-white" : "border-blue-600 text-blue-600"
              } hover:bg-blue-600 hover:text-white transition`}
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
          <h3 className="text-xl font-bold">
            Gak perlu repot lagi buat ngemanjain lidahmu, tinggal ketik BAGOJO di Google kesayangan!
          </h3>
          <p>Nikmati BAKSO GORENG Ayam Udang dan CAKWE MEDAN rasa PREMIUM. #Makin di Gigit Makin Nagih!</p>
          <div className="flex justify-center gap-4">
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
          src="https://upload.wikimedia.org/wikipedia/commons/5/5e/WhatsApp_icon.png"
          alt="WhatsApp"
          width={32}
          height={32}
          className="h-8 w-8"
        />
      </a>
    </main>
  )
}
