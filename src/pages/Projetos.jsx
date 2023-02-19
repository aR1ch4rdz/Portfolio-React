import "../Projetos.css"
import { useEffect, useRef } from "react"

function Projetos() {
    let sliderPos = 1
    let margin = 0
    const Slider = useRef(null)
    const arrowleft = useRef(null)
    const arrowright = useRef(null)

    const detectarTecla = (e) => {
        if (e === "ArrowRight") {
            if (sliderPos < 6) {
                margin -= 30
                Slider.current.style.marginLeft = margin + "vw"
                Slider.current.children[sliderPos].classList.remove("current_item")
                sliderPos++
                Slider.current.children[sliderPos].classList.add("current_item")
            }
            if (sliderPos === 6) {
                arrowright.current.classList.add("cantClick")
            }else{
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
            }else{
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
                    <div className="slider_container">
                        <div className="slider_gallery">
                            <div ref={Slider} className="slider">
                                <div onClick={() => { console.log("clicado") }} className="slide"></div>
                                <div onClick={() => { console.log("clicado") }} className="slide current_item"></div>
                                <div onClick={() => { console.log("clicado") }} className="slide"></div>
                                <div onClick={() => { console.log("clicado") }} className="slide"></div>
                                <div onClick={() => { console.log("clicado") }} className="slide"></div>
                                <div onClick={() => { console.log("clicado") }} className="slide"></div>
                                <div onClick={() => { console.log("clicado") }} className="slide"></div>
                            </div>
                        </div>
                    </div>
                </div>


            </section>
        </div>

    )
}

export default Projetos