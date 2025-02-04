import Header from "./components/header"
import Hero from "./components/hero"
import Services from "./components/services"
import Infrastructure from "./components/infrastructure"
import Portfolio from "./components/portfolio"
import Footer from "./components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Services />
        <Infrastructure />
        <Portfolio />
      </main>
      <Footer />
    </div>
  )
}

