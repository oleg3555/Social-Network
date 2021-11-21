import React from "react";
import styles from "./ProfileInfo.module.css";

export const ProfileInfo = () => {
    return (
        <div className={styles.profile}>
            <img alt="avatar"
                 src="https://2.bp.blogspot.com/-KX_XNRWYQC4/V7wAGRDlqaI/AAAAAAAACdA/SA8_ff2oS_MyIiAD7Kzoy5oEhD3bLddwQCLcB/s1600/Kurt%2BCobain.jpg"
            />
            <div className={styles.user}>
                <h3 className={styles.name}>
                    Kurt Cobain
                </h3>
                <div className={styles.description}>
                    Американский рок-музыкант, вокалист, гитарист и автор песен.
                    Наиболее известен как основатель и лидер рок-группы «Nirvana».
                    В середине 1980-х годов Кобейн увлёкся панк-роком,
                    а в 1987 году вместе с Кристом Новоселичем образовал группу «Nirvana»
                </div>
            </div>
        </div>
    )
}