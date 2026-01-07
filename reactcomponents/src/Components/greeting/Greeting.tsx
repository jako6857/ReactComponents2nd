import "./Greeting.module.scss";

type GreetingProps = {
  name: string;
  age: number;
  timeOfDay: string;
};

export default function Greeting({ name, age, timeOfDay }: GreetingProps) {
  return (
    <div className="greeting">
      <p className="greeting-text">
        God {timeOfDay}, {name} 👋
      </p>
      <p className="greeting-age">
        Du er {age} år gammel
      </p>
    </div>
  );
}
