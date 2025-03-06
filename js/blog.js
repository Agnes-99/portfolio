// Function to filter blog posts by category
function filterPosts(category) {
    const allPosts = document.querySelectorAll('.blog-post');
    
    allPosts.forEach(post => {
      if (post.classList.contains(category) || category === "all") {
        post.style.display = 'block'; // Show post
      } else {
        post.style.display = 'none'; // Hide post
      }
    });
  }
  
  // Example of opening a modal for blog posts
  function openBlogModal(postId) {
    alert("Opening blog post with ID: " + postId);
    // Implement modal logic here
  }
  