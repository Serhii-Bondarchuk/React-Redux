import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import { addNumber, putCount, changeWidht, fLeave } from './reduxFolder/numbers/numberActions'




function Items(props) {


	return (
           
           <div style = {{width: '25%', backgroundColor:'', margin: '10px' ,
            border: '1px solid blue', borderRadius: '8px', cursor: 'pointer',
            justifyContent: 'center', textAlign: 'center', position: 'relative',
            }} 
             onClick = { () => {
                      return props.addNumber(props.item.id, props.item.number)
                    } } > 
                           
                <div   id={`s`+props.item.id}   style = {{
                 cursor: 'pointer', fontSize: '25px', 
                  Zindex: '-1000', height: '100%', position: 'absolute',
                    }}
                 >   </div>

                <div  className = 'btn item ' style = {{
                  width: '100%', Zindex: 1000, position: 'inherit',
                  fontSize: '30px', color: 'white' }}      
                  onMouseEnter  = { () => props.changeWidht(props.item,
                                          props.el, props.index ) }

                  onMouseLeave =  { () => props.fLeave(props.item,
                                          props.el, props.index ) } 
                
                     >  {props.item.number} </div>
          </div>

		)
}

const mapStateToProps = ( state ) =>  {
  return {
      arrayOfNumbers: state.arrayOfNumbers,
      middle: state.middle
  }
}

const mapDispatchToProps =  ( dispatch ) => {
  return {
      addNumber: (id, number) => dispatch (addNumber(id, number)),
       putCount: (count, item) => dispatch( putCount(count, item) ),
   changeWidht : (item, el, index  ) => dispatch( changeWidht( item, el, index ) ),
         fLeave: (item, el, index  ) => dispatch( fLeave( item, el, index ) ) 
  }  
}



export default connect( mapStateToProps, mapDispatchToProps )(Items)