import React, { useState } from "react";
import styles from "./Login.module.css"

const Password = () => {
    const onPasswordComplete = (e) => {
        console.log(e.target.value);
    };

    return (
        <div className={styles.userContainer}>
            Password
            <input
                type="password"
                onBlur={onPasswordComplete} 
            />
        </div>
    );
};

export default Password;