import './globals.css';
import { ReactNode } from 'react';

export const metadata = {
  title: "Cakwe Medan Bagojo - Cakwe Gurih Halal di Kranji Bekasi",
  description:
    "Cakwe Medan Bagojo, jajanan halal khas Kranji Bekasi. Cakwe gurih, bakso goreng ayam udang, dan es liang teh Medan, fresh setiap hari!",
  alternates: {
    canonical: "https://cakwemedan.vercel.app/",
  },
  openGraph: {
    type: "website",
    url: "https://cakwemedan.vercel.app/",
    title: "Cakwe Medan Bagojo - Cakwe Gurih Halal di Kranji Bekasi",
    description:
      "Cakwe Medan Bagojo, jajanan halal khas Kranji Bekasi. Cakwe gurih, bakso goreng ayam udang, dan es liang teh Medan, fresh setiap hari!",
    images: [
      {
        url: "/images/cakwe-medan.webp",
        width: 1200,
        height: 630,
        alt: "Cakwe Medan",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@cakwebagojo",
    title: "Cakwe Medan Bagojo - Cakwe Gurih Halal di Kranji Bekasi",
    description:
      "Cakwe Medan Bagojo, jajanan halal khas Kranji Bekasi. Cakwe gurih, bakso goreng ayam udang, dan es liang teh Medan, fresh setiap hari!",
    images: ["/images/cakwe-medan.webp"],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="id">
      <head>
        <meta name="google-site-verification" content="20y4xxpH-qzsOpT28K9G4t9TzsuYUnE1JJAKEY__RU4" />
        <link rel="icon" href="/images/favicon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Restaurant",
              name: "Cakwe Medan Bagojo",
              image: "/images/cakwe-medan.webp",
              "@id": "https://cakwemedan.vercel.app",
              url: "https://cakwemedan.vercel.app",
              telephone: "+62-812-3456-7890",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Jl. Kranji Raya, dekat RM Sudirman",
                addressLocality: "Bekasi",
                postalCode: "17135",
                addressCountry: "ID",
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                    "Sunday",
                  ],
                  opens: "12:00",
                  closes: "21:30",
                },
              ],
              servesCuisine: ["Cakwe", "Bakso Goreng", "Es Liang Teh Medan"],
              priceRange: "Rp5.000 - Rp10.000",
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                reviewCount: "159988",
              },
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
