import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { addLine, putCount, delLine, addNumber } from './reduxFolder/numbers/numberActions'
import ListItems from './ListItems'



function Container(props) {

    useEffect(() => {

        props.putCount(props.arrayOfNumbers)

    }, [props.arrayOfNumbers.length])


    return (
        <div  className = 'mainBox' style = {{ marginTop: '200px', margin: '0, auto'  }}   > 

                 <span style = {{ display: 'block',  marginBottom : '100px', color: 'black', textAlign:'center',
                  fontSize: '50px '  }}> Programm
                      <br/>
                    <span 
                     
                    style = {{fontSize: '30px'}}  
 
                   >( created by Serhii Bondarhuk ) </span></span>

                  <br/>
                 <button
                     
                     style = {{ marginLeft: '20px',  marginRight: '10px', 
                     backgroundColor: 'blue', width: '100px', height: '40px'   }}

                  className = 'btn btn-info'  onClick = { () =>  {
                  return  props.addLine(props.arrayOfNumbers.number),  props.putCount(props.arrayOfNumbers)
                 } }
                 
                  > Add Line </button>

                 <button

                     style = {{ width: '100px', height: '40px'  }}

                  className = 'btn btn-danger'  onClick = { () =>  {
                  return  props.delLine(props.arrayOfNumbers.number),  props.putCount(props.arrayOfNumbers)

                 } }
                 
                  > Del Line  </button>


                  <br/> <br/>

     <h2>
     
    { (props.arrayOfNumbers.length == 0)
      ? 
      `For Start - Press ADD_LINE`  
      : null
    }
     </h2>
                 <div className = 'together ' >

                  { 

                       props.arrayOfNumbers.map( (el, index) =>  {

                          return  < ListItems key = {index}  index = {index}  el = {el} />

                       })

                  }

            <div>
              <div>
                   <div className = 'level3 '  style = {{ margin: '10px', display: 'flex', }} >
                    
                   {     
                         
                            props.middle.map( item => {
                             
                             return (
                           
                                    
                                     <div   style = {{ width: '25%', margin: '10px', 

                           border: '1px solid blue', borderRadius: '8px', cursor: 'pointer',
                            justifyContent: 'center', textAlign: 'center', position: 'relative',



                                       }} >
                                        < div className = 'btn midleBox '   style = {{ 
                                   width: '100%' , position: 'inherit', fontSize: '30px',
                                   color: 'blue', backgroundColor: 'gold', borderRadius: '8px',


                                         }} >
                                            {item} 
                                        </div >
                                     </div>                        

                              )

                         } ) }

                     </div>
                   
                  </div>
                 </div>

             </div> <
        /div>

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
        addLine: (count) => dispatch(addLine(count)),
        putCount: (count) => dispatch(putCount(count)),
        delLine: (count) => dispatch(delLine(count))

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Container)