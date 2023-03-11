import '../styles/Skills.css'
function Skills() {
    const skills = [
        {
            keyID:1,
            image: "/images/javascript-logo.svg",
            name: "JavaScript",
            description: "Utilizando javascript em uma pagina posso modificar elementos usando o DOM em conjunto com a manipulação de eventos para deixar as interações da pagina mais dinâmicas para os usuários."
        },
        {
            keyID:2,
            image: "/images/css3-logo.svg",
            name: "CSS 3",
            description: "Com o css além de estilizar elementos da pagina tenho a capacidade de criar layouts responsivos utilizando Flexbox ou Grid."
        },
        {
            keyID:3,
            image: "/images/html5-logo.svg",
            name: "HTML 5",
            description: "Tenho o conhecimento da importancia da semântica das tags que quando aplicadas de forma correta é possivel obter um melhor posicionamento nos mecanismos de busca além de auxilizar leitores de acessibilidade."
        },
        {
            keyID:4,
            image: "/images/reactjs-logo.svg",
            name: "React",
            description: "Possuo o conhecimento da criação de componentes reutilizáveis, Criação de interfaces de usuários dinâmicas e utilização de rotas para evitar o recarregamento da pagina deixando as interações mais rapidas."
        }

    ]
    return (
        <div className="section_wrapper">
            <section>
                <div className="skills_content">
                    <div className="skills_items">
                        {skills.map((el) =>
                            <div key={el.keyID} className="skill">
                                <div className="skill_logo">
                                    <img src={el.image} alt={el.name} />
                                </div>
                                <div className="skill_description">
                                    <h1>{el.name}</h1>
                                    <p>{el.description}</p>
                                </div>
                            </div>
                        )}

                    </div>
                </div>
            </section>
        </div>

    )
}

export default Skills