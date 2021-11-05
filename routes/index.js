const express = require('express');
const router = express.Router();

const Task = require('../models/task');

router.get('/', async (req, res) => {
   const venta = await Task.find();
    res.render('index', {
        venta
    });
});

router.post('/add', async (req, res) => {
const venta = new Task(req.body);
await venta.save();
res.redirect('/#contact');
});

router.get('/edit/:id', async (req, res) => {
    const { id } = req.params;
    const venta = await Task.findById(id);
    res.render('edit', {
        venta
    });
});

router.post('/edit/:id', async (req, res) => {
    const { id } = req.params;
    await Task.update({_id: id}, req.body);
    res.redirect('/#contact');
});

router.get('/delete/:id', async (req, res) => {
    const { id } = req.params;
    await Task.remove({_id: id});
    res.redirect("/#contact");
})

module.exports = router;