import React, {Component} from 'react';
import {Card, CardImg,CardTitle, CardBody, CardText} from 'reactstrap';

class Dishdetail extends Component{
    constructor(props){
        super(props)
    }

    renderDish(dish){
        if(dish != null)
             return(
                 <Card>
                     <CardImg top src={dish.image} alt={dish.name}/>
                     <CardBody>
                         <CardTitle>{dish.name}</CardTitle>
             <CardText>{dish.description}</CardText>
                     </CardBody>
                 </Card>
             );
        else 
        return(
            <div></div>
        );
    }

    dishcomment(dish){
        if(dish != null){
        const  eachcomment = dish.comments.map((Comment)=>{
            return(
           <ul className="list-unstyled" key={Comment.id}>
               <li>{Comment.comment}</li>
               <li>{Comment.rating}</li>
               <li>--{Comment.author},{new Intl.DateTimeFormat('en-US', {year: "numeric", month: "short", day: "2-digit"}).format(new Date(Date.parse(Comment.date)))}</li>
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
        else
        return(
            <div></div>
        );
    }


render(){

   return(
       <div className="row">
           <div className="col-12 col-md-5">
             {this.renderDish(this.props.dish)}
           </div>
           <div className="col-12 col-md-5 ml-1">
           {this.dishcomment(this.props.dish)}
           </div>
       </div>
   );
   }
}


export default Dishdetail;