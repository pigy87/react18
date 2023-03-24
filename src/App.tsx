import ListGroup from "./componetns/ListGroup";
import Alert from "./componetns/Alert";
import Button from "./componetns/Button";
import RealAlert from "./componetns/RealAlert";
import { useState } from "react";

function App() {
  const [color, setColor] = useState("");
  const [alertVisible, setAlertVisible] = useState(false);
  let items = ["New York", "San Francisco", "Tokyo", "Paris"];
  let heading = "Cities";
  const handleSelectedItem = (item: string) => {
    console.log(item);
  };

  let handleColor = () => {
    let colors = ["primary", "secondary", "success", "danger"];

    setColor(colors[Math.floor(Math.random() * 3)]);
  };

  let handleAlertVisabilityFalse = () => {
    setAlertVisible(false);
  };

  let handleAlertVisabilityTrue = () => {
    setAlertVisible(true);
    console.log("proba");
  };
  return (
    <div>
      {alertVisible && (
        <RealAlert
          handleAlertVisabilityFalse={handleAlertVisabilityFalse}
        ></RealAlert>
      )}

      <ListGroup
        items={items}
        heading={heading}
        onSelctedItem={handleSelectedItem}
      />
      <Alert>
        Hello <span>world!</span>
      </Alert>

      <Button
        color={color}
        handleButton={handleColor}
        handleAlertVisabilityTrue={handleAlertVisabilityTrue}
      >
        My button
      </Button>
    </div>
  );
}

export default App;
