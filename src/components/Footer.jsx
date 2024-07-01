
export default function Footer(props) {

    const { handleToggleModal } = props

    return (
        <footer>
            <div className="bgGradient"></div>
            <div>
                <h2>The Harsh Martian Land</h2>
                <h1>The APOD Project</h1>
            </div>
            <button onClick={handleToggleModal}>
                <i className="fa-solid fa-circle-info"></i>
            </button>

        </footer>
    )
}

