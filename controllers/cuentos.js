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

exports.createCuento = async function(req, res, next) {
    const title = req.body.title;
    const content = req.body.content;
    const author = req.body.author;
    const country = req.body.country;
    const years = req.body.years;
    const category = req.body.category;

    if(title != null && content != null) {
        const result = await db.query('INSERT INTO public.dataset_cuentos_es (author, country, years, title, category, content, id) VALUES ($1, $2, $3, $4, $5, $6, null)',[author, country, years, title, category, content]);
        console.log(result);
        if(result.rowCount == 1){
            res.status(201).json({
                message: 'Cuento creado correctamente',
                cuento: {title: title, content: content}
            });
        }
    }
   res.status(400)
}

exports.deleteCuento = async function(req, res, next) {
  const id = req.params.author;
  const response = await db.query('DELETE FROM public.dataset_cuentos_es Where author = $1', [id])
  console.log(response)
  res.status(200).json({
    message: 'Cuento borrado correctamente'
  });
}

exports.getAuthor = async function(req, res, next) {
    const id = req.params.author;
    const response = await db.query('SELECT * FROM public.dataset_cuentos_es Where author = $1', [id])
    res.json(response.rows);
  }