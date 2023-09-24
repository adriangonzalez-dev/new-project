
import { Footer } from "./components/Footer"
import { FormContact } from "./components/FormContact"
import { Gallery } from "./components/Gallery"
import { Header } from "./components/Header"
import { Hero } from "./components/Hero"
import { Map } from "./components/Map"
import { Section } from "./components/Section"

function App() {


  return (
    <main data-theme='light'>
      <Header/>

      <Hero/>

      <Section/>

      <Section/>

      <Gallery/>

      <section className="flex flex-col items-center justify-center w-full bg-gray-100 py-2">
        <h1 className="text-center text-2xl sm:text-5xl py-5 font-medium">Contactanos</h1>
        <p className="text-center font-medium w-1/2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi, similique? Sit, earum itaque? Provident maxime tenetur nulla distinctio reiciendis adipisci unde placeat vel, saepe, consequuntur voluptas beatae. Ipsa, cumque officiis?</p>
        <article className="flex w-full px-2 items-center justify-center flex-wrap gap-2 my-2">
          <Map/>
          <FormContact/>
        </article>
      </section>
      <Footer/>
    </main>
  )
}

export default App
