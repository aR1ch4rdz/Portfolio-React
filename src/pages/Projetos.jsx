import "../styles/Projetos.css"
import { useRef } from "react"

function Projetos() {
    const galerry = [
        { keyId: 1, nome: "Clima", source: "/images/clima.png", link: "https://wheater-site-api.vercel.app/" },
        { keyId: 2, nome: "Double11 Clone", source: "/images/Double11Main.png", link: "https://double11copia.vercel.app/" },
        { keyId: 3, nome: "Jogo da memória", source: "/images/memorygame.png", link: "https://projeto-jogoda-memoria-demo-week-6l6oxahg7-arichard.vercel.app/" },
        { keyId: 4, nome: "Portifolio React", source: "/images/home-teste.png"}
    ]
    let sliderPos = 0
    let margin = 0
    const Slider = useRef()
    const arrowleft = useRef()
    const arrowright = useRef()

    const detectarTecla = (e) => {
        if (e === "ArrowRight") {
            if (sliderPos < galerry.length - 1) {
                margin -= 30
                Slider.current.style.marginLeft = margin + "vw"
                Slider.current.children[sliderPos].classList.remove("current_item")
                sliderPos++
                Slider.current.children[sliderPos].classList.add("current_item")
            }
            if (sliderPos === galerry.length - 1) {
                arrowright.current.classList.add("cantClick")
            } else {
                arrowleft.current.classList.remove("cantClick")
            }
        }
        else if (e === "ArrowLeft") {
            if (sliderPos > 0) {
                margin += 30
                Slider.current.children[sliderPos].classList.remove("current_item")
                Slider.current.style.marginLeft = margin + "vw"
                sliderPos--
                Slider.current.children[sliderPos].classList.add("current_item")
            }
            if (sliderPos === 0) {
                arrowleft.current.classList.add("cantClick")
            } else {
                arrowleft.current.classList.remove("cantClick")
                arrowright.current.classList.remove("cantClick")
            }
        }
    }
    return (
        <div className="section_wrapper">
            <section>
                <div className="projects_wrapper">
                    <div className="control_wrapper">
                        <h1 className="project_title">Projetos</h1>
                        <div className="slider_controls">
                            <div className="left_arrow" ref={arrowleft} onClick={() => detectarTecla("ArrowLeft")}>&lt;</div>
                            <div className="right_arrow" ref={arrowright} onClick={() => detectarTecla("ArrowRight")} >&gt;</div>
                        </div>
                    </div>
                    <div className="slider_container hide-scrollbar">
                        <div className="slider_gallery">
                            <div ref={Slider} className="slider">
                                {galerry.map((slide, i) =>
                                    <div key={slide.keyId} className={i === 0 ? "current_item slide" : "slide"} >
                                        <div className="project_name"><h1>{slide.nome}</h1></div>
                                        <a href={slide.link} target="_blank">
                                            <div className="project_image">
                                                <img src={slide.source} alt="home" />
                                            </div>
                                        </a>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Projetos