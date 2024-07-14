import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
    const [products, setProducts] = useState([])

    const { id } = useParams()

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res => res.json())
            .then(json => setProducts(json))
    }, [])


    return <div>
    <h1>Detail Page</h1>
       <div>
          <div class="card mb-3" style={{maxWidth:'400px'}}>
  <div class="row g-0">
    <div class="col-md-4">
      <img src={products.image} class="img-fluid rounded-start" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">{products.title}</h5>
        <p class="card-text">{products.description}</p>
        <p class="card-text"><small class="text-body-secondary">{products.price}</small></p>
      </div>
    </div>
  </div>
</div>
        </div>
    </div>
}
export default Detail;