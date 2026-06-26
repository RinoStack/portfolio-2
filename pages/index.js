export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <header className="border-b">
        <nav className="max-w-4xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Portfolio</h1>
          <ul className="flex gap-6">
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-20">
        <section className="mb-20">
          <h2 className="text-5xl font-bold mb-4">Hi, I'm a Developer</h2>
          <p className="text-xl text-gray-600">Creating digital experiences</p>
        </section>

        <section id="projects" className="mb-20">
          <h3 className="text-3xl font-bold mb-8">Featured Projects</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {[1, 2, 3, 4].map(i => (
              <div key={i} className="border rounded-lg p-6">
                <h4 className="font-bold mb-2">Project {i}</h4>
                <p className="text-gray-600">Project description goes here</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}