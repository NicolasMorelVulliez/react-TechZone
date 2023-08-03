import React from 'react'
import "./Footer.css"
import fb from './assets/icons8-facebook.svg'
import instagram from './assets/icons8-instagram.svg'
import tw from './assets/icons8-twitter.svg'
import yt from './assets/icons8-youtube-play.svg'



const Footer = () => {
    return (
        <div className='footer'>
            <footer className="pie-pagina">
                <div className="grupo-1">
                    <div className="box">
                        <figure>
                            <a href="/">
                                <img src="https://i.ibb.co/vxRp56F/zyro-image.png" alt="" />
                            </a>
                        </figure>
                    </div>
                    <div className="box">
                        <h2>Sobre Nosotros</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, ipsa?</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, ipsa?</p>
                    </div>
                    <div className="box">
                        <h2>Redes Sociales</h2>
                        <div class="red-social">
                            <a href="/" ><img className='iconos' src={fb} alt="" /></a>
                            <a href="/" ><img className='iconos' src={instagram} alt="" /></a>
                            <a href="/" ><img className='iconos' src={tw} alt="" /></a>
                            <a href="/" ><img className='iconos' src={yt} alt="" /></a>
                        </div>
                    </div>
                </div>
                <div className="grupo-2">
                    <small>&copy; 2023 <b>TechZone</b> - Todos los Derechos Reservados.</small>
                </div>
            </footer>

        </div>
    )
}

export default Footer