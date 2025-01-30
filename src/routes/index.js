import {Router} from 'express';
const router=Router();

router.get('/', (req,res) => res.render('index',{title:'Portafolio'}))
router.get('/about', (req,res) => res.render('about',{title:'Sobre mi'}))
router.get('/contacto', (req,res) => res.render('contacto',{title:'Contacto'}))
router.get('/habilidades', (req,res) => res.render('habilidades',{title:'Habilidades'}))
router.get('/proyectos', (req,res) => res.render('proyectos',{title:'Proyectos'}))



export default router;