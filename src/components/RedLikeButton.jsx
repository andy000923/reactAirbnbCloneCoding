import React from 'react';
import ReactDOM  from 'react-dom';            
            
 const RedLikeButton = (props) => {           
    return (        
        <div>
            <svg
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="presentation"
                focusable="false"
                style={{
                    display: "block",
                    fill: "rgba(255, 0, 0, 1)",
                    height: 24,
                    width: 24,
                    strokeWidth: 2,
                    stroke: "white",
                    overflow: "visible",
                    position: "absolute",
                    top: 16,
                    right: 16,
                }}>
                <path d="m16 28c7-4.733 14-10 14-17 0-1.792-.683-3.583-2.05-4.95-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05l-2.051 2.051-2.05-2.051c-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05-1.367 1.367-2.051 3.158-2.051 4.95 0 7 7 12.267 14 17z"></path>
            </svg>
        </div>
    );        
 }

 export default RedLikeButton;