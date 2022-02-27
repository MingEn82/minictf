export default function CenterText({ children }) {
  return <div
    style={{
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      textAlign: "center",
    }}
  >
    {children && children.length > 1
      ? children.map((child, i) => {
        return <p>
          {child}<br/><br/>
        </p>
      })
      : children
    }
  </div>;
}