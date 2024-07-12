import seriesData from "../api/seriesData.json"
import { SeriesCard } from "./SeriesCard"

const NetflixSeries = () => {
  return (
    <ul>
      {/* if you are using reutrn  */}
      {/* {seriesData.map((curElem) => {
        return <SeriesCard key={curElem.id} curElem={curElem} />
      })} */}

      {/* if you are using single line of code do not reuired return */}
      {seriesData.map((curElem) => (
        <SeriesCard key={curElem.id} data={curElem} />
      ))}
    </ul>
  )
}

export default NetflixSeries;