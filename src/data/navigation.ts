import { 
  UserIcon, 
  WrenchIcon, 
  FolderIcon, 
  MedalIcon,
  BookMarkedIcon,
  PhoneIcon,
} from "lucide-vue-next";

export const navigationItems = [
  { name: "About", icon: UserIcon, href: "#about", sectionId: "about" },
  { name: "Skills", icon: WrenchIcon, href: "#skills", sectionId: "skills" },
  { name: "Projects", icon: FolderIcon, href: "#projects", sectionId: "projects" },
  { name: "Certificates", icon: MedalIcon, href: "#certificates", sectionId: "certificates" },
  { name: "Experience", icon: BookMarkedIcon, href: "#experience", sectionId: "experience" },
  { name: "Contact", icon: PhoneIcon, href: "#contact", sectionId: "contact" }
];