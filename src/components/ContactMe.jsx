// src\components\ContactMe.jsx
import { useNavigate } from "react-router-dom";
import resume from "../assets/Shankar Resume.pdf";

function ContactMe() {
    const navigate = useNavigate();
    
    function handleClickBack() {
        navigate('/projects');
    }

    const handleFormSubmit = (e) => { e.preventDefault();
        alert('Thank you for your message! I will get back to you soon.');
        e.target.reset();
    };
    const downloadMyresume = () =>{
        
    }
    return (
        <div class="container py-5">
            <div class="text-center mb-5">
                <h1 class="fw-bold text-primary">Contact Me</h1>
                <p class="text-muted">Get in touch for opportunities or collaborations</p>
            </div>

            <div class="row g-4">
                <div class="col-md-5">
                    <div class="card border-0 shadow-sm mb-4">
                        <div class="card-body">
                            <h4 class="fw-bold mb-4">Contact Details</h4>
                            
                            <div class="mb-4">
                                <div class="d-flex align-items-center mb-3">
                                    <div>
                                        <h6 class="fw-bold mb-1">Email</h6>
                                        <p class="text-muted mb-0"><i className="fa-solid fa-envelope me-2 text-primary"></i>shankarmagre054@gmail.com</p>
                                    </div>
                                </div>
                                
                                <div class="d-flex align-items-center mb-3">
                                    <div>
                                        <h6 class="fw-bold mb-1">Phone</h6>
                                        <p class="text-muted mb-0"><i className="fa-solid fa-phone me-2 text-danger"></i>9421057922</p>
                                    </div>
                                </div>
                                
                                <div class="d-flex align-items-center mb-3">
                                    <div>
                                        <h6 class="fw-bold mb-1">Location</h6>
                                        <p class="text-muted mb-0"><i class="fa-solid fa-location-pin text-success"></i> Chhatrapati Sambhajinagar</p>
                                    </div>
                                </div>
                            </div>
                            <div class="d-flex gap-3 mt-4">
                                <a href="https://github.com/shankarmagre76" target="_blank" class="btn btn-outline-dark"><i className="fa-brands fa-github me-1"></i>GitHub</a>
                                <a href="mailto:shankarmagre054@gmail.com" class="btn btn-outline-primary"><i className="fa-solid fa-envelope me-1"></i>Email</a>
                                <a href="https://www.linkedin.com/in/shankarmagre76" target="_blank" class="btn btn-outline-primary"><i className="fa-brands fa-linkedin me-1"></i>LinkedIn</a>
                            </div>
                        </div>
                    </div>
                    <div class="card border-0 shadow-sm">
                        <div class="card-body text-center">
                            <i class="fa-solid fa-file"></i>
                            <h5 class="fw-bold mb-3">Download My Resume</h5>
                            <p class="text-muted mb-4">
                                Get complete details of my skills, projects, and qualifications
                            </p>
                            <button onClick={downloadMyresume} class="btn btn-primary w-100"><i class="fa-solid fa-download"></i> Download Resume</button>
                        </div>
                    </div>
                </div>
                
                <div class="col-md-7">
                    <div class="card border-0 shadow-sm">
                        <div class="card-body">
                            <h4 class="fw-bold mb-4"><i class="fa-regular fa-message"></i> Send a Message </h4>
                            <form onSubmit={handleFormSubmit}>
                                <div class="mb-3">
                                    <label htmlFor="name" class="form-label fw-bold">Name</label>
                                    <input type="text" id="name" name="name" class="form-control" placeholder="Your name" required/>
                                </div>
                                
                                <div class="mb-3">
                                    <label htmlFor="email" class="form-label fw-bold">Email</label>
                                    <input type="email" id="email" name="email" class="form-control" placeholder="Your email address" required/>
                                </div>
                                
                                <div class="mb-3">
                                    <label htmlFor="subject" class="form-label fw-bold">Subject</label>
                                    <input type="text" id="subject" name="subject" class="form-control" placeholder="Message subject" required />
                                </div>
                                
                                <div class="mb-4">
                                    <label htmlFor="message" class="form-label fw-bold">Message</label>
                                    <textarea id="message" name="message" class="form-control" rows="4" placeholder="Your message here..." required ></textarea>
                                </div>
                                
                                <button type="submit" class="btn btn-primary w-100"> <i class="fa-solid fa-upload"></i> Send Message </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="d-flex justify-content-start mt-5">
                <button class="btn btn-outline-primary px-4 py-2" onClick={handleClickBack}><span class="me-2">←</span>Projects</button>
            </div>
        </div>
    );
}

export default ContactMe;