const newFormHandler = async (event) => {
    event.preventDefault();
  
    const title = document.querySelector('#title').value.trim();
    const post_text = document.querySelector('#post_text').value.trim();
  
  
    if (title && post_text) {
      const response = await fetch(`/api/posts`, {
        method: 'POST',
        body: JSON.stringify({ title, post_text }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to create project');
      }
    }
  };
  
  document
    .querySelector('.new-post-form')
    .addEventListener('submit', newFormHandler);