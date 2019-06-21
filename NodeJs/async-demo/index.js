 console.log('Before');
//  getUser(1, (user) =>{
//   getTherepo(user.gitUsername, (repos)=>{
//         getCommits(repo, (commit)=>{
//             console.log(commits);
//         });
//      });
//  });

getUser(1)
 .then(user => getTherepo(user.gitUsername))
 .then(repos => getCommits(repos[0]))
 .then(commits => console.log('Commits',commits))
 .catch(err => console.log('Error', err.message));

 
 console.log('After');


function getUser(id){
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            console.log('Reading data......');
            resolve ({ id: id , gitUsername: 'nasib'});
        }, 2000);
    });
};


function getTherepo(username){
    return new Promise((resolve,reject) => {
        setTimeout(()=>{
            console.log('calling git api 1......');
            resolve(['repo1','repo2']);
        }, 2000);
    });
};

function getCommits(repo){
    return new Promise((resolve,reject) => {
        setTimeout(()=>{
            console.log('calling git api......');
            resolve(['commit']); 
        }, 2000);
    });
};