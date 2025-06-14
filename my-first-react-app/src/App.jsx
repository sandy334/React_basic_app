import { useEffect, useState } from "react";

const Card = ({ title }) => {
  // State to track if the card has been liked
  // Using useState to manage the liked state of the card
  // Initial state is set to false (not liked)
  // The useState hook returns an array with the current state and a function to update it
  // The effect hook is used to log messages when the component mounts and unmounts
  // The effect hook runs after the component has rendered
  // The effect hook can return a cleanup function that runs when the component unmounts
  const[count, setCount] = useState(0);
  // State to track if the card has been liked
  const [hasLiked, setHasLiked] = useState(false);

  useEffect(() => {
    console.log(` ${title} has been liked: ${hasLiked}`);
  }, [title, hasLiked]);

  return (
    <div className="Card" onClick={() => setCount(count + 1)}>
      <h2>{title}-{count}</h2>
      <button onClick={() => setHasLiked(!hasLiked)}>
        {hasLiked ? "❤️" : "🖤"}
      </button>
    </div>
  );
};

const App = () => {
  return (
    <div className="Card-container">
      <Card title="Star wars" />
      <Card title="Avatar" />
      <Card title="The Lion King" />
    </div>
  );
};

export default App;
