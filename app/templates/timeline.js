function fetchData() {
        const form = document.getElementByID('form');
        form.addEventListener('submit', function(e) {
            e.preventDefault();
    
            const Payload = new FormData(form);
        
            console.log([...Payload])
    
            fetch('/api/timeline_post', {
                method: "POST", 
                body: Payload,
            })
            .then(res => res.json())
            .then(data => console.log(data))
            
        })
    }
fetchData();
    