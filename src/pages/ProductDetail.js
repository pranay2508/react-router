
import {useParams} from 'react-router-dom';
function ProductDetailPage(){
    const params = useParams();
   
    return (
        <>
            <h1> Product Details!</h1>;
            <p>{params.productId}</p>
        </>
    )
}

export default ProductDetailPage;

//What does useParams () do?
/// useParams is a Client Component hook that lets you read a route's dynamic params filled in by the current URL.
// here the dynamic routes are the product list.