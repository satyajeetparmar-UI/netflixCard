export const EventHandling = () => {
  
  // EventHandling with Traditional way 
  // function handleButtonClick() {
  //   alert("Hey I am onClick Event.")  
  // }

  // EventHandling with fat arrow function 
  const handleButtonClick = () => {
    alert("Hey I am onClick Event");
  }
  
  return (
    <>
      {/* Functions components with name Functions */}
      <button onClick={handleButtonClick}>Click me</button>
    </>
  );
};