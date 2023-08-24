import { Link} from 'react-router-dom';
function HomePage() {
  return (
    <>
      <h1>my homepage</h1>
      <p>Go to  <Link to="/products"> the list of products</Link></p>
    </>
  );
}

export default HomePage;

// link is a render anchor element but it listens for click on tht element
//prevents the browser defaulr of sending http request if link is clicked
// it will prevent re-render again all react