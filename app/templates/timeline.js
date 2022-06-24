function fetchData() {
    fetch("http://104.131.10.43:5000/timeline")
        .then(response => {
            if (!response.ok){
                throw Error("ERROR");
            }
            return response.json();
        })
        .then(data => {
            const html = data.data
                .map(user => {
                    return 
                    <div class="user"> 
                    <p>Name: ${user.first_name}</p>
                    <p>Name: ${user.email}</p>
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