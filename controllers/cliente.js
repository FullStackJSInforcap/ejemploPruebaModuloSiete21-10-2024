const findAll = (req, res) => {
    console.log('Funcionando desde la p+agina');
    res.json('Probando');
}

const insert = (req, res) => {
    const nombre = req.body.nombre;
    const balance = req.body.balance;
    console.log(nombre, balance);
    res.json('funcionando');
}

module.exports = {
    findAll,
    insert
}