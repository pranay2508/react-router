import { Link, useNavigate} from 'react-router-dom';
function HomePage() {

  const navigate = useNavigate();
  function navigateHandler(){
    navigate('/products');
  }

  return (
    <>
      <h1>my homepage</h1>
      <p>Go to  <Link to="products"> the list of products</Link></p>
      <p>
        <button onClick = {navigateHandler}> Navigate</button>
      </p>
    </>
  );
}

export default HomePage;

// link is a render anchor element but it listens for click on tht element
//prevents the browser defaulr of sending http request if link is clicked
// it will prevent re-render again all react