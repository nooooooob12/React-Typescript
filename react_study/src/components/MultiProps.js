import React from 'react';

const MultiProps = ({color,name}) => {
    return (
        <div style={{color}}>
            어서오세요 {name} 님!
        </div>
    );
};
MultiProps.defaultProps = {
    name:"김아무개",
    color:"red"
}

export default MultiProps;