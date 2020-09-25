const userControler = require('../controller/userControler');
const clothContrler = require('../controller/clothControler');
const express       = require('express');

const router = express.Router();

//----------- user part start ------------//

router.get('/register',userControler.userCntrl.getRegister);
router.post('/register',userControler.userCntrl.postRegister);
router.get('/login',userControler.userCntrl.getLogin);
router.post('/login',userControler.userCntrl.postLogin);
router.get('/profile',userControler.userCntrl.getProfile);
router.post('/profile',userControler.userCntrl.postProfile);

//----------- user part end ------------//

//---------- cloth part start ---------//

router.get('/addCloth',clothContrler.clothCntrl.getAddCloth);
router.post('/addCloth',clothContrler.clothCntrl.postAddCloth);
router.get('/editCloth/:id',clothContrler.clothCntrl.getEditCloth);
router.post('/editCloth',clothContrler.clothCntrl.postEditCloth);
router.get('/deleteCloth/:id',clothContrler.clothCntrl.getDelCloth);
router.get('/showUserCloth',clothContrler.clothCntrl.getUserCloth);
//---------- cloth part end ---------//

module.exports = router;