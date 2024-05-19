import mysql from 'mysql2/promise';

const pool = mysql.createPool({
    host: '154.41.253.42', // MySQL host
    user: 'Nixon', // MySQL user
    password: 'vlA0gG8PCsdvuixUocMs', // MySQL password
    database: 'userDatabase', // MySQL database name
    port: 3306 // MySQL port
});

export default pool;
