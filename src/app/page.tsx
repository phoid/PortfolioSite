export default function Home() {
  return (
    <div className="min-h-screen bg-abyss">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Ocean Wave Background Animation */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-ocean-dark to-transparent" />
          <div className="absolute top-1/3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-ocean-light/30 to-transparent" />
          <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-ocean-mid/20 to-transparent" />
          <div className="absolute top-2/3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-ocean-light/10 to-transparent" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Anchor Icon */}
          <div className="mb-8 flex justify-center">
            <svg
              className="w-16 h-16 text-ocean-light opacity-80"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M12 2a2 2 0 100 4 2 2 0 000-4zM12 6v16m0 0l-4-4m4 4l4-4M7 10H5a2 2 0 00-2 2v0a7 7 0 007 7h4a7 7 0 007-7v0a2 2 0 00-2-2h-2"
              />
            </svg>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-pearl mb-6 tracking-tight">
            Welcome to My{" "}
            <span className="text-ocean-light">Portfolio</span>
          </h1>

          <p className="text-lg sm:text-xl text-text-muted mb-8 max-w-2xl mx-auto leading-relaxed">
            Navigating the depths of technology, crafting solutions that make waves. 
            Explore my journey through software development, projects, and innovations.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/projects"
              className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-ocean-mid hover:bg-ocean-light text-pearl font-medium transition-all duration-300 hover:shadow-lg hover:shadow-ocean-mid/30"
            >
              View Projects
              <svg
                className="ml-2 w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 rounded-lg border-2 border-driftwood-mid text-rope-tan hover:bg-driftwood-dark/30 font-medium transition-all duration-300"
            >
              Get in Touch
            </a>
          </div>
        </div>

        {/* Decorative bottom wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            className="w-full h-24 fill-ocean-deep"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" />
          </svg>
        </div>
      </section>

      {/* Features/Skills Preview Section */}
      <section className="py-20 bg-ocean-deep">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-pearl text-center mb-12">
            What I <span className="text-rope-tan">Offer</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="p-6 rounded-xl bg-ocean-dark/50 border border-ocean-mid/30 hover:border-ocean-light/50 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-lg bg-ocean-mid/30 flex items-center justify-center mb-4 group-hover:bg-ocean-mid/50 transition-colors">
                <svg className="w-6 h-6 text-ocean-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-pearl mb-2">Web Development</h3>
              <p className="text-text-muted">Building responsive, modern web applications with cutting-edge technologies and frameworks.</p>
            </div>

            {/* Card 2 */}
            <div className="p-6 rounded-xl bg-ocean-dark/50 border border-ocean-mid/30 hover:border-ocean-light/50 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-lg bg-ocean-mid/30 flex items-center justify-center mb-4 group-hover:bg-ocean-mid/50 transition-colors">
                <svg className="w-6 h-6 text-ocean-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-pearl mb-2">Backend Systems</h3>
              <p className="text-text-muted">Designing robust backend architectures, APIs, and database solutions for scalable applications.</p>
            </div>

            {/* Card 3 */}
            <div className="p-6 rounded-xl bg-ocean-dark/50 border border-ocean-mid/30 hover:border-ocean-light/50 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-lg bg-ocean-mid/30 flex items-center justify-center mb-4 group-hover:bg-ocean-mid/50 transition-colors">
                <svg className="w-6 h-6 text-ocean-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-pearl mb-2">AI Integration</h3>
              <p className="text-text-muted">Implementing intelligent solutions using modern AI/ML technologies and generative AI tools.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-b from-ocean-deep to-abyss">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-pearl mb-4">
            Ready to Set Sail?
          </h2>
          <p className="text-text-muted mb-8 text-lg">
            Let&apos;s navigate through your next project together. Whether you&apos;re looking for a collaborator or have questions, I&apos;m here to help.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-rope-tan hover:bg-driftwood-light text-abyss font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-rope-tan/30"
          >
            Contact Me
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-abyss border-t border-ocean-mid/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-text-muted text-sm">
              © {new Date().getFullYear()} Portfolio. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-text-muted hover:text-ocean-light transition-colors">
                GitHub
              </a>
              <a href="#" className="text-text-muted hover:text-ocean-light transition-colors">
                LinkedIn
              </a>
              <a href="#" className="text-text-muted hover:text-ocean-light transition-colors">
                Twitter
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
