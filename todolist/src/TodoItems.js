import React,{ Component } from "react";
import Flipmove from "react-flip-move"


class TodoItems extends Component {
	constructor(props){
         super(props);


        this.createTasks=this.createTasks.bind(this);
    }



    createTasks(item) {
		return  <li onClick={() => this.delete(item.key)}
                     key={item.key} > {item.text} </li>
        
    }


    delete(key) {
        console.log("key "+ key);
        this.props.delete(key); 
    }    
 
	
    
    render() {
    	var todoEntries =this.props.entries;
    	var listItems=todoEntries.map(this.createTasks);


    	return (
    	 <ul className="theList">
         <Flipmove duration={250} easing="ease-out">
    	 	{listItems}
         </Flipmove>
    	 </ul>	

		);
    }

}

export default TodoItems;