import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem, Form, FormGroup, Col, Label, Input, Button, FormFeedback } from 'reactstrap';
import { Link } from 'react-router-dom';

class Contact extends Component{

     constructor(props){
         super(props);
         this.state = {
            firstname: '',
            lastname: '',
            telnum: '',
            email: '',
            agree: false,
            contactType: 'Tel.',
            message: '',
            touched : {
                firstname: '',
                lastname: '',
                telnum: '',
                email: ''
            }

         };
         this.handleinputchange = this.handleinputchange.bind(this);
         this.submithandler = this.submithandler.bind(this);
         this.handleBlur = this.handleBlur.bind(this);
     }

     handleinputchange(event){
         const target = event.target
         
         this.setState({
             [target.name] : target.type === 'checkbox' ? target.checked : target.value
         });
     }

     handleBlur = (field    ) => (evt) =>{
         this.setState({
             touched : {...this.state.touched, [field]: true}
         });
     }

     validate(firstname, lastname, telnum, email){
         const error = {
            firstname: '',
            lastname: '',
            telnum: '',
            email: ''
         };
         
         if(this.state.touched.firstname && firstname.length<3)
         error.firstname='First Name should have atleast 3';
         else if(this.state.touched.lastname && firstname.length>10)
         error.firstname='First Name should be less than 10 characters';
 
         if(this.state.touched.lastname && lastname.length<3)
         error.lastname='Last Name should have atleast 3';
         else if(this.state.touched.lastname && lastname.length>10)
         error.lastname='Last Name should be less than 10 characters';

         const reg = /^\d+$/;

         if(this.state.touched.telnum && !reg.test(telnum))
         error.telnum='Tel. Number should have only numbers';

         if (this.state.touched.email && email.split('').filter(x => x === '@').length !== 1)
             error.email = 'Email should contain a @';

             return error;
     }
          
     

      submithandler(event){
         console.log('Current State ='+JSON.stringify(this.state));
         alert('Current Statee is:' + JSON.stringify(this.state)).
         event.preventDefault();

      }


    render(){
         const error =  this.validate(this.state.firstname, this.state.lastname, this.state.telnum, this.state.email)
     return(
        <div className="container">
             <div className="row">
                 <Breadcrumb>
                     <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                     <BreadcrumbItem active>ContactUs</BreadcrumbItem>
                 </Breadcrumb>
                 <div className="col-12">
                     <h3>ContactUs</h3>
                 </div>
             </div>
        <div className="row row-content">
            <div className="col-12">
            <h3>Location Information</h3>
            </div>
            <div className="col-12 col-sm-4 offset-sm-1">
                    <h5>Our Address</h5>
                    <address>
                    121, Clear Water Bay Road<br />
                    Clear Water Bay, Kowloon<br />
                    HONG KONG<br />
                    <i className="fa fa-phone"></i>: +852 1234 5678<br />
                    <i className="fa fa-fax"></i>: +852 8765 4321<br />
                    <i className="fa fa-envelope"></i>: <a href="mailto:confusion@food.net">confusion@food.net</a>
                    </address>
            </div>
            <div className="col-12 col-sm-6 offset-sm-1">
                <h5>Map of our Location</h5>
            </div>
            <div className="col-12 col-sm-11 offset-sm-1">
                <div className="btn-group" role="group">
                    <a role="button" className="btn btn-primary" href="tel:+85212345678"><i className="fa fa-phone"></i> Call</a>
                    <a role="button" className="btn btn-info"><i className="fa fa-skype"></i> Skype</a>
                    <a role="button" className="btn btn-success" href="mailto:confusion@food.net"><i className="fa fa-envelope-o"></i> Email</a>
                </div>
            </div>
        </div>
        <div className="row row-content">
            <div className="col-12">
            <h3>Send us your Feedback</h3>                
            </div>
            <div className=" col-12 col-md-9">
            <Form onSubmit={this.submithandler}>
              <FormGroup row>
                  <Label htmlFor="firstname" md={2}>FirstName</Label>
                  <Col md={10}>
                      <Input type="text" id="firstname" name="firstname" 
                      placeholder="First Name" value={this.state.firstname} onChange={this.handleinputchange}
                      valid={error.firstname === ''} invalid={error.firstname !== ''}
                      onBlur={this.handleBlur('firstname')} />
                      <FormFeedback>{error.firstname}</FormFeedback>
                  </Col>
              </FormGroup>
              <FormGroup row>
                  <Label htmlFor="lastname" md={2}>LastName</Label>
                  <Col md={10}>
                      <Input type="text" id="lastname" name="lastname" 
                      placeholder="Last Name" value={this.state.lastname} onChange={this.handleinputchange}
                      valid={error.lastname === ''} invalid={error.lastname !== ''}
                      onBlur={this.handleBlur('lastname')} />
                      <FormFeedback>{error.lastname}</FormFeedback>
                  </Col>
              </FormGroup>
              <FormGroup row>
                  <Label htmlFor="telnum" md={2}>Contact Tel.</Label>
                  <Col md={10}>
                      <Input type="text" id="telnum" name="telnum" 
                      placeholder="Tel. Number" value={this.state.telnum} onChange={this.handleinputchange}
                      valid={error.telnum === ''} invalid={error.telnum !== ''}
                      onBlur={this.handleBlur('telnum')} />
                      <FormFeedback>{error.telnum}</FormFeedback>
                  </Col>
              </FormGroup>
              <FormGroup row>
                  <Label htmlFor="email" md={2}>Email</Label>
                  <Col md={10}>
                      <Input type="text" id="email" name="email" 
                      placeholder="Email" value={this.state.email} onChange={this.handleinputchange}
                      valid={error.email === ''} invalid={error.email !== ''}
                      onBlur={this.handleBlur('email')} />
                      <FormFeedback>{error.email}</FormFeedback>
                  </Col>
              </FormGroup>
              <FormGroup row>
                  <Col md={{size:6, offset:2}}>
                     <FormGroup check>
                         <Label check>
                             <Input type="checkbox" name="agree" checked={this.state.agree} onChange={this.handleinputchange} /> {' '}
                             <strong>May we contact you ?</strong>
                         </Label>
                     </FormGroup>
                  </Col>
                  <Col md={{size:3, offset:1}}>
                      <Input type="select" name="contactType" value={this.state.contactType} onChange={this.handleinputchange} >
                          <option>Tel.</option>
                          <option>Email</option>
                      </Input>
                  </Col>
              </FormGroup>
              <FormGroup row>
                  <Label htmlFor="message" md={2}>Feedback</Label>
                  <Col md={10}>
                      <Input type="textarea" id="message" name="message" 
                      row="12" value={this.state.message} onChange={this.handleinputchange} />
                  </Col>
              </FormGroup>
              <FormGroup row>
                  <Col md={{size:10, offset:2}}>
                      <Button type="submit" color="success">
                          Send Feedback
                      </Button>
                  </Col>
              </FormGroup>
          </Form>
            </div>  
        </div>
    </div>
     );
}
}

export default Contact;