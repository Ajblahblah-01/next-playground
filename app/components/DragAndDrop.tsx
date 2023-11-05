"use client"
import { useEffect, useState } from "react";

const DragAndDrop = ({ children } : {children : React.ReactNode}) => {
  const [isDragging, setIsDragging] = useState(false);
  const [xTranslate, setXTranslate] = useState(0);
  const [yTranslate, setYTranslate] = useState(0);
  const [initialMousePosition, setInitialMousePosition] = useState({});

  const onMouseDown = ({ clientX, clientY } : {clientX : number , clientY : number}) => {
    setInitialMousePosition({ x: clientX, y: clientY });
    setIsDragging(true);
  };

  useEffect(() => {
    const onMouseMove = (e : any) => {
      setXTranslate(xTranslate + e.clientX - initialMousePosition.x);
      setYTranslate(yTranslate + e.clientY - initialMousePosition.y);
    };
    if (isDragging) {
      window.addEventListener("mousemove", onMouseMove);
    }
    return () => window.removeEventListener("mousemove", onMouseMove);
  }, [isDragging, initialMousePosition]);

  useEffect(() => {
    const onMouseUp = () => setIsDragging(false);
    window.addEventListener("mouseup", onMouseUp);
    return () => window.removeEventListener("mouseup", onMouseUp);
  }, []);
  
  return (
    <div
      style={{ transform: `translate(${xTranslate}px,${yTranslate}px)` }}
      onMouseDown={onMouseDown}
    >
      {" "}
      {children}
    </div>
  );
};

export default DragAndDrop;
