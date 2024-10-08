import localFont from "next/font/local"
import "./globals.css"

// Define Overpass Bold and Regular
const overpassBold = localFont({
  src: "./fonts/overpass.bold.ttf",
  variable: "--font-overpass-bold",
  weight: "700", // Weight for bold
})
const overpassRegular = localFont({
  src: "./fonts/overpass.light.ttf",
  variable: "--font-overpass-regular",
  weight: "400", // Weight for regular
})

export const metadata = {
  title: "Rumlyn Host - Creators",
  description: "Your Shelter, Our Mission",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${overpassBold.variable} ${overpassRegular.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
