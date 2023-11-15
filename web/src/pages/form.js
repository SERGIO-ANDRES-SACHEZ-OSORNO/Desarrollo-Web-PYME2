import React from "react";
import './form.css'
import { Link } from "react-router-dom";
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"></link>
const Form=() => (
    <section>
        <h1>FORMULARIO</h1>
        <form class="form_registro" action="">
            <input class="input" type="text" placeholder="&#128100; Nombre" required autofocus></input>
            <input class="input" type="email" placeholder="&#8962; Direccion"required></input>
            <input class="input" type="tel" placeholder="&#128222; Telefono" required></input>
            <input class="input" type="text" placeholder="&#9993; E-mail" required></input>
            <input class="input" type="text" placeholder="&#x2194; Ciudad" required></input>
            <input class="input" type="text" placeholder="&#x2194; Edad" required></input>
            <section class="btn_form">
                <input class="btn_submit" type="submit" value="Enviar"></input>
                <input class="btn_submit" type="reset" value="Limpiar"></input>
            </section> 
            <section class="piepagina">
    <section class="buttons">
        <Link to="#" class="fa fa-facebook"></Link>        
        <Link to="#" class="fa fa-twitter"></Link>
        <Link to="#" class="fa fa-google-plus"></Link>
        <Link to="#" class="fa fa-youtube"></Link>
        <Link to="#" class="fa fa-linkedin"></Link> 
    </section>
</section>
        </form>      
    </section>
    
)
export default Form