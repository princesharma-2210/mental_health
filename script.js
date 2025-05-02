

function highlightActiveSidebarLink() {
    try {
      const navLinks = document.querySelectorAll('.sidebar-nav a');
    
      const currentPath = normalizePath(window.location.pathname);
      
  
      navLinks.forEach(link => {
        const linkPath = normalizePath(new URL(link.href).pathname);
        
        
        if (linkPath === currentPath) {
          link.classList.add('active');
          
    
          const parentMenu = link.closest('.has-submenu');
          if (parentMenu) {
            parentMenu.classList.add('expanded');
          }
        }
      });
      
    } catch (error) {
      console.error('Error highlighting active sidebar link:', error);
    }
  }
  
  
  function normalizePath(path) {
    return path
      .replace(/\/$/, '')          
      .split('?')[0]              
      .split('#')[0]               
      .toLowerCase();              
  }
  

  document.addEventListener('DOMContentLoaded', highlightActiveSidebarLink);

  window.addEventListener('popstate', highlightActiveSidebarLink);