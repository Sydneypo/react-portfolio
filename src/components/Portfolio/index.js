import React from 'react';


function Portfolio() {

    return(
        <section className="portfolio">
            <div id="port-div">
                <h2 id="portfolio">Portfolio</h2>
            </div>
            <div className="row">
                <div className="column">
                    <div className="content">
                        <a href="https://sydneypo.github.io/taskmaster-pro/">
                           <img src="/img/taskmaster-pro.png" id="photo" alt="taskmaster" /> 
                        </a>
                        <h3>Taskmaster Pro 
                            <a href="https://github.com/Sydneypo/taskmaster-pro">
                                <img src="/img/simple-github.png" alt="" width="60" height="60"></img>
                            </a>   
                        </h3>
                        <h4>Third-Party API</h4>
                    </div>
                </div>
                <div className="column">
                    <div className="content">
                        <a href="https://hidden-springs-68510.herokuapp.com/">
                            <img src="/img/zookeepr.png" id="photo" alt="Zookeeper" />
                        </a>
                        <h3>Zookeepr
                            <a href="https://github.com/Sydneypo/zookeepr">
                                <img src="/img/simple-github.png" alt="" width="60" height="60"></img>
                            </a>
                        </h3>
                        <h4>Node.js</h4>
                    </div>
                </div>
                <div className="column">
                    <div className="content">
                        <a href="https://sydneypo.github.io/coding-quiz/">
                            <img src="/img/coding-quiz.png" id="photo" alt="Coding-quiz" />
                        </a>
                        <h3>Coding Quiz
                            <a href="https://github.com/Sydneypo/coding-quiz">
                                <img src="/img/simple-github.png" alt="" width="60" height="60"></img>
                            </a>
                        </h3>
                        <h4>JavaScript</h4>
                    </div>
                </div>
                <div className="column">
                    <div className="content">
                        <a href="https://sydneypo.github.io/food-festival/">
                            <img src="/img/food-festival.png" id="photo" alt="food-festival" />
                        </a>
                        <h3>Food Festival
                            <a href="https://github.com/Sydneypo/food-festival">
                                <img src="/img/simple-github.png" alt="" width="60" height="60"></img>
                            </a>
                        </h3>
                        <h4>Webpack / PWA</h4>
                    </div>
                </div>
                <div className="column">
                    <div className="content">
                        <a href="https://agile-sands-35744.herokuapp.com/">
                           <img src="/img/note-taker.png" id="photo" alt="Note-Taker" /> 
                        </a>
                        
                        <h3>Note Taker
                            <a href="https://github.com/Sydneypo/note-taker">
                                <img src="/img/simple-github.png" alt="" width="60" height="60"></img>
                            </a>
                        </h3>
                        <h4>Express.js</h4>
                    </div>
                </div>
                <div className="column">
                    <div className="content">
                        <a href="https://sydneypo.github.io/challenge-week-5/">
                          <img src="/img/work-planner.png" id="photo" alt="work-planner" />  
                        </a>
                        <h3>Work Planner
                            <a href="https://github.com/Sydneypo/challenge-week-5">
                                <img src="/img/simple-github.png" alt="" width="60" height="60"></img>
                            </a>
                        </h3>
                        <h4>Third-Party API</h4>

                    </div>
                </div>
            </div>
            
        </section>
    );
}

export default Portfolio;
