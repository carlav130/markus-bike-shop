import { BikeConfigurator } from "./components/BikeConfigurator/BikeConfigurator"
import { Clients } from "./components/Clients/Clients"
import { Footer } from "./components/Common/Footer/Footer"
import { Header } from "./components/Common/Header/Header"

function App() {
  return (
    <>
      <Header />
      <BikeConfigurator />
      <Clients />
      <Footer />
    </>
  )
}

export default App
