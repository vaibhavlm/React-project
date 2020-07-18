import React from 'react';
import {Card, CardImg,CardTitle, CardBody, CardText, Breadcrumb, BreadcrumbItem} from 'reactstrap';
import { Link } from 'react-router-dom';



    function RenderDish({dish}){
             return(
                 <Card>
                     <CardImg top src={dish.image} alt={dish.name}/>
                     <CardBody>
                         <CardTitle>{dish.name}</CardTitle>
             <CardText>{dish.description}</CardText>
                     </CardBody>
                 </Card>
             );
    }

    function Rendercomment({comments}){
        const  eachcomment = comments.map((Comment)=>{
            return(
           <ul className="list-unstyled" key={Comment.id}>
               <li><p>{Comment.comment}</p></li>
               <li><p>{Comment.rating}</p></li>
               <li><p>--{Comment.author},{new Intl.DateTimeFormat('en-US', {year: "numeric", month: "short", day: "2-digit"}).format(new Date(Date.parse(Comment.date)))}</p></li>
           </ul>
        );
        });

        return(
            <div>
            <h3>Comments</h3>
            {eachcomment}
            </div>
        );
        }
    


const Dishdetail = (props)=>{
   return(
       <div className="container">  
           <div className="row">
               <Breadcrumb>
                   <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                   <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
               </Breadcrumb>
               <div className="col-12">
                   <h3>{props.dish.name}</h3>
                   <hr />
               </div>
           </div>     
           <div className="row">
           <div className="col-12 col-md-5">
             <RenderDish dish={props.dish} />
           </div>
           <div className="col-12 col-md-5 ml-1">
           <Rendercomment comments={props.comments}/>
           </div>
           </div>
       </div>
   );
   }


export default Dishdetail;