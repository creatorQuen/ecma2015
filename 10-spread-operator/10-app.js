const defaults = {
    host: 'localhost',
    dbNmae: 'blog',
    user: 'admin'
};

const opts = {
    user: 'server',
    password: '123'
};

//Object assign
const result = Object.assign({}, defaults, opts);

const result1 = { ...defaults, ...opts};
console.log(result1); // { host: 'localhost', dbNmae: 'blog', user: 'server', password: '123' }


const port = 5000;
const result2 = {
    ...defaults,
    ...opts, 
    port,
    connect() {
        //...
    }
}
console.log(result2);