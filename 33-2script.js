async function getuser(){
    let user=await fetch('https://randomuser.me/api/ ')
    let json=await user.json()
    console.log(json)    
    let  NewUser={
        gender:json.results[0].gender,
        name:json.results[0].name.first,
        pic:json.results[0].picture.thumbnail
    }
let users= document.querySelector('.users')
users.insertAdjacentHTML('beforeend',`
    <div class="user">
        <img src="${NewUser.pic}" alt="">
        <h5>${NewUser.name}</h5>
        </div>
    `)

    console.log(NewUser)
}



