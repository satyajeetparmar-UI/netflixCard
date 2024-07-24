import "./components/Netflix.css";
import { NumberCount } from "./components/hooks/NumberCount";


export const App = () => {
  return (
    <>
      <section className="container">
        <h1 className="card-heading">Use State</h1>
        <NumberCount />
      </section>
    </>
  )
}







export default App
