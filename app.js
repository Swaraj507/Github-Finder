//Init the objects
const github = new Github();
const ui = new UI();

//get the input
let userName = document.querySelector('#user-name');

userName.addEventListener('keyup',(e) => {

    const userName = e.target.value;
    if(e.target.value === ''){
        //clear the user data
        alert('clear');
    }else{
        
        //show user data
        github.getUser(userName)
            .then(data => {
                ui.formUserProfile(data.profile);
                ui.showRepos(data.repos);
            })
        
    }
})