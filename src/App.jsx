import { DerivedState } from "./components/DerivedState";
import "./components/Netflix.css";


export const App = () => {
  return (
    <>
      <section className="container">
        <h1 className="card-heading">Derived State</h1>
        <DerivedState />
      </section>
    </>
  )
}




export default App