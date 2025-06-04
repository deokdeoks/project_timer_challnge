import {forwardRef, useImperativeHandle, useRef} from "react";

const ResultModal =  forwardRef(function ResultModal({result, targetTime},ref){
    return (
        <dialog ref={ref} className="result-modal">
        <h2>You {result}</h2>
        <p>the target time was <strong>{targetTime} seconds.</strong></p>
        <p>you stopped the timer with <strong>X seconds left.</strong></p>
        <form method="dialog">
            <button>Close</button>
        </form>
    </dialog>
    );
});

export default ResultModal;