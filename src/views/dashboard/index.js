import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function DashboardPage() {

  const [product, setProduct] = useState([])

  const navigate = useNavigate()

  const goToDetail=(item)=>{
    navigate(`/detail/${item.id}`)
  }


  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => setProduct(json))
  }, [])

  return <>
    <div>
    <h1>Dashboard Page</h1>
      {product.map(item => {
        return <div onClick={()=>goToDetail(item)} style={{ }}>
          <div class="card mb-3" style={{maxWidth:'400px'}}>
  <div class="row g-0">
    <div class="col-md-4">
      <img src={item.image} class="img-fluid rounded-start" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">{item.title}</h5>
        <p class="card-text">{item.description}</p>
        <p class="card-text"><small class="text-body-secondary">{item.price}</small></p>
      </div>
    </div>
  </div>
</div>
        </div>
      })}
    </div>
  </>
}

export default DashboardPage;