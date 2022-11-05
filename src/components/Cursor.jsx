import React, { useEffect, useRef } from 'react';

const Cursor = () => {

    const cursorRef = useRef(null);

    useEffect(() => {
        document.addEventListener("mousemove", (e) => {
            const { clientX, clientY } = e;
            const mouseX = clientX - cursorRef.current.clientWidth / 2;
            const mouseY = clientY - cursorRef.current.clientHeight / 2;
            cursorRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`
        })
    }, [])

    return (
        <div ref={cursorRef} className="fixed pointer-events-none z-50 w-[40px] h-[40px] border rounded-[50%] border-[#0496ff]">

        </div>
    )
}

export default Cursor;