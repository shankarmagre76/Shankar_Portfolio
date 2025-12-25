import { useNavigate } from "react-router-dom";
  
function About() {
    const navigate = useNavigate();
    
    function handleClickBack() {
        navigate('/');
    }
    
    function handleClickForward() {
        navigate('/projects');
    }

    return (
        <div class="container py-5">
            <div class="text-center mb-5">
                <h1 class="fw-bold text-primary">About Me</h1>
                <p class="text-muted">Shankar Rahul Magre || Full Stack Developer</p>
            </div>

            <div class="row">
                <div class="col-md-12">
                    <div class="card mb-4 border-0 shadow-sm">
                        <div class="card-body">
                            <h3 class="fw-bold mb-3">Introduction</h3>
                            <p class="lead">
                                I am <span class="fw-bold text-primary">Shankar Rahul Magre</span>, 
                                a passionate Java & Full Stack Developer from Chhatrapati Sambhajinagar.
                            </p>
                            <p>
                                I am a passionate web developer with experience in creating dynamic and responsive websites. 
                                I enjoy working with modern web technologies and continuously improving my skills.
                            </p>
                        </div>
                    </div>

                    <div class="card mb-4 border-0 shadow-sm">
                        <div class="card-body">
                            <h3 class="fw-bold mb-3">Skills</h3>
                            <div class="row">
                                <div class="col-4">
                                    <ul class="list-unstyled">
                                        <li class="mb-2">HTML, CSS, JavaScript</li>
                                        <li class="mb-2">React.js</li>
                                        <li class="mb-2">Node.js</li>
                                    </ul>
                                </div>
                                <div class="col-4">
                                    <ul class="list-unstyled">
                                        <li class="mb-2">Git and GitHub</li>
                                        <li class="mb-2">Java</li>
                                        <li class="mb-2">MySQL, MongoDB</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
            <div class="card border-0 shadow-sm mb-4">
                <div class="card-body">
                    <h3 class="fw-bold mb-4">Educational Qualifications</h3>
                    
                    <div class="mb-4 p-3 bg-light rounded">
                        <div class="d-flex justify-content-between align-items-center mb-2">
                            <h5 class="fw-bold mb-0">B-Tech (Computer Science and Engineering)</h5>
                            <span class="badge bg-primary">2022 - 2026</span>
                        </div>
                        <p class="text-muted mb-2">Dr. Babasaheb Ambedkar Technological University, Raigad</p>
                        <div class="d-flex align-items-center">
                            <span class="badge bg-primary p-2 me-2">7.00 CGPA</span>
                            <small class="text-muted">Till 6<sup>th</sup> semester</small>
                        </div>
                    </div>

                    <div class="mb-4 p-3 bg-light rounded">
                        <div class="d-flex justify-content-between align-items-center mb-2">
                            <h5 class="fw-bold mb-0">HSC (Science)</h5>
                            <span class="badge bg-success">2020 - 2022</span>
                        </div>
                        <p class="text-muted mb-2">Deogiri College, Aurangabad</p>
                        <div class="d-flex align-items-center">
                            <span class="badge bg-success p-2 me-2">86.00%</span>
                        </div>
                    </div>

                    <div class="p-3 bg-light rounded">
                        <div class="d-flex justify-content-between align-items-center mb-2">
                            <h5 class="fw-bold mb-0">SSC</h5>
                            <span class="badge bg-info">2020</span>
                        </div>
                        <p class="text-muted mb-2">H P L High School, Bidkin</p>
                        <div class="d-flex align-items-center">
                            <span class="badge bg-info p-2 me-2">89.00%</span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="d-flex justify-content-between mt-4">
                <button class="btn btn-outline-secondary px-4 py-2" onClick={handleClickBack}>← Home </button>
                <button class="btn btn-primary px-4 py-2" onClick={handleClickForward}>Projects →</button>
            </div>
        </div>
    );
}

export default About;