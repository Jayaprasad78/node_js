import express from 'express';
import issueTrackerPath from './issueTracker';

const router = express.Router();


router.get('/', (req,res)=>{res.redirect('/issueTracker')})

router.use('/issueTracker', issueTrackerPath)

module.exports = router;