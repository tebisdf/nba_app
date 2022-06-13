import React, {Component} from 'react';
import { Route , Routes as Switch } from 'react-router-dom';
import Home from './components/home/home';
import Layout from './components/hoc/layout/layout'
class Routes extends Component{
    render(){
        
        //react-router-dom v6 has change from component to element
        return (
                <Layout>
                    <Switch>
                        <Route path='/' exact element={<Home/>}/>
                    </Switch>
                </Layout>
                )
    }
}
export default Routes;