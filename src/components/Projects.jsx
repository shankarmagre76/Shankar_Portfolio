import { useNavigate } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";

function Projects() {
    const navigate = useNavigate();

    function handleClickBack() {
        navigate('/about');
    }

    function handleClickForward() {
        navigate('/contact');
    }

    return (
        <div class="bg-light py-5">
            <div class="container">
                <div class="text-center mb-5">
                    <h1 class="fw-bold text-primary mb-3">My Projects</h1>
                    <p class="lead text-muted">Showcasing real-world applications of my technical skills and problem-solving abilities</p>
                </div>

                <div class="row g-4 mb-5">
                    <div class="col-lg-4 col-md-6">
                        <div class="card border-0 shadow-lg h-100">
                            <div class="card-body d-flex flex-column">
                                <div class="mb-3">
                                    <h3 class="fw-bold mb-2">Sentiment Analysis System</h3>
                                    <p class="text-muted mb-3">Java, PostgreSQL, NLP</p>
                                </div>

                                <p class="mb-4">Built a sentiment analysis system using NLP and a vendor-provided sentiment model to classify text into positive, negative, and neutral categories.</p>

                                <div class="mb-4">
                                    <h6 class="fw-bold mb-2">Technologies Used</h6>
                                    <div class="d-flex flex-wrap gap-2">
                                        <span class="badge bg-light text-dark border">Java</span>
                                        <span class="badge bg-light text-dark border">PostgreSQL</span>
                                        <span class="badge bg-light text-dark border"> NLP</span>
                                        <span class="badge bg-light text-dark border"> JDBC </span>
                                    </div>
                                </div>

                                <div class="mb-3">
                                    <h6 class="fw-bold mb-2">Key Features</h6>
                                    <ul class="list-unstyled">
                                        <li class="mb-1">
                                            <span class="text-success me-2">✓</span>
                                            <small>Java-based preprocessing pipeline</small>
                                        </li>
                                        <li class="mb-1">
                                            <span class="text-success me-2">✓</span>
                                            <small>PostgreSQL for secure data storage</small>
                                        </li>
                                        <li class="mb-1">
                                            <span class="text-success me-2">✓</span>
                                            <small>Optimized backend processing</small>
                                        </li>
                                        <li>
                                            <span class="text-success me-2">✓</span>
                                            <small>Sentiment insights generation</small>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div class="card-footer bg-transparent border-0">
                                <button class="btn btn-outline-primary w-100 mb-2">View Source Code</button>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6">
                        <div class="card border-0 shadow-lg h-100">
                            <div class="card-body d-flex flex-column">
                                <div class="mb-3">
                                    <h3 class="fw-bold mb-2">PyCodeML</h3>
                                    <p class="text-muted mb-3">AutoML Library</p>
                                </div>

                                <p class="mb-4">Developed an AutoML library capable of automatically selecting and training the most efficient machine learning model for classification and regression tasks.</p>

                                <div class="mb-4">
                                    <h6 class="fw-bold mb-2">Technologies Used</h6>
                                    <div class="d-flex flex-wrap gap-2">
                                        <span class="badge bg-light text-dark border">Python</span>
                                        <span class="badge bg-light text-dark border">Machine Learning</span>
                                        <span class="badge bg-light text-dark border">AutoML</span>
                                    </div>
                                </div>

                                <div class="mb-3">
                                    <h6 class="fw-bold mb-2">Key Features</h6>
                                    <ul class="list-unstyled">
                                        <li class="mb-1">
                                            <span class="text-success me-2">✓</span>
                                            <small>Automated model selection</small>
                                        </li>
                                        <li class="mb-1">
                                            <span class="text-success me-2">✓</span>
                                            <small>Genetic Algorithm optimization</small>
                                        </li>
                                        <li class="mb-1">
                                            <span class="text-success me-2">✓</span>
                                            <small>Hyperparameter tuning</small>
                                        </li>
                                        <li>
                                            <span class="text-success me-2">✓</span>
                                            <small>Classification & regression support</small>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div class="card-footer bg-transparent border-0">
                                <button class="btn btn-outline-primary w-100 mb-2">View Source Code</button>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6">
                        <div class="card border-0 shadow-lg h-100">
                            <div class="card-body d-flex flex-column">
                                <div class="mb-3">
                                    <h3 class="fw-bold mb-2">Personal Portfolio Website</h3>
                                    <p class="text-muted mb-3">React.js, Bootstrap</p>
                                </div>

                                <p class="mb-4">A responsive portfolio website built with React.js and Bootstrap to showcase my skills, projects, and professional information.</p>

                                <div class="mb-4">
                                    <h6 class="fw-bold mb-2">Technologies Used</h6>
                                    <div class="d-flex flex-wrap gap-2">
                                        <span class="badge bg-light text-dark border">React.js</span>
                                        <span class="badge bg-light text-dark border">Bootstrap</span>
                                        <span class="badge bg-light text-dark border">JavaScript</span>
                                    </div>
                                </div>

                                <div class="mb-3">
                                    <h6 class="fw-bold mb-2">Key Features</h6>
                                    <ul class="list-unstyled">
                                        <li class="mb-1">
                                            <span class="text-success me-2">✓</span>
                                            <small>Fully responsive design</small>
                                        </li>
                                        <li class="mb-1">
                                            <span class="text-success me-2">✓</span>
                                            <small>React Router navigation</small>
                                        </li>
                                        <li class="mb-1">
                                            <span class="text-success me-2">✓</span>
                                            <small>Modern UI components</small>
                                        </li>
                                        <li>
                                            <span class="text-success me-2">✓</span>
                                            <small>Contact form integration</small>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div class="card-footer bg-transparent border-0">
                                <button class="btn btn-outline-primary w-100 mb-2">View Source Code</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="d-flex justify-content-between mt-5 pt-4 border-top">
                    <button class="btn btn-outline-primary px-4 py-2" onClick={handleClickBack}><span class="me-2">←</span>About Me </button>
                    <button class="btn btn-primary px-4 py-2"  onClick={handleClickForward}> Contact Me<span class="ms-2">→</span></button>
                </div>
            </div>
        </div>
    );
}

export default Projects;