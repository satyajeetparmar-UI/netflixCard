function Profile () {
  return (
    <div>
      <h1>Profile Card Challenge</h1>
      <ProfileCard 
        name="John" 
        age={30} 
        greeting={<strong>Hi John, Have a good day!</strong>} 
      >
        <p>Hobbies: Gaming, Cooking</p>
        <button>Contact</button>
      </ProfileCard>
      <ProfileCard 
        name="Alice" 
        age={25} 
        greeting={<strong>Hi Alice, Have a wonderful day!</strong>} 
      >
        <p>Hobbies: Travel, Vloging</p>
        <button>Contact</button>
      </ProfileCard>
    </div>
  )
}

export default Profile;



function ProfileCard ({name, age, greeting, children}) {
  // const {name, age, greeting, children} = props;
  return (
    <div>
      <h2>Name: {name}</h2>
      <p>Age: {age}</p>
      <p>{greeting}</p>
      <div>{children}</div>
    </div>
  )
}

