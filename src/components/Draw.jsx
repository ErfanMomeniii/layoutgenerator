import './../App.css';
import React from 'react'
function Draw(props){
        function draw(o,num){
                const divs = [];
                switch(o){
                case 'XL':
                        for(let i=0;i<num;i++){
                                divs.push( <div className='App-xl'>XL</div>);
                        }
                        break;
                case 'L':
                        
                        for(let i=0;i<num;i++){
                                divs.push( <div className='App-l'>L</div>);
                        }
                        break;
                case'SM':

                        for(let i=0;i<num;i++){
                                divs.push( <div className='App-sm'>SM</div>);
                        }
                        break; 
                }
                return divs
        }

return(
        <div>
               {draw(props.o,props.num)}
        </div>
);
}
export default Draw;