function fetchData() {
    fetch('/api/timeline_post')
        .then(response => {
            if (!response.ok){
                throw Error("ERROR");
            }
            return response.json();
        })
        .then(data => {
            const html = data.timeline_posts
                .map(user => {
                    return 
                    <div class="user"> 
                    <p>Name: ${name}</p>
                    <p>Name: ${email}</p>
                    </div>
                    ;
                })
                .join("");
                document.querySelector("#app").insertAdjacentHTML("afterbegin", html);

        })
        .catch(error => {
            console.log(error);
        });
}
fetchData();