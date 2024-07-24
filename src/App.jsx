// import './components/Netflix.module.css';
import "./components/Netflix.css";
import { EventPropagation } from "./components/EventPropagation";


export const App = () => {
  return (
    <>
      <section className="container">
        <h1 className="card-heading">Event Propagation</h1>
        <EventPropagation />
      </section>
    </>
  )
}







export default App
