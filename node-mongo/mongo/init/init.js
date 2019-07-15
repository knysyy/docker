var newUsers = [
    {
        user: 'node',
        pwd: 'password',
        roles: [
            {
                role: 'readWrite',
                db: 'data'
            }
        ]
    }
];

var currentUsers = db.getUsers();
if (currentUsers.length === newUsers.length) {
    quit();
}
db.dropAllUsers();

var length = newUsers.length;
for(var i = 0; i < length; i++) {
    db.createUser(newUsers[i]);
}
