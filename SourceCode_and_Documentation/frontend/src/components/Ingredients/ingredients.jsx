import React, { Component } from 'react';
import Item from '../Item-card/item'
import IngredientInfo from '../Ingredient-info/ingredient-info'
import { Cocktails } from '../Drinks/Cocktails.js'
import { Route, Link, withRouter } from 'react-router-dom'



class Ingredients extends Component {
    constructor(props) {
        super(props);
        this.state = {
          error: this.props.error,
          isLoaded: this.props.isLoaded,
          items: this.props.items,
        };
    }

    render() { 
        const { match } = this.props;
        const { error, isLoaded, items } = this.state;
        // console.log(this.props)

      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
          return (
              <div className="container">
                  <Route exact path={match.path}>
                      <h2>Select an ingredient to see more info</h2>
                      {items.map(( ingredient ) => (
                          
                              <Link to={`${match.url}/${ingredient['ingredient']}`}>
                              <Item key={ingredient['id']} image={"http://www.thecocktaildb.com/images/ingredients/" + ingredient['ingredient'] + ".png"}>{ingredient['ingredient']}</Item>
                              </Link>
                      ))}
                  </Route>
                  <Route path={`${match.path}/:ingredientID+`}>
                    <IngredientInfo ingredients={items}/>
                  </Route>
        
              </div>
            );
      }
    }
  }

const IngredientRouter = withRouter(Ingredients)
export default IngredientRouter
