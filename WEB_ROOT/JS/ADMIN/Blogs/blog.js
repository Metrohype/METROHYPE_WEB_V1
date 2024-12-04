
const sidebar = document.getElementById('sidebar');
    const sidebarToggle = document.getElementById('sidebarToggle');
    
    // Toggle sidebar visibility on button click
    sidebarToggle.addEventListener('click', () => {
      sidebar.classList.toggle('hidden');
    });
// Initialize CKEditor
ClassicEditor.create(document.querySelector('#post-content')).catch((error) => {
  console.error(error);
});
