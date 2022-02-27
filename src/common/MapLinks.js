function North ({ href }) {
    return <a
        style={{
            position: "absolute",
            top: 10,
            left: "50%",
            fontSize: "1.5em",
            transform: "translate(-50%, 0)",
      }}
      href={href}
    >
      North
    </a>
}

function South ({ href }) {
    return <a
        style={{
            position: "absolute",
            bottom: 10,
            left: "50%",
            fontSize: "1.5em",
            transform: "translate(-50%, 0)",
      }}
      href={href}
    >
      South
    </a>
}

function West ({ href }) {
    return <a
        style={{
            position: "absolute",
            top: "50%",
            left: 10,
            fontSize: "1.5em",
            transform: "translate(0, -50%)",
      }}
      href={href}
    >
      West
    </a>
}

function East ({ href }) {
    return <a
        style={{
            position: "absolute",
            top: "50%",
            right: 10,
            fontSize: "1.5em",
            transform: "translate(0, -50%)",
      }}
      href={href}
    >
      East
    </a>
}

export {
    North,
    South,
    East,
    West,
}
