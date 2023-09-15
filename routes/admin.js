const express = require('express');
const router = express.Router();
const categoryUpload = require('../multer/category')
const productUpload = require('../multer/productMulter')
const bannerUpload = require('../multer/banner')
const bannerCrop = require('../config/crop')
const productCrop = require('../config/productCrop')
const adminAuth = require('../auth/adminAuth')

const productController = require('../controllers/productController')
const categoryController = require('../controllers/categroyController')
const adminController = require('../controllers/adminController');
const orderController = require('../controllers/orderController');


/* GET users listing. */
router.get('/',adminAuth.isAdmin, adminController.getDashboard);
router.get('/adminLogin',adminController.getadminLogin)
router.get('/categories',adminAuth.isAdmin,categoryController.getCategory)
router.get('/products',adminAuth.isAdmin,productController.getAddproduct)
router.get('/productList',adminAuth.isAdmin,productController.adminProductList)
router.get('/usersList',adminAuth.isAdmin,adminController.usersList) 
router.get('/block-user',adminAuth.isAdmin,adminController.blockUser)
router.get('/unblock-user',adminAuth.isAdmin,adminController.unblockUser)
router.get('/getEditProduct',adminAuth.isAdmin,productController.getEditProduct)
router.get('/editCategory',adminAuth.isAdmin,categoryController.getEditCategory)
router.get('/list',adminAuth.isAdmin,categoryController.list)
router.get('/unlist',adminAuth.isAdmin,categoryController.unlist)
router.get('/orderList',adminAuth.isAdmin,adminController.orderList)
router.get('/salesToday',adminAuth.isAdmin,adminController.salesToday)
router.get('/salesWeekly',adminAuth.isAdmin,adminController.salesWeekly)
router.get('/salesMonthly',adminAuth.isAdmin,adminController.salesMonthly)
router.get('/salesYearly',adminAuth.isAdmin,adminController.salesYearly)
router.get('/orderDetailsAdmin',adminAuth.isAdmin,orderController.orderDetailsAdmin)
router.get('/banner',adminAuth.isAdmin,adminController.addBanner)
router.get('/addCoupon',adminAuth.isAdmin,adminController.getAddCoupon)
router.get('/deleteProduct',adminAuth.isAdmin,productController.deleteProduct)
router.get('/monthly-report',adminAuth.isAdmin,adminController.monthlyreport)





router.post('/adminLogin',adminController.adminLogin)
router.post('/categories',categoryUpload.single('image'), categoryController.addCategory)
router.post('/getEditProduct',productUpload.array('images',4),productController.editProduct)
router.post('/editCategory',categoryUpload.single('image'),categoryController.editCategory)
router.post('/products',productUpload.array('images',4),productCrop.productCrop, productController.addProducts)
router.post('/changeStatus',adminController.changeStatus)
router.post('/banner',bannerUpload.single('image'),bannerCrop.bannerCrop,adminController.banner)
router.post('/addCoupon',adminController.addCoupon)



module.exports = router;
