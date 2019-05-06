import React from 'react';

const validation = (props) => {

    let validationMessage = <p>Text long enoght</p>;

    if (props.inputLenght <= 5){
        validationMessage = <p>Text too short!</p>;
    }
                        

    return (
        <div>
            {
                // props.inputLenght > 5 ?
                //     <p>Text long enought</p> :
                //     <p>Text too short!</p>
                validationMessage
            }
        </div>
    );
};

export default validation;