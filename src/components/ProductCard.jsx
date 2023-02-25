import { Badge, Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { AiFillMinusSquare, AiFillPlusSquare } from "react-icons/ai";
import { BsTrash } from "react-icons/bs";
const ProductCard = ({
  deleteItem,
  handleMınus,
  handlePlus,
  name,
  price,
  dampingRate,
  amount,
  image,
  id,
  show
}) => {
  return (
    <Card className={show ? "d-flex flex-row mb-2":"d-flex mb-2 "} style={{ width: "30rem" }}>
      <Card.Img variant="top" src={image} className={show ? "w-50":"w-auto"} />
      <Card.Body>
        <Card.Title className="d-flex align-items-start ">{name}</Card.Title>
        <Card.Text className="d-flex align-items-start  ">
          <Badge className="fs-5 p-0 " text="warning" bg="none">
            ${(price * dampingRate).toFixed(2)}
          </Badge>
          <Badge
            className="fs-6 text-decoration-line-through pb-0 "
            text="dark"
            bg="none"
          >
            {price}
          </Badge>
        </Card.Text>
        <Container className="border border-dark d-flex justify-content-center p-2  ">
          <AiFillMinusSquare
            onClick={() => handleMınus(id)}
            className="rounded-5 "
            style={{ color: "gray", fontSize: "2rem", cursor: "pointer" }}
          />
          <Card.Text className="m-0 me-2 ms-2 fs-5">{amount}</Card.Text>
          <AiFillPlusSquare
            onClick={() => handlePlus(id)}
            className="rounded-5 "
            style={{ color: "gray", fontSize: "2rem", cursor: "pointer" }}
          />
        </Container>
        <div className="d-grid gap-2 mt-2">
          <Button variant="danger" size="sm" onClick={() => deleteItem(id)}>
            <BsTrash />
            Remove
          </Button>
        </div>
        <Card.Text className="d-flex align-items-start ">
          Product Total: $ {(price * dampingRate * amount).toFixed(2)}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
