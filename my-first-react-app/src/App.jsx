import { useState } from "react";

const Card = ({ title }) => {
  const [hasLiked, setHasLiked] = useState(false);

  return (
    <div className="Card">
      <h2>{title}</h2>
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
