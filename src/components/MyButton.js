import { React } from 'react';
import Button from 'react-bootstrap/Button';

function MyButton(props) {

    const defaultProps = {
        onClick: "",
        variant: "light", 
        type: "button", 
        name: "",  // innerHTML
        size: 'md'
    };

    props = {...defaultProps, ...props}

    return (
        <div>
            <Button 
                variant={props.variant}
                size={props.size}
                type={props.type}
                onClick={props.onClick}
                className="btn-secondary bg-secondary text-light">
                {props.name} 
            </Button>
        </div>
    )
}

export { MyButton };
