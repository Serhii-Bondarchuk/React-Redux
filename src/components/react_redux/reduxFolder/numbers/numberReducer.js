import {ADD_LINE, COUNT, DEL_LINE, ADD_NUMBER, CH_PERSENT, LEAVE} from './numberTypes' 







function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}


const initialState = {
    arrayOfNumbers: [],
    countLine: {},
    middle : []
}

 

const numberReducer = ( state = initialState, action  ) => {
	switch(action.type) {

   case ADD_LINE:

    let a = randomInteger(100, 999);
    let b = randomInteger(100, 999);
    let c = randomInteger(100, 999);
    let d = (a + b + c);
    
             let arr = state.arrayOfNumbers
             let count = [].concat(...arr)

          let  newItem = [[
        { id: count.length + 1, number: a },
        { id: count.length + 2, number: b },
        { id: count.length + 3, number: c },
        { id: count.length + 4, number: d }
      ]
    ]
        
      return{
          
     	...state, 
     	arrayOfNumbers :  state.arrayOfNumbers.concat(newItem)
        
     }

       case ADD_NUMBER:
          
  if (action.payload1 % 4 == 0) {return state}

       return {
           ...state, 

           arrayOfNumbers: state.arrayOfNumbers.map( (el, index) => {

                                 state.arrayOfNumbers[index][3].number =
                                 state.arrayOfNumbers[index][0].number +
                                 state.arrayOfNumbers[index][1].number +
                                 state.arrayOfNumbers[index][2].number
              
                    el.map( (el2, ind) => { 
                                            
                          if ( action.payload1 == el2.id && action.payload2 == el2.number &&
                          ind != 3  ){
                               
                               el2.number++ 
                                   
                                   var array = state.arrayOfNumbers,
                                  result = array.reduce(function (r, a) {
                                      a.forEach(function (b, i) {
                                          r[i] = (r[i] || 0) + b.number;
                                          console.log( r )
                                      });
                                      return r;
                                  }, []);

                         state.middle[ind] =
                          (result[ind]/state.arrayOfNumbers.length).toFixed(1) 
  
                         }
  
                     } ) 
                               
                  return el      
           } ) 
       
       } 

          case COUNT:
                
           let countLine = action.payload
           let newArr = [] ; 

                
    for (var i = 0; i < countLine.length  ; i++) {
               
        for (var z = 0; z < 4; z++) {
                        
              function arraySum(countLine) {
                   
                  var vix = 0;

                  for (var i = 0; i < countLine.length; i++) {
                   
                  vix += (countLine[i][z].number) / (countLine.length);
                  }

                  return vix.toFixed(1);
              }
                  arraySum(countLine)
               newArr = [...newArr].concat(arraySum(countLine))     

         }
             let uniqArray = newArr.filter( (item, index ) =>{
                 if( countLine.length - 1  == i ) {
                   return index === newArr.indexOf(item)
                  }

             }  )

        newArr = uniqArray

    }
 
      return{
          
        ...state,  middle : newArr
     }   

     case DEL_LINE: 
               
     return {
        ...state, arrayOfNumbers :  state.arrayOfNumbers.slice(
             0, state.arrayOfNumbers.length - 1

         )
     }


       case CH_PERSENT:

            return {
 
                ...state, 

                  arrayOfNumbers: 

                  state.arrayOfNumbers.map((arr2, index) => {
                                           
                       if (  action.payload1.id % 4 == 0 && action.payload3 == index ){

                          arr2.map( (arr2, ind )=> {
                          if (ind == 3) {return} 
                                                       
                             arr2.number = (((Number(arr2.number)) * 100) / action.payload1.number).toFixed(2) + '%' ;
                          

                      document.querySelector('#s' + arr2.id).style['width'] = arr2.number
                      document.querySelector('#s' + arr2.id).style['background-color'] = 'green';
                      document.querySelector('#s' + arr2.id).style['transition-duration'] = '1000ms';

                 } ) 

                    } 

                return arr2;
            })


            }   // end return case CH_PERSENT



              case LEAVE:

            let str;

            return { 
                ...state,
                  arrayOfNumbers: state.arrayOfNumbers.map((arr2, index) => {
                                        
                    if (action.payload3 == index &&  action.payload1.id % 4 == 0) {
             
                          for (var j = 0; j < 3; j++) {
                      
                              const str = arr2[j].number;
                                 
                              arr2[j].number = Number(str.substr(-str.length, str.length - 1));
                                 
                              arr2[j].number =

                               Math.round((arr2[j].number * arr2[3].number) / 100);
                                document.querySelector('#s' + (arr2[j].id)).style['width'] = '0%';

                           }
                    } 

                return arr2;
            })

            }   

		default: return state
	} 
} 

export default numberReducer
