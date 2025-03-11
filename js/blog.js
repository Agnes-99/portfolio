
function filterPosts(category) {
    const allPosts = document.querySelectorAll('.blog-post');
    
    allPosts.forEach(post => {
      if (post.classList.contains(category) || category === "all") {
        post.style.display = 'block'; 
      } else {
        post.style.display = 'none'; 
      }
    });
  }
  
  function openBlogModal(postId) {
    alert("Opening blog post with ID: " + postId);
  }
  