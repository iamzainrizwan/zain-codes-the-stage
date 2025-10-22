import { useState } from "react";
import ContentCard from "@/components/ContentCard";
import ContentModal from "@/components/ContentModal";

const Theatre = () => {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const achievements = [
    {
      id: "lgs-tech",
      title: "LGS Lead Technician & Mentor",
      date: "2020 - 2025",
      location: "Slough, UK",
      description: "Lead technician for 14 productions reaching 1000+ audience members",
      tags: ["Technical Theatre", "Leadership", "Mentoring"]
    },
    {
      id: "bett-show",
      title: "BETT Show Representative",
      date: "2024",
      location: "London, UK",
      description: "Represented school presenting to 200+ international educators",
      tags: ["Public Speaking", "Technology", "Education"]
    },
    {
      id: "esports",
      title: "Esports Team Mentor",
      date: "2023 - 2025",
      location: "Slough, UK",
      description: "Mentored esports team, boosting participation by 40%",
      tags: ["Mentoring", "Gaming", "Team Building"]
    },
    {
      id: "uber-hack",
      title: "Uber Global Hackathon Finalist",
      date: "October 2023",
      location: "MENA Region",
      description: "Placed Top 2 out of 154 teams with accessibility solution",
      tags: ["Hackathon", "Accessibility", "UI/UX"]
    },
    {
      id: "puzzled",
      title: "KCL Informatics Puzzled Winner",
      date: "2025",
      location: "London, UK",
      description: "Team placed 1st/200-300 undergraduates in puzzle-solving contest",
      tags: ["Competition", "Problem Solving"]
    }
  ];

  const productions = [
    { title: "Christmas Concert 2021", year: "2021" },
    { title: "The 25th Annual Putnam County Spelling Bee", year: "2022", type: "Senior Production" },
    { title: "Greased Lightning", year: "2022", type: "Junior Production" },
    { title: "End of Year Assembly 2022", year: "2022" },
    { title: "Bugsy Malone", year: "2023" },
    { title: "Culture Day Parade 2023", year: "2023" },
    { title: "Senior House Variety 2024", year: "2024" },
    { title: "High School Musical", year: "2024", type: "Whole School Production" },
    { title: "Greased Lightning", year: "2025", type: "Whole School Production" }
  ];

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="container mx-auto px-6">
        <section className="py-12 animate-fade-in">
          <h1 className="text-4xl font-bold mb-4">theatre & leadership</h1>
          <p className="text-muted-foreground mb-12">
            technical theatre, competitions, and community involvement
          </p>

          <h2 className="text-2xl font-semibold mb-6">achievements & leadership</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {achievements.map((item) => (
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

          <h2 className="text-2xl font-semibold mb-6">productions</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {productions.map((prod, idx) => (
              <div 
                key={idx}
                className="p-4 rounded border border-border bg-card hover:border-accent transition-colors"
              >
                <p className="font-medium mb-1">{prod.title}</p>
                <p className="text-sm text-muted-foreground">{prod.year}</p>
                {prod.type && (
                  <p className="text-xs text-accent mt-1">{prod.type}</p>
                )}
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Detailed modals */}
      <ContentModal
        open={selectedItem === "lgs-tech"}
        onOpenChange={(open) => !open && setSelectedItem(null)}
        title="LGS Lead Technician & Mentor"
        date="2020 - 2025 | Slough, UK"
      >
        <h3 className="text-lg font-semibold mb-2">Overview</h3>
        <p>Served as Lead Technician for Langley Grammar School's performing arts program, managing lighting and sound systems for over 14 major productions that reached audiences of over 1000 people.</p>

        <h3 className="text-lg font-semibold mt-4 mb-2">Key Responsibilities</h3>
        <ul>
          <li>Designed and operated lighting systems for theatrical productions</li>
          <li>Managed audio systems including mixing, microphone setup, and sound design</li>
          <li>Trained and mentored junior technicians in technical theatre skills</li>
          <li>Coordinated technical rehearsals with directors and production teams</li>
          <li>Maintained and troubleshot equipment including DMX lighting rigs and sound boards</li>
        </ul>

        <h3 className="text-lg font-semibold mt-4 mb-2">Notable Productions</h3>
        <p>Led technical teams for diverse productions including musicals (High School Musical, Bugsy Malone, The 25th Annual Putnam County Spelling Bee), drama productions, concerts, and school-wide events.</p>

        <h3 className="text-lg font-semibold mt-4 mb-2">Impact</h3>
        <p>Built a sustainable technical theatre program by training multiple cohorts of students. Created documentation and training materials still used by the school's technical team today.</p>

        <blockquote className="border-l-4 border-accent pl-4 italic mt-4">
          "If Zain says something, we listen to him" - David Batsman, Teacher in Charge of the Team
        </blockquote>
      </ContentModal>

      <ContentModal
        open={selectedItem === "bett-show"}
        onOpenChange={(open) => !open && setSelectedItem(null)}
        title="BETT Show Representative"
        date="2024 | London, UK"
      >
        <h3 className="text-lg font-semibold mb-2">Overview</h3>
        <p>Selected to represent Langley Grammar School at the BETT Show, the world's leading education technology conference, presenting the school's innovative use of technology to over 200 international educators.</p>

        <h3 className="text-lg font-semibold mt-4 mb-2">Responsibilities</h3>
        <ul>
          <li>Delivered presentations on the school's technology integration strategies</li>
          <li>Demonstrated technical theatre systems and educational technology tools</li>
          <li>Engaged with international educators, answering questions about implementation</li>
          <li>Networked with education technology vendors and innovators</li>
        </ul>

        <h3 className="text-lg font-semibold mt-4 mb-2">Key Learnings</h3>
        <p>Gained exposure to cutting-edge educational technology, learned about international education systems, and developed public speaking skills in a professional conference environment.</p>
      </ContentModal>

      <ContentModal
        open={selectedItem === "esports"}
        onOpenChange={(open) => !open && setSelectedItem(null)}
        title="Esports Team Mentor"
        date="2023 - 2025 | Slough, UK"
      >
        <h3 className="text-lg font-semibold mb-2">Overview</h3>
        <p>Founded and mentored the school's esports team, building a community around competitive gaming and boosting participation by 40%.</p>

        <h3 className="text-lg font-semibold mt-4 mb-2">Activities</h3>
        <ul>
          <li>Organized regular practice sessions and scrimmages</li>
          <li>Coordinated participation in inter-school esports competitions</li>
          <li>Mentored students on teamwork, communication, and competitive strategy</li>
          <li>Managed team logistics including equipment, schedules, and tournament registration</li>
        </ul>

        <h3 className="text-lg font-semibold mt-4 mb-2">Impact</h3>
        <p>Successfully grew the program from a small group to a thriving community with consistent participation. Created an inclusive environment that welcomed students of all skill levels while maintaining competitive excellence.</p>
      </ContentModal>

      <ContentModal
        open={selectedItem === "uber-hack"}
        onOpenChange={(open) => !open && setSelectedItem(null)}
        title="Uber Global Hackathon - Regional Finalist"
        date="October 2023 | MENA Region"
      >
        <h3 className="text-lg font-semibold mb-2">Overview</h3>
        <p>Placed Top 2 out of 154 teams in the MENA region of Uber's Global Hackathon with an innovative accessibility solution designed to improve transportation access for users with disabilities.</p>

        <h3 className="text-lg font-semibold mt-4 mb-2">Solution</h3>
        <p>Developed a comprehensive accessibility feature set for the Uber platform, including:</p>
        <ul>
          <li>Enhanced voice control and screen reader compatibility</li>
          <li>Simplified interface options for users with cognitive disabilities</li>
          <li>Pre-ride accessibility information (vehicle accessibility features, driver training status)</li>
          <li>Emergency assistance features with location sharing</li>
        </ul>

        <h3 className="text-lg font-semibold mt-4 mb-2">Process</h3>
        <ul>
          <li>Conducted user research with accessibility advocates</li>
          <li>Built comprehensive Figma prototypes with multiple user flows</li>
          <li>Created pitch deck covering problem statement, solution, and impact metrics</li>
          <li>Presented to Uber executives and accessibility experts</li>
        </ul>

        <h3 className="text-lg font-semibold mt-4 mb-2">Potential Impact</h3>
        <p>The proposed solution could benefit over 10 million users in the UK alone, making transportation more accessible and inclusive for people with diverse needs.</p>
      </ContentModal>

      <ContentModal
        open={selectedItem === "puzzled"}
        onOpenChange={(open) => !open && setSelectedItem(null)}
        title="KCL Informatics Puzzled Competition Winner"
        date="2025 | London, UK"
      >
        <h3 className="text-lg font-semibold mb-2">Overview</h3>
        <p>Team placed 1st out of 200-300 undergraduate students in King's College London's Informatics Puzzled Competition, a challenging puzzle-solving contest designed to test computational thinking and problem-solving abilities.</p>

        <h3 className="text-lg font-semibold mt-4 mb-2">Competition Format</h3>
        <p>The competition consisted of a series of complex puzzles requiring logical reasoning, pattern recognition, algorithmic thinking, and collaborative problem-solving under time pressure.</p>

        <h3 className="text-lg font-semibold mt-4 mb-2">Skills Demonstrated</h3>
        <ul>
          <li>Advanced problem-solving and analytical thinking</li>
          <li>Effective teamwork and communication under pressure</li>
          <li>Pattern recognition and logical reasoning</li>
          <li>Time management and prioritization</li>
        </ul>

        <h3 className="text-lg font-semibold mt-4 mb-2">Significance</h3>
        <p>This achievement demonstrates the ability to tackle complex, unfamiliar problems - a critical skill in software engineering where new challenges constantly arise.</p>
      </ContentModal>
    </div>
  );
};

export default Theatre;
