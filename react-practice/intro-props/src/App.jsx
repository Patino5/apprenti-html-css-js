import Welcome from "./componets/Welcome";
import Welcome2 from "./componets/Welcome2";
import Welcome3 from "./componets/Welcome3";
import Profile from "./componets/Profile";
import Profile2 from "./componets/Profile2"
import Card from "./componets/Card";
import Welcome4 from "./componets/Welcome4";


function App() {

  return (
    <>
      <Welcome4 id={3} name="Kelsey (default)" />
      <Welcome4 id={4} className="green" name="Brent(overRide)" />
      {/* <Welcome2 name="Nick" className="green" id={1} />
      <Welcome2 name="Mary" className="blue" id={2}/>

      <Welcome3 name="Nick" className="green" id={3} />
      <Welcome3 name="Mary" className="blue" id={4}/>
      <Welcome name="Ryan" />
      <Profile
        name="Ryan"
        age={36}
        isPremium={false}
        interest={["Coding", "Gaming", "Travel"]}
      />
      <Profile2
        name="Shanice"
        age={32}
        isPremium={true}
        interest={["Trifting", "Music", "Travel"]}
      />
      <Card>
        <h5 className="card-title">This is my title</h5>
        <p className="card-text">
          All of the content inside the Card.
        </p>
      </Card> */}
    </>
  )
};

export default App;