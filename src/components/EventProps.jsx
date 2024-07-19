export const EventProps = () => {

  const HandleWelcomeUser = (user) => {
    alert(`Hey, ${user}`);
  }

  const handleHover = () => {
    alert(`Thanks for hovering me`);
  }

  return (
    <>
      <WelcomeUser onClick={() => HandleWelcomeUser("Satyajeet")} onMouseEnter={handleHover} />
    </>
  );
};

// only with props
// const WelcomeUser = (props) => {
//   const handleGreeting = () => {
//     console.log(`Hey User, Welcome again`);
//     props.onClick();
//   }
//   return(<>
//     <button onClick={props.onClick}>Click</button>
//     <button onMouseEnter={props.onMouseEnter}>Hover me</button>
//     <button onClick={handleGreeting}>Greeting</button>
//   </>)
// }

// props define with const
const WelcomeUser = (props) => {
  const {onClick, onMouseEnter} = props;
  const handleGreeting = () => {
    console.log(`Hey User, Welcome again`);
    props.onClick();
  }
  return(<>
    <button onClick={onClick}>Click</button>
    <button onMouseEnter={onMouseEnter}>Hover me</button>
    <button onClick={handleGreeting}>Greeting</button>
  </>)
}