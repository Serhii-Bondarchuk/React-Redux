import React from 'react'
import Items from './Items'



function ListItems(props) {


	return (
           
           <div> 
             <div> 
               <div className = 'level3 '  
                      
                 key = {props.index}  style = {{
                  margin: '10px', display: 'flex'
                   }}
                 >
                   {
                       props.el.map( (item, index) => 
                       
                          < Items key = { index } el = { props.el }   item = {item} 
                             index = {props.index}

                           />

                 	) } 

       	       </div>
            	</div>
            </div>

		)
}


export default ListItems