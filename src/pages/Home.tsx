import { useState } from "react";
import { Link } from "react-router-dom";
import { Github, Linkedin, Mail, ArrowRight } from "lucide-react";
import ContentCard from "@/components/ContentCard";
import ContentModal from "@/components/ContentModal";

const Home = () => {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const recentHighlights = [
    {
      id: "puzzled",
      title: "KCL Informatics Puzzled Competition Winner",
      date: "2025",
      description: "Team placed 1st out of 200-300 undergraduates in puzzle-solving contest",
      tags: ["Competition", "Problem Solving"],
      category: "achievement"
    },
    {
      id: "rl-sim",
      title: "Reinforcement Learning Simulation",
      date: "2025",
      description: "Implemented ML simulation comparing DQN, PPO, and NEAT algorithms in Unity",
      tags: ["Machine Learning", "Unity", "C#"],
      category: "project"
    },
    {
      id: "elecosoft",
      title: "Azure Infrastructure Internship",
      date: "July 2025",
      description: "Designed & implemented private IP addressing for Azure VNets at Elecosoft",
      tags: ["Azure", "Networking", "Cloud"],
      category: "work"
    }
  ];

  return (
    <div className="min-h-screen pt-20 pb-16 bg-gradient-to-b from-background via-primary/5 to-background">
      <div className="container mx-auto px-6">
        {/* Hero Section */}
        <section className="py-20 animate-fade-in relative">
          {/* Full-page horizontal scan line */}
          <div 
            className="fixed inset-0 pointer-events-none overflow-hidden z-0"
          >
            <div 
              className="absolute h-full w-96 bg-gradient-to-r from-transparent via-accent/20 to-transparent animate-scan-line"
              style={{ filter: 'blur(8px)' }}
            ></div>
          </div>

          <div className="max-w-3xl relative mx-auto">
            {/* Cyberpunk grid background */}
            <div 
              className="absolute inset-0 opacity-20 animate-grid-flow"
              style={{
                backgroundImage: 'linear-gradient(hsl(var(--cyber-cyan) / 0.3) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--cyber-cyan) / 0.3) 1px, transparent 1px)',
                backgroundSize: '50px 50px'
              }}
            ></div>
            
            {/* Neon glow layers */}
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/0 via-primary/30 to-primary/0 blur-2xl animate-cyber-pulse"></div>
            <div className="absolute -inset-2 bg-gradient-to-br from-accent/20 via-transparent to-primary/20 blur-xl"></div>
            
            {/* Content container */}
            <div className="relative bg-black/40 border-2 border-primary/50 p-8 backdrop-blur-md overflow-hidden"
              style={{
                clipPath: 'polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))'
              }}
            >
              {/* Corner accents */}
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-accent"></div>
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-accent"></div>
              
              <h1 className="text-5xl font-bold mb-4 text-accent drop-shadow-[0_0_15px_rgba(167,139,250,0.7)]">
                Zain Rizwan
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                aspiring software engineer @ King's College London
              </p>
              <p className="text-base text-muted-foreground mb-8 leading-relaxed">
                building intelligent systems & exploring the intersection of machine learning, 
                cloud infrastructure, and user experience design. passionate about creating 
                impactful solutions through code.
              </p>
            <div className="flex gap-4 items-center">
              <a 
                href="https://github.com/iamzainrizwan" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors"
              >
                <Github size={24} />
              </a>
              <a 
                href="https://www.linkedin.com/in/zain-rizwan-computer-science/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="mailto:iamzainrizwan@gmail.com"
                className="text-muted-foreground hover:text-accent transition-colors"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>
        </section>

        {/* Recent Highlights */}
        <section className="py-12 animate-slide-up">
          <h2 className="text-3xl font-bold mb-8">recent highlights</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentHighlights.map((item) => (
              <ContentCard
                key={item.id}
                title={item.title}
                date={item.date}
                description={item.description}
                tags={item.tags}
                onClick={() => setSelectedItem(item.id)}
              />
            ))}
          </div>
        </section>

        {/* Quick Links */}
        <section className="py-12">
          <div className="grid md:grid-cols-3 gap-6">
            <Link 
              to="/work"
              className="group p-6 rounded-lg border border-border bg-card hover:border-accent transition-all hover:shadow-lg hover:shadow-accent/20"
            >
              <h3 className="text-xl font-semibold mb-2 group-hover:text-accent transition-colors">
                work experience
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                internships at Elecosoft, Shell, and Microsoft
              </p>
              <div className="flex items-center gap-2 text-accent text-sm">
                view all <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
            <Link 
              to="/projects"
              className="group p-6 rounded-lg border border-border bg-card hover:border-accent transition-all hover:shadow-lg hover:shadow-accent/20"
            >
              <h3 className="text-xl font-semibold mb-2 group-hover:text-accent transition-colors">
                projects
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                ML simulations, gamified learning, and more
              </p>
              <div className="flex items-center gap-2 text-accent text-sm">
                view all <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
            <Link 
              to="/theatre"
              className="group p-6 rounded-lg border border-border bg-card hover:border-accent transition-all hover:shadow-lg hover:shadow-accent/20"
            >
              <h3 className="text-xl font-semibold mb-2 group-hover:text-accent transition-colors">
                theatre tech
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                lighting & sound for 14+ productions
              </p>
              <div className="flex items-center gap-2 text-accent text-sm">
                view all <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </div>
        </section>
      </div>

      {/* Modals for expanded content */}
      <ContentModal
        open={selectedItem === "puzzled"}
        onOpenChange={(open) => !open && setSelectedItem(null)}
        title="KCL Informatics Puzzled Competition Winner"
        date="2025"
      >
        <p>Competing against 200-300 undergraduate students, our team secured 1st place in King's College London's Informatics Puzzled Competition.</p>
        <p>The competition tested problem-solving abilities, logical thinking, and teamwork through a series of complex puzzles and challenges designed to push computational thinking to its limits.</p>
        <p>This achievement demonstrates strong analytical skills and the ability to collaborate effectively under pressure - essential qualities for tackling real-world software engineering challenges.</p>
      </ContentModal>

      <ContentModal
        open={selectedItem === "rl-sim"}
        onOpenChange={(open) => !open && setSelectedItem(null)}
        title="Reinforcement Learning Simulation"
        date="2025"
      >
        <p>Built a comprehensive machine learning simulation in Unity using C# to compare three distinct reinforcement learning algorithms: Deep Q-Networks (DQN), Proximal Policy Optimization (PPO), and NeuroEvolution of Augmenting Topologies (NEAT).</p>
        <h3 className="text-lg font-semibold mt-4 mb-2">Technical Implementation</h3>
        <ul>
          <li>Implemented neural networks from scratch for DQN</li>
          <li>Built custom policy optimization algorithms for PPO</li>
          <li>Designed genetic algorithm framework for NEAT</li>
          <li>Created comprehensive data export and visualization system</li>
        </ul>
        <h3 className="text-lg font-semibold mt-4 mb-2">Key Learnings</h3>
        <p>This project deepened my understanding of how different ML approaches tackle the same problem, the trade-offs between exploration and exploitation, and the importance of proper hyperparameter tuning in reinforcement learning systems.</p>
        <p>Grade: A</p>
      </ContentModal>

      <ContentModal
        open={selectedItem === "elecosoft"}
        onOpenChange={(open) => !open && setSelectedItem(null)}
        title="Azure Infrastructure Internship at Elecosoft"
        date="July 2025"
      >
        <p>During my internship at Elecosoft in Aylesbury, UK, I gained hands-on experience with Microsoft Azure cloud infrastructure and enterprise networking solutions.</p>
        <h3 className="text-lg font-semibold mt-4 mb-2">Key Achievements</h3>
        <ul>
          <li>Designed and implemented private IP addressing and subnetting schemes for Azure Virtual Networks</li>
          <li>Deployed VNets via Azure CLI with subnet delegation, reducing rollout time by approximately 10 hours per deployment</li>
          <li>Built Microsoft 365 mock tenancy including user accounts, security groups, and SharePoint configuration, improving onboarding efficiency by ~20%</li>
          <li>Configured DNS zones with VNet integration for seamless VM name resolution</li>
        </ul>
        <h3 className="text-lg font-semibold mt-4 mb-2">Skills Developed</h3>
        <p>Azure CLI scripting, network architecture design, identity and access management, infrastructure automation, and enterprise cloud deployment strategies.</p>
      </ContentModal>
    </div>
  );
};

export default Home;
