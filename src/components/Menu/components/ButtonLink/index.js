import React from 'react';

function ButtonLink(props){
    // props => {className: "o qu mandarem", haref: "/"}
  
    return(
        <a href={props.href} className={props.className}>
           {props.children}
        </a>
       
    );
}

 export default ButtonLink;