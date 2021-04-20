import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addNumber, putCount, changeWidht, fLeave, checkNumber, focus, blur } from './reduxFolder/numbers/numberActions'




function Items(props) {



    const [inputAdd, setInputAdd] = useState('')

    const inputHandler = (e) => {

        if (props.item.id % 4 == 0) { return }

        let val = e.target.value

        val = val.replace(/[^\d]/g, "")

        setInputAdd(props.item.number = Number(val))

        props.checkNumber()

    }


    return (

        <div style = {{width: '25%', backgroundColor:'', margin: '10px' ,
            border: '1px solid blue', borderRadius: '8px', cursor: 'pointer',
            justifyContent: 'center', textAlign: 'center', position: 'relative',
            }} 
             > 
                           
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
                                          props.el, props.index )
                                            } 
                
                     > < input  id={`inn`+props.item.id}   className='check container ' 
                      type = 'text' value = {props.item.number}  
                     onClick = { () => props.addNumber( props.item.id, props.item.number )  }
                     onChange = { inputHandler  }
                     onFocus = { () => props.focus(props.item,
                                          props.el, props.index) } 
                     onBlur = { () => props.blur(props.item,
                                          props.el, props.index) }                      
                     style = {{ textAlign: 'center' }}
                       />  </div>
                     
                     
          </div>

    )
}

const mapStateToProps = (state) => {
    return {
        arrayOfNumbers: state.arrayOfNumbers,
        middle: state.middle
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addNumber: (id, number) => dispatch(addNumber(id, number)),
        putCount: (count, item) => dispatch(putCount(count, item)),
        changeWidht: (item, el, index) => dispatch(changeWidht(item, el, index)),
        fLeave: (item, el, index) => dispatch(fLeave(item, el, index)),
        checkNumber: () => dispatch(checkNumber()),
        focus: (item, el, index) => dispatch(focus(item, el, index)),
        blur: (item, el, index) => dispatch(blur(item, el, index))
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(Items)