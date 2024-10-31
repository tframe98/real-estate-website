import { useState } from 'react'
import '../styles/Home.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button, Form } from 'react-bootstrap';

const Home = () => {
    const [show, setShow] = useState(false);
    const [estimatorData, setEstimatorData] = useState({
        address: '',
        squareFeet: '',
        bedrooms: '',
        bathrooms: ''
    });

    //const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEstimatorData({ ...estimatorData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Implement the estimator logic here
        console.log(estimatorData);
        alert('Estimate Submitted!');
        handleClose();
    };

    return (
        <><div className="hero-container">
        {/* Blurred background layer */}
        <div className="hero-background"></div>
        
        {/* Content that will not be blurred */}
        <div className="hero-content">
            <h1 className="hero-title">Welcome to Our Real Estate Agency</h1>
            <p className="hero-subtitle">Your dream home awaits.</p>
            <Button variant="primary">Estimate Your Home</Button>
        </div>
        
            </div><Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Home Estimator</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="formAddress">
                            <Form.Label>Address</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter address"
                                name="address"
                                value={estimatorData.address}
                                onChange={handleChange}
                                required />
                        </Form.Group>
                        <Form.Group controlId="formSquareFeet">
                            <Form.Label>Square Feet</Form.Label>
                            <Form.Control
                                type="number"
                                placeholder="Enter square feet"
                                name="squareFeet"
                                value={estimatorData.squareFeet}
                                onChange={handleChange}
                                required />
                        </Form.Group>
                        <Form.Group controlId="formBedrooms">
                            <Form.Label>Bedrooms</Form.Label>
                            <Form.Control
                                type="number"
                                placeholder="Enter number of bedrooms"
                                name="bedrooms"
                                value={estimatorData.bedrooms}
                                onChange={handleChange}
                                required />
                        </Form.Group>
                        <Form.Group controlId="formBathrooms">
                            <Form.Label>Bathrooms</Form.Label>
                            <Form.Control
                                type="number"
                                placeholder="Enter number of bathrooms"
                                name="bathrooms"
                                value={estimatorData.bathrooms}
                                onChange={handleChange}
                                required />
                        </Form.Group>
                        <Button variant="primary" type="submit" classNameName="mt-3">
                            Submit
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
            
            <div className="sub-container">
<h1 className="sub-title">Welcome to Reno Sparks</h1>
<p>Ready to find your perfect property in Reno or Sparks, NV? Whether you’re searching for your dream home, 
planning to downsize, investing in a new opportunity, or making a big move, Reno Sparks Homes is here to be 
your trusted partner. Our dedicated team of experts brings a wealth of local knowledge, unmatched service, 
and deep connections within the Reno and Sparks real estate markets. We take pride in making your journey 
effortless and stress-free by offering personalized guidance every step of the way. From Carson City to 
Gardnerville, from Dayton to Incline Village, Reno Sparks Homes is your gateway to the best properties Northern 
Nevada has to offer. Let us make your real estate experience seamless and successful—your dreams are just a key 
turn away.</p>
</div>

<div className="card-container">
<div className="card" style={{ width: '38rem'}}>
  <img src="../src/img/ranchHouse.png" className="card-img-top" alt="..."></img>
  <div className="card-body">
    <h5 className="card-title">Relocate to Reno, NV</h5>
    <p className="card-text">Discover the perfect home in Reno with Reno Sparks Homes. 
    Our team provides expert guidance, local market insights, moving assistance, and 
    personalized service to make your relocation smooth and stress-free.</p>
   
  </div>
</div>

<div className="card" style={{ width: '38rem'}}>
  <img src="../src/img/ranchHouseTwo.png" className="card-img-top" alt="..."></img>
  <div className="card-body">
    <h5 className="card-title">Looking for Your New Home?</h5>
    <p className="card-text">Whether you’re buying your first home or seeking your next investment, 
    we’re here to help every step of the way. Our dedicated team ensures a seamless and rewarding 
    home-buying experience tailored to your needs.</p>
    
  </div>
</div>

<div className="card" style={{ width: '38rem'}}>
  <img src="../src/img/urbanHouse.png" className="card-img-top" alt="..."></img>
  <div className="card-body">
    <h5 className="card-title">Ready to Sell Your Home?</h5>
    <p className="card-text">Sell your home quickly and confidently with Reno Sparks Homes.
     Take advantage of our local expertise, customized sales strategy, and powerful marketing
      to get the best results possible.</p>
    
  </div>
</div>
</div>

<div className="card-container-review">
<div className="card-review" >
  
  <div className="card-body-review">
    
    <p className="card-text-review">Sam was an amazing help when our family was searching 
    for a home in the Reno area. We worked with Sam for almost a year until we found the 
    perfect house in our price range. We are not from the Reno area so Sam took a lot of 
    time to make sure the house was in a great location, close to stores, easy 
    to get to and from downtown and most importantly being a safe and clean location. 
    Sam spent countless hours, including his own personal time, meeting with us at multiple
    houses and never let us down and he never gave up on us or our search. With us not being from
    the area, we are not familiar many people or companies we can trust to do needed work and repairs, 
    but Sam had a professional contact for everything we needed. Sam is very friendly, honest and 
    professional and I will highly recommend him to my friends 
    and family when looking for a home in the Reno area. Thank you Sam!! You're the best!!</p>
   
  </div>
</div>

<div className="card-review">
  
  <div className="card-body-review">
    
    <p className="card-text-review">Sam has now represented my on three deals in the
     Reno area as well as assisted me in finding an agent via his referral network for 
     an out-of-state deal. He has a can-do attitude and is extremely detail oriented
      when executing complex transactions. This was critical in keeping closings to the 
      anticipated timelines and resolving issues as they arose. Aside from his real estate
       knowledge, Sam was able to assist with a great network of movers, contractors, 
       painters which supported pre-closing repairs and owner improvements after the sale. 
       I give Sam my highest recommendation as my go-to person to represent me in the future. 
       He will be a great partner to anyone he works with.</p>
    
  </div>
</div>

<div className="card-review">
  
  <div className="card-body-review">
    
    <p className="card-text-review">Sam was amazing. He really took the time to help my wife and 
    me sell our house. He is knowledgeable, friendly, and really dedicated to getting a deal done. In 
    our case, I can confidently say he went above and beyond for us. I wish I could rate him higher. 
    This was the second deal we had with Sam Dykstra. He helped my sister get a condo. He has been
     nothing but great. </p>
    
  </div>
</div>

<div className="card-review" >
  
  <div className="card-body-review">
    
    <p className="card-text-review">Sam was great! Very understanding that we initially 
    weren't sure if we wanted to move to the area, provided advice as our interests changed, 
    helping us find just the right home, and offering to represent us every step of the way. 
    Highly recommended! </p>
    
  </div>
</div>
</div>
</>


    
    );
};

export default Home;