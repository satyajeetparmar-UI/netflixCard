export const SeriesCard = ({data}) => {
  
  const {img_url, name, rating, description, cast, genre,watch_url} = data;

  const btn_style = {
    padding: "0.6rem 1.2rem",
    border: "none",
    fontSize: "0.9rem",
    backgroundColor: `${rating >= 8.5 ? "#7dcea0" : "#f7dc6f"}`,
    color: "#333",
    cursor: "pointer",
    fontWeight: "bold"
  }

  const ratingClass = rating >= 8.5 ? "superHit" : "average";

  return (
    <>
      <li className="card">
        <div>
          <img src={img_url} alt={name} />
        </div>
        <div className="card-content">
          <h1>Name: {name} </h1>
          <h3>Rating: <span className={`rating ${ratingClass}`}> {rating} </span></h3>
          <p>Summary: {description}</p>
          <p>Cast: {cast}</p>
          <p>Genre: {genre}</p>
          <a href={watch_url} target="_blank">
            <button style={btn_style}>Watch Now</button>
          </a>  
        </div> 
      </li>
    </>
  )
} 