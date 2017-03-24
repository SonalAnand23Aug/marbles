'use strict';
/* global process */
/*******************************************************************************
 * Copyright (c) 2015 IBM Corp.
 *
 * All rights reserved. 
 *
 * Contributors:
 *   David Huffman - Initial implementation
 *******************************************************************************/
var express = require('express');
var router = express.Router();
var setup = require('../setup.js');

//anything in here gets passed to JADE template engine
function build_bag(){
	return {
				setup: setup,								//static vars for configuration settings
				e: process.error,							//send any setup errors
				jshash: process.env.cachebust_js,			//js cache busting hash (not important)
				csshash: process.env.cachebust_css,			//css cache busting hash (not important)
			};
}

// ============================================================================================================================
// Home
// ============================================================================================================================
/*router.route('/').get(function(req, res){
	res.redirect('/p1');
});*/

router.route('/').get(function(req, res){
	res.redirect('/login');
});
// ============================================================================================================================
// Part 1
// ============================================================================================================================
router.route('/login').get(function(req, res){
	res.render('login', {title: 'login', bag: build_bag()});
});

app.post('/', function(req, res){
	console.log(req.body['user']);
	if(req.body['user'] == "admin" && req.body['pass'] == "admin"){
		res.redirect('/p1');
	}
	else{
		res.render('login', {
			title : 'User id password incorrect'
			//udata : req.session.user
		});
	}


router.route('/p1').get(function(req, res){
	res.render('part1', {title: 'Marbles Part 1', bag: build_bag()});
});
router.route('/p1/:page?').get(function(req, res){
	res.render('part1', {title: 'Marbles Part 1', bag: build_bag()});
});

// ============================================================================================================================
// Part 2
// ============================================================================================================================
router.route('/p2').get(function(req, res){
	res.render('part2', {title: 'Marbles Part 2', bag: build_bag()});
});
router.route('/p2/:page?').get(function(req, res){
	res.render('part2', {title: 'Marbles Part 2', bag: build_bag()});
});

module.exports = router;