import { ref, onMounted } from 'vue';

export function useDarkMode() {
  const isDarkMode = ref(true);

  const toggleTheme = () => {
    // Disable theme toggle - always keep dark mode
    console.log('Theme toggle disabled - dark mode only');
  };

  onMounted(() => {
    // Force dark mode regardless of user preferences or localStorage
    isDarkMode.value = true;
    document.documentElement.classList.add('dark');
    document.documentElement.classList.remove('light');
    
    // Override any existing theme preference
    localStorage.setItem('theme', 'dark');
    
    // Force color scheme to dark
    document.documentElement.style.colorScheme = 'dark';
  });

  return {
    isDarkMode,
    toggleTheme
  };
}
