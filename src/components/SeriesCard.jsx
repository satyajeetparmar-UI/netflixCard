export const SeriesCard = ({data}) => {
  // const {id, img_url, name, rating, description, cast, genre,watch_url} = props.data;
  // console.log(props);
  const {img_url, name, rating, description, cast, genre,watch_url} = data;
  return (
    <>
      <li>
        <img src={img_url} alt={name} width="40%" height="40%" />
        <h1>Name: {name} </h1>
        <h3>Rating: {rating}</h3>
        <p>Summary: {description}</p>
        <p>Cast: {cast}</p>
        <p>Genre: {genre}</p>
        <a href={watch_url} target="_blank">
          <button>Watch Now</button>
        </a> 
      </li>
    </>
  )
} 