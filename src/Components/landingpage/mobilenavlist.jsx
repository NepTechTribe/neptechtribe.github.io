import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom';


function MobileNavList(){
    return(
        <>
          <ListGroup className='MobileNavList'>
      <ListGroup.Item  className='MobileNavList-item'> <Link to='/' className='link-default'> Home</Link></ListGroup.Item>
      <ListGroup.Item className='MobileNavList-item'><Link to='/about' className='link-default'> About Us</Link></ListGroup.Item>
      <ListGroup.Item className='MobileNavList-item'><Link to='/blog' className='link-default'> Blogs</Link></ListGroup.Item>
      <ListGroup.Item className='MobileNavList-item'><Link to='/events' className='link-default'> </Link>Events</ListGroup.Item>
      <ListGroup.Item className='MobileNavList-item'><Link to='/contact' className='link-default'> Contact Us</Link></ListGroup.Item>
    </ListGroup>
        </>
    )
}

export default MobileNavList;