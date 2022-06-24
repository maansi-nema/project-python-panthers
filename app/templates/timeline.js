function fetchData() {
    fetch('/api/timeline_post')
        .then(response => {
            if (!response.ok){
                throw Error("ERROR");
            }
            return response.json();
        })
        .then(data => {
            const html = data.timeline_posts.map(user => {
                    return `
                    <div class ="timeline-user"> 
                    <p>Name: ${user.name}</p>
                    <p>Email: ${user. email}</p>
                    <p>Content: ${user. content}</p>
                    </div>
                    `;
        
                })
                .join('');
                console.log(html);

        })
        .catch(error => {
            console.log(error);
        });
}
fetchData();