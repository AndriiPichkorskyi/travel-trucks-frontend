import React from "react";
import Container from "../../components/Container/Container";
import css from "./Home.module.css";
import Button from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";

export default function Home() {
    const navigate = useNavigate();
    const buttonOnClick = () => navigate("/catalog");
    return (
        <section className={css.hero}>
            <Container>
                <div className={css.content}>
                    <h1 className={css.title}>Campers of your dreams</h1>
                    <p className={css.subtitle}>You can find everything you want in our catalog</p>
                    <Button className={css.button} onClick={buttonOnClick}>
                        View Now
                    </Button>
                </div>
            </Container>
        </section>
    );
}
