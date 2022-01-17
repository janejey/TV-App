import './menu-item.scss'

function MenuItem({ icon, name, hovered }) {
    return (
        <div className={`item-container ${name==="Home" && !hovered ? "selected" : "" }` }>
            <img src={icon} alt="name" />
            {hovered ?
                <div className='icon-name'>{name}</div>
                :
                ""
            }
        </div>
    )
}

export default MenuItem;