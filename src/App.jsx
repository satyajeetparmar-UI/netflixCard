import { LiftingState } from "./components/LiftStateUp";
import "./components/Netflix.css";


export const App = () => {
  return (
    <>
      <section className="container">
        <h1 className="card-heading">Derived State</h1>
        <LiftingState />
      </section>
    </>
  )
}




export default App