import { Social } from "@/types/social";
import x from '@global/logos/x.png';
import facebook from '@global/svgs/facebook.svg';
import slack from '@global/svgs/slack.svg';
import linkedin from '@global/svgs/linkedin.svg';


export const socials: Social[] = [
    {
        icon: linkedin,
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/in/jerome-avecilla',
    },
    {
        icon: slack,
        label: 'Slack',
        href: 'https://javecilla.slack.com/team/javecilla',
    },
    {
        icon: facebook,
        label: 'Facebook', 
        href: 'https://facebook.com/jerome.avecilla24',  
    },
    {
        icon: x,
        label: 'X',
        href: 'https://x.com/@_javecilla',
    },
] as const;