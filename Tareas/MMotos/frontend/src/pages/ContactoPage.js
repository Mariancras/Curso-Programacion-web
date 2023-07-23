import React from 'react';

const ContactoPage = (props) => {
    return (
        <main className="holder">
        <img className="banner" src="img/contacto.jpg" alt="pareja intercom"/>

        <section className="contacto">
            <div>
            <h2>Contacto Rápido</h2>
            <form action="" method="" className="formulario">
                <p>
                    <label for="nombre">Nombre</label>
                    <input type="text" name="" placeholder="Ingresa tu nombre" />
                </p>
                <p>
                    <label for="email">Email</label>
                    <input type="text" name="" placeholder="Ingresa un mail para responderte" />
                </p>
                <p>
                    <label for="telefono">Telefono</label>
                    <input type="text" name="" placeholder="Ejemplo: (+54) 11 62897251" />
                </p>
                <p>
                    <label for="mensaje">Mensaje</label>
                    <textarea name="" id="" cols="30" rows="10" maxlength="2500"></textarea>
                </p>
                <p>
                    <input type="submit" value="Enviar"/>
                </p>
            </form>
        </div>
        
        <div className="datos">
            <h2>Otras vias de comunicación</h2>
            <p>También puede contactarse con nosotros usando los siguientes medios</p>
            <ul>
                <li>Teléfono: 47541252</li>
                <li>Email: contacto@mmotos.com.ar</li>
                <li>Facebook: </li>
                <li>Twitter: </li>
                <li>Skype: </li>
            </ul>
        </div>
    </section>
    </main>
    );
}

export default ContactoPage;