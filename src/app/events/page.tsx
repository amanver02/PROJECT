import gsap from "gsap";
import { useEffect } from "react";

const events = [
  {
    title: "Hackathon",
    description: "24-hour coding challenge with exciting prizes.",
    link: "https://forms.gle/example-hackathon",
  },
  {
    title: "Robotics Challenge",
    description: "Build and compete with your own robot!",
    link: "https://forms.gle/example-robotics",
  },
  {
    title: "AI Workshop",
    description: "Learn about AI and ML from industry experts.",
    link: "https://forms.gle/example-ai-workshop",
  },
];

const Events = () => {
  useEffect(() => {
    gsap.from(".event-card", {
      opacity: 0,
      y: 50,
      duration: 1,
      stagger: 0.3,
      ease: "power3.out",
    });
  }, []);

  return (
    <div className="min-h-screen bg-black text-white p-10">
      <h1 className="text-4xl font-bold text-center text-cyan-400">
        Techphilia 8 Events
      </h1>
      <p className="text-lg text-center mt-2">
        Discover exciting events and register now!
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {events.map((event, index) => (
          <div
            key={index}
            className="event-card bg-gray-900 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform"
          >
            <h2 className="text-2xl font-bold text-cyan-300">{event.title}</h2>
            <p className="mt-2">{event.description}</p>
            <a
              href={event.link}
              target="_blank"
              className="mt-4 inline-block bg-cyan-500 text-black px-4 py-2 rounded-md"
            >
              Register Now
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
