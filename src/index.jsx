import React from 'react';
import ReactDOM from 'react-dom/client';

class App extends React.Component {
    
    constructor (){
        super()
        this.state = {
            name : ""

        }

    }
    SetValue(){
        this.setState({name:"Mariami"},function(){
          window.alert (this.state.name)
        });        
    
        
        
    }
    
    
    
    render (){
        return(
            <React.Fragment>
                <button type="button" onClick={() => this.SetValue() }>დააკლიკეთ</button>
            </React.Fragment>
        );
    }
    
}

const root = document.getElementById("root");
ReactDOM.createRoot (root).render(<App/>)
