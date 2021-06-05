import React from 'react'

export default function About() {
    return (
        <div>
            <blockquote class="blockquote text-center">
                <p class="mb-0">Thank you for giving this Opportunity!</p>
                <footer class="blockquote-footer"> <cite title="Source Title">Vijaya Shree Kanwal</cite></footer>
            </blockquote>

            <div class="row justify-content-center">
                <div class="col-md-6">
                    <div class="card text-white bg-primary ">
                      <img height='200px' width='200px' class=" rounded-circle align-self-center m-3" src="https://avatars.githubusercontent.com/u/56352158?v=4" alt="My pic"/>
                      <div class="card-body">
                        <h4 class="card-title">Vijaya Shree Kanwal</h4>
                        <p class="card-text">Web and Android Developer</p>
                      </div>
                    </div>
                </div>
            </div>
            <div class="row justify-content-center m-2">
                <div class="col-md-8">
                    <div class="card-deck">
                        <div class="card">
                            <div class="card-body">
                                <h4 class="card-title">My Skills</h4>
                                <ul class="list-group">
                                    
                                <li class="list-group-item"> React.js</li>
                                <li class="list-group-item"> JavaScript</li>
                                <li class="list-group-item"> Java</li>
                                <li class="list-group-item"> PHP</li>
                                <li class="list-group-item"> Android Deveopment using Java</li>
                                    <li class="list-group-item "><i class="fa fa-html5" aria-hidden="true"></i>HTML5</li>
                                    
                                    <li class="list-group-item "><i class="fa fa-css3" aria-hidden="true"></i>CSS</li>
                                </ul>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-body">
                                <h4 class="card-title">My Projects Links</h4>
                                <div class="list-group">
                                    <a href="http://lpu.infinityfreeapp.com/event_manager/" class="list-group-item list-group-item-action btn bg-primary text-white ">Event Manager (PHP,HTML,CSS,JS)</a>
                                    <a href="https://todolist-33c98.web.app/home" class="list-group-item list-group-item-action  btn bg-primary text-white ">Todo list (React.js,JS,CSS)</a>
                                    <a href="#" class="list-group-item list-group-item-action disabled">Disabled item</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
            </div>
        </div>
    )
}
