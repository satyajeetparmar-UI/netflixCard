import NetflixSeries from "./components/NetflixSeries"
import './components/Netflix.module.css';
import "./components/Netflix.css";
import { EventHandling } from "./components/EventHandling";


export const App = () => {
  return (
    <>
      <section className="container">
        {/* <h1 className="card-heading">List of Netflix Series</h1>
        <NetflixSeries /> */}
        <EventHandling />
      </section>
    </>
  )
}







export default App
