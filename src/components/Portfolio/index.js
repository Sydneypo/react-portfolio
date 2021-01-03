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
                        <img src="/img/taskmaster-pro.png" id="photo" alt="Taskmaster-pro"></img>
                        <div id="overlay">
                            <div id="text">Taskmaster Pro</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="column">
                    <div className="content">
                        <img src="/img/zookeepr.png" id="photo" alt="Zookeeper app"></img>
                        <div id="overlay">
                            <div id="text">Zookeepr</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="column">
                    <div className="content">
                        <img src="/img/note-taker.png" id="photo" alt="Note-Taker app"></img>
                        <div id="overlay">
                            <div id="text">Note Taker</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="column">
                    <div className="content">
                        <img src="/img/food-festival.png" id="photo" alt="Food Festival app"></img>
                        <div id="overlay">
                            <div id="text">Food Festival</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="column">
                    <div className="content">
                        <img src="/img/work-planner.png" id="photo" alt="Work Planner app"></img>
                        <div id="overlay">
                            <div id="text">Work Day Planner</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="column">
                    <div className="content">
                        <img src="/img/coding-quiz.png" id="photo" alt="Coding quiz"></img>
                        <div id="overlay">
                            <div id="text">Coding Quiz</div>
                        </div>
                    </div>
                </div>
            </div>
            

        </section>
    );
}

export default Portfolio;
