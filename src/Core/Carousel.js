import {useState} from 'react'
import {Carousel} from 'react-bootstrap'
import { propTypes } from 'react-bootstrap/esm/Image';
function ControlledCarousel(props) {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
        props.selectIndex(selectedIndex)
    };
    const items = [
        ['Step One', 'Shop For Products Online in Australia and UK.'],
        ['Step Two','At Check out provide Our Delivery Partners Address In That Country.'],
        ['Step Three','Once Received at our Warehouse, Our Staff will Pack Your Package In One of Our Standardized Boxes for Safety and Tracking Purpose.'],
        ['Final Step','We Can Deliver It To Your Door Or You Can Pick It Up From Our Warehouse in Sri Lanka.']
    ]
    return (
        <Carousel activeIndex={index} onSelect={handleSelect} >
            {items.map((item,i)=><Carousel.Item>
                <img
                    className="d-block w-100"
                    src={"carousel"+(i+1)+".jpg"}
                    alt={item[0]}
                />
                <Carousel.Caption>
                    <span style={{fontSize: '8vw'}}>{item[0]}</span><br/>
                    <span style={{fontSize: '4vw'}}>{item[1]}</span>
                </Carousel.Caption>
            </Carousel.Item>)}
        </Carousel>
    );
}
  
export default ControlledCarousel;