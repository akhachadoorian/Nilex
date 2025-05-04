import react from "react";

function Eyebrow({text, color, center}) {

    const eyebrow_color = color ? color : "var(--primary-darker-40"
    return (
        <div className="eyebrow" style={center ? {justifyContent: "center"} : {justifyContent: "flex-start"}}>
            <svg xmlns="http://www.w3.org/2000/svg" width="23" height="28" viewBox="0 0 23 28" fill="none">
                <path d="M1 7.49099L11.2284 1.5L22 7.49099V20.509L11.2284 26.5L1 20.509V7.49099Z" stroke={eyebrow_color} stroke-width="2"/>
            </svg>

            <h6 style={{color: {eyebrow_color}}}>{text}</h6>
        </div>
    )
}

export default Eyebrow