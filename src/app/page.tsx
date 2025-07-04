"use client"

import { useState } from "react"
import Image from "next/image"
import { Star, MapPin, Menu, ChevronDown, ChevronRight, Instagram, Facebook, Twitter, Clock, Phone } from "lucide-react"

type Product = {
  name: string
  description: string
  image: string
  price: number
  category?: string
}

type Review = {
  name: string
  rating: number
  comment: string
  date: string
  avatar: string
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

  const reviews: Review[] = [
    {
      name: "Sari Dewi",
      rating: 5,
      comment: "Cakwe medan nya enak banget! Gurih dan renyah, pasti balik lagi",
      date: "2 hari lalu",
      avatar: "/images/icon-public.png",
    },
    {
      name: "Budi Santoso",
      rating: 5,
      comment: "Bakso goreng isi ayam udang juara! Porsi besar, harga terjangkau",
      date: "1 minggu lalu",
      avatar: "/images/icon-public.png",
    },
    {
      name: "Maya Putri",
      rating: 4,
      comment: "Es liang teh nya seger banget, cocok buat cuaca panas",
      date: "3 hari lalu",
      avatar: "/images/icon-public.png",
    },
  ]

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        
        @keyframes pulse-glow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(34, 197, 94, 0.4);
          }
          50% {
            box-shadow: 0 0 30px rgba(34, 197, 94, 0.8);
          }
        }
        
        .shimmer-effect {
          position: relative;
          overflow: hidden;
        }
        
        .shimmer-effect::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.3),
            transparent
          );
          animation: shimmer 2s infinite;
        }
        
        .whatsapp-glow {
          animation: pulse-glow 2s infinite;
        }
      `}</style>

      {/* Spacer untuk fixed headers */}
      <div className="h-[120px] sm:h-[128px]"></div>

      {/* Header - Fixed */}
      <div className="fixed top-0 left-0 right-0 z-40 bg-white px-3 sm:px-4 py-3 sm:py-4 flex items-center justify-between border-b border-gray-200">
        <div className="flex items-center gap-2 sm:gap-3">
          <Menu className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" />
          <div className="flex items-center gap-2">
            <Image
              src="/images/logo-bagojo.png"
              alt="Logo Bagojo"
              width={120}
              height={56}
              className="w-15 h-12 sm:w-8 sm:h-8 rounded-lg"
            />
          </div>
        </div>
      </div>

      {/* Location Selector - Fixed */}
      <div className="fixed top-[52px] sm:top-[64px] left-0 right-0 z-30 px-3 sm:px-4 py-3 sm:py-4 bg-white border-b border-gray-200">
        <div className="flex items-center justify-between bg-gray-50 rounded-full px-3 sm:px-4 py-2 sm:py-3">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-red-500" />
            <span className="font-medium text-gray-800 text-sm sm:text-base">Bekasi</span>
          </div>
          <ChevronDown className="w-4 h-4 text-gray-500" />
        </div>
      </div>

      {/* Hero Banner Section */}
      <div className="relative bg-white px-3 sm:px-4 py-4 sm:py-6 mt-2 sm:mt-4 overflow-hidden">
        <div className="relative">
          <div className="bg-gradient-to-r from-blue-600 to-black rounded-xl sm:rounded-2xl p-4 sm:p-6 text-white relative overflow-hidden">
            <div className="relative z-10">
              <div className="mb-3 sm:mb-4">
                <span className="bg-white bg-opacity-20 px-2 sm:px-3 py-1 rounded-full text-xs font-medium">
                  SPESIAL
                </span>
                <h2 className="text-xl sm:text-2xl font-bold mt-2">Cemilan Kekinian Serba 5.000 !!</h2>
                <p className="text-white/90 mt-1 text-sm sm:text-base">Setiap pembelian 3 porsi gratis 1</p>
              </div>
              <button className="bg-white text-gray-800 px-4 sm:px-6 py-2 rounded-full font-medium text-sm">
                Lihat Promo
              </button>
            </div>
            <div className="absolute right-0 top-0 w-24 sm:w-32 h-24 sm:h-32 bg-white bg-opacity-10 rounded-full -mr-12 sm:-mr-16 -mt-12 sm:-mt-16"></div>
            <div className="absolute right-6 sm:right-8 bottom-0 w-16 sm:w-20 h-16 sm:h-20 bg-white bg-opacity-10 rounded-full -mb-8 sm:-mb-10"></div>
          </div>
        </div>
      </div>

      {/* Restaurant Header - Scrollable */}
      <div className="bg-white px-3 sm:px-4 py-3 sm:py-4 mt-2 sm:mt-4">
        <div className="flex items-center justify-between mb-3 sm:mb-4">
          <div className="flex items-center gap-2 sm:gap-3 flex-1 min-w-0">
            <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-r from-blue-600 to-black rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-white font-bold text-xs sm:text-sm">B</span>
            </div>
            <div className="min-w-0 flex-1">
              <h1 className="text-lg sm:text-xl font-bold text-gray-800 truncate">Cakwe Medan Kranji</h1>
              <div className="flex items-center gap-2 mt-1 flex-wrap">
                <span className="bg-gradient-to-r from-blue-600 to-black text-white px-2 py-1 rounded text-xs font-medium flex items-center gap-1 whitespace-nowrap">
                  <span>👍</span>
                  Super Nagih
                </span>
                <span className="text-xs sm:text-sm text-gray-600">Fast food, Snacks</span>
              </div>
            </div>
          </div>
          <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 flex-shrink-0" />
        </div>

        {/* Restaurant Stats - Mobile Optimized */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-1 text-center">
          <div className="p-2 sm:p-1">
            <div className="flex items-center justify-center gap-1 mb-1">
              <Star className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-500 fill-current" />
              <span className="font-bold text-gray-800 text-sm sm:text-base">4.8</span>
            </div>
            <span className="text-xs text-blue-600 font-medium">Reviews</span>
          </div>
          <div className="p-2 sm:p-1">
            <div className="flex items-center justify-center gap-1 mb-1">
              <MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-red-500" />
              <span className="font-bold text-gray-800 text-sm sm:text-base">4.74 km</span>
            </div>
            <span className="text-xs text-gray-600">Distance</span>
          </div>
          <div className="p-2 sm:p-1">
            <div className="mb-1">
              <span className="font-bold text-gray-800 text-sm sm:text-base">$$$</span>
              <span className="text-gray-300">$</span>
            </div>
            <span className="text-xs text-gray-600">5k-10k</span>
          </div>
          <div className="p-2 sm:p-1">
            <div className="flex items-center justify-center gap-1 mb-1">
              <div className="w-3 h-3 sm:w-4 sm:h-4 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">✓</span>
              </div>
              <span className="font-bold text-gray-800 text-sm sm:text-base">Halal</span>
            </div>
            <span className="text-xs text-gray-600">Certified</span>
          </div>
        </div>
      </div>

      {/* The People's Favorites - Mobile Optimized */}
      <div className="bg-white px-3 sm:px-4 py-4 sm:py-6 mt-2 sm:mt-4">
        <h2 className="text-lg font-bold text-gray-800 mb-4 sm:mb-6">Cemilan's favorites</h2>
        <div className="space-y-4 sm:space-y-6">
          {topPicks.map((product, index) => (
            <div key={index} className="flex items-start justify-between gap-3">
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-gray-800 text-sm sm:text-base mb-1">{product.name}</h3>
                <p className="text-xs sm:text-sm text-gray-600 mb-2 sm:mb-3 leading-relaxed line-clamp-2">
                  {product.description}
                </p>
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-bold text-gray-800 text-sm sm:text-base">
                    Rp {product.price.toLocaleString("id-ID")}
                  </span>
                </div>
                <div className="flex items-center gap-1 text-xs text-gray-500">
                  <span>🍽️</span>
                  <span>Customizable</span>
                </div>
              </div>
              <div className="flex flex-col items-end gap-2 sm:gap-3 flex-shrink-0">
                <div className="relative w-20 h-20 sm:w-24 sm:h-24">
                  <Image
                    src={product.image || "/placeholder.svg?height=96&width=96"}
                    alt={product.name}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <button
                  onClick={() => addToCart(product)}
                  className="border-2 border-blue-600 text-blue-600 px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-medium hover:bg-blue-50 transition-colors min-w-[60px] sm:min-w-[80px]"
                >
                  Add
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Customer Reviews Section - Mobile Optimized */}
      <div className="bg-white px-3 sm:px-4 py-4 sm:py-6 mt-2 sm:mt-4">
        <div className="flex items-center justify-between mb-4 sm:mb-6">
          <h2 className="text-lg font-bold text-gray-800">Ulasan Pelanggan</h2>
          <div className="flex items-center gap-1 sm:gap-2">
            <Star className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-500 fill-current" />
            <span className="font-bold text-gray-800 text-sm sm:text-base">4.8</span>
            <span className="text-xs sm:text-sm text-gray-600">(127)</span>
          </div>
        </div>

        {/* Rating Breakdown - Mobile Optimized */}
        <div className="mb-4 sm:mb-6">
          <div className="grid grid-cols-5 gap-1 sm:gap-2 text-center">
            {[5, 4, 3, 2, 1].map((star) => (
              <div key={star} className="flex flex-col items-center">
                <div className="flex items-center gap-0.5 sm:gap-1">
                  <span className="text-xs text-gray-600">{star}</span>
                  <Star className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-yellow-500 fill-current" />
                </div>
                <div className="w-full bg-gray-200 rounded-full h-1 mt-1">
                  <div
                    className="bg-blue-600 h-1 rounded-full"
                    style={{ width: star === 5 ? "80%" : star === 4 ? "15%" : "5%" }}
                  ></div>
                </div>
                <span className="text-xs text-gray-500 mt-1">{star === 5 ? "102" : star === 4 ? "19" : "6"}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Reviews List - Mobile Optimized */}
        <div className="space-y-3 sm:space-y-4">
          {reviews.map((review, index) => (
            <div key={index} className="border-b border-gray-100 pb-3 sm:pb-4 last:border-b-0">
              <div className="flex items-start gap-2 sm:gap-3">
                <Image
                  src={review.avatar || "/placeholder.svg"}
                  alt={review.name}
                  width={32}
                  height={32}
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover flex-shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-semibold text-gray-800 text-xs sm:text-sm truncate">{review.name}</h4>
                    <span className="text-xs text-gray-500 flex-shrink-0">{review.date}</span>
                  </div>
                  <div className="flex items-center gap-0.5 sm:gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-2.5 h-2.5 sm:w-3 sm:h-3 ${
                          i < review.rating ? "text-yellow-500 fill-current" : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{review.comment}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button className="w-full mt-3 sm:mt-4 py-3 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition-colors text-sm sm:text-base">
          Lihat Semua Ulasan
        </button>
      </div>

      {/* Footer Section - Mobile Optimized */}
      <footer className="bg-gradient-to-r from-blue-600 to-black text-white mt-4 sm:mt-8">
        <div className="max-w-6xl mx-auto px-3 sm:px-4 py-8 sm:py-12">
          <div className="grid gap-6 sm:gap-8 lg:grid-cols-2">
            {/* Left Content */}
            <div className="space-y-4 sm:space-y-6">
              {/* Logo */}
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-bold text-lg sm:text-xl">B</span>
                </div>
                <span className="text-xl sm:text-2xl font-bold">BAGOJO</span>
              </div>

              {/* Store Info */}
              <div className="space-y-3 sm:space-y-4">
                <h3 className="text-lg sm:text-xl font-bold">Informasi Toko</h3>
                <div className="space-y-2 sm:space-y-3">
                  <div className="flex items-start gap-2 sm:gap-3">
                    <Clock className="w-4 h-4 sm:w-5 sm:h-5 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-sm sm:text-base">Jam Operasional</p>
                      <p className="text-xs sm:text-sm opacity-90">Senin - Minggu: 12:00 - 21:00</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 sm:gap-3">
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-sm sm:text-base">Hubungi Kami</p>
                      <p className="text-xs sm:text-sm opacity-90">+62 812-9968-6378</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 sm:gap-3">
                    <MapPin className="w-4 h-4 sm:w-5 sm:h-5 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-sm sm:text-base">Alamat</p>
                      <p className="text-xs sm:text-sm opacity-90">Bekasi, Jawa Barat</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Main Heading - Mobile Optimized */}
              <div className="space-y-3 sm:space-y-4">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight">
                  <span className="block">Pusat Cemilan Gurih Bekasi.</span>
                  <span className="block text-lg sm:text-xl lg:text-2xl mt-1">#MakinDiGigitMakinNagih!</span>
                </h2>
                <p className="text-sm sm:text-base lg:text-lg opacity-90">
                  Nikmati berbagai macam makanan, promo menarik, dan fitur eksklusif di Gerai BAGOJO.
                </p>
              </div>

              {/* App Download Buttons - Mobile Optimized */}
              <div className="flex flex-col gap-3 sm:gap-4">
                <a
                  href="#"
                  className="bg-black text-white px-4 sm:px-6 py-3 rounded-lg flex items-center gap-2 sm:gap-3 hover:bg-gray-800 transition-colors"
                >
                  <div className="w-6 h-6 sm:w-8 sm:h-8 flex-shrink-0">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                      <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs opacity-75">GET IT ON</div>
                    <div className="font-semibold text-sm sm:text-base">Google Play</div>
                  </div>
                </a>
                <a
                  href="#"
                  className="bg-black text-white px-4 sm:px-6 py-3 rounded-lg flex items-center gap-2 sm:gap-3 hover:bg-gray-800 transition-colors"
                >
                  <div className="w-6 h-6 sm:w-8 sm:h-8 flex-shrink-0">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                      <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs opacity-75">Download on the</div>
                    <div className="font-semibold text-sm sm:text-base">App Store</div>
                  </div>
                </a>
              </div>

              {/* Language Selector */}
              <div className="relative inline-block">
                <select className="bg-white text-gray-800 px-3 sm:px-4 py-2 rounded-full pr-6 sm:pr-8 appearance-none cursor-pointer text-sm sm:text-base">
                  <option>🇮🇩 Bahasa Indonesia</option>
                  <option>🇺🇸 English</option>
                </select>
                <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-3 h-3 sm:w-4 sm:h-4 text-gray-600 pointer-events-none" />
              </div>
            </div>

            {/* Right Content - Google Maps */}
            <div className="space-y-4 sm:space-y-6">
              <h3 className="text-lg sm:text-xl font-bold">Lokasi Kami</h3>
              <div className="rounded-xl sm:rounded-2xl overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.249925117834!2d106.97805088011401!3d-6.2307466776613065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e698d924738095b%3A0x8d2a3f42d3a275c2!2sBakso%20Goreng%20Ayam%20Udang%20-%20BAGOJO!5e0!3m2!1sid!2sth!4v1751649894234!5m2!1sid!2sth"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full sm:h-[300px]"
                ></iframe>
              </div>
              <div className="bg-white bg-opacity-10 rounded-xl p-3 sm:p-4">
                <h4 className="font-semibold mb-2 text-sm sm:text-base">Bakso Goreng Ayam Udang - BAGOJO</h4>
                <p className="text-xs sm:text-sm opacity-90">Jl. Raya Bekasi, Bekasi Barat, Kota Bekasi, Jawa Barat</p>
                <div className="flex items-center gap-2 mt-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-xs sm:text-sm">Buka sekarang</span>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Links - Mobile Optimized */}
          <div className="border-t border-blue-500 mt-8 sm:mt-12 pt-6 sm:pt-8">
            <div className="flex flex-col gap-4 sm:gap-6">
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 text-xs sm:text-sm">
                <a href="#" className="hover:underline opacity-90 hover:opacity-100">
                  Privacy policy
                </a>
                <a href="#" className="hover:underline opacity-90 hover:opacity-100">
                  Terms of service
                </a>
                <div className="flex items-center gap-2">
                  <span className="opacity-90">Follow us</span>
                  <div className="flex gap-2">
                    <a href="#" className="w-5 h-5 sm:w-6 sm:h-6 hover:opacity-75">
                      <Instagram className="w-full h-full" />
                    </a>
                    <a href="#" className="w-5 h-5 sm:w-6 sm:h-6 hover:opacity-75">
                      <Facebook className="w-full h-full" />
                    </a>
                    <a href="#" className="w-5 h-5 sm:w-6 sm:h-6 hover:opacity-75">
                      <Twitter className="w-full h-full" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Copyright */}
            <div className="mt-4 sm:mt-6 text-xs sm:text-sm opacity-75">
              <p>© 2025 BAGOJO | Street Food - Makin di Gigit Makin Nagih!</p>
            </div>
          </div>
        </div>
      </footer>

      {/* Bottom Order Button - With Shimmer Animation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t p-3 sm:p-4 z-40 safe-area-pb">
        <a
          href="#order-form" // Ganti dengan URL atau ID yang diinginkan
          className="w-full bg-gradient-to-r from-blue-600 to-black text-white py-3 sm:py-3 rounded-lg font-medium flex items-center justify-center gap-2 text-sm sm:text-base min-h-[48px] shimmer-effect hover:from-blue-700 hover:to-gray-900 transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]"
        >
          Pesan Sekarang!
        </a>
      </div>

      {/* Spacer for fixed bottom button */}
      <div className="h-[72px] sm:h-20"></div>

      {/* WhatsApp Button - With Glow Animation */}
      <a
        href="https://wa.me/6281299686378"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-[84px] sm:bottom-24 right-3 sm:right-4 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full p-3 min-w-[48px] min-h-[48px] flex items-center justify-center whatsapp-glow transition-all duration-300 transform hover:scale-110 active:scale-95"
      >
        <Image
          src="/images/whatsapp.png"
          alt="WhatsApp"
          width={20}
          height={20}
          className="h-5 w-5 sm:h-6 sm:w-6"
        />
      </a>
    </main>
  )
}
