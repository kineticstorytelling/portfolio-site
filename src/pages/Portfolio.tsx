
const Portfolio = () => {
  return (
    // My Work
    <div>
        <section>
            <div className="designs">
                <div className="portfolio__body--portfolio" id="portfolio">
                    <div className="designs">
                        <h2 className="portfolio__title--portfolio">Past Designs</h2>

                        <div className="portfolio project__content1">
                            <div>
                                <p className="portfolio project--overline">Featured Project</p>
                                <h3>
                                    <a href="https://github.com">Jehlyo</a>
                                </h3>
                                <div className="portfolio project--description1">
                                    <p>I developed a web application that helps users choose between differently priced products in markets</p>
                                </div>
                                <ul>
                                    <li>Figma</li>
                                    <li>React</li>
                                    <li>TailwindCSS</li>
                                    <li>Python</li>
                                    <li>Flask</li>
                                    <li>PostgreSQL</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>

  )
}

export default Portfolio