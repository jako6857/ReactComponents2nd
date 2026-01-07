import Greeting from "../greeting/Greeting";

export default function Main() {
  return (
    <main>
      <Greeting
        name="Mikkel"
        age={24}
        timeOfDay="morgen"
      />
    </main>
  );
}
