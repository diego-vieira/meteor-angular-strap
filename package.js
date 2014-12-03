Package.describe({
	name: 'evrei:angular-strap',
	summary: '(AngularJS 1.2+ native directives for Bootstrap 3.) re-packaged for meteorjs',
	version: '1.2.0',
	git: 'https://github.com/AdaptiveGroup/angular-strap.git'
});

Package.onUse(function(api) {
	api.versionsFrom('1.0');
	api.addFiles('js/angular-strap.min.js', 'client');
	api.addFiles('js/angular-strap.min.js.map', 'client');
});
