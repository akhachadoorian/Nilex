import react, { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleUp, } from "@fortawesome/free-solid-svg-icons";

function Accordion({header, body}) {
    const [isOpen, setIsOpen] = useState(false);
    const answerRef = useRef(null);

    const toggleAccordion = () => {
        setIsOpen(prev => {
            const newState = !prev;
            if (answerRef.current) {
                answerRef.current.style.maxHeight = newState
                    ? `${answerRef.current.scrollHeight}px`
                    : '0px';

                answerRef.current.style.paddingTop = newState ? '16px' : '0px';
            }
            return newState;
        });
    };

    // Ensure correct height on initial mount
    useEffect(() => {
        if (answerRef.current) {
            answerRef.current.style.maxHeight = '0px';
            answerRef.current.style.overflow = 'hidden';
            answerRef.current.style.paddingTop = '0px';
            answerRef.current.style.transition = 'max-height 0.4s ease, padding 0.4s ease';
        }
    }, []);

    return (
        <div className="accordion">
            <div className="question"  onClick={toggleAccordion}>
                <h6>{header}</h6>
                <div className="caret-holder">
                    <FontAwesomeIcon icon={faAngleUp} className={`icon ${isOpen ? "rotated" : ""}`} />
                </div>
            </div>
            <div className="answer" ref={answerRef}>

                <div className="line"></div>
                <p>{body}</p>
            </div>

        </div>
    )
}

export default Accordion