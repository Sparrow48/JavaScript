console.log('Before');
 getUser(1, (user) =>{
     console.log('user', user);

     getTherepo(user.gitUsername, (repos)=>{
         console.log('Repos', repos);

     });
 });
console.log('After');

function getUser(id,callback){
    setTimeout(()=>{
        console.log('Reading data......');
        callback({ id: id , gitUsername: 'nasib'});
    }, 2000);
};


function getTherepo(username,callback){
    setTimeout(()=>{
        console.log('calling git api......');
        callback['repo1','repo2'];
    }, 2000);
};