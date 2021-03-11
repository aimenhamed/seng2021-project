import React, { Component } from 'react';
import Item from '../Item-card/item'
import ItemInfo from '../Item-info/item-info'
import { Cocktails } from './Cocktails.js'
import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch } from 'react-router-dom'

// const DrinksList = () => {
//     return (
//         <React.Fragment>
//              <header>
//                 <h1>Drinks Page</h1>
//             </header>
//             {
//                 Cocktails.map((item, index) =>
//                 <Link to={`drinks/${item.name}`} key={item.name+index+'card'}>
//                     <Item name={item.name}/>
//                 </Link> 
//                 ) 
//             }
            
//         </React.Fragment>
       
//     )
// }

// const T = () => {
//     return (  
//             Cocktails.map((item,index) =>
//             <Route exact path={`drinks/${item.name}`}>
//                 {console.log(item.name)}
//                 <ItemInfo 
//                             name={item.name} 
//                             ingredients={item.ingredients} 
//                             instruction={item.instructions}
//                 />
//             </Route>
//         )    
//     )
   
// }

export default class Drinks extends Component {
    render() {
        return (
            <Router>
                <div className="container">
                    <h1>Drinks Page</h1>
                    <Switch>
                        <Route exact path="/drinks">
                            { Cocktails.map((item, index) =>
                                <Link to={`drinks/${index}`} key={item.name+index+'card'}>
                                    <Item name={item.name}/>
                                </Link> 
                            )}
                        </Route>
                        <HardCodedLinks />
                    </Switch>
                </div>

                
            </Router>
           
        )
    }
}

const HardCodedLinks = () => {
    return (
        <React.Fragment>
            <Route exact path="/drinks/0">
            <ItemInfo   name={Cocktails[0].name} 
                        ingredients={Cocktails[0].ingredients} 
                        instructions={Cocktails[0].instructions}
            />
            </Route>
            <Route exact path="/drinks/1">
                <ItemInfo   name={Cocktails[1].name} 
                            ingredients={Cocktails[1].ingredients} 
                            instructions={Cocktails[1].instructions}
                />
            </Route>
            <Route exact path="/drinks/2">
                <ItemInfo   name={Cocktails[2].name} 
                            ingredients={Cocktails[2].ingredients} 
                            instructions={Cocktails[2].instructions}
                />
            </Route>
            <Route exact path="/drinks/3">
                <ItemInfo   name={Cocktails[3].name} 
                            ingredients={Cocktails[3].ingredients} 
                            instructions={Cocktails[3].instructions}
                />
            </Route>
            <Route exact path="/drinks/4">
                <ItemInfo   name={Cocktails[4].name} 
                            ingredients={Cocktails[4].ingredients} 
                            instructions={Cocktails[4].instructions}
                />
            </Route>
            <Route exact path="/drinks/5">
                <ItemInfo   name={Cocktails[5].name} 
                            ingredients={Cocktails[5].ingredients} 
                            instructions={Cocktails[5].instructions}
                />
            </Route>
            <Route exact path="/drinks/6">
                <ItemInfo   name={Cocktails[6].name} 
                            ingredients={Cocktails[6].ingredients} 
                            instructions={Cocktails[6].instructions}
                />
            </Route>
            <Route exact path="/drinks/7">
                <ItemInfo   name={Cocktails[7].name} 
                            ingredients={Cocktails[7].ingredients} 
                            instructions={Cocktails[7].instructions}
                />
            </Route>
            <Route exact path="/drinks/8">
                <ItemInfo   name={Cocktails[8].name} 
                            ingredients={Cocktails[8].ingredients} 
                            instructions={Cocktails[8].instructions}
                />
            </Route>
        </React.Fragment>
    )
}    



// function X() {
//     return (
//         <React.Fragment>          
//             <Switch>
//                 <Route exact path={path}>
//                     {Cocktails.map((item, index) =>
//                         <Link to={`${url}/${item.name}`} key={item.name+index+'card'}>
//                             <Item  name={item.name}/>
//                         </Link> 
//                     )} 
//                 </Route>

//                 {Cocktails.map((item,index) =>
//                     <Route path={match.url+ `/${item.name}`}>
//                         <ItemInfo   key={item.name+index+'info'} 
//                                     name={item.name} 
//                                     ingredients={item.ingredients} 
//                                     instruction={item.instructions}
//                         />
//                     </Route>
//                 )}
//             </Switch>
//         </React.Fragment>
//     )
// }