
const express = require('express');
const router = express.Router({mergeParams:true});
const catchAsync = require('../utils/catchAsync');
const Campground = require('../models/campground');
const reviews = require('../controllers/reviews');
const Review = require('../models/review');
const ExpressError = require('../utils/ExpressError');
const {validateReview , isLoggedIn , isReviewAuthor} = require('../middleware');


router.post('/', validateReview ,isLoggedIn, catchAsync(reviews.createReview));

router.delete('/:reviewId',isLoggedIn,isReviewAuthor, catchAsync(reviews.deleteReview))

module.exports = router;