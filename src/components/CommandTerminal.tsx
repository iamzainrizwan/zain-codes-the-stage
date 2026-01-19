import { useEffect, useState, useCallback } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
} from "@/components/ui/command";
import { Terminal, Home, Briefcase, FolderOpen, Theater, HelpCircle, FileText } from "lucide-react";

const routes = [
  { path: "/", name: "home", icon: Home, description: "Go to home page" },
  { path: "/work", name: "work", icon: Briefcase, description: "View work experience" },
  { path: "/projects", name: "projects", icon: FolderOpen, description: "Browse projects" },
  { path: "/theatre", name: "theatre", icon: Theater, description: "Theatre tech portfolio" },
];

const contentItems = [
  // Home page items
  { id: "puzzled", path: "home/puzzled", page: "/", description: "KCL Puzzled Competition Winner" },
  { id: "rl-sim", path: "home/rl-sim", page: "/", description: "Reinforcement Learning Simulation" },
  { id: "elecosoft-highlight", path: "home/elecosoft", page: "/", description: "Azure Infrastructure Internship" },
  // Work page items
  { id: "elecosoft", path: "work/elecosoft", page: "/work", description: "Elecosoft Internship" },
  { id: "shell", path: "work/shell", page: "/work", description: "Shell Work Experience" },
  { id: "microsoft", path: "work/microsoft", page: "/work", description: "Microsoft Work Experience" },
  // Projects page items
  { id: "rl-sim", path: "projects/rl-sim", page: "/projects", description: "RL Simulation Project" },
  { id: "aircraft-comms", path: "projects/aircraft-comms", page: "/projects", description: "Aircraft Communication System" },
  { id: "studyquest", path: "projects/studyquest", page: "/projects", description: "StudyQuest Learning App" },
  // Theatre page items
  { id: "lgs-tech", path: "theatre/lgs-tech", page: "/theatre", description: "LGS Lead Technician" },
  { id: "bett-show", path: "theatre/bett-show", page: "/theatre", description: "BETT Show Representative" },
  { id: "esports", path: "theatre/esports", page: "/theatre", description: "Esports Team Mentor" },
  { id: "uber-hack", path: "theatre/uber-hack", page: "/theatre", description: "Uber Hackathon Finalist" },
  { id: "puzzled-theatre", path: "theatre/puzzled", page: "/theatre", description: "KCL Puzzled Winner" },
];

// Get unique content items by path
const uniqueContentItems = contentItems.filter((item, index, self) =>
  index === self.findIndex((t) => t.path === item.path)
);

// Get items for a specific page
const getItemsForPage = (pageName: string) => 
  contentItems.filter(item => item.path.startsWith(`${pageName}/`));

const commands = [
  { name: "help", description: "Show available commands" },
  { name: "ls", description: "List contents of current directory" },
  { name: "cd <path>", description: "Navigate (e.g., cd work, cd work/elecosoft)" },
  { name: "pwd", description: "Show current location" },
  { name: "clear", description: "Close terminal" },
  { name: "whoami", description: "About Zain" },
];

const CommandTerminal = () => {
  const [open, setOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [output, setOutput] = useState<string[]>([]);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if ((e.key === "k" && (e.metaKey || e.ctrlKey)) || e.key === "`") {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const executeCommand = useCallback((cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    const parts = trimmedCmd.split(" ");
    const command = parts[0];
    const arg = parts[1];

    switch (command) {
      case "help":
        setOutput([
          "Available commands:",
          ...commands.map(c => `  ${c.name.padEnd(12)} - ${c.description}`),
          "",
          "Tip: Press ↑/↓ to navigate suggestions, Enter to select"
        ]);
        break;

      case "ls":
        const currentPageName = location.pathname === "/" ? "home" : location.pathname.slice(1);
        const currentPageItems = getItemsForPage(currentPageName);
        
        if (currentPageItems.length > 0) {
          setOutput([
            `Contents of /${currentPageName}:`,
            "",
            "Directories:",
            ...routes.filter(r => r.name !== currentPageName).map(r => `  📁 ${r.name}/`),
            "",
            "Files:",
            ...currentPageItems.map(c => `  📄 ${c.path.split('/')[1]}`),
          ]);
        } else {
          setOutput([
            "Directories:",
            ...routes.map(r => `  📁 ${r.name}/`),
          ]);
        }
        break;

      case "cd":
        if (!arg || arg === "~" || arg === "/") {
          navigate("/");
          setOpen(false);
          return;
        }
        
        // Handle ".." to go up
        if (arg === "..") {
          navigate("/");
          setOpen(false);
          return;
        }

        // Normalize path (remove leading/trailing slashes)
        const normalizedPath = arg.replace(/^\/+|\/+$/g, '');
        
        // Check if it's a full path to an item (e.g., work/elecosoft)
        const item = contentItems.find(c => c.path === normalizedPath);
        if (item) {
          navigate(`${item.page}?open=${item.id}`);
          setOpen(false);
          break;
        }
        
        // Check if it's just a page name
        const route = routes.find(r => 
          r.name === normalizedPath || r.path === `/${normalizedPath}`
        );
        if (route) {
          navigate(route.path);
          setOpen(false);
          break;
        }

        // Check if it's a relative path from current page (e.g., just "elecosoft" when on /work)
        const currentPage = location.pathname === "/" ? "home" : location.pathname.slice(1);
        const relativePath = `${currentPage}/${normalizedPath}`;
        const relativeItem = contentItems.find(c => c.path === relativePath);
        if (relativeItem) {
          navigate(`${relativeItem.page}?open=${relativeItem.id}`);
          setOpen(false);
          break;
        }

        setOutput([`bash: cd: ${arg}: No such file or directory`, "Type 'ls' to see available paths"]);
        break;

      case "pwd":
        const currentRoute = routes.find(r => r.path === location.pathname);
        setOutput([`/${currentRoute?.name || location.pathname.slice(1)}`]);
        break;

      case "clear":
      case "exit":
      case "q":
        setOpen(false);
        setOutput([]);
        break;

      case "whoami":
        setOutput([
          "Zain Rizwan",
          "Aspiring Software Engineer @ King's College London",
          "",
          "Building intelligent systems at the intersection of",
          "machine learning, cloud infrastructure, and UX design."
        ]);
        break;

      default:
        if (trimmedCmd) {
          setOutput([`bash: ${command}: command not found`, "Type 'help' for available commands"]);
        }
    }
    setInputValue("");
  }, [navigate, location.pathname]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && inputValue) {
      e.preventDefault();
      executeCommand(inputValue);
    }
  };

  return (
    <>
      {/* Terminal toggle hint */}
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-2 bg-black/80 border border-primary/50 text-primary text-sm font-mono backdrop-blur-md hover:border-accent hover:text-accent transition-colors"
        style={{
          clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))'
        }}
      >
        <Terminal size={16} />
        <span className="hidden sm:inline">Press</span>
        <kbd className="px-1.5 py-0.5 bg-primary/20 border border-primary/30 text-xs">⌘K</kbd>
        <span className="hidden sm:inline">or</span>
        <kbd className="px-1.5 py-0.5 bg-primary/20 border border-primary/30 text-xs hidden sm:inline">`</kbd>
      </button>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <div className="bg-black/95 border-2 border-primary/50 font-mono">
          {/* Terminal header */}
          <div className="flex items-center gap-2 px-4 py-2 border-b border-primary/30 bg-primary/10">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
            </div>
            <span className="text-primary/70 text-sm ml-2">zain@portfolio:~{location.pathname === "/" ? "/home" : location.pathname}</span>
          </div>

          {/* Output area */}
          {output.length > 0 && (
            <div className="px-4 py-3 text-sm text-accent/90 border-b border-primary/20 max-h-48 overflow-y-auto">
              {output.map((line, i) => (
                <div key={i} className="whitespace-pre font-mono">{line}</div>
              ))}
            </div>
          )}

          <CommandInput 
            placeholder="Type a command... (try 'help')"
            value={inputValue}
            onValueChange={setInputValue}
            onKeyDown={handleKeyDown}
            className="border-none bg-transparent text-accent placeholder:text-muted-foreground/50"
          />
          
          <CommandList className="max-h-64">
            <CommandEmpty className="text-muted-foreground/70 py-4">
              No matching commands. Type 'help' for available commands.
            </CommandEmpty>
            
            <CommandGroup heading="Navigation" className="text-primary/70">
              {routes.map((route) => (
                <CommandItem
                  key={route.path}
                  value={`cd ${route.name}`}
                  onSelect={() => {
                    navigate(route.path);
                    setOpen(false);
                  }}
                  className="text-accent/90 hover:bg-primary/20 cursor-pointer"
                >
                  <route.icon className="mr-2 h-4 w-4 text-primary" />
                  <span>cd {route.name}</span>
                  <span className="ml-auto text-xs text-muted-foreground">{route.description}</span>
                </CommandItem>
              ))}
            </CommandGroup>

            <CommandGroup heading="Content" className="text-primary/70">
              {uniqueContentItems.slice(0, 6).map((item) => (
                <CommandItem
                  key={item.path}
                  value={`cd ${item.path}`}
                  onSelect={() => {
                    navigate(`${item.page}?open=${item.id}`);
                    setOpen(false);
                  }}
                  className="text-accent/90 hover:bg-primary/20 cursor-pointer"
                >
                  <FileText className="mr-2 h-4 w-4 text-primary" />
                  <span>cd {item.path}</span>
                  <span className="ml-auto text-xs text-muted-foreground">{item.description}</span>
                </CommandItem>
              ))}
            </CommandGroup>

            <CommandGroup heading="Commands" className="text-primary/70">
              <CommandItem
                value="help"
                onSelect={() => executeCommand("help")}
                className="text-accent/90 hover:bg-primary/20 cursor-pointer"
              >
                <HelpCircle className="mr-2 h-4 w-4 text-primary" />
                <span>help</span>
                <span className="ml-auto text-xs text-muted-foreground">Show all commands</span>
              </CommandItem>
              <CommandItem
                value="ls"
                onSelect={() => executeCommand("ls")}
                className="text-accent/90 hover:bg-primary/20 cursor-pointer"
              >
                <FolderOpen className="mr-2 h-4 w-4 text-primary" />
                <span>ls</span>
                <span className="ml-auto text-xs text-muted-foreground">List pages</span>
              </CommandItem>
              <CommandItem
                value="pwd"
                onSelect={() => executeCommand("pwd")}
                className="text-accent/90 hover:bg-primary/20 cursor-pointer"
              >
                <Terminal className="mr-2 h-4 w-4 text-primary" />
                <span>pwd</span>
                <span className="ml-auto text-xs text-muted-foreground">Current location</span>
              </CommandItem>
              <CommandItem
                value="whoami"
                onSelect={() => executeCommand("whoami")}
                className="text-accent/90 hover:bg-primary/20 cursor-pointer"
              >
                <Terminal className="mr-2 h-4 w-4 text-primary" />
                <span>whoami</span>
                <span className="ml-auto text-xs text-muted-foreground">About Zain</span>
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </div>
      </CommandDialog>
    </>
  );
};

export default CommandTerminal;
