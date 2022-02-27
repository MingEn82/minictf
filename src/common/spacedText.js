export default function CenterText({ children }) {
    return <div>
        {children && children.length > 1
            ? children.map((child, i) => {
                return <p key={i}>
                    {child}<br/><br/>
                </p>
            })
            : children
        }
    </div>
}