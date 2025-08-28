import { Link } from "react-router-dom"
import type { SideBarLinkType } from "../../utils/types"
import styles from './SideBar.module.css';


function SideBarLink({link}:{link:SideBarLinkType}) {
    return (
        <Link to={link.link} className={styles.navLink}>
            <div className={styles.flex}>
                {link.icon}
                <h5>{link.title}</h5>
            </div>
        </Link>
    )
}

export default SideBarLink