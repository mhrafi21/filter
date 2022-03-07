
    const result = document.getElementById('result');
    const filter = document.getElementById('filter');
    const listItems = [];

    getData();

    filter.addEventListener('input' , (e)=> fitlerData(e.target.value));

    async function getData(){
        const res = await fetch("https://randomuser.me/api?results=100")
        const {results}= await res.json();
        
        results.forEach(user => {
            const li = document.createElement('li');
            listItems.push(li);
            li.innerHTML = `
            <img src = "${user.picture.medium}" alt= "${user.name.first}" >
            <div class= "user-info" >
                <h4>${user.name.first} ${user.name.last}</h4>
                <p>${user.location.country}
            </div>
            
            `
            result.appendChild(li)
        });
    }

    function fitlerData(searchItem){
        listItems.forEach(item=>{
            if(item.innerText.toLowerCase().includes(searchItem.toLowerCase())){
                item.classList.remove('hide h3.hide')
            }else{
                item.classList.add('hide')
            }
        })
    }
