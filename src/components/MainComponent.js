import React, { Component } from 'react';
import {Switch, Route, Redirect, Router } from 'react-router-dom'; 
import Header from './HeaderComponent'
import Menu from './MenuComponent';
import Dishdetail from './DishdetailComponent';
import Contact from './ContactComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import {DISHES} from '../shared/Dishes';
import {COMMENTS} from '../shared/Comments';
import {PROMOTIONS} from '../shared/Promotions';
import {LEADERS} from '../shared/Leaders';


class Main extends Component {
   constructor(props){
     super(props);
       this.state = {
         dishes : DISHES,
         comments : COMMENTS,
         promotions : PROMOTIONS,
         leaders : LEADERS
       };
   }

  
  render(){
    const HomePage = ()=>{
      return(
        <Home dish={this.state.dishes.filter((dish)=> dish.featured)[0]}
        promotion={this.state.promotions.filter((promotion)=> promotion.featured)[0]}
        leader={this.state.leaders.filter((leader)=> leader.featured)[0]} />
      );
    }

    const DishwithId = ({match})=>{
      return(
        <Dishdetail dish={this.state.dishes.filter((dish)=> dish.id === parseInt(match.params.dishId, 10))[0]}
        comments={this.state.comments.filter((comment)=> comment.dishId === parseInt(match.params.dishId, 10))} />
      );
    };


  return (
    <div className="App">
      <Header />
     <Switch>
       <Route path="/home" component={HomePage} />
       <Route exact path="/menu" component={()=> <Menu dishes={this.state.dishes} />} />
       <Route path='/menu/:dishId' component={DishwithId} />
       <Route path="/contactus"  component={Contact} />
       <Redirect to="/home" />
     </Switch>
      <Footer />
    </div>
  );
}
}

export default Main;
