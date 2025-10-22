import { useState } from "react";
import ContentCard from "@/components/ContentCard";
import ContentModal from "@/components/ContentModal";

const Work = () => {
  const [selectedWork, setSelectedWork] = useState<string | null>(null);

  const workExperience = [
    {
      id: "elecosoft",
      title: "Elecosoft - Internship",
      date: "July 2025",
      location: "Aylesbury, UK",
      description: "Designed & implemented Azure cloud infrastructure solutions",
      tags: ["Azure", "Networking", "Cloud Infrastructure"]
    },
    {
      id: "shell",
      title: "Shell - Work Experience",
      date: "July 2024",
      location: "London, UK",
      description: "Shadowed Corporate Relations, AI, & Geosciences teams",
      tags: ["Energy", "AI", "Corporate"]
    },
    {
      id: "microsoft",
      title: "Microsoft - Work Experience",
      date: "December 2023",
      location: "Reading, UK",
      description: "Explored AI, cybersecurity, and data analytics",
      tags: ["AI", "Cybersecurity", "Data Analytics"]
    }
  ];

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="container mx-auto px-6">
        <section className="py-12 animate-fade-in">
          <h1 className="text-4xl font-bold mb-4">work experience</h1>
          <p className="text-muted-foreground mb-12">
            internships and work experiences across technology and energy sectors
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {workExperience.map((work) => (
              <ContentCard
                key={work.id}
                title={work.title}
                date={work.date}
                description={work.description}
                tags={work.tags}
                onClick={() => setSelectedWork(work.id)}
              />
            ))}
          </div>
        </section>
      </div>

      {/* Detailed modals */}
      <ContentModal
        open={selectedWork === "elecosoft"}
        onOpenChange={(open) => !open && setSelectedWork(null)}
        title="Elecosoft - Internship"
        date="July 2025 | Aylesbury, UK"
      >
        <h3 className="text-lg font-semibold mb-2">Overview</h3>
        <p>During my internship at Elecosoft, I worked extensively with Microsoft Azure to design and implement cloud infrastructure solutions for enterprise clients.</p>
        
        <h3 className="text-lg font-semibold mt-4 mb-2">Key Responsibilities</h3>
        <ul>
          <li>Designed and implemented private IP addressing and subnetting for Azure Virtual Networks</li>
          <li>Deployed VNets via Azure CLI with subnet delegation - saving approximately 10 hours per rollout</li>
          <li>Built Microsoft 365 mock tenancy (accounts, groups, SharePoint) - improved onboarding by ~20%</li>
          <li>Configured DNS zones with VNet integration for VM name resolution</li>
        </ul>

        <h3 className="text-lg font-semibold mt-4 mb-2">Technical Stack</h3>
        <p>Microsoft Azure, Azure CLI, Virtual Networks, DNS, Microsoft 365, SharePoint</p>

        <h3 className="text-lg font-semibold mt-4 mb-2">Impact</h3>
        <p>The automation scripts and infrastructure templates I developed significantly reduced deployment time and improved consistency across client environments. The mock tenancy system became a standard tool for training new team members.</p>
      </ContentModal>

      <ContentModal
        open={selectedWork === "shell"}
        onOpenChange={(open) => !open && setSelectedWork(null)}
        title="Shell - Work Experience"
        date="July 2024 | London, UK"
      >
        <h3 className="text-lg font-semibold mb-2">Overview</h3>
        <p>Gained exposure to corporate operations at Shell, one of the world's leading energy companies, during a week-long work experience program.</p>
        
        <h3 className="text-lg font-semibold mt-4 mb-2">Key Activities</h3>
        <ul>
          <li>Shadowed Corporate Relations team on global stakeholder engagement projects</li>
          <li>Observed AI team working on predictive analytics for energy optimization</li>
          <li>Participated in Geosciences discussions about sustainable energy transition</li>
          <li>Learned about energy transition challenges and contributed to team discussions</li>
          <li>Delivered presentations on findings and insights</li>
        </ul>

        <h3 className="text-lg font-semibold mt-4 mb-2">Key Learnings</h3>
        <p>Understanding the complexity of global energy systems, the role of AI in optimizing operations, and the challenges of transitioning to sustainable energy sources. Gained perspective on how technology intersects with energy, policy, and environmental considerations.</p>
      </ContentModal>

      <ContentModal
        open={selectedWork === "microsoft"}
        onOpenChange={(open) => !open && setSelectedWork(null)}
        title="Microsoft - Work Experience"
        date="December 2023 | Reading, UK"
      >
        <h3 className="text-lg font-semibold mb-2">Overview</h3>
        <p>Participated in Microsoft's work experience program, exploring cutting-edge technologies and working alongside professionals in AI, cybersecurity, and data analytics.</p>
        
        <h3 className="text-lg font-semibold mt-4 mb-2">Key Activities</h3>
        <ul>
          <li>Explored AI and machine learning applications with Microsoft's AI team</li>
          <li>Learned about cybersecurity best practices and threat detection systems</li>
          <li>Participated in data analytics workshops and demonstrations</li>
          <li>Presented on sustainability and technology's role in environmental solutions</li>
          <li>Gained preview access to internal Copilot beta features</li>
        </ul>

        <h3 className="text-lg font-semibold mt-4 mb-2">Key Takeaways</h3>
        <p>Gained hands-on understanding of enterprise-scale AI systems, learned about the importance of cybersecurity in modern applications, and saw how data analytics drives business decisions. The experience reinforced my interest in building intelligent, secure systems.</p>
      </ContentModal>
    </div>
  );
};

export default Work;
