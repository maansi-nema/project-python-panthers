function fetchData() {
    fetch("http//regres.in/api/users")
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