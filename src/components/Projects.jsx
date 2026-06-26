import cafe from "../assets/projects/restaurant-mvp-1.png";
import gym from "../assets/projects/gym-mvp home.png";
import restaurantLanding from "../assets/projects/restaurant-mvp-2-home.png";
import restaurantDashboard from "../assets/projects/restaurant-mvp-2-admin.png";

function Projects() {
    const projects = [
        {
            title: "Cafe Landing Page",
            description:
                "A modern and responsive landing page designed for a café, featuring an engaging hero section, menu showcase, customer testimonials, and contact information.",
            tech: "HTML • CSS • JavaScript",
            image: cafe,
            demo: "https://click2dine.netlify.app/",
            github: "https://github.com/grvdutta/OnePageRestaurantMVP",
        },

        {
            title: "Gym Website",
            description:
                "A responsive fitness website showcasing gym services, membership plans, trainer profiles, and contact information with a modern and user-friendly interface.",
            tech: "React • Tailwind CSS • JavaScript",
            image: gym,
            demo: "https://gym-mvp-five.vercel.app/",
            github: "https://github.com/grvdutta/gym-mvp",
        },

        {
            title: "BBQ Restaurant Landing Page",
            description:
                "A modern, responsive landing page for a BBQ restaurant featuring an engaging hero section, menu highlights, customer testimonials, and reservation call-to-actions.",
            tech: "HTML • CSS • JavaScript",
            image: restaurantLanding,
            demo: "https://golden-grill-system.netlify.app/",
            github: "https://github.com/grvdutta/golden-grill-system",
        },

        {
            title: "BBQ Restaurant Admin Dashboard",
            description:
                "An intuitive admin dashboard for managing restaurant content, menu items, reservations, and other operational data through a clean and user-friendly interface.",
            tech: "HTML • CSS • JavaScript",
            image: restaurantDashboard,
            demo: "https://golden-grill-system.netlify.app/admin/dashboard.html",
            github: "https://github.com/grvdutta/golden-grill-system",
        },
    ];


    return (
        <section
            id="projects"
            className="min-h-screen px-6 py-20 max-w-7xl mx-auto"
        >
            <h2 className="text-4xl font-bold text-center mb-16">
                My <span className="text-cyan-400">Projects</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-10">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="bg-[#0f172a] rounded-2xl overflow-hidden border border-cyan-900 hover:border-cyan-400 duration-300"
                    >
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-56 object-cover"
                        />

                        <div className="p-6">
                            <h3 className="text-2xl font-semibold mb-3">
                                {project.title}
                            </h3>

                            <p className="text-gray-400 mb-4">
                                {project.description}
                            </p>

                            <p className="text-cyan-400 mb-6">
                                {project.tech}
                            </p>

                            <div className="flex gap-4">
                                <a
                                    href={project.demo}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="px-5 py-2 bg-cyan-500 rounded-full hover:bg-cyan-400"
                                >
                                    Live Demo
                                </a>

                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="px-5 py-2 border border-cyan-400 rounded-full"
                                >
                                    GitHub
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Projects;