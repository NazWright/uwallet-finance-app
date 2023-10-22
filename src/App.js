import "@aws-amplify/ui-react/styles.css";
import { View } from "@aws-amplify/ui-react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <View className="App">
      <Link to={"/dashboard"}>Dashbord</Link>
    </View>
  );
}

export default App;
