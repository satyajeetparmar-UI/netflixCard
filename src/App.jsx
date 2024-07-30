import { DerivedState } from "./components/DerivedState";
import "./components/Netflix.css";


// Derived state is any state that can be computed based on other state or props. It is not stored directly in the components state but is calculated when needed. This approach helps avoid duplication and keeps the state simpler and more manageable.

// Ex: const userCount = user.lenght;

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