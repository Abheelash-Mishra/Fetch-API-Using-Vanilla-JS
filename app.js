fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(data => {
    const cardContainer = document.getElementById('cardContainer');

    data.forEach(post => {
      const card = document.createElement('div');
      card.className = 'card';

      const title = document.createElement('h1');
      title.textContent = post.title;

      const body = document.createElement('p');
      body.textContent = post.body;

      card.appendChild(title);
      card.appendChild(body);
      cardContainer.appendChild(card);
    });
  })
  .catch(error => {
    console.log('Error:', error);
  });
