import NetworkDetector from "../helpers/NetworkDetector";
import ImageList from "../components/ImageList";
const Home = () => {
  return (
    <div>
      <h1>Network Checking App</h1>
      <ImageList />
    </div>
  );
};

export default NetworkDetector(Home);
