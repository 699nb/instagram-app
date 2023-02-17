import React from "react";
import { Link } from "react-router-dom";
import { AuthPath } from "../../../services/Path";
import cls from "../../../assets/styles/forms/Forms.module.scss"



export default function AuthNavigate({location}) {
    return(
        <div className={cls.auth_page_bottom_card} data-aos="zoom-in-up">
            <p>
                {
                    location === "login" 
                        ? "У вас ещё нет аккаунта?" 
                        : "Есть аккаунт?"
                }
                <Link to={
                    location === "login"
                        ? AuthPath.register
                        : AuthPath.login
                }>
                    {
                        location === "login"
                            ? "Зарегестрироваться"
                            : "Вход"
                    }
                </Link>
            </p>
        </div>
    )
}