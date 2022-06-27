fetch('/api/timeline_post').then(response => {
            alert("hello");
            console.log(response);
            alert(response);
            if (!response.ok){
                throw Error("ERROR");
            }
            return response.json();
        })
        .then(data => {
            console.log(data.timeline_posts);
            const html = data.timeline_posts.map(user => {
                return `
                <div class= "timeline-user"> 
                    <p>Name: ${user.name}</p>
                    <p>Email: ${user.email}</p>
                    <p>Content: ${user.content}</p>
                    </div>
            
                `;
            }).join('');
                alert("hello3");
                console.log(html);
                document.querySelector("#app").insertAdjacentHTML("afterbegin", html);
        }).catch(error => {
            console.log(error);
        });
        alert("hello4");
        const form = document.getElementById('timeline_form');
        form.addEventListener('submit', function(e) {
            e.preventDefault();

            const payload = new FormData(form);
           console.log([...payload])
            alert("hello5");

            fetch('/api/timeline_post', {
                method: 'POST',
                body: {'name':'maansi', 'age':12},
            })
            
            .then(res => res.json())
            //.then(data => console.log(data))
           // .catch(err => console.log(err))
            alert("hello6");
        });
