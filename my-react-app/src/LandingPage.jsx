// disable eslint
import React from 'react';
import { FaGithub, FaTwitter, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();

  const goToSignUp = () => {
    navigate('/signup');
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-gray-900 text-white p-6">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold">GitHub </h1>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#features" className="hover:text-gray-400">Features</a></li>
              <li><a href="#about" className="hover:text-gray-400">About</a></li>
              <li><a href="#contact" className="hover:text-gray-400">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="container mx-auto p-6">
        <section className="text-center my-12">
          <h2 className="text-4xl font-bold mb-4">Welcome to GitHub </h2>
          <p className="text-gray-700 mb-8">Collaborate on projects, manage your repositories, and explore open source.</p>
          <a href="https://github.com" className="bg-gray-900 text-white py-2 px-4 rounded hover:bg-gray-700">Get Started</a>
          <button
            onClick={goToSignUp}
            className="bg-gray-900 text-white py-2 px-4 mx-4 rounded hover:bg-gray-700"
          >
            Sign Up
          </button>
        </section>

        <section id="features" className="my-12">
          <h3 className="text-3xl font-bold text-center mb-6">Features</h3>
          <div className="flex flex-wrap justify-center">
            <div className="w-full md:w-1/3 p-4">
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <svg className="w-12 h-12 mx-auto mb-4 text-gray-700" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M12 2C6.485 2 2 6.485 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.868-.013-1.703-2.782.604-3.369-1.343-3.369-1.343-.454-1.155-1.109-1.463-1.109-1.463-.907-.62.069-.607.069-.607 1.002.071 1.529 1.029 1.529 1.029.891 1.528 2.341 1.086 2.91.831.092-.646.349-1.086.636-1.335-2.221-.253-4.555-1.11-4.555-4.944 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.099-2.645 0 0 .84-.27 2.75 1.026A9.563 9.563 0 0112 6.801c.85.004 1.705.115 2.505.337 1.909-1.296 2.747-1.026 2.747-1.026.547 1.374.204 2.391.101 2.645.641.699 1.028 1.592 1.028 2.683 0 3.842-2.337 4.687-4.566 4.934.359.308.678.917.678 1.85 0 1.335-.012 2.415-.012 2.742 0 .268.18.578.688.48C19.137 20.165 22 16.418 22 12c0-5.515-4.485-10-10-10z"/>
                </svg>
                <h4 className="text-xl font-bold mb-2">Open Source Collaboration</h4>
                <p className="text-gray-600">Work together with millions of developers to host and review code, manage projects, and build software.</p>
              </div>
            </div>
            <div className="w-full md:w-1/3 p-4">
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <svg className="w-12 h-12 mx-auto mb-4 text-gray-700" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.205 11.385.599.111.82-.26.82-.577 0-.285-.011-1.041-.016-2.044-3.338.726-4.042-1.61-4.042-1.61-.546-1.389-1.333-1.759-1.333-1.759-1.089-.744.083-.728.083-.728 1.205.084 1.838 1.237 1.838 1.237 1.072 1.836 2.809 1.306 3.494.998.108-.776.42-1.307.762-1.608-2.665-.305-5.467-1.333-5.467-5.933 0-1.312.469-2.383 1.236-3.223-.124-.303-.536-1.523.118-3.176 0 0 1.008-.323 3.3 1.231A11.472 11.472 0 0112 5.808c1.02.004 2.043.138 3.003.404 2.289-1.554 3.294-1.231 3.294-1.231.656 1.653.244 2.873.12 3.176.77.84 1.234 1.911 1.234 3.223 0 4.611-2.805 5.625-5.477 5.922.431.371.814 1.103.814 2.222 0 1.604-.014 2.898-.014 3.293 0 .321.218.695.824.577C20.565 21.796 24 17.301 24 12 24 5.373 18.627 0 12 0z"/>
                </svg>
                <h4 className="text-xl font-bold mb-2">Project Management</h4>
                <p className="text-gray-600">Keep your projects organized and accessible, with detailed documentation and collaboration tools.</p>
              </div>
            </div>
            <div className="w-full md:w-1/3 p-4">
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <svg className="w-12 h-12 mx-auto mb-4 text-gray-700" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M12 2C6.485 2 2 6.485 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.868-.013-1.703-2.782.604-3.369-1.343-3.369-1.343-.454-1.155-1.109-1.463-1.109-1.463-.907-.62.069-.607.069-.607 1.002.071 1.529 1.029 1.529 1.029.891 1.528 2.341 1.086 2.91.831.092-.646.349-1.086.636-1.335-2.221-.253-4.555-1.11-4.555-4.944 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.099-2.645 0 0 .84-.27 2.75 1.026A9.563 9.563 0 0112 6.801c.85.004 1.705.115 2.505.337 1.909-1.296 2.747-1.026 2.747-1.026.547 1.374.204 2.391.101 2.645.641.699 1.028 1.592 1.028 2.683 0 3.842-2.337 4.687-4.566 4.934.359.308.678.917.678 1.85 0 1.335-.012 2.415-.012 2.742 0 .268.18.578.688.48C19.137 20.165 22 16.418 22 12c0-5.515-4.485-10-10-10z"/>
                </svg>
                <h4 className="text-xl font-bold mb-2">Community Support</h4>
                <p className="text-gray-600">Engage with the community, contribute to discussions, and get support from other developers.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="my-12">
          <h3 className="text-3xl font-bold text-center mb-6">About Us</h3>
          <p className="text-gray-700 text-center">We are a community of developers committed to creating the best tools and experiences for coding, collaborating, and learning.</p>
        </section>

        <section id="contact" className="my-12">
          <h3 className="text-3xl font-bold text-center mb-6">Contact Us</h3>
          <form className="max-w-xl mx-auto">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                placeholder="Your Name"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Your Email"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="message"
                placeholder="Your Message"
              ></textarea>
            </div>
            <div className="flex items-center justify-center">
              <button
                className="bg-gray-900 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                Send
              </button>
            </div>
          </form>
        </section>
      </main>

      <footer className="bg-gray-900 text-white p-6">
        <div className="container mx-auto text-center">
          <div className="flex justify-center space-x-4 mb-4">
            <a href="https://github.com" className="text-white hover:text-gray-400"><FaGithub size={30} /></a>
            <a href="https://twitter.com" className="text-white hover:text-gray-400"><FaTwitter size={30} /></a>
            <a href="https://linkedin.com" className="text-white hover:text-gray-400"><FaLinkedin size={30} /></a>
            <a href="mailto:support@example.com" className="text-white hover:text-gray-400"><FaEnvelope size={30} /></a>
          </div>
          <p>&copy; 2024 GitHub Landing Page. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
