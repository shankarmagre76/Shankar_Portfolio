import { useNavigate } from "react-router-dom";
import profileImage from "../assets/image.png";
function Home() {
  const navigate = useNavigate();

  return (
    <div class="min-vh-100 d-flex align-items-center bg-light">
      <div class="container py-5">
        <div class="row align-items-center">
          <div class="col-md-6">
            <h1 class="fw-bold">Hi, I'm Shankar Magre</h1>
            <h4 class="text-primary mt-2">Java & Full Stack Developer</h4>

            <p class="text-muted fs-5 mt-4">
              I build scalable, backend-driven web applications using Java,
              React.js, Node.js, and modern databases. Passionate about writing
              clean code and solving real-world problems.
            </p>

            <div class="mt-4 d-flex gap-3">
              <button class="btn btn-outline-primary" onClick={() => navigate("/projects")}>
                View Projects<span class="ms-2">→</span>
              </button>
              <button class="btn btn-outline-primary" onClick={() => navigate("/about")}>
                About Me<span class="ms-2">→</span>
              </button>
            </div>
          </div>

          <div class="col-md-6 text-center mt-4 mt-md-0">
            <img src={profileImage} alt="Profile" class="rounded-circle shadow"width="280" height="280"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
