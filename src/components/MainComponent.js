import React, { Component } from 'react';
import {Switch, Route, Redirect, withRouter } from 'react-router-dom'; 
import { connect } from 'react-redux';
import Header from './HeaderComponent'
import Menu from './MenuComponent';
import Dishdetail from './DishdetailComponent';
import Contact from './ContactComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import About from './AboutusComponent';


const mappropsToProps = props => {
  return {
    dishes: props.dishes,
    comments: props.comments,
    promotions: props.promotions,
    leaders: props.leaders
  }
}


class Main extends Component {


   constructor(props){
     super(props);
       
   }
  
  render(){
    const HomePage = ()=>{
      return(
        <Home dish={this.props.dishes.filter((dish)=> dish.featured)[0]}
        promotion={this.props.promotions.filter((promotion)=> promotion.featured)[0]}
        leader={this.props.leaders.filter((leader)=> leader.featured)[0]} />
      );
    }

    const DishwithId = ({match})=>{
      return(
        <Dishdetail dish={this.props.dishes.filter((dish)=> dish.id === parseInt(match.params.dishId, 10))[0]}
        comments={this.props.comments.filter((comment)=> comment.dishId === parseInt(match.params.dishId, 10))} />
      );
    };


  return (
    <div className="App">
      <Header />
     <Switch>
       <Route path="/home" component={HomePage} />
       <Route exact path="/menu" component={()=> <Menu dishes={this.props.dishes} />} />
       <Route path='/menu/:dishId' component={DishwithId} />
       <Route path='/aboutus'  component={()=> <About leaders={this.props.leaders}/>} />
       <Route path="/contactus"  component={Contact} />
       <Redirect to="/home" />
     </Switch>
      <Footer />
    </div>
  );
}
}

export default withRouter(connect(mappropsToProps)(Main));
