import React from 'react'
import {Link, withRouter} from 'react-router-dom'
import {Col, Row, Image} from 'react-bootstrap'
import './Footer.css'


const Footer = () => {
    const listStyle = {
        color: 'white',
        fontSize: '1.3vw'
    }
    const titleStyle = {
        color: 'white',
        fontSize: '2vw'
    }
    return (
    <div style={{backgroundColor: ' #3f51b5'}}>
      <div className="text-center text-md-left" style={{padding: '1vw'}}>
        <Row>
          <Col md="6">
            <h5 className="title" style={titleStyle}>Footer Content</h5>
            <p>
              Here you can use rows and columns here to organize your footer
              content.
            </p>
          </Col>
          <Col md="6">
            <h5 className="title" style={titleStyle}>Links</h5>
            <ul>
              <li className="list-unstyled">
                <Link style={listStyle} to='/terms'>Terms and Conditions</Link>
              </li>
              <li className="list-unstyled">
                <a style={listStyle} href="#!">Link 3</a>
              </li>
              <li className="list-unstyled">
                <a style={listStyle} href="#!">Link 4</a>
              </li>
            </ul>
          </Col>
        </Row>
      </div>
      <div className="footer-copyright text-center py-3">
        <div >
          &copy; {new Date().getFullYear()} Copyright: <a href="#"  style={listStyle}> Shoperoo.com </a>
        </div>
      </div>
    </div>  
  );
}

export default Footer;