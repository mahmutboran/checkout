import { Container } from "react-bootstrap";
import ProductCard from "./ProductCard";

const CardTotal = ({ deleteItem, data, handleMınus, handlePlus, show }) => {
  
  return (
    <div>
      {data.map((item) => {
        return (
          <ProductCard
            key={item.id}
            {...item}
            deleteItem={deleteItem}
            handleMınus={handleMınus}
            handlePlus={handlePlus}
            show={show}
          />
        );
      })}
      <Container striped bordered hover size="sm">
        <Container className="d-flex  justify-content-between">
          <p>Subtotal</p>
          <p>$ {(data.reduce((subTotal,item)=>{
            return(
              subTotal+=((item.price*item.dampingRate)*item.amount)
            )
          },0)).toFixed(2)}</p>
        </Container>
        <Container className="d-flex  justify-content-between">
          <p>Tax(18%)</p>
          <p>$ {(data.reduce((tax,item)=>{
            return(
              tax+=((((item.price*item.dampingRate)*item.amount)*0.18))
            )
          },0)).toFixed(2)}</p>
        </Container>
        <Container className="d-flex  justify-content-between">
          <p>Shipping</p>
          <p>$ 25</p>
        </Container>
        <Container className="d-flex  justify-content-between">
          <p>Total</p>
          <p>${((data.reduce((tax,item)=>{
            return(
              tax+=((((item.price*item.dampingRate)*item.amount)*0.18))
            )
          },0))+(data.reduce((subTotal,item)=>{
            return(
              subTotal+=((item.price*item.dampingRate)*item.amount)
            )
          },0))+25).toFixed(2)} </p>
        </Container>
      </Container>
    </div>
  );
};

export default CardTotal;
