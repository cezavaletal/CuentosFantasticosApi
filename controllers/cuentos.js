const db = require('../db/db');

exports.getCuentos = async function(req, res, next) {
    try {
        const result = await db.query('SELECT * FROM dataset_cuentos_es LIMIT 10');
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
}

exports.createCuento = function(req, res, next) {
    const title = req.body.title;
    const content = req.body.content;

    res.status(201).json({
        message: 'Cuento creado correctamente',
        cuento: {title: title, content: content}
    });
}