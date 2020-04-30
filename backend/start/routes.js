'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

/**
 * Admin Routes
 * 
*/
Route.group(() => {
    Route.post('auth/token', 'UserController.loginAdmin')
    Route.resource('questions', 'QuestionController').apiOnly();
    Route.resource('themes', 'ThemeController').apiOnly();
}).prefix('admin');


/**
 * Game routes
 * 
*/
Route.get('/users/:githubuser', 'UserController.getOrCreateUser');
Route.get('/match/create/:userId', 'MatchController.store');
Route.post('/match/join', 'MatchController.joinMatchWithCode');