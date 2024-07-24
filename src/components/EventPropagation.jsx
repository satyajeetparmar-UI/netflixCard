import "./event-propagation.css";

export const EventPropagation = () => {

  const handleGrandParent = () => {
    console.log('Grand Parent Clicked');
  }

  const handleParent = () => {
    console.log('Parent Clicked');
  }

  const handleChild = (event) => {
    console.log(event);
    // event.stopPropagation();
    console.log('Child Clicked');
  }

  return (
    <>
      <section className="main-div">
        <div className="g-div" onClickCapture={handleGrandParent}>
          <div className="p-div" onClickCapture={handleParent}>
            <button className="c-div" onClickCapture={handleChild}>
              Child Div
            </button>
          </div>
        </div>
      </section>
    </>
  )
}