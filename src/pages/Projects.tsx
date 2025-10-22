import { useState } from "react";
import ContentCard from "@/components/ContentCard";
import ContentModal from "@/components/ContentModal";
import { ExternalLink } from "lucide-react";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  const projects = [
    {
      id: "rl-sim",
      title: "Reinforcement Learning Simulation",
      date: "2025",
      description: "ML simulation in Unity comparing DQN, PPO, and NEAT algorithms",
      tags: ["Unity", "C#", "Machine Learning", "Neural Networks"],
      grade: "A",
      github: "https://github.com/iamzainrizwan/LearningAlgorithmsUnity"
    },
    {
      id: "aircraft-comms",
      title: "Aircraft Remote Communication System",
      date: "2024",
      description: "Communication protocol implementation for remote-aircraft data transmission",
      tags: ["Embedded Systems", "Communications", "Real-time Systems"],
    },
    {
      id: "studyquest",
      title: "Pathway To Bath: StudyQuest",
      date: "2024",
      description: "Gamified learning application with UI prototyping",
      tags: ["C#", "Figma", "UI/UX", "Game Design"],
      grade: "A",
      github: "https://github.com/iamzainrizwan/PTBPrototype"
    }
  ];

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="container mx-auto px-6">
        <section className="py-12 animate-fade-in">
          <h1 className="text-4xl font-bold mb-4">projects</h1>
          <p className="text-muted-foreground mb-12">
            machine learning simulations, gamified applications, and experimental software
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <ContentCard
                key={project.id}
                title={project.title}
                date={project.date}
                description={project.description}
                tags={project.tags}
                onClick={() => setSelectedProject(project.id)}
              />
            ))}
          </div>
        </section>
      </div>

      {/* Detailed modals */}
      <ContentModal
        open={selectedProject === "rl-sim"}
        onOpenChange={(open) => !open && setSelectedProject(null)}
        title="Reinforcement Learning Simulation"
        date="2025 | Grade: A"
      >
        <div className="flex items-center gap-4 mb-4">
          <a 
            href="https://github.com/iamzainrizwan/LearningAlgorithmsUnity"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-accent hover:underline"
          >
            View on GitHub <ExternalLink size={16} />
          </a>
        </div>

        <h3 className="text-lg font-semibold mb-2">Project Overview</h3>
        <p>A comprehensive machine learning simulation built in Unity using C# to compare three distinct reinforcement learning algorithms:</p>
        <ul>
          <li>Deep Q-Networks (DQN)</li>
          <li>Proximal Policy Optimization (PPO)</li>
          <li>NeuroEvolution of Augmenting Topologies (NEAT)</li>
        </ul>

        <h3 className="text-lg font-semibold mt-4 mb-2">Technical Implementation</h3>
        <ul>
          <li><strong>Neural Networks:</strong> Implemented from scratch for DQN with custom backpropagation and gradient descent</li>
          <li><strong>Policy Optimization:</strong> Built PPO algorithm with clipped surrogate objective and value function approximation</li>
          <li><strong>Genetic Algorithms:</strong> Designed NEAT framework with genome mutation, crossover, and speciation</li>
          <li><strong>Data Pipeline:</strong> Created comprehensive data export system for performance analysis and visualization</li>
        </ul>

        <h3 className="text-lg font-semibold mt-4 mb-2">Key Features</h3>
        <ul>
          <li>Real-time training visualization and performance metrics</li>
          <li>Configurable hyperparameters for algorithm tuning</li>
          <li>Side-by-side comparison of learning curves and convergence rates</li>
          <li>Export functionality for detailed analysis in external tools</li>
        </ul>

        <h3 className="text-lg font-semibold mt-4 mb-2">Results & Learnings</h3>
        <ul>
          <li><strong>DQN:</strong> Stable but slower learning with consistent convergence</li>
          <li><strong>PPO:</strong> Best sample efficiency with balanced exploration</li>
          <li><strong>NEAT:</strong> Diverse solutions but required careful population management</li>
          <li>Deepened understanding of exploration-exploitation trade-offs across different algorithms</li>
        </ul>

        <h3 className="text-lg font-semibold mt-4 mb-2">Technologies Used</h3>
        <p>Unity 3D, C#, Custom ML Framework, Data Visualization Tools</p>
      </ContentModal>

      <ContentModal
        open={selectedProject === "aircraft-comms"}
        onOpenChange={(open) => !open && setSelectedProject(null)}
        title="Aircraft Remote Communication System"
        date="2024"
      >
        <h3 className="text-lg font-semibold mb-2">Project Overview</h3>
        <p>Developed a communication system to facilitate reliable data transmission between a remote control unit and an aircraft.</p>
        <ul>
          <li>Real-time command transmission from remote to aircraft</li>
          <li>Telemetry feedback from aircraft to remote control</li>
          <li>Robust error detection and correction mechanisms</li>
        </ul>

        <h3 className="text-lg font-semibold mt-4 mb-2">Technical Implementation</h3>
        <ul>
          <li><strong>Communication Protocol:</strong> Designed and implemented custom protocol for bidirectional data exchange</li>
          <li><strong>Real-time Systems:</strong> Ensured low-latency command transmission and telemetry feedback</li>
          <li><strong>Error Handling:</strong> Built robust error detection and correction mechanisms for reliable communication</li>
          <li><strong>Data Encoding:</strong> Implemented efficient data serialization for minimal bandwidth usage</li>
        </ul>

        <h3 className="text-lg font-semibold mt-4 mb-2">Key Features</h3>
        <ul>
          <li>Bidirectional communication between remote and aircraft systems</li>
          <li>Real-time telemetry data transmission (altitude, speed, battery, GPS)</li>
          <li>Command execution with acknowledgment and retry mechanisms</li>
          <li>Signal quality monitoring and adaptive transmission rates</li>
        </ul>

        <h3 className="text-lg font-semibold mt-4 mb-2">Challenges & Solutions</h3>
        <ul>
          <li><strong>Signal Interference:</strong> Implemented frequency hopping and adaptive modulation</li>
          <li><strong>Packet Loss:</strong> Built automatic retry mechanisms with acknowledgment protocols</li>
          <li><strong>Latency Constraints:</strong> Optimized data encoding for minimal transmission time</li>
          <li><strong>Reliability:</strong> Added redundant communication channels and automatic reconnection logic</li>
        </ul>

        <h3 className="text-lg font-semibold mt-4 mb-2">Technologies Used</h3>
        <p>Embedded Systems Programming, Wireless Communication Protocols, Real-time Operating Systems, Data Serialization</p>
      </ContentModal>

      <ContentModal
        open={selectedProject === "studyquest"}
        onOpenChange={(open) => !open && setSelectedProject(null)}
        title="Pathway To Bath: StudyQuest"
        date="2024 | Grade: A"
      >
        <div className="flex items-center gap-4 mb-4">
          <a 
            href="https://github.com/iamzainrizwan/PTBPrototype"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-accent hover:underline"
          >
            View on GitHub <ExternalLink size={16} />
          </a>
        </div>

        <h3 className="text-lg font-semibold mb-2">Project Overview</h3>
        <p>StudyQuest is a gamified learning application designed to make educational content more engaging and interactive.</p>
        <ul>
          <li>Combined software engineering principles with user experience design</li>
          <li>Created an accessible learning platform with game mechanics</li>
          <li>Focused on increasing student engagement through interactive content</li>
        </ul>

        <h3 className="text-lg font-semibold mt-4 mb-2">Development Process</h3>
        <ul>
          <li><strong>Research:</strong> Conducted user research to identify pain points in traditional learning methods</li>
          <li><strong>Design:</strong> Created comprehensive UI/UX prototypes in Figma with user flow diagrams</li>
          <li><strong>Implementation:</strong> Built console-based prototype in C# with modular architecture</li>
          <li><strong>Documentation:</strong> Produced referenced writeup covering research methodology, conceptual framework, and prototype details</li>
        </ul>

        <h3 className="text-lg font-semibold mt-4 mb-2">Key Features</h3>
        <ul>
          <li>Gamification mechanics including points, achievements, and progress tracking</li>
          <li>Modular content system allowing easy addition of new learning modules</li>
          <li>User-friendly interface designed with accessibility in mind</li>
          <li>Progress persistence and personalized learning paths</li>
        </ul>

        <h3 className="text-lg font-semibold mt-4 mb-2">Technical Approach</h3>
        <ul>
          <li>Separation of concerns for clean, maintainable codebase</li>
          <li>Modular design allowing easy addition of new content</li>
          <li>Object-oriented programming principles throughout</li>
          <li>Extensible architecture for future features (multiplayer, adaptive difficulty)</li>
        </ul>

        <h3 className="text-lg font-semibold mt-4 mb-2">Impact & Learnings</h3>
        <ul>
          <li>Reinforced importance of user-centered design in educational software</li>
          <li>Demonstrated value of thorough planning before implementation</li>
          <li>Showed how gamification increases engagement without sacrificing educational value</li>
          <li>Developed skills in iterative design and user feedback incorporation</li>
        </ul>

        <h3 className="text-lg font-semibold mt-4 mb-2">Technologies Used</h3>
        <p>C#, Figma, Object-Oriented Design, User Research Methodologies</p>
      </ContentModal>
    </div>
  );
};

export default Projects;
