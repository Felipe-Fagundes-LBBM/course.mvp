import styles from "@/app/page.module.css"
import Link from "next/link"

export default function Navbar() {
    return(
        <div className={styles.menu}>
            <nav>
                <Link href="/admin/colaborador">Colaborador</Link>
                <Link href="/admin/projeto">Projeto</Link>
            </nav>
        </div>
    )
}