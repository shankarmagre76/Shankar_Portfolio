function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer class="bg-dark text-white py-3">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-md-4 mb-2 mb-md-0">
            <h6 class="fw-bold mb-1">
              <i class="fa-solid fa-user me-2 text-primary"></i>
              Shankar Magre
            </h6>
            <small class="text-secondary d-block">
              <i class="fa-solid fa-code me-2"></i>
              Java & Full Stack Developer
            </small>
            <small class="text-secondary">
              <i class="fa-solid fa-graduation-cap me-2"></i>
              B.Tech CSE
            </small>
          </div>

          <div class="col-md-4 text-md-center my-2 my-md-0">
            <div class="d-flex justify-content-center gap-2">
              <a href="https://github.com/shankarmagre76" target="_blank" class="btn btn-outline-light btn-sm px-2 py-1">
                    <i class="fa-brands fa-github me-1"></i>GitHub </a>

              <a href="https://www.linkedin.com/in/shankarmagre76" target="_blank" class="btn btn-outline-light btn-sm px-2 py-1">
                <i class="fa-brands fa-linkedin me-1"></i>
                LinkedIn
              </a>

              <a href="mailto:shankarmagre054@gmail.com" class="btn btn-outline-light btn-sm px-2 py-1">
                <i class="fa-solid fa-envelope me-1"></i>
                Email
              </a>
            </div>
          </div>

          <div class="col-md-4 text-md-end mt-2 mt-md-0">
            <small class="text-secondary d-block">
              <i class="fa-solid fa-envelope me-2"></i>
              shankarmagre054@gmail.com
            </small>
            <small class="text-secondary">
              <i class="fa-solid fa-phone me-2"></i>
              +91 9421057922
            </small>
          </div>
        </div>

        <div class="text-center border-top border-secondary pt-2 mt-2">
          <small class="text-secondary">
            <i class="fa-regular fa-copyright me-1"></i>
            {currentYear} Shankar Magre
          </small>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
