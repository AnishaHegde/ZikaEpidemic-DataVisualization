
/*
 * GET home page.
 */

exports.index = function(req, res){
	res.render('index');
};

exports.indexChinese = function(req, res){
	res.render('indexChinese');
};

exports.register = function(req, res){
	res.render('register');
};

exports.login = function(req, res){
	res.render('login');
};

exports.statistics = function(req, res){
	res.render('statistics');
};

exports.twomap = function(req, res){
	res.render('2DMap');
};

exports.threemap = function(req, res){
	res.render('3DGlobe');
};

exports.globe = function(req, res){
	res.render('globe');
};