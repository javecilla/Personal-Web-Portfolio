import { Social } from "@/types/social";
import { Mail, Facebook, Linkedin, Send, Slack } from 'lucide-vue-next'; 

export const socials: Social[] = [
    {
        icon: Mail,
        label: 'Email',
        href: 'mailto:jeromesavc@gmail.com',
    },
    {
        icon: Linkedin,
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/in/jerome-avecilla-528722239/',
    },
    {
        icon: Slack,
        label: 'Slack',
        href: 'https://javecilla.slack.com/team/javecilla',
    },
    {
        icon: Facebook,
        label: 'Facebook', 
        href: 'https://facebook.com/jerome.avecilla24',  
    },
    {
        icon: Send,
        label: 'Telegram',
        href: 'https://t.me/@javecilla',
    },
] as const;