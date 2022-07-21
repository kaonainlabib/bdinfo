import React from "react";
function Mouse() {
  const mousePosition = useMousePosition();

  return (
    <div className="hidden sm:block">
        <div
          className="fixed w-16 h-16 bg-slate-400 rounded-full translate-x-[-50%] translate-y-[-50%] z-10 opacity-10"
          style={{ top: `${JSON.stringify(mousePosition?.y)}px`,
           left: `${JSON.stringify(mousePosition?.x)}px` }}
        ></div>
      <div
        className="fixed w-10 h-10 bg-stone-600 rounded-full translate-x-[-50%] translate-y-[-50%] z-10 opacity-25"
        style={{ top: `${JSON.stringify(mousePosition?.y)}px`,
        left: `${JSON.stringify(mousePosition?.x)}px` }}
      ></div>
        <div
          className="fixed w-5 h-5 bg-slate-700 rounded-full translate-x-[-50%] translate-y-[-50%] z-10 opacity-50"
          style={{ top: `${JSON.stringify(mousePosition?.y)}px`,
           left: `${JSON.stringify(mousePosition?.x)}px` }}
        ></div>
    </div>
  );
}

const useMousePosition = () => {
  const [mousePosition, setMousePosition] = React.useState({
    x: null,
    y: null,
  });

  React.useEffect(() => {
    const updateMousePosition = (ev) => {
      setMousePosition({ x: ev.clientX, y: ev.clientY });
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return mousePosition;
};
export default Mouse;
