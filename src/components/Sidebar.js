import { useState } from 'react'

const Sidebar = () => {
    const [display, setDisplay] = useState(false)

    const handleDisplay = () => {
        setDisplay(!display)
    }

    return (
        <div className={display ? "sidebar-container-open" : "sidebar-container-closed"}>
            <button onClick={handleDisplay}> Toggle Display </button>
        </div>
    )
}

export default Sidebar