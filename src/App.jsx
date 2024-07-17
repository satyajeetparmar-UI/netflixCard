import NetflixSeries from "./components/NetflixSeries"
import './components/Netflix.module.css';
import "./components/Netflix.css";


export const App = () => {
  return (
    <>
      <section className="container">
        <h1 className="card-heading">List of Netflix Series</h1>
        <NetflixSeries />
      </section>
    </>
  )
}







export default App
