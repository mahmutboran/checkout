import Buttons from './Buttons'


const Header = ({show, setShow}) => {
  


  return (
    <div>
      <h1 className='text-danger d-flex justify-content-center' >Checkout Page</h1>
      <Buttons show={show} setShow={setShow} text={show ? "Hide":"Show" } />
    </div>
  )
}

export default Header
