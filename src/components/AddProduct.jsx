import { useState } from "react";
import { InputGroup } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { BsCartPlus } from "react-icons/bs";

const AddProduct = ({ postItem, show }) => {
  const [newProduct, setnewProduct] = useState(
    {
      id: 1,
      name: "Macbook M1 Air 16gb",
      image:
        "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/macbook-air-space-gray-select-201810?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1664472289661",
      price: 1100,
      dampingRate: 0.8,
      amount: 1,
    }
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    postItem(newProduct);
    setnewProduct({
      name: "",
      image: "",
      price: "",
      dampingRate: "0.8",
      amount: "",
    });
    e.target.reset();
  };
  return (
    <Form onSubmit={handleSubmit} className={`${show ? "me-1 " : "mx-auto"}`}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Product Name</Form.Label>
        <Form.Control
          onChange={(e) =>
            setnewProduct({ ...newProduct, name: e.target.value })
          }
          value={newProduct.name}
          type="text"
          placeholder="Enter product name"
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Product Price</Form.Label>
        <Form.Control
          onChange={(e) =>
            setnewProduct({ ...newProduct, price: e.target.value })
          }
          value={newProduct.price}
          type="number"
          placeholder="Product price"
          required
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Product Quantity</Form.Label>
        <Form.Control
          onChange={(e) =>
            setnewProduct({ ...newProduct, amount: e.target.value })
          }
          value={newProduct.amount}
          type="number"
          placeholder="Product Quantity"
          required
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Product İmage</Form.Label>
        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon3">
            https://example.com/users/
          </InputGroup.Text>
          <Form.Control
            onChange={(e) =>
              setnewProduct({ ...newProduct, image: e.target.value })
            }
            aria-describedby="basic-addon3"
            value={newProduct.image}
            type="url"
            placeholder="Product Image"
            required
          />
        </InputGroup>
      </Form.Group>
      <Form.Group className="d-flex justify-content-center mb-3">
        <Button variant="success" type="submit" className="m-0 ">
          <BsCartPlus className="me-1" style={{ fontSize: "1.5rem" }} />
          Add To Cart
        </Button>
      </Form.Group>
    </Form>
  );
};

export default AddProduct;
