webpackJsonp([1,4],{

/***/ 140:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 141:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)();
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Roboto+Mono);", ""]);

// module
exports.push([module.i, ":host {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  height: 100%;\n  width: 100%; }\n\napp-tweet {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  height: 100%; }\n\nfooter {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: end;\n      -ms-flex-align: end;\n          align-items: flex-end;\n  -webkit-box-flex: 0;\n      -ms-flex-positive: 0;\n          flex-grow: 0;\n  -ms-flex-negative: 0;\n      flex-shrink: 0;\n  padding: 1rem;\n  font-family: 'Roboto Mono', sans-serif;\n  font-size: 0.7rem; }\n\n.github {\n  vertical-align: middle;\n  width: 20px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 142:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)();
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Gloria+Hallelujah);", ""]);

// module
exports.push([module.i, "app-face {\n  display: block;\n  height: 100%;\n  width: 100%; }\n\n.face {\n  box-sizing: border-box;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  height: 100%;\n  padding: 1rem;\n  width: 100%; }\n  @media only screen and (min-width: 640px) {\n    .face {\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      max-height: none;\n      padding: 0;\n      -webkit-transform: scale(1.25) translate(-10%, 2%);\n              transform: scale(1.25) translate(-10%, 2%);\n      width: 50%; } }\n  @media only screen and (max-aspect-ratio: 4 / 3) {\n    .face {\n      height: initial; } }\n\n.text {\n  box-sizing: border-box;\n  color: black;\n  font-size: 1.5rem;\n  font-family: 'Gloria Hallelujah', sans-serif;\n  line-height: 1.5em;\n  padding: 1rem;\n  text-decoration: none;\n  width: 100%; }\n  @media only screen and (min-width: 640px) {\n    .text {\n      font-size: 2rem;\n      max-height: 100%;\n      overflow: hidden;\n      width: 50%; } }\n  @media only screen and (min-width: 1024px) {\n    .text {\n      font-size: 3rem; } }\n\n.wrapper {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  width: 100%; }\n  @media only screen and (min-width: 640px) {\n    .wrapper {\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: row;\n              flex-direction: row; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 143:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 144:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)();
// imports


// module
exports.push([module.i, "svg {\n  max-height: 100%;\n  width: 100%;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 145:
/***/ (function(module, exports) {

module.exports = {
	"name": "trump-tweets",
	"version": "1.1.2",
	"license": "MIT",
	"scripts": {
		"ng": "ng",
		"start": "ng serve",
		"build": "ng build",
		"test": "ng test",
		"lint": "ng lint",
		"e2e": "ng e2e",
		"deploy": "nlm release --commit && npm run update-tweets && ng build && cp ./CNAME ./dist/CNAME && ngh",
		"update-tweets": "ts-node ./scripts/update-tweets"
	},
	"private": true,
	"repository": "https://github.com/jessepinho/trumpymctweetface.com.git",
	"dependencies": {
		"@angular/common": "^4.0.0",
		"@angular/compiler": "^4.0.0",
		"@angular/core": "^4.0.0",
		"@angular/forms": "^4.0.0",
		"@angular/http": "^4.0.0",
		"@angular/platform-browser": "^4.0.0",
		"@angular/platform-browser-dynamic": "^4.0.0",
		"@angular/router": "^4.0.0",
		"@types/d3": "^4.7.0",
		"core-js": "^2.4.1",
		"d3": "^4.7.4",
		"d3-scale": "^1.0.5",
		"rxjs": "^5.1.0",
		"zone.js": "^0.8.4"
	},
	"devDependencies": {
		"@angular/cli": "1.0.0",
		"@angular/compiler-cli": "^4.0.0",
		"@types/jasmine": "2.5.38",
		"@types/node": "~6.0.60",
		"codelyzer": "~2.0.0",
		"jasmine-core": "~2.5.2",
		"jasmine-spec-reporter": "~3.2.0",
		"karma": "~1.4.1",
		"karma-chrome-launcher": "~2.0.0",
		"karma-cli": "~1.0.1",
		"karma-coverage-istanbul-reporter": "^0.2.0",
		"karma-jasmine": "~1.1.0",
		"karma-jasmine-html-reporter": "^0.2.2",
		"nlm": "^3.2.0",
		"protractor": "~5.1.0",
		"ts-node": "~2.0.0",
		"tslint": "~4.5.0",
		"twitter": "^1.7.0",
		"typescript": "~2.2.0"
	}
};

/***/ }),

/***/ 146:
/***/ (function(module, exports) {

module.exports = [
	{
		"created_at": "Tue Apr 04 21:03:51 +0000 2017",
		"id": 849366930133839900,
		"id_str": "849366930133839872",
		"text": "Great to talk jobs with #NABTU2017. Tremendous spirit &amp; optimism - we will deliver! https://t.co/6lRuQZZHrc",
		"truncated": false,
		"entities": {
			"hashtags": [
				{
					"text": "NABTU2017",
					"indices": [
						24,
						34
					]
				}
			],
			"symbols": [],
			"user_mentions": [],
			"urls": [
				{
					"url": "https://t.co/6lRuQZZHrc",
					"expanded_url": "http://thehill.com/policy/transportation/327248-trump-promises-to-rebuild-country-in-speech-to-construction-workers",
					"display_url": "thehill.com/policy/transpo…",
					"indices": [
						88,
						111
					]
				}
			]
		},
		"source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
		"in_reply_to_status_id": null,
		"in_reply_to_status_id_str": null,
		"in_reply_to_user_id": null,
		"in_reply_to_user_id_str": null,
		"in_reply_to_screen_name": null,
		"user": {
			"id": 25073877,
			"id_str": "25073877",
			"name": "Donald J. Trump",
			"screen_name": "realDonaldTrump",
			"location": "Washington, DC",
			"description": "45th President of the United States of America",
			"url": null,
			"entities": {
				"description": {
					"urls": []
				}
			},
			"protected": false,
			"followers_count": 27379007,
			"friends_count": 43,
			"listed_count": 67563,
			"created_at": "Wed Mar 18 13:46:38 +0000 2009",
			"favourites_count": 47,
			"utc_offset": -14400,
			"time_zone": "Eastern Time (US & Canada)",
			"geo_enabled": true,
			"verified": true,
			"statuses_count": 34705,
			"lang": "en",
			"contributors_enabled": false,
			"is_translator": false,
			"is_translation_enabled": true,
			"profile_background_color": "6D5C18",
			"profile_background_image_url": "http://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_tile": true,
			"profile_image_url": "http://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_image_url_https": "https://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_banner_url": "https://pbs.twimg.com/profile_banners/25073877/1489657715",
			"profile_link_color": "0D5B73",
			"profile_sidebar_border_color": "BDDCAD",
			"profile_sidebar_fill_color": "C5CEC0",
			"profile_text_color": "333333",
			"profile_use_background_image": true,
			"has_extended_profile": false,
			"default_profile": false,
			"default_profile_image": false,
			"following": null,
			"follow_request_sent": null,
			"notifications": null,
			"translator_type": "regular"
		},
		"geo": null,
		"coordinates": null,
		"place": null,
		"contributors": null,
		"is_quote_status": false,
		"retweet_count": 3312,
		"favorite_count": 16463,
		"favorited": false,
		"retweeted": false,
		"possibly_sensitive": false,
		"lang": "en"
	},
	{
		"created_at": "Tue Apr 04 19:38:59 +0000 2017",
		"id": 849345573509574700,
		"id_str": "849345573509574665",
		"text": "Thank you Sean McGarvey &amp; the entire Governing Board of Presidents for honoring me w/an invite to speak. #NABTU2017… https://t.co/dJlZvlq6Tj",
		"truncated": true,
		"entities": {
			"hashtags": [
				{
					"text": "NABTU2017",
					"indices": [
						109,
						119
					]
				}
			],
			"symbols": [],
			"user_mentions": [],
			"urls": [
				{
					"url": "https://t.co/dJlZvlq6Tj",
					"expanded_url": "https://twitter.com/i/web/status/849345573509574665",
					"display_url": "twitter.com/i/web/status/8…",
					"indices": [
						121,
						144
					]
				}
			]
		},
		"source": "<a href=\"https://ads.twitter.com\" rel=\"nofollow\">Twitter Ads</a>",
		"in_reply_to_status_id": null,
		"in_reply_to_status_id_str": null,
		"in_reply_to_user_id": null,
		"in_reply_to_user_id_str": null,
		"in_reply_to_screen_name": null,
		"user": {
			"id": 25073877,
			"id_str": "25073877",
			"name": "Donald J. Trump",
			"screen_name": "realDonaldTrump",
			"location": "Washington, DC",
			"description": "45th President of the United States of America",
			"url": null,
			"entities": {
				"description": {
					"urls": []
				}
			},
			"protected": false,
			"followers_count": 27379007,
			"friends_count": 43,
			"listed_count": 67563,
			"created_at": "Wed Mar 18 13:46:38 +0000 2009",
			"favourites_count": 47,
			"utc_offset": -14400,
			"time_zone": "Eastern Time (US & Canada)",
			"geo_enabled": true,
			"verified": true,
			"statuses_count": 34705,
			"lang": "en",
			"contributors_enabled": false,
			"is_translator": false,
			"is_translation_enabled": true,
			"profile_background_color": "6D5C18",
			"profile_background_image_url": "http://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_tile": true,
			"profile_image_url": "http://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_image_url_https": "https://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_banner_url": "https://pbs.twimg.com/profile_banners/25073877/1489657715",
			"profile_link_color": "0D5B73",
			"profile_sidebar_border_color": "BDDCAD",
			"profile_sidebar_fill_color": "C5CEC0",
			"profile_text_color": "333333",
			"profile_use_background_image": true,
			"has_extended_profile": false,
			"default_profile": false,
			"default_profile_image": false,
			"following": null,
			"follow_request_sent": null,
			"notifications": null,
			"translator_type": "regular"
		},
		"geo": null,
		"coordinates": null,
		"place": null,
		"contributors": null,
		"is_quote_status": false,
		"retweet_count": 4391,
		"favorite_count": 21326,
		"favorited": false,
		"retweeted": false,
		"possibly_sensitive": false,
		"lang": "en"
	},
	{
		"created_at": "Tue Apr 04 18:38:13 +0000 2017",
		"id": 849330281412792300,
		"id_str": "849330281412792320",
		"text": ".@WhiteHouse #CEOTownHall\n➡️https://t.co/ADSKuUXf1b https://t.co/XHfQ6zmF2H",
		"truncated": false,
		"entities": {
			"hashtags": [
				{
					"text": "CEOTownHall",
					"indices": [
						13,
						25
					]
				}
			],
			"symbols": [],
			"user_mentions": [
				{
					"screen_name": "WhiteHouse",
					"name": "The White House",
					"id": 822215673812119600,
					"id_str": "822215673812119553",
					"indices": [
						1,
						12
					]
				}
			],
			"urls": [
				{
					"url": "https://t.co/ADSKuUXf1b",
					"expanded_url": "http://45.WH.Gov/iQXunx",
					"display_url": "45.WH.Gov/iQXunx",
					"indices": [
						28,
						51
					]
				}
			],
			"media": [
				{
					"id": 849328408832208900,
					"id_str": "849328408832208902",
					"indices": [
						52,
						75
					],
					"media_url": "http://pbs.twimg.com/ext_tw_video_thumb/849328408832208902/pu/img/m1eV48UPMuyxgS2Y.jpg",
					"media_url_https": "https://pbs.twimg.com/ext_tw_video_thumb/849328408832208902/pu/img/m1eV48UPMuyxgS2Y.jpg",
					"url": "https://t.co/XHfQ6zmF2H",
					"display_url": "pic.twitter.com/XHfQ6zmF2H",
					"expanded_url": "https://twitter.com/realDonaldTrump/status/849330281412792320/video/1",
					"type": "photo",
					"sizes": {
						"thumb": {
							"w": 150,
							"h": 150,
							"resize": "crop"
						},
						"medium": {
							"w": 600,
							"h": 338,
							"resize": "fit"
						},
						"small": {
							"w": 340,
							"h": 191,
							"resize": "fit"
						},
						"large": {
							"w": 1024,
							"h": 576,
							"resize": "fit"
						}
					}
				}
			]
		},
		"extended_entities": {
			"media": [
				{
					"id": 849328408832208900,
					"id_str": "849328408832208902",
					"indices": [
						52,
						75
					],
					"media_url": "http://pbs.twimg.com/ext_tw_video_thumb/849328408832208902/pu/img/m1eV48UPMuyxgS2Y.jpg",
					"media_url_https": "https://pbs.twimg.com/ext_tw_video_thumb/849328408832208902/pu/img/m1eV48UPMuyxgS2Y.jpg",
					"url": "https://t.co/XHfQ6zmF2H",
					"display_url": "pic.twitter.com/XHfQ6zmF2H",
					"expanded_url": "https://twitter.com/realDonaldTrump/status/849330281412792320/video/1",
					"type": "video",
					"sizes": {
						"thumb": {
							"w": 150,
							"h": 150,
							"resize": "crop"
						},
						"medium": {
							"w": 600,
							"h": 338,
							"resize": "fit"
						},
						"small": {
							"w": 340,
							"h": 191,
							"resize": "fit"
						},
						"large": {
							"w": 1024,
							"h": 576,
							"resize": "fit"
						}
					},
					"video_info": {
						"aspect_ratio": [
							16,
							9
						],
						"duration_millis": 109100,
						"variants": [
							{
								"bitrate": 832000,
								"content_type": "video/mp4",
								"url": "https://video.twimg.com/ext_tw_video/849328408832208902/pu/vid/640x360/7sbOh1JapaFOsf-C.mp4"
							},
							{
								"bitrate": 2176000,
								"content_type": "video/mp4",
								"url": "https://video.twimg.com/ext_tw_video/849328408832208902/pu/vid/1280x720/Yj53N38Pku2kT1Vz.mp4"
							},
							{
								"bitrate": 320000,
								"content_type": "video/mp4",
								"url": "https://video.twimg.com/ext_tw_video/849328408832208902/pu/vid/320x180/PYI2fadTGKw0pgOy.mp4"
							},
							{
								"content_type": "application/x-mpegURL",
								"url": "https://video.twimg.com/ext_tw_video/849328408832208902/pu/pl/fVdaCSbEVdwUoNbw.m3u8"
							}
						]
					},
					"additional_media_info": {
						"monetizable": false
					}
				}
			]
		},
		"source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
		"in_reply_to_status_id": null,
		"in_reply_to_status_id_str": null,
		"in_reply_to_user_id": null,
		"in_reply_to_user_id_str": null,
		"in_reply_to_screen_name": null,
		"user": {
			"id": 25073877,
			"id_str": "25073877",
			"name": "Donald J. Trump",
			"screen_name": "realDonaldTrump",
			"location": "Washington, DC",
			"description": "45th President of the United States of America",
			"url": null,
			"entities": {
				"description": {
					"urls": []
				}
			},
			"protected": false,
			"followers_count": 27379007,
			"friends_count": 43,
			"listed_count": 67563,
			"created_at": "Wed Mar 18 13:46:38 +0000 2009",
			"favourites_count": 47,
			"utc_offset": -14400,
			"time_zone": "Eastern Time (US & Canada)",
			"geo_enabled": true,
			"verified": true,
			"statuses_count": 34705,
			"lang": "en",
			"contributors_enabled": false,
			"is_translator": false,
			"is_translation_enabled": true,
			"profile_background_color": "6D5C18",
			"profile_background_image_url": "http://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_tile": true,
			"profile_image_url": "http://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_image_url_https": "https://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_banner_url": "https://pbs.twimg.com/profile_banners/25073877/1489657715",
			"profile_link_color": "0D5B73",
			"profile_sidebar_border_color": "BDDCAD",
			"profile_sidebar_fill_color": "C5CEC0",
			"profile_text_color": "333333",
			"profile_use_background_image": true,
			"has_extended_profile": false,
			"default_profile": false,
			"default_profile_image": false,
			"following": null,
			"follow_request_sent": null,
			"notifications": null,
			"translator_type": "regular"
		},
		"geo": null,
		"coordinates": null,
		"place": null,
		"contributors": null,
		"is_quote_status": false,
		"retweet_count": 4552,
		"favorite_count": 18770,
		"favorited": false,
		"retweeted": false,
		"possibly_sensitive": false,
		"lang": "und"
	},
	{
		"created_at": "Tue Apr 04 12:39:16 +0000 2017",
		"id": 849239946653290500,
		"id_str": "849239946653290496",
		"text": "RT @DRUDGE_REPORT: RICE ORDERED SPY DOCS ON TRUMP? https://t.co/bL2nZRFxk9",
		"truncated": false,
		"entities": {
			"hashtags": [],
			"symbols": [],
			"user_mentions": [
				{
					"screen_name": "DRUDGE_REPORT",
					"name": "DRUDGE REPORT",
					"id": 14669951,
					"id_str": "14669951",
					"indices": [
						3,
						17
					]
				}
			],
			"urls": [
				{
					"url": "https://t.co/bL2nZRFxk9",
					"expanded_url": "http://drudge.tw/2oUA1uA",
					"display_url": "drudge.tw/2oUA1uA",
					"indices": [
						51,
						74
					]
				}
			]
		},
		"source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
		"in_reply_to_status_id": null,
		"in_reply_to_status_id_str": null,
		"in_reply_to_user_id": null,
		"in_reply_to_user_id_str": null,
		"in_reply_to_screen_name": null,
		"user": {
			"id": 25073877,
			"id_str": "25073877",
			"name": "Donald J. Trump",
			"screen_name": "realDonaldTrump",
			"location": "Washington, DC",
			"description": "45th President of the United States of America",
			"url": null,
			"entities": {
				"description": {
					"urls": []
				}
			},
			"protected": false,
			"followers_count": 27379007,
			"friends_count": 43,
			"listed_count": 67563,
			"created_at": "Wed Mar 18 13:46:38 +0000 2009",
			"favourites_count": 47,
			"utc_offset": -14400,
			"time_zone": "Eastern Time (US & Canada)",
			"geo_enabled": true,
			"verified": true,
			"statuses_count": 34705,
			"lang": "en",
			"contributors_enabled": false,
			"is_translator": false,
			"is_translation_enabled": true,
			"profile_background_color": "6D5C18",
			"profile_background_image_url": "http://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_tile": true,
			"profile_image_url": "http://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_image_url_https": "https://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_banner_url": "https://pbs.twimg.com/profile_banners/25073877/1489657715",
			"profile_link_color": "0D5B73",
			"profile_sidebar_border_color": "BDDCAD",
			"profile_sidebar_fill_color": "C5CEC0",
			"profile_text_color": "333333",
			"profile_use_background_image": true,
			"has_extended_profile": false,
			"default_profile": false,
			"default_profile_image": false,
			"following": null,
			"follow_request_sent": null,
			"notifications": null,
			"translator_type": "regular"
		},
		"geo": null,
		"coordinates": null,
		"place": null,
		"contributors": null,
		"retweeted_status": {
			"created_at": "Tue Apr 04 12:32:20 +0000 2017",
			"id": 849238202992836600,
			"id_str": "849238202992836608",
			"text": "RICE ORDERED SPY DOCS ON TRUMP? https://t.co/bL2nZRFxk9",
			"truncated": false,
			"entities": {
				"hashtags": [],
				"symbols": [],
				"user_mentions": [],
				"urls": [
					{
						"url": "https://t.co/bL2nZRFxk9",
						"expanded_url": "http://drudge.tw/2oUA1uA",
						"display_url": "drudge.tw/2oUA1uA",
						"indices": [
							32,
							55
						]
					}
				]
			},
			"source": "<a href=\"http://drudge.tw\" rel=\"nofollow\">Drudge</a>",
			"in_reply_to_status_id": null,
			"in_reply_to_status_id_str": null,
			"in_reply_to_user_id": null,
			"in_reply_to_user_id_str": null,
			"in_reply_to_screen_name": null,
			"user": {
				"id": 14669951,
				"id_str": "14669951",
				"name": "DRUDGE REPORT",
				"screen_name": "DRUDGE_REPORT",
				"location": "US",
				"description": "The DRUDGE REPORT is a U.S. based news aggregation website run by Matt Drudge(@DRUDGE).",
				"url": "http://t.co/dsLXEBfDsQ",
				"entities": {
					"url": {
						"urls": [
							{
								"url": "http://t.co/dsLXEBfDsQ",
								"expanded_url": "http://www.DRUDGEREPORT.com",
								"display_url": "DRUDGEREPORT.com",
								"indices": [
									0,
									22
								]
							}
						]
					},
					"description": {
						"urls": []
					}
				},
				"protected": false,
				"followers_count": 1188005,
				"friends_count": 2,
				"listed_count": 20892,
				"created_at": "Tue May 06 05:34:47 +0000 2008",
				"favourites_count": 0,
				"utc_offset": -25200,
				"time_zone": "Pacific Time (US & Canada)",
				"geo_enabled": false,
				"verified": false,
				"statuses_count": 188288,
				"lang": "en",
				"contributors_enabled": false,
				"is_translator": false,
				"is_translation_enabled": false,
				"profile_background_color": "FFFFFF",
				"profile_background_image_url": "http://pbs.twimg.com/profile_background_images/4623499/white.png",
				"profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/4623499/white.png",
				"profile_background_tile": false,
				"profile_image_url": "http://pbs.twimg.com/profile_images/53808884/images_normal.jpeg",
				"profile_image_url_https": "https://pbs.twimg.com/profile_images/53808884/images_normal.jpeg",
				"profile_link_color": "000000",
				"profile_sidebar_border_color": "FFFFFF",
				"profile_sidebar_fill_color": "FFFFFF",
				"profile_text_color": "000000",
				"profile_use_background_image": false,
				"has_extended_profile": false,
				"default_profile": false,
				"default_profile_image": false,
				"following": null,
				"follow_request_sent": null,
				"notifications": null,
				"translator_type": "none"
			},
			"geo": null,
			"coordinates": null,
			"place": null,
			"contributors": null,
			"is_quote_status": false,
			"retweet_count": 8004,
			"favorite_count": 17789,
			"favorited": false,
			"retweeted": false,
			"possibly_sensitive": true,
			"lang": "en"
		},
		"is_quote_status": false,
		"retweet_count": 8004,
		"favorite_count": 0,
		"favorited": false,
		"retweeted": false,
		"possibly_sensitive": false,
		"lang": "en"
	},
	{
		"created_at": "Mon Apr 03 19:39:05 +0000 2017",
		"id": 848983209580822500,
		"id_str": "848983209580822529",
		"text": "It was an honor to welcome President Al Sisi of Egypt to the @WhiteHouse as we renew the historic partnership betwe… https://t.co/9mRaGvcPHz",
		"truncated": true,
		"entities": {
			"hashtags": [],
			"symbols": [],
			"user_mentions": [
				{
					"screen_name": "WhiteHouse",
					"name": "The White House",
					"id": 822215673812119600,
					"id_str": "822215673812119553",
					"indices": [
						61,
						72
					]
				}
			],
			"urls": [
				{
					"url": "https://t.co/9mRaGvcPHz",
					"expanded_url": "https://twitter.com/i/web/status/848983209580822529",
					"display_url": "twitter.com/i/web/status/8…",
					"indices": [
						117,
						140
					]
				}
			]
		},
		"source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
		"in_reply_to_status_id": null,
		"in_reply_to_status_id_str": null,
		"in_reply_to_user_id": null,
		"in_reply_to_user_id_str": null,
		"in_reply_to_screen_name": null,
		"user": {
			"id": 25073877,
			"id_str": "25073877",
			"name": "Donald J. Trump",
			"screen_name": "realDonaldTrump",
			"location": "Washington, DC",
			"description": "45th President of the United States of America",
			"url": null,
			"entities": {
				"description": {
					"urls": []
				}
			},
			"protected": false,
			"followers_count": 27379007,
			"friends_count": 43,
			"listed_count": 67563,
			"created_at": "Wed Mar 18 13:46:38 +0000 2009",
			"favourites_count": 47,
			"utc_offset": -14400,
			"time_zone": "Eastern Time (US & Canada)",
			"geo_enabled": true,
			"verified": true,
			"statuses_count": 34705,
			"lang": "en",
			"contributors_enabled": false,
			"is_translator": false,
			"is_translation_enabled": true,
			"profile_background_color": "6D5C18",
			"profile_background_image_url": "http://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_tile": true,
			"profile_image_url": "http://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_image_url_https": "https://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_banner_url": "https://pbs.twimg.com/profile_banners/25073877/1489657715",
			"profile_link_color": "0D5B73",
			"profile_sidebar_border_color": "BDDCAD",
			"profile_sidebar_fill_color": "C5CEC0",
			"profile_text_color": "333333",
			"profile_use_background_image": true,
			"has_extended_profile": false,
			"default_profile": false,
			"default_profile_image": false,
			"following": null,
			"follow_request_sent": null,
			"notifications": null,
			"translator_type": "regular"
		},
		"geo": null,
		"coordinates": null,
		"place": null,
		"contributors": null,
		"is_quote_status": false,
		"retweet_count": 11435,
		"favorite_count": 48401,
		"favorited": false,
		"retweeted": false,
		"possibly_sensitive": false,
		"lang": "en"
	},
	{
		"created_at": "Mon Apr 03 17:56:55 +0000 2017",
		"id": 848957498040217600,
		"id_str": "848957498040217603",
		"text": "Looking forward to hosting our heroes from the Wounded Warrior Project (@WWP) Soldier Ride to the @WhiteHouse on Th… https://t.co/QLC0qFD94x",
		"truncated": true,
		"entities": {
			"hashtags": [],
			"symbols": [],
			"user_mentions": [
				{
					"screen_name": "wwp",
					"name": "WWP",
					"id": 33600887,
					"id_str": "33600887",
					"indices": [
						72,
						76
					]
				},
				{
					"screen_name": "WhiteHouse",
					"name": "The White House",
					"id": 822215673812119600,
					"id_str": "822215673812119553",
					"indices": [
						98,
						109
					]
				}
			],
			"urls": [
				{
					"url": "https://t.co/QLC0qFD94x",
					"expanded_url": "https://twitter.com/i/web/status/848957498040217603",
					"display_url": "twitter.com/i/web/status/8…",
					"indices": [
						117,
						140
					]
				}
			]
		},
		"source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
		"in_reply_to_status_id": null,
		"in_reply_to_status_id_str": null,
		"in_reply_to_user_id": null,
		"in_reply_to_user_id_str": null,
		"in_reply_to_screen_name": null,
		"user": {
			"id": 25073877,
			"id_str": "25073877",
			"name": "Donald J. Trump",
			"screen_name": "realDonaldTrump",
			"location": "Washington, DC",
			"description": "45th President of the United States of America",
			"url": null,
			"entities": {
				"description": {
					"urls": []
				}
			},
			"protected": false,
			"followers_count": 27379007,
			"friends_count": 43,
			"listed_count": 67563,
			"created_at": "Wed Mar 18 13:46:38 +0000 2009",
			"favourites_count": 47,
			"utc_offset": -14400,
			"time_zone": "Eastern Time (US & Canada)",
			"geo_enabled": true,
			"verified": true,
			"statuses_count": 34705,
			"lang": "en",
			"contributors_enabled": false,
			"is_translator": false,
			"is_translation_enabled": true,
			"profile_background_color": "6D5C18",
			"profile_background_image_url": "http://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_tile": true,
			"profile_image_url": "http://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_image_url_https": "https://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_banner_url": "https://pbs.twimg.com/profile_banners/25073877/1489657715",
			"profile_link_color": "0D5B73",
			"profile_sidebar_border_color": "BDDCAD",
			"profile_sidebar_fill_color": "C5CEC0",
			"profile_text_color": "333333",
			"profile_use_background_image": true,
			"has_extended_profile": false,
			"default_profile": false,
			"default_profile_image": false,
			"following": null,
			"follow_request_sent": null,
			"notifications": null,
			"translator_type": "regular"
		},
		"geo": null,
		"coordinates": null,
		"place": null,
		"contributors": null,
		"is_quote_status": false,
		"retweet_count": 9491,
		"favorite_count": 47401,
		"favorited": false,
		"retweeted": false,
		"possibly_sensitive": false,
		"lang": "en"
	},
	{
		"created_at": "Mon Apr 03 16:00:33 +0000 2017",
		"id": 848928217138384900,
		"id_str": "848928217138384896",
		"text": "Getting ready to meet President al-Sisi of Egypt. On behalf of the United States, I look forward to a long and wonderful relationship.",
		"truncated": false,
		"entities": {
			"hashtags": [],
			"symbols": [],
			"user_mentions": [],
			"urls": []
		},
		"source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
		"in_reply_to_status_id": null,
		"in_reply_to_status_id_str": null,
		"in_reply_to_user_id": null,
		"in_reply_to_user_id_str": null,
		"in_reply_to_screen_name": null,
		"user": {
			"id": 25073877,
			"id_str": "25073877",
			"name": "Donald J. Trump",
			"screen_name": "realDonaldTrump",
			"location": "Washington, DC",
			"description": "45th President of the United States of America",
			"url": null,
			"entities": {
				"description": {
					"urls": []
				}
			},
			"protected": false,
			"followers_count": 27379007,
			"friends_count": 43,
			"listed_count": 67563,
			"created_at": "Wed Mar 18 13:46:38 +0000 2009",
			"favourites_count": 47,
			"utc_offset": -14400,
			"time_zone": "Eastern Time (US & Canada)",
			"geo_enabled": true,
			"verified": true,
			"statuses_count": 34705,
			"lang": "en",
			"contributors_enabled": false,
			"is_translator": false,
			"is_translation_enabled": true,
			"profile_background_color": "6D5C18",
			"profile_background_image_url": "http://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_tile": true,
			"profile_image_url": "http://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_image_url_https": "https://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_banner_url": "https://pbs.twimg.com/profile_banners/25073877/1489657715",
			"profile_link_color": "0D5B73",
			"profile_sidebar_border_color": "BDDCAD",
			"profile_sidebar_fill_color": "C5CEC0",
			"profile_text_color": "333333",
			"profile_use_background_image": true,
			"has_extended_profile": false,
			"default_profile": false,
			"default_profile_image": false,
			"following": null,
			"follow_request_sent": null,
			"notifications": null,
			"translator_type": "regular"
		},
		"geo": null,
		"coordinates": null,
		"place": null,
		"contributors": null,
		"is_quote_status": false,
		"retweet_count": 11906,
		"favorite_count": 66420,
		"favorited": false,
		"retweeted": false,
		"lang": "en"
	},
	{
		"created_at": "Mon Apr 03 12:51:01 +0000 2017",
		"id": 848880519458717700,
		"id_str": "848880519458717698",
		"text": ".@FoxNews from multiple sources: \"There was electronic surveillance of Trump, and people close to Trump. This is unprecedented.\" @FBI",
		"truncated": false,
		"entities": {
			"hashtags": [],
			"symbols": [],
			"user_mentions": [
				{
					"screen_name": "FoxNews",
					"name": "Fox News",
					"id": 1367531,
					"id_str": "1367531",
					"indices": [
						1,
						9
					]
				},
				{
					"screen_name": "FBI",
					"name": "FBI",
					"id": 17629860,
					"id_str": "17629860",
					"indices": [
						129,
						133
					]
				}
			],
			"urls": []
		},
		"source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
		"in_reply_to_status_id": null,
		"in_reply_to_status_id_str": null,
		"in_reply_to_user_id": null,
		"in_reply_to_user_id_str": null,
		"in_reply_to_screen_name": null,
		"user": {
			"id": 25073877,
			"id_str": "25073877",
			"name": "Donald J. Trump",
			"screen_name": "realDonaldTrump",
			"location": "Washington, DC",
			"description": "45th President of the United States of America",
			"url": null,
			"entities": {
				"description": {
					"urls": []
				}
			},
			"protected": false,
			"followers_count": 27379007,
			"friends_count": 43,
			"listed_count": 67563,
			"created_at": "Wed Mar 18 13:46:38 +0000 2009",
			"favourites_count": 47,
			"utc_offset": -14400,
			"time_zone": "Eastern Time (US & Canada)",
			"geo_enabled": true,
			"verified": true,
			"statuses_count": 34705,
			"lang": "en",
			"contributors_enabled": false,
			"is_translator": false,
			"is_translation_enabled": true,
			"profile_background_color": "6D5C18",
			"profile_background_image_url": "http://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_tile": true,
			"profile_image_url": "http://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_image_url_https": "https://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_banner_url": "https://pbs.twimg.com/profile_banners/25073877/1489657715",
			"profile_link_color": "0D5B73",
			"profile_sidebar_border_color": "BDDCAD",
			"profile_sidebar_fill_color": "C5CEC0",
			"profile_text_color": "333333",
			"profile_use_background_image": true,
			"has_extended_profile": false,
			"default_profile": false,
			"default_profile_image": false,
			"following": null,
			"follow_request_sent": null,
			"notifications": null,
			"translator_type": "regular"
		},
		"geo": null,
		"coordinates": null,
		"place": null,
		"contributors": null,
		"is_quote_status": false,
		"retweet_count": 20626,
		"favorite_count": 62898,
		"favorited": false,
		"retweeted": false,
		"lang": "en"
	},
	{
		"created_at": "Mon Apr 03 11:21:11 +0000 2017",
		"id": 848857910297980900,
		"id_str": "848857910297980928",
		"text": "Did Hillary Clinton ever apologize for receiving the answers to the debate? Just asking!",
		"truncated": false,
		"entities": {
			"hashtags": [],
			"symbols": [],
			"user_mentions": [],
			"urls": []
		},
		"source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
		"in_reply_to_status_id": null,
		"in_reply_to_status_id_str": null,
		"in_reply_to_user_id": null,
		"in_reply_to_user_id_str": null,
		"in_reply_to_screen_name": null,
		"user": {
			"id": 25073877,
			"id_str": "25073877",
			"name": "Donald J. Trump",
			"screen_name": "realDonaldTrump",
			"location": "Washington, DC",
			"description": "45th President of the United States of America",
			"url": null,
			"entities": {
				"description": {
					"urls": []
				}
			},
			"protected": false,
			"followers_count": 27379007,
			"friends_count": 43,
			"listed_count": 67563,
			"created_at": "Wed Mar 18 13:46:38 +0000 2009",
			"favourites_count": 47,
			"utc_offset": -14400,
			"time_zone": "Eastern Time (US & Canada)",
			"geo_enabled": true,
			"verified": true,
			"statuses_count": 34705,
			"lang": "en",
			"contributors_enabled": false,
			"is_translator": false,
			"is_translation_enabled": true,
			"profile_background_color": "6D5C18",
			"profile_background_image_url": "http://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_tile": true,
			"profile_image_url": "http://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_image_url_https": "https://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_banner_url": "https://pbs.twimg.com/profile_banners/25073877/1489657715",
			"profile_link_color": "0D5B73",
			"profile_sidebar_border_color": "BDDCAD",
			"profile_sidebar_fill_color": "C5CEC0",
			"profile_text_color": "333333",
			"profile_use_background_image": true,
			"has_extended_profile": false,
			"default_profile": false,
			"default_profile_image": false,
			"following": null,
			"follow_request_sent": null,
			"notifications": null,
			"translator_type": "regular"
		},
		"geo": null,
		"coordinates": null,
		"place": null,
		"contributors": null,
		"is_quote_status": false,
		"retweet_count": 25051,
		"favorite_count": 97218,
		"favorited": false,
		"retweeted": false,
		"lang": "en"
	},
	{
		"created_at": "Mon Apr 03 11:16:52 +0000 2017",
		"id": 848856822312292400,
		"id_str": "848856822312292354",
		"text": "Was the brother of John Podesta paid big money to get the sanctions on Russia lifted? Did Hillary know?",
		"truncated": false,
		"entities": {
			"hashtags": [],
			"symbols": [],
			"user_mentions": [],
			"urls": []
		},
		"source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
		"in_reply_to_status_id": null,
		"in_reply_to_status_id_str": null,
		"in_reply_to_user_id": null,
		"in_reply_to_user_id_str": null,
		"in_reply_to_screen_name": null,
		"user": {
			"id": 25073877,
			"id_str": "25073877",
			"name": "Donald J. Trump",
			"screen_name": "realDonaldTrump",
			"location": "Washington, DC",
			"description": "45th President of the United States of America",
			"url": null,
			"entities": {
				"description": {
					"urls": []
				}
			},
			"protected": false,
			"followers_count": 27379007,
			"friends_count": 43,
			"listed_count": 67563,
			"created_at": "Wed Mar 18 13:46:38 +0000 2009",
			"favourites_count": 47,
			"utc_offset": -14400,
			"time_zone": "Eastern Time (US & Canada)",
			"geo_enabled": true,
			"verified": true,
			"statuses_count": 34705,
			"lang": "en",
			"contributors_enabled": false,
			"is_translator": false,
			"is_translation_enabled": true,
			"profile_background_color": "6D5C18",
			"profile_background_image_url": "http://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_tile": true,
			"profile_image_url": "http://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_image_url_https": "https://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_banner_url": "https://pbs.twimg.com/profile_banners/25073877/1489657715",
			"profile_link_color": "0D5B73",
			"profile_sidebar_border_color": "BDDCAD",
			"profile_sidebar_fill_color": "C5CEC0",
			"profile_text_color": "333333",
			"profile_use_background_image": true,
			"has_extended_profile": false,
			"default_profile": false,
			"default_profile_image": false,
			"following": null,
			"follow_request_sent": null,
			"notifications": null,
			"translator_type": "regular"
		},
		"geo": null,
		"coordinates": null,
		"place": null,
		"contributors": null,
		"is_quote_status": false,
		"retweet_count": 18906,
		"favorite_count": 64752,
		"favorited": false,
		"retweeted": false,
		"lang": "en"
	},
	{
		"created_at": "Mon Apr 03 10:15:17 +0000 2017",
		"id": 848841326183534600,
		"id_str": "848841326183534594",
		"text": "Such amazing reporting on unmasking and the crooked scheme against us by @foxandfriends. \"Spied on before nomination.\" The real story.",
		"truncated": false,
		"entities": {
			"hashtags": [],
			"symbols": [],
			"user_mentions": [
				{
					"screen_name": "foxandfriends",
					"name": "FOX & friends",
					"id": 15513604,
					"id_str": "15513604",
					"indices": [
						73,
						87
					]
				}
			],
			"urls": []
		},
		"source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
		"in_reply_to_status_id": null,
		"in_reply_to_status_id_str": null,
		"in_reply_to_user_id": null,
		"in_reply_to_user_id_str": null,
		"in_reply_to_screen_name": null,
		"user": {
			"id": 25073877,
			"id_str": "25073877",
			"name": "Donald J. Trump",
			"screen_name": "realDonaldTrump",
			"location": "Washington, DC",
			"description": "45th President of the United States of America",
			"url": null,
			"entities": {
				"description": {
					"urls": []
				}
			},
			"protected": false,
			"followers_count": 27379007,
			"friends_count": 43,
			"listed_count": 67563,
			"created_at": "Wed Mar 18 13:46:38 +0000 2009",
			"favourites_count": 47,
			"utc_offset": -14400,
			"time_zone": "Eastern Time (US & Canada)",
			"geo_enabled": true,
			"verified": true,
			"statuses_count": 34705,
			"lang": "en",
			"contributors_enabled": false,
			"is_translator": false,
			"is_translation_enabled": true,
			"profile_background_color": "6D5C18",
			"profile_background_image_url": "http://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_tile": true,
			"profile_image_url": "http://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_image_url_https": "https://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_banner_url": "https://pbs.twimg.com/profile_banners/25073877/1489657715",
			"profile_link_color": "0D5B73",
			"profile_sidebar_border_color": "BDDCAD",
			"profile_sidebar_fill_color": "C5CEC0",
			"profile_text_color": "333333",
			"profile_use_background_image": true,
			"has_extended_profile": false,
			"default_profile": false,
			"default_profile_image": false,
			"following": null,
			"follow_request_sent": null,
			"notifications": null,
			"translator_type": "regular"
		},
		"geo": null,
		"coordinates": null,
		"place": null,
		"contributors": null,
		"is_quote_status": false,
		"retweet_count": 18871,
		"favorite_count": 66790,
		"favorited": false,
		"retweeted": false,
		"lang": "en"
	},
	{
		"created_at": "Mon Apr 03 00:58:29 +0000 2017",
		"id": 848701201315188700,
		"id_str": "848701201315188736",
		"text": "Melania and I are honored to light up the @WhiteHouse this evening, for \n#WorldAutismAwarenessDay. Join us &amp; #LIUB.… https://t.co/tR3hqqyWvv",
		"truncated": true,
		"entities": {
			"hashtags": [
				{
					"text": "WorldAutismAwarenessDay",
					"indices": [
						73,
						97
					]
				},
				{
					"text": "LIUB",
					"indices": [
						113,
						118
					]
				}
			],
			"symbols": [],
			"user_mentions": [
				{
					"screen_name": "WhiteHouse",
					"name": "The White House",
					"id": 822215673812119600,
					"id_str": "822215673812119553",
					"indices": [
						42,
						53
					]
				}
			],
			"urls": [
				{
					"url": "https://t.co/tR3hqqyWvv",
					"expanded_url": "https://twitter.com/i/web/status/848701201315188736",
					"display_url": "twitter.com/i/web/status/8…",
					"indices": [
						121,
						144
					]
				}
			]
		},
		"source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
		"in_reply_to_status_id": null,
		"in_reply_to_status_id_str": null,
		"in_reply_to_user_id": null,
		"in_reply_to_user_id_str": null,
		"in_reply_to_screen_name": null,
		"user": {
			"id": 25073877,
			"id_str": "25073877",
			"name": "Donald J. Trump",
			"screen_name": "realDonaldTrump",
			"location": "Washington, DC",
			"description": "45th President of the United States of America",
			"url": null,
			"entities": {
				"description": {
					"urls": []
				}
			},
			"protected": false,
			"followers_count": 27379007,
			"friends_count": 43,
			"listed_count": 67563,
			"created_at": "Wed Mar 18 13:46:38 +0000 2009",
			"favourites_count": 47,
			"utc_offset": -14400,
			"time_zone": "Eastern Time (US & Canada)",
			"geo_enabled": true,
			"verified": true,
			"statuses_count": 34705,
			"lang": "en",
			"contributors_enabled": false,
			"is_translator": false,
			"is_translation_enabled": true,
			"profile_background_color": "6D5C18",
			"profile_background_image_url": "http://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_tile": true,
			"profile_image_url": "http://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_image_url_https": "https://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_banner_url": "https://pbs.twimg.com/profile_banners/25073877/1489657715",
			"profile_link_color": "0D5B73",
			"profile_sidebar_border_color": "BDDCAD",
			"profile_sidebar_fill_color": "C5CEC0",
			"profile_text_color": "333333",
			"profile_use_background_image": true,
			"has_extended_profile": false,
			"default_profile": false,
			"default_profile_image": false,
			"following": null,
			"follow_request_sent": null,
			"notifications": null,
			"translator_type": "regular"
		},
		"geo": null,
		"coordinates": null,
		"place": null,
		"contributors": null,
		"is_quote_status": false,
		"retweet_count": 23821,
		"favorite_count": 105430,
		"favorited": false,
		"retweeted": false,
		"possibly_sensitive": false,
		"lang": "en"
	},
	{
		"created_at": "Sun Apr 02 13:34:16 +0000 2017",
		"id": 848529014667055100,
		"id_str": "848529014667055105",
		"text": "The real story turns out to be SURVEILLANCE and LEAKING! Find the leakers.",
		"truncated": false,
		"entities": {
			"hashtags": [],
			"symbols": [],
			"user_mentions": [],
			"urls": []
		},
		"source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
		"in_reply_to_status_id": null,
		"in_reply_to_status_id_str": null,
		"in_reply_to_user_id": null,
		"in_reply_to_user_id_str": null,
		"in_reply_to_screen_name": null,
		"user": {
			"id": 25073877,
			"id_str": "25073877",
			"name": "Donald J. Trump",
			"screen_name": "realDonaldTrump",
			"location": "Washington, DC",
			"description": "45th President of the United States of America",
			"url": null,
			"entities": {
				"description": {
					"urls": []
				}
			},
			"protected": false,
			"followers_count": 27379007,
			"friends_count": 43,
			"listed_count": 67563,
			"created_at": "Wed Mar 18 13:46:38 +0000 2009",
			"favourites_count": 47,
			"utc_offset": -14400,
			"time_zone": "Eastern Time (US & Canada)",
			"geo_enabled": true,
			"verified": true,
			"statuses_count": 34705,
			"lang": "en",
			"contributors_enabled": false,
			"is_translator": false,
			"is_translation_enabled": true,
			"profile_background_color": "6D5C18",
			"profile_background_image_url": "http://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_tile": true,
			"profile_image_url": "http://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_image_url_https": "https://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_banner_url": "https://pbs.twimg.com/profile_banners/25073877/1489657715",
			"profile_link_color": "0D5B73",
			"profile_sidebar_border_color": "BDDCAD",
			"profile_sidebar_fill_color": "C5CEC0",
			"profile_text_color": "333333",
			"profile_use_background_image": true,
			"has_extended_profile": false,
			"default_profile": false,
			"default_profile_image": false,
			"following": null,
			"follow_request_sent": null,
			"notifications": null,
			"translator_type": "regular"
		},
		"geo": null,
		"coordinates": null,
		"place": null,
		"contributors": null,
		"is_quote_status": false,
		"retweet_count": 19140,
		"favorite_count": 76386,
		"favorited": false,
		"retweeted": false,
		"lang": "en"
	},
	{
		"created_at": "Sun Apr 02 13:03:43 +0000 2017",
		"id": 848521325480202200,
		"id_str": "848521325480202240",
		"text": "Talks on Repealing and Replacing ObamaCare are, and have been, going on, and will continue until such time as a deal is hopefully struck.",
		"truncated": false,
		"entities": {
			"hashtags": [],
			"symbols": [],
			"user_mentions": [],
			"urls": []
		},
		"source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
		"in_reply_to_status_id": null,
		"in_reply_to_status_id_str": null,
		"in_reply_to_user_id": null,
		"in_reply_to_user_id_str": null,
		"in_reply_to_screen_name": null,
		"user": {
			"id": 25073877,
			"id_str": "25073877",
			"name": "Donald J. Trump",
			"screen_name": "realDonaldTrump",
			"location": "Washington, DC",
			"description": "45th President of the United States of America",
			"url": null,
			"entities": {
				"description": {
					"urls": []
				}
			},
			"protected": false,
			"followers_count": 27379007,
			"friends_count": 43,
			"listed_count": 67563,
			"created_at": "Wed Mar 18 13:46:38 +0000 2009",
			"favourites_count": 47,
			"utc_offset": -14400,
			"time_zone": "Eastern Time (US & Canada)",
			"geo_enabled": true,
			"verified": true,
			"statuses_count": 34705,
			"lang": "en",
			"contributors_enabled": false,
			"is_translator": false,
			"is_translation_enabled": true,
			"profile_background_color": "6D5C18",
			"profile_background_image_url": "http://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_tile": true,
			"profile_image_url": "http://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_image_url_https": "https://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_banner_url": "https://pbs.twimg.com/profile_banners/25073877/1489657715",
			"profile_link_color": "0D5B73",
			"profile_sidebar_border_color": "BDDCAD",
			"profile_sidebar_fill_color": "C5CEC0",
			"profile_text_color": "333333",
			"profile_use_background_image": true,
			"has_extended_profile": false,
			"default_profile": false,
			"default_profile_image": false,
			"following": null,
			"follow_request_sent": null,
			"notifications": null,
			"translator_type": "regular"
		},
		"geo": null,
		"coordinates": null,
		"place": null,
		"contributors": null,
		"is_quote_status": false,
		"retweet_count": 13210,
		"favorite_count": 69238,
		"favorited": false,
		"retweeted": false,
		"lang": "en"
	},
	{
		"created_at": "Sun Apr 02 12:56:49 +0000 2017",
		"id": 848519587675201500,
		"id_str": "848519587675201538",
		"text": "Anybody (especially  Fake News media) who thinks that Repeal &amp; Replace of ObamaCare is dead does not know the love and strength in R Party!",
		"truncated": false,
		"entities": {
			"hashtags": [],
			"symbols": [],
			"user_mentions": [],
			"urls": []
		},
		"source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
		"in_reply_to_status_id": null,
		"in_reply_to_status_id_str": null,
		"in_reply_to_user_id": null,
		"in_reply_to_user_id_str": null,
		"in_reply_to_screen_name": null,
		"user": {
			"id": 25073877,
			"id_str": "25073877",
			"name": "Donald J. Trump",
			"screen_name": "realDonaldTrump",
			"location": "Washington, DC",
			"description": "45th President of the United States of America",
			"url": null,
			"entities": {
				"description": {
					"urls": []
				}
			},
			"protected": false,
			"followers_count": 27379007,
			"friends_count": 43,
			"listed_count": 67563,
			"created_at": "Wed Mar 18 13:46:38 +0000 2009",
			"favourites_count": 47,
			"utc_offset": -14400,
			"time_zone": "Eastern Time (US & Canada)",
			"geo_enabled": true,
			"verified": true,
			"statuses_count": 34705,
			"lang": "en",
			"contributors_enabled": false,
			"is_translator": false,
			"is_translation_enabled": true,
			"profile_background_color": "6D5C18",
			"profile_background_image_url": "http://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_tile": true,
			"profile_image_url": "http://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_image_url_https": "https://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_banner_url": "https://pbs.twimg.com/profile_banners/25073877/1489657715",
			"profile_link_color": "0D5B73",
			"profile_sidebar_border_color": "BDDCAD",
			"profile_sidebar_fill_color": "C5CEC0",
			"profile_text_color": "333333",
			"profile_use_background_image": true,
			"has_extended_profile": false,
			"default_profile": false,
			"default_profile_image": false,
			"following": null,
			"follow_request_sent": null,
			"notifications": null,
			"translator_type": "regular"
		},
		"geo": null,
		"coordinates": null,
		"place": null,
		"contributors": null,
		"is_quote_status": false,
		"retweet_count": 15802,
		"favorite_count": 76051,
		"favorited": false,
		"retweeted": false,
		"lang": "en"
	},
	{
		"created_at": "Sat Apr 01 22:21:02 +0000 2017",
		"id": 848299191646515200,
		"id_str": "848299191646515202",
		"text": "Thank you @JCLayfield -- will get even better as my Administration continues to put #AmericaFirst🇺🇸 https://t.co/AQQzmt10x7",
		"truncated": false,
		"entities": {
			"hashtags": [
				{
					"text": "AmericaFirst",
					"indices": [
						84,
						97
					]
				}
			],
			"symbols": [],
			"user_mentions": [
				{
					"screen_name": "JCLayfield",
					"name": "John Layfield",
					"id": 32117870,
					"id_str": "32117870",
					"indices": [
						10,
						21
					]
				}
			],
			"urls": [],
			"media": [
				{
					"id": 848298986469548000,
					"id_str": "848298986469548035",
					"indices": [
						100,
						123
					],
					"media_url": "http://pbs.twimg.com/ext_tw_video_thumb/848298986469548035/pu/img/mjsii_0IqJk_8Th0.jpg",
					"media_url_https": "https://pbs.twimg.com/ext_tw_video_thumb/848298986469548035/pu/img/mjsii_0IqJk_8Th0.jpg",
					"url": "https://t.co/AQQzmt10x7",
					"display_url": "pic.twitter.com/AQQzmt10x7",
					"expanded_url": "https://twitter.com/realDonaldTrump/status/848299191646515202/video/1",
					"type": "photo",
					"sizes": {
						"thumb": {
							"w": 150,
							"h": 150,
							"resize": "crop"
						},
						"medium": {
							"w": 600,
							"h": 338,
							"resize": "fit"
						},
						"small": {
							"w": 340,
							"h": 191,
							"resize": "fit"
						},
						"large": {
							"w": 640,
							"h": 360,
							"resize": "fit"
						}
					}
				}
			]
		},
		"extended_entities": {
			"media": [
				{
					"id": 848298986469548000,
					"id_str": "848298986469548035",
					"indices": [
						100,
						123
					],
					"media_url": "http://pbs.twimg.com/ext_tw_video_thumb/848298986469548035/pu/img/mjsii_0IqJk_8Th0.jpg",
					"media_url_https": "https://pbs.twimg.com/ext_tw_video_thumb/848298986469548035/pu/img/mjsii_0IqJk_8Th0.jpg",
					"url": "https://t.co/AQQzmt10x7",
					"display_url": "pic.twitter.com/AQQzmt10x7",
					"expanded_url": "https://twitter.com/realDonaldTrump/status/848299191646515202/video/1",
					"type": "video",
					"sizes": {
						"thumb": {
							"w": 150,
							"h": 150,
							"resize": "crop"
						},
						"medium": {
							"w": 600,
							"h": 338,
							"resize": "fit"
						},
						"small": {
							"w": 340,
							"h": 191,
							"resize": "fit"
						},
						"large": {
							"w": 640,
							"h": 360,
							"resize": "fit"
						}
					},
					"video_info": {
						"aspect_ratio": [
							16,
							9
						],
						"duration_millis": 44678,
						"variants": [
							{
								"bitrate": 320000,
								"content_type": "video/mp4",
								"url": "https://video.twimg.com/ext_tw_video/848298986469548035/pu/vid/320x180/AysI30ZwWbmGCb-_.mp4"
							},
							{
								"content_type": "application/x-mpegURL",
								"url": "https://video.twimg.com/ext_tw_video/848298986469548035/pu/pl/UEZsSUtH1xYPs0Vx.m3u8"
							},
							{
								"bitrate": 832000,
								"content_type": "video/mp4",
								"url": "https://video.twimg.com/ext_tw_video/848298986469548035/pu/vid/640x360/2V7d2VvDScLJL9Dy.mp4"
							}
						]
					},
					"additional_media_info": {
						"monetizable": false
					}
				}
			]
		},
		"source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
		"in_reply_to_status_id": null,
		"in_reply_to_status_id_str": null,
		"in_reply_to_user_id": null,
		"in_reply_to_user_id_str": null,
		"in_reply_to_screen_name": null,
		"user": {
			"id": 25073877,
			"id_str": "25073877",
			"name": "Donald J. Trump",
			"screen_name": "realDonaldTrump",
			"location": "Washington, DC",
			"description": "45th President of the United States of America",
			"url": null,
			"entities": {
				"description": {
					"urls": []
				}
			},
			"protected": false,
			"followers_count": 27379007,
			"friends_count": 43,
			"listed_count": 67563,
			"created_at": "Wed Mar 18 13:46:38 +0000 2009",
			"favourites_count": 47,
			"utc_offset": -14400,
			"time_zone": "Eastern Time (US & Canada)",
			"geo_enabled": true,
			"verified": true,
			"statuses_count": 34705,
			"lang": "en",
			"contributors_enabled": false,
			"is_translator": false,
			"is_translation_enabled": true,
			"profile_background_color": "6D5C18",
			"profile_background_image_url": "http://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_tile": true,
			"profile_image_url": "http://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_image_url_https": "https://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_banner_url": "https://pbs.twimg.com/profile_banners/25073877/1489657715",
			"profile_link_color": "0D5B73",
			"profile_sidebar_border_color": "BDDCAD",
			"profile_sidebar_fill_color": "C5CEC0",
			"profile_text_color": "333333",
			"profile_use_background_image": true,
			"has_extended_profile": false,
			"default_profile": false,
			"default_profile_image": false,
			"following": null,
			"follow_request_sent": null,
			"notifications": null,
			"translator_type": "regular"
		},
		"geo": null,
		"coordinates": null,
		"place": null,
		"contributors": null,
		"is_quote_status": false,
		"retweet_count": 13291,
		"favorite_count": 51095,
		"favorited": false,
		"retweeted": false,
		"possibly_sensitive": false,
		"lang": "en"
	},
	{
		"created_at": "Sat Apr 01 17:02:29 +0000 2017",
		"id": 848219027659010000,
		"id_str": "848219027659010051",
		"text": "..not associated with Russia. Trump team spied on before he was nominated.\" If this is true, does not get much bigger. Would be sad for U.S.",
		"truncated": false,
		"entities": {
			"hashtags": [],
			"symbols": [],
			"user_mentions": [],
			"urls": []
		},
		"source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
		"in_reply_to_status_id": null,
		"in_reply_to_status_id_str": null,
		"in_reply_to_user_id": null,
		"in_reply_to_user_id_str": null,
		"in_reply_to_screen_name": null,
		"user": {
			"id": 25073877,
			"id_str": "25073877",
			"name": "Donald J. Trump",
			"screen_name": "realDonaldTrump",
			"location": "Washington, DC",
			"description": "45th President of the United States of America",
			"url": null,
			"entities": {
				"description": {
					"urls": []
				}
			},
			"protected": false,
			"followers_count": 27379007,
			"friends_count": 43,
			"listed_count": 67563,
			"created_at": "Wed Mar 18 13:46:38 +0000 2009",
			"favourites_count": 47,
			"utc_offset": -14400,
			"time_zone": "Eastern Time (US & Canada)",
			"geo_enabled": true,
			"verified": true,
			"statuses_count": 34705,
			"lang": "en",
			"contributors_enabled": false,
			"is_translator": false,
			"is_translation_enabled": true,
			"profile_background_color": "6D5C18",
			"profile_background_image_url": "http://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_tile": true,
			"profile_image_url": "http://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_image_url_https": "https://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_banner_url": "https://pbs.twimg.com/profile_banners/25073877/1489657715",
			"profile_link_color": "0D5B73",
			"profile_sidebar_border_color": "BDDCAD",
			"profile_sidebar_fill_color": "C5CEC0",
			"profile_text_color": "333333",
			"profile_use_background_image": true,
			"has_extended_profile": false,
			"default_profile": false,
			"default_profile_image": false,
			"following": null,
			"follow_request_sent": null,
			"notifications": null,
			"translator_type": "regular"
		},
		"geo": null,
		"coordinates": null,
		"place": null,
		"contributors": null,
		"is_quote_status": false,
		"retweet_count": 15381,
		"favorite_count": 62341,
		"favorited": false,
		"retweeted": false,
		"lang": "en"
	},
	{
		"created_at": "Sat Apr 01 16:50:36 +0000 2017",
		"id": 848216035153121300,
		"id_str": "848216035153121285",
		"text": "Wow, @FoxNews just reporting big news. Source: \"Official behind unmasking is high up. Known Intel official is responsible. Some unmasked....",
		"truncated": false,
		"entities": {
			"hashtags": [],
			"symbols": [],
			"user_mentions": [
				{
					"screen_name": "FoxNews",
					"name": "Fox News",
					"id": 1367531,
					"id_str": "1367531",
					"indices": [
						5,
						13
					]
				}
			],
			"urls": []
		},
		"source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
		"in_reply_to_status_id": null,
		"in_reply_to_status_id_str": null,
		"in_reply_to_user_id": null,
		"in_reply_to_user_id_str": null,
		"in_reply_to_screen_name": null,
		"user": {
			"id": 25073877,
			"id_str": "25073877",
			"name": "Donald J. Trump",
			"screen_name": "realDonaldTrump",
			"location": "Washington, DC",
			"description": "45th President of the United States of America",
			"url": null,
			"entities": {
				"description": {
					"urls": []
				}
			},
			"protected": false,
			"followers_count": 27379007,
			"friends_count": 43,
			"listed_count": 67563,
			"created_at": "Wed Mar 18 13:46:38 +0000 2009",
			"favourites_count": 47,
			"utc_offset": -14400,
			"time_zone": "Eastern Time (US & Canada)",
			"geo_enabled": true,
			"verified": true,
			"statuses_count": 34705,
			"lang": "en",
			"contributors_enabled": false,
			"is_translator": false,
			"is_translation_enabled": true,
			"profile_background_color": "6D5C18",
			"profile_background_image_url": "http://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_tile": true,
			"profile_image_url": "http://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_image_url_https": "https://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_banner_url": "https://pbs.twimg.com/profile_banners/25073877/1489657715",
			"profile_link_color": "0D5B73",
			"profile_sidebar_border_color": "BDDCAD",
			"profile_sidebar_fill_color": "C5CEC0",
			"profile_text_color": "333333",
			"profile_use_background_image": true,
			"has_extended_profile": false,
			"default_profile": false,
			"default_profile_image": false,
			"following": null,
			"follow_request_sent": null,
			"notifications": null,
			"translator_type": "regular"
		},
		"geo": null,
		"coordinates": null,
		"place": null,
		"contributors": null,
		"is_quote_status": false,
		"retweet_count": 15903,
		"favorite_count": 59169,
		"favorited": false,
		"retweeted": false,
		"lang": "en"
	},
	{
		"created_at": "Sat Apr 01 16:06:14 +0000 2017",
		"id": 848204870876356600,
		"id_str": "848204870876356608",
		"text": "...use subsidies to buy health plans.\" In other words, Ocare is dead. Good things will happen, however, either with Republicans or Dems.",
		"truncated": false,
		"entities": {
			"hashtags": [],
			"symbols": [],
			"user_mentions": [],
			"urls": []
		},
		"source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
		"in_reply_to_status_id": null,
		"in_reply_to_status_id_str": null,
		"in_reply_to_user_id": null,
		"in_reply_to_user_id_str": null,
		"in_reply_to_screen_name": null,
		"user": {
			"id": 25073877,
			"id_str": "25073877",
			"name": "Donald J. Trump",
			"screen_name": "realDonaldTrump",
			"location": "Washington, DC",
			"description": "45th President of the United States of America",
			"url": null,
			"entities": {
				"description": {
					"urls": []
				}
			},
			"protected": false,
			"followers_count": 27379007,
			"friends_count": 43,
			"listed_count": 67563,
			"created_at": "Wed Mar 18 13:46:38 +0000 2009",
			"favourites_count": 47,
			"utc_offset": -14400,
			"time_zone": "Eastern Time (US & Canada)",
			"geo_enabled": true,
			"verified": true,
			"statuses_count": 34705,
			"lang": "en",
			"contributors_enabled": false,
			"is_translator": false,
			"is_translation_enabled": true,
			"profile_background_color": "6D5C18",
			"profile_background_image_url": "http://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_tile": true,
			"profile_image_url": "http://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_image_url_https": "https://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_banner_url": "https://pbs.twimg.com/profile_banners/25073877/1489657715",
			"profile_link_color": "0D5B73",
			"profile_sidebar_border_color": "BDDCAD",
			"profile_sidebar_fill_color": "C5CEC0",
			"profile_text_color": "333333",
			"profile_use_background_image": true,
			"has_extended_profile": false,
			"default_profile": false,
			"default_profile_image": false,
			"following": null,
			"follow_request_sent": null,
			"notifications": null,
			"translator_type": "regular"
		},
		"geo": null,
		"coordinates": null,
		"place": null,
		"contributors": null,
		"is_quote_status": false,
		"retweet_count": 9813,
		"favorite_count": 48971,
		"favorited": false,
		"retweeted": false,
		"lang": "en"
	},
	{
		"created_at": "Sat Apr 01 15:59:36 +0000 2017",
		"id": 848203201094484000,
		"id_str": "848203201094483972",
		"text": "The failing @nytimes finally gets it - \"In places where no insurance company offers plans, there will be no way for ObamaCare customers to..",
		"truncated": false,
		"entities": {
			"hashtags": [],
			"symbols": [],
			"user_mentions": [
				{
					"screen_name": "nytimes",
					"name": "The New York Times",
					"id": 807095,
					"id_str": "807095",
					"indices": [
						12,
						20
					]
				}
			],
			"urls": []
		},
		"source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
		"in_reply_to_status_id": null,
		"in_reply_to_status_id_str": null,
		"in_reply_to_user_id": null,
		"in_reply_to_user_id_str": null,
		"in_reply_to_screen_name": null,
		"user": {
			"id": 25073877,
			"id_str": "25073877",
			"name": "Donald J. Trump",
			"screen_name": "realDonaldTrump",
			"location": "Washington, DC",
			"description": "45th President of the United States of America",
			"url": null,
			"entities": {
				"description": {
					"urls": []
				}
			},
			"protected": false,
			"followers_count": 27379007,
			"friends_count": 43,
			"listed_count": 67563,
			"created_at": "Wed Mar 18 13:46:38 +0000 2009",
			"favourites_count": 47,
			"utc_offset": -14400,
			"time_zone": "Eastern Time (US & Canada)",
			"geo_enabled": true,
			"verified": true,
			"statuses_count": 34705,
			"lang": "en",
			"contributors_enabled": false,
			"is_translator": false,
			"is_translation_enabled": true,
			"profile_background_color": "6D5C18",
			"profile_background_image_url": "http://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_tile": true,
			"profile_image_url": "http://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_image_url_https": "https://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_banner_url": "https://pbs.twimg.com/profile_banners/25073877/1489657715",
			"profile_link_color": "0D5B73",
			"profile_sidebar_border_color": "BDDCAD",
			"profile_sidebar_fill_color": "C5CEC0",
			"profile_text_color": "333333",
			"profile_use_background_image": true,
			"has_extended_profile": false,
			"default_profile": false,
			"default_profile_image": false,
			"following": null,
			"follow_request_sent": null,
			"notifications": null,
			"translator_type": "regular"
		},
		"geo": null,
		"coordinates": null,
		"place": null,
		"contributors": null,
		"is_quote_status": false,
		"retweet_count": 11016,
		"favorite_count": 46722,
		"favorited": false,
		"retweeted": false,
		"lang": "en"
	},
	{
		"created_at": "Sat Apr 01 15:35:12 +0000 2017",
		"id": 848197060625145900,
		"id_str": "848197060625145856",
		"text": "RT @DanScavino: .@POTUS @realDonaldTrump signs executive orders on trade that will set the stage for revival in American manufacturing. #Am…",
		"truncated": false,
		"entities": {
			"hashtags": [],
			"symbols": [],
			"user_mentions": [
				{
					"screen_name": "DanScavino",
					"name": "Dan Scavino Jr.",
					"id": 620571475,
					"id_str": "620571475",
					"indices": [
						3,
						14
					]
				},
				{
					"screen_name": "POTUS",
					"name": "President Trump",
					"id": 822215679726100500,
					"id_str": "822215679726100480",
					"indices": [
						17,
						23
					]
				},
				{
					"screen_name": "realDonaldTrump",
					"name": "Donald J. Trump",
					"id": 25073877,
					"id_str": "25073877",
					"indices": [
						24,
						40
					]
				}
			],
			"urls": []
		},
		"source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
		"in_reply_to_status_id": null,
		"in_reply_to_status_id_str": null,
		"in_reply_to_user_id": null,
		"in_reply_to_user_id_str": null,
		"in_reply_to_screen_name": null,
		"user": {
			"id": 25073877,
			"id_str": "25073877",
			"name": "Donald J. Trump",
			"screen_name": "realDonaldTrump",
			"location": "Washington, DC",
			"description": "45th President of the United States of America",
			"url": null,
			"entities": {
				"description": {
					"urls": []
				}
			},
			"protected": false,
			"followers_count": 27379007,
			"friends_count": 43,
			"listed_count": 67563,
			"created_at": "Wed Mar 18 13:46:38 +0000 2009",
			"favourites_count": 47,
			"utc_offset": -14400,
			"time_zone": "Eastern Time (US & Canada)",
			"geo_enabled": true,
			"verified": true,
			"statuses_count": 34705,
			"lang": "en",
			"contributors_enabled": false,
			"is_translator": false,
			"is_translation_enabled": true,
			"profile_background_color": "6D5C18",
			"profile_background_image_url": "http://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_tile": true,
			"profile_image_url": "http://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_image_url_https": "https://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_banner_url": "https://pbs.twimg.com/profile_banners/25073877/1489657715",
			"profile_link_color": "0D5B73",
			"profile_sidebar_border_color": "BDDCAD",
			"profile_sidebar_fill_color": "C5CEC0",
			"profile_text_color": "333333",
			"profile_use_background_image": true,
			"has_extended_profile": false,
			"default_profile": false,
			"default_profile_image": false,
			"following": null,
			"follow_request_sent": null,
			"notifications": null,
			"translator_type": "regular"
		},
		"geo": null,
		"coordinates": null,
		"place": null,
		"contributors": null,
		"retweeted_status": {
			"created_at": "Fri Mar 31 22:44:29 +0000 2017",
			"id": 847942703979647000,
			"id_str": "847942703979646977",
			"text": ".@POTUS @realDonaldTrump signs executive orders on trade that will set the stage for revival in American manufactur… https://t.co/FpuBTHCltT",
			"truncated": true,
			"entities": {
				"hashtags": [],
				"symbols": [],
				"user_mentions": [
					{
						"screen_name": "POTUS",
						"name": "President Trump",
						"id": 822215679726100500,
						"id_str": "822215679726100480",
						"indices": [
							1,
							7
						]
					},
					{
						"screen_name": "realDonaldTrump",
						"name": "Donald J. Trump",
						"id": 25073877,
						"id_str": "25073877",
						"indices": [
							8,
							24
						]
					}
				],
				"urls": [
					{
						"url": "https://t.co/FpuBTHCltT",
						"expanded_url": "https://twitter.com/i/web/status/847942703979646977",
						"display_url": "twitter.com/i/web/status/8…",
						"indices": [
							117,
							140
						]
					}
				]
			},
			"source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
			"in_reply_to_status_id": null,
			"in_reply_to_status_id_str": null,
			"in_reply_to_user_id": null,
			"in_reply_to_user_id_str": null,
			"in_reply_to_screen_name": null,
			"user": {
				"id": 620571475,
				"id_str": "620571475",
				"name": "Dan Scavino Jr.",
				"screen_name": "DanScavino",
				"location": "",
				"description": "Personal Twitter Handle. 6/2015-11/2016, was Director of #SocialMedia Donald J. Trump for President, Inc.",
				"url": null,
				"entities": {
					"description": {
						"urls": []
					}
				},
				"protected": false,
				"followers_count": 386240,
				"friends_count": 137,
				"listed_count": 3216,
				"created_at": "Thu Jun 28 02:45:39 +0000 2012",
				"favourites_count": 3248,
				"utc_offset": -14400,
				"time_zone": "Eastern Time (US & Canada)",
				"geo_enabled": true,
				"verified": true,
				"statuses_count": 10523,
				"lang": "en",
				"contributors_enabled": false,
				"is_translator": false,
				"is_translation_enabled": false,
				"profile_background_color": "131516",
				"profile_background_image_url": "http://pbs.twimg.com/profile_background_images/627165912412626944/ycCg68Qq.jpg",
				"profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/627165912412626944/ycCg68Qq.jpg",
				"profile_background_tile": true,
				"profile_image_url": "http://pbs.twimg.com/profile_images/847665406445731845/KYGlqF6P_normal.jpg",
				"profile_image_url_https": "https://pbs.twimg.com/profile_images/847665406445731845/KYGlqF6P_normal.jpg",
				"profile_banner_url": "https://pbs.twimg.com/profile_banners/620571475/1491098546",
				"profile_link_color": "1B95E0",
				"profile_sidebar_border_color": "000000",
				"profile_sidebar_fill_color": "000000",
				"profile_text_color": "000000",
				"profile_use_background_image": true,
				"has_extended_profile": false,
				"default_profile": false,
				"default_profile_image": false,
				"following": null,
				"follow_request_sent": null,
				"notifications": null,
				"translator_type": "none"
			},
			"geo": null,
			"coordinates": null,
			"place": null,
			"contributors": null,
			"is_quote_status": false,
			"retweet_count": 6780,
			"favorite_count": 26629,
			"favorited": false,
			"retweeted": false,
			"possibly_sensitive": false,
			"lang": "en"
		},
		"is_quote_status": false,
		"retweet_count": 6780,
		"favorite_count": 0,
		"favorited": false,
		"retweeted": false,
		"lang": "en"
	},
	{
		"created_at": "Sat Apr 01 13:02:32 +0000 2017",
		"id": 848158641056362500,
		"id_str": "848158641056362496",
		"text": "It is the same Fake News Media that said there is \"no path to victory for Trump\" that is now pushing the phony Russia story. A total scam!",
		"truncated": false,
		"entities": {
			"hashtags": [],
			"symbols": [],
			"user_mentions": [],
			"urls": []
		},
		"source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
		"in_reply_to_status_id": null,
		"in_reply_to_status_id_str": null,
		"in_reply_to_user_id": null,
		"in_reply_to_user_id_str": null,
		"in_reply_to_screen_name": null,
		"user": {
			"id": 25073877,
			"id_str": "25073877",
			"name": "Donald J. Trump",
			"screen_name": "realDonaldTrump",
			"location": "Washington, DC",
			"description": "45th President of the United States of America",
			"url": null,
			"entities": {
				"description": {
					"urls": []
				}
			},
			"protected": false,
			"followers_count": 27379007,
			"friends_count": 43,
			"listed_count": 67563,
			"created_at": "Wed Mar 18 13:46:38 +0000 2009",
			"favourites_count": 47,
			"utc_offset": -14400,
			"time_zone": "Eastern Time (US & Canada)",
			"geo_enabled": true,
			"verified": true,
			"statuses_count": 34705,
			"lang": "en",
			"contributors_enabled": false,
			"is_translator": false,
			"is_translation_enabled": true,
			"profile_background_color": "6D5C18",
			"profile_background_image_url": "http://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_tile": true,
			"profile_image_url": "http://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_image_url_https": "https://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_banner_url": "https://pbs.twimg.com/profile_banners/25073877/1489657715",
			"profile_link_color": "0D5B73",
			"profile_sidebar_border_color": "BDDCAD",
			"profile_sidebar_fill_color": "C5CEC0",
			"profile_text_color": "333333",
			"profile_use_background_image": true,
			"has_extended_profile": false,
			"default_profile": false,
			"default_profile_image": false,
			"following": null,
			"follow_request_sent": null,
			"notifications": null,
			"translator_type": "regular"
		},
		"geo": null,
		"coordinates": null,
		"place": null,
		"contributors": null,
		"is_quote_status": false,
		"retweet_count": 22123,
		"favorite_count": 84181,
		"favorited": false,
		"retweeted": false,
		"lang": "en"
	},
	{
		"created_at": "Sat Apr 01 12:43:32 +0000 2017",
		"id": 848153860602507300,
		"id_str": "848153860602507264",
		"text": "When will Sleepy Eyes Chuck Todd and @NBCNews start talking about the Obama SURVEILLANCE SCANDAL and stop with the Fake Trump/Russia story?",
		"truncated": false,
		"entities": {
			"hashtags": [],
			"symbols": [],
			"user_mentions": [
				{
					"screen_name": "NBCNews",
					"name": "NBC News",
					"id": 14173315,
					"id_str": "14173315",
					"indices": [
						37,
						45
					]
				}
			],
			"urls": []
		},
		"source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
		"in_reply_to_status_id": null,
		"in_reply_to_status_id_str": null,
		"in_reply_to_user_id": null,
		"in_reply_to_user_id_str": null,
		"in_reply_to_screen_name": null,
		"user": {
			"id": 25073877,
			"id_str": "25073877",
			"name": "Donald J. Trump",
			"screen_name": "realDonaldTrump",
			"location": "Washington, DC",
			"description": "45th President of the United States of America",
			"url": null,
			"entities": {
				"description": {
					"urls": []
				}
			},
			"protected": false,
			"followers_count": 27379007,
			"friends_count": 43,
			"listed_count": 67563,
			"created_at": "Wed Mar 18 13:46:38 +0000 2009",
			"favourites_count": 47,
			"utc_offset": -14400,
			"time_zone": "Eastern Time (US & Canada)",
			"geo_enabled": true,
			"verified": true,
			"statuses_count": 34705,
			"lang": "en",
			"contributors_enabled": false,
			"is_translator": false,
			"is_translation_enabled": true,
			"profile_background_color": "6D5C18",
			"profile_background_image_url": "http://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_tile": true,
			"profile_image_url": "http://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_image_url_https": "https://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_banner_url": "https://pbs.twimg.com/profile_banners/25073877/1489657715",
			"profile_link_color": "0D5B73",
			"profile_sidebar_border_color": "BDDCAD",
			"profile_sidebar_fill_color": "C5CEC0",
			"profile_text_color": "333333",
			"profile_use_background_image": true,
			"has_extended_profile": false,
			"default_profile": false,
			"default_profile_image": false,
			"following": null,
			"follow_request_sent": null,
			"notifications": null,
			"translator_type": "regular"
		},
		"geo": null,
		"coordinates": null,
		"place": null,
		"contributors": null,
		"is_quote_status": false,
		"retweet_count": 21637,
		"favorite_count": 76698,
		"favorited": false,
		"retweeted": false,
		"lang": "en"
	},
	{
		"created_at": "Fri Mar 31 21:31:44 +0000 2017",
		"id": 847924397180584000,
		"id_str": "847924397180583937",
		"text": "We are going to defend our industry &amp; create a level playing field for the American worker. It is time to put… https://t.co/dzPKJMghj1",
		"truncated": true,
		"entities": {
			"hashtags": [],
			"symbols": [],
			"user_mentions": [],
			"urls": [
				{
					"url": "https://t.co/dzPKJMghj1",
					"expanded_url": "https://twitter.com/i/web/status/847924397180583937",
					"display_url": "twitter.com/i/web/status/8…",
					"indices": [
						115,
						138
					]
				}
			]
		},
		"source": "<a href=\"https://ads.twitter.com\" rel=\"nofollow\">Twitter Ads</a>",
		"in_reply_to_status_id": null,
		"in_reply_to_status_id_str": null,
		"in_reply_to_user_id": null,
		"in_reply_to_user_id_str": null,
		"in_reply_to_screen_name": null,
		"user": {
			"id": 25073877,
			"id_str": "25073877",
			"name": "Donald J. Trump",
			"screen_name": "realDonaldTrump",
			"location": "Washington, DC",
			"description": "45th President of the United States of America",
			"url": null,
			"entities": {
				"description": {
					"urls": []
				}
			},
			"protected": false,
			"followers_count": 27379007,
			"friends_count": 43,
			"listed_count": 67563,
			"created_at": "Wed Mar 18 13:46:38 +0000 2009",
			"favourites_count": 47,
			"utc_offset": -14400,
			"time_zone": "Eastern Time (US & Canada)",
			"geo_enabled": true,
			"verified": true,
			"statuses_count": 34705,
			"lang": "en",
			"contributors_enabled": false,
			"is_translator": false,
			"is_translation_enabled": true,
			"profile_background_color": "6D5C18",
			"profile_background_image_url": "http://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_tile": true,
			"profile_image_url": "http://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_image_url_https": "https://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_banner_url": "https://pbs.twimg.com/profile_banners/25073877/1489657715",
			"profile_link_color": "0D5B73",
			"profile_sidebar_border_color": "BDDCAD",
			"profile_sidebar_fill_color": "C5CEC0",
			"profile_text_color": "333333",
			"profile_use_background_image": true,
			"has_extended_profile": false,
			"default_profile": false,
			"default_profile_image": false,
			"following": null,
			"follow_request_sent": null,
			"notifications": null,
			"translator_type": "regular"
		},
		"geo": null,
		"coordinates": null,
		"place": null,
		"contributors": null,
		"is_quote_status": false,
		"retweet_count": 14301,
		"favorite_count": 63912,
		"favorited": false,
		"retweeted": false,
		"possibly_sensitive": false,
		"lang": "en"
	},
	{
		"created_at": "Fri Mar 31 19:37:00 +0000 2017",
		"id": 847895524632129500,
		"id_str": "847895524632129536",
		"text": "'Trump Celebrates American Manufacturing Survey Showing Highest Level of Optimism in 20 Years' ➡️… https://t.co/cVWXOa1MjY",
		"truncated": true,
		"entities": {
			"hashtags": [],
			"symbols": [],
			"user_mentions": [],
			"urls": [
				{
					"url": "https://t.co/cVWXOa1MjY",
					"expanded_url": "https://twitter.com/i/web/status/847895524632129536",
					"display_url": "twitter.com/i/web/status/8…",
					"indices": [
						99,
						122
					]
				}
			]
		},
		"source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
		"in_reply_to_status_id": null,
		"in_reply_to_status_id_str": null,
		"in_reply_to_user_id": null,
		"in_reply_to_user_id_str": null,
		"in_reply_to_screen_name": null,
		"user": {
			"id": 25073877,
			"id_str": "25073877",
			"name": "Donald J. Trump",
			"screen_name": "realDonaldTrump",
			"location": "Washington, DC",
			"description": "45th President of the United States of America",
			"url": null,
			"entities": {
				"description": {
					"urls": []
				}
			},
			"protected": false,
			"followers_count": 27379007,
			"friends_count": 43,
			"listed_count": 67563,
			"created_at": "Wed Mar 18 13:46:38 +0000 2009",
			"favourites_count": 47,
			"utc_offset": -14400,
			"time_zone": "Eastern Time (US & Canada)",
			"geo_enabled": true,
			"verified": true,
			"statuses_count": 34705,
			"lang": "en",
			"contributors_enabled": false,
			"is_translator": false,
			"is_translation_enabled": true,
			"profile_background_color": "6D5C18",
			"profile_background_image_url": "http://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_tile": true,
			"profile_image_url": "http://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_image_url_https": "https://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_banner_url": "https://pbs.twimg.com/profile_banners/25073877/1489657715",
			"profile_link_color": "0D5B73",
			"profile_sidebar_border_color": "BDDCAD",
			"profile_sidebar_fill_color": "C5CEC0",
			"profile_text_color": "333333",
			"profile_use_background_image": true,
			"has_extended_profile": false,
			"default_profile": false,
			"default_profile_image": false,
			"following": null,
			"follow_request_sent": null,
			"notifications": null,
			"translator_type": "regular"
		},
		"geo": null,
		"coordinates": null,
		"place": null,
		"contributors": null,
		"is_quote_status": false,
		"retweet_count": 9376,
		"favorite_count": 42666,
		"favorited": false,
		"retweeted": false,
		"possibly_sensitive": false,
		"lang": "en"
	},
	{
		"created_at": "Fri Mar 31 18:30:38 +0000 2017",
		"id": 847878820220858400,
		"id_str": "847878820220858369",
		"text": "It is an exciting time for our country!\n#WeeklyAddress #ConfirmGorsuch https://t.co/tP4bkvTOBq",
		"truncated": false,
		"entities": {
			"hashtags": [
				{
					"text": "WeeklyAddress",
					"indices": [
						40,
						54
					]
				},
				{
					"text": "ConfirmGorsuch",
					"indices": [
						55,
						70
					]
				}
			],
			"symbols": [],
			"user_mentions": [],
			"urls": [],
			"media": [
				{
					"id": 847872609492410400,
					"id_str": "847872609492410368",
					"indices": [
						71,
						94
					],
					"media_url": "http://pbs.twimg.com/media/C8RE94BV0AA1fp3.jpg",
					"media_url_https": "https://pbs.twimg.com/media/C8RE94BV0AA1fp3.jpg",
					"url": "https://t.co/tP4bkvTOBq",
					"display_url": "pic.twitter.com/tP4bkvTOBq",
					"expanded_url": "https://twitter.com/realDonaldTrump/status/847878820220858369/video/1",
					"type": "photo",
					"sizes": {
						"thumb": {
							"w": 150,
							"h": 150,
							"resize": "crop"
						},
						"small": {
							"w": 640,
							"h": 360,
							"resize": "fit"
						},
						"large": {
							"w": 640,
							"h": 360,
							"resize": "fit"
						},
						"medium": {
							"w": 640,
							"h": 360,
							"resize": "fit"
						}
					}
				}
			]
		},
		"extended_entities": {
			"media": [
				{
					"id": 847872609492410400,
					"id_str": "847872609492410368",
					"indices": [
						71,
						94
					],
					"media_url": "http://pbs.twimg.com/media/C8RE94BV0AA1fp3.jpg",
					"media_url_https": "https://pbs.twimg.com/media/C8RE94BV0AA1fp3.jpg",
					"url": "https://t.co/tP4bkvTOBq",
					"display_url": "pic.twitter.com/tP4bkvTOBq",
					"expanded_url": "https://twitter.com/realDonaldTrump/status/847878820220858369/video/1",
					"type": "video",
					"sizes": {
						"thumb": {
							"w": 150,
							"h": 150,
							"resize": "crop"
						},
						"small": {
							"w": 640,
							"h": 360,
							"resize": "fit"
						},
						"large": {
							"w": 640,
							"h": 360,
							"resize": "fit"
						},
						"medium": {
							"w": 640,
							"h": 360,
							"resize": "fit"
						}
					},
					"video_info": {
						"aspect_ratio": [
							16,
							9
						],
						"duration_millis": 194394,
						"variants": [
							{
								"bitrate": 320000,
								"content_type": "video/mp4",
								"url": "https://video.twimg.com/amplify_video/847872609492410368/vid/320x180/BLBgDoC1T_z3A_pX.mp4"
							},
							{
								"content_type": "application/x-mpegURL",
								"url": "https://video.twimg.com/amplify_video/847872609492410368/pl/AmgSavge8dbshGUl.m3u8"
							},
							{
								"bitrate": 2176000,
								"content_type": "video/mp4",
								"url": "https://video.twimg.com/amplify_video/847872609492410368/vid/1280x720/kt17BwZ8lGZv3IuR.mp4"
							},
							{
								"bitrate": 832000,
								"content_type": "video/mp4",
								"url": "https://video.twimg.com/amplify_video/847872609492410368/vid/640x360/pymbo57QpUPebHGO.mp4"
							}
						]
					},
					"additional_media_info": {
						"title": "",
						"description": "",
						"embeddable": true,
						"monetizable": false
					}
				}
			]
		},
		"source": "<a href=\"https://ads.twitter.com\" rel=\"nofollow\">Twitter Ads</a>",
		"in_reply_to_status_id": null,
		"in_reply_to_status_id_str": null,
		"in_reply_to_user_id": null,
		"in_reply_to_user_id_str": null,
		"in_reply_to_screen_name": null,
		"user": {
			"id": 25073877,
			"id_str": "25073877",
			"name": "Donald J. Trump",
			"screen_name": "realDonaldTrump",
			"location": "Washington, DC",
			"description": "45th President of the United States of America",
			"url": null,
			"entities": {
				"description": {
					"urls": []
				}
			},
			"protected": false,
			"followers_count": 27379007,
			"friends_count": 43,
			"listed_count": 67563,
			"created_at": "Wed Mar 18 13:46:38 +0000 2009",
			"favourites_count": 47,
			"utc_offset": -14400,
			"time_zone": "Eastern Time (US & Canada)",
			"geo_enabled": true,
			"verified": true,
			"statuses_count": 34705,
			"lang": "en",
			"contributors_enabled": false,
			"is_translator": false,
			"is_translation_enabled": true,
			"profile_background_color": "6D5C18",
			"profile_background_image_url": "http://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_tile": true,
			"profile_image_url": "http://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_image_url_https": "https://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_banner_url": "https://pbs.twimg.com/profile_banners/25073877/1489657715",
			"profile_link_color": "0D5B73",
			"profile_sidebar_border_color": "BDDCAD",
			"profile_sidebar_fill_color": "C5CEC0",
			"profile_text_color": "333333",
			"profile_use_background_image": true,
			"has_extended_profile": false,
			"default_profile": false,
			"default_profile_image": false,
			"following": null,
			"follow_request_sent": null,
			"notifications": null,
			"translator_type": "regular"
		},
		"geo": null,
		"coordinates": null,
		"place": null,
		"contributors": null,
		"is_quote_status": false,
		"retweet_count": 13494,
		"favorite_count": 56633,
		"favorited": false,
		"retweeted": false,
		"possibly_sensitive": false,
		"lang": "en"
	},
	{
		"created_at": "Fri Mar 31 17:45:10 +0000 2017",
		"id": 847867380562894800,
		"id_str": "847867380562894848",
		"text": "#ConfirmGorsuch #SCOTUS https://t.co/WkqHYMcYa3",
		"truncated": false,
		"entities": {
			"hashtags": [
				{
					"text": "ConfirmGorsuch",
					"indices": [
						0,
						15
					]
				},
				{
					"text": "SCOTUS",
					"indices": [
						16,
						23
					]
				}
			],
			"symbols": [],
			"user_mentions": [],
			"urls": [],
			"media": [
				{
					"id": 847867375571550200,
					"id_str": "847867375571550208",
					"indices": [
						24,
						47
					],
					"media_url": "http://pbs.twimg.com/media/C8Q64smVwAAhYfC.jpg",
					"media_url_https": "https://pbs.twimg.com/media/C8Q64smVwAAhYfC.jpg",
					"url": "https://t.co/WkqHYMcYa3",
					"display_url": "pic.twitter.com/WkqHYMcYa3",
					"expanded_url": "https://twitter.com/realDonaldTrump/status/847867380562894848/photo/1",
					"type": "photo",
					"sizes": {
						"medium": {
							"w": 1024,
							"h": 512,
							"resize": "fit"
						},
						"thumb": {
							"w": 150,
							"h": 150,
							"resize": "crop"
						},
						"large": {
							"w": 1024,
							"h": 512,
							"resize": "fit"
						},
						"small": {
							"w": 680,
							"h": 340,
							"resize": "fit"
						}
					}
				}
			]
		},
		"extended_entities": {
			"media": [
				{
					"id": 847867375571550200,
					"id_str": "847867375571550208",
					"indices": [
						24,
						47
					],
					"media_url": "http://pbs.twimg.com/media/C8Q64smVwAAhYfC.jpg",
					"media_url_https": "https://pbs.twimg.com/media/C8Q64smVwAAhYfC.jpg",
					"url": "https://t.co/WkqHYMcYa3",
					"display_url": "pic.twitter.com/WkqHYMcYa3",
					"expanded_url": "https://twitter.com/realDonaldTrump/status/847867380562894848/photo/1",
					"type": "photo",
					"sizes": {
						"medium": {
							"w": 1024,
							"h": 512,
							"resize": "fit"
						},
						"thumb": {
							"w": 150,
							"h": 150,
							"resize": "crop"
						},
						"large": {
							"w": 1024,
							"h": 512,
							"resize": "fit"
						},
						"small": {
							"w": 680,
							"h": 340,
							"resize": "fit"
						}
					}
				}
			]
		},
		"source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
		"in_reply_to_status_id": null,
		"in_reply_to_status_id_str": null,
		"in_reply_to_user_id": null,
		"in_reply_to_user_id_str": null,
		"in_reply_to_screen_name": null,
		"user": {
			"id": 25073877,
			"id_str": "25073877",
			"name": "Donald J. Trump",
			"screen_name": "realDonaldTrump",
			"location": "Washington, DC",
			"description": "45th President of the United States of America",
			"url": null,
			"entities": {
				"description": {
					"urls": []
				}
			},
			"protected": false,
			"followers_count": 27379007,
			"friends_count": 43,
			"listed_count": 67563,
			"created_at": "Wed Mar 18 13:46:38 +0000 2009",
			"favourites_count": 47,
			"utc_offset": -14400,
			"time_zone": "Eastern Time (US & Canada)",
			"geo_enabled": true,
			"verified": true,
			"statuses_count": 34705,
			"lang": "en",
			"contributors_enabled": false,
			"is_translator": false,
			"is_translation_enabled": true,
			"profile_background_color": "6D5C18",
			"profile_background_image_url": "http://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_tile": true,
			"profile_image_url": "http://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_image_url_https": "https://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_banner_url": "https://pbs.twimg.com/profile_banners/25073877/1489657715",
			"profile_link_color": "0D5B73",
			"profile_sidebar_border_color": "BDDCAD",
			"profile_sidebar_fill_color": "C5CEC0",
			"profile_text_color": "333333",
			"profile_use_background_image": true,
			"has_extended_profile": false,
			"default_profile": false,
			"default_profile_image": false,
			"following": null,
			"follow_request_sent": null,
			"notifications": null,
			"translator_type": "regular"
		},
		"geo": null,
		"coordinates": null,
		"place": null,
		"contributors": null,
		"is_quote_status": false,
		"retweet_count": 10825,
		"favorite_count": 46870,
		"favorited": false,
		"retweeted": false,
		"possibly_sensitive": false,
		"lang": "und"
	},
	{
		"created_at": "Fri Mar 31 17:28:44 +0000 2017",
		"id": 847863243200753700,
		"id_str": "847863243200753666",
		"text": "Great meeting with a wonderful woman today, former Secretary of State, Condoleezza Rice! #USA🇺🇸 https://t.co/ZuriIC3YwG",
		"truncated": false,
		"entities": {
			"hashtags": [
				{
					"text": "USA",
					"indices": [
						89,
						93
					]
				}
			],
			"symbols": [],
			"user_mentions": [],
			"urls": [],
			"media": [
				{
					"id": 847863238469484500,
					"id_str": "847863238469484544",
					"indices": [
						96,
						119
					],
					"media_url": "http://pbs.twimg.com/media/C8Q3H4sWAAATXsr.jpg",
					"media_url_https": "https://pbs.twimg.com/media/C8Q3H4sWAAATXsr.jpg",
					"url": "https://t.co/ZuriIC3YwG",
					"display_url": "pic.twitter.com/ZuriIC3YwG",
					"expanded_url": "https://twitter.com/realDonaldTrump/status/847863243200753666/photo/1",
					"type": "photo",
					"sizes": {
						"medium": {
							"w": 1024,
							"h": 512,
							"resize": "fit"
						},
						"thumb": {
							"w": 150,
							"h": 150,
							"resize": "crop"
						},
						"large": {
							"w": 1024,
							"h": 512,
							"resize": "fit"
						},
						"small": {
							"w": 680,
							"h": 340,
							"resize": "fit"
						}
					}
				}
			]
		},
		"extended_entities": {
			"media": [
				{
					"id": 847863238469484500,
					"id_str": "847863238469484544",
					"indices": [
						96,
						119
					],
					"media_url": "http://pbs.twimg.com/media/C8Q3H4sWAAATXsr.jpg",
					"media_url_https": "https://pbs.twimg.com/media/C8Q3H4sWAAATXsr.jpg",
					"url": "https://t.co/ZuriIC3YwG",
					"display_url": "pic.twitter.com/ZuriIC3YwG",
					"expanded_url": "https://twitter.com/realDonaldTrump/status/847863243200753666/photo/1",
					"type": "photo",
					"sizes": {
						"medium": {
							"w": 1024,
							"h": 512,
							"resize": "fit"
						},
						"thumb": {
							"w": 150,
							"h": 150,
							"resize": "crop"
						},
						"large": {
							"w": 1024,
							"h": 512,
							"resize": "fit"
						},
						"small": {
							"w": 680,
							"h": 340,
							"resize": "fit"
						}
					}
				}
			]
		},
		"source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
		"in_reply_to_status_id": null,
		"in_reply_to_status_id_str": null,
		"in_reply_to_user_id": null,
		"in_reply_to_user_id_str": null,
		"in_reply_to_screen_name": null,
		"user": {
			"id": 25073877,
			"id_str": "25073877",
			"name": "Donald J. Trump",
			"screen_name": "realDonaldTrump",
			"location": "Washington, DC",
			"description": "45th President of the United States of America",
			"url": null,
			"entities": {
				"description": {
					"urls": []
				}
			},
			"protected": false,
			"followers_count": 27379007,
			"friends_count": 43,
			"listed_count": 67563,
			"created_at": "Wed Mar 18 13:46:38 +0000 2009",
			"favourites_count": 47,
			"utc_offset": -14400,
			"time_zone": "Eastern Time (US & Canada)",
			"geo_enabled": true,
			"verified": true,
			"statuses_count": 34705,
			"lang": "en",
			"contributors_enabled": false,
			"is_translator": false,
			"is_translation_enabled": true,
			"profile_background_color": "6D5C18",
			"profile_background_image_url": "http://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_tile": true,
			"profile_image_url": "http://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_image_url_https": "https://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_banner_url": "https://pbs.twimg.com/profile_banners/25073877/1489657715",
			"profile_link_color": "0D5B73",
			"profile_sidebar_border_color": "BDDCAD",
			"profile_sidebar_fill_color": "C5CEC0",
			"profile_text_color": "333333",
			"profile_use_background_image": true,
			"has_extended_profile": false,
			"default_profile": false,
			"default_profile_image": false,
			"following": null,
			"follow_request_sent": null,
			"notifications": null,
			"translator_type": "regular"
		},
		"geo": null,
		"coordinates": null,
		"place": null,
		"contributors": null,
		"is_quote_status": false,
		"retweet_count": 10255,
		"favorite_count": 55617,
		"favorited": false,
		"retweeted": false,
		"possibly_sensitive": false,
		"lang": "en"
	},
	{
		"created_at": "Fri Mar 31 14:35:47 +0000 2017",
		"id": 847819720418111500,
		"id_str": "847819720418111488",
		"text": "It was an honor to welcome the Prime Minister of Denmark, Lars Løkke Rasmussen {@larsloekke} to the @WhiteHouse yes… https://t.co/N1g0TiVnSp",
		"truncated": true,
		"entities": {
			"hashtags": [],
			"symbols": [],
			"user_mentions": [
				{
					"screen_name": "larsloekke",
					"name": "Lars Løkke Rasmussen",
					"id": 26201346,
					"id_str": "26201346",
					"indices": [
						80,
						91
					]
				},
				{
					"screen_name": "WhiteHouse",
					"name": "The White House",
					"id": 822215673812119600,
					"id_str": "822215673812119553",
					"indices": [
						100,
						111
					]
				}
			],
			"urls": [
				{
					"url": "https://t.co/N1g0TiVnSp",
					"expanded_url": "https://twitter.com/i/web/status/847819720418111488",
					"display_url": "twitter.com/i/web/status/8…",
					"indices": [
						117,
						140
					]
				}
			]
		},
		"source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
		"in_reply_to_status_id": null,
		"in_reply_to_status_id_str": null,
		"in_reply_to_user_id": null,
		"in_reply_to_user_id_str": null,
		"in_reply_to_screen_name": null,
		"user": {
			"id": 25073877,
			"id_str": "25073877",
			"name": "Donald J. Trump",
			"screen_name": "realDonaldTrump",
			"location": "Washington, DC",
			"description": "45th President of the United States of America",
			"url": null,
			"entities": {
				"description": {
					"urls": []
				}
			},
			"protected": false,
			"followers_count": 27379007,
			"friends_count": 43,
			"listed_count": 67563,
			"created_at": "Wed Mar 18 13:46:38 +0000 2009",
			"favourites_count": 47,
			"utc_offset": -14400,
			"time_zone": "Eastern Time (US & Canada)",
			"geo_enabled": true,
			"verified": true,
			"statuses_count": 34705,
			"lang": "en",
			"contributors_enabled": false,
			"is_translator": false,
			"is_translation_enabled": true,
			"profile_background_color": "6D5C18",
			"profile_background_image_url": "http://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_tile": true,
			"profile_image_url": "http://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_image_url_https": "https://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_banner_url": "https://pbs.twimg.com/profile_banners/25073877/1489657715",
			"profile_link_color": "0D5B73",
			"profile_sidebar_border_color": "BDDCAD",
			"profile_sidebar_fill_color": "C5CEC0",
			"profile_text_color": "333333",
			"profile_use_background_image": true,
			"has_extended_profile": false,
			"default_profile": false,
			"default_profile_image": false,
			"following": null,
			"follow_request_sent": null,
			"notifications": null,
			"translator_type": "regular"
		},
		"geo": null,
		"coordinates": null,
		"place": null,
		"contributors": null,
		"is_quote_status": false,
		"retweet_count": 6780,
		"favorite_count": 39548,
		"favorited": false,
		"retweeted": false,
		"possibly_sensitive": false,
		"lang": "en"
	},
	{
		"created_at": "Fri Mar 31 11:04:32 +0000 2017",
		"id": 847766558520856600,
		"id_str": "847766558520856578",
		"text": "Mike Flynn should ask for immunity in that this is a witch hunt (excuse for big election loss), by media &amp; Dems, of historic proportion!",
		"truncated": false,
		"entities": {
			"hashtags": [],
			"symbols": [],
			"user_mentions": [],
			"urls": []
		},
		"source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
		"in_reply_to_status_id": null,
		"in_reply_to_status_id_str": null,
		"in_reply_to_user_id": null,
		"in_reply_to_user_id_str": null,
		"in_reply_to_screen_name": null,
		"user": {
			"id": 25073877,
			"id_str": "25073877",
			"name": "Donald J. Trump",
			"screen_name": "realDonaldTrump",
			"location": "Washington, DC",
			"description": "45th President of the United States of America",
			"url": null,
			"entities": {
				"description": {
					"urls": []
				}
			},
			"protected": false,
			"followers_count": 27379007,
			"friends_count": 43,
			"listed_count": 67563,
			"created_at": "Wed Mar 18 13:46:38 +0000 2009",
			"favourites_count": 47,
			"utc_offset": -14400,
			"time_zone": "Eastern Time (US & Canada)",
			"geo_enabled": true,
			"verified": true,
			"statuses_count": 34705,
			"lang": "en",
			"contributors_enabled": false,
			"is_translator": false,
			"is_translation_enabled": true,
			"profile_background_color": "6D5C18",
			"profile_background_image_url": "http://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_tile": true,
			"profile_image_url": "http://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_image_url_https": "https://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_banner_url": "https://pbs.twimg.com/profile_banners/25073877/1489657715",
			"profile_link_color": "0D5B73",
			"profile_sidebar_border_color": "BDDCAD",
			"profile_sidebar_fill_color": "C5CEC0",
			"profile_text_color": "333333",
			"profile_use_background_image": true,
			"has_extended_profile": false,
			"default_profile": false,
			"default_profile_image": false,
			"following": null,
			"follow_request_sent": null,
			"notifications": null,
			"translator_type": "regular"
		},
		"geo": null,
		"coordinates": null,
		"place": null,
		"contributors": null,
		"is_quote_status": false,
		"retweet_count": 17849,
		"favorite_count": 73893,
		"favorited": false,
		"retweeted": false,
		"lang": "en"
	},
	{
		"created_at": "Fri Mar 31 01:43:35 +0000 2017",
		"id": 847625389908217900,
		"id_str": "847625389908217856",
		"text": "Only by enlisting the full potential of women in our society will we be truly able to #MakeAmericaGreatAgain🇺🇸… https://t.co/cxhgYaxiek",
		"truncated": true,
		"entities": {
			"hashtags": [
				{
					"text": "MakeAmericaGreatAgain",
					"indices": [
						86,
						108
					]
				}
			],
			"symbols": [],
			"user_mentions": [],
			"urls": [
				{
					"url": "https://t.co/cxhgYaxiek",
					"expanded_url": "https://twitter.com/i/web/status/847625389908217856",
					"display_url": "twitter.com/i/web/status/8…",
					"indices": [
						112,
						135
					]
				}
			]
		},
		"source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
		"in_reply_to_status_id": null,
		"in_reply_to_status_id_str": null,
		"in_reply_to_user_id": null,
		"in_reply_to_user_id_str": null,
		"in_reply_to_screen_name": null,
		"user": {
			"id": 25073877,
			"id_str": "25073877",
			"name": "Donald J. Trump",
			"screen_name": "realDonaldTrump",
			"location": "Washington, DC",
			"description": "45th President of the United States of America",
			"url": null,
			"entities": {
				"description": {
					"urls": []
				}
			},
			"protected": false,
			"followers_count": 27379007,
			"friends_count": 43,
			"listed_count": 67563,
			"created_at": "Wed Mar 18 13:46:38 +0000 2009",
			"favourites_count": 47,
			"utc_offset": -14400,
			"time_zone": "Eastern Time (US & Canada)",
			"geo_enabled": true,
			"verified": true,
			"statuses_count": 34705,
			"lang": "en",
			"contributors_enabled": false,
			"is_translator": false,
			"is_translation_enabled": true,
			"profile_background_color": "6D5C18",
			"profile_background_image_url": "http://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_tile": true,
			"profile_image_url": "http://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_image_url_https": "https://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_banner_url": "https://pbs.twimg.com/profile_banners/25073877/1489657715",
			"profile_link_color": "0D5B73",
			"profile_sidebar_border_color": "BDDCAD",
			"profile_sidebar_fill_color": "C5CEC0",
			"profile_text_color": "333333",
			"profile_use_background_image": true,
			"has_extended_profile": false,
			"default_profile": false,
			"default_profile_image": false,
			"following": null,
			"follow_request_sent": null,
			"notifications": null,
			"translator_type": "regular"
		},
		"geo": null,
		"coordinates": null,
		"place": null,
		"contributors": null,
		"is_quote_status": false,
		"retweet_count": 13268,
		"favorite_count": 58183,
		"favorited": false,
		"retweeted": false,
		"possibly_sensitive": false,
		"lang": "en"
	},
	{
		"created_at": "Thu Mar 30 22:16:50 +0000 2017",
		"id": 847573358912974800,
		"id_str": "847573358912974849",
		"text": "...and job losses. American companies must be prepared to look at other alternatives.",
		"truncated": false,
		"entities": {
			"hashtags": [],
			"symbols": [],
			"user_mentions": [],
			"urls": []
		},
		"source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
		"in_reply_to_status_id": 847573220417044500,
		"in_reply_to_status_id_str": "847573220417044480",
		"in_reply_to_user_id": 25073877,
		"in_reply_to_user_id_str": "25073877",
		"in_reply_to_screen_name": "realDonaldTrump",
		"user": {
			"id": 25073877,
			"id_str": "25073877",
			"name": "Donald J. Trump",
			"screen_name": "realDonaldTrump",
			"location": "Washington, DC",
			"description": "45th President of the United States of America",
			"url": null,
			"entities": {
				"description": {
					"urls": []
				}
			},
			"protected": false,
			"followers_count": 27379007,
			"friends_count": 43,
			"listed_count": 67563,
			"created_at": "Wed Mar 18 13:46:38 +0000 2009",
			"favourites_count": 47,
			"utc_offset": -14400,
			"time_zone": "Eastern Time (US & Canada)",
			"geo_enabled": true,
			"verified": true,
			"statuses_count": 34705,
			"lang": "en",
			"contributors_enabled": false,
			"is_translator": false,
			"is_translation_enabled": true,
			"profile_background_color": "6D5C18",
			"profile_background_image_url": "http://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_tile": true,
			"profile_image_url": "http://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_image_url_https": "https://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_banner_url": "https://pbs.twimg.com/profile_banners/25073877/1489657715",
			"profile_link_color": "0D5B73",
			"profile_sidebar_border_color": "BDDCAD",
			"profile_sidebar_fill_color": "C5CEC0",
			"profile_text_color": "333333",
			"profile_use_background_image": true,
			"has_extended_profile": false,
			"default_profile": false,
			"default_profile_image": false,
			"following": null,
			"follow_request_sent": null,
			"notifications": null,
			"translator_type": "regular"
		},
		"geo": null,
		"coordinates": null,
		"place": null,
		"contributors": null,
		"is_quote_status": false,
		"retweet_count": 7584,
		"favorite_count": 41642,
		"favorited": false,
		"retweeted": false,
		"lang": "en"
	},
	{
		"created_at": "Thu Mar 30 22:16:17 +0000 2017",
		"id": 847573220417044500,
		"id_str": "847573220417044480",
		"text": "The meeting next week with China will be a very difficult one in that we can no longer have massive trade deficits...",
		"truncated": false,
		"entities": {
			"hashtags": [],
			"symbols": [],
			"user_mentions": [],
			"urls": []
		},
		"source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
		"in_reply_to_status_id": null,
		"in_reply_to_status_id_str": null,
		"in_reply_to_user_id": null,
		"in_reply_to_user_id_str": null,
		"in_reply_to_screen_name": null,
		"user": {
			"id": 25073877,
			"id_str": "25073877",
			"name": "Donald J. Trump",
			"screen_name": "realDonaldTrump",
			"location": "Washington, DC",
			"description": "45th President of the United States of America",
			"url": null,
			"entities": {
				"description": {
					"urls": []
				}
			},
			"protected": false,
			"followers_count": 27379007,
			"friends_count": 43,
			"listed_count": 67563,
			"created_at": "Wed Mar 18 13:46:38 +0000 2009",
			"favourites_count": 47,
			"utc_offset": -14400,
			"time_zone": "Eastern Time (US & Canada)",
			"geo_enabled": true,
			"verified": true,
			"statuses_count": 34705,
			"lang": "en",
			"contributors_enabled": false,
			"is_translator": false,
			"is_translation_enabled": true,
			"profile_background_color": "6D5C18",
			"profile_background_image_url": "http://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_tile": true,
			"profile_image_url": "http://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_image_url_https": "https://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_banner_url": "https://pbs.twimg.com/profile_banners/25073877/1489657715",
			"profile_link_color": "0D5B73",
			"profile_sidebar_border_color": "BDDCAD",
			"profile_sidebar_fill_color": "C5CEC0",
			"profile_text_color": "333333",
			"profile_use_background_image": true,
			"has_extended_profile": false,
			"default_profile": false,
			"default_profile_image": false,
			"following": null,
			"follow_request_sent": null,
			"notifications": null,
			"translator_type": "regular"
		},
		"geo": null,
		"coordinates": null,
		"place": null,
		"contributors": null,
		"is_quote_status": false,
		"retweet_count": 12125,
		"favorite_count": 57404,
		"favorited": false,
		"retweeted": false,
		"lang": "en"
	},
	{
		"created_at": "Thu Mar 30 21:21:50 +0000 2017",
		"id": 847559519085379600,
		"id_str": "847559519085379584",
		"text": "Where are @RepMarkMeadows, @Jim_Jordan and @Raul_Labrador?\n#RepealANDReplace #Obamacare",
		"truncated": false,
		"entities": {
			"hashtags": [
				{
					"text": "RepealANDReplace",
					"indices": [
						59,
						76
					]
				},
				{
					"text": "Obamacare",
					"indices": [
						77,
						87
					]
				}
			],
			"symbols": [],
			"user_mentions": [
				{
					"screen_name": "RepMarkMeadows",
					"name": "Mark Meadows",
					"id": 963480595,
					"id_str": "963480595",
					"indices": [
						10,
						25
					]
				},
				{
					"screen_name": "Jim_Jordan",
					"name": "Rep. Jim Jordan",
					"id": 18166778,
					"id_str": "18166778",
					"indices": [
						27,
						38
					]
				},
				{
					"screen_name": "Raul_Labrador",
					"name": "Raúl R. Labrador",
					"id": 246341769,
					"id_str": "246341769",
					"indices": [
						43,
						57
					]
				}
			],
			"urls": []
		},
		"source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
		"in_reply_to_status_id": null,
		"in_reply_to_status_id_str": null,
		"in_reply_to_user_id": null,
		"in_reply_to_user_id_str": null,
		"in_reply_to_screen_name": null,
		"user": {
			"id": 25073877,
			"id_str": "25073877",
			"name": "Donald J. Trump",
			"screen_name": "realDonaldTrump",
			"location": "Washington, DC",
			"description": "45th President of the United States of America",
			"url": null,
			"entities": {
				"description": {
					"urls": []
				}
			},
			"protected": false,
			"followers_count": 27379007,
			"friends_count": 43,
			"listed_count": 67563,
			"created_at": "Wed Mar 18 13:46:38 +0000 2009",
			"favourites_count": 47,
			"utc_offset": -14400,
			"time_zone": "Eastern Time (US & Canada)",
			"geo_enabled": true,
			"verified": true,
			"statuses_count": 34705,
			"lang": "en",
			"contributors_enabled": false,
			"is_translator": false,
			"is_translation_enabled": true,
			"profile_background_color": "6D5C18",
			"profile_background_image_url": "http://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_tile": true,
			"profile_image_url": "http://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_image_url_https": "https://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_banner_url": "https://pbs.twimg.com/profile_banners/25073877/1489657715",
			"profile_link_color": "0D5B73",
			"profile_sidebar_border_color": "BDDCAD",
			"profile_sidebar_fill_color": "C5CEC0",
			"profile_text_color": "333333",
			"profile_use_background_image": true,
			"has_extended_profile": false,
			"default_profile": false,
			"default_profile_image": false,
			"following": null,
			"follow_request_sent": null,
			"notifications": null,
			"translator_type": "regular"
		},
		"geo": null,
		"coordinates": null,
		"place": null,
		"contributors": null,
		"is_quote_status": false,
		"retweet_count": 5879,
		"favorite_count": 29676,
		"favorited": false,
		"retweeted": false,
		"lang": "en"
	},
	{
		"created_at": "Thu Mar 30 21:20:44 +0000 2017",
		"id": 847559239149158400,
		"id_str": "847559239149158401",
		"text": "If @RepMarkMeadows, @Jim_Jordan and @Raul_Labrador would get on board we would have both great healthcare and massive tax cuts &amp; reform.",
		"truncated": false,
		"entities": {
			"hashtags": [],
			"symbols": [],
			"user_mentions": [
				{
					"screen_name": "RepMarkMeadows",
					"name": "Mark Meadows",
					"id": 963480595,
					"id_str": "963480595",
					"indices": [
						3,
						18
					]
				},
				{
					"screen_name": "Jim_Jordan",
					"name": "Rep. Jim Jordan",
					"id": 18166778,
					"id_str": "18166778",
					"indices": [
						20,
						31
					]
				},
				{
					"screen_name": "Raul_Labrador",
					"name": "Raúl R. Labrador",
					"id": 246341769,
					"id_str": "246341769",
					"indices": [
						36,
						50
					]
				}
			],
			"urls": []
		},
		"source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
		"in_reply_to_status_id": null,
		"in_reply_to_status_id_str": null,
		"in_reply_to_user_id": null,
		"in_reply_to_user_id_str": null,
		"in_reply_to_screen_name": null,
		"user": {
			"id": 25073877,
			"id_str": "25073877",
			"name": "Donald J. Trump",
			"screen_name": "realDonaldTrump",
			"location": "Washington, DC",
			"description": "45th President of the United States of America",
			"url": null,
			"entities": {
				"description": {
					"urls": []
				}
			},
			"protected": false,
			"followers_count": 27379007,
			"friends_count": 43,
			"listed_count": 67563,
			"created_at": "Wed Mar 18 13:46:38 +0000 2009",
			"favourites_count": 47,
			"utc_offset": -14400,
			"time_zone": "Eastern Time (US & Canada)",
			"geo_enabled": true,
			"verified": true,
			"statuses_count": 34705,
			"lang": "en",
			"contributors_enabled": false,
			"is_translator": false,
			"is_translation_enabled": true,
			"profile_background_color": "6D5C18",
			"profile_background_image_url": "http://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_tile": true,
			"profile_image_url": "http://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_image_url_https": "https://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_banner_url": "https://pbs.twimg.com/profile_banners/25073877/1489657715",
			"profile_link_color": "0D5B73",
			"profile_sidebar_border_color": "BDDCAD",
			"profile_sidebar_fill_color": "C5CEC0",
			"profile_text_color": "333333",
			"profile_use_background_image": true,
			"has_extended_profile": false,
			"default_profile": false,
			"default_profile_image": false,
			"following": null,
			"follow_request_sent": null,
			"notifications": null,
			"translator_type": "regular"
		},
		"geo": null,
		"coordinates": null,
		"place": null,
		"contributors": null,
		"is_quote_status": false,
		"retweet_count": 7701,
		"favorite_count": 37501,
		"favorited": false,
		"retweeted": false,
		"lang": "en"
	},
	{
		"created_at": "Thu Mar 30 21:17:30 +0000 2017",
		"id": 847558426557337600,
		"id_str": "847558426557337600",
		"text": "Great op-ed from @RepKenBuck. Looks like some in the Freedom Caucus are helping me end #Obamacare. https://t.co/Y2vTnIBTBZ",
		"truncated": false,
		"entities": {
			"hashtags": [
				{
					"text": "Obamacare",
					"indices": [
						87,
						97
					]
				}
			],
			"symbols": [],
			"user_mentions": [
				{
					"screen_name": "RepKenBuck",
					"name": "Congressman Ken Buck",
					"id": 2862577383,
					"id_str": "2862577383",
					"indices": [
						17,
						28
					]
				}
			],
			"urls": [
				{
					"url": "https://t.co/Y2vTnIBTBZ",
					"expanded_url": "http://thehill.com/blogs/congress-blog/healthcare/326424-governing-means-supporting-ahca",
					"display_url": "thehill.com/blogs/congress…",
					"indices": [
						99,
						122
					]
				}
			]
		},
		"source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
		"in_reply_to_status_id": null,
		"in_reply_to_status_id_str": null,
		"in_reply_to_user_id": null,
		"in_reply_to_user_id_str": null,
		"in_reply_to_screen_name": null,
		"user": {
			"id": 25073877,
			"id_str": "25073877",
			"name": "Donald J. Trump",
			"screen_name": "realDonaldTrump",
			"location": "Washington, DC",
			"description": "45th President of the United States of America",
			"url": null,
			"entities": {
				"description": {
					"urls": []
				}
			},
			"protected": false,
			"followers_count": 27379007,
			"friends_count": 43,
			"listed_count": 67563,
			"created_at": "Wed Mar 18 13:46:38 +0000 2009",
			"favourites_count": 47,
			"utc_offset": -14400,
			"time_zone": "Eastern Time (US & Canada)",
			"geo_enabled": true,
			"verified": true,
			"statuses_count": 34705,
			"lang": "en",
			"contributors_enabled": false,
			"is_translator": false,
			"is_translation_enabled": true,
			"profile_background_color": "6D5C18",
			"profile_background_image_url": "http://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_tile": true,
			"profile_image_url": "http://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_image_url_https": "https://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_banner_url": "https://pbs.twimg.com/profile_banners/25073877/1489657715",
			"profile_link_color": "0D5B73",
			"profile_sidebar_border_color": "BDDCAD",
			"profile_sidebar_fill_color": "C5CEC0",
			"profile_text_color": "333333",
			"profile_use_background_image": true,
			"has_extended_profile": false,
			"default_profile": false,
			"default_profile_image": false,
			"following": null,
			"follow_request_sent": null,
			"notifications": null,
			"translator_type": "regular"
		},
		"geo": null,
		"coordinates": null,
		"place": null,
		"contributors": null,
		"is_quote_status": false,
		"retweet_count": 6616,
		"favorite_count": 31124,
		"favorited": false,
		"retweeted": false,
		"possibly_sensitive": false,
		"lang": "en"
	},
	{
		"created_at": "Thu Mar 30 14:27:14 +0000 2017",
		"id": 847455180912181200,
		"id_str": "847455180912181249",
		"text": "The failing @nytimes has disgraced the media world. Gotten me wrong for two solid years. Change libel laws? https://t.co/QIqLgvYLLi",
		"truncated": false,
		"entities": {
			"hashtags": [],
			"symbols": [],
			"user_mentions": [
				{
					"screen_name": "nytimes",
					"name": "The New York Times",
					"id": 807095,
					"id_str": "807095",
					"indices": [
						12,
						20
					]
				}
			],
			"urls": [
				{
					"url": "https://t.co/QIqLgvYLLi",
					"expanded_url": "http://nypost.com/2017/03/27/the-new-york-times-ongoing-dishonesty-only-helps-trump/amp/",
					"display_url": "nypost.com/2017/03/27/the…",
					"indices": [
						108,
						131
					]
				}
			]
		},
		"source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
		"in_reply_to_status_id": null,
		"in_reply_to_status_id_str": null,
		"in_reply_to_user_id": null,
		"in_reply_to_user_id_str": null,
		"in_reply_to_screen_name": null,
		"user": {
			"id": 25073877,
			"id_str": "25073877",
			"name": "Donald J. Trump",
			"screen_name": "realDonaldTrump",
			"location": "Washington, DC",
			"description": "45th President of the United States of America",
			"url": null,
			"entities": {
				"description": {
					"urls": []
				}
			},
			"protected": false,
			"followers_count": 27379007,
			"friends_count": 43,
			"listed_count": 67563,
			"created_at": "Wed Mar 18 13:46:38 +0000 2009",
			"favourites_count": 47,
			"utc_offset": -14400,
			"time_zone": "Eastern Time (US & Canada)",
			"geo_enabled": true,
			"verified": true,
			"statuses_count": 34705,
			"lang": "en",
			"contributors_enabled": false,
			"is_translator": false,
			"is_translation_enabled": true,
			"profile_background_color": "6D5C18",
			"profile_background_image_url": "http://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_tile": true,
			"profile_image_url": "http://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_image_url_https": "https://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_banner_url": "https://pbs.twimg.com/profile_banners/25073877/1489657715",
			"profile_link_color": "0D5B73",
			"profile_sidebar_border_color": "BDDCAD",
			"profile_sidebar_fill_color": "C5CEC0",
			"profile_text_color": "333333",
			"profile_use_background_image": true,
			"has_extended_profile": false,
			"default_profile": false,
			"default_profile_image": false,
			"following": null,
			"follow_request_sent": null,
			"notifications": null,
			"translator_type": "regular"
		},
		"geo": null,
		"coordinates": null,
		"place": null,
		"contributors": null,
		"is_quote_status": false,
		"retweet_count": 13271,
		"favorite_count": 53955,
		"favorited": false,
		"retweeted": false,
		"possibly_sensitive": false,
		"lang": "en"
	},
	{
		"created_at": "Thu Mar 30 13:07:42 +0000 2017",
		"id": 847435163143454700,
		"id_str": "847435163143454723",
		"text": "The Freedom Caucus will hurt the entire Republican agenda if they don't get on the team, &amp; fast. We must fight them, &amp; Dems, in 2018!",
		"truncated": false,
		"entities": {
			"hashtags": [],
			"symbols": [],
			"user_mentions": [],
			"urls": []
		},
		"source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
		"in_reply_to_status_id": null,
		"in_reply_to_status_id_str": null,
		"in_reply_to_user_id": null,
		"in_reply_to_user_id_str": null,
		"in_reply_to_screen_name": null,
		"user": {
			"id": 25073877,
			"id_str": "25073877",
			"name": "Donald J. Trump",
			"screen_name": "realDonaldTrump",
			"location": "Washington, DC",
			"description": "45th President of the United States of America",
			"url": null,
			"entities": {
				"description": {
					"urls": []
				}
			},
			"protected": false,
			"followers_count": 27379007,
			"friends_count": 43,
			"listed_count": 67563,
			"created_at": "Wed Mar 18 13:46:38 +0000 2009",
			"favourites_count": 47,
			"utc_offset": -14400,
			"time_zone": "Eastern Time (US & Canada)",
			"geo_enabled": true,
			"verified": true,
			"statuses_count": 34705,
			"lang": "en",
			"contributors_enabled": false,
			"is_translator": false,
			"is_translation_enabled": true,
			"profile_background_color": "6D5C18",
			"profile_background_image_url": "http://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_tile": true,
			"profile_image_url": "http://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_image_url_https": "https://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_banner_url": "https://pbs.twimg.com/profile_banners/25073877/1489657715",
			"profile_link_color": "0D5B73",
			"profile_sidebar_border_color": "BDDCAD",
			"profile_sidebar_fill_color": "C5CEC0",
			"profile_text_color": "333333",
			"profile_use_background_image": true,
			"has_extended_profile": false,
			"default_profile": false,
			"default_profile_image": false,
			"following": null,
			"follow_request_sent": null,
			"notifications": null,
			"translator_type": "regular"
		},
		"geo": null,
		"coordinates": null,
		"place": null,
		"contributors": null,
		"is_quote_status": false,
		"retweet_count": 13872,
		"favorite_count": 59767,
		"favorited": false,
		"retweeted": false,
		"lang": "en"
	},
	{
		"created_at": "Thu Mar 30 02:12:09 +0000 2017",
		"id": 847270189171228700,
		"id_str": "847270189171228672",
		"text": "Today we honored our true American heroes on the first-ever National Vietnam War Veterans Day.\n#ThankAVeteran… https://t.co/deOHapcV4J",
		"truncated": true,
		"entities": {
			"hashtags": [
				{
					"text": "ThankAVeteran",
					"indices": [
						95,
						109
					]
				}
			],
			"symbols": [],
			"user_mentions": [],
			"urls": [
				{
					"url": "https://t.co/deOHapcV4J",
					"expanded_url": "https://twitter.com/i/web/status/847270189171228672",
					"display_url": "twitter.com/i/web/status/8…",
					"indices": [
						111,
						134
					]
				}
			]
		},
		"source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
		"in_reply_to_status_id": null,
		"in_reply_to_status_id_str": null,
		"in_reply_to_user_id": null,
		"in_reply_to_user_id_str": null,
		"in_reply_to_screen_name": null,
		"user": {
			"id": 25073877,
			"id_str": "25073877",
			"name": "Donald J. Trump",
			"screen_name": "realDonaldTrump",
			"location": "Washington, DC",
			"description": "45th President of the United States of America",
			"url": null,
			"entities": {
				"description": {
					"urls": []
				}
			},
			"protected": false,
			"followers_count": 27379007,
			"friends_count": 43,
			"listed_count": 67563,
			"created_at": "Wed Mar 18 13:46:38 +0000 2009",
			"favourites_count": 47,
			"utc_offset": -14400,
			"time_zone": "Eastern Time (US & Canada)",
			"geo_enabled": true,
			"verified": true,
			"statuses_count": 34705,
			"lang": "en",
			"contributors_enabled": false,
			"is_translator": false,
			"is_translation_enabled": true,
			"profile_background_color": "6D5C18",
			"profile_background_image_url": "http://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_tile": true,
			"profile_image_url": "http://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_image_url_https": "https://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_banner_url": "https://pbs.twimg.com/profile_banners/25073877/1489657715",
			"profile_link_color": "0D5B73",
			"profile_sidebar_border_color": "BDDCAD",
			"profile_sidebar_fill_color": "C5CEC0",
			"profile_text_color": "333333",
			"profile_use_background_image": true,
			"has_extended_profile": false,
			"default_profile": false,
			"default_profile_image": false,
			"following": null,
			"follow_request_sent": null,
			"notifications": null,
			"translator_type": "regular"
		},
		"geo": null,
		"coordinates": null,
		"place": null,
		"contributors": null,
		"is_quote_status": false,
		"retweet_count": 16702,
		"favorite_count": 73352,
		"favorited": false,
		"retweeted": false,
		"possibly_sensitive": false,
		"lang": "en"
	},
	{
		"created_at": "Wed Mar 29 23:58:11 +0000 2017",
		"id": 847236476815511600,
		"id_str": "847236476815511552",
		"text": ".@FLOTUS Melania and I were honored to stop by the Women's Empowerment  Panel this afternoon at the @WhiteHouse.… https://t.co/phLPw8lgTu",
		"truncated": true,
		"entities": {
			"hashtags": [],
			"symbols": [],
			"user_mentions": [
				{
					"screen_name": "FLOTUS",
					"name": "Melania Trump",
					"id": 818876014390603800,
					"id_str": "818876014390603776",
					"indices": [
						1,
						8
					]
				},
				{
					"screen_name": "WhiteHouse",
					"name": "The White House",
					"id": 822215673812119600,
					"id_str": "822215673812119553",
					"indices": [
						100,
						111
					]
				}
			],
			"urls": [
				{
					"url": "https://t.co/phLPw8lgTu",
					"expanded_url": "https://twitter.com/i/web/status/847236476815511552",
					"display_url": "twitter.com/i/web/status/8…",
					"indices": [
						114,
						137
					]
				}
			]
		},
		"source": "<a href=\"https://studio.twitter.com\" rel=\"nofollow\">Media Studio</a>",
		"in_reply_to_status_id": null,
		"in_reply_to_status_id_str": null,
		"in_reply_to_user_id": null,
		"in_reply_to_user_id_str": null,
		"in_reply_to_screen_name": null,
		"user": {
			"id": 25073877,
			"id_str": "25073877",
			"name": "Donald J. Trump",
			"screen_name": "realDonaldTrump",
			"location": "Washington, DC",
			"description": "45th President of the United States of America",
			"url": null,
			"entities": {
				"description": {
					"urls": []
				}
			},
			"protected": false,
			"followers_count": 27379007,
			"friends_count": 43,
			"listed_count": 67563,
			"created_at": "Wed Mar 18 13:46:38 +0000 2009",
			"favourites_count": 47,
			"utc_offset": -14400,
			"time_zone": "Eastern Time (US & Canada)",
			"geo_enabled": true,
			"verified": true,
			"statuses_count": 34705,
			"lang": "en",
			"contributors_enabled": false,
			"is_translator": false,
			"is_translation_enabled": true,
			"profile_background_color": "6D5C18",
			"profile_background_image_url": "http://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_tile": true,
			"profile_image_url": "http://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_image_url_https": "https://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_banner_url": "https://pbs.twimg.com/profile_banners/25073877/1489657715",
			"profile_link_color": "0D5B73",
			"profile_sidebar_border_color": "BDDCAD",
			"profile_sidebar_fill_color": "C5CEC0",
			"profile_text_color": "333333",
			"profile_use_background_image": true,
			"has_extended_profile": false,
			"default_profile": false,
			"default_profile_image": false,
			"following": null,
			"follow_request_sent": null,
			"notifications": null,
			"translator_type": "regular"
		},
		"geo": null,
		"coordinates": null,
		"place": null,
		"contributors": null,
		"is_quote_status": false,
		"retweet_count": 10242,
		"favorite_count": 53329,
		"favorited": false,
		"retweeted": false,
		"possibly_sensitive": false,
		"lang": "en"
	},
	{
		"created_at": "Wed Mar 29 21:39:01 +0000 2017",
		"id": 847201455165624300,
		"id_str": "847201455165624320",
		"text": "Today's EO established a commission on combating drug addiction and the opioid crisis. Watch listening session➡️… https://t.co/ooF2ediqSt",
		"truncated": true,
		"entities": {
			"hashtags": [],
			"symbols": [],
			"user_mentions": [],
			"urls": [
				{
					"url": "https://t.co/ooF2ediqSt",
					"expanded_url": "https://twitter.com/i/web/status/847201455165624320",
					"display_url": "twitter.com/i/web/status/8…",
					"indices": [
						114,
						137
					]
				}
			]
		},
		"source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
		"in_reply_to_status_id": null,
		"in_reply_to_status_id_str": null,
		"in_reply_to_user_id": null,
		"in_reply_to_user_id_str": null,
		"in_reply_to_screen_name": null,
		"user": {
			"id": 25073877,
			"id_str": "25073877",
			"name": "Donald J. Trump",
			"screen_name": "realDonaldTrump",
			"location": "Washington, DC",
			"description": "45th President of the United States of America",
			"url": null,
			"entities": {
				"description": {
					"urls": []
				}
			},
			"protected": false,
			"followers_count": 27379007,
			"friends_count": 43,
			"listed_count": 67563,
			"created_at": "Wed Mar 18 13:46:38 +0000 2009",
			"favourites_count": 47,
			"utc_offset": -14400,
			"time_zone": "Eastern Time (US & Canada)",
			"geo_enabled": true,
			"verified": true,
			"statuses_count": 34705,
			"lang": "en",
			"contributors_enabled": false,
			"is_translator": false,
			"is_translation_enabled": true,
			"profile_background_color": "6D5C18",
			"profile_background_image_url": "http://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_tile": true,
			"profile_image_url": "http://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_image_url_https": "https://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_banner_url": "https://pbs.twimg.com/profile_banners/25073877/1489657715",
			"profile_link_color": "0D5B73",
			"profile_sidebar_border_color": "BDDCAD",
			"profile_sidebar_fill_color": "C5CEC0",
			"profile_text_color": "333333",
			"profile_use_background_image": true,
			"has_extended_profile": false,
			"default_profile": false,
			"default_profile_image": false,
			"following": null,
			"follow_request_sent": null,
			"notifications": null,
			"translator_type": "regular"
		},
		"geo": null,
		"coordinates": null,
		"place": null,
		"contributors": null,
		"is_quote_status": false,
		"retweet_count": 8648,
		"favorite_count": 40122,
		"favorited": false,
		"retweeted": false,
		"possibly_sensitive": false,
		"lang": "en"
	},
	{
		"created_at": "Wed Mar 29 12:21:02 +0000 2017",
		"id": 847061031293780000,
		"id_str": "847061031293779969",
		"text": "If the people of our great country could only see how viciously and inaccurately my administration is covered by certain media!",
		"truncated": false,
		"entities": {
			"hashtags": [],
			"symbols": [],
			"user_mentions": [],
			"urls": []
		},
		"source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
		"in_reply_to_status_id": null,
		"in_reply_to_status_id_str": null,
		"in_reply_to_user_id": null,
		"in_reply_to_user_id_str": null,
		"in_reply_to_screen_name": null,
		"user": {
			"id": 25073877,
			"id_str": "25073877",
			"name": "Donald J. Trump",
			"screen_name": "realDonaldTrump",
			"location": "Washington, DC",
			"description": "45th President of the United States of America",
			"url": null,
			"entities": {
				"description": {
					"urls": []
				}
			},
			"protected": false,
			"followers_count": 27379007,
			"friends_count": 43,
			"listed_count": 67563,
			"created_at": "Wed Mar 18 13:46:38 +0000 2009",
			"favourites_count": 47,
			"utc_offset": -14400,
			"time_zone": "Eastern Time (US & Canada)",
			"geo_enabled": true,
			"verified": true,
			"statuses_count": 34705,
			"lang": "en",
			"contributors_enabled": false,
			"is_translator": false,
			"is_translation_enabled": true,
			"profile_background_color": "6D5C18",
			"profile_background_image_url": "http://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_tile": true,
			"profile_image_url": "http://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_image_url_https": "https://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_banner_url": "https://pbs.twimg.com/profile_banners/25073877/1489657715",
			"profile_link_color": "0D5B73",
			"profile_sidebar_border_color": "BDDCAD",
			"profile_sidebar_fill_color": "C5CEC0",
			"profile_text_color": "333333",
			"profile_use_background_image": true,
			"has_extended_profile": false,
			"default_profile": false,
			"default_profile_image": false,
			"following": null,
			"follow_request_sent": null,
			"notifications": null,
			"translator_type": "regular"
		},
		"geo": null,
		"coordinates": null,
		"place": null,
		"contributors": null,
		"is_quote_status": false,
		"retweet_count": 20238,
		"favorite_count": 98100,
		"favorited": false,
		"retweeted": false,
		"lang": "en"
	},
	{
		"created_at": "Wed Mar 29 12:01:52 +0000 2017",
		"id": 847056211006632000,
		"id_str": "847056211006631936",
		"text": "Remember when the failing @nytimes apologized to its subscribers, right after the election, because their coverage was so wrong. Now worse!",
		"truncated": false,
		"entities": {
			"hashtags": [],
			"symbols": [],
			"user_mentions": [
				{
					"screen_name": "nytimes",
					"name": "The New York Times",
					"id": 807095,
					"id_str": "807095",
					"indices": [
						26,
						34
					]
				}
			],
			"urls": []
		},
		"source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
		"in_reply_to_status_id": null,
		"in_reply_to_status_id_str": null,
		"in_reply_to_user_id": null,
		"in_reply_to_user_id_str": null,
		"in_reply_to_screen_name": null,
		"user": {
			"id": 25073877,
			"id_str": "25073877",
			"name": "Donald J. Trump",
			"screen_name": "realDonaldTrump",
			"location": "Washington, DC",
			"description": "45th President of the United States of America",
			"url": null,
			"entities": {
				"description": {
					"urls": []
				}
			},
			"protected": false,
			"followers_count": 27379007,
			"friends_count": 43,
			"listed_count": 67563,
			"created_at": "Wed Mar 18 13:46:38 +0000 2009",
			"favourites_count": 47,
			"utc_offset": -14400,
			"time_zone": "Eastern Time (US & Canada)",
			"geo_enabled": true,
			"verified": true,
			"statuses_count": 34705,
			"lang": "en",
			"contributors_enabled": false,
			"is_translator": false,
			"is_translation_enabled": true,
			"profile_background_color": "6D5C18",
			"profile_background_image_url": "http://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_tile": true,
			"profile_image_url": "http://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_image_url_https": "https://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_banner_url": "https://pbs.twimg.com/profile_banners/25073877/1489657715",
			"profile_link_color": "0D5B73",
			"profile_sidebar_border_color": "BDDCAD",
			"profile_sidebar_fill_color": "C5CEC0",
			"profile_text_color": "333333",
			"profile_use_background_image": true,
			"has_extended_profile": false,
			"default_profile": false,
			"default_profile_image": false,
			"following": null,
			"follow_request_sent": null,
			"notifications": null,
			"translator_type": "regular"
		},
		"geo": null,
		"coordinates": null,
		"place": null,
		"contributors": null,
		"is_quote_status": false,
		"retweet_count": 15681,
		"favorite_count": 75011,
		"favorited": false,
		"retweeted": false,
		"lang": "en"
	},
	{
		"created_at": "Tue Mar 28 22:41:09 +0000 2017",
		"id": 846854703183020000,
		"id_str": "846854703183020032",
		"text": "Why doesn't Fake News talk about Podesta ties to Russia as covered by @FoxNews or money from Russia to Clinton - sale of  Uranium?",
		"truncated": false,
		"entities": {
			"hashtags": [],
			"symbols": [],
			"user_mentions": [
				{
					"screen_name": "FoxNews",
					"name": "Fox News",
					"id": 1367531,
					"id_str": "1367531",
					"indices": [
						70,
						78
					]
				}
			],
			"urls": []
		},
		"source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
		"in_reply_to_status_id": null,
		"in_reply_to_status_id_str": null,
		"in_reply_to_user_id": null,
		"in_reply_to_user_id_str": null,
		"in_reply_to_screen_name": null,
		"user": {
			"id": 25073877,
			"id_str": "25073877",
			"name": "Donald J. Trump",
			"screen_name": "realDonaldTrump",
			"location": "Washington, DC",
			"description": "45th President of the United States of America",
			"url": null,
			"entities": {
				"description": {
					"urls": []
				}
			},
			"protected": false,
			"followers_count": 27379007,
			"friends_count": 43,
			"listed_count": 67563,
			"created_at": "Wed Mar 18 13:46:38 +0000 2009",
			"favourites_count": 47,
			"utc_offset": -14400,
			"time_zone": "Eastern Time (US & Canada)",
			"geo_enabled": true,
			"verified": true,
			"statuses_count": 34705,
			"lang": "en",
			"contributors_enabled": false,
			"is_translator": false,
			"is_translation_enabled": true,
			"profile_background_color": "6D5C18",
			"profile_background_image_url": "http://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_tile": true,
			"profile_image_url": "http://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_image_url_https": "https://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_banner_url": "https://pbs.twimg.com/profile_banners/25073877/1489657715",
			"profile_link_color": "0D5B73",
			"profile_sidebar_border_color": "BDDCAD",
			"profile_sidebar_fill_color": "C5CEC0",
			"profile_text_color": "333333",
			"profile_use_background_image": true,
			"has_extended_profile": false,
			"default_profile": false,
			"default_profile_image": false,
			"following": null,
			"follow_request_sent": null,
			"notifications": null,
			"translator_type": "regular"
		},
		"geo": null,
		"coordinates": null,
		"place": null,
		"contributors": null,
		"is_quote_status": false,
		"retweet_count": 25496,
		"favorite_count": 86971,
		"favorited": false,
		"retweeted": false,
		"lang": "en"
	},
	{
		"created_at": "Tue Mar 28 21:48:40 +0000 2017",
		"id": 846841493952319500,
		"id_str": "846841493952319489",
		"text": "A NEW ERA IN AMERICAN ENERGY! \n#MadeInTheUSA🇺🇸\nWatch here: https://t.co/EG02Fdlkba https://t.co/XT12jqoIqj",
		"truncated": false,
		"entities": {
			"hashtags": [
				{
					"text": "MadeInTheUSA",
					"indices": [
						31,
						44
					]
				}
			],
			"symbols": [],
			"user_mentions": [],
			"urls": [
				{
					"url": "https://t.co/EG02Fdlkba",
					"expanded_url": "https://youtu.be/OdkThe_O50M",
					"display_url": "youtu.be/OdkThe_O50M",
					"indices": [
						59,
						82
					]
				}
			],
			"media": [
				{
					"id": 846841474738241500,
					"id_str": "846841474738241541",
					"indices": [
						83,
						106
					],
					"media_url": "http://pbs.twimg.com/media/C8CV1aLXQAUZxnm.jpg",
					"media_url_https": "https://pbs.twimg.com/media/C8CV1aLXQAUZxnm.jpg",
					"url": "https://t.co/XT12jqoIqj",
					"display_url": "pic.twitter.com/XT12jqoIqj",
					"expanded_url": "https://twitter.com/realDonaldTrump/status/846841493952319489/photo/1",
					"type": "photo",
					"sizes": {
						"large": {
							"w": 1024,
							"h": 512,
							"resize": "fit"
						},
						"thumb": {
							"w": 150,
							"h": 150,
							"resize": "crop"
						},
						"small": {
							"w": 680,
							"h": 340,
							"resize": "fit"
						},
						"medium": {
							"w": 1024,
							"h": 512,
							"resize": "fit"
						}
					}
				}
			]
		},
		"extended_entities": {
			"media": [
				{
					"id": 846841474738241500,
					"id_str": "846841474738241541",
					"indices": [
						83,
						106
					],
					"media_url": "http://pbs.twimg.com/media/C8CV1aLXQAUZxnm.jpg",
					"media_url_https": "https://pbs.twimg.com/media/C8CV1aLXQAUZxnm.jpg",
					"url": "https://t.co/XT12jqoIqj",
					"display_url": "pic.twitter.com/XT12jqoIqj",
					"expanded_url": "https://twitter.com/realDonaldTrump/status/846841493952319489/photo/1",
					"type": "photo",
					"sizes": {
						"large": {
							"w": 1024,
							"h": 512,
							"resize": "fit"
						},
						"thumb": {
							"w": 150,
							"h": 150,
							"resize": "crop"
						},
						"small": {
							"w": 680,
							"h": 340,
							"resize": "fit"
						},
						"medium": {
							"w": 1024,
							"h": 512,
							"resize": "fit"
						}
					}
				}
			]
		},
		"source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
		"in_reply_to_status_id": null,
		"in_reply_to_status_id_str": null,
		"in_reply_to_user_id": null,
		"in_reply_to_user_id_str": null,
		"in_reply_to_screen_name": null,
		"user": {
			"id": 25073877,
			"id_str": "25073877",
			"name": "Donald J. Trump",
			"screen_name": "realDonaldTrump",
			"location": "Washington, DC",
			"description": "45th President of the United States of America",
			"url": null,
			"entities": {
				"description": {
					"urls": []
				}
			},
			"protected": false,
			"followers_count": 27379007,
			"friends_count": 43,
			"listed_count": 67563,
			"created_at": "Wed Mar 18 13:46:38 +0000 2009",
			"favourites_count": 47,
			"utc_offset": -14400,
			"time_zone": "Eastern Time (US & Canada)",
			"geo_enabled": true,
			"verified": true,
			"statuses_count": 34705,
			"lang": "en",
			"contributors_enabled": false,
			"is_translator": false,
			"is_translation_enabled": true,
			"profile_background_color": "6D5C18",
			"profile_background_image_url": "http://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_tile": true,
			"profile_image_url": "http://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_image_url_https": "https://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_banner_url": "https://pbs.twimg.com/profile_banners/25073877/1489657715",
			"profile_link_color": "0D5B73",
			"profile_sidebar_border_color": "BDDCAD",
			"profile_sidebar_fill_color": "C5CEC0",
			"profile_text_color": "333333",
			"profile_use_background_image": true,
			"has_extended_profile": false,
			"default_profile": false,
			"default_profile_image": false,
			"following": null,
			"follow_request_sent": null,
			"notifications": null,
			"translator_type": "regular"
		},
		"geo": null,
		"coordinates": null,
		"place": null,
		"contributors": null,
		"is_quote_status": false,
		"retweet_count": 9631,
		"favorite_count": 45581,
		"favorited": false,
		"retweeted": false,
		"possibly_sensitive": false,
		"lang": "en"
	},
	{
		"created_at": "Tue Mar 28 20:57:17 +0000 2017",
		"id": 846828561491202000,
		"id_str": "846828561491202048",
		"text": "It was an honor to welcome @GLFOP to the @WhiteHouse today with @VP Pence &amp; Attorney General Sessions. THANK YOU fo… https://t.co/VHzTB4c69h",
		"truncated": true,
		"entities": {
			"hashtags": [],
			"symbols": [],
			"user_mentions": [
				{
					"screen_name": "GLFOP",
					"name": "National FOP",
					"id": 222196210,
					"id_str": "222196210",
					"indices": [
						27,
						33
					]
				},
				{
					"screen_name": "WhiteHouse",
					"name": "The White House",
					"id": 822215673812119600,
					"id_str": "822215673812119553",
					"indices": [
						41,
						52
					]
				},
				{
					"screen_name": "VP",
					"name": "Vice President Pence",
					"id": 818910970567344100,
					"id_str": "818910970567344128",
					"indices": [
						64,
						67
					]
				}
			],
			"urls": [
				{
					"url": "https://t.co/VHzTB4c69h",
					"expanded_url": "https://twitter.com/i/web/status/846828561491202048",
					"display_url": "twitter.com/i/web/status/8…",
					"indices": [
						121,
						144
					]
				}
			]
		},
		"source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
		"in_reply_to_status_id": null,
		"in_reply_to_status_id_str": null,
		"in_reply_to_user_id": null,
		"in_reply_to_user_id_str": null,
		"in_reply_to_screen_name": null,
		"user": {
			"id": 25073877,
			"id_str": "25073877",
			"name": "Donald J. Trump",
			"screen_name": "realDonaldTrump",
			"location": "Washington, DC",
			"description": "45th President of the United States of America",
			"url": null,
			"entities": {
				"description": {
					"urls": []
				}
			},
			"protected": false,
			"followers_count": 27379007,
			"friends_count": 43,
			"listed_count": 67563,
			"created_at": "Wed Mar 18 13:46:38 +0000 2009",
			"favourites_count": 47,
			"utc_offset": -14400,
			"time_zone": "Eastern Time (US & Canada)",
			"geo_enabled": true,
			"verified": true,
			"statuses_count": 34705,
			"lang": "en",
			"contributors_enabled": false,
			"is_translator": false,
			"is_translation_enabled": true,
			"profile_background_color": "6D5C18",
			"profile_background_image_url": "http://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_tile": true,
			"profile_image_url": "http://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_image_url_https": "https://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_banner_url": "https://pbs.twimg.com/profile_banners/25073877/1489657715",
			"profile_link_color": "0D5B73",
			"profile_sidebar_border_color": "BDDCAD",
			"profile_sidebar_fill_color": "C5CEC0",
			"profile_text_color": "333333",
			"profile_use_background_image": true,
			"has_extended_profile": false,
			"default_profile": false,
			"default_profile_image": false,
			"following": null,
			"follow_request_sent": null,
			"notifications": null,
			"translator_type": "regular"
		},
		"geo": null,
		"coordinates": null,
		"place": null,
		"contributors": null,
		"is_quote_status": false,
		"retweet_count": 7068,
		"favorite_count": 38942,
		"favorited": false,
		"retweeted": false,
		"possibly_sensitive": false,
		"lang": "en"
	},
	{
		"created_at": "Tue Mar 28 15:26:23 +0000 2017",
		"id": 846745288735887400,
		"id_str": "846745288735887360",
		"text": "The failing @NYTimes would do much better if they were honest! \nhttps://t.co/ATy8R3knS2",
		"truncated": false,
		"entities": {
			"hashtags": [],
			"symbols": [],
			"user_mentions": [
				{
					"screen_name": "nytimes",
					"name": "The New York Times",
					"id": 807095,
					"id_str": "807095",
					"indices": [
						12,
						20
					]
				}
			],
			"urls": [
				{
					"url": "https://t.co/ATy8R3knS2",
					"expanded_url": "http://nypost.com/2017/03/27/the-new-york-times-ongoing-dishonesty-only-helps-trump/",
					"display_url": "nypost.com/2017/03/27/the…",
					"indices": [
						64,
						87
					]
				}
			]
		},
		"source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
		"in_reply_to_status_id": null,
		"in_reply_to_status_id_str": null,
		"in_reply_to_user_id": null,
		"in_reply_to_user_id_str": null,
		"in_reply_to_screen_name": null,
		"user": {
			"id": 25073877,
			"id_str": "25073877",
			"name": "Donald J. Trump",
			"screen_name": "realDonaldTrump",
			"location": "Washington, DC",
			"description": "45th President of the United States of America",
			"url": null,
			"entities": {
				"description": {
					"urls": []
				}
			},
			"protected": false,
			"followers_count": 27379007,
			"friends_count": 43,
			"listed_count": 67563,
			"created_at": "Wed Mar 18 13:46:38 +0000 2009",
			"favourites_count": 47,
			"utc_offset": -14400,
			"time_zone": "Eastern Time (US & Canada)",
			"geo_enabled": true,
			"verified": true,
			"statuses_count": 34705,
			"lang": "en",
			"contributors_enabled": false,
			"is_translator": false,
			"is_translation_enabled": true,
			"profile_background_color": "6D5C18",
			"profile_background_image_url": "http://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_tile": true,
			"profile_image_url": "http://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_image_url_https": "https://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_banner_url": "https://pbs.twimg.com/profile_banners/25073877/1489657715",
			"profile_link_color": "0D5B73",
			"profile_sidebar_border_color": "BDDCAD",
			"profile_sidebar_fill_color": "C5CEC0",
			"profile_text_color": "333333",
			"profile_use_background_image": true,
			"has_extended_profile": false,
			"default_profile": false,
			"default_profile_image": false,
			"following": null,
			"follow_request_sent": null,
			"notifications": null,
			"translator_type": "regular"
		},
		"geo": null,
		"coordinates": null,
		"place": null,
		"contributors": null,
		"is_quote_status": false,
		"retweet_count": 13224,
		"favorite_count": 56667,
		"favorited": false,
		"retweeted": false,
		"possibly_sensitive": false,
		"lang": "en"
	},
	{
		"created_at": "Tue Mar 28 11:16:44 +0000 2017",
		"id": 846682464215076900,
		"id_str": "846682464215076866",
		"text": "Watch @foxandfriends now on Podesta and Russia!",
		"truncated": false,
		"entities": {
			"hashtags": [],
			"symbols": [],
			"user_mentions": [
				{
					"screen_name": "foxandfriends",
					"name": "FOX & friends",
					"id": 15513604,
					"id_str": "15513604",
					"indices": [
						6,
						20
					]
				}
			],
			"urls": []
		},
		"source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
		"in_reply_to_status_id": null,
		"in_reply_to_status_id_str": null,
		"in_reply_to_user_id": null,
		"in_reply_to_user_id_str": null,
		"in_reply_to_screen_name": null,
		"user": {
			"id": 25073877,
			"id_str": "25073877",
			"name": "Donald J. Trump",
			"screen_name": "realDonaldTrump",
			"location": "Washington, DC",
			"description": "45th President of the United States of America",
			"url": null,
			"entities": {
				"description": {
					"urls": []
				}
			},
			"protected": false,
			"followers_count": 27379007,
			"friends_count": 43,
			"listed_count": 67563,
			"created_at": "Wed Mar 18 13:46:38 +0000 2009",
			"favourites_count": 47,
			"utc_offset": -14400,
			"time_zone": "Eastern Time (US & Canada)",
			"geo_enabled": true,
			"verified": true,
			"statuses_count": 34705,
			"lang": "en",
			"contributors_enabled": false,
			"is_translator": false,
			"is_translation_enabled": true,
			"profile_background_color": "6D5C18",
			"profile_background_image_url": "http://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_tile": true,
			"profile_image_url": "http://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_image_url_https": "https://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_banner_url": "https://pbs.twimg.com/profile_banners/25073877/1489657715",
			"profile_link_color": "0D5B73",
			"profile_sidebar_border_color": "BDDCAD",
			"profile_sidebar_fill_color": "C5CEC0",
			"profile_text_color": "333333",
			"profile_use_background_image": true,
			"has_extended_profile": false,
			"default_profile": false,
			"default_profile_image": false,
			"following": null,
			"follow_request_sent": null,
			"notifications": null,
			"translator_type": "regular"
		},
		"geo": null,
		"coordinates": null,
		"place": null,
		"contributors": null,
		"is_quote_status": false,
		"retweet_count": 9302,
		"favorite_count": 47182,
		"favorited": false,
		"retweeted": false,
		"lang": "en"
	},
	{
		"created_at": "Tue Mar 28 10:36:02 +0000 2017",
		"id": 846672219073863700,
		"id_str": "846672219073863681",
		"text": "Big announcement by Ford today. Major investment to be made in three Michigan plants. Car companies coming back to U.S.  JOBS! JOBS! JOBS!",
		"truncated": false,
		"entities": {
			"hashtags": [],
			"symbols": [],
			"user_mentions": [],
			"urls": []
		},
		"source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
		"in_reply_to_status_id": null,
		"in_reply_to_status_id_str": null,
		"in_reply_to_user_id": null,
		"in_reply_to_user_id_str": null,
		"in_reply_to_screen_name": null,
		"user": {
			"id": 25073877,
			"id_str": "25073877",
			"name": "Donald J. Trump",
			"screen_name": "realDonaldTrump",
			"location": "Washington, DC",
			"description": "45th President of the United States of America",
			"url": null,
			"entities": {
				"description": {
					"urls": []
				}
			},
			"protected": false,
			"followers_count": 27379007,
			"friends_count": 43,
			"listed_count": 67563,
			"created_at": "Wed Mar 18 13:46:38 +0000 2009",
			"favourites_count": 47,
			"utc_offset": -14400,
			"time_zone": "Eastern Time (US & Canada)",
			"geo_enabled": true,
			"verified": true,
			"statuses_count": 34705,
			"lang": "en",
			"contributors_enabled": false,
			"is_translator": false,
			"is_translation_enabled": true,
			"profile_background_color": "6D5C18",
			"profile_background_image_url": "http://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_tile": true,
			"profile_image_url": "http://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_image_url_https": "https://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_banner_url": "https://pbs.twimg.com/profile_banners/25073877/1489657715",
			"profile_link_color": "0D5B73",
			"profile_sidebar_border_color": "BDDCAD",
			"profile_sidebar_fill_color": "C5CEC0",
			"profile_text_color": "333333",
			"profile_use_background_image": true,
			"has_extended_profile": false,
			"default_profile": false,
			"default_profile_image": false,
			"following": null,
			"follow_request_sent": null,
			"notifications": null,
			"translator_type": "regular"
		},
		"geo": null,
		"coordinates": null,
		"place": null,
		"contributors": null,
		"is_quote_status": false,
		"retweet_count": 23480,
		"favorite_count": 109762,
		"favorited": false,
		"retweeted": false,
		"lang": "en"
	},
	{
		"created_at": "Tue Mar 28 02:03:17 +0000 2017",
		"id": 846543183223963600,
		"id_str": "846543183223963649",
		"text": "The Democrats will make a deal with me on healthcare as soon as ObamaCare folds - not long. Do not worry, we are in very  good shape!",
		"truncated": false,
		"entities": {
			"hashtags": [],
			"symbols": [],
			"user_mentions": [],
			"urls": []
		},
		"source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
		"in_reply_to_status_id": null,
		"in_reply_to_status_id_str": null,
		"in_reply_to_user_id": null,
		"in_reply_to_user_id_str": null,
		"in_reply_to_screen_name": null,
		"user": {
			"id": 25073877,
			"id_str": "25073877",
			"name": "Donald J. Trump",
			"screen_name": "realDonaldTrump",
			"location": "Washington, DC",
			"description": "45th President of the United States of America",
			"url": null,
			"entities": {
				"description": {
					"urls": []
				}
			},
			"protected": false,
			"followers_count": 27379007,
			"friends_count": 43,
			"listed_count": 67563,
			"created_at": "Wed Mar 18 13:46:38 +0000 2009",
			"favourites_count": 47,
			"utc_offset": -14400,
			"time_zone": "Eastern Time (US & Canada)",
			"geo_enabled": true,
			"verified": true,
			"statuses_count": 34705,
			"lang": "en",
			"contributors_enabled": false,
			"is_translator": false,
			"is_translation_enabled": true,
			"profile_background_color": "6D5C18",
			"profile_background_image_url": "http://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_tile": true,
			"profile_image_url": "http://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_image_url_https": "https://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_banner_url": "https://pbs.twimg.com/profile_banners/25073877/1489657715",
			"profile_link_color": "0D5B73",
			"profile_sidebar_border_color": "BDDCAD",
			"profile_sidebar_fill_color": "C5CEC0",
			"profile_text_color": "333333",
			"profile_use_background_image": true,
			"has_extended_profile": false,
			"default_profile": false,
			"default_profile_image": false,
			"following": null,
			"follow_request_sent": null,
			"notifications": null,
			"translator_type": "regular"
		},
		"geo": null,
		"coordinates": null,
		"place": null,
		"contributors": null,
		"is_quote_status": false,
		"retweet_count": 16204,
		"favorite_count": 81282,
		"favorited": false,
		"retweeted": false,
		"lang": "en"
	},
	{
		"created_at": "Tue Mar 28 01:41:15 +0000 2017",
		"id": 846537639167713300,
		"id_str": "846537639167713281",
		"text": "The Republican House Freedom Caucus was able to snatch defeat from the jaws of victory. After so many bad years they were ready for a win!",
		"truncated": false,
		"entities": {
			"hashtags": [],
			"symbols": [],
			"user_mentions": [],
			"urls": []
		},
		"source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
		"in_reply_to_status_id": null,
		"in_reply_to_status_id_str": null,
		"in_reply_to_user_id": null,
		"in_reply_to_user_id_str": null,
		"in_reply_to_screen_name": null,
		"user": {
			"id": 25073877,
			"id_str": "25073877",
			"name": "Donald J. Trump",
			"screen_name": "realDonaldTrump",
			"location": "Washington, DC",
			"description": "45th President of the United States of America",
			"url": null,
			"entities": {
				"description": {
					"urls": []
				}
			},
			"protected": false,
			"followers_count": 27379007,
			"friends_count": 43,
			"listed_count": 67563,
			"created_at": "Wed Mar 18 13:46:38 +0000 2009",
			"favourites_count": 47,
			"utc_offset": -14400,
			"time_zone": "Eastern Time (US & Canada)",
			"geo_enabled": true,
			"verified": true,
			"statuses_count": 34705,
			"lang": "en",
			"contributors_enabled": false,
			"is_translator": false,
			"is_translation_enabled": true,
			"profile_background_color": "6D5C18",
			"profile_background_image_url": "http://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_tile": true,
			"profile_image_url": "http://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_image_url_https": "https://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_banner_url": "https://pbs.twimg.com/profile_banners/25073877/1489657715",
			"profile_link_color": "0D5B73",
			"profile_sidebar_border_color": "BDDCAD",
			"profile_sidebar_fill_color": "C5CEC0",
			"profile_text_color": "333333",
			"profile_use_background_image": true,
			"has_extended_profile": false,
			"default_profile": false,
			"default_profile_image": false,
			"following": null,
			"follow_request_sent": null,
			"notifications": null,
			"translator_type": "regular"
		},
		"geo": null,
		"coordinates": null,
		"place": null,
		"contributors": null,
		"is_quote_status": false,
		"retweet_count": 9688,
		"favorite_count": 52300,
		"favorited": false,
		"retweeted": false,
		"lang": "en"
	},
	{
		"created_at": "Tue Mar 28 01:35:35 +0000 2017",
		"id": 846536212362018800,
		"id_str": "846536212362018816",
		"text": "...money to Bill, the Hillary Russian \"reset,\" praise of Russia by Hillary, or Podesta Russian Company. Trump Russia story is a hoax. #MAGA!",
		"truncated": false,
		"entities": {
			"hashtags": [
				{
					"text": "MAGA",
					"indices": [
						134,
						139
					]
				}
			],
			"symbols": [],
			"user_mentions": [],
			"urls": []
		},
		"source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
		"in_reply_to_status_id": null,
		"in_reply_to_status_id_str": null,
		"in_reply_to_user_id": null,
		"in_reply_to_user_id_str": null,
		"in_reply_to_screen_name": null,
		"user": {
			"id": 25073877,
			"id_str": "25073877",
			"name": "Donald J. Trump",
			"screen_name": "realDonaldTrump",
			"location": "Washington, DC",
			"description": "45th President of the United States of America",
			"url": null,
			"entities": {
				"description": {
					"urls": []
				}
			},
			"protected": false,
			"followers_count": 27379007,
			"friends_count": 43,
			"listed_count": 67563,
			"created_at": "Wed Mar 18 13:46:38 +0000 2009",
			"favourites_count": 47,
			"utc_offset": -14400,
			"time_zone": "Eastern Time (US & Canada)",
			"geo_enabled": true,
			"verified": true,
			"statuses_count": 34705,
			"lang": "en",
			"contributors_enabled": false,
			"is_translator": false,
			"is_translation_enabled": true,
			"profile_background_color": "6D5C18",
			"profile_background_image_url": "http://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_tile": true,
			"profile_image_url": "http://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_image_url_https": "https://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_banner_url": "https://pbs.twimg.com/profile_banners/25073877/1489657715",
			"profile_link_color": "0D5B73",
			"profile_sidebar_border_color": "BDDCAD",
			"profile_sidebar_fill_color": "C5CEC0",
			"profile_text_color": "333333",
			"profile_use_background_image": true,
			"has_extended_profile": false,
			"default_profile": false,
			"default_profile_image": false,
			"following": null,
			"follow_request_sent": null,
			"notifications": null,
			"translator_type": "regular"
		},
		"geo": null,
		"coordinates": null,
		"place": null,
		"contributors": null,
		"is_quote_status": false,
		"retweet_count": 19336,
		"favorite_count": 69771,
		"favorited": false,
		"retweeted": false,
		"lang": "en"
	},
	{
		"created_at": "Tue Mar 28 01:26:04 +0000 2017",
		"id": 846533818811080700,
		"id_str": "846533818811080704",
		"text": "Why isn't the House Intelligence Committee looking into the Bill &amp; Hillary deal that allowed big Uranium to go to Russia, Russian speech....",
		"truncated": false,
		"entities": {
			"hashtags": [],
			"symbols": [],
			"user_mentions": [],
			"urls": []
		},
		"source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
		"in_reply_to_status_id": null,
		"in_reply_to_status_id_str": null,
		"in_reply_to_user_id": null,
		"in_reply_to_user_id_str": null,
		"in_reply_to_screen_name": null,
		"user": {
			"id": 25073877,
			"id_str": "25073877",
			"name": "Donald J. Trump",
			"screen_name": "realDonaldTrump",
			"location": "Washington, DC",
			"description": "45th President of the United States of America",
			"url": null,
			"entities": {
				"description": {
					"urls": []
				}
			},
			"protected": false,
			"followers_count": 27379007,
			"friends_count": 43,
			"listed_count": 67563,
			"created_at": "Wed Mar 18 13:46:38 +0000 2009",
			"favourites_count": 47,
			"utc_offset": -14400,
			"time_zone": "Eastern Time (US & Canada)",
			"geo_enabled": true,
			"verified": true,
			"statuses_count": 34705,
			"lang": "en",
			"contributors_enabled": false,
			"is_translator": false,
			"is_translation_enabled": true,
			"profile_background_color": "6D5C18",
			"profile_background_image_url": "http://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_tile": true,
			"profile_image_url": "http://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_image_url_https": "https://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_banner_url": "https://pbs.twimg.com/profile_banners/25073877/1489657715",
			"profile_link_color": "0D5B73",
			"profile_sidebar_border_color": "BDDCAD",
			"profile_sidebar_fill_color": "C5CEC0",
			"profile_text_color": "333333",
			"profile_use_background_image": true,
			"has_extended_profile": false,
			"default_profile": false,
			"default_profile_image": false,
			"following": null,
			"follow_request_sent": null,
			"notifications": null,
			"translator_type": "regular"
		},
		"geo": null,
		"coordinates": null,
		"place": null,
		"contributors": null,
		"is_quote_status": false,
		"retweet_count": 26511,
		"favorite_count": 89538,
		"favorited": false,
		"retweeted": false,
		"lang": "en"
	},
	{
		"created_at": "Mon Mar 27 01:04:42 +0000 2017",
		"id": 846166053663191000,
		"id_str": "846166053663191040",
		"text": "General Kelly is doing a great job at the border. Numbers are way down. Many are not even trying to come in anymore.",
		"truncated": false,
		"entities": {
			"hashtags": [],
			"symbols": [],
			"user_mentions": [],
			"urls": []
		},
		"source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
		"in_reply_to_status_id": null,
		"in_reply_to_status_id_str": null,
		"in_reply_to_user_id": null,
		"in_reply_to_user_id_str": null,
		"in_reply_to_screen_name": null,
		"user": {
			"id": 25073877,
			"id_str": "25073877",
			"name": "Donald J. Trump",
			"screen_name": "realDonaldTrump",
			"location": "Washington, DC",
			"description": "45th President of the United States of America",
			"url": null,
			"entities": {
				"description": {
					"urls": []
				}
			},
			"protected": false,
			"followers_count": 27379007,
			"friends_count": 43,
			"listed_count": 67563,
			"created_at": "Wed Mar 18 13:46:38 +0000 2009",
			"favourites_count": 47,
			"utc_offset": -14400,
			"time_zone": "Eastern Time (US & Canada)",
			"geo_enabled": true,
			"verified": true,
			"statuses_count": 34705,
			"lang": "en",
			"contributors_enabled": false,
			"is_translator": false,
			"is_translation_enabled": true,
			"profile_background_color": "6D5C18",
			"profile_background_image_url": "http://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_tile": true,
			"profile_image_url": "http://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_image_url_https": "https://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_banner_url": "https://pbs.twimg.com/profile_banners/25073877/1489657715",
			"profile_link_color": "0D5B73",
			"profile_sidebar_border_color": "BDDCAD",
			"profile_sidebar_fill_color": "C5CEC0",
			"profile_text_color": "333333",
			"profile_use_background_image": true,
			"has_extended_profile": false,
			"default_profile": false,
			"default_profile_image": false,
			"following": null,
			"follow_request_sent": null,
			"notifications": null,
			"translator_type": "regular"
		},
		"geo": null,
		"coordinates": null,
		"place": null,
		"contributors": null,
		"is_quote_status": false,
		"retweet_count": 21471,
		"favorite_count": 109448,
		"favorited": false,
		"retweeted": false,
		"lang": "en"
	},
	{
		"created_at": "Sun Mar 26 12:21:58 +0000 2017",
		"id": 845974102619906000,
		"id_str": "845974102619906048",
		"text": "Democrats are smiling in D.C. that the Freedom Caucus, with the help of Club For Growth and Heritage, have saved Planned Parenthood &amp; Ocare!",
		"truncated": false,
		"entities": {
			"hashtags": [],
			"symbols": [],
			"user_mentions": [],
			"urls": []
		},
		"source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
		"in_reply_to_status_id": null,
		"in_reply_to_status_id_str": null,
		"in_reply_to_user_id": null,
		"in_reply_to_user_id_str": null,
		"in_reply_to_screen_name": null,
		"user": {
			"id": 25073877,
			"id_str": "25073877",
			"name": "Donald J. Trump",
			"screen_name": "realDonaldTrump",
			"location": "Washington, DC",
			"description": "45th President of the United States of America",
			"url": null,
			"entities": {
				"description": {
					"urls": []
				}
			},
			"protected": false,
			"followers_count": 27379007,
			"friends_count": 43,
			"listed_count": 67563,
			"created_at": "Wed Mar 18 13:46:38 +0000 2009",
			"favourites_count": 47,
			"utc_offset": -14400,
			"time_zone": "Eastern Time (US & Canada)",
			"geo_enabled": true,
			"verified": true,
			"statuses_count": 34705,
			"lang": "en",
			"contributors_enabled": false,
			"is_translator": false,
			"is_translation_enabled": true,
			"profile_background_color": "6D5C18",
			"profile_background_image_url": "http://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_tile": true,
			"profile_image_url": "http://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_image_url_https": "https://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_banner_url": "https://pbs.twimg.com/profile_banners/25073877/1489657715",
			"profile_link_color": "0D5B73",
			"profile_sidebar_border_color": "BDDCAD",
			"profile_sidebar_fill_color": "C5CEC0",
			"profile_text_color": "333333",
			"profile_use_background_image": true,
			"has_extended_profile": false,
			"default_profile": false,
			"default_profile_image": false,
			"following": null,
			"follow_request_sent": null,
			"notifications": null,
			"translator_type": "regular"
		},
		"geo": null,
		"coordinates": null,
		"place": null,
		"contributors": null,
		"is_quote_status": false,
		"retweet_count": 15709,
		"favorite_count": 64858,
		"favorited": false,
		"retweeted": false,
		"lang": "en"
	},
	{
		"created_at": "Sat Mar 25 22:37:02 +0000 2017",
		"id": 845766504608120800,
		"id_str": "845766504608120833",
		"text": "Thanks you for all of the Trump Rallies today. Amazing support. We will all MAKE AMERICA GREAT AGAIN!",
		"truncated": false,
		"entities": {
			"hashtags": [],
			"symbols": [],
			"user_mentions": [],
			"urls": []
		},
		"source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
		"in_reply_to_status_id": null,
		"in_reply_to_status_id_str": null,
		"in_reply_to_user_id": null,
		"in_reply_to_user_id_str": null,
		"in_reply_to_screen_name": null,
		"user": {
			"id": 25073877,
			"id_str": "25073877",
			"name": "Donald J. Trump",
			"screen_name": "realDonaldTrump",
			"location": "Washington, DC",
			"description": "45th President of the United States of America",
			"url": null,
			"entities": {
				"description": {
					"urls": []
				}
			},
			"protected": false,
			"followers_count": 27379007,
			"friends_count": 43,
			"listed_count": 67563,
			"created_at": "Wed Mar 18 13:46:38 +0000 2009",
			"favourites_count": 47,
			"utc_offset": -14400,
			"time_zone": "Eastern Time (US & Canada)",
			"geo_enabled": true,
			"verified": true,
			"statuses_count": 34705,
			"lang": "en",
			"contributors_enabled": false,
			"is_translator": false,
			"is_translation_enabled": true,
			"profile_background_color": "6D5C18",
			"profile_background_image_url": "http://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_tile": true,
			"profile_image_url": "http://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_image_url_https": "https://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_banner_url": "https://pbs.twimg.com/profile_banners/25073877/1489657715",
			"profile_link_color": "0D5B73",
			"profile_sidebar_border_color": "BDDCAD",
			"profile_sidebar_fill_color": "C5CEC0",
			"profile_text_color": "333333",
			"profile_use_background_image": true,
			"has_extended_profile": false,
			"default_profile": false,
			"default_profile_image": false,
			"following": null,
			"follow_request_sent": null,
			"notifications": null,
			"translator_type": "regular"
		},
		"geo": null,
		"coordinates": null,
		"place": null,
		"contributors": null,
		"is_quote_status": false,
		"retweet_count": 21638,
		"favorite_count": 118596,
		"favorited": false,
		"retweeted": false,
		"lang": "en"
	},
	{
		"created_at": "Sat Mar 25 14:41:14 +0000 2017",
		"id": 845646761704243200,
		"id_str": "845646761704243200",
		"text": "Watch @JudgeJeanine on @FoxNews tonight at 9:00 P.M.",
		"truncated": false,
		"entities": {
			"hashtags": [],
			"symbols": [],
			"user_mentions": [
				{
					"screen_name": "JudgeJeanine",
					"name": "Jeanine Pirro",
					"id": 29458079,
					"id_str": "29458079",
					"indices": [
						6,
						19
					]
				},
				{
					"screen_name": "FoxNews",
					"name": "Fox News",
					"id": 1367531,
					"id_str": "1367531",
					"indices": [
						23,
						31
					]
				}
			],
			"urls": []
		},
		"source": "<a href=\"http://twitter.com/download/android\" rel=\"nofollow\">Twitter for Android</a>",
		"in_reply_to_status_id": null,
		"in_reply_to_status_id_str": null,
		"in_reply_to_user_id": null,
		"in_reply_to_user_id_str": null,
		"in_reply_to_screen_name": null,
		"user": {
			"id": 25073877,
			"id_str": "25073877",
			"name": "Donald J. Trump",
			"screen_name": "realDonaldTrump",
			"location": "Washington, DC",
			"description": "45th President of the United States of America",
			"url": null,
			"entities": {
				"description": {
					"urls": []
				}
			},
			"protected": false,
			"followers_count": 27379007,
			"friends_count": 43,
			"listed_count": 67563,
			"created_at": "Wed Mar 18 13:46:38 +0000 2009",
			"favourites_count": 47,
			"utc_offset": -14400,
			"time_zone": "Eastern Time (US & Canada)",
			"geo_enabled": true,
			"verified": true,
			"statuses_count": 34705,
			"lang": "en",
			"contributors_enabled": false,
			"is_translator": false,
			"is_translation_enabled": true,
			"profile_background_color": "6D5C18",
			"profile_background_image_url": "http://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_tile": true,
			"profile_image_url": "http://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_image_url_https": "https://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_banner_url": "https://pbs.twimg.com/profile_banners/25073877/1489657715",
			"profile_link_color": "0D5B73",
			"profile_sidebar_border_color": "BDDCAD",
			"profile_sidebar_fill_color": "C5CEC0",
			"profile_text_color": "333333",
			"profile_use_background_image": true,
			"has_extended_profile": false,
			"default_profile": false,
			"default_profile_image": false,
			"following": null,
			"follow_request_sent": null,
			"notifications": null,
			"translator_type": "regular"
		},
		"geo": null,
		"coordinates": null,
		"place": null,
		"contributors": null,
		"is_quote_status": false,
		"retweet_count": 10187,
		"favorite_count": 51610,
		"favorited": false,
		"retweeted": false,
		"lang": "en"
	},
	{
		"created_at": "Sat Mar 25 14:37:52 +0000 2017",
		"id": 845645916732358700,
		"id_str": "845645916732358656",
		"text": "ObamaCare will explode and we will all get together and piece together a great healthcare plan for THE PEOPLE. Do not worry!",
		"truncated": false,
		"entities": {
			"hashtags": [],
			"symbols": [],
			"user_mentions": [],
			"urls": []
		},
		"source": "<a href=\"http://twitter.com/download/android\" rel=\"nofollow\">Twitter for Android</a>",
		"in_reply_to_status_id": null,
		"in_reply_to_status_id_str": null,
		"in_reply_to_user_id": null,
		"in_reply_to_user_id_str": null,
		"in_reply_to_screen_name": null,
		"user": {
			"id": 25073877,
			"id_str": "25073877",
			"name": "Donald J. Trump",
			"screen_name": "realDonaldTrump",
			"location": "Washington, DC",
			"description": "45th President of the United States of America",
			"url": null,
			"entities": {
				"description": {
					"urls": []
				}
			},
			"protected": false,
			"followers_count": 27379007,
			"friends_count": 43,
			"listed_count": 67563,
			"created_at": "Wed Mar 18 13:46:38 +0000 2009",
			"favourites_count": 47,
			"utc_offset": -14400,
			"time_zone": "Eastern Time (US & Canada)",
			"geo_enabled": true,
			"verified": true,
			"statuses_count": 34705,
			"lang": "en",
			"contributors_enabled": false,
			"is_translator": false,
			"is_translation_enabled": true,
			"profile_background_color": "6D5C18",
			"profile_background_image_url": "http://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_tile": true,
			"profile_image_url": "http://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_image_url_https": "https://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_banner_url": "https://pbs.twimg.com/profile_banners/25073877/1489657715",
			"profile_link_color": "0D5B73",
			"profile_sidebar_border_color": "BDDCAD",
			"profile_sidebar_fill_color": "C5CEC0",
			"profile_text_color": "333333",
			"profile_use_background_image": true,
			"has_extended_profile": false,
			"default_profile": false,
			"default_profile_image": false,
			"following": null,
			"follow_request_sent": null,
			"notifications": null,
			"translator_type": "regular"
		},
		"geo": null,
		"coordinates": null,
		"place": null,
		"contributors": null,
		"is_quote_status": false,
		"retweet_count": 22705,
		"favorite_count": 105293,
		"favorited": false,
		"retweeted": false,
		"lang": "en"
	},
	{
		"created_at": "Sat Mar 25 13:29:17 +0000 2017",
		"id": 845628655493677000,
		"id_str": "845628655493677056",
		"text": "Happy #MedalOfHonorDay to our heroes! ➡️https://t.co/juAB1RmMh0 https://t.co/Sw5ea1OwUf",
		"truncated": false,
		"entities": {
			"hashtags": [
				{
					"text": "MedalOfHonorDay",
					"indices": [
						6,
						22
					]
				}
			],
			"symbols": [],
			"user_mentions": [],
			"urls": [
				{
					"url": "https://t.co/juAB1RmMh0",
					"expanded_url": "https://www.whitehouse.gov/the-press-office/2017/03/24/remarks-president-meeting-medal-honor-recipients",
					"display_url": "whitehouse.gov/the-press-offi…",
					"indices": [
						40,
						63
					]
				}
			],
			"media": [
				{
					"id": 845628648627585000,
					"id_str": "845628648627585024",
					"indices": [
						64,
						87
					],
					"media_url": "http://pbs.twimg.com/media/C7xGxo1XQAAXnej.jpg",
					"media_url_https": "https://pbs.twimg.com/media/C7xGxo1XQAAXnej.jpg",
					"url": "https://t.co/Sw5ea1OwUf",
					"display_url": "pic.twitter.com/Sw5ea1OwUf",
					"expanded_url": "https://twitter.com/realDonaldTrump/status/845628655493677056/photo/1",
					"type": "photo",
					"sizes": {
						"large": {
							"w": 1200,
							"h": 800,
							"resize": "fit"
						},
						"thumb": {
							"w": 150,
							"h": 150,
							"resize": "crop"
						},
						"medium": {
							"w": 1200,
							"h": 800,
							"resize": "fit"
						},
						"small": {
							"w": 680,
							"h": 453,
							"resize": "fit"
						}
					}
				}
			]
		},
		"extended_entities": {
			"media": [
				{
					"id": 845628648627585000,
					"id_str": "845628648627585024",
					"indices": [
						64,
						87
					],
					"media_url": "http://pbs.twimg.com/media/C7xGxo1XQAAXnej.jpg",
					"media_url_https": "https://pbs.twimg.com/media/C7xGxo1XQAAXnej.jpg",
					"url": "https://t.co/Sw5ea1OwUf",
					"display_url": "pic.twitter.com/Sw5ea1OwUf",
					"expanded_url": "https://twitter.com/realDonaldTrump/status/845628655493677056/photo/1",
					"type": "photo",
					"sizes": {
						"large": {
							"w": 1200,
							"h": 800,
							"resize": "fit"
						},
						"thumb": {
							"w": 150,
							"h": 150,
							"resize": "crop"
						},
						"medium": {
							"w": 1200,
							"h": 800,
							"resize": "fit"
						},
						"small": {
							"w": 680,
							"h": 453,
							"resize": "fit"
						}
					}
				}
			]
		},
		"source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
		"in_reply_to_status_id": null,
		"in_reply_to_status_id_str": null,
		"in_reply_to_user_id": null,
		"in_reply_to_user_id_str": null,
		"in_reply_to_screen_name": null,
		"user": {
			"id": 25073877,
			"id_str": "25073877",
			"name": "Donald J. Trump",
			"screen_name": "realDonaldTrump",
			"location": "Washington, DC",
			"description": "45th President of the United States of America",
			"url": null,
			"entities": {
				"description": {
					"urls": []
				}
			},
			"protected": false,
			"followers_count": 27379007,
			"friends_count": 43,
			"listed_count": 67563,
			"created_at": "Wed Mar 18 13:46:38 +0000 2009",
			"favourites_count": 47,
			"utc_offset": -14400,
			"time_zone": "Eastern Time (US & Canada)",
			"geo_enabled": true,
			"verified": true,
			"statuses_count": 34705,
			"lang": "en",
			"contributors_enabled": false,
			"is_translator": false,
			"is_translation_enabled": true,
			"profile_background_color": "6D5C18",
			"profile_background_image_url": "http://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_tile": true,
			"profile_image_url": "http://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_image_url_https": "https://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_banner_url": "https://pbs.twimg.com/profile_banners/25073877/1489657715",
			"profile_link_color": "0D5B73",
			"profile_sidebar_border_color": "BDDCAD",
			"profile_sidebar_fill_color": "C5CEC0",
			"profile_text_color": "333333",
			"profile_use_background_image": true,
			"has_extended_profile": false,
			"default_profile": false,
			"default_profile_image": false,
			"following": null,
			"follow_request_sent": null,
			"notifications": null,
			"translator_type": "regular"
		},
		"geo": null,
		"coordinates": null,
		"place": null,
		"contributors": null,
		"is_quote_status": false,
		"retweet_count": 14184,
		"favorite_count": 68626,
		"favorited": false,
		"retweeted": false,
		"possibly_sensitive": false,
		"lang": "en"
	},
	{
		"created_at": "Fri Mar 24 17:59:42 +0000 2017",
		"id": 845334323045765100,
		"id_str": "845334323045765121",
		"text": "Today, I was thrilled to announce a commitment of $25 BILLION &amp; 20K AMERICAN JOBS over the next 4 years. THANK YOU… https://t.co/nWJ1hNmzoR",
		"truncated": true,
		"entities": {
			"hashtags": [],
			"symbols": [],
			"user_mentions": [],
			"urls": [
				{
					"url": "https://t.co/nWJ1hNmzoR",
					"expanded_url": "https://twitter.com/i/web/status/845334323045765121",
					"display_url": "twitter.com/i/web/status/8…",
					"indices": [
						120,
						143
					]
				}
			]
		},
		"source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
		"in_reply_to_status_id": null,
		"in_reply_to_status_id_str": null,
		"in_reply_to_user_id": null,
		"in_reply_to_user_id_str": null,
		"in_reply_to_screen_name": null,
		"user": {
			"id": 25073877,
			"id_str": "25073877",
			"name": "Donald J. Trump",
			"screen_name": "realDonaldTrump",
			"location": "Washington, DC",
			"description": "45th President of the United States of America",
			"url": null,
			"entities": {
				"description": {
					"urls": []
				}
			},
			"protected": false,
			"followers_count": 27379007,
			"friends_count": 43,
			"listed_count": 67563,
			"created_at": "Wed Mar 18 13:46:38 +0000 2009",
			"favourites_count": 47,
			"utc_offset": -14400,
			"time_zone": "Eastern Time (US & Canada)",
			"geo_enabled": true,
			"verified": true,
			"statuses_count": 34705,
			"lang": "en",
			"contributors_enabled": false,
			"is_translator": false,
			"is_translation_enabled": true,
			"profile_background_color": "6D5C18",
			"profile_background_image_url": "http://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_tile": true,
			"profile_image_url": "http://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_image_url_https": "https://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_banner_url": "https://pbs.twimg.com/profile_banners/25073877/1489657715",
			"profile_link_color": "0D5B73",
			"profile_sidebar_border_color": "BDDCAD",
			"profile_sidebar_fill_color": "C5CEC0",
			"profile_text_color": "333333",
			"profile_use_background_image": true,
			"has_extended_profile": false,
			"default_profile": false,
			"default_profile_image": false,
			"following": null,
			"follow_request_sent": null,
			"notifications": null,
			"translator_type": "regular"
		},
		"geo": null,
		"coordinates": null,
		"place": null,
		"contributors": null,
		"is_quote_status": false,
		"retweet_count": 20371,
		"favorite_count": 90020,
		"favorited": false,
		"retweeted": false,
		"possibly_sensitive": false,
		"lang": "en"
	},
	{
		"created_at": "Fri Mar 24 17:03:46 +0000 2017",
		"id": 845320243614548000,
		"id_str": "845320243614547968",
		"text": "Today, I was pleased to announce the official approval of the presidential permit for the #KeystonePipeline. A grea… https://t.co/GWNo2XAueg",
		"truncated": true,
		"entities": {
			"hashtags": [
				{
					"text": "KeystonePipeline",
					"indices": [
						90,
						107
					]
				}
			],
			"symbols": [],
			"user_mentions": [],
			"urls": [
				{
					"url": "https://t.co/GWNo2XAueg",
					"expanded_url": "https://twitter.com/i/web/status/845320243614547968",
					"display_url": "twitter.com/i/web/status/8…",
					"indices": [
						117,
						140
					]
				}
			]
		},
		"source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
		"in_reply_to_status_id": null,
		"in_reply_to_status_id_str": null,
		"in_reply_to_user_id": null,
		"in_reply_to_user_id_str": null,
		"in_reply_to_screen_name": null,
		"user": {
			"id": 25073877,
			"id_str": "25073877",
			"name": "Donald J. Trump",
			"screen_name": "realDonaldTrump",
			"location": "Washington, DC",
			"description": "45th President of the United States of America",
			"url": null,
			"entities": {
				"description": {
					"urls": []
				}
			},
			"protected": false,
			"followers_count": 27379007,
			"friends_count": 43,
			"listed_count": 67563,
			"created_at": "Wed Mar 18 13:46:38 +0000 2009",
			"favourites_count": 47,
			"utc_offset": -14400,
			"time_zone": "Eastern Time (US & Canada)",
			"geo_enabled": true,
			"verified": true,
			"statuses_count": 34705,
			"lang": "en",
			"contributors_enabled": false,
			"is_translator": false,
			"is_translation_enabled": true,
			"profile_background_color": "6D5C18",
			"profile_background_image_url": "http://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_tile": true,
			"profile_image_url": "http://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_image_url_https": "https://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_banner_url": "https://pbs.twimg.com/profile_banners/25073877/1489657715",
			"profile_link_color": "0D5B73",
			"profile_sidebar_border_color": "BDDCAD",
			"profile_sidebar_fill_color": "C5CEC0",
			"profile_text_color": "333333",
			"profile_use_background_image": true,
			"has_extended_profile": false,
			"default_profile": false,
			"default_profile_image": false,
			"following": null,
			"follow_request_sent": null,
			"notifications": null,
			"translator_type": "regular"
		},
		"geo": null,
		"coordinates": null,
		"place": null,
		"contributors": null,
		"is_quote_status": false,
		"retweet_count": 13043,
		"favorite_count": 67166,
		"favorited": false,
		"retweeted": false,
		"possibly_sensitive": false,
		"lang": "en"
	},
	{
		"created_at": "Fri Mar 24 12:23:00 +0000 2017",
		"id": 845249587178819600,
		"id_str": "845249587178819584",
		"text": "The irony is that the Freedom Caucus, which is very pro-life and against Planned Parenthood, allows P.P. to continue if they stop this plan!",
		"truncated": false,
		"entities": {
			"hashtags": [],
			"symbols": [],
			"user_mentions": [],
			"urls": []
		},
		"source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
		"in_reply_to_status_id": null,
		"in_reply_to_status_id_str": null,
		"in_reply_to_user_id": null,
		"in_reply_to_user_id_str": null,
		"in_reply_to_screen_name": null,
		"user": {
			"id": 25073877,
			"id_str": "25073877",
			"name": "Donald J. Trump",
			"screen_name": "realDonaldTrump",
			"location": "Washington, DC",
			"description": "45th President of the United States of America",
			"url": null,
			"entities": {
				"description": {
					"urls": []
				}
			},
			"protected": false,
			"followers_count": 27379007,
			"friends_count": 43,
			"listed_count": 67563,
			"created_at": "Wed Mar 18 13:46:38 +0000 2009",
			"favourites_count": 47,
			"utc_offset": -14400,
			"time_zone": "Eastern Time (US & Canada)",
			"geo_enabled": true,
			"verified": true,
			"statuses_count": 34705,
			"lang": "en",
			"contributors_enabled": false,
			"is_translator": false,
			"is_translation_enabled": true,
			"profile_background_color": "6D5C18",
			"profile_background_image_url": "http://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_tile": true,
			"profile_image_url": "http://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_image_url_https": "https://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_banner_url": "https://pbs.twimg.com/profile_banners/25073877/1489657715",
			"profile_link_color": "0D5B73",
			"profile_sidebar_border_color": "BDDCAD",
			"profile_sidebar_fill_color": "C5CEC0",
			"profile_text_color": "333333",
			"profile_use_background_image": true,
			"has_extended_profile": false,
			"default_profile": false,
			"default_profile_image": false,
			"following": null,
			"follow_request_sent": null,
			"notifications": null,
			"translator_type": "regular"
		},
		"geo": null,
		"coordinates": null,
		"place": null,
		"contributors": null,
		"is_quote_status": false,
		"retweet_count": 13411,
		"favorite_count": 62355,
		"favorited": false,
		"retweeted": false,
		"lang": "en"
	},
	{
		"created_at": "Fri Mar 24 12:14:32 +0000 2017",
		"id": 845247455868391400,
		"id_str": "845247455868391425",
		"text": "After seven horrible years of ObamaCare (skyrocketing premiums &amp; deductibles, bad healthcare), this is finally your chance for a great plan!",
		"truncated": false,
		"entities": {
			"hashtags": [],
			"symbols": [],
			"user_mentions": [],
			"urls": []
		},
		"source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
		"in_reply_to_status_id": null,
		"in_reply_to_status_id_str": null,
		"in_reply_to_user_id": null,
		"in_reply_to_user_id_str": null,
		"in_reply_to_screen_name": null,
		"user": {
			"id": 25073877,
			"id_str": "25073877",
			"name": "Donald J. Trump",
			"screen_name": "realDonaldTrump",
			"location": "Washington, DC",
			"description": "45th President of the United States of America",
			"url": null,
			"entities": {
				"description": {
					"urls": []
				}
			},
			"protected": false,
			"followers_count": 27379007,
			"friends_count": 43,
			"listed_count": 67563,
			"created_at": "Wed Mar 18 13:46:38 +0000 2009",
			"favourites_count": 47,
			"utc_offset": -14400,
			"time_zone": "Eastern Time (US & Canada)",
			"geo_enabled": true,
			"verified": true,
			"statuses_count": 34705,
			"lang": "en",
			"contributors_enabled": false,
			"is_translator": false,
			"is_translation_enabled": true,
			"profile_background_color": "6D5C18",
			"profile_background_image_url": "http://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_tile": true,
			"profile_image_url": "http://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_image_url_https": "https://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_banner_url": "https://pbs.twimg.com/profile_banners/25073877/1489657715",
			"profile_link_color": "0D5B73",
			"profile_sidebar_border_color": "BDDCAD",
			"profile_sidebar_fill_color": "C5CEC0",
			"profile_text_color": "333333",
			"profile_use_background_image": true,
			"has_extended_profile": false,
			"default_profile": false,
			"default_profile_image": false,
			"following": null,
			"follow_request_sent": null,
			"notifications": null,
			"translator_type": "regular"
		},
		"geo": null,
		"coordinates": null,
		"place": null,
		"contributors": null,
		"is_quote_status": false,
		"retweet_count": 12617,
		"favorite_count": 68657,
		"favorited": false,
		"retweeted": false,
		"lang": "en"
	},
	{
		"created_at": "Thu Mar 23 22:19:43 +0000 2017",
		"id": 845037368386207700,
		"id_str": "845037368386207746",
		"text": "It was an honor to welcome so many truckers and trucking industry leaders to the @WhiteHouse today! https://t.co/M1veooVBNE",
		"truncated": false,
		"entities": {
			"hashtags": [],
			"symbols": [],
			"user_mentions": [
				{
					"screen_name": "WhiteHouse",
					"name": "The White House",
					"id": 822215673812119600,
					"id_str": "822215673812119553",
					"indices": [
						81,
						92
					]
				}
			],
			"urls": [],
			"media": [
				{
					"id": 845036859520696300,
					"id_str": "845036859520696320",
					"indices": [
						100,
						123
					],
					"media_url": "http://pbs.twimg.com/ext_tw_video_thumb/845036859520696320/pu/img/34Qk1e2QaJRRd7tB.jpg",
					"media_url_https": "https://pbs.twimg.com/ext_tw_video_thumb/845036859520696320/pu/img/34Qk1e2QaJRRd7tB.jpg",
					"url": "https://t.co/M1veooVBNE",
					"display_url": "pic.twitter.com/M1veooVBNE",
					"expanded_url": "https://twitter.com/realDonaldTrump/status/845037368386207746/video/1",
					"type": "photo",
					"sizes": {
						"thumb": {
							"w": 150,
							"h": 150,
							"resize": "crop"
						},
						"medium": {
							"w": 600,
							"h": 338,
							"resize": "fit"
						},
						"small": {
							"w": 340,
							"h": 191,
							"resize": "fit"
						},
						"large": {
							"w": 1024,
							"h": 576,
							"resize": "fit"
						}
					}
				}
			]
		},
		"extended_entities": {
			"media": [
				{
					"id": 845036859520696300,
					"id_str": "845036859520696320",
					"indices": [
						100,
						123
					],
					"media_url": "http://pbs.twimg.com/ext_tw_video_thumb/845036859520696320/pu/img/34Qk1e2QaJRRd7tB.jpg",
					"media_url_https": "https://pbs.twimg.com/ext_tw_video_thumb/845036859520696320/pu/img/34Qk1e2QaJRRd7tB.jpg",
					"url": "https://t.co/M1veooVBNE",
					"display_url": "pic.twitter.com/M1veooVBNE",
					"expanded_url": "https://twitter.com/realDonaldTrump/status/845037368386207746/video/1",
					"type": "video",
					"sizes": {
						"thumb": {
							"w": 150,
							"h": 150,
							"resize": "crop"
						},
						"medium": {
							"w": 600,
							"h": 338,
							"resize": "fit"
						},
						"small": {
							"w": 340,
							"h": 191,
							"resize": "fit"
						},
						"large": {
							"w": 1024,
							"h": 576,
							"resize": "fit"
						}
					},
					"video_info": {
						"aspect_ratio": [
							16,
							9
						],
						"duration_millis": 66300,
						"variants": [
							{
								"bitrate": 320000,
								"content_type": "video/mp4",
								"url": "https://video.twimg.com/ext_tw_video/845036859520696320/pu/vid/320x180/Y7ymJtAu9xqm-YvL.mp4"
							},
							{
								"bitrate": 832000,
								"content_type": "video/mp4",
								"url": "https://video.twimg.com/ext_tw_video/845036859520696320/pu/vid/640x360/QGLW1_3RZYNbJSRF.mp4"
							},
							{
								"content_type": "application/x-mpegURL",
								"url": "https://video.twimg.com/ext_tw_video/845036859520696320/pu/pl/300rtFjRmy_Hc6Sz.m3u8"
							},
							{
								"bitrate": 2176000,
								"content_type": "video/mp4",
								"url": "https://video.twimg.com/ext_tw_video/845036859520696320/pu/vid/1280x720/-CILFP1p2OjrqEVU.mp4"
							}
						]
					},
					"additional_media_info": {
						"monetizable": false
					}
				}
			]
		},
		"source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
		"in_reply_to_status_id": null,
		"in_reply_to_status_id_str": null,
		"in_reply_to_user_id": null,
		"in_reply_to_user_id_str": null,
		"in_reply_to_screen_name": null,
		"user": {
			"id": 25073877,
			"id_str": "25073877",
			"name": "Donald J. Trump",
			"screen_name": "realDonaldTrump",
			"location": "Washington, DC",
			"description": "45th President of the United States of America",
			"url": null,
			"entities": {
				"description": {
					"urls": []
				}
			},
			"protected": false,
			"followers_count": 27379007,
			"friends_count": 43,
			"listed_count": 67563,
			"created_at": "Wed Mar 18 13:46:38 +0000 2009",
			"favourites_count": 47,
			"utc_offset": -14400,
			"time_zone": "Eastern Time (US & Canada)",
			"geo_enabled": true,
			"verified": true,
			"statuses_count": 34705,
			"lang": "en",
			"contributors_enabled": false,
			"is_translator": false,
			"is_translation_enabled": true,
			"profile_background_color": "6D5C18",
			"profile_background_image_url": "http://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_tile": true,
			"profile_image_url": "http://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_image_url_https": "https://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_banner_url": "https://pbs.twimg.com/profile_banners/25073877/1489657715",
			"profile_link_color": "0D5B73",
			"profile_sidebar_border_color": "BDDCAD",
			"profile_sidebar_fill_color": "C5CEC0",
			"profile_text_color": "333333",
			"profile_use_background_image": true,
			"has_extended_profile": false,
			"default_profile": false,
			"default_profile_image": false,
			"following": null,
			"follow_request_sent": null,
			"notifications": null,
			"translator_type": "regular"
		},
		"geo": null,
		"coordinates": null,
		"place": null,
		"contributors": null,
		"is_quote_status": false,
		"retweet_count": 16521,
		"favorite_count": 78419,
		"favorited": false,
		"retweeted": false,
		"possibly_sensitive": false,
		"lang": "en"
	},
	{
		"created_at": "Thu Mar 23 16:07:55 +0000 2017",
		"id": 844943801848414200,
		"id_str": "844943801848414209",
		"text": "We are taking action to #RepealANDReplace #Obamacare! Contact your Rep &amp; tell them you support #AHCA. #PassTheBill… https://t.co/5lsrDJXfzb",
		"truncated": true,
		"entities": {
			"hashtags": [
				{
					"text": "RepealANDReplace",
					"indices": [
						24,
						41
					]
				},
				{
					"text": "Obamacare",
					"indices": [
						42,
						52
					]
				},
				{
					"text": "AHCA",
					"indices": [
						99,
						104
					]
				},
				{
					"text": "PassTheBill",
					"indices": [
						106,
						118
					]
				}
			],
			"symbols": [],
			"user_mentions": [],
			"urls": [
				{
					"url": "https://t.co/5lsrDJXfzb",
					"expanded_url": "https://twitter.com/i/web/status/844943801848414209",
					"display_url": "twitter.com/i/web/status/8…",
					"indices": [
						120,
						143
					]
				}
			]
		},
		"source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
		"in_reply_to_status_id": null,
		"in_reply_to_status_id_str": null,
		"in_reply_to_user_id": null,
		"in_reply_to_user_id_str": null,
		"in_reply_to_screen_name": null,
		"user": {
			"id": 25073877,
			"id_str": "25073877",
			"name": "Donald J. Trump",
			"screen_name": "realDonaldTrump",
			"location": "Washington, DC",
			"description": "45th President of the United States of America",
			"url": null,
			"entities": {
				"description": {
					"urls": []
				}
			},
			"protected": false,
			"followers_count": 27379007,
			"friends_count": 43,
			"listed_count": 67563,
			"created_at": "Wed Mar 18 13:46:38 +0000 2009",
			"favourites_count": 47,
			"utc_offset": -14400,
			"time_zone": "Eastern Time (US & Canada)",
			"geo_enabled": true,
			"verified": true,
			"statuses_count": 34705,
			"lang": "en",
			"contributors_enabled": false,
			"is_translator": false,
			"is_translation_enabled": true,
			"profile_background_color": "6D5C18",
			"profile_background_image_url": "http://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_tile": true,
			"profile_image_url": "http://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_image_url_https": "https://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_banner_url": "https://pbs.twimg.com/profile_banners/25073877/1489657715",
			"profile_link_color": "0D5B73",
			"profile_sidebar_border_color": "BDDCAD",
			"profile_sidebar_fill_color": "C5CEC0",
			"profile_text_color": "333333",
			"profile_use_background_image": true,
			"has_extended_profile": false,
			"default_profile": false,
			"default_profile_image": false,
			"following": null,
			"follow_request_sent": null,
			"notifications": null,
			"translator_type": "regular"
		},
		"geo": null,
		"coordinates": null,
		"place": null,
		"contributors": null,
		"is_quote_status": false,
		"retweet_count": 9306,
		"favorite_count": 41400,
		"favorited": false,
		"retweeted": false,
		"possibly_sensitive": false,
		"lang": "en"
	},
	{
		"created_at": "Thu Mar 23 15:16:24 +0000 2017",
		"id": 844930836663357400,
		"id_str": "844930836663357440",
		"text": "A great American, Kurt Cochran, was killed in the London terror attack. My prayers and condolences are with his family and friends.",
		"truncated": false,
		"entities": {
			"hashtags": [],
			"symbols": [],
			"user_mentions": [],
			"urls": []
		},
		"source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
		"in_reply_to_status_id": null,
		"in_reply_to_status_id_str": null,
		"in_reply_to_user_id": null,
		"in_reply_to_user_id_str": null,
		"in_reply_to_screen_name": null,
		"user": {
			"id": 25073877,
			"id_str": "25073877",
			"name": "Donald J. Trump",
			"screen_name": "realDonaldTrump",
			"location": "Washington, DC",
			"description": "45th President of the United States of America",
			"url": null,
			"entities": {
				"description": {
					"urls": []
				}
			},
			"protected": false,
			"followers_count": 27379007,
			"friends_count": 43,
			"listed_count": 67563,
			"created_at": "Wed Mar 18 13:46:38 +0000 2009",
			"favourites_count": 47,
			"utc_offset": -14400,
			"time_zone": "Eastern Time (US & Canada)",
			"geo_enabled": true,
			"verified": true,
			"statuses_count": 34705,
			"lang": "en",
			"contributors_enabled": false,
			"is_translator": false,
			"is_translation_enabled": true,
			"profile_background_color": "6D5C18",
			"profile_background_image_url": "http://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_tile": true,
			"profile_image_url": "http://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_image_url_https": "https://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_banner_url": "https://pbs.twimg.com/profile_banners/25073877/1489657715",
			"profile_link_color": "0D5B73",
			"profile_sidebar_border_color": "BDDCAD",
			"profile_sidebar_fill_color": "C5CEC0",
			"profile_text_color": "333333",
			"profile_use_background_image": true,
			"has_extended_profile": false,
			"default_profile": false,
			"default_profile_image": false,
			"following": null,
			"follow_request_sent": null,
			"notifications": null,
			"translator_type": "regular"
		},
		"geo": null,
		"coordinates": null,
		"place": null,
		"contributors": null,
		"is_quote_status": false,
		"retweet_count": 23521,
		"favorite_count": 118303,
		"favorited": false,
		"retweeted": false,
		"lang": "en"
	},
	{
		"created_at": "Thu Mar 23 12:18:33 +0000 2017",
		"id": 844886082663698400,
		"id_str": "844886082663698436",
		"text": "Just watched the totally biased and fake news reports of the so-called Russia story on NBC and ABC. Such dishonesty!",
		"truncated": false,
		"entities": {
			"hashtags": [],
			"symbols": [],
			"user_mentions": [],
			"urls": []
		},
		"source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
		"in_reply_to_status_id": null,
		"in_reply_to_status_id_str": null,
		"in_reply_to_user_id": null,
		"in_reply_to_user_id_str": null,
		"in_reply_to_screen_name": null,
		"user": {
			"id": 25073877,
			"id_str": "25073877",
			"name": "Donald J. Trump",
			"screen_name": "realDonaldTrump",
			"location": "Washington, DC",
			"description": "45th President of the United States of America",
			"url": null,
			"entities": {
				"description": {
					"urls": []
				}
			},
			"protected": false,
			"followers_count": 27379007,
			"friends_count": 43,
			"listed_count": 67563,
			"created_at": "Wed Mar 18 13:46:38 +0000 2009",
			"favourites_count": 47,
			"utc_offset": -14400,
			"time_zone": "Eastern Time (US & Canada)",
			"geo_enabled": true,
			"verified": true,
			"statuses_count": 34705,
			"lang": "en",
			"contributors_enabled": false,
			"is_translator": false,
			"is_translation_enabled": true,
			"profile_background_color": "6D5C18",
			"profile_background_image_url": "http://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_tile": true,
			"profile_image_url": "http://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_image_url_https": "https://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_banner_url": "https://pbs.twimg.com/profile_banners/25073877/1489657715",
			"profile_link_color": "0D5B73",
			"profile_sidebar_border_color": "BDDCAD",
			"profile_sidebar_fill_color": "C5CEC0",
			"profile_text_color": "333333",
			"profile_use_background_image": true,
			"has_extended_profile": false,
			"default_profile": false,
			"default_profile_image": false,
			"following": null,
			"follow_request_sent": null,
			"notifications": null,
			"translator_type": "regular"
		},
		"geo": null,
		"coordinates": null,
		"place": null,
		"contributors": null,
		"is_quote_status": false,
		"retweet_count": 21516,
		"favorite_count": 95698,
		"favorited": false,
		"retweeted": false,
		"lang": "en"
	},
	{
		"created_at": "Thu Mar 23 01:33:54 +0000 2017",
		"id": 844723847094026200,
		"id_str": "844723847094026242",
		"text": "Spoke to U.K. Prime Minister Theresa May today to offer condolences on the terrorist attack in London. She is strong and doing very well.",
		"truncated": false,
		"entities": {
			"hashtags": [],
			"symbols": [],
			"user_mentions": [],
			"urls": []
		},
		"source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
		"in_reply_to_status_id": null,
		"in_reply_to_status_id_str": null,
		"in_reply_to_user_id": null,
		"in_reply_to_user_id_str": null,
		"in_reply_to_screen_name": null,
		"user": {
			"id": 25073877,
			"id_str": "25073877",
			"name": "Donald J. Trump",
			"screen_name": "realDonaldTrump",
			"location": "Washington, DC",
			"description": "45th President of the United States of America",
			"url": null,
			"entities": {
				"description": {
					"urls": []
				}
			},
			"protected": false,
			"followers_count": 27379007,
			"friends_count": 43,
			"listed_count": 67563,
			"created_at": "Wed Mar 18 13:46:38 +0000 2009",
			"favourites_count": 47,
			"utc_offset": -14400,
			"time_zone": "Eastern Time (US & Canada)",
			"geo_enabled": true,
			"verified": true,
			"statuses_count": 34705,
			"lang": "en",
			"contributors_enabled": false,
			"is_translator": false,
			"is_translation_enabled": true,
			"profile_background_color": "6D5C18",
			"profile_background_image_url": "http://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_tile": true,
			"profile_image_url": "http://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_image_url_https": "https://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_banner_url": "https://pbs.twimg.com/profile_banners/25073877/1489657715",
			"profile_link_color": "0D5B73",
			"profile_sidebar_border_color": "BDDCAD",
			"profile_sidebar_fill_color": "C5CEC0",
			"profile_text_color": "333333",
			"profile_use_background_image": true,
			"has_extended_profile": false,
			"default_profile": false,
			"default_profile_image": false,
			"following": null,
			"follow_request_sent": null,
			"notifications": null,
			"translator_type": "regular"
		},
		"geo": null,
		"coordinates": null,
		"place": null,
		"contributors": null,
		"is_quote_status": false,
		"retweet_count": 20034,
		"favorite_count": 119041,
		"favorited": false,
		"retweeted": false,
		"lang": "en"
	},
	{
		"created_at": "Thu Mar 23 01:04:32 +0000 2017",
		"id": 844716458844311600,
		"id_str": "844716458844311553",
		"text": "RT @mitchellvii: Trump always ends up being right.  It's almost a little freaky.",
		"truncated": false,
		"entities": {
			"hashtags": [],
			"symbols": [],
			"user_mentions": [
				{
					"screen_name": "mitchellvii",
					"name": "Bill Mitchell",
					"id": 17980523,
					"id_str": "17980523",
					"indices": [
						3,
						15
					]
				}
			],
			"urls": []
		},
		"source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
		"in_reply_to_status_id": null,
		"in_reply_to_status_id_str": null,
		"in_reply_to_user_id": null,
		"in_reply_to_user_id_str": null,
		"in_reply_to_screen_name": null,
		"user": {
			"id": 25073877,
			"id_str": "25073877",
			"name": "Donald J. Trump",
			"screen_name": "realDonaldTrump",
			"location": "Washington, DC",
			"description": "45th President of the United States of America",
			"url": null,
			"entities": {
				"description": {
					"urls": []
				}
			},
			"protected": false,
			"followers_count": 27379007,
			"friends_count": 43,
			"listed_count": 67563,
			"created_at": "Wed Mar 18 13:46:38 +0000 2009",
			"favourites_count": 47,
			"utc_offset": -14400,
			"time_zone": "Eastern Time (US & Canada)",
			"geo_enabled": true,
			"verified": true,
			"statuses_count": 34705,
			"lang": "en",
			"contributors_enabled": false,
			"is_translator": false,
			"is_translation_enabled": true,
			"profile_background_color": "6D5C18",
			"profile_background_image_url": "http://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_tile": true,
			"profile_image_url": "http://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_image_url_https": "https://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_banner_url": "https://pbs.twimg.com/profile_banners/25073877/1489657715",
			"profile_link_color": "0D5B73",
			"profile_sidebar_border_color": "BDDCAD",
			"profile_sidebar_fill_color": "C5CEC0",
			"profile_text_color": "333333",
			"profile_use_background_image": true,
			"has_extended_profile": false,
			"default_profile": false,
			"default_profile_image": false,
			"following": null,
			"follow_request_sent": null,
			"notifications": null,
			"translator_type": "regular"
		},
		"geo": null,
		"coordinates": null,
		"place": null,
		"contributors": null,
		"retweeted_status": {
			"created_at": "Wed Mar 22 23:18:18 +0000 2017",
			"id": 844689725755703300,
			"id_str": "844689725755703296",
			"text": "Trump always ends up being right.  It's almost a little freaky.",
			"truncated": false,
			"entities": {
				"hashtags": [],
				"symbols": [],
				"user_mentions": [],
				"urls": []
			},
			"source": "<a href=\"https://about.twitter.com/products/tweetdeck\" rel=\"nofollow\">TweetDeck</a>",
			"in_reply_to_status_id": null,
			"in_reply_to_status_id_str": null,
			"in_reply_to_user_id": null,
			"in_reply_to_user_id_str": null,
			"in_reply_to_screen_name": null,
			"user": {
				"id": 17980523,
				"id_str": "17980523",
				"name": "Bill Mitchell",
				"screen_name": "mitchellvii",
				"location": "Charlotte, NC",
				"description": "Host of YourVoice™ Radio, at https://t.co/OTTbbHoFsC,  Sun-Thu at 8pm ET!  Support the show at https://t.co/0cVNqg8Pts",
				"url": "https://t.co/mwOB5DxaNK",
				"entities": {
					"url": {
						"urls": [
							{
								"url": "https://t.co/mwOB5DxaNK",
								"expanded_url": "https://www.yourvoiceradio.com",
								"display_url": "yourvoiceradio.com",
								"indices": [
									0,
									23
								]
							}
						]
					},
					"description": {
						"urls": [
							{
								"url": "https://t.co/OTTbbHoFsC",
								"expanded_url": "http://www.spreaker.com/user/mitchellvii",
								"display_url": "spreaker.com/user/mitchellv…",
								"indices": [
									29,
									52
								]
							},
							{
								"url": "https://t.co/0cVNqg8Pts",
								"expanded_url": "https://www.gofundme.com/yourvoiceradiodonate",
								"display_url": "gofundme.com/yourvoiceradio…",
								"indices": [
									95,
									118
								]
							}
						]
					}
				},
				"protected": false,
				"followers_count": 212475,
				"friends_count": 8839,
				"listed_count": 2093,
				"created_at": "Tue Dec 09 01:54:21 +0000 2008",
				"favourites_count": 17002,
				"utc_offset": -14400,
				"time_zone": "Eastern Time (US & Canada)",
				"geo_enabled": false,
				"verified": true,
				"statuses_count": 89546,
				"lang": "en",
				"contributors_enabled": false,
				"is_translator": false,
				"is_translation_enabled": false,
				"profile_background_color": "000000",
				"profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
				"profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
				"profile_background_tile": false,
				"profile_image_url": "http://pbs.twimg.com/profile_images/820454223024373760/txm5aWfm_normal.jpg",
				"profile_image_url_https": "https://pbs.twimg.com/profile_images/820454223024373760/txm5aWfm_normal.jpg",
				"profile_banner_url": "https://pbs.twimg.com/profile_banners/17980523/1470932562",
				"profile_link_color": "ABB8C2",
				"profile_sidebar_border_color": "000000",
				"profile_sidebar_fill_color": "000000",
				"profile_text_color": "000000",
				"profile_use_background_image": false,
				"has_extended_profile": true,
				"default_profile": false,
				"default_profile_image": false,
				"following": null,
				"follow_request_sent": null,
				"notifications": null,
				"translator_type": "none"
			},
			"geo": null,
			"coordinates": null,
			"place": null,
			"contributors": null,
			"is_quote_status": false,
			"retweet_count": 18820,
			"favorite_count": 71853,
			"favorited": false,
			"retweeted": false,
			"lang": "en"
		},
		"is_quote_status": false,
		"retweet_count": 18820,
		"favorite_count": 0,
		"favorited": false,
		"retweeted": false,
		"lang": "en"
	},
	{
		"created_at": "Thu Mar 23 01:03:18 +0000 2017",
		"id": 844716149828993000,
		"id_str": "844716149828993025",
		"text": "RT @mitchellvii: EXACTLY AS I SAID - House Intel Chair: We Cannot Rule Out Sr. Obama Officials Were Involved in Trump Surveillance https://…",
		"truncated": false,
		"entities": {
			"hashtags": [],
			"symbols": [],
			"user_mentions": [
				{
					"screen_name": "mitchellvii",
					"name": "Bill Mitchell",
					"id": 17980523,
					"id_str": "17980523",
					"indices": [
						3,
						15
					]
				}
			],
			"urls": []
		},
		"source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
		"in_reply_to_status_id": null,
		"in_reply_to_status_id_str": null,
		"in_reply_to_user_id": null,
		"in_reply_to_user_id_str": null,
		"in_reply_to_screen_name": null,
		"user": {
			"id": 25073877,
			"id_str": "25073877",
			"name": "Donald J. Trump",
			"screen_name": "realDonaldTrump",
			"location": "Washington, DC",
			"description": "45th President of the United States of America",
			"url": null,
			"entities": {
				"description": {
					"urls": []
				}
			},
			"protected": false,
			"followers_count": 27379007,
			"friends_count": 43,
			"listed_count": 67563,
			"created_at": "Wed Mar 18 13:46:38 +0000 2009",
			"favourites_count": 47,
			"utc_offset": -14400,
			"time_zone": "Eastern Time (US & Canada)",
			"geo_enabled": true,
			"verified": true,
			"statuses_count": 34705,
			"lang": "en",
			"contributors_enabled": false,
			"is_translator": false,
			"is_translation_enabled": true,
			"profile_background_color": "6D5C18",
			"profile_background_image_url": "http://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_tile": true,
			"profile_image_url": "http://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_image_url_https": "https://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_banner_url": "https://pbs.twimg.com/profile_banners/25073877/1489657715",
			"profile_link_color": "0D5B73",
			"profile_sidebar_border_color": "BDDCAD",
			"profile_sidebar_fill_color": "C5CEC0",
			"profile_text_color": "333333",
			"profile_use_background_image": true,
			"has_extended_profile": false,
			"default_profile": false,
			"default_profile_image": false,
			"following": null,
			"follow_request_sent": null,
			"notifications": null,
			"translator_type": "regular"
		},
		"geo": null,
		"coordinates": null,
		"place": null,
		"contributors": null,
		"retweeted_status": {
			"created_at": "Thu Mar 23 00:29:35 +0000 2017",
			"id": 844707663187456000,
			"id_str": "844707663187456000",
			"text": "EXACTLY AS I SAID - House Intel Chair: We Cannot Rule Out Sr. Obama Officials Were Involved in Trump Surveillance https://t.co/ernZeDQIfy",
			"truncated": false,
			"entities": {
				"hashtags": [],
				"symbols": [],
				"user_mentions": [],
				"urls": [
					{
						"url": "https://t.co/ernZeDQIfy",
						"expanded_url": "http://www.thegatewaypundit.com/2017/03/boom-house-intel-chair-cannot-rule-sr-obama-officials-involved-trump-surveillance/",
						"display_url": "thegatewaypundit.com/2017/03/boom-h…",
						"indices": [
							114,
							137
						]
					}
				]
			},
			"source": "<a href=\"http://twitter.com\" rel=\"nofollow\">Twitter Web Client</a>",
			"in_reply_to_status_id": null,
			"in_reply_to_status_id_str": null,
			"in_reply_to_user_id": null,
			"in_reply_to_user_id_str": null,
			"in_reply_to_screen_name": null,
			"user": {
				"id": 17980523,
				"id_str": "17980523",
				"name": "Bill Mitchell",
				"screen_name": "mitchellvii",
				"location": "Charlotte, NC",
				"description": "Host of YourVoice™ Radio, at https://t.co/OTTbbHoFsC,  Sun-Thu at 8pm ET!  Support the show at https://t.co/0cVNqg8Pts",
				"url": "https://t.co/mwOB5DxaNK",
				"entities": {
					"url": {
						"urls": [
							{
								"url": "https://t.co/mwOB5DxaNK",
								"expanded_url": "https://www.yourvoiceradio.com",
								"display_url": "yourvoiceradio.com",
								"indices": [
									0,
									23
								]
							}
						]
					},
					"description": {
						"urls": [
							{
								"url": "https://t.co/OTTbbHoFsC",
								"expanded_url": "http://www.spreaker.com/user/mitchellvii",
								"display_url": "spreaker.com/user/mitchellv…",
								"indices": [
									29,
									52
								]
							},
							{
								"url": "https://t.co/0cVNqg8Pts",
								"expanded_url": "https://www.gofundme.com/yourvoiceradiodonate",
								"display_url": "gofundme.com/yourvoiceradio…",
								"indices": [
									95,
									118
								]
							}
						]
					}
				},
				"protected": false,
				"followers_count": 212475,
				"friends_count": 8839,
				"listed_count": 2093,
				"created_at": "Tue Dec 09 01:54:21 +0000 2008",
				"favourites_count": 17002,
				"utc_offset": -14400,
				"time_zone": "Eastern Time (US & Canada)",
				"geo_enabled": false,
				"verified": true,
				"statuses_count": 89546,
				"lang": "en",
				"contributors_enabled": false,
				"is_translator": false,
				"is_translation_enabled": false,
				"profile_background_color": "000000",
				"profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
				"profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
				"profile_background_tile": false,
				"profile_image_url": "http://pbs.twimg.com/profile_images/820454223024373760/txm5aWfm_normal.jpg",
				"profile_image_url_https": "https://pbs.twimg.com/profile_images/820454223024373760/txm5aWfm_normal.jpg",
				"profile_banner_url": "https://pbs.twimg.com/profile_banners/17980523/1470932562",
				"profile_link_color": "ABB8C2",
				"profile_sidebar_border_color": "000000",
				"profile_sidebar_fill_color": "000000",
				"profile_text_color": "000000",
				"profile_use_background_image": false,
				"has_extended_profile": true,
				"default_profile": false,
				"default_profile_image": false,
				"following": null,
				"follow_request_sent": null,
				"notifications": null,
				"translator_type": "none"
			},
			"geo": null,
			"coordinates": null,
			"place": null,
			"contributors": null,
			"is_quote_status": false,
			"retweet_count": 13884,
			"favorite_count": 40148,
			"favorited": false,
			"retweeted": false,
			"possibly_sensitive": false,
			"lang": "en"
		},
		"is_quote_status": false,
		"retweet_count": 13884,
		"favorite_count": 0,
		"favorited": false,
		"retweeted": false,
		"lang": "en"
	},
	{
		"created_at": "Wed Mar 22 13:09:35 +0000 2017",
		"id": 844536536930619400,
		"id_str": "844536536930619393",
		"text": "Big day for healthcare. Working hard!",
		"truncated": false,
		"entities": {
			"hashtags": [],
			"symbols": [],
			"user_mentions": [],
			"urls": []
		},
		"source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
		"in_reply_to_status_id": null,
		"in_reply_to_status_id_str": null,
		"in_reply_to_user_id": null,
		"in_reply_to_user_id_str": null,
		"in_reply_to_screen_name": null,
		"user": {
			"id": 25073877,
			"id_str": "25073877",
			"name": "Donald J. Trump",
			"screen_name": "realDonaldTrump",
			"location": "Washington, DC",
			"description": "45th President of the United States of America",
			"url": null,
			"entities": {
				"description": {
					"urls": []
				}
			},
			"protected": false,
			"followers_count": 27379007,
			"friends_count": 43,
			"listed_count": 67563,
			"created_at": "Wed Mar 18 13:46:38 +0000 2009",
			"favourites_count": 47,
			"utc_offset": -14400,
			"time_zone": "Eastern Time (US & Canada)",
			"geo_enabled": true,
			"verified": true,
			"statuses_count": 34705,
			"lang": "en",
			"contributors_enabled": false,
			"is_translator": false,
			"is_translation_enabled": true,
			"profile_background_color": "6D5C18",
			"profile_background_image_url": "http://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_tile": true,
			"profile_image_url": "http://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_image_url_https": "https://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_banner_url": "https://pbs.twimg.com/profile_banners/25073877/1489657715",
			"profile_link_color": "0D5B73",
			"profile_sidebar_border_color": "BDDCAD",
			"profile_sidebar_fill_color": "C5CEC0",
			"profile_text_color": "333333",
			"profile_use_background_image": true,
			"has_extended_profile": false,
			"default_profile": false,
			"default_profile_image": false,
			"following": null,
			"follow_request_sent": null,
			"notifications": null,
			"translator_type": "regular"
		},
		"geo": null,
		"coordinates": null,
		"place": null,
		"contributors": null,
		"is_quote_status": false,
		"retweet_count": 13237,
		"favorite_count": 90803,
		"favorited": false,
		"retweeted": false,
		"lang": "en"
	},
	{
		"created_at": "Tue Mar 21 18:12:05 +0000 2017",
		"id": 844250273740738600,
		"id_str": "844250273740738562",
		"text": "Today on #NationalAgDay, we honor our great American farmers &amp; ranchers. Their hard work &amp; dedication are ingrained… https://t.co/IpGRhly2zj",
		"truncated": true,
		"entities": {
			"hashtags": [
				{
					"text": "NationalAgDay",
					"indices": [
						9,
						23
					]
				}
			],
			"symbols": [],
			"user_mentions": [],
			"urls": [
				{
					"url": "https://t.co/IpGRhly2zj",
					"expanded_url": "https://twitter.com/i/web/status/844250273740738562",
					"display_url": "twitter.com/i/web/status/8…",
					"indices": [
						125,
						148
					]
				}
			]
		},
		"source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
		"in_reply_to_status_id": null,
		"in_reply_to_status_id_str": null,
		"in_reply_to_user_id": null,
		"in_reply_to_user_id_str": null,
		"in_reply_to_screen_name": null,
		"user": {
			"id": 25073877,
			"id_str": "25073877",
			"name": "Donald J. Trump",
			"screen_name": "realDonaldTrump",
			"location": "Washington, DC",
			"description": "45th President of the United States of America",
			"url": null,
			"entities": {
				"description": {
					"urls": []
				}
			},
			"protected": false,
			"followers_count": 27379007,
			"friends_count": 43,
			"listed_count": 67563,
			"created_at": "Wed Mar 18 13:46:38 +0000 2009",
			"favourites_count": 47,
			"utc_offset": -14400,
			"time_zone": "Eastern Time (US & Canada)",
			"geo_enabled": true,
			"verified": true,
			"statuses_count": 34705,
			"lang": "en",
			"contributors_enabled": false,
			"is_translator": false,
			"is_translation_enabled": true,
			"profile_background_color": "6D5C18",
			"profile_background_image_url": "http://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_tile": true,
			"profile_image_url": "http://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_image_url_https": "https://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_banner_url": "https://pbs.twimg.com/profile_banners/25073877/1489657715",
			"profile_link_color": "0D5B73",
			"profile_sidebar_border_color": "BDDCAD",
			"profile_sidebar_fill_color": "C5CEC0",
			"profile_text_color": "333333",
			"profile_use_background_image": true,
			"has_extended_profile": false,
			"default_profile": false,
			"default_profile_image": false,
			"following": null,
			"follow_request_sent": null,
			"notifications": null,
			"translator_type": "regular"
		},
		"geo": null,
		"coordinates": null,
		"place": null,
		"contributors": null,
		"is_quote_status": false,
		"retweet_count": 14959,
		"favorite_count": 67736,
		"favorited": false,
		"retweeted": false,
		"possibly_sensitive": false,
		"lang": "en"
	},
	{
		"created_at": "Tue Mar 21 17:33:23 +0000 2017",
		"id": 844240534562594800,
		"id_str": "844240534562594817",
		"text": "Honored to sign S.442 today. With this legislation, we support @NASA's scientists, engineers, and astronauts in the… https://t.co/Z5VwluvJQx",
		"truncated": true,
		"entities": {
			"hashtags": [],
			"symbols": [],
			"user_mentions": [
				{
					"screen_name": "NASA",
					"name": "NASA",
					"id": 11348282,
					"id_str": "11348282",
					"indices": [
						63,
						68
					]
				}
			],
			"urls": [
				{
					"url": "https://t.co/Z5VwluvJQx",
					"expanded_url": "https://twitter.com/i/web/status/844240534562594817",
					"display_url": "twitter.com/i/web/status/8…",
					"indices": [
						117,
						140
					]
				}
			]
		},
		"source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
		"in_reply_to_status_id": null,
		"in_reply_to_status_id_str": null,
		"in_reply_to_user_id": null,
		"in_reply_to_user_id_str": null,
		"in_reply_to_screen_name": null,
		"user": {
			"id": 25073877,
			"id_str": "25073877",
			"name": "Donald J. Trump",
			"screen_name": "realDonaldTrump",
			"location": "Washington, DC",
			"description": "45th President of the United States of America",
			"url": null,
			"entities": {
				"description": {
					"urls": []
				}
			},
			"protected": false,
			"followers_count": 27379007,
			"friends_count": 43,
			"listed_count": 67563,
			"created_at": "Wed Mar 18 13:46:38 +0000 2009",
			"favourites_count": 47,
			"utc_offset": -14400,
			"time_zone": "Eastern Time (US & Canada)",
			"geo_enabled": true,
			"verified": true,
			"statuses_count": 34705,
			"lang": "en",
			"contributors_enabled": false,
			"is_translator": false,
			"is_translation_enabled": true,
			"profile_background_color": "6D5C18",
			"profile_background_image_url": "http://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_tile": true,
			"profile_image_url": "http://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_image_url_https": "https://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_banner_url": "https://pbs.twimg.com/profile_banners/25073877/1489657715",
			"profile_link_color": "0D5B73",
			"profile_sidebar_border_color": "BDDCAD",
			"profile_sidebar_fill_color": "C5CEC0",
			"profile_text_color": "333333",
			"profile_use_background_image": true,
			"has_extended_profile": false,
			"default_profile": false,
			"default_profile_image": false,
			"following": null,
			"follow_request_sent": null,
			"notifications": null,
			"translator_type": "regular"
		},
		"geo": null,
		"coordinates": null,
		"place": null,
		"contributors": null,
		"is_quote_status": false,
		"retweet_count": 15124,
		"favorite_count": 67453,
		"favorited": false,
		"retweeted": false,
		"possibly_sensitive": false,
		"lang": "en"
	},
	{
		"created_at": "Tue Mar 21 17:02:31 +0000 2017",
		"id": 844232766711648300,
		"id_str": "844232766711648256",
		"text": "Joined the @HouseGOP Conference this morning at the U.S. Capitol. https://t.co/03e4YBIWr0 #PassTheBill #MAGA🇺🇸… https://t.co/3swdFWGQtP",
		"truncated": true,
		"entities": {
			"hashtags": [
				{
					"text": "PassTheBill",
					"indices": [
						90,
						102
					]
				},
				{
					"text": "MAGA",
					"indices": [
						103,
						108
					]
				}
			],
			"symbols": [],
			"user_mentions": [
				{
					"screen_name": "HouseGOP",
					"name": "House Republicans",
					"id": 15207668,
					"id_str": "15207668",
					"indices": [
						11,
						20
					]
				}
			],
			"urls": [
				{
					"url": "https://t.co/03e4YBIWr0",
					"expanded_url": "http://PassTheBill.GOP",
					"display_url": "PassTheBill.GOP",
					"indices": [
						66,
						89
					]
				},
				{
					"url": "https://t.co/3swdFWGQtP",
					"expanded_url": "https://twitter.com/i/web/status/844232766711648256",
					"display_url": "twitter.com/i/web/status/8…",
					"indices": [
						112,
						135
					]
				}
			]
		},
		"source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
		"in_reply_to_status_id": null,
		"in_reply_to_status_id_str": null,
		"in_reply_to_user_id": null,
		"in_reply_to_user_id_str": null,
		"in_reply_to_screen_name": null,
		"user": {
			"id": 25073877,
			"id_str": "25073877",
			"name": "Donald J. Trump",
			"screen_name": "realDonaldTrump",
			"location": "Washington, DC",
			"description": "45th President of the United States of America",
			"url": null,
			"entities": {
				"description": {
					"urls": []
				}
			},
			"protected": false,
			"followers_count": 27379007,
			"friends_count": 43,
			"listed_count": 67563,
			"created_at": "Wed Mar 18 13:46:38 +0000 2009",
			"favourites_count": 47,
			"utc_offset": -14400,
			"time_zone": "Eastern Time (US & Canada)",
			"geo_enabled": true,
			"verified": true,
			"statuses_count": 34705,
			"lang": "en",
			"contributors_enabled": false,
			"is_translator": false,
			"is_translation_enabled": true,
			"profile_background_color": "6D5C18",
			"profile_background_image_url": "http://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_tile": true,
			"profile_image_url": "http://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_image_url_https": "https://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_banner_url": "https://pbs.twimg.com/profile_banners/25073877/1489657715",
			"profile_link_color": "0D5B73",
			"profile_sidebar_border_color": "BDDCAD",
			"profile_sidebar_fill_color": "C5CEC0",
			"profile_text_color": "333333",
			"profile_use_background_image": true,
			"has_extended_profile": false,
			"default_profile": false,
			"default_profile_image": false,
			"following": null,
			"follow_request_sent": null,
			"notifications": null,
			"translator_type": "regular"
		},
		"geo": null,
		"coordinates": null,
		"place": null,
		"contributors": null,
		"is_quote_status": false,
		"retweet_count": 6135,
		"favorite_count": 36194,
		"favorited": false,
		"retweeted": false,
		"possibly_sensitive": false,
		"lang": "en"
	},
	{
		"created_at": "Tue Mar 21 02:18:20 +0000 2017",
		"id": 844010257454153700,
		"id_str": "844010257454153729",
		"text": "Thank you Louisville, Kentucky. Together, we will MAKE AMERICA SAFE AND GREAT AGAIN! https://t.co/qGgWEWUvek",
		"truncated": false,
		"entities": {
			"hashtags": [],
			"symbols": [],
			"user_mentions": [],
			"urls": [],
			"media": [
				{
					"id": 844009634142871600,
					"id_str": "844009634142871552",
					"indices": [
						85,
						108
					],
					"media_url": "http://pbs.twimg.com/ext_tw_video_thumb/844009634142871552/pu/img/D-BYfkZd187Z_pu5.jpg",
					"media_url_https": "https://pbs.twimg.com/ext_tw_video_thumb/844009634142871552/pu/img/D-BYfkZd187Z_pu5.jpg",
					"url": "https://t.co/qGgWEWUvek",
					"display_url": "pic.twitter.com/qGgWEWUvek",
					"expanded_url": "https://twitter.com/realDonaldTrump/status/844010257454153729/video/1",
					"type": "photo",
					"sizes": {
						"thumb": {
							"w": 150,
							"h": 150,
							"resize": "crop"
						},
						"medium": {
							"w": 600,
							"h": 338,
							"resize": "fit"
						},
						"small": {
							"w": 340,
							"h": 191,
							"resize": "fit"
						},
						"large": {
							"w": 1024,
							"h": 576,
							"resize": "fit"
						}
					}
				}
			]
		},
		"extended_entities": {
			"media": [
				{
					"id": 844009634142871600,
					"id_str": "844009634142871552",
					"indices": [
						85,
						108
					],
					"media_url": "http://pbs.twimg.com/ext_tw_video_thumb/844009634142871552/pu/img/D-BYfkZd187Z_pu5.jpg",
					"media_url_https": "https://pbs.twimg.com/ext_tw_video_thumb/844009634142871552/pu/img/D-BYfkZd187Z_pu5.jpg",
					"url": "https://t.co/qGgWEWUvek",
					"display_url": "pic.twitter.com/qGgWEWUvek",
					"expanded_url": "https://twitter.com/realDonaldTrump/status/844010257454153729/video/1",
					"type": "video",
					"sizes": {
						"thumb": {
							"w": 150,
							"h": 150,
							"resize": "crop"
						},
						"medium": {
							"w": 600,
							"h": 338,
							"resize": "fit"
						},
						"small": {
							"w": 340,
							"h": 191,
							"resize": "fit"
						},
						"large": {
							"w": 1024,
							"h": 576,
							"resize": "fit"
						}
					},
					"video_info": {
						"aspect_ratio": [
							16,
							9
						],
						"duration_millis": 136967,
						"variants": [
							{
								"bitrate": 320000,
								"content_type": "video/mp4",
								"url": "https://video.twimg.com/ext_tw_video/844009634142871552/pu/vid/320x180/a-sOXlF8gzcnyzOx.mp4"
							},
							{
								"bitrate": 2176000,
								"content_type": "video/mp4",
								"url": "https://video.twimg.com/ext_tw_video/844009634142871552/pu/vid/1280x720/58Mk6ngP79_6AlXI.mp4"
							},
							{
								"bitrate": 832000,
								"content_type": "video/mp4",
								"url": "https://video.twimg.com/ext_tw_video/844009634142871552/pu/vid/640x360/w8Z79QONtHLosjDK.mp4"
							},
							{
								"content_type": "application/x-mpegURL",
								"url": "https://video.twimg.com/ext_tw_video/844009634142871552/pu/pl/-YEaog4FswdKmamG.m3u8"
							}
						]
					},
					"additional_media_info": {
						"monetizable": false
					}
				}
			]
		},
		"source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
		"in_reply_to_status_id": null,
		"in_reply_to_status_id_str": null,
		"in_reply_to_user_id": null,
		"in_reply_to_user_id_str": null,
		"in_reply_to_screen_name": null,
		"user": {
			"id": 25073877,
			"id_str": "25073877",
			"name": "Donald J. Trump",
			"screen_name": "realDonaldTrump",
			"location": "Washington, DC",
			"description": "45th President of the United States of America",
			"url": null,
			"entities": {
				"description": {
					"urls": []
				}
			},
			"protected": false,
			"followers_count": 27379007,
			"friends_count": 43,
			"listed_count": 67563,
			"created_at": "Wed Mar 18 13:46:38 +0000 2009",
			"favourites_count": 47,
			"utc_offset": -14400,
			"time_zone": "Eastern Time (US & Canada)",
			"geo_enabled": true,
			"verified": true,
			"statuses_count": 34705,
			"lang": "en",
			"contributors_enabled": false,
			"is_translator": false,
			"is_translation_enabled": true,
			"profile_background_color": "6D5C18",
			"profile_background_image_url": "http://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_tile": true,
			"profile_image_url": "http://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_image_url_https": "https://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_banner_url": "https://pbs.twimg.com/profile_banners/25073877/1489657715",
			"profile_link_color": "0D5B73",
			"profile_sidebar_border_color": "BDDCAD",
			"profile_sidebar_fill_color": "C5CEC0",
			"profile_text_color": "333333",
			"profile_use_background_image": true,
			"has_extended_profile": false,
			"default_profile": false,
			"default_profile_image": false,
			"following": null,
			"follow_request_sent": null,
			"notifications": null,
			"translator_type": "regular"
		},
		"geo": null,
		"coordinates": null,
		"place": null,
		"contributors": null,
		"is_quote_status": false,
		"retweet_count": 14804,
		"favorite_count": 76923,
		"favorited": false,
		"retweeted": false,
		"possibly_sensitive": false,
		"lang": "en"
	},
	{
		"created_at": "Mon Mar 20 23:03:36 +0000 2017",
		"id": 843961248811225100,
		"id_str": "843961248811225089",
		"text": "Thank you Louisville, Kentucky- on my way! #MAGA🇺🇸 https://t.co/3QsBsib6kt",
		"truncated": false,
		"entities": {
			"hashtags": [
				{
					"text": "MAGA",
					"indices": [
						43,
						48
					]
				}
			],
			"symbols": [],
			"user_mentions": [],
			"urls": [],
			"media": [
				{
					"id": 843961242347847700,
					"id_str": "843961242347847681",
					"indices": [
						51,
						74
					],
					"media_url": "http://pbs.twimg.com/media/C7ZaR0ZXQAEHtjy.jpg",
					"media_url_https": "https://pbs.twimg.com/media/C7ZaR0ZXQAEHtjy.jpg",
					"url": "https://t.co/3QsBsib6kt",
					"display_url": "pic.twitter.com/3QsBsib6kt",
					"expanded_url": "https://twitter.com/realDonaldTrump/status/843961248811225089/photo/1",
					"type": "photo",
					"sizes": {
						"thumb": {
							"w": 150,
							"h": 150,
							"resize": "crop"
						},
						"large": {
							"w": 854,
							"h": 336,
							"resize": "fit"
						},
						"medium": {
							"w": 854,
							"h": 336,
							"resize": "fit"
						},
						"small": {
							"w": 680,
							"h": 268,
							"resize": "fit"
						}
					}
				}
			]
		},
		"extended_entities": {
			"media": [
				{
					"id": 843961242347847700,
					"id_str": "843961242347847681",
					"indices": [
						51,
						74
					],
					"media_url": "http://pbs.twimg.com/media/C7ZaR0ZXQAEHtjy.jpg",
					"media_url_https": "https://pbs.twimg.com/media/C7ZaR0ZXQAEHtjy.jpg",
					"url": "https://t.co/3QsBsib6kt",
					"display_url": "pic.twitter.com/3QsBsib6kt",
					"expanded_url": "https://twitter.com/realDonaldTrump/status/843961248811225089/photo/1",
					"type": "photo",
					"sizes": {
						"thumb": {
							"w": 150,
							"h": 150,
							"resize": "crop"
						},
						"large": {
							"w": 854,
							"h": 336,
							"resize": "fit"
						},
						"medium": {
							"w": 854,
							"h": 336,
							"resize": "fit"
						},
						"small": {
							"w": 680,
							"h": 268,
							"resize": "fit"
						}
					}
				},
				{
					"id": 843961242360451100,
					"id_str": "843961242360451072",
					"indices": [
						51,
						74
					],
					"media_url": "http://pbs.twimg.com/media/C7ZaR0cXkAAGeIR.jpg",
					"media_url_https": "https://pbs.twimg.com/media/C7ZaR0cXkAAGeIR.jpg",
					"url": "https://t.co/3QsBsib6kt",
					"display_url": "pic.twitter.com/3QsBsib6kt",
					"expanded_url": "https://twitter.com/realDonaldTrump/status/843961248811225089/photo/1",
					"type": "photo",
					"sizes": {
						"small": {
							"w": 667,
							"h": 174,
							"resize": "fit"
						},
						"medium": {
							"w": 667,
							"h": 174,
							"resize": "fit"
						},
						"thumb": {
							"w": 150,
							"h": 150,
							"resize": "crop"
						},
						"large": {
							"w": 667,
							"h": 174,
							"resize": "fit"
						}
					}
				},
				{
					"id": 843961242356236300,
					"id_str": "843961242356236288",
					"indices": [
						51,
						74
					],
					"media_url": "http://pbs.twimg.com/media/C7ZaR0bXQAAC6rG.jpg",
					"media_url_https": "https://pbs.twimg.com/media/C7ZaR0bXQAAC6rG.jpg",
					"url": "https://t.co/3QsBsib6kt",
					"display_url": "pic.twitter.com/3QsBsib6kt",
					"expanded_url": "https://twitter.com/realDonaldTrump/status/843961248811225089/photo/1",
					"type": "photo",
					"sizes": {
						"thumb": {
							"w": 150,
							"h": 150,
							"resize": "crop"
						},
						"medium": {
							"w": 730,
							"h": 272,
							"resize": "fit"
						},
						"large": {
							"w": 730,
							"h": 272,
							"resize": "fit"
						},
						"small": {
							"w": 680,
							"h": 253,
							"resize": "fit"
						}
					}
				},
				{
					"id": 843961242494689300,
					"id_str": "843961242494689281",
					"indices": [
						51,
						74
					],
					"media_url": "http://pbs.twimg.com/media/C7ZaR08X4AE3s_E.jpg",
					"media_url_https": "https://pbs.twimg.com/media/C7ZaR08X4AE3s_E.jpg",
					"url": "https://t.co/3QsBsib6kt",
					"display_url": "pic.twitter.com/3QsBsib6kt",
					"expanded_url": "https://twitter.com/realDonaldTrump/status/843961248811225089/photo/1",
					"type": "photo",
					"sizes": {
						"large": {
							"w": 681,
							"h": 384,
							"resize": "fit"
						},
						"small": {
							"w": 680,
							"h": 383,
							"resize": "fit"
						},
						"thumb": {
							"w": 150,
							"h": 150,
							"resize": "crop"
						},
						"medium": {
							"w": 681,
							"h": 384,
							"resize": "fit"
						}
					}
				}
			]
		},
		"source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
		"in_reply_to_status_id": null,
		"in_reply_to_status_id_str": null,
		"in_reply_to_user_id": null,
		"in_reply_to_user_id_str": null,
		"in_reply_to_screen_name": null,
		"user": {
			"id": 25073877,
			"id_str": "25073877",
			"name": "Donald J. Trump",
			"screen_name": "realDonaldTrump",
			"location": "Washington, DC",
			"description": "45th President of the United States of America",
			"url": null,
			"entities": {
				"description": {
					"urls": []
				}
			},
			"protected": false,
			"followers_count": 27379007,
			"friends_count": 43,
			"listed_count": 67563,
			"created_at": "Wed Mar 18 13:46:38 +0000 2009",
			"favourites_count": 47,
			"utc_offset": -14400,
			"time_zone": "Eastern Time (US & Canada)",
			"geo_enabled": true,
			"verified": true,
			"statuses_count": 34705,
			"lang": "en",
			"contributors_enabled": false,
			"is_translator": false,
			"is_translation_enabled": true,
			"profile_background_color": "6D5C18",
			"profile_background_image_url": "http://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_tile": true,
			"profile_image_url": "http://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_image_url_https": "https://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_banner_url": "https://pbs.twimg.com/profile_banners/25073877/1489657715",
			"profile_link_color": "0D5B73",
			"profile_sidebar_border_color": "BDDCAD",
			"profile_sidebar_fill_color": "C5CEC0",
			"profile_text_color": "333333",
			"profile_use_background_image": true,
			"has_extended_profile": false,
			"default_profile": false,
			"default_profile_image": false,
			"following": null,
			"follow_request_sent": null,
			"notifications": null,
			"translator_type": "regular"
		},
		"geo": null,
		"coordinates": null,
		"place": null,
		"contributors": null,
		"is_quote_status": false,
		"retweet_count": 11287,
		"favorite_count": 61862,
		"favorited": false,
		"retweeted": false,
		"possibly_sensitive": false,
		"lang": "en"
	},
	{
		"created_at": "Mon Mar 20 17:15:18 +0000 2017",
		"id": 843873596963459100,
		"id_str": "843873596963459072",
		"text": "Congratulations Eric &amp; Lara. Very proud and happy for the two of you! https://t.co/s0T3cTQc40",
		"truncated": false,
		"entities": {
			"hashtags": [],
			"symbols": [],
			"user_mentions": [],
			"urls": [
				{
					"url": "https://t.co/s0T3cTQc40",
					"expanded_url": "https://twitter.com/erictrump/status/843854763825528832",
					"display_url": "twitter.com/erictrump/stat…",
					"indices": [
						74,
						97
					]
				}
			]
		},
		"source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
		"in_reply_to_status_id": null,
		"in_reply_to_status_id_str": null,
		"in_reply_to_user_id": null,
		"in_reply_to_user_id_str": null,
		"in_reply_to_screen_name": null,
		"user": {
			"id": 25073877,
			"id_str": "25073877",
			"name": "Donald J. Trump",
			"screen_name": "realDonaldTrump",
			"location": "Washington, DC",
			"description": "45th President of the United States of America",
			"url": null,
			"entities": {
				"description": {
					"urls": []
				}
			},
			"protected": false,
			"followers_count": 27379007,
			"friends_count": 43,
			"listed_count": 67563,
			"created_at": "Wed Mar 18 13:46:38 +0000 2009",
			"favourites_count": 47,
			"utc_offset": -14400,
			"time_zone": "Eastern Time (US & Canada)",
			"geo_enabled": true,
			"verified": true,
			"statuses_count": 34705,
			"lang": "en",
			"contributors_enabled": false,
			"is_translator": false,
			"is_translation_enabled": true,
			"profile_background_color": "6D5C18",
			"profile_background_image_url": "http://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_tile": true,
			"profile_image_url": "http://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_image_url_https": "https://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_banner_url": "https://pbs.twimg.com/profile_banners/25073877/1489657715",
			"profile_link_color": "0D5B73",
			"profile_sidebar_border_color": "BDDCAD",
			"profile_sidebar_fill_color": "C5CEC0",
			"profile_text_color": "333333",
			"profile_use_background_image": true,
			"has_extended_profile": false,
			"default_profile": false,
			"default_profile_image": false,
			"following": null,
			"follow_request_sent": null,
			"notifications": null,
			"translator_type": "regular"
		},
		"geo": null,
		"coordinates": null,
		"place": null,
		"contributors": null,
		"is_quote_status": true,
		"quoted_status_id": 843854763825528800,
		"quoted_status_id_str": "843854763825528832",
		"quoted_status": {
			"created_at": "Mon Mar 20 16:00:28 +0000 2017",
			"id": 843854763825528800,
			"id_str": "843854763825528832",
			"text": ".@LaraLeaTrump &amp; I are excited to announce that we are adding a boy to #TeamTrump in September. It's been an amazin… https://t.co/CgQ2GfjKYk",
			"truncated": true,
			"entities": {
				"hashtags": [
					{
						"text": "TeamTrump",
						"indices": [
							75,
							85
						]
					}
				],
				"symbols": [],
				"user_mentions": [
					{
						"screen_name": "LaraLeaTrump",
						"name": "Lara Trump",
						"id": 75541946,
						"id_str": "75541946",
						"indices": [
							1,
							14
						]
					}
				],
				"urls": [
					{
						"url": "https://t.co/CgQ2GfjKYk",
						"expanded_url": "https://twitter.com/i/web/status/843854763825528832",
						"display_url": "twitter.com/i/web/status/8…",
						"indices": [
							121,
							144
						]
					}
				]
			},
			"source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
			"in_reply_to_status_id": null,
			"in_reply_to_status_id_str": null,
			"in_reply_to_user_id": null,
			"in_reply_to_user_id_str": null,
			"in_reply_to_screen_name": null,
			"user": {
				"id": 39349894,
				"id_str": "39349894",
				"name": "Eric Trump",
				"screen_name": "EricTrump",
				"location": "",
				"description": "Executive Vice President of The @Trump Organization. Husband to @LaraLeaTrump. Large advocate of @StJude Children's Research Hospital. #MakeAmericaGreatAgain",
				"url": "https://t.co/uwwNiWPLLr",
				"entities": {
					"url": {
						"urls": [
							{
								"url": "https://t.co/uwwNiWPLLr",
								"expanded_url": "http://www.Trump.com",
								"display_url": "Trump.com",
								"indices": [
									0,
									23
								]
							}
						]
					},
					"description": {
						"urls": []
					}
				},
				"protected": false,
				"followers_count": 1113671,
				"friends_count": 491,
				"listed_count": 4097,
				"created_at": "Mon May 11 21:42:30 +0000 2009",
				"favourites_count": 4445,
				"utc_offset": -18000,
				"time_zone": "Quito",
				"geo_enabled": true,
				"verified": true,
				"statuses_count": 4727,
				"lang": "en",
				"contributors_enabled": false,
				"is_translator": false,
				"is_translation_enabled": false,
				"profile_background_color": "000000",
				"profile_background_image_url": "http://pbs.twimg.com/profile_background_images/606905456/lnr59qa2t3dugk1il0kx.jpeg",
				"profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/606905456/lnr59qa2t3dugk1il0kx.jpeg",
				"profile_background_tile": true,
				"profile_image_url": "http://pbs.twimg.com/profile_images/756508063595696128/G6WbhrZB_normal.jpg",
				"profile_image_url_https": "https://pbs.twimg.com/profile_images/756508063595696128/G6WbhrZB_normal.jpg",
				"profile_banner_url": "https://pbs.twimg.com/profile_banners/39349894/1469200343",
				"profile_link_color": "116AB8",
				"profile_sidebar_border_color": "000000",
				"profile_sidebar_fill_color": "616161",
				"profile_text_color": "000000",
				"profile_use_background_image": true,
				"has_extended_profile": false,
				"default_profile": false,
				"default_profile_image": false,
				"following": null,
				"follow_request_sent": null,
				"notifications": null,
				"translator_type": "none"
			},
			"geo": null,
			"coordinates": null,
			"place": null,
			"contributors": null,
			"is_quote_status": false,
			"retweet_count": 6754,
			"favorite_count": 49956,
			"favorited": false,
			"retweeted": false,
			"possibly_sensitive": false,
			"lang": "en"
		},
		"retweet_count": 13843,
		"favorite_count": 102322,
		"favorited": false,
		"retweeted": false,
		"possibly_sensitive": false,
		"lang": "en"
	},
	{
		"created_at": "Mon Mar 20 13:14:49 +0000 2017",
		"id": 843813078076719100,
		"id_str": "843813078076719107",
		"text": "What about all of the contact with the Clinton campaign and the Russians? Also, is it true that the DNC would not let the FBI in to look?",
		"truncated": false,
		"entities": {
			"hashtags": [],
			"symbols": [],
			"user_mentions": [],
			"urls": []
		},
		"source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
		"in_reply_to_status_id": null,
		"in_reply_to_status_id_str": null,
		"in_reply_to_user_id": null,
		"in_reply_to_user_id_str": null,
		"in_reply_to_screen_name": null,
		"user": {
			"id": 25073877,
			"id_str": "25073877",
			"name": "Donald J. Trump",
			"screen_name": "realDonaldTrump",
			"location": "Washington, DC",
			"description": "45th President of the United States of America",
			"url": null,
			"entities": {
				"description": {
					"urls": []
				}
			},
			"protected": false,
			"followers_count": 27379007,
			"friends_count": 43,
			"listed_count": 67563,
			"created_at": "Wed Mar 18 13:46:38 +0000 2009",
			"favourites_count": 47,
			"utc_offset": -14400,
			"time_zone": "Eastern Time (US & Canada)",
			"geo_enabled": true,
			"verified": true,
			"statuses_count": 34705,
			"lang": "en",
			"contributors_enabled": false,
			"is_translator": false,
			"is_translation_enabled": true,
			"profile_background_color": "6D5C18",
			"profile_background_image_url": "http://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_tile": true,
			"profile_image_url": "http://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_image_url_https": "https://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_banner_url": "https://pbs.twimg.com/profile_banners/25073877/1489657715",
			"profile_link_color": "0D5B73",
			"profile_sidebar_border_color": "BDDCAD",
			"profile_sidebar_fill_color": "C5CEC0",
			"profile_text_color": "333333",
			"profile_use_background_image": true,
			"has_extended_profile": false,
			"default_profile": false,
			"default_profile_image": false,
			"following": null,
			"follow_request_sent": null,
			"notifications": null,
			"translator_type": "regular"
		},
		"geo": null,
		"coordinates": null,
		"place": null,
		"contributors": null,
		"is_quote_status": false,
		"retweet_count": 21877,
		"favorite_count": 83059,
		"favorited": false,
		"retweeted": false,
		"lang": "en"
	},
	{
		"created_at": "Mon Mar 20 12:35:14 +0000 2017",
		"id": 843803115044454400,
		"id_str": "843803115044454402",
		"text": "Just heard Fake News CNN is doing polls again despite the fact that their election polls were a WAY OFF disaster. Much higher ratings at Fox",
		"truncated": false,
		"entities": {
			"hashtags": [],
			"symbols": [],
			"user_mentions": [],
			"urls": []
		},
		"source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
		"in_reply_to_status_id": null,
		"in_reply_to_status_id_str": null,
		"in_reply_to_user_id": null,
		"in_reply_to_user_id_str": null,
		"in_reply_to_screen_name": null,
		"user": {
			"id": 25073877,
			"id_str": "25073877",
			"name": "Donald J. Trump",
			"screen_name": "realDonaldTrump",
			"location": "Washington, DC",
			"description": "45th President of the United States of America",
			"url": null,
			"entities": {
				"description": {
					"urls": []
				}
			},
			"protected": false,
			"followers_count": 27379007,
			"friends_count": 43,
			"listed_count": 67563,
			"created_at": "Wed Mar 18 13:46:38 +0000 2009",
			"favourites_count": 47,
			"utc_offset": -14400,
			"time_zone": "Eastern Time (US & Canada)",
			"geo_enabled": true,
			"verified": true,
			"statuses_count": 34705,
			"lang": "en",
			"contributors_enabled": false,
			"is_translator": false,
			"is_translation_enabled": true,
			"profile_background_color": "6D5C18",
			"profile_background_image_url": "http://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_tile": true,
			"profile_image_url": "http://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_image_url_https": "https://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_banner_url": "https://pbs.twimg.com/profile_banners/25073877/1489657715",
			"profile_link_color": "0D5B73",
			"profile_sidebar_border_color": "BDDCAD",
			"profile_sidebar_fill_color": "C5CEC0",
			"profile_text_color": "333333",
			"profile_use_background_image": true,
			"has_extended_profile": false,
			"default_profile": false,
			"default_profile_image": false,
			"following": null,
			"follow_request_sent": null,
			"notifications": null,
			"translator_type": "regular"
		},
		"geo": null,
		"coordinates": null,
		"place": null,
		"contributors": null,
		"is_quote_status": false,
		"retweet_count": 18765,
		"favorite_count": 91682,
		"favorited": false,
		"retweeted": false,
		"lang": "en"
	},
	{
		"created_at": "Mon Mar 20 11:02:57 +0000 2017",
		"id": 843779892776964100,
		"id_str": "843779892776964097",
		"text": "The real story that Congress, the FBI and all others should be looking into is the leaking of Classified information. Must find leaker now!",
		"truncated": false,
		"entities": {
			"hashtags": [],
			"symbols": [],
			"user_mentions": [],
			"urls": []
		},
		"source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
		"in_reply_to_status_id": 843772976151642100,
		"in_reply_to_status_id_str": "843772976151642112",
		"in_reply_to_user_id": 25073877,
		"in_reply_to_user_id_str": "25073877",
		"in_reply_to_screen_name": "realDonaldTrump",
		"user": {
			"id": 25073877,
			"id_str": "25073877",
			"name": "Donald J. Trump",
			"screen_name": "realDonaldTrump",
			"location": "Washington, DC",
			"description": "45th President of the United States of America",
			"url": null,
			"entities": {
				"description": {
					"urls": []
				}
			},
			"protected": false,
			"followers_count": 27379007,
			"friends_count": 43,
			"listed_count": 67563,
			"created_at": "Wed Mar 18 13:46:38 +0000 2009",
			"favourites_count": 47,
			"utc_offset": -14400,
			"time_zone": "Eastern Time (US & Canada)",
			"geo_enabled": true,
			"verified": true,
			"statuses_count": 34705,
			"lang": "en",
			"contributors_enabled": false,
			"is_translator": false,
			"is_translation_enabled": true,
			"profile_background_color": "6D5C18",
			"profile_background_image_url": "http://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_tile": true,
			"profile_image_url": "http://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_image_url_https": "https://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_banner_url": "https://pbs.twimg.com/profile_banners/25073877/1489657715",
			"profile_link_color": "0D5B73",
			"profile_sidebar_border_color": "BDDCAD",
			"profile_sidebar_fill_color": "C5CEC0",
			"profile_text_color": "333333",
			"profile_use_background_image": true,
			"has_extended_profile": false,
			"default_profile": false,
			"default_profile_image": false,
			"following": null,
			"follow_request_sent": null,
			"notifications": null,
			"translator_type": "regular"
		},
		"geo": null,
		"coordinates": null,
		"place": null,
		"contributors": null,
		"is_quote_status": false,
		"retweet_count": 15189,
		"favorite_count": 64414,
		"favorited": false,
		"retweeted": false,
		"lang": "en"
	},
	{
		"created_at": "Mon Mar 20 10:49:48 +0000 2017",
		"id": 843776582825267200,
		"id_str": "843776582825267201",
		"text": "The Democrats made up and pushed the Russian story as an excuse for running a terrible campaign. Big advantage in Electoral College &amp; lost!",
		"truncated": false,
		"entities": {
			"hashtags": [],
			"symbols": [],
			"user_mentions": [],
			"urls": []
		},
		"source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
		"in_reply_to_status_id": null,
		"in_reply_to_status_id_str": null,
		"in_reply_to_user_id": null,
		"in_reply_to_user_id_str": null,
		"in_reply_to_screen_name": null,
		"user": {
			"id": 25073877,
			"id_str": "25073877",
			"name": "Donald J. Trump",
			"screen_name": "realDonaldTrump",
			"location": "Washington, DC",
			"description": "45th President of the United States of America",
			"url": null,
			"entities": {
				"description": {
					"urls": []
				}
			},
			"protected": false,
			"followers_count": 27379007,
			"friends_count": 43,
			"listed_count": 67563,
			"created_at": "Wed Mar 18 13:46:38 +0000 2009",
			"favourites_count": 47,
			"utc_offset": -14400,
			"time_zone": "Eastern Time (US & Canada)",
			"geo_enabled": true,
			"verified": true,
			"statuses_count": 34705,
			"lang": "en",
			"contributors_enabled": false,
			"is_translator": false,
			"is_translation_enabled": true,
			"profile_background_color": "6D5C18",
			"profile_background_image_url": "http://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_tile": true,
			"profile_image_url": "http://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_image_url_https": "https://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_banner_url": "https://pbs.twimg.com/profile_banners/25073877/1489657715",
			"profile_link_color": "0D5B73",
			"profile_sidebar_border_color": "BDDCAD",
			"profile_sidebar_fill_color": "C5CEC0",
			"profile_text_color": "333333",
			"profile_use_background_image": true,
			"has_extended_profile": false,
			"default_profile": false,
			"default_profile_image": false,
			"following": null,
			"follow_request_sent": null,
			"notifications": null,
			"translator_type": "regular"
		},
		"geo": null,
		"coordinates": null,
		"place": null,
		"contributors": null,
		"is_quote_status": false,
		"retweet_count": 20546,
		"favorite_count": 89277,
		"favorited": false,
		"retweeted": false,
		"lang": "en"
	},
	{
		"created_at": "Mon Mar 20 10:35:28 +0000 2017",
		"id": 843772976151642100,
		"id_str": "843772976151642112",
		"text": "James Clapper and others stated that there is no evidence Potus colluded with Russia. This story is FAKE NEWS and everyone knows it!",
		"truncated": false,
		"entities": {
			"hashtags": [],
			"symbols": [],
			"user_mentions": [],
			"urls": []
		},
		"source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
		"in_reply_to_status_id": null,
		"in_reply_to_status_id_str": null,
		"in_reply_to_user_id": null,
		"in_reply_to_user_id_str": null,
		"in_reply_to_screen_name": null,
		"user": {
			"id": 25073877,
			"id_str": "25073877",
			"name": "Donald J. Trump",
			"screen_name": "realDonaldTrump",
			"location": "Washington, DC",
			"description": "45th President of the United States of America",
			"url": null,
			"entities": {
				"description": {
					"urls": []
				}
			},
			"protected": false,
			"followers_count": 27379007,
			"friends_count": 43,
			"listed_count": 67563,
			"created_at": "Wed Mar 18 13:46:38 +0000 2009",
			"favourites_count": 47,
			"utc_offset": -14400,
			"time_zone": "Eastern Time (US & Canada)",
			"geo_enabled": true,
			"verified": true,
			"statuses_count": 34705,
			"lang": "en",
			"contributors_enabled": false,
			"is_translator": false,
			"is_translation_enabled": true,
			"profile_background_color": "6D5C18",
			"profile_background_image_url": "http://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_tile": true,
			"profile_image_url": "http://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_image_url_https": "https://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_banner_url": "https://pbs.twimg.com/profile_banners/25073877/1489657715",
			"profile_link_color": "0D5B73",
			"profile_sidebar_border_color": "BDDCAD",
			"profile_sidebar_fill_color": "C5CEC0",
			"profile_text_color": "333333",
			"profile_use_background_image": true,
			"has_extended_profile": false,
			"default_profile": false,
			"default_profile_image": false,
			"following": null,
			"follow_request_sent": null,
			"notifications": null,
			"translator_type": "regular"
		},
		"geo": null,
		"coordinates": null,
		"place": null,
		"contributors": null,
		"is_quote_status": false,
		"retweet_count": 17454,
		"favorite_count": 72254,
		"favorited": false,
		"retweeted": false,
		"lang": "en"
	},
	{
		"created_at": "Sun Mar 19 20:20:22 +0000 2017",
		"id": 843557782666317800,
		"id_str": "843557782666317826",
		"text": "#ICYMI: Weekly Address \n➡️https://t.co/ckVx2zgA1x https://t.co/dTGZLvlsGv",
		"truncated": false,
		"entities": {
			"hashtags": [
				{
					"text": "ICYMI",
					"indices": [
						0,
						6
					]
				}
			],
			"symbols": [],
			"user_mentions": [],
			"urls": [
				{
					"url": "https://t.co/ckVx2zgA1x",
					"expanded_url": "http://45.wh.gov/Jjp2ki",
					"display_url": "45.wh.gov/Jjp2ki",
					"indices": [
						26,
						49
					]
				}
			],
			"media": [
				{
					"id": 843557757219422200,
					"id_str": "843557757219422209",
					"indices": [
						50,
						73
					],
					"media_url": "http://pbs.twimg.com/media/C7TrT5KWwAEhat8.jpg",
					"media_url_https": "https://pbs.twimg.com/media/C7TrT5KWwAEhat8.jpg",
					"url": "https://t.co/dTGZLvlsGv",
					"display_url": "pic.twitter.com/dTGZLvlsGv",
					"expanded_url": "https://twitter.com/realDonaldTrump/status/843557782666317826/photo/1",
					"type": "photo",
					"sizes": {
						"medium": {
							"w": 750,
							"h": 376,
							"resize": "fit"
						},
						"large": {
							"w": 750,
							"h": 376,
							"resize": "fit"
						},
						"thumb": {
							"w": 150,
							"h": 150,
							"resize": "crop"
						},
						"small": {
							"w": 680,
							"h": 341,
							"resize": "fit"
						}
					}
				}
			]
		},
		"extended_entities": {
			"media": [
				{
					"id": 843557757219422200,
					"id_str": "843557757219422209",
					"indices": [
						50,
						73
					],
					"media_url": "http://pbs.twimg.com/media/C7TrT5KWwAEhat8.jpg",
					"media_url_https": "https://pbs.twimg.com/media/C7TrT5KWwAEhat8.jpg",
					"url": "https://t.co/dTGZLvlsGv",
					"display_url": "pic.twitter.com/dTGZLvlsGv",
					"expanded_url": "https://twitter.com/realDonaldTrump/status/843557782666317826/photo/1",
					"type": "photo",
					"sizes": {
						"medium": {
							"w": 750,
							"h": 376,
							"resize": "fit"
						},
						"large": {
							"w": 750,
							"h": 376,
							"resize": "fit"
						},
						"thumb": {
							"w": 150,
							"h": 150,
							"resize": "crop"
						},
						"small": {
							"w": 680,
							"h": 341,
							"resize": "fit"
						}
					}
				}
			]
		},
		"source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
		"in_reply_to_status_id": null,
		"in_reply_to_status_id_str": null,
		"in_reply_to_user_id": null,
		"in_reply_to_user_id_str": null,
		"in_reply_to_screen_name": null,
		"user": {
			"id": 25073877,
			"id_str": "25073877",
			"name": "Donald J. Trump",
			"screen_name": "realDonaldTrump",
			"location": "Washington, DC",
			"description": "45th President of the United States of America",
			"url": null,
			"entities": {
				"description": {
					"urls": []
				}
			},
			"protected": false,
			"followers_count": 27379007,
			"friends_count": 43,
			"listed_count": 67563,
			"created_at": "Wed Mar 18 13:46:38 +0000 2009",
			"favourites_count": 47,
			"utc_offset": -14400,
			"time_zone": "Eastern Time (US & Canada)",
			"geo_enabled": true,
			"verified": true,
			"statuses_count": 34705,
			"lang": "en",
			"contributors_enabled": false,
			"is_translator": false,
			"is_translation_enabled": true,
			"profile_background_color": "6D5C18",
			"profile_background_image_url": "http://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_tile": true,
			"profile_image_url": "http://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_image_url_https": "https://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_banner_url": "https://pbs.twimg.com/profile_banners/25073877/1489657715",
			"profile_link_color": "0D5B73",
			"profile_sidebar_border_color": "BDDCAD",
			"profile_sidebar_fill_color": "C5CEC0",
			"profile_text_color": "333333",
			"profile_use_background_image": true,
			"has_extended_profile": false,
			"default_profile": false,
			"default_profile_image": false,
			"following": null,
			"follow_request_sent": null,
			"notifications": null,
			"translator_type": "regular"
		},
		"geo": null,
		"coordinates": null,
		"place": null,
		"contributors": null,
		"is_quote_status": false,
		"retweet_count": 7524,
		"favorite_count": 36954,
		"favorited": false,
		"retweeted": false,
		"possibly_sensitive": false,
		"lang": "en"
	},
	{
		"created_at": "Sat Mar 18 13:23:37 +0000 2017",
		"id": 843090516283723800,
		"id_str": "843090516283723776",
		"text": "...vast sums of money to NATO &amp; the United States must be paid more for the powerful, and very expensive, defense it provides to Germany!",
		"truncated": false,
		"entities": {
			"hashtags": [],
			"symbols": [],
			"user_mentions": [],
			"urls": []
		},
		"source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
		"in_reply_to_status_id": null,
		"in_reply_to_status_id_str": null,
		"in_reply_to_user_id": null,
		"in_reply_to_user_id_str": null,
		"in_reply_to_screen_name": null,
		"user": {
			"id": 25073877,
			"id_str": "25073877",
			"name": "Donald J. Trump",
			"screen_name": "realDonaldTrump",
			"location": "Washington, DC",
			"description": "45th President of the United States of America",
			"url": null,
			"entities": {
				"description": {
					"urls": []
				}
			},
			"protected": false,
			"followers_count": 27379007,
			"friends_count": 43,
			"listed_count": 67563,
			"created_at": "Wed Mar 18 13:46:38 +0000 2009",
			"favourites_count": 47,
			"utc_offset": -14400,
			"time_zone": "Eastern Time (US & Canada)",
			"geo_enabled": true,
			"verified": true,
			"statuses_count": 34705,
			"lang": "en",
			"contributors_enabled": false,
			"is_translator": false,
			"is_translation_enabled": true,
			"profile_background_color": "6D5C18",
			"profile_background_image_url": "http://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_tile": true,
			"profile_image_url": "http://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_image_url_https": "https://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_banner_url": "https://pbs.twimg.com/profile_banners/25073877/1489657715",
			"profile_link_color": "0D5B73",
			"profile_sidebar_border_color": "BDDCAD",
			"profile_sidebar_fill_color": "C5CEC0",
			"profile_text_color": "333333",
			"profile_use_background_image": true,
			"has_extended_profile": false,
			"default_profile": false,
			"default_profile_image": false,
			"following": null,
			"follow_request_sent": null,
			"notifications": null,
			"translator_type": "regular"
		},
		"geo": null,
		"coordinates": null,
		"place": null,
		"contributors": null,
		"is_quote_status": false,
		"retweet_count": 19707,
		"favorite_count": 87936,
		"favorited": false,
		"retweeted": false,
		"lang": "en"
	},
	{
		"created_at": "Sat Mar 18 13:15:41 +0000 2017",
		"id": 843088518339612700,
		"id_str": "843088518339612673",
		"text": "Despite what you have heard from the FAKE NEWS, I had a GREAT meeting with German Chancellor Angela Merkel. Nevertheless, Germany owes.....",
		"truncated": false,
		"entities": {
			"hashtags": [],
			"symbols": [],
			"user_mentions": [],
			"urls": []
		},
		"source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
		"in_reply_to_status_id": null,
		"in_reply_to_status_id_str": null,
		"in_reply_to_user_id": null,
		"in_reply_to_user_id_str": null,
		"in_reply_to_screen_name": null,
		"user": {
			"id": 25073877,
			"id_str": "25073877",
			"name": "Donald J. Trump",
			"screen_name": "realDonaldTrump",
			"location": "Washington, DC",
			"description": "45th President of the United States of America",
			"url": null,
			"entities": {
				"description": {
					"urls": []
				}
			},
			"protected": false,
			"followers_count": 27379007,
			"friends_count": 43,
			"listed_count": 67563,
			"created_at": "Wed Mar 18 13:46:38 +0000 2009",
			"favourites_count": 47,
			"utc_offset": -14400,
			"time_zone": "Eastern Time (US & Canada)",
			"geo_enabled": true,
			"verified": true,
			"statuses_count": 34705,
			"lang": "en",
			"contributors_enabled": false,
			"is_translator": false,
			"is_translation_enabled": true,
			"profile_background_color": "6D5C18",
			"profile_background_image_url": "http://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_tile": true,
			"profile_image_url": "http://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_image_url_https": "https://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_banner_url": "https://pbs.twimg.com/profile_banners/25073877/1489657715",
			"profile_link_color": "0D5B73",
			"profile_sidebar_border_color": "BDDCAD",
			"profile_sidebar_fill_color": "C5CEC0",
			"profile_text_color": "333333",
			"profile_use_background_image": true,
			"has_extended_profile": false,
			"default_profile": false,
			"default_profile_image": false,
			"following": null,
			"follow_request_sent": null,
			"notifications": null,
			"translator_type": "regular"
		},
		"geo": null,
		"coordinates": null,
		"place": null,
		"contributors": null,
		"is_quote_status": false,
		"retweet_count": 21347,
		"favorite_count": 96705,
		"favorited": false,
		"retweeted": false,
		"lang": "en"
	},
	{
		"created_at": "Fri Mar 17 15:39:10 +0000 2017",
		"id": 842762240185000000,
		"id_str": "842762240184999936",
		"text": "Great meeting with the @RepublicanStudy Committee this morning at the @WhiteHouse! https://t.co/8Y2UoHoYaY",
		"truncated": false,
		"entities": {
			"hashtags": [],
			"symbols": [],
			"user_mentions": [
				{
					"screen_name": "RepublicanStudy",
					"name": "RSC",
					"id": 22528309,
					"id_str": "22528309",
					"indices": [
						23,
						39
					]
				},
				{
					"screen_name": "WhiteHouse",
					"name": "The White House",
					"id": 822215673812119600,
					"id_str": "822215673812119553",
					"indices": [
						70,
						81
					]
				}
			],
			"urls": [],
			"media": [
				{
					"id": 842762207826010100,
					"id_str": "842762207826010116",
					"indices": [
						83,
						106
					],
					"media_url": "http://pbs.twimg.com/media/C7IXw0uX4AQt06t.jpg",
					"media_url_https": "https://pbs.twimg.com/media/C7IXw0uX4AQt06t.jpg",
					"url": "https://t.co/8Y2UoHoYaY",
					"display_url": "pic.twitter.com/8Y2UoHoYaY",
					"expanded_url": "https://twitter.com/realDonaldTrump/status/842762240184999936/photo/1",
					"type": "photo",
					"sizes": {
						"medium": {
							"w": 1200,
							"h": 800,
							"resize": "fit"
						},
						"small": {
							"w": 680,
							"h": 453,
							"resize": "fit"
						},
						"thumb": {
							"w": 150,
							"h": 150,
							"resize": "crop"
						},
						"large": {
							"w": 1200,
							"h": 800,
							"resize": "fit"
						}
					}
				}
			]
		},
		"extended_entities": {
			"media": [
				{
					"id": 842762207826010100,
					"id_str": "842762207826010116",
					"indices": [
						83,
						106
					],
					"media_url": "http://pbs.twimg.com/media/C7IXw0uX4AQt06t.jpg",
					"media_url_https": "https://pbs.twimg.com/media/C7IXw0uX4AQt06t.jpg",
					"url": "https://t.co/8Y2UoHoYaY",
					"display_url": "pic.twitter.com/8Y2UoHoYaY",
					"expanded_url": "https://twitter.com/realDonaldTrump/status/842762240184999936/photo/1",
					"type": "photo",
					"sizes": {
						"medium": {
							"w": 1200,
							"h": 800,
							"resize": "fit"
						},
						"small": {
							"w": 680,
							"h": 453,
							"resize": "fit"
						},
						"thumb": {
							"w": 150,
							"h": 150,
							"resize": "crop"
						},
						"large": {
							"w": 1200,
							"h": 800,
							"resize": "fit"
						}
					}
				},
				{
					"id": 842762207746293800,
					"id_str": "842762207746293760",
					"indices": [
						83,
						106
					],
					"media_url": "http://pbs.twimg.com/media/C7IXw0bXgAAOdCp.jpg",
					"media_url_https": "https://pbs.twimg.com/media/C7IXw0bXgAAOdCp.jpg",
					"url": "https://t.co/8Y2UoHoYaY",
					"display_url": "pic.twitter.com/8Y2UoHoYaY",
					"expanded_url": "https://twitter.com/realDonaldTrump/status/842762240184999936/photo/1",
					"type": "photo",
					"sizes": {
						"medium": {
							"w": 1200,
							"h": 800,
							"resize": "fit"
						},
						"small": {
							"w": 680,
							"h": 453,
							"resize": "fit"
						},
						"thumb": {
							"w": 150,
							"h": 150,
							"resize": "crop"
						},
						"large": {
							"w": 1200,
							"h": 800,
							"resize": "fit"
						}
					}
				},
				{
					"id": 842762207750447100,
					"id_str": "842762207750447104",
					"indices": [
						83,
						106
					],
					"media_url": "http://pbs.twimg.com/media/C7IXw0cW4AAtsRd.jpg",
					"media_url_https": "https://pbs.twimg.com/media/C7IXw0cW4AAtsRd.jpg",
					"url": "https://t.co/8Y2UoHoYaY",
					"display_url": "pic.twitter.com/8Y2UoHoYaY",
					"expanded_url": "https://twitter.com/realDonaldTrump/status/842762240184999936/photo/1",
					"type": "photo",
					"sizes": {
						"thumb": {
							"w": 150,
							"h": 150,
							"resize": "crop"
						},
						"small": {
							"w": 680,
							"h": 453,
							"resize": "fit"
						},
						"medium": {
							"w": 1200,
							"h": 800,
							"resize": "fit"
						},
						"large": {
							"w": 1200,
							"h": 800,
							"resize": "fit"
						}
					}
				},
				{
					"id": 842762207796609000,
					"id_str": "842762207796609024",
					"indices": [
						83,
						106
					],
					"media_url": "http://pbs.twimg.com/media/C7IXw0nXQAATkbf.jpg",
					"media_url_https": "https://pbs.twimg.com/media/C7IXw0nXQAATkbf.jpg",
					"url": "https://t.co/8Y2UoHoYaY",
					"display_url": "pic.twitter.com/8Y2UoHoYaY",
					"expanded_url": "https://twitter.com/realDonaldTrump/status/842762240184999936/photo/1",
					"type": "photo",
					"sizes": {
						"small": {
							"w": 680,
							"h": 453,
							"resize": "fit"
						},
						"medium": {
							"w": 1200,
							"h": 800,
							"resize": "fit"
						},
						"thumb": {
							"w": 150,
							"h": 150,
							"resize": "crop"
						},
						"large": {
							"w": 1200,
							"h": 800,
							"resize": "fit"
						}
					}
				}
			]
		},
		"source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
		"in_reply_to_status_id": null,
		"in_reply_to_status_id_str": null,
		"in_reply_to_user_id": null,
		"in_reply_to_user_id_str": null,
		"in_reply_to_screen_name": null,
		"user": {
			"id": 25073877,
			"id_str": "25073877",
			"name": "Donald J. Trump",
			"screen_name": "realDonaldTrump",
			"location": "Washington, DC",
			"description": "45th President of the United States of America",
			"url": null,
			"entities": {
				"description": {
					"urls": []
				}
			},
			"protected": false,
			"followers_count": 27379007,
			"friends_count": 43,
			"listed_count": 67563,
			"created_at": "Wed Mar 18 13:46:38 +0000 2009",
			"favourites_count": 47,
			"utc_offset": -14400,
			"time_zone": "Eastern Time (US & Canada)",
			"geo_enabled": true,
			"verified": true,
			"statuses_count": 34705,
			"lang": "en",
			"contributors_enabled": false,
			"is_translator": false,
			"is_translation_enabled": true,
			"profile_background_color": "6D5C18",
			"profile_background_image_url": "http://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_tile": true,
			"profile_image_url": "http://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_image_url_https": "https://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_banner_url": "https://pbs.twimg.com/profile_banners/25073877/1489657715",
			"profile_link_color": "0D5B73",
			"profile_sidebar_border_color": "BDDCAD",
			"profile_sidebar_fill_color": "C5CEC0",
			"profile_text_color": "333333",
			"profile_use_background_image": true,
			"has_extended_profile": false,
			"default_profile": false,
			"default_profile_image": false,
			"following": null,
			"follow_request_sent": null,
			"notifications": null,
			"translator_type": "regular"
		},
		"geo": null,
		"coordinates": null,
		"place": null,
		"contributors": null,
		"is_quote_status": false,
		"retweet_count": 8314,
		"favorite_count": 47106,
		"favorited": false,
		"retweeted": false,
		"possibly_sensitive": false,
		"lang": "en"
	},
	{
		"created_at": "Fri Mar 17 14:07:26 +0000 2017",
		"id": 842739155230740500,
		"id_str": "842739155230740481",
		"text": "\"The President Changed. So Has Small Businesses' Confidence\"\nhttps://t.co/daTGjPmYeJ",
		"truncated": false,
		"entities": {
			"hashtags": [],
			"symbols": [],
			"user_mentions": [],
			"urls": [
				{
					"url": "https://t.co/daTGjPmYeJ",
					"expanded_url": "https://mobile.nytimes.com/2017/03/12/business/dealbook/small-business-confidence-trump.amp.html",
					"display_url": "mobile.nytimes.com/2017/03/12/bus…",
					"indices": [
						61,
						84
					]
				}
			]
		},
		"source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
		"in_reply_to_status_id": null,
		"in_reply_to_status_id_str": null,
		"in_reply_to_user_id": null,
		"in_reply_to_user_id_str": null,
		"in_reply_to_screen_name": null,
		"user": {
			"id": 25073877,
			"id_str": "25073877",
			"name": "Donald J. Trump",
			"screen_name": "realDonaldTrump",
			"location": "Washington, DC",
			"description": "45th President of the United States of America",
			"url": null,
			"entities": {
				"description": {
					"urls": []
				}
			},
			"protected": false,
			"followers_count": 27379007,
			"friends_count": 43,
			"listed_count": 67563,
			"created_at": "Wed Mar 18 13:46:38 +0000 2009",
			"favourites_count": 47,
			"utc_offset": -14400,
			"time_zone": "Eastern Time (US & Canada)",
			"geo_enabled": true,
			"verified": true,
			"statuses_count": 34705,
			"lang": "en",
			"contributors_enabled": false,
			"is_translator": false,
			"is_translation_enabled": true,
			"profile_background_color": "6D5C18",
			"profile_background_image_url": "http://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_tile": true,
			"profile_image_url": "http://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_image_url_https": "https://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_banner_url": "https://pbs.twimg.com/profile_banners/25073877/1489657715",
			"profile_link_color": "0D5B73",
			"profile_sidebar_border_color": "BDDCAD",
			"profile_sidebar_fill_color": "C5CEC0",
			"profile_text_color": "333333",
			"profile_use_background_image": true,
			"has_extended_profile": false,
			"default_profile": false,
			"default_profile_image": false,
			"following": null,
			"follow_request_sent": null,
			"notifications": null,
			"translator_type": "regular"
		},
		"geo": null,
		"coordinates": null,
		"place": null,
		"contributors": null,
		"is_quote_status": false,
		"retweet_count": 11575,
		"favorite_count": 52170,
		"favorited": false,
		"retweeted": false,
		"possibly_sensitive": false,
		"lang": "en"
	},
	{
		"created_at": "Fri Mar 17 13:07:15 +0000 2017",
		"id": 842724011234791400,
		"id_str": "842724011234791424",
		"text": "North Korea is behaving very badly. They have been \"playing\" the United States for years. China has done little to help!",
		"truncated": false,
		"entities": {
			"hashtags": [],
			"symbols": [],
			"user_mentions": [],
			"urls": []
		},
		"source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
		"in_reply_to_status_id": null,
		"in_reply_to_status_id_str": null,
		"in_reply_to_user_id": null,
		"in_reply_to_user_id_str": null,
		"in_reply_to_screen_name": null,
		"user": {
			"id": 25073877,
			"id_str": "25073877",
			"name": "Donald J. Trump",
			"screen_name": "realDonaldTrump",
			"location": "Washington, DC",
			"description": "45th President of the United States of America",
			"url": null,
			"entities": {
				"description": {
					"urls": []
				}
			},
			"protected": false,
			"followers_count": 27379007,
			"friends_count": 43,
			"listed_count": 67563,
			"created_at": "Wed Mar 18 13:46:38 +0000 2009",
			"favourites_count": 47,
			"utc_offset": -14400,
			"time_zone": "Eastern Time (US & Canada)",
			"geo_enabled": true,
			"verified": true,
			"statuses_count": 34705,
			"lang": "en",
			"contributors_enabled": false,
			"is_translator": false,
			"is_translation_enabled": true,
			"profile_background_color": "6D5C18",
			"profile_background_image_url": "http://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_tile": true,
			"profile_image_url": "http://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_image_url_https": "https://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_banner_url": "https://pbs.twimg.com/profile_banners/25073877/1489657715",
			"profile_link_color": "0D5B73",
			"profile_sidebar_border_color": "BDDCAD",
			"profile_sidebar_fill_color": "C5CEC0",
			"profile_text_color": "333333",
			"profile_use_background_image": true,
			"has_extended_profile": false,
			"default_profile": false,
			"default_profile_image": false,
			"following": null,
			"follow_request_sent": null,
			"notifications": null,
			"translator_type": "regular"
		},
		"geo": null,
		"coordinates": null,
		"place": null,
		"contributors": null,
		"is_quote_status": false,
		"retweet_count": 21231,
		"favorite_count": 90559,
		"favorited": false,
		"retweeted": false,
		"lang": "en"
	},
	{
		"created_at": "Fri Mar 17 12:34:17 +0000 2017",
		"id": 842715710765830100,
		"id_str": "842715710765830147",
		"text": "RT @foxandfriends: FOX NEWS ALERT: Jihadis using religious visa to enter US, experts warn (via @FoxFriendsFirst) https://t.co/pwXeR9OMQC",
		"truncated": false,
		"entities": {
			"hashtags": [],
			"symbols": [],
			"user_mentions": [
				{
					"screen_name": "foxandfriends",
					"name": "FOX & friends",
					"id": 15513604,
					"id_str": "15513604",
					"indices": [
						3,
						17
					]
				},
				{
					"screen_name": "FoxFriendsFirst",
					"name": "Fox & Friends First",
					"id": 488679352,
					"id_str": "488679352",
					"indices": [
						95,
						111
					]
				}
			],
			"urls": [],
			"media": [
				{
					"id": 841947627444936700,
					"id_str": "841947627444936704",
					"indices": [
						113,
						136
					],
					"media_url": "http://pbs.twimg.com/media/C68zKW4WoAACr3S.jpg",
					"media_url_https": "https://pbs.twimg.com/media/C68zKW4WoAACr3S.jpg",
					"url": "https://t.co/pwXeR9OMQC",
					"display_url": "pic.twitter.com/pwXeR9OMQC",
					"expanded_url": "https://twitter.com/foxandfriends/status/841955896452304896/video/1",
					"type": "photo",
					"sizes": {
						"small": {
							"w": 680,
							"h": 383,
							"resize": "fit"
						},
						"medium": {
							"w": 1200,
							"h": 675,
							"resize": "fit"
						},
						"large": {
							"w": 1280,
							"h": 720,
							"resize": "fit"
						},
						"thumb": {
							"w": 150,
							"h": 150,
							"resize": "crop"
						}
					},
					"source_status_id": 841955896452304900,
					"source_status_id_str": "841955896452304896",
					"source_user_id": 15513604,
					"source_user_id_str": "15513604"
				}
			]
		},
		"extended_entities": {
			"media": [
				{
					"id": 841947627444936700,
					"id_str": "841947627444936704",
					"indices": [
						113,
						136
					],
					"media_url": "http://pbs.twimg.com/media/C68zKW4WoAACr3S.jpg",
					"media_url_https": "https://pbs.twimg.com/media/C68zKW4WoAACr3S.jpg",
					"url": "https://t.co/pwXeR9OMQC",
					"display_url": "pic.twitter.com/pwXeR9OMQC",
					"expanded_url": "https://twitter.com/foxandfriends/status/841955896452304896/video/1",
					"type": "video",
					"sizes": {
						"small": {
							"w": 680,
							"h": 383,
							"resize": "fit"
						},
						"medium": {
							"w": 1200,
							"h": 675,
							"resize": "fit"
						},
						"large": {
							"w": 1280,
							"h": 720,
							"resize": "fit"
						},
						"thumb": {
							"w": 150,
							"h": 150,
							"resize": "crop"
						}
					},
					"source_status_id": 841955896452304900,
					"source_status_id_str": "841955896452304896",
					"source_user_id": 15513604,
					"source_user_id_str": "15513604",
					"video_info": {
						"aspect_ratio": [
							16,
							9
						],
						"duration_millis": 21989,
						"variants": [
							{
								"content_type": "application/x-mpegURL",
								"url": "https://video.twimg.com/amplify_video/841947627444936704/pl/ks9gjxJ40W-6uoh3.m3u8"
							},
							{
								"bitrate": 2176000,
								"content_type": "video/mp4",
								"url": "https://video.twimg.com/amplify_video/841947627444936704/vid/1280x720/okh2r-8I6hr56NZM.mp4"
							},
							{
								"bitrate": 320000,
								"content_type": "video/mp4",
								"url": "https://video.twimg.com/amplify_video/841947627444936704/vid/320x180/4qchrP7_6h_c48MO.mp4"
							},
							{
								"bitrate": 832000,
								"content_type": "video/mp4",
								"url": "https://video.twimg.com/amplify_video/841947627444936704/vid/640x360/oFZNtARA7xsH3DyS.mp4"
							}
						]
					},
					"additional_media_info": {
						"title": "",
						"description": "",
						"embeddable": true,
						"monetizable": false,
						"source_user": {
							"id": 15513604,
							"id_str": "15513604",
							"name": "FOX & friends",
							"screen_name": "foxandfriends",
							"location": "New York City",
							"description": "America's #1 cable morning news show",
							"url": "https://t.co/xg790NQUNl",
							"entities": {
								"url": {
									"urls": [
										{
											"url": "https://t.co/xg790NQUNl",
											"expanded_url": "http://foxandfriends.com",
											"display_url": "foxandfriends.com",
											"indices": [
												0,
												23
											]
										}
									]
								},
								"description": {
									"urls": []
								}
							},
							"protected": false,
							"followers_count": 853044,
							"friends_count": 2740,
							"listed_count": 6924,
							"created_at": "Mon Jul 21 10:50:09 +0000 2008",
							"favourites_count": 4992,
							"utc_offset": -14400,
							"time_zone": "Eastern Time (US & Canada)",
							"geo_enabled": true,
							"verified": true,
							"statuses_count": 62863,
							"lang": "en",
							"contributors_enabled": false,
							"is_translator": false,
							"is_translation_enabled": false,
							"profile_background_color": "C0DEED",
							"profile_background_image_url": "http://pbs.twimg.com/profile_background_images/378800000073438215/a640e235e8df7d23d551f500af24d6b8.jpeg",
							"profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/378800000073438215/a640e235e8df7d23d551f500af24d6b8.jpeg",
							"profile_background_tile": false,
							"profile_image_url": "http://pbs.twimg.com/profile_images/816026255963340800/6SZPq7zi_normal.jpg",
							"profile_image_url_https": "https://pbs.twimg.com/profile_images/816026255963340800/6SZPq7zi_normal.jpg",
							"profile_banner_url": "https://pbs.twimg.com/profile_banners/15513604/1456513601",
							"profile_link_color": "0084B4",
							"profile_sidebar_border_color": "FFFFFF",
							"profile_sidebar_fill_color": "DDEEF6",
							"profile_text_color": "333333",
							"profile_use_background_image": true,
							"has_extended_profile": false,
							"default_profile": false,
							"default_profile_image": false,
							"following": null,
							"follow_request_sent": null,
							"notifications": null,
							"translator_type": "none"
						}
					}
				}
			]
		},
		"source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
		"in_reply_to_status_id": null,
		"in_reply_to_status_id_str": null,
		"in_reply_to_user_id": null,
		"in_reply_to_user_id_str": null,
		"in_reply_to_screen_name": null,
		"user": {
			"id": 25073877,
			"id_str": "25073877",
			"name": "Donald J. Trump",
			"screen_name": "realDonaldTrump",
			"location": "Washington, DC",
			"description": "45th President of the United States of America",
			"url": null,
			"entities": {
				"description": {
					"urls": []
				}
			},
			"protected": false,
			"followers_count": 27379007,
			"friends_count": 43,
			"listed_count": 67563,
			"created_at": "Wed Mar 18 13:46:38 +0000 2009",
			"favourites_count": 47,
			"utc_offset": -14400,
			"time_zone": "Eastern Time (US & Canada)",
			"geo_enabled": true,
			"verified": true,
			"statuses_count": 34705,
			"lang": "en",
			"contributors_enabled": false,
			"is_translator": false,
			"is_translation_enabled": true,
			"profile_background_color": "6D5C18",
			"profile_background_image_url": "http://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_tile": true,
			"profile_image_url": "http://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_image_url_https": "https://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_banner_url": "https://pbs.twimg.com/profile_banners/25073877/1489657715",
			"profile_link_color": "0D5B73",
			"profile_sidebar_border_color": "BDDCAD",
			"profile_sidebar_fill_color": "C5CEC0",
			"profile_text_color": "333333",
			"profile_use_background_image": true,
			"has_extended_profile": false,
			"default_profile": false,
			"default_profile_image": false,
			"following": null,
			"follow_request_sent": null,
			"notifications": null,
			"translator_type": "regular"
		},
		"geo": null,
		"coordinates": null,
		"place": null,
		"contributors": null,
		"retweeted_status": {
			"created_at": "Wed Mar 15 10:15:03 +0000 2017",
			"id": 841955896452304900,
			"id_str": "841955896452304896",
			"text": "FOX NEWS ALERT: Jihadis using religious visa to enter US, experts warn (via @FoxFriendsFirst) https://t.co/pwXeR9OMQC",
			"truncated": false,
			"entities": {
				"hashtags": [],
				"symbols": [],
				"user_mentions": [
					{
						"screen_name": "FoxFriendsFirst",
						"name": "Fox & Friends First",
						"id": 488679352,
						"id_str": "488679352",
						"indices": [
							76,
							92
						]
					}
				],
				"urls": [],
				"media": [
					{
						"id": 841947627444936700,
						"id_str": "841947627444936704",
						"indices": [
							94,
							117
						],
						"media_url": "http://pbs.twimg.com/media/C68zKW4WoAACr3S.jpg",
						"media_url_https": "https://pbs.twimg.com/media/C68zKW4WoAACr3S.jpg",
						"url": "https://t.co/pwXeR9OMQC",
						"display_url": "pic.twitter.com/pwXeR9OMQC",
						"expanded_url": "https://twitter.com/foxandfriends/status/841955896452304896/video/1",
						"type": "photo",
						"sizes": {
							"small": {
								"w": 680,
								"h": 383,
								"resize": "fit"
							},
							"medium": {
								"w": 1200,
								"h": 675,
								"resize": "fit"
							},
							"large": {
								"w": 1280,
								"h": 720,
								"resize": "fit"
							},
							"thumb": {
								"w": 150,
								"h": 150,
								"resize": "crop"
							}
						}
					}
				]
			},
			"extended_entities": {
				"media": [
					{
						"id": 841947627444936700,
						"id_str": "841947627444936704",
						"indices": [
							94,
							117
						],
						"media_url": "http://pbs.twimg.com/media/C68zKW4WoAACr3S.jpg",
						"media_url_https": "https://pbs.twimg.com/media/C68zKW4WoAACr3S.jpg",
						"url": "https://t.co/pwXeR9OMQC",
						"display_url": "pic.twitter.com/pwXeR9OMQC",
						"expanded_url": "https://twitter.com/foxandfriends/status/841955896452304896/video/1",
						"type": "video",
						"sizes": {
							"small": {
								"w": 680,
								"h": 383,
								"resize": "fit"
							},
							"medium": {
								"w": 1200,
								"h": 675,
								"resize": "fit"
							},
							"large": {
								"w": 1280,
								"h": 720,
								"resize": "fit"
							},
							"thumb": {
								"w": 150,
								"h": 150,
								"resize": "crop"
							}
						},
						"video_info": {
							"aspect_ratio": [
								16,
								9
							],
							"duration_millis": 21989,
							"variants": [
								{
									"content_type": "application/x-mpegURL",
									"url": "https://video.twimg.com/amplify_video/841947627444936704/pl/ks9gjxJ40W-6uoh3.m3u8"
								},
								{
									"bitrate": 2176000,
									"content_type": "video/mp4",
									"url": "https://video.twimg.com/amplify_video/841947627444936704/vid/1280x720/okh2r-8I6hr56NZM.mp4"
								},
								{
									"bitrate": 320000,
									"content_type": "video/mp4",
									"url": "https://video.twimg.com/amplify_video/841947627444936704/vid/320x180/4qchrP7_6h_c48MO.mp4"
								},
								{
									"bitrate": 832000,
									"content_type": "video/mp4",
									"url": "https://video.twimg.com/amplify_video/841947627444936704/vid/640x360/oFZNtARA7xsH3DyS.mp4"
								}
							]
						},
						"additional_media_info": {
							"title": "",
							"description": "",
							"embeddable": true,
							"monetizable": false
						}
					}
				]
			},
			"source": "<a href=\"https://studio.twitter.com\" rel=\"nofollow\">Media Studio</a>",
			"in_reply_to_status_id": null,
			"in_reply_to_status_id_str": null,
			"in_reply_to_user_id": null,
			"in_reply_to_user_id_str": null,
			"in_reply_to_screen_name": null,
			"user": {
				"id": 15513604,
				"id_str": "15513604",
				"name": "FOX & friends",
				"screen_name": "foxandfriends",
				"location": "New York City",
				"description": "America's #1 cable morning news show",
				"url": "https://t.co/xg790NQUNl",
				"entities": {
					"url": {
						"urls": [
							{
								"url": "https://t.co/xg790NQUNl",
								"expanded_url": "http://foxandfriends.com",
								"display_url": "foxandfriends.com",
								"indices": [
									0,
									23
								]
							}
						]
					},
					"description": {
						"urls": []
					}
				},
				"protected": false,
				"followers_count": 853044,
				"friends_count": 2740,
				"listed_count": 6924,
				"created_at": "Mon Jul 21 10:50:09 +0000 2008",
				"favourites_count": 4992,
				"utc_offset": -14400,
				"time_zone": "Eastern Time (US & Canada)",
				"geo_enabled": true,
				"verified": true,
				"statuses_count": 62863,
				"lang": "en",
				"contributors_enabled": false,
				"is_translator": false,
				"is_translation_enabled": false,
				"profile_background_color": "C0DEED",
				"profile_background_image_url": "http://pbs.twimg.com/profile_background_images/378800000073438215/a640e235e8df7d23d551f500af24d6b8.jpeg",
				"profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/378800000073438215/a640e235e8df7d23d551f500af24d6b8.jpeg",
				"profile_background_tile": false,
				"profile_image_url": "http://pbs.twimg.com/profile_images/816026255963340800/6SZPq7zi_normal.jpg",
				"profile_image_url_https": "https://pbs.twimg.com/profile_images/816026255963340800/6SZPq7zi_normal.jpg",
				"profile_banner_url": "https://pbs.twimg.com/profile_banners/15513604/1456513601",
				"profile_link_color": "0084B4",
				"profile_sidebar_border_color": "FFFFFF",
				"profile_sidebar_fill_color": "DDEEF6",
				"profile_text_color": "333333",
				"profile_use_background_image": true,
				"has_extended_profile": false,
				"default_profile": false,
				"default_profile_image": false,
				"following": null,
				"follow_request_sent": null,
				"notifications": null,
				"translator_type": "none"
			},
			"geo": null,
			"coordinates": null,
			"place": null,
			"contributors": null,
			"is_quote_status": false,
			"retweet_count": 11545,
			"favorite_count": 23796,
			"favorited": false,
			"retweeted": false,
			"possibly_sensitive": false,
			"lang": "en"
		},
		"is_quote_status": false,
		"retweet_count": 11545,
		"favorite_count": 0,
		"favorited": false,
		"retweeted": false,
		"possibly_sensitive": false,
		"lang": "en"
	},
	{
		"created_at": "Fri Mar 17 12:30:25 +0000 2017",
		"id": 842714739365105700,
		"id_str": "842714739365105664",
		"text": "RT @foxandfriends: VIDEO: Rep. Scalise — GOP agrees on over 85 percent of health care bill https://t.co/05dtfjAUbx",
		"truncated": false,
		"entities": {
			"hashtags": [],
			"symbols": [],
			"user_mentions": [
				{
					"screen_name": "foxandfriends",
					"name": "FOX & friends",
					"id": 15513604,
					"id_str": "15513604",
					"indices": [
						3,
						17
					]
				}
			],
			"urls": [
				{
					"url": "https://t.co/05dtfjAUbx",
					"expanded_url": "http://bit.ly/2nkSlgv",
					"display_url": "bit.ly/2nkSlgv",
					"indices": [
						91,
						114
					]
				}
			]
		},
		"source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
		"in_reply_to_status_id": null,
		"in_reply_to_status_id_str": null,
		"in_reply_to_user_id": null,
		"in_reply_to_user_id_str": null,
		"in_reply_to_screen_name": null,
		"user": {
			"id": 25073877,
			"id_str": "25073877",
			"name": "Donald J. Trump",
			"screen_name": "realDonaldTrump",
			"location": "Washington, DC",
			"description": "45th President of the United States of America",
			"url": null,
			"entities": {
				"description": {
					"urls": []
				}
			},
			"protected": false,
			"followers_count": 27379007,
			"friends_count": 43,
			"listed_count": 67563,
			"created_at": "Wed Mar 18 13:46:38 +0000 2009",
			"favourites_count": 47,
			"utc_offset": -14400,
			"time_zone": "Eastern Time (US & Canada)",
			"geo_enabled": true,
			"verified": true,
			"statuses_count": 34705,
			"lang": "en",
			"contributors_enabled": false,
			"is_translator": false,
			"is_translation_enabled": true,
			"profile_background_color": "6D5C18",
			"profile_background_image_url": "http://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_tile": true,
			"profile_image_url": "http://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_image_url_https": "https://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_banner_url": "https://pbs.twimg.com/profile_banners/25073877/1489657715",
			"profile_link_color": "0D5B73",
			"profile_sidebar_border_color": "BDDCAD",
			"profile_sidebar_fill_color": "C5CEC0",
			"profile_text_color": "333333",
			"profile_use_background_image": true,
			"has_extended_profile": false,
			"default_profile": false,
			"default_profile_image": false,
			"following": null,
			"follow_request_sent": null,
			"notifications": null,
			"translator_type": "regular"
		},
		"geo": null,
		"coordinates": null,
		"place": null,
		"contributors": null,
		"retweeted_status": {
			"created_at": "Mon Mar 13 09:50:04 +0000 2017",
			"id": 841224832981303300,
			"id_str": "841224832981303296",
			"text": "VIDEO: Rep. Scalise — GOP agrees on over 85 percent of health care bill https://t.co/05dtfjAUbx",
			"truncated": false,
			"entities": {
				"hashtags": [],
				"symbols": [],
				"user_mentions": [],
				"urls": [
					{
						"url": "https://t.co/05dtfjAUbx",
						"expanded_url": "http://bit.ly/2nkSlgv",
						"display_url": "bit.ly/2nkSlgv",
						"indices": [
							72,
							95
						]
					}
				]
			},
			"source": "<a href=\"http://www.hootsuite.com\" rel=\"nofollow\">Hootsuite</a>",
			"in_reply_to_status_id": null,
			"in_reply_to_status_id_str": null,
			"in_reply_to_user_id": null,
			"in_reply_to_user_id_str": null,
			"in_reply_to_screen_name": null,
			"user": {
				"id": 15513604,
				"id_str": "15513604",
				"name": "FOX & friends",
				"screen_name": "foxandfriends",
				"location": "New York City",
				"description": "America's #1 cable morning news show",
				"url": "https://t.co/xg790NQUNl",
				"entities": {
					"url": {
						"urls": [
							{
								"url": "https://t.co/xg790NQUNl",
								"expanded_url": "http://foxandfriends.com",
								"display_url": "foxandfriends.com",
								"indices": [
									0,
									23
								]
							}
						]
					},
					"description": {
						"urls": []
					}
				},
				"protected": false,
				"followers_count": 853044,
				"friends_count": 2740,
				"listed_count": 6924,
				"created_at": "Mon Jul 21 10:50:09 +0000 2008",
				"favourites_count": 4992,
				"utc_offset": -14400,
				"time_zone": "Eastern Time (US & Canada)",
				"geo_enabled": true,
				"verified": true,
				"statuses_count": 62863,
				"lang": "en",
				"contributors_enabled": false,
				"is_translator": false,
				"is_translation_enabled": false,
				"profile_background_color": "C0DEED",
				"profile_background_image_url": "http://pbs.twimg.com/profile_background_images/378800000073438215/a640e235e8df7d23d551f500af24d6b8.jpeg",
				"profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/378800000073438215/a640e235e8df7d23d551f500af24d6b8.jpeg",
				"profile_background_tile": false,
				"profile_image_url": "http://pbs.twimg.com/profile_images/816026255963340800/6SZPq7zi_normal.jpg",
				"profile_image_url_https": "https://pbs.twimg.com/profile_images/816026255963340800/6SZPq7zi_normal.jpg",
				"profile_banner_url": "https://pbs.twimg.com/profile_banners/15513604/1456513601",
				"profile_link_color": "0084B4",
				"profile_sidebar_border_color": "FFFFFF",
				"profile_sidebar_fill_color": "DDEEF6",
				"profile_text_color": "333333",
				"profile_use_background_image": true,
				"has_extended_profile": false,
				"default_profile": false,
				"default_profile_image": false,
				"following": null,
				"follow_request_sent": null,
				"notifications": null,
				"translator_type": "none"
			},
			"geo": null,
			"coordinates": null,
			"place": null,
			"contributors": null,
			"is_quote_status": false,
			"retweet_count": 3443,
			"favorite_count": 17725,
			"favorited": false,
			"retweeted": false,
			"possibly_sensitive": false,
			"lang": "en"
		},
		"is_quote_status": false,
		"retweet_count": 3443,
		"favorite_count": 0,
		"favorited": false,
		"retweeted": false,
		"possibly_sensitive": false,
		"lang": "en"
	},
	{
		"created_at": "Fri Mar 17 12:26:12 +0000 2017",
		"id": 842713677174358000,
		"id_str": "842713677174358016",
		"text": "RT @AmericaFirstPol: MAJOR IMPACT: @POTUS Trump is 50 Days in and moving swiftly to get America back on the right track. #MAGA \nhttps://t.c…",
		"truncated": false,
		"entities": {
			"hashtags": [
				{
					"text": "MAGA",
					"indices": [
						121,
						126
					]
				}
			],
			"symbols": [],
			"user_mentions": [
				{
					"screen_name": "AmericaFirstPol",
					"name": "AmericaFirstPolicies",
					"id": 826155076280545300,
					"id_str": "826155076280545280",
					"indices": [
						3,
						19
					]
				},
				{
					"screen_name": "POTUS",
					"name": "President Trump",
					"id": 822215679726100500,
					"id_str": "822215679726100480",
					"indices": [
						35,
						41
					]
				}
			],
			"urls": []
		},
		"source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
		"in_reply_to_status_id": null,
		"in_reply_to_status_id_str": null,
		"in_reply_to_user_id": null,
		"in_reply_to_user_id_str": null,
		"in_reply_to_screen_name": null,
		"user": {
			"id": 25073877,
			"id_str": "25073877",
			"name": "Donald J. Trump",
			"screen_name": "realDonaldTrump",
			"location": "Washington, DC",
			"description": "45th President of the United States of America",
			"url": null,
			"entities": {
				"description": {
					"urls": []
				}
			},
			"protected": false,
			"followers_count": 27379007,
			"friends_count": 43,
			"listed_count": 67563,
			"created_at": "Wed Mar 18 13:46:38 +0000 2009",
			"favourites_count": 47,
			"utc_offset": -14400,
			"time_zone": "Eastern Time (US & Canada)",
			"geo_enabled": true,
			"verified": true,
			"statuses_count": 34705,
			"lang": "en",
			"contributors_enabled": false,
			"is_translator": false,
			"is_translation_enabled": true,
			"profile_background_color": "6D5C18",
			"profile_background_image_url": "http://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_tile": true,
			"profile_image_url": "http://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_image_url_https": "https://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_banner_url": "https://pbs.twimg.com/profile_banners/25073877/1489657715",
			"profile_link_color": "0D5B73",
			"profile_sidebar_border_color": "BDDCAD",
			"profile_sidebar_fill_color": "C5CEC0",
			"profile_text_color": "333333",
			"profile_use_background_image": true,
			"has_extended_profile": false,
			"default_profile": false,
			"default_profile_image": false,
			"following": null,
			"follow_request_sent": null,
			"notifications": null,
			"translator_type": "regular"
		},
		"geo": null,
		"coordinates": null,
		"place": null,
		"contributors": null,
		"retweeted_status": {
			"created_at": "Sun Mar 12 16:43:07 +0000 2017",
			"id": 840966394648940500,
			"id_str": "840966394648940544",
			"text": "MAJOR IMPACT: @POTUS Trump is 50 Days in and moving swiftly to get America back on the right track. #MAGA \nhttps://t.co/gzS6eSNNDd",
			"truncated": false,
			"entities": {
				"hashtags": [
					{
						"text": "MAGA",
						"indices": [
							100,
							105
						]
					}
				],
				"symbols": [],
				"user_mentions": [
					{
						"screen_name": "POTUS",
						"name": "President Trump",
						"id": 822215679726100500,
						"id_str": "822215679726100480",
						"indices": [
							14,
							20
						]
					}
				],
				"urls": [
					{
						"url": "https://t.co/gzS6eSNNDd",
						"expanded_url": "http://www.breitbart.com/big-government/2017/03/10/major-impact-president-donald-trumps-first-50-days-in-office/",
						"display_url": "breitbart.com/big-government…",
						"indices": [
							107,
							130
						]
					}
				]
			},
			"source": "<a href=\"http://twitter.com\" rel=\"nofollow\">Twitter Web Client</a>",
			"in_reply_to_status_id": null,
			"in_reply_to_status_id_str": null,
			"in_reply_to_user_id": null,
			"in_reply_to_user_id_str": null,
			"in_reply_to_screen_name": null,
			"user": {
				"id": 826155076280545300,
				"id_str": "826155076280545280",
				"name": "AmericaFirstPolicies",
				"screen_name": "AmericaFirstPol",
				"location": "",
				"description": "Non-profit organization dedicated to promoting @POTUS @realDonaldTrump key @WhiteHouse policy initiatives that put #AmericaFirst. #MAGA",
				"url": "https://t.co/hIfrbqGbsv",
				"entities": {
					"url": {
						"urls": [
							{
								"url": "https://t.co/hIfrbqGbsv",
								"expanded_url": "http://americafirstpolicies.org/",
								"display_url": "americafirstpolicies.org",
								"indices": [
									0,
									23
								]
							}
						]
					},
					"description": {
						"urls": []
					}
				},
				"protected": false,
				"followers_count": 8646,
				"friends_count": 16,
				"listed_count": 108,
				"created_at": "Mon Jan 30 19:48:14 +0000 2017",
				"favourites_count": 2,
				"utc_offset": null,
				"time_zone": null,
				"geo_enabled": false,
				"verified": true,
				"statuses_count": 232,
				"lang": "en",
				"contributors_enabled": false,
				"is_translator": false,
				"is_translation_enabled": false,
				"profile_background_color": "F5F8FA",
				"profile_background_image_url": null,
				"profile_background_image_url_https": null,
				"profile_background_tile": false,
				"profile_image_url": "http://pbs.twimg.com/profile_images/839605409602285568/kCNpX_YY_normal.jpg",
				"profile_image_url_https": "https://pbs.twimg.com/profile_images/839605409602285568/kCNpX_YY_normal.jpg",
				"profile_banner_url": "https://pbs.twimg.com/profile_banners/826155076280545280/1489012265",
				"profile_link_color": "1DA1F2",
				"profile_sidebar_border_color": "C0DEED",
				"profile_sidebar_fill_color": "DDEEF6",
				"profile_text_color": "333333",
				"profile_use_background_image": true,
				"has_extended_profile": false,
				"default_profile": true,
				"default_profile_image": false,
				"following": null,
				"follow_request_sent": null,
				"notifications": null,
				"translator_type": "none"
			},
			"geo": null,
			"coordinates": null,
			"place": null,
			"contributors": null,
			"is_quote_status": false,
			"retweet_count": 6033,
			"favorite_count": 27440,
			"favorited": false,
			"retweeted": false,
			"possibly_sensitive": false,
			"lang": "en"
		},
		"is_quote_status": false,
		"retweet_count": 6033,
		"favorite_count": 0,
		"favorited": false,
		"retweeted": false,
		"lang": "en"
	},
	{
		"created_at": "Fri Mar 17 12:20:22 +0000 2017",
		"id": 842712210896052200,
		"id_str": "842712210896052225",
		"text": "RT @FoxNews: Jobs created in February. https://t.co/sOaMDxxTA8",
		"truncated": false,
		"entities": {
			"hashtags": [],
			"symbols": [],
			"user_mentions": [
				{
					"screen_name": "FoxNews",
					"name": "Fox News",
					"id": 1367531,
					"id_str": "1367531",
					"indices": [
						3,
						11
					]
				}
			],
			"urls": [],
			"media": [
				{
					"id": 840935729987440600,
					"id_str": "840935729987440640",
					"indices": [
						39,
						62
					],
					"media_url": "http://pbs.twimg.com/media/C6ual0jV0AAV4BH.jpg",
					"media_url_https": "https://pbs.twimg.com/media/C6ual0jV0AAV4BH.jpg",
					"url": "https://t.co/sOaMDxxTA8",
					"display_url": "pic.twitter.com/sOaMDxxTA8",
					"expanded_url": "https://twitter.com/FoxNews/status/840935751856599040/photo/1",
					"type": "photo",
					"sizes": {
						"medium": {
							"w": 1200,
							"h": 675,
							"resize": "fit"
						},
						"thumb": {
							"w": 150,
							"h": 150,
							"resize": "crop"
						},
						"small": {
							"w": 680,
							"h": 383,
							"resize": "fit"
						},
						"large": {
							"w": 1280,
							"h": 720,
							"resize": "fit"
						}
					},
					"source_status_id": 840935751856599000,
					"source_status_id_str": "840935751856599040",
					"source_user_id": 1367531,
					"source_user_id_str": "1367531"
				}
			]
		},
		"extended_entities": {
			"media": [
				{
					"id": 840935729987440600,
					"id_str": "840935729987440640",
					"indices": [
						39,
						62
					],
					"media_url": "http://pbs.twimg.com/media/C6ual0jV0AAV4BH.jpg",
					"media_url_https": "https://pbs.twimg.com/media/C6ual0jV0AAV4BH.jpg",
					"url": "https://t.co/sOaMDxxTA8",
					"display_url": "pic.twitter.com/sOaMDxxTA8",
					"expanded_url": "https://twitter.com/FoxNews/status/840935751856599040/photo/1",
					"type": "photo",
					"sizes": {
						"medium": {
							"w": 1200,
							"h": 675,
							"resize": "fit"
						},
						"thumb": {
							"w": 150,
							"h": 150,
							"resize": "crop"
						},
						"small": {
							"w": 680,
							"h": 383,
							"resize": "fit"
						},
						"large": {
							"w": 1280,
							"h": 720,
							"resize": "fit"
						}
					},
					"source_status_id": 840935751856599000,
					"source_status_id_str": "840935751856599040",
					"source_user_id": 1367531,
					"source_user_id_str": "1367531"
				}
			]
		},
		"source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
		"in_reply_to_status_id": null,
		"in_reply_to_status_id_str": null,
		"in_reply_to_user_id": null,
		"in_reply_to_user_id_str": null,
		"in_reply_to_screen_name": null,
		"user": {
			"id": 25073877,
			"id_str": "25073877",
			"name": "Donald J. Trump",
			"screen_name": "realDonaldTrump",
			"location": "Washington, DC",
			"description": "45th President of the United States of America",
			"url": null,
			"entities": {
				"description": {
					"urls": []
				}
			},
			"protected": false,
			"followers_count": 27379007,
			"friends_count": 43,
			"listed_count": 67563,
			"created_at": "Wed Mar 18 13:46:38 +0000 2009",
			"favourites_count": 47,
			"utc_offset": -14400,
			"time_zone": "Eastern Time (US & Canada)",
			"geo_enabled": true,
			"verified": true,
			"statuses_count": 34705,
			"lang": "en",
			"contributors_enabled": false,
			"is_translator": false,
			"is_translation_enabled": true,
			"profile_background_color": "6D5C18",
			"profile_background_image_url": "http://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_tile": true,
			"profile_image_url": "http://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_image_url_https": "https://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_banner_url": "https://pbs.twimg.com/profile_banners/25073877/1489657715",
			"profile_link_color": "0D5B73",
			"profile_sidebar_border_color": "BDDCAD",
			"profile_sidebar_fill_color": "C5CEC0",
			"profile_text_color": "333333",
			"profile_use_background_image": true,
			"has_extended_profile": false,
			"default_profile": false,
			"default_profile_image": false,
			"following": null,
			"follow_request_sent": null,
			"notifications": null,
			"translator_type": "regular"
		},
		"geo": null,
		"coordinates": null,
		"place": null,
		"contributors": null,
		"retweeted_status": {
			"created_at": "Sun Mar 12 14:41:21 +0000 2017",
			"id": 840935751856599000,
			"id_str": "840935751856599040",
			"text": "Jobs created in February. https://t.co/sOaMDxxTA8",
			"truncated": false,
			"entities": {
				"hashtags": [],
				"symbols": [],
				"user_mentions": [],
				"urls": [],
				"media": [
					{
						"id": 840935729987440600,
						"id_str": "840935729987440640",
						"indices": [
							26,
							49
						],
						"media_url": "http://pbs.twimg.com/media/C6ual0jV0AAV4BH.jpg",
						"media_url_https": "https://pbs.twimg.com/media/C6ual0jV0AAV4BH.jpg",
						"url": "https://t.co/sOaMDxxTA8",
						"display_url": "pic.twitter.com/sOaMDxxTA8",
						"expanded_url": "https://twitter.com/FoxNews/status/840935751856599040/photo/1",
						"type": "photo",
						"sizes": {
							"medium": {
								"w": 1200,
								"h": 675,
								"resize": "fit"
							},
							"thumb": {
								"w": 150,
								"h": 150,
								"resize": "crop"
							},
							"small": {
								"w": 680,
								"h": 383,
								"resize": "fit"
							},
							"large": {
								"w": 1280,
								"h": 720,
								"resize": "fit"
							}
						}
					}
				]
			},
			"extended_entities": {
				"media": [
					{
						"id": 840935729987440600,
						"id_str": "840935729987440640",
						"indices": [
							26,
							49
						],
						"media_url": "http://pbs.twimg.com/media/C6ual0jV0AAV4BH.jpg",
						"media_url_https": "https://pbs.twimg.com/media/C6ual0jV0AAV4BH.jpg",
						"url": "https://t.co/sOaMDxxTA8",
						"display_url": "pic.twitter.com/sOaMDxxTA8",
						"expanded_url": "https://twitter.com/FoxNews/status/840935751856599040/photo/1",
						"type": "photo",
						"sizes": {
							"medium": {
								"w": 1200,
								"h": 675,
								"resize": "fit"
							},
							"thumb": {
								"w": 150,
								"h": 150,
								"resize": "crop"
							},
							"small": {
								"w": 680,
								"h": 383,
								"resize": "fit"
							},
							"large": {
								"w": 1280,
								"h": 720,
								"resize": "fit"
							}
						}
					}
				]
			},
			"source": "<a href=\"http://twitter.com\" rel=\"nofollow\">Twitter Web Client</a>",
			"in_reply_to_status_id": null,
			"in_reply_to_status_id_str": null,
			"in_reply_to_user_id": null,
			"in_reply_to_user_id_str": null,
			"in_reply_to_screen_name": null,
			"user": {
				"id": 1367531,
				"id_str": "1367531",
				"name": "Fox News",
				"screen_name": "FoxNews",
				"location": "U.S.A.",
				"description": "America’s Strongest Primetime Lineup Anywhere! Follow America's #1 cable news network, delivering you breaking news, insightful analysis, and must-see videos.",
				"url": "http://t.co/ZYG58XZtAC",
				"entities": {
					"url": {
						"urls": [
							{
								"url": "http://t.co/ZYG58XZtAC",
								"expanded_url": "http://www.foxnews.com",
								"display_url": "foxnews.com",
								"indices": [
									0,
									22
								]
							}
						]
					},
					"description": {
						"urls": []
					}
				},
				"protected": false,
				"followers_count": 13977735,
				"friends_count": 435,
				"listed_count": 58185,
				"created_at": "Sat Mar 17 19:01:26 +0000 2007",
				"favourites_count": 0,
				"utc_offset": -14400,
				"time_zone": "Eastern Time (US & Canada)",
				"geo_enabled": false,
				"verified": true,
				"statuses_count": 301965,
				"lang": "en",
				"contributors_enabled": false,
				"is_translator": false,
				"is_translation_enabled": true,
				"profile_background_color": "0E2331",
				"profile_background_image_url": "http://pbs.twimg.com/profile_background_images/414488415/xyz123abc.jpg",
				"profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/414488415/xyz123abc.jpg",
				"profile_background_tile": false,
				"profile_image_url": "http://pbs.twimg.com/profile_images/794654746342662144/hHnFe4Sx_normal.jpg",
				"profile_image_url_https": "https://pbs.twimg.com/profile_images/794654746342662144/hHnFe4Sx_normal.jpg",
				"profile_banner_url": "https://pbs.twimg.com/profile_banners/1367531/1483765207",
				"profile_link_color": "183A52",
				"profile_sidebar_border_color": "FFFFFF",
				"profile_sidebar_fill_color": "F4F4F4",
				"profile_text_color": "000000",
				"profile_use_background_image": true,
				"has_extended_profile": false,
				"default_profile": false,
				"default_profile_image": false,
				"following": null,
				"follow_request_sent": null,
				"notifications": null,
				"translator_type": "regular"
			},
			"geo": null,
			"coordinates": null,
			"place": null,
			"contributors": null,
			"is_quote_status": false,
			"retweet_count": 7710,
			"favorite_count": 30513,
			"favorited": false,
			"retweeted": false,
			"possibly_sensitive": false,
			"lang": "en"
		},
		"is_quote_status": false,
		"retweet_count": 7710,
		"favorite_count": 0,
		"favorited": false,
		"retweeted": false,
		"possibly_sensitive": false,
		"lang": "en"
	},
	{
		"created_at": "Fri Mar 17 12:12:04 +0000 2017",
		"id": 842710123852320800,
		"id_str": "842710123852320770",
		"text": "Happy Lá Fheile Phadraig to all of my great Irish friends!",
		"truncated": false,
		"entities": {
			"hashtags": [],
			"symbols": [],
			"user_mentions": [],
			"urls": []
		},
		"source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
		"in_reply_to_status_id": null,
		"in_reply_to_status_id_str": null,
		"in_reply_to_user_id": null,
		"in_reply_to_user_id_str": null,
		"in_reply_to_screen_name": null,
		"user": {
			"id": 25073877,
			"id_str": "25073877",
			"name": "Donald J. Trump",
			"screen_name": "realDonaldTrump",
			"location": "Washington, DC",
			"description": "45th President of the United States of America",
			"url": null,
			"entities": {
				"description": {
					"urls": []
				}
			},
			"protected": false,
			"followers_count": 27379007,
			"friends_count": 43,
			"listed_count": 67563,
			"created_at": "Wed Mar 18 13:46:38 +0000 2009",
			"favourites_count": 47,
			"utc_offset": -14400,
			"time_zone": "Eastern Time (US & Canada)",
			"geo_enabled": true,
			"verified": true,
			"statuses_count": 34705,
			"lang": "en",
			"contributors_enabled": false,
			"is_translator": false,
			"is_translation_enabled": true,
			"profile_background_color": "6D5C18",
			"profile_background_image_url": "http://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_tile": true,
			"profile_image_url": "http://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_image_url_https": "https://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_banner_url": "https://pbs.twimg.com/profile_banners/25073877/1489657715",
			"profile_link_color": "0D5B73",
			"profile_sidebar_border_color": "BDDCAD",
			"profile_sidebar_fill_color": "C5CEC0",
			"profile_text_color": "333333",
			"profile_use_background_image": true,
			"has_extended_profile": false,
			"default_profile": false,
			"default_profile_image": false,
			"following": null,
			"follow_request_sent": null,
			"notifications": null,
			"translator_type": "regular"
		},
		"geo": null,
		"coordinates": null,
		"place": null,
		"contributors": null,
		"is_quote_status": false,
		"retweet_count": 12265,
		"favorite_count": 69295,
		"favorited": false,
		"retweeted": false,
		"lang": "en"
	},
	{
		"created_at": "Fri Mar 17 09:35:58 +0000 2017",
		"id": 842670836905640000,
		"id_str": "842670836905639936",
		"text": "RT @DiamondandSilk: When the President says \"You're Fired\"     That means: \"Pack Yo Stuff and Go, Not Say \"You Refuse to Go!  #DrainTheSwam…",
		"truncated": false,
		"entities": {
			"hashtags": [],
			"symbols": [],
			"user_mentions": [
				{
					"screen_name": "DiamondandSilk",
					"name": "Diamond and Silk®",
					"id": 2908170952,
					"id_str": "2908170952",
					"indices": [
						3,
						18
					]
				}
			],
			"urls": []
		},
		"source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
		"in_reply_to_status_id": null,
		"in_reply_to_status_id_str": null,
		"in_reply_to_user_id": null,
		"in_reply_to_user_id_str": null,
		"in_reply_to_screen_name": null,
		"user": {
			"id": 25073877,
			"id_str": "25073877",
			"name": "Donald J. Trump",
			"screen_name": "realDonaldTrump",
			"location": "Washington, DC",
			"description": "45th President of the United States of America",
			"url": null,
			"entities": {
				"description": {
					"urls": []
				}
			},
			"protected": false,
			"followers_count": 27379007,
			"friends_count": 43,
			"listed_count": 67563,
			"created_at": "Wed Mar 18 13:46:38 +0000 2009",
			"favourites_count": 47,
			"utc_offset": -14400,
			"time_zone": "Eastern Time (US & Canada)",
			"geo_enabled": true,
			"verified": true,
			"statuses_count": 34705,
			"lang": "en",
			"contributors_enabled": false,
			"is_translator": false,
			"is_translation_enabled": true,
			"profile_background_color": "6D5C18",
			"profile_background_image_url": "http://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_tile": true,
			"profile_image_url": "http://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_image_url_https": "https://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_banner_url": "https://pbs.twimg.com/profile_banners/25073877/1489657715",
			"profile_link_color": "0D5B73",
			"profile_sidebar_border_color": "BDDCAD",
			"profile_sidebar_fill_color": "C5CEC0",
			"profile_text_color": "333333",
			"profile_use_background_image": true,
			"has_extended_profile": false,
			"default_profile": false,
			"default_profile_image": false,
			"following": null,
			"follow_request_sent": null,
			"notifications": null,
			"translator_type": "regular"
		},
		"geo": null,
		"coordinates": null,
		"place": null,
		"contributors": null,
		"retweeted_status": {
			"created_at": "Sat Mar 11 21:50:15 +0000 2017",
			"id": 840681298469503000,
			"id_str": "840681298469502976",
			"text": "When the President says \"You're Fired\"     That means: \"Pack Yo Stuff and Go, Not Say \"You Refuse to Go!… https://t.co/aV9O7KFsmQ",
			"truncated": true,
			"entities": {
				"hashtags": [],
				"symbols": [],
				"user_mentions": [],
				"urls": [
					{
						"url": "https://t.co/aV9O7KFsmQ",
						"expanded_url": "https://twitter.com/i/web/status/840681298469502976",
						"display_url": "twitter.com/i/web/status/8…",
						"indices": [
							106,
							129
						]
					}
				]
			},
			"source": "<a href=\"http://twitter.com\" rel=\"nofollow\">Twitter Web Client</a>",
			"in_reply_to_status_id": null,
			"in_reply_to_status_id_str": null,
			"in_reply_to_user_id": null,
			"in_reply_to_user_id_str": null,
			"in_reply_to_screen_name": null,
			"user": {
				"id": 2908170952,
				"id_str": "2908170952",
				"name": "Diamond and Silk®",
				"screen_name": "DiamondandSilk",
				"location": "United States",
				"description": "President Donald J Trump's Most Outspoken & Loyal Supporters. Vloggers, Public Figures & Speakers. Internet, Radio & TV Personality. #ChooChooBaby #VoteYOassOut",
				"url": "https://t.co/xdbTGlyGDv",
				"entities": {
					"url": {
						"urls": [
							{
								"url": "https://t.co/xdbTGlyGDv",
								"expanded_url": "http://www.DiamondandSilk.com",
								"display_url": "DiamondandSilk.com",
								"indices": [
									0,
									23
								]
							}
						]
					},
					"description": {
						"urls": []
					}
				},
				"protected": false,
				"followers_count": 289741,
				"friends_count": 43,
				"listed_count": 1280,
				"created_at": "Sat Dec 06 18:49:06 +0000 2014",
				"favourites_count": 1397,
				"utc_offset": -14400,
				"time_zone": "Eastern Time (US & Canada)",
				"geo_enabled": false,
				"verified": true,
				"statuses_count": 4098,
				"lang": "en",
				"contributors_enabled": false,
				"is_translator": false,
				"is_translation_enabled": false,
				"profile_background_color": "000000",
				"profile_background_image_url": "http://abs.twimg.com/images/themes/theme15/bg.png",
				"profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme15/bg.png",
				"profile_background_tile": false,
				"profile_image_url": "http://pbs.twimg.com/profile_images/813539744395055104/iCefx41K_normal.jpg",
				"profile_image_url_https": "https://pbs.twimg.com/profile_images/813539744395055104/iCefx41K_normal.jpg",
				"profile_banner_url": "https://pbs.twimg.com/profile_banners/2908170952/1486302134",
				"profile_link_color": "9266CC",
				"profile_sidebar_border_color": "000000",
				"profile_sidebar_fill_color": "000000",
				"profile_text_color": "000000",
				"profile_use_background_image": false,
				"has_extended_profile": true,
				"default_profile": false,
				"default_profile_image": false,
				"following": null,
				"follow_request_sent": null,
				"notifications": null,
				"translator_type": "none"
			},
			"geo": null,
			"coordinates": null,
			"place": null,
			"contributors": null,
			"is_quote_status": false,
			"retweet_count": 10921,
			"favorite_count": 44875,
			"favorited": false,
			"retweeted": false,
			"possibly_sensitive": false,
			"lang": "en"
		},
		"is_quote_status": false,
		"retweet_count": 10921,
		"favorite_count": 0,
		"favorited": false,
		"retweeted": false,
		"lang": "en"
	},
	{
		"created_at": "Thu Mar 16 22:43:32 +0000 2017",
		"id": 842506649122279400,
		"id_str": "842506649122279425",
		"text": "My representatives had a great meeting w/ the Hispanic Chamber of Commerce at the WH today. Look forward to tremendous growth &amp; future mtgs!",
		"truncated": false,
		"entities": {
			"hashtags": [],
			"symbols": [],
			"user_mentions": [],
			"urls": []
		},
		"source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
		"in_reply_to_status_id": null,
		"in_reply_to_status_id_str": null,
		"in_reply_to_user_id": null,
		"in_reply_to_user_id_str": null,
		"in_reply_to_screen_name": null,
		"user": {
			"id": 25073877,
			"id_str": "25073877",
			"name": "Donald J. Trump",
			"screen_name": "realDonaldTrump",
			"location": "Washington, DC",
			"description": "45th President of the United States of America",
			"url": null,
			"entities": {
				"description": {
					"urls": []
				}
			},
			"protected": false,
			"followers_count": 27379007,
			"friends_count": 43,
			"listed_count": 67563,
			"created_at": "Wed Mar 18 13:46:38 +0000 2009",
			"favourites_count": 47,
			"utc_offset": -14400,
			"time_zone": "Eastern Time (US & Canada)",
			"geo_enabled": true,
			"verified": true,
			"statuses_count": 34705,
			"lang": "en",
			"contributors_enabled": false,
			"is_translator": false,
			"is_translation_enabled": true,
			"profile_background_color": "6D5C18",
			"profile_background_image_url": "http://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_tile": true,
			"profile_image_url": "http://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_image_url_https": "https://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_banner_url": "https://pbs.twimg.com/profile_banners/25073877/1489657715",
			"profile_link_color": "0D5B73",
			"profile_sidebar_border_color": "BDDCAD",
			"profile_sidebar_fill_color": "C5CEC0",
			"profile_text_color": "333333",
			"profile_use_background_image": true,
			"has_extended_profile": false,
			"default_profile": false,
			"default_profile_image": false,
			"following": null,
			"follow_request_sent": null,
			"notifications": null,
			"translator_type": "regular"
		},
		"geo": null,
		"coordinates": null,
		"place": null,
		"contributors": null,
		"is_quote_status": false,
		"retweet_count": 10664,
		"favorite_count": 65265,
		"favorited": false,
		"retweeted": false,
		"lang": "en"
	},
	{
		"created_at": "Thu Mar 16 21:54:02 +0000 2017",
		"id": 842494190990901200,
		"id_str": "842494190990901248",
		"text": "Great progress on healthcare. Improvements being made - Republicans coming together!",
		"truncated": false,
		"entities": {
			"hashtags": [],
			"symbols": [],
			"user_mentions": [],
			"urls": []
		},
		"source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
		"in_reply_to_status_id": null,
		"in_reply_to_status_id_str": null,
		"in_reply_to_user_id": null,
		"in_reply_to_user_id_str": null,
		"in_reply_to_screen_name": null,
		"user": {
			"id": 25073877,
			"id_str": "25073877",
			"name": "Donald J. Trump",
			"screen_name": "realDonaldTrump",
			"location": "Washington, DC",
			"description": "45th President of the United States of America",
			"url": null,
			"entities": {
				"description": {
					"urls": []
				}
			},
			"protected": false,
			"followers_count": 27379007,
			"friends_count": 43,
			"listed_count": 67563,
			"created_at": "Wed Mar 18 13:46:38 +0000 2009",
			"favourites_count": 47,
			"utc_offset": -14400,
			"time_zone": "Eastern Time (US & Canada)",
			"geo_enabled": true,
			"verified": true,
			"statuses_count": 34705,
			"lang": "en",
			"contributors_enabled": false,
			"is_translator": false,
			"is_translation_enabled": true,
			"profile_background_color": "6D5C18",
			"profile_background_image_url": "http://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_tile": true,
			"profile_image_url": "http://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_image_url_https": "https://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_banner_url": "https://pbs.twimg.com/profile_banners/25073877/1489657715",
			"profile_link_color": "0D5B73",
			"profile_sidebar_border_color": "BDDCAD",
			"profile_sidebar_fill_color": "C5CEC0",
			"profile_text_color": "333333",
			"profile_use_background_image": true,
			"has_extended_profile": false,
			"default_profile": false,
			"default_profile_image": false,
			"following": null,
			"follow_request_sent": null,
			"notifications": null,
			"translator_type": "regular"
		},
		"geo": null,
		"coordinates": null,
		"place": null,
		"contributors": null,
		"is_quote_status": false,
		"retweet_count": 11366,
		"favorite_count": 70959,
		"favorited": false,
		"retweeted": false,
		"lang": "en"
	},
	{
		"created_at": "Thu Mar 16 21:43:07 +0000 2017",
		"id": 842491443675611100,
		"id_str": "842491443675611138",
		"text": "RT @USHCC: USHCC was delighted to host @IvankaTrump for a roundtable discussion w/ Hispanic women biz owners today in Washington #USHCCLegi…",
		"truncated": false,
		"entities": {
			"hashtags": [],
			"symbols": [],
			"user_mentions": [
				{
					"screen_name": "USHCC",
					"name": "USHCC",
					"id": 74588583,
					"id_str": "74588583",
					"indices": [
						3,
						9
					]
				},
				{
					"screen_name": "IvankaTrump",
					"name": "Ivanka Trump",
					"id": 52544275,
					"id_str": "52544275",
					"indices": [
						39,
						51
					]
				}
			],
			"urls": []
		},
		"source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
		"in_reply_to_status_id": null,
		"in_reply_to_status_id_str": null,
		"in_reply_to_user_id": null,
		"in_reply_to_user_id_str": null,
		"in_reply_to_screen_name": null,
		"user": {
			"id": 25073877,
			"id_str": "25073877",
			"name": "Donald J. Trump",
			"screen_name": "realDonaldTrump",
			"location": "Washington, DC",
			"description": "45th President of the United States of America",
			"url": null,
			"entities": {
				"description": {
					"urls": []
				}
			},
			"protected": false,
			"followers_count": 27379007,
			"friends_count": 43,
			"listed_count": 67563,
			"created_at": "Wed Mar 18 13:46:38 +0000 2009",
			"favourites_count": 47,
			"utc_offset": -14400,
			"time_zone": "Eastern Time (US & Canada)",
			"geo_enabled": true,
			"verified": true,
			"statuses_count": 34705,
			"lang": "en",
			"contributors_enabled": false,
			"is_translator": false,
			"is_translation_enabled": true,
			"profile_background_color": "6D5C18",
			"profile_background_image_url": "http://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_tile": true,
			"profile_image_url": "http://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_image_url_https": "https://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_banner_url": "https://pbs.twimg.com/profile_banners/25073877/1489657715",
			"profile_link_color": "0D5B73",
			"profile_sidebar_border_color": "BDDCAD",
			"profile_sidebar_fill_color": "C5CEC0",
			"profile_text_color": "333333",
			"profile_use_background_image": true,
			"has_extended_profile": false,
			"default_profile": false,
			"default_profile_image": false,
			"following": null,
			"follow_request_sent": null,
			"notifications": null,
			"translator_type": "regular"
		},
		"geo": null,
		"coordinates": null,
		"place": null,
		"contributors": null,
		"retweeted_status": {
			"created_at": "Thu Mar 16 18:28:22 +0000 2017",
			"id": 842442433887641600,
			"id_str": "842442433887641603",
			"text": "USHCC was delighted to host @IvankaTrump for a roundtable discussion w/ Hispanic women biz owners today in Washingt… https://t.co/1XoDYwBK9j",
			"truncated": true,
			"entities": {
				"hashtags": [],
				"symbols": [],
				"user_mentions": [
					{
						"screen_name": "IvankaTrump",
						"name": "Ivanka Trump",
						"id": 52544275,
						"id_str": "52544275",
						"indices": [
							28,
							40
						]
					}
				],
				"urls": [
					{
						"url": "https://t.co/1XoDYwBK9j",
						"expanded_url": "https://twitter.com/i/web/status/842442433887641603",
						"display_url": "twitter.com/i/web/status/8…",
						"indices": [
							117,
							140
						]
					}
				]
			},
			"source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
			"in_reply_to_status_id": null,
			"in_reply_to_status_id_str": null,
			"in_reply_to_user_id": null,
			"in_reply_to_user_id_str": null,
			"in_reply_to_screen_name": null,
			"user": {
				"id": 74588583,
				"id_str": "74588583",
				"name": "USHCC",
				"screen_name": "USHCC",
				"location": "United States",
				"description": "The U.S. Hispanic Chamber of Commerce represents nearly 4.2 million U.S. Hispanic businesses, contributing over $668 billion to the American economy each year.",
				"url": "https://t.co/wAetSYtiKi",
				"entities": {
					"url": {
						"urls": [
							{
								"url": "https://t.co/wAetSYtiKi",
								"expanded_url": "http://ushcc.com",
								"display_url": "ushcc.com",
								"indices": [
									0,
									23
								]
							}
						]
					},
					"description": {
						"urls": []
					}
				},
				"protected": false,
				"followers_count": 8098,
				"friends_count": 911,
				"listed_count": 160,
				"created_at": "Tue Sep 15 23:22:37 +0000 2009",
				"favourites_count": 359,
				"utc_offset": -14400,
				"time_zone": "Eastern Time (US & Canada)",
				"geo_enabled": true,
				"verified": false,
				"statuses_count": 4070,
				"lang": "en",
				"contributors_enabled": false,
				"is_translator": false,
				"is_translation_enabled": false,
				"profile_background_color": "222B8F",
				"profile_background_image_url": "http://pbs.twimg.com/profile_background_images/378800000182400515/jqW51q2Z.jpeg",
				"profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/378800000182400515/jqW51q2Z.jpeg",
				"profile_background_tile": true,
				"profile_image_url": "http://pbs.twimg.com/profile_images/475416120925503488/6ofElSAD_normal.png",
				"profile_image_url_https": "https://pbs.twimg.com/profile_images/475416120925503488/6ofElSAD_normal.png",
				"profile_banner_url": "https://pbs.twimg.com/profile_banners/74588583/1479398439",
				"profile_link_color": "1B95E0",
				"profile_sidebar_border_color": "000000",
				"profile_sidebar_fill_color": "EFEFEF",
				"profile_text_color": "333333",
				"profile_use_background_image": true,
				"has_extended_profile": false,
				"default_profile": false,
				"default_profile_image": false,
				"following": null,
				"follow_request_sent": null,
				"notifications": null,
				"translator_type": "none"
			},
			"geo": null,
			"coordinates": null,
			"place": null,
			"contributors": null,
			"is_quote_status": false,
			"retweet_count": 7420,
			"favorite_count": 33933,
			"favorited": false,
			"retweeted": false,
			"possibly_sensitive": false,
			"lang": "en"
		},
		"is_quote_status": false,
		"retweet_count": 7420,
		"favorite_count": 0,
		"favorited": false,
		"retweeted": false,
		"lang": "en"
	},
	{
		"created_at": "Thu Mar 16 20:09:38 +0000 2017",
		"id": 842467917639913500,
		"id_str": "842467917639913472",
		"text": "An honor to welcome the Taoiseach of Ireland, @EndaKennyTD to the @WhiteHouse today with @VP Pence. 🇺🇸🇮🇪 https://t.co/J3iTl2iSiQ",
		"truncated": false,
		"entities": {
			"hashtags": [],
			"symbols": [],
			"user_mentions": [
				{
					"screen_name": "EndaKennyTD",
					"name": "Enda Kenny",
					"id": 135514272,
					"id_str": "135514272",
					"indices": [
						46,
						58
					]
				},
				{
					"screen_name": "WhiteHouse",
					"name": "The White House",
					"id": 822215673812119600,
					"id_str": "822215673812119553",
					"indices": [
						66,
						77
					]
				},
				{
					"screen_name": "VP",
					"name": "Vice President Pence",
					"id": 818910970567344100,
					"id_str": "818910970567344128",
					"indices": [
						89,
						92
					]
				}
			],
			"urls": [],
			"media": [
				{
					"id": 842463948288979000,
					"id_str": "842463948288978944",
					"indices": [
						105,
						128
					],
					"media_url": "http://pbs.twimg.com/ext_tw_video_thumb/842463948288978944/pu/img/CTsU0Xe_rIQQgwkI.jpg",
					"media_url_https": "https://pbs.twimg.com/ext_tw_video_thumb/842463948288978944/pu/img/CTsU0Xe_rIQQgwkI.jpg",
					"url": "https://t.co/J3iTl2iSiQ",
					"display_url": "pic.twitter.com/J3iTl2iSiQ",
					"expanded_url": "https://twitter.com/realDonaldTrump/status/842467917639913472/video/1",
					"type": "photo",
					"sizes": {
						"thumb": {
							"w": 150,
							"h": 150,
							"resize": "crop"
						},
						"medium": {
							"w": 600,
							"h": 338,
							"resize": "fit"
						},
						"small": {
							"w": 340,
							"h": 191,
							"resize": "fit"
						},
						"large": {
							"w": 1024,
							"h": 576,
							"resize": "fit"
						}
					}
				}
			]
		},
		"extended_entities": {
			"media": [
				{
					"id": 842463948288979000,
					"id_str": "842463948288978944",
					"indices": [
						105,
						128
					],
					"media_url": "http://pbs.twimg.com/ext_tw_video_thumb/842463948288978944/pu/img/CTsU0Xe_rIQQgwkI.jpg",
					"media_url_https": "https://pbs.twimg.com/ext_tw_video_thumb/842463948288978944/pu/img/CTsU0Xe_rIQQgwkI.jpg",
					"url": "https://t.co/J3iTl2iSiQ",
					"display_url": "pic.twitter.com/J3iTl2iSiQ",
					"expanded_url": "https://twitter.com/realDonaldTrump/status/842467917639913472/video/1",
					"type": "video",
					"sizes": {
						"thumb": {
							"w": 150,
							"h": 150,
							"resize": "crop"
						},
						"medium": {
							"w": 600,
							"h": 338,
							"resize": "fit"
						},
						"small": {
							"w": 340,
							"h": 191,
							"resize": "fit"
						},
						"large": {
							"w": 1024,
							"h": 576,
							"resize": "fit"
						}
					},
					"video_info": {
						"aspect_ratio": [
							16,
							9
						],
						"duration_millis": 125400,
						"variants": [
							{
								"bitrate": 832000,
								"content_type": "video/mp4",
								"url": "https://video.twimg.com/ext_tw_video/842463948288978944/pu/vid/640x360/NKklG442LRXUBaCX.mp4"
							},
							{
								"bitrate": 320000,
								"content_type": "video/mp4",
								"url": "https://video.twimg.com/ext_tw_video/842463948288978944/pu/vid/320x180/xlZ9rDJqXHZ_IR9W.mp4"
							},
							{
								"bitrate": 2176000,
								"content_type": "video/mp4",
								"url": "https://video.twimg.com/ext_tw_video/842463948288978944/pu/vid/1280x720/MCRF1wRPhcDXKk4e.mp4"
							},
							{
								"content_type": "application/x-mpegURL",
								"url": "https://video.twimg.com/ext_tw_video/842463948288978944/pu/pl/jL17s49QCe25Ip4H.m3u8"
							}
						]
					},
					"additional_media_info": {
						"monetizable": false
					}
				}
			]
		},
		"source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
		"in_reply_to_status_id": null,
		"in_reply_to_status_id_str": null,
		"in_reply_to_user_id": null,
		"in_reply_to_user_id_str": null,
		"in_reply_to_screen_name": null,
		"user": {
			"id": 25073877,
			"id_str": "25073877",
			"name": "Donald J. Trump",
			"screen_name": "realDonaldTrump",
			"location": "Washington, DC",
			"description": "45th President of the United States of America",
			"url": null,
			"entities": {
				"description": {
					"urls": []
				}
			},
			"protected": false,
			"followers_count": 27379007,
			"friends_count": 43,
			"listed_count": 67563,
			"created_at": "Wed Mar 18 13:46:38 +0000 2009",
			"favourites_count": 47,
			"utc_offset": -14400,
			"time_zone": "Eastern Time (US & Canada)",
			"geo_enabled": true,
			"verified": true,
			"statuses_count": 34705,
			"lang": "en",
			"contributors_enabled": false,
			"is_translator": false,
			"is_translation_enabled": true,
			"profile_background_color": "6D5C18",
			"profile_background_image_url": "http://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_tile": true,
			"profile_image_url": "http://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_image_url_https": "https://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_banner_url": "https://pbs.twimg.com/profile_banners/25073877/1489657715",
			"profile_link_color": "0D5B73",
			"profile_sidebar_border_color": "BDDCAD",
			"profile_sidebar_fill_color": "C5CEC0",
			"profile_text_color": "333333",
			"profile_use_background_image": true,
			"has_extended_profile": false,
			"default_profile": false,
			"default_profile_image": false,
			"following": null,
			"follow_request_sent": null,
			"notifications": null,
			"translator_type": "regular"
		},
		"geo": null,
		"coordinates": null,
		"place": null,
		"contributors": null,
		"is_quote_status": false,
		"retweet_count": 10887,
		"favorite_count": 53564,
		"favorited": false,
		"retweeted": false,
		"possibly_sensitive": false,
		"lang": "en"
	},
	{
		"created_at": "Thu Mar 16 15:52:22 +0000 2017",
		"id": 842403173742579700,
		"id_str": "842403173742579714",
		"text": "A budget that puts #AmericaFirst must make safety its no. 1 priority—without safety there can be no prosperity: https://t.co/9lxx1iQo7m",
		"truncated": false,
		"entities": {
			"hashtags": [
				{
					"text": "AmericaFirst",
					"indices": [
						19,
						32
					]
				}
			],
			"symbols": [],
			"user_mentions": [],
			"urls": [
				{
					"url": "https://t.co/9lxx1iQo7m",
					"expanded_url": "http://45.wh.gov/NF9wr4",
					"display_url": "45.wh.gov/NF9wr4",
					"indices": [
						112,
						135
					]
				}
			]
		},
		"source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
		"in_reply_to_status_id": null,
		"in_reply_to_status_id_str": null,
		"in_reply_to_user_id": null,
		"in_reply_to_user_id_str": null,
		"in_reply_to_screen_name": null,
		"user": {
			"id": 25073877,
			"id_str": "25073877",
			"name": "Donald J. Trump",
			"screen_name": "realDonaldTrump",
			"location": "Washington, DC",
			"description": "45th President of the United States of America",
			"url": null,
			"entities": {
				"description": {
					"urls": []
				}
			},
			"protected": false,
			"followers_count": 27379007,
			"friends_count": 43,
			"listed_count": 67563,
			"created_at": "Wed Mar 18 13:46:38 +0000 2009",
			"favourites_count": 47,
			"utc_offset": -14400,
			"time_zone": "Eastern Time (US & Canada)",
			"geo_enabled": true,
			"verified": true,
			"statuses_count": 34705,
			"lang": "en",
			"contributors_enabled": false,
			"is_translator": false,
			"is_translation_enabled": true,
			"profile_background_color": "6D5C18",
			"profile_background_image_url": "http://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_tile": true,
			"profile_image_url": "http://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_image_url_https": "https://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_banner_url": "https://pbs.twimg.com/profile_banners/25073877/1489657715",
			"profile_link_color": "0D5B73",
			"profile_sidebar_border_color": "BDDCAD",
			"profile_sidebar_fill_color": "C5CEC0",
			"profile_text_color": "333333",
			"profile_use_background_image": true,
			"has_extended_profile": false,
			"default_profile": false,
			"default_profile_image": false,
			"following": null,
			"follow_request_sent": null,
			"notifications": null,
			"translator_type": "regular"
		},
		"geo": null,
		"coordinates": null,
		"place": null,
		"contributors": null,
		"is_quote_status": false,
		"retweet_count": 14690,
		"favorite_count": 69411,
		"favorited": false,
		"retweeted": false,
		"possibly_sensitive": false,
		"lang": "en"
	},
	{
		"created_at": "Thu Mar 16 04:20:41 +0000 2017",
		"id": 842229104434913300,
		"id_str": "842229104434913280",
		"text": "Thank you Nashville, Tennessee! https://t.co/6snvQ0DzXN",
		"truncated": false,
		"entities": {
			"hashtags": [],
			"symbols": [],
			"user_mentions": [],
			"urls": [],
			"media": [
				{
					"id": 842228606420017200,
					"id_str": "842228606420017152",
					"indices": [
						32,
						55
					],
					"media_url": "http://pbs.twimg.com/ext_tw_video_thumb/842228606420017152/pu/img/-e4wZ6BhhCL3nHau.jpg",
					"media_url_https": "https://pbs.twimg.com/ext_tw_video_thumb/842228606420017152/pu/img/-e4wZ6BhhCL3nHau.jpg",
					"url": "https://t.co/6snvQ0DzXN",
					"display_url": "pic.twitter.com/6snvQ0DzXN",
					"expanded_url": "https://twitter.com/realDonaldTrump/status/842229104434913280/video/1",
					"type": "photo",
					"sizes": {
						"thumb": {
							"w": 150,
							"h": 150,
							"resize": "crop"
						},
						"medium": {
							"w": 600,
							"h": 338,
							"resize": "fit"
						},
						"small": {
							"w": 340,
							"h": 191,
							"resize": "fit"
						},
						"large": {
							"w": 1024,
							"h": 576,
							"resize": "fit"
						}
					}
				}
			]
		},
		"extended_entities": {
			"media": [
				{
					"id": 842228606420017200,
					"id_str": "842228606420017152",
					"indices": [
						32,
						55
					],
					"media_url": "http://pbs.twimg.com/ext_tw_video_thumb/842228606420017152/pu/img/-e4wZ6BhhCL3nHau.jpg",
					"media_url_https": "https://pbs.twimg.com/ext_tw_video_thumb/842228606420017152/pu/img/-e4wZ6BhhCL3nHau.jpg",
					"url": "https://t.co/6snvQ0DzXN",
					"display_url": "pic.twitter.com/6snvQ0DzXN",
					"expanded_url": "https://twitter.com/realDonaldTrump/status/842229104434913280/video/1",
					"type": "video",
					"sizes": {
						"thumb": {
							"w": 150,
							"h": 150,
							"resize": "crop"
						},
						"medium": {
							"w": 600,
							"h": 338,
							"resize": "fit"
						},
						"small": {
							"w": 340,
							"h": 191,
							"resize": "fit"
						},
						"large": {
							"w": 1024,
							"h": 576,
							"resize": "fit"
						}
					},
					"video_info": {
						"aspect_ratio": [
							16,
							9
						],
						"duration_millis": 122867,
						"variants": [
							{
								"bitrate": 832000,
								"content_type": "video/mp4",
								"url": "https://video.twimg.com/ext_tw_video/842228606420017152/pu/vid/640x360/W7Vwo-s9d7jwRebv.mp4"
							},
							{
								"content_type": "application/x-mpegURL",
								"url": "https://video.twimg.com/ext_tw_video/842228606420017152/pu/pl/yIVf3DLHBx7FJZxD.m3u8"
							},
							{
								"bitrate": 2176000,
								"content_type": "video/mp4",
								"url": "https://video.twimg.com/ext_tw_video/842228606420017152/pu/vid/1280x720/4Ndkc_zfK8ASBMW6.mp4"
							},
							{
								"bitrate": 320000,
								"content_type": "video/mp4",
								"url": "https://video.twimg.com/ext_tw_video/842228606420017152/pu/vid/320x180/vdyll663HXtD72Wc.mp4"
							}
						]
					},
					"additional_media_info": {
						"monetizable": false
					}
				}
			]
		},
		"source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
		"in_reply_to_status_id": null,
		"in_reply_to_status_id_str": null,
		"in_reply_to_user_id": null,
		"in_reply_to_user_id_str": null,
		"in_reply_to_screen_name": null,
		"user": {
			"id": 25073877,
			"id_str": "25073877",
			"name": "Donald J. Trump",
			"screen_name": "realDonaldTrump",
			"location": "Washington, DC",
			"description": "45th President of the United States of America",
			"url": null,
			"entities": {
				"description": {
					"urls": []
				}
			},
			"protected": false,
			"followers_count": 27379007,
			"friends_count": 43,
			"listed_count": 67563,
			"created_at": "Wed Mar 18 13:46:38 +0000 2009",
			"favourites_count": 47,
			"utc_offset": -14400,
			"time_zone": "Eastern Time (US & Canada)",
			"geo_enabled": true,
			"verified": true,
			"statuses_count": 34705,
			"lang": "en",
			"contributors_enabled": false,
			"is_translator": false,
			"is_translation_enabled": true,
			"profile_background_color": "6D5C18",
			"profile_background_image_url": "http://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_tile": true,
			"profile_image_url": "http://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_image_url_https": "https://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_banner_url": "https://pbs.twimg.com/profile_banners/25073877/1489657715",
			"profile_link_color": "0D5B73",
			"profile_sidebar_border_color": "BDDCAD",
			"profile_sidebar_fill_color": "C5CEC0",
			"profile_text_color": "333333",
			"profile_use_background_image": true,
			"has_extended_profile": false,
			"default_profile": false,
			"default_profile_image": false,
			"following": null,
			"follow_request_sent": null,
			"notifications": null,
			"translator_type": "regular"
		},
		"geo": null,
		"coordinates": null,
		"place": null,
		"contributors": null,
		"is_quote_status": false,
		"retweet_count": 15287,
		"favorite_count": 81219,
		"favorited": false,
		"retweeted": false,
		"possibly_sensitive": false,
		"lang": "en"
	},
	{
		"created_at": "Thu Mar 16 00:03:23 +0000 2017",
		"id": 842164356297175000,
		"id_str": "842164356297175040",
		"text": "In Nashville, Tennessee! Lets MAKE AMERICA GREAT AGAIN! https://t.co/m5UR4vv6UH",
		"truncated": false,
		"entities": {
			"hashtags": [],
			"symbols": [],
			"user_mentions": [],
			"urls": [],
			"media": [
				{
					"id": 842163602580770800,
					"id_str": "842163602580770816",
					"indices": [
						56,
						79
					],
					"media_url": "http://pbs.twimg.com/ext_tw_video_thumb/842163602580770816/pu/img/zTpRjGZH9Sl1jdi0.jpg",
					"media_url_https": "https://pbs.twimg.com/ext_tw_video_thumb/842163602580770816/pu/img/zTpRjGZH9Sl1jdi0.jpg",
					"url": "https://t.co/m5UR4vv6UH",
					"display_url": "pic.twitter.com/m5UR4vv6UH",
					"expanded_url": "https://twitter.com/realDonaldTrump/status/842164356297175040/video/1",
					"type": "photo",
					"sizes": {
						"thumb": {
							"w": 150,
							"h": 150,
							"resize": "crop"
						},
						"medium": {
							"w": 600,
							"h": 338,
							"resize": "fit"
						},
						"small": {
							"w": 340,
							"h": 191,
							"resize": "fit"
						},
						"large": {
							"w": 1024,
							"h": 576,
							"resize": "fit"
						}
					}
				}
			]
		},
		"extended_entities": {
			"media": [
				{
					"id": 842163602580770800,
					"id_str": "842163602580770816",
					"indices": [
						56,
						79
					],
					"media_url": "http://pbs.twimg.com/ext_tw_video_thumb/842163602580770816/pu/img/zTpRjGZH9Sl1jdi0.jpg",
					"media_url_https": "https://pbs.twimg.com/ext_tw_video_thumb/842163602580770816/pu/img/zTpRjGZH9Sl1jdi0.jpg",
					"url": "https://t.co/m5UR4vv6UH",
					"display_url": "pic.twitter.com/m5UR4vv6UH",
					"expanded_url": "https://twitter.com/realDonaldTrump/status/842164356297175040/video/1",
					"type": "video",
					"sizes": {
						"thumb": {
							"w": 150,
							"h": 150,
							"resize": "crop"
						},
						"medium": {
							"w": 600,
							"h": 338,
							"resize": "fit"
						},
						"small": {
							"w": 340,
							"h": 191,
							"resize": "fit"
						},
						"large": {
							"w": 1024,
							"h": 576,
							"resize": "fit"
						}
					},
					"video_info": {
						"aspect_ratio": [
							16,
							9
						],
						"duration_millis": 12900,
						"variants": [
							{
								"content_type": "application/x-mpegURL",
								"url": "https://video.twimg.com/ext_tw_video/842163602580770816/pu/pl/DMJCddRob1dcgKp1.m3u8"
							},
							{
								"bitrate": 2176000,
								"content_type": "video/mp4",
								"url": "https://video.twimg.com/ext_tw_video/842163602580770816/pu/vid/1280x720/yhGkUA9EW531rMsP.mp4"
							},
							{
								"bitrate": 832000,
								"content_type": "video/mp4",
								"url": "https://video.twimg.com/ext_tw_video/842163602580770816/pu/vid/640x360/x17Z4dEXa71ThL_j.mp4"
							},
							{
								"bitrate": 320000,
								"content_type": "video/mp4",
								"url": "https://video.twimg.com/ext_tw_video/842163602580770816/pu/vid/320x180/p8wZsTJXg2q9UWIy.mp4"
							}
						]
					},
					"additional_media_info": {
						"monetizable": false
					}
				}
			]
		},
		"source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
		"in_reply_to_status_id": null,
		"in_reply_to_status_id_str": null,
		"in_reply_to_user_id": null,
		"in_reply_to_user_id_str": null,
		"in_reply_to_screen_name": null,
		"user": {
			"id": 25073877,
			"id_str": "25073877",
			"name": "Donald J. Trump",
			"screen_name": "realDonaldTrump",
			"location": "Washington, DC",
			"description": "45th President of the United States of America",
			"url": null,
			"entities": {
				"description": {
					"urls": []
				}
			},
			"protected": false,
			"followers_count": 27379007,
			"friends_count": 43,
			"listed_count": 67563,
			"created_at": "Wed Mar 18 13:46:38 +0000 2009",
			"favourites_count": 47,
			"utc_offset": -14400,
			"time_zone": "Eastern Time (US & Canada)",
			"geo_enabled": true,
			"verified": true,
			"statuses_count": 34705,
			"lang": "en",
			"contributors_enabled": false,
			"is_translator": false,
			"is_translation_enabled": true,
			"profile_background_color": "6D5C18",
			"profile_background_image_url": "http://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_tile": true,
			"profile_image_url": "http://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_image_url_https": "https://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_banner_url": "https://pbs.twimg.com/profile_banners/25073877/1489657715",
			"profile_link_color": "0D5B73",
			"profile_sidebar_border_color": "BDDCAD",
			"profile_sidebar_fill_color": "C5CEC0",
			"profile_text_color": "333333",
			"profile_use_background_image": true,
			"has_extended_profile": false,
			"default_profile": false,
			"default_profile_image": false,
			"following": null,
			"follow_request_sent": null,
			"notifications": null,
			"translator_type": "regular"
		},
		"geo": null,
		"coordinates": null,
		"place": null,
		"contributors": null,
		"is_quote_status": false,
		"retweet_count": 16832,
		"favorite_count": 87371,
		"favorited": false,
		"retweeted": false,
		"possibly_sensitive": false,
		"lang": "en"
	},
	{
		"created_at": "Wed Mar 15 23:25:25 +0000 2017",
		"id": 842154802058543100,
		"id_str": "842154802058543105",
		"text": "Thank you Andrew Jackson! #POTUS7 #USA🇺🇸 https://t.co/GToWsWXiNv",
		"truncated": false,
		"entities": {
			"hashtags": [
				{
					"text": "POTUS7",
					"indices": [
						26,
						33
					]
				},
				{
					"text": "USA",
					"indices": [
						34,
						38
					]
				}
			],
			"symbols": [],
			"user_mentions": [],
			"urls": [],
			"media": [
				{
					"id": 842154780399042600,
					"id_str": "842154780399042560",
					"indices": [
						41,
						64
					],
					"media_url": "http://pbs.twimg.com/media/C6_vT5OVAAAOM-V.jpg",
					"media_url_https": "https://pbs.twimg.com/media/C6_vT5OVAAAOM-V.jpg",
					"url": "https://t.co/GToWsWXiNv",
					"display_url": "pic.twitter.com/GToWsWXiNv",
					"expanded_url": "https://twitter.com/realDonaldTrump/status/842154802058543105/photo/1",
					"type": "photo",
					"sizes": {
						"medium": {
							"w": 1024,
							"h": 512,
							"resize": "fit"
						},
						"thumb": {
							"w": 150,
							"h": 150,
							"resize": "crop"
						},
						"small": {
							"w": 680,
							"h": 340,
							"resize": "fit"
						},
						"large": {
							"w": 1024,
							"h": 512,
							"resize": "fit"
						}
					}
				}
			]
		},
		"extended_entities": {
			"media": [
				{
					"id": 842154780399042600,
					"id_str": "842154780399042560",
					"indices": [
						41,
						64
					],
					"media_url": "http://pbs.twimg.com/media/C6_vT5OVAAAOM-V.jpg",
					"media_url_https": "https://pbs.twimg.com/media/C6_vT5OVAAAOM-V.jpg",
					"url": "https://t.co/GToWsWXiNv",
					"display_url": "pic.twitter.com/GToWsWXiNv",
					"expanded_url": "https://twitter.com/realDonaldTrump/status/842154802058543105/photo/1",
					"type": "photo",
					"sizes": {
						"medium": {
							"w": 1024,
							"h": 512,
							"resize": "fit"
						},
						"thumb": {
							"w": 150,
							"h": 150,
							"resize": "crop"
						},
						"small": {
							"w": 680,
							"h": 340,
							"resize": "fit"
						},
						"large": {
							"w": 1024,
							"h": 512,
							"resize": "fit"
						}
					}
				}
			]
		},
		"source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
		"in_reply_to_status_id": null,
		"in_reply_to_status_id_str": null,
		"in_reply_to_user_id": null,
		"in_reply_to_user_id_str": null,
		"in_reply_to_screen_name": null,
		"user": {
			"id": 25073877,
			"id_str": "25073877",
			"name": "Donald J. Trump",
			"screen_name": "realDonaldTrump",
			"location": "Washington, DC",
			"description": "45th President of the United States of America",
			"url": null,
			"entities": {
				"description": {
					"urls": []
				}
			},
			"protected": false,
			"followers_count": 27379007,
			"friends_count": 43,
			"listed_count": 67563,
			"created_at": "Wed Mar 18 13:46:38 +0000 2009",
			"favourites_count": 47,
			"utc_offset": -14400,
			"time_zone": "Eastern Time (US & Canada)",
			"geo_enabled": true,
			"verified": true,
			"statuses_count": 34705,
			"lang": "en",
			"contributors_enabled": false,
			"is_translator": false,
			"is_translation_enabled": true,
			"profile_background_color": "6D5C18",
			"profile_background_image_url": "http://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_tile": true,
			"profile_image_url": "http://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_image_url_https": "https://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_banner_url": "https://pbs.twimg.com/profile_banners/25073877/1489657715",
			"profile_link_color": "0D5B73",
			"profile_sidebar_border_color": "BDDCAD",
			"profile_sidebar_fill_color": "C5CEC0",
			"profile_text_color": "333333",
			"profile_use_background_image": true,
			"has_extended_profile": false,
			"default_profile": false,
			"default_profile_image": false,
			"following": null,
			"follow_request_sent": null,
			"notifications": null,
			"translator_type": "regular"
		},
		"geo": null,
		"coordinates": null,
		"place": null,
		"contributors": null,
		"is_quote_status": false,
		"retweet_count": 13500,
		"favorite_count": 67689,
		"favorited": false,
		"retweeted": false,
		"possibly_sensitive": false,
		"lang": "en"
	},
	{
		"created_at": "Wed Mar 15 20:55:52 +0000 2017",
		"id": 842117164144431100,
		"id_str": "842117164144431104",
		"text": "I will be interviewed by @TuckerCarlson tonight at 9:00 P.M. on @FoxNews. Enjoy!",
		"truncated": false,
		"entities": {
			"hashtags": [],
			"symbols": [],
			"user_mentions": [
				{
					"screen_name": "TuckerCarlson",
					"name": "Tucker Carlson",
					"id": 22703645,
					"id_str": "22703645",
					"indices": [
						25,
						39
					]
				},
				{
					"screen_name": "FoxNews",
					"name": "Fox News",
					"id": 1367531,
					"id_str": "1367531",
					"indices": [
						64,
						72
					]
				}
			],
			"urls": []
		},
		"source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
		"in_reply_to_status_id": null,
		"in_reply_to_status_id_str": null,
		"in_reply_to_user_id": null,
		"in_reply_to_user_id_str": null,
		"in_reply_to_screen_name": null,
		"user": {
			"id": 25073877,
			"id_str": "25073877",
			"name": "Donald J. Trump",
			"screen_name": "realDonaldTrump",
			"location": "Washington, DC",
			"description": "45th President of the United States of America",
			"url": null,
			"entities": {
				"description": {
					"urls": []
				}
			},
			"protected": false,
			"followers_count": 27379007,
			"friends_count": 43,
			"listed_count": 67563,
			"created_at": "Wed Mar 18 13:46:38 +0000 2009",
			"favourites_count": 47,
			"utc_offset": -14400,
			"time_zone": "Eastern Time (US & Canada)",
			"geo_enabled": true,
			"verified": true,
			"statuses_count": 34705,
			"lang": "en",
			"contributors_enabled": false,
			"is_translator": false,
			"is_translation_enabled": true,
			"profile_background_color": "6D5C18",
			"profile_background_image_url": "http://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_tile": true,
			"profile_image_url": "http://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_image_url_https": "https://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_banner_url": "https://pbs.twimg.com/profile_banners/25073877/1489657715",
			"profile_link_color": "0D5B73",
			"profile_sidebar_border_color": "BDDCAD",
			"profile_sidebar_fill_color": "C5CEC0",
			"profile_text_color": "333333",
			"profile_use_background_image": true,
			"has_extended_profile": false,
			"default_profile": false,
			"default_profile_image": false,
			"following": null,
			"follow_request_sent": null,
			"notifications": null,
			"translator_type": "regular"
		},
		"geo": null,
		"coordinates": null,
		"place": null,
		"contributors": null,
		"is_quote_status": false,
		"retweet_count": 9614,
		"favorite_count": 60694,
		"favorited": false,
		"retweeted": false,
		"lang": "en"
	},
	{
		"created_at": "Wed Mar 15 12:14:20 +0000 2017",
		"id": 841985915778142200,
		"id_str": "841985915778142209",
		"text": "CEO's most optimistic since 2009. It will only get better as we continue to slash unnecessary regulations and when we begin our big tax cut!",
		"truncated": false,
		"entities": {
			"hashtags": [],
			"symbols": [],
			"user_mentions": [],
			"urls": []
		},
		"source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
		"in_reply_to_status_id": null,
		"in_reply_to_status_id_str": null,
		"in_reply_to_user_id": null,
		"in_reply_to_user_id_str": null,
		"in_reply_to_screen_name": null,
		"user": {
			"id": 25073877,
			"id_str": "25073877",
			"name": "Donald J. Trump",
			"screen_name": "realDonaldTrump",
			"location": "Washington, DC",
			"description": "45th President of the United States of America",
			"url": null,
			"entities": {
				"description": {
					"urls": []
				}
			},
			"protected": false,
			"followers_count": 27379007,
			"friends_count": 43,
			"listed_count": 67563,
			"created_at": "Wed Mar 18 13:46:38 +0000 2009",
			"favourites_count": 47,
			"utc_offset": -14400,
			"time_zone": "Eastern Time (US & Canada)",
			"geo_enabled": true,
			"verified": true,
			"statuses_count": 34705,
			"lang": "en",
			"contributors_enabled": false,
			"is_translator": false,
			"is_translation_enabled": true,
			"profile_background_color": "6D5C18",
			"profile_background_image_url": "http://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_tile": true,
			"profile_image_url": "http://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_image_url_https": "https://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_banner_url": "https://pbs.twimg.com/profile_banners/25073877/1489657715",
			"profile_link_color": "0D5B73",
			"profile_sidebar_border_color": "BDDCAD",
			"profile_sidebar_fill_color": "C5CEC0",
			"profile_text_color": "333333",
			"profile_use_background_image": true,
			"has_extended_profile": false,
			"default_profile": false,
			"default_profile_image": false,
			"following": null,
			"follow_request_sent": null,
			"notifications": null,
			"translator_type": "regular"
		},
		"geo": null,
		"coordinates": null,
		"place": null,
		"contributors": null,
		"is_quote_status": false,
		"retweet_count": 14508,
		"favorite_count": 81575,
		"favorited": false,
		"retweeted": false,
		"lang": "en"
	},
	{
		"created_at": "Wed Mar 15 11:29:05 +0000 2017",
		"id": 841974528683192300,
		"id_str": "841974528683192320",
		"text": "Looking forward to a big rally in Nashville, Tennessee, tonight. Big crowd of great people expected. Will be fun!",
		"truncated": false,
		"entities": {
			"hashtags": [],
			"symbols": [],
			"user_mentions": [],
			"urls": []
		},
		"source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
		"in_reply_to_status_id": null,
		"in_reply_to_status_id_str": null,
		"in_reply_to_user_id": null,
		"in_reply_to_user_id_str": null,
		"in_reply_to_screen_name": null,
		"user": {
			"id": 25073877,
			"id_str": "25073877",
			"name": "Donald J. Trump",
			"screen_name": "realDonaldTrump",
			"location": "Washington, DC",
			"description": "45th President of the United States of America",
			"url": null,
			"entities": {
				"description": {
					"urls": []
				}
			},
			"protected": false,
			"followers_count": 27379007,
			"friends_count": 43,
			"listed_count": 67563,
			"created_at": "Wed Mar 18 13:46:38 +0000 2009",
			"favourites_count": 47,
			"utc_offset": -14400,
			"time_zone": "Eastern Time (US & Canada)",
			"geo_enabled": true,
			"verified": true,
			"statuses_count": 34705,
			"lang": "en",
			"contributors_enabled": false,
			"is_translator": false,
			"is_translation_enabled": true,
			"profile_background_color": "6D5C18",
			"profile_background_image_url": "http://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_tile": true,
			"profile_image_url": "http://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_image_url_https": "https://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_banner_url": "https://pbs.twimg.com/profile_banners/25073877/1489657715",
			"profile_link_color": "0D5B73",
			"profile_sidebar_border_color": "BDDCAD",
			"profile_sidebar_fill_color": "C5CEC0",
			"profile_text_color": "333333",
			"profile_use_background_image": true,
			"has_extended_profile": false,
			"default_profile": false,
			"default_profile_image": false,
			"following": null,
			"follow_request_sent": null,
			"notifications": null,
			"translator_type": "regular"
		},
		"geo": null,
		"coordinates": null,
		"place": null,
		"contributors": null,
		"is_quote_status": false,
		"retweet_count": 14505,
		"favorite_count": 85927,
		"favorited": false,
		"retweeted": false,
		"lang": "en"
	},
	{
		"created_at": "Wed Mar 15 11:13:58 +0000 2017",
		"id": 841970726341075000,
		"id_str": "841970726341074945",
		"text": "Will be going to Detroit, Michigan (love), today for a big meeting on bringing back car production to State &amp; U.S. Already happening!",
		"truncated": false,
		"entities": {
			"hashtags": [],
			"symbols": [],
			"user_mentions": [],
			"urls": []
		},
		"source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
		"in_reply_to_status_id": null,
		"in_reply_to_status_id_str": null,
		"in_reply_to_user_id": null,
		"in_reply_to_user_id_str": null,
		"in_reply_to_screen_name": null,
		"user": {
			"id": 25073877,
			"id_str": "25073877",
			"name": "Donald J. Trump",
			"screen_name": "realDonaldTrump",
			"location": "Washington, DC",
			"description": "45th President of the United States of America",
			"url": null,
			"entities": {
				"description": {
					"urls": []
				}
			},
			"protected": false,
			"followers_count": 27379007,
			"friends_count": 43,
			"listed_count": 67563,
			"created_at": "Wed Mar 18 13:46:38 +0000 2009",
			"favourites_count": 47,
			"utc_offset": -14400,
			"time_zone": "Eastern Time (US & Canada)",
			"geo_enabled": true,
			"verified": true,
			"statuses_count": 34705,
			"lang": "en",
			"contributors_enabled": false,
			"is_translator": false,
			"is_translation_enabled": true,
			"profile_background_color": "6D5C18",
			"profile_background_image_url": "http://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_tile": true,
			"profile_image_url": "http://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_image_url_https": "https://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_banner_url": "https://pbs.twimg.com/profile_banners/25073877/1489657715",
			"profile_link_color": "0D5B73",
			"profile_sidebar_border_color": "BDDCAD",
			"profile_sidebar_fill_color": "C5CEC0",
			"profile_text_color": "333333",
			"profile_use_background_image": true,
			"has_extended_profile": false,
			"default_profile": false,
			"default_profile_image": false,
			"following": null,
			"follow_request_sent": null,
			"notifications": null,
			"translator_type": "regular"
		},
		"geo": null,
		"coordinates": null,
		"place": null,
		"contributors": null,
		"is_quote_status": false,
		"retweet_count": 15077,
		"favorite_count": 90450,
		"favorited": false,
		"retweeted": false,
		"lang": "en"
	},
	{
		"created_at": "Wed Mar 15 11:02:40 +0000 2017",
		"id": 841967881516679200,
		"id_str": "841967881516679168",
		"text": "Can you imagine what the outcry would be if @SnoopDogg, failing career and all, had aimed and fired the gun at President Obama? Jail time!",
		"truncated": false,
		"entities": {
			"hashtags": [],
			"symbols": [],
			"user_mentions": [
				{
					"screen_name": "SnoopDogg",
					"name": "Snoop Dogg",
					"id": 3004231,
					"id_str": "3004231",
					"indices": [
						44,
						54
					]
				}
			],
			"urls": []
		},
		"source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
		"in_reply_to_status_id": null,
		"in_reply_to_status_id_str": null,
		"in_reply_to_user_id": null,
		"in_reply_to_user_id_str": null,
		"in_reply_to_screen_name": null,
		"user": {
			"id": 25073877,
			"id_str": "25073877",
			"name": "Donald J. Trump",
			"screen_name": "realDonaldTrump",
			"location": "Washington, DC",
			"description": "45th President of the United States of America",
			"url": null,
			"entities": {
				"description": {
					"urls": []
				}
			},
			"protected": false,
			"followers_count": 27379007,
			"friends_count": 43,
			"listed_count": 67563,
			"created_at": "Wed Mar 18 13:46:38 +0000 2009",
			"favourites_count": 47,
			"utc_offset": -14400,
			"time_zone": "Eastern Time (US & Canada)",
			"geo_enabled": true,
			"verified": true,
			"statuses_count": 34705,
			"lang": "en",
			"contributors_enabled": false,
			"is_translator": false,
			"is_translation_enabled": true,
			"profile_background_color": "6D5C18",
			"profile_background_image_url": "http://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_tile": true,
			"profile_image_url": "http://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_image_url_https": "https://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_banner_url": "https://pbs.twimg.com/profile_banners/25073877/1489657715",
			"profile_link_color": "0D5B73",
			"profile_sidebar_border_color": "BDDCAD",
			"profile_sidebar_fill_color": "C5CEC0",
			"profile_text_color": "333333",
			"profile_use_background_image": true,
			"has_extended_profile": false,
			"default_profile": false,
			"default_profile_image": false,
			"following": null,
			"follow_request_sent": null,
			"notifications": null,
			"translator_type": "regular"
		},
		"geo": null,
		"coordinates": null,
		"place": null,
		"contributors": null,
		"is_quote_status": false,
		"retweet_count": 41017,
		"favorite_count": 128502,
		"favorited": false,
		"retweeted": false,
		"lang": "en"
	},
	{
		"created_at": "Wed Mar 15 10:55:30 +0000 2017",
		"id": 841966077005463600,
		"id_str": "841966077005463553",
		"text": "Does anybody really believe that a reporter, who nobody ever heard of, \"went to his mailbox\" and found my tax returns? @NBCNews  FAKE NEWS!",
		"truncated": false,
		"entities": {
			"hashtags": [],
			"symbols": [],
			"user_mentions": [
				{
					"screen_name": "NBCNews",
					"name": "NBC News",
					"id": 14173315,
					"id_str": "14173315",
					"indices": [
						119,
						127
					]
				}
			],
			"urls": []
		},
		"source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
		"in_reply_to_status_id": null,
		"in_reply_to_status_id_str": null,
		"in_reply_to_user_id": null,
		"in_reply_to_user_id_str": null,
		"in_reply_to_screen_name": null,
		"user": {
			"id": 25073877,
			"id_str": "25073877",
			"name": "Donald J. Trump",
			"screen_name": "realDonaldTrump",
			"location": "Washington, DC",
			"description": "45th President of the United States of America",
			"url": null,
			"entities": {
				"description": {
					"urls": []
				}
			},
			"protected": false,
			"followers_count": 27379007,
			"friends_count": 43,
			"listed_count": 67563,
			"created_at": "Wed Mar 18 13:46:38 +0000 2009",
			"favourites_count": 47,
			"utc_offset": -14400,
			"time_zone": "Eastern Time (US & Canada)",
			"geo_enabled": true,
			"verified": true,
			"statuses_count": 34705,
			"lang": "en",
			"contributors_enabled": false,
			"is_translator": false,
			"is_translation_enabled": true,
			"profile_background_color": "6D5C18",
			"profile_background_image_url": "http://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_tile": true,
			"profile_image_url": "http://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_image_url_https": "https://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_banner_url": "https://pbs.twimg.com/profile_banners/25073877/1489657715",
			"profile_link_color": "0D5B73",
			"profile_sidebar_border_color": "BDDCAD",
			"profile_sidebar_fill_color": "C5CEC0",
			"profile_text_color": "333333",
			"profile_use_background_image": true,
			"has_extended_profile": false,
			"default_profile": false,
			"default_profile_image": false,
			"following": null,
			"follow_request_sent": null,
			"notifications": null,
			"translator_type": "regular"
		},
		"geo": null,
		"coordinates": null,
		"place": null,
		"contributors": null,
		"is_quote_status": false,
		"retweet_count": 26210,
		"favorite_count": 104114,
		"favorited": false,
		"retweeted": false,
		"lang": "en"
	},
	{
		"created_at": "Tue Mar 14 16:12:22 +0000 2017",
		"id": 841683431398469600,
		"id_str": "841683431398469632",
		"text": "Great optimism in America – and the results will be even better! https://t.co/SYBl47CsZn",
		"truncated": false,
		"entities": {
			"hashtags": [],
			"symbols": [],
			"user_mentions": [],
			"urls": [
				{
					"url": "https://t.co/SYBl47CsZn",
					"expanded_url": "https://www.bloomberg.com/news/articles/2017-03-14/ceo-optimism-rises-by-most-since-2009-business-roundtable",
					"display_url": "bloomberg.com/news/articles/…",
					"indices": [
						65,
						88
					]
				}
			]
		},
		"source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
		"in_reply_to_status_id": null,
		"in_reply_to_status_id_str": null,
		"in_reply_to_user_id": null,
		"in_reply_to_user_id_str": null,
		"in_reply_to_screen_name": null,
		"user": {
			"id": 25073877,
			"id_str": "25073877",
			"name": "Donald J. Trump",
			"screen_name": "realDonaldTrump",
			"location": "Washington, DC",
			"description": "45th President of the United States of America",
			"url": null,
			"entities": {
				"description": {
					"urls": []
				}
			},
			"protected": false,
			"followers_count": 27379007,
			"friends_count": 43,
			"listed_count": 67563,
			"created_at": "Wed Mar 18 13:46:38 +0000 2009",
			"favourites_count": 47,
			"utc_offset": -14400,
			"time_zone": "Eastern Time (US & Canada)",
			"geo_enabled": true,
			"verified": true,
			"statuses_count": 34705,
			"lang": "en",
			"contributors_enabled": false,
			"is_translator": false,
			"is_translation_enabled": true,
			"profile_background_color": "6D5C18",
			"profile_background_image_url": "http://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_tile": true,
			"profile_image_url": "http://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_image_url_https": "https://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_banner_url": "https://pbs.twimg.com/profile_banners/25073877/1489657715",
			"profile_link_color": "0D5B73",
			"profile_sidebar_border_color": "BDDCAD",
			"profile_sidebar_fill_color": "C5CEC0",
			"profile_text_color": "333333",
			"profile_use_background_image": true,
			"has_extended_profile": false,
			"default_profile": false,
			"default_profile_image": false,
			"following": null,
			"follow_request_sent": null,
			"notifications": null,
			"translator_type": "regular"
		},
		"geo": null,
		"coordinates": null,
		"place": null,
		"contributors": null,
		"is_quote_status": false,
		"retweet_count": 12561,
		"favorite_count": 63756,
		"favorited": false,
		"retweeted": false,
		"possibly_sensitive": false,
		"lang": "en"
	},
	{
		"created_at": "Tue Mar 14 15:00:25 +0000 2017",
		"id": 841665325682827300,
		"id_str": "841665325682827265",
		"text": "JOBS, JOBS, JOBS! https://t.co/wAkQMKdPXA",
		"truncated": false,
		"entities": {
			"hashtags": [],
			"symbols": [],
			"user_mentions": [],
			"urls": [],
			"media": [
				{
					"id": 841665301427179500,
					"id_str": "841665301427179520",
					"indices": [
						18,
						41
					],
					"media_url": "http://pbs.twimg.com/media/C64yId9W0AAwtk9.jpg",
					"media_url_https": "https://pbs.twimg.com/media/C64yId9W0AAwtk9.jpg",
					"url": "https://t.co/wAkQMKdPXA",
					"display_url": "pic.twitter.com/wAkQMKdPXA",
					"expanded_url": "https://twitter.com/realDonaldTrump/status/841665325682827265/photo/1",
					"type": "photo",
					"sizes": {
						"medium": {
							"w": 1200,
							"h": 675,
							"resize": "fit"
						},
						"small": {
							"w": 680,
							"h": 383,
							"resize": "fit"
						},
						"thumb": {
							"w": 150,
							"h": 150,
							"resize": "crop"
						},
						"large": {
							"w": 1200,
							"h": 675,
							"resize": "fit"
						}
					}
				}
			]
		},
		"extended_entities": {
			"media": [
				{
					"id": 841665301427179500,
					"id_str": "841665301427179520",
					"indices": [
						18,
						41
					],
					"media_url": "http://pbs.twimg.com/media/C64yId9W0AAwtk9.jpg",
					"media_url_https": "https://pbs.twimg.com/media/C64yId9W0AAwtk9.jpg",
					"url": "https://t.co/wAkQMKdPXA",
					"display_url": "pic.twitter.com/wAkQMKdPXA",
					"expanded_url": "https://twitter.com/realDonaldTrump/status/841665325682827265/photo/1",
					"type": "photo",
					"sizes": {
						"medium": {
							"w": 1200,
							"h": 675,
							"resize": "fit"
						},
						"small": {
							"w": 680,
							"h": 383,
							"resize": "fit"
						},
						"thumb": {
							"w": 150,
							"h": 150,
							"resize": "crop"
						},
						"large": {
							"w": 1200,
							"h": 675,
							"resize": "fit"
						}
					}
				},
				{
					"id": 841665301477511200,
					"id_str": "841665301477511174",
					"indices": [
						18,
						41
					],
					"media_url": "http://pbs.twimg.com/media/C64yIeJW0AYZbdA.jpg",
					"media_url_https": "https://pbs.twimg.com/media/C64yIeJW0AYZbdA.jpg",
					"url": "https://t.co/wAkQMKdPXA",
					"display_url": "pic.twitter.com/wAkQMKdPXA",
					"expanded_url": "https://twitter.com/realDonaldTrump/status/841665325682827265/photo/1",
					"type": "photo",
					"sizes": {
						"large": {
							"w": 1280,
							"h": 720,
							"resize": "fit"
						},
						"thumb": {
							"w": 150,
							"h": 150,
							"resize": "crop"
						},
						"small": {
							"w": 680,
							"h": 383,
							"resize": "fit"
						},
						"medium": {
							"w": 1200,
							"h": 675,
							"resize": "fit"
						}
					}
				},
				{
					"id": 841665301540458500,
					"id_str": "841665301540458496",
					"indices": [
						18,
						41
					],
					"media_url": "http://pbs.twimg.com/media/C64yIeYXUAAyKT_.jpg",
					"media_url_https": "https://pbs.twimg.com/media/C64yIeYXUAAyKT_.jpg",
					"url": "https://t.co/wAkQMKdPXA",
					"display_url": "pic.twitter.com/wAkQMKdPXA",
					"expanded_url": "https://twitter.com/realDonaldTrump/status/841665325682827265/photo/1",
					"type": "photo",
					"sizes": {
						"large": {
							"w": 1200,
							"h": 675,
							"resize": "fit"
						},
						"thumb": {
							"w": 150,
							"h": 150,
							"resize": "crop"
						},
						"medium": {
							"w": 1200,
							"h": 675,
							"resize": "fit"
						},
						"small": {
							"w": 680,
							"h": 383,
							"resize": "fit"
						}
					}
				},
				{
					"id": 841665301578166300,
					"id_str": "841665301578166272",
					"indices": [
						18,
						41
					],
					"media_url": "http://pbs.twimg.com/media/C64yIehWsAANS5B.jpg",
					"media_url_https": "https://pbs.twimg.com/media/C64yIehWsAANS5B.jpg",
					"url": "https://t.co/wAkQMKdPXA",
					"display_url": "pic.twitter.com/wAkQMKdPXA",
					"expanded_url": "https://twitter.com/realDonaldTrump/status/841665325682827265/photo/1",
					"type": "photo",
					"sizes": {
						"large": {
							"w": 1280,
							"h": 720,
							"resize": "fit"
						},
						"medium": {
							"w": 1200,
							"h": 675,
							"resize": "fit"
						},
						"small": {
							"w": 680,
							"h": 383,
							"resize": "fit"
						},
						"thumb": {
							"w": 150,
							"h": 150,
							"resize": "crop"
						}
					}
				}
			]
		},
		"source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
		"in_reply_to_status_id": null,
		"in_reply_to_status_id_str": null,
		"in_reply_to_user_id": null,
		"in_reply_to_user_id_str": null,
		"in_reply_to_screen_name": null,
		"user": {
			"id": 25073877,
			"id_str": "25073877",
			"name": "Donald J. Trump",
			"screen_name": "realDonaldTrump",
			"location": "Washington, DC",
			"description": "45th President of the United States of America",
			"url": null,
			"entities": {
				"description": {
					"urls": []
				}
			},
			"protected": false,
			"followers_count": 27379007,
			"friends_count": 43,
			"listed_count": 67563,
			"created_at": "Wed Mar 18 13:46:38 +0000 2009",
			"favourites_count": 47,
			"utc_offset": -14400,
			"time_zone": "Eastern Time (US & Canada)",
			"geo_enabled": true,
			"verified": true,
			"statuses_count": 34705,
			"lang": "en",
			"contributors_enabled": false,
			"is_translator": false,
			"is_translation_enabled": true,
			"profile_background_color": "6D5C18",
			"profile_background_image_url": "http://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_tile": true,
			"profile_image_url": "http://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_image_url_https": "https://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_banner_url": "https://pbs.twimg.com/profile_banners/25073877/1489657715",
			"profile_link_color": "0D5B73",
			"profile_sidebar_border_color": "BDDCAD",
			"profile_sidebar_fill_color": "C5CEC0",
			"profile_text_color": "333333",
			"profile_use_background_image": true,
			"has_extended_profile": false,
			"default_profile": false,
			"default_profile_image": false,
			"following": null,
			"follow_request_sent": null,
			"notifications": null,
			"translator_type": "regular"
		},
		"geo": null,
		"coordinates": null,
		"place": null,
		"contributors": null,
		"is_quote_status": false,
		"retweet_count": 24944,
		"favorite_count": 100211,
		"favorited": false,
		"retweeted": false,
		"possibly_sensitive": false,
		"lang": "en"
	},
	{
		"created_at": "Mon Mar 13 22:54:16 +0000 2017",
		"id": 841422186573369300,
		"id_str": "841422186573369345",
		"text": "Meeting w/ Washington, D.C. @MayorBowser and Metro GM Paul Wiedefeld about incoming winter storm preparations here… https://t.co/mg0A4Hq3bD",
		"truncated": true,
		"entities": {
			"hashtags": [],
			"symbols": [],
			"user_mentions": [
				{
					"screen_name": "MayorBowser",
					"name": "Mayor Muriel Bowser",
					"id": 976542720,
					"id_str": "976542720",
					"indices": [
						28,
						40
					]
				}
			],
			"urls": [
				{
					"url": "https://t.co/mg0A4Hq3bD",
					"expanded_url": "https://twitter.com/i/web/status/841422186573369345",
					"display_url": "twitter.com/i/web/status/8…",
					"indices": [
						116,
						139
					]
				}
			]
		},
		"source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
		"in_reply_to_status_id": null,
		"in_reply_to_status_id_str": null,
		"in_reply_to_user_id": null,
		"in_reply_to_user_id_str": null,
		"in_reply_to_screen_name": null,
		"user": {
			"id": 25073877,
			"id_str": "25073877",
			"name": "Donald J. Trump",
			"screen_name": "realDonaldTrump",
			"location": "Washington, DC",
			"description": "45th President of the United States of America",
			"url": null,
			"entities": {
				"description": {
					"urls": []
				}
			},
			"protected": false,
			"followers_count": 27379007,
			"friends_count": 43,
			"listed_count": 67563,
			"created_at": "Wed Mar 18 13:46:38 +0000 2009",
			"favourites_count": 47,
			"utc_offset": -14400,
			"time_zone": "Eastern Time (US & Canada)",
			"geo_enabled": true,
			"verified": true,
			"statuses_count": 34705,
			"lang": "en",
			"contributors_enabled": false,
			"is_translator": false,
			"is_translation_enabled": true,
			"profile_background_color": "6D5C18",
			"profile_background_image_url": "http://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_tile": true,
			"profile_image_url": "http://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_image_url_https": "https://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_banner_url": "https://pbs.twimg.com/profile_banners/25073877/1489657715",
			"profile_link_color": "0D5B73",
			"profile_sidebar_border_color": "BDDCAD",
			"profile_sidebar_fill_color": "C5CEC0",
			"profile_text_color": "333333",
			"profile_use_background_image": true,
			"has_extended_profile": false,
			"default_profile": false,
			"default_profile_image": false,
			"following": null,
			"follow_request_sent": null,
			"notifications": null,
			"translator_type": "regular"
		},
		"geo": null,
		"coordinates": null,
		"place": null,
		"contributors": null,
		"is_quote_status": false,
		"retweet_count": 8151,
		"favorite_count": 49070,
		"favorited": false,
		"retweeted": false,
		"possibly_sensitive": false,
		"lang": "en"
	},
	{
		"created_at": "Mon Mar 13 20:57:02 +0000 2017",
		"id": 841392683625173000,
		"id_str": "841392683625172992",
		"text": "Proud to welcome our great Cabinet this afternoon for our first meeting. Unfortunately 4 seats were empty because S… https://t.co/bMYph832hF",
		"truncated": true,
		"entities": {
			"hashtags": [],
			"symbols": [],
			"user_mentions": [],
			"urls": [
				{
					"url": "https://t.co/bMYph832hF",
					"expanded_url": "https://twitter.com/i/web/status/841392683625172992",
					"display_url": "twitter.com/i/web/status/8…",
					"indices": [
						117,
						140
					]
				}
			]
		},
		"source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
		"in_reply_to_status_id": null,
		"in_reply_to_status_id_str": null,
		"in_reply_to_user_id": null,
		"in_reply_to_user_id_str": null,
		"in_reply_to_screen_name": null,
		"user": {
			"id": 25073877,
			"id_str": "25073877",
			"name": "Donald J. Trump",
			"screen_name": "realDonaldTrump",
			"location": "Washington, DC",
			"description": "45th President of the United States of America",
			"url": null,
			"entities": {
				"description": {
					"urls": []
				}
			},
			"protected": false,
			"followers_count": 27379007,
			"friends_count": 43,
			"listed_count": 67563,
			"created_at": "Wed Mar 18 13:46:38 +0000 2009",
			"favourites_count": 47,
			"utc_offset": -14400,
			"time_zone": "Eastern Time (US & Canada)",
			"geo_enabled": true,
			"verified": true,
			"statuses_count": 34705,
			"lang": "en",
			"contributors_enabled": false,
			"is_translator": false,
			"is_translation_enabled": true,
			"profile_background_color": "6D5C18",
			"profile_background_image_url": "http://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_tile": true,
			"profile_image_url": "http://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_image_url_https": "https://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_banner_url": "https://pbs.twimg.com/profile_banners/25073877/1489657715",
			"profile_link_color": "0D5B73",
			"profile_sidebar_border_color": "BDDCAD",
			"profile_sidebar_fill_color": "C5CEC0",
			"profile_text_color": "333333",
			"profile_use_background_image": true,
			"has_extended_profile": false,
			"default_profile": false,
			"default_profile_image": false,
			"following": null,
			"follow_request_sent": null,
			"notifications": null,
			"translator_type": "regular"
		},
		"geo": null,
		"coordinates": null,
		"place": null,
		"contributors": null,
		"is_quote_status": false,
		"retweet_count": 15971,
		"favorite_count": 72816,
		"favorited": false,
		"retweeted": false,
		"possibly_sensitive": false,
		"lang": "en"
	},
	{
		"created_at": "Mon Mar 13 17:20:15 +0000 2017",
		"id": 841338126316511200,
		"id_str": "841338126316511233",
		"text": "Healthcare listening session w/ @VP &amp; @SecPriceMD. Watch: https://t.co/5ayQ4dr8Ip #ReadTheBill:… https://t.co/1cQI0ZBUv8",
		"truncated": true,
		"entities": {
			"hashtags": [
				{
					"text": "ReadTheBill",
					"indices": [
						86,
						98
					]
				}
			],
			"symbols": [],
			"user_mentions": [
				{
					"screen_name": "VP",
					"name": "Vice President Pence",
					"id": 818910970567344100,
					"id_str": "818910970567344128",
					"indices": [
						32,
						35
					]
				},
				{
					"screen_name": "SecPriceMD",
					"name": "Tom Price, M.D.",
					"id": 829782369670410200,
					"id_str": "829782369670410240",
					"indices": [
						42,
						53
					]
				}
			],
			"urls": [
				{
					"url": "https://t.co/5ayQ4dr8Ip",
					"expanded_url": "http://45.wh.gov/wmwewc",
					"display_url": "45.wh.gov/wmwewc",
					"indices": [
						62,
						85
					]
				},
				{
					"url": "https://t.co/1cQI0ZBUv8",
					"expanded_url": "https://twitter.com/i/web/status/841338126316511233",
					"display_url": "twitter.com/i/web/status/8…",
					"indices": [
						101,
						124
					]
				}
			]
		},
		"source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
		"in_reply_to_status_id": null,
		"in_reply_to_status_id_str": null,
		"in_reply_to_user_id": null,
		"in_reply_to_user_id_str": null,
		"in_reply_to_screen_name": null,
		"user": {
			"id": 25073877,
			"id_str": "25073877",
			"name": "Donald J. Trump",
			"screen_name": "realDonaldTrump",
			"location": "Washington, DC",
			"description": "45th President of the United States of America",
			"url": null,
			"entities": {
				"description": {
					"urls": []
				}
			},
			"protected": false,
			"followers_count": 27379007,
			"friends_count": 43,
			"listed_count": 67563,
			"created_at": "Wed Mar 18 13:46:38 +0000 2009",
			"favourites_count": 47,
			"utc_offset": -14400,
			"time_zone": "Eastern Time (US & Canada)",
			"geo_enabled": true,
			"verified": true,
			"statuses_count": 34705,
			"lang": "en",
			"contributors_enabled": false,
			"is_translator": false,
			"is_translation_enabled": true,
			"profile_background_color": "6D5C18",
			"profile_background_image_url": "http://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_tile": true,
			"profile_image_url": "http://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_image_url_https": "https://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_banner_url": "https://pbs.twimg.com/profile_banners/25073877/1489657715",
			"profile_link_color": "0D5B73",
			"profile_sidebar_border_color": "BDDCAD",
			"profile_sidebar_fill_color": "C5CEC0",
			"profile_text_color": "333333",
			"profile_use_background_image": true,
			"has_extended_profile": false,
			"default_profile": false,
			"default_profile_image": false,
			"following": null,
			"follow_request_sent": null,
			"notifications": null,
			"translator_type": "regular"
		},
		"geo": null,
		"coordinates": null,
		"place": null,
		"contributors": null,
		"is_quote_status": false,
		"retweet_count": 6921,
		"favorite_count": 39416,
		"favorited": false,
		"retweeted": false,
		"possibly_sensitive": false,
		"lang": "en"
	},
	{
		"created_at": "Mon Mar 13 13:11:17 +0000 2017",
		"id": 841275470796738600,
		"id_str": "841275470796738560",
		"text": "ObamaCare is imploding. It is a disaster and 2017 will be the worst year yet, by far! Republicans will come together and save the day.",
		"truncated": false,
		"entities": {
			"hashtags": [],
			"symbols": [],
			"user_mentions": [],
			"urls": []
		},
		"source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
		"in_reply_to_status_id": 841270741060464600,
		"in_reply_to_status_id_str": "841270741060464648",
		"in_reply_to_user_id": 25073877,
		"in_reply_to_user_id_str": "25073877",
		"in_reply_to_screen_name": "realDonaldTrump",
		"user": {
			"id": 25073877,
			"id_str": "25073877",
			"name": "Donald J. Trump",
			"screen_name": "realDonaldTrump",
			"location": "Washington, DC",
			"description": "45th President of the United States of America",
			"url": null,
			"entities": {
				"description": {
					"urls": []
				}
			},
			"protected": false,
			"followers_count": 27379007,
			"friends_count": 43,
			"listed_count": 67563,
			"created_at": "Wed Mar 18 13:46:38 +0000 2009",
			"favourites_count": 47,
			"utc_offset": -14400,
			"time_zone": "Eastern Time (US & Canada)",
			"geo_enabled": true,
			"verified": true,
			"statuses_count": 34705,
			"lang": "en",
			"contributors_enabled": false,
			"is_translator": false,
			"is_translation_enabled": true,
			"profile_background_color": "6D5C18",
			"profile_background_image_url": "http://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_tile": true,
			"profile_image_url": "http://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_image_url_https": "https://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_banner_url": "https://pbs.twimg.com/profile_banners/25073877/1489657715",
			"profile_link_color": "0D5B73",
			"profile_sidebar_border_color": "BDDCAD",
			"profile_sidebar_fill_color": "C5CEC0",
			"profile_text_color": "333333",
			"profile_use_background_image": true,
			"has_extended_profile": false,
			"default_profile": false,
			"default_profile_image": false,
			"following": null,
			"follow_request_sent": null,
			"notifications": null,
			"translator_type": "regular"
		},
		"geo": null,
		"coordinates": null,
		"place": null,
		"contributors": null,
		"is_quote_status": false,
		"retweet_count": 10580,
		"favorite_count": 59061,
		"favorited": false,
		"retweeted": false,
		"lang": "en"
	},
	{
		"created_at": "Mon Mar 13 12:52:29 +0000 2017",
		"id": 841270741060464600,
		"id_str": "841270741060464648",
		"text": "It is amazing how rude much of the media is to my very hard working representatives. Be nice, you will do much better!",
		"truncated": false,
		"entities": {
			"hashtags": [],
			"symbols": [],
			"user_mentions": [],
			"urls": []
		},
		"source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
		"in_reply_to_status_id": null,
		"in_reply_to_status_id_str": null,
		"in_reply_to_user_id": null,
		"in_reply_to_user_id_str": null,
		"in_reply_to_screen_name": null,
		"user": {
			"id": 25073877,
			"id_str": "25073877",
			"name": "Donald J. Trump",
			"screen_name": "realDonaldTrump",
			"location": "Washington, DC",
			"description": "45th President of the United States of America",
			"url": null,
			"entities": {
				"description": {
					"urls": []
				}
			},
			"protected": false,
			"followers_count": 27379007,
			"friends_count": 43,
			"listed_count": 67563,
			"created_at": "Wed Mar 18 13:46:38 +0000 2009",
			"favourites_count": 47,
			"utc_offset": -14400,
			"time_zone": "Eastern Time (US & Canada)",
			"geo_enabled": true,
			"verified": true,
			"statuses_count": 34705,
			"lang": "en",
			"contributors_enabled": false,
			"is_translator": false,
			"is_translation_enabled": true,
			"profile_background_color": "6D5C18",
			"profile_background_image_url": "http://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_tile": true,
			"profile_image_url": "http://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_image_url_https": "https://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_banner_url": "https://pbs.twimg.com/profile_banners/25073877/1489657715",
			"profile_link_color": "0D5B73",
			"profile_sidebar_border_color": "BDDCAD",
			"profile_sidebar_fill_color": "C5CEC0",
			"profile_text_color": "333333",
			"profile_use_background_image": true,
			"has_extended_profile": false,
			"default_profile": false,
			"default_profile_image": false,
			"following": null,
			"follow_request_sent": null,
			"notifications": null,
			"translator_type": "regular"
		},
		"geo": null,
		"coordinates": null,
		"place": null,
		"contributors": null,
		"is_quote_status": false,
		"retweet_count": 19738,
		"favorite_count": 101902,
		"favorited": false,
		"retweeted": false,
		"lang": "en"
	},
	{
		"created_at": "Sun Mar 12 12:36:59 +0000 2017",
		"id": 840904454836781000,
		"id_str": "840904454836781056",
		"text": "RT @AmericaFirstPol: .@POTUS Trump led a historic journey to the White House. 50 days in, that historic journey continues. Take a look 👉 ht…",
		"truncated": false,
		"entities": {
			"hashtags": [],
			"symbols": [],
			"user_mentions": [
				{
					"screen_name": "AmericaFirstPol",
					"name": "AmericaFirstPolicies",
					"id": 826155076280545300,
					"id_str": "826155076280545280",
					"indices": [
						3,
						19
					]
				},
				{
					"screen_name": "POTUS",
					"name": "President Trump",
					"id": 822215679726100500,
					"id_str": "822215679726100480",
					"indices": [
						22,
						28
					]
				}
			],
			"urls": []
		},
		"source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
		"in_reply_to_status_id": null,
		"in_reply_to_status_id_str": null,
		"in_reply_to_user_id": null,
		"in_reply_to_user_id_str": null,
		"in_reply_to_screen_name": null,
		"user": {
			"id": 25073877,
			"id_str": "25073877",
			"name": "Donald J. Trump",
			"screen_name": "realDonaldTrump",
			"location": "Washington, DC",
			"description": "45th President of the United States of America",
			"url": null,
			"entities": {
				"description": {
					"urls": []
				}
			},
			"protected": false,
			"followers_count": 27379007,
			"friends_count": 43,
			"listed_count": 67563,
			"created_at": "Wed Mar 18 13:46:38 +0000 2009",
			"favourites_count": 47,
			"utc_offset": -14400,
			"time_zone": "Eastern Time (US & Canada)",
			"geo_enabled": true,
			"verified": true,
			"statuses_count": 34705,
			"lang": "en",
			"contributors_enabled": false,
			"is_translator": false,
			"is_translation_enabled": true,
			"profile_background_color": "6D5C18",
			"profile_background_image_url": "http://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_tile": true,
			"profile_image_url": "http://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_image_url_https": "https://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_banner_url": "https://pbs.twimg.com/profile_banners/25073877/1489657715",
			"profile_link_color": "0D5B73",
			"profile_sidebar_border_color": "BDDCAD",
			"profile_sidebar_fill_color": "C5CEC0",
			"profile_text_color": "333333",
			"profile_use_background_image": true,
			"has_extended_profile": false,
			"default_profile": false,
			"default_profile_image": false,
			"following": null,
			"follow_request_sent": null,
			"notifications": null,
			"translator_type": "regular"
		},
		"geo": null,
		"coordinates": null,
		"place": null,
		"contributors": null,
		"retweeted_status": {
			"created_at": "Sat Mar 11 19:24:08 +0000 2017",
			"id": 840644529690689500,
			"id_str": "840644529690689536",
			"text": ".@POTUS Trump led a historic journey to the White House. 50 days in, that historic journey continues. Take a look 👉 https://t.co/zSzj31cHTp",
			"truncated": false,
			"entities": {
				"hashtags": [],
				"symbols": [],
				"user_mentions": [
					{
						"screen_name": "POTUS",
						"name": "President Trump",
						"id": 822215679726100500,
						"id_str": "822215679726100480",
						"indices": [
							1,
							7
						]
					}
				],
				"urls": [
					{
						"url": "https://t.co/zSzj31cHTp",
						"expanded_url": "https://www.facebook.com/pg/POTUS/photos/?tab=album&album_id=1278192468916857",
						"display_url": "facebook.com/pg/POTUS/photo…",
						"indices": [
							116,
							139
						]
					}
				]
			},
			"source": "<a href=\"http://twitter.com\" rel=\"nofollow\">Twitter Web Client</a>",
			"in_reply_to_status_id": null,
			"in_reply_to_status_id_str": null,
			"in_reply_to_user_id": null,
			"in_reply_to_user_id_str": null,
			"in_reply_to_screen_name": null,
			"user": {
				"id": 826155076280545300,
				"id_str": "826155076280545280",
				"name": "AmericaFirstPolicies",
				"screen_name": "AmericaFirstPol",
				"location": "",
				"description": "Non-profit organization dedicated to promoting @POTUS @realDonaldTrump key @WhiteHouse policy initiatives that put #AmericaFirst. #MAGA",
				"url": "https://t.co/hIfrbqGbsv",
				"entities": {
					"url": {
						"urls": [
							{
								"url": "https://t.co/hIfrbqGbsv",
								"expanded_url": "http://americafirstpolicies.org/",
								"display_url": "americafirstpolicies.org",
								"indices": [
									0,
									23
								]
							}
						]
					},
					"description": {
						"urls": []
					}
				},
				"protected": false,
				"followers_count": 8646,
				"friends_count": 16,
				"listed_count": 108,
				"created_at": "Mon Jan 30 19:48:14 +0000 2017",
				"favourites_count": 2,
				"utc_offset": null,
				"time_zone": null,
				"geo_enabled": false,
				"verified": true,
				"statuses_count": 232,
				"lang": "en",
				"contributors_enabled": false,
				"is_translator": false,
				"is_translation_enabled": false,
				"profile_background_color": "F5F8FA",
				"profile_background_image_url": null,
				"profile_background_image_url_https": null,
				"profile_background_tile": false,
				"profile_image_url": "http://pbs.twimg.com/profile_images/839605409602285568/kCNpX_YY_normal.jpg",
				"profile_image_url_https": "https://pbs.twimg.com/profile_images/839605409602285568/kCNpX_YY_normal.jpg",
				"profile_banner_url": "https://pbs.twimg.com/profile_banners/826155076280545280/1489012265",
				"profile_link_color": "1DA1F2",
				"profile_sidebar_border_color": "C0DEED",
				"profile_sidebar_fill_color": "DDEEF6",
				"profile_text_color": "333333",
				"profile_use_background_image": true,
				"has_extended_profile": false,
				"default_profile": true,
				"default_profile_image": false,
				"following": null,
				"follow_request_sent": null,
				"notifications": null,
				"translator_type": "none"
			},
			"geo": null,
			"coordinates": null,
			"place": null,
			"contributors": null,
			"is_quote_status": false,
			"retweet_count": 6928,
			"favorite_count": 31340,
			"favorited": false,
			"retweeted": false,
			"possibly_sensitive": false,
			"lang": "en"
		},
		"is_quote_status": false,
		"retweet_count": 6928,
		"favorite_count": 0,
		"favorited": false,
		"retweeted": false,
		"lang": "en"
	},
	{
		"created_at": "Sat Mar 11 14:39:07 +0000 2017",
		"id": 840572799202783200,
		"id_str": "840572799202783233",
		"text": "We are making great progress with healthcare. ObamaCare is imploding and will only get worse. Republicans coming together to get job done!",
		"truncated": false,
		"entities": {
			"hashtags": [],
			"symbols": [],
			"user_mentions": [],
			"urls": []
		},
		"source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
		"in_reply_to_status_id": null,
		"in_reply_to_status_id_str": null,
		"in_reply_to_user_id": null,
		"in_reply_to_user_id_str": null,
		"in_reply_to_screen_name": null,
		"user": {
			"id": 25073877,
			"id_str": "25073877",
			"name": "Donald J. Trump",
			"screen_name": "realDonaldTrump",
			"location": "Washington, DC",
			"description": "45th President of the United States of America",
			"url": null,
			"entities": {
				"description": {
					"urls": []
				}
			},
			"protected": false,
			"followers_count": 27379007,
			"friends_count": 43,
			"listed_count": 67563,
			"created_at": "Wed Mar 18 13:46:38 +0000 2009",
			"favourites_count": 47,
			"utc_offset": -14400,
			"time_zone": "Eastern Time (US & Canada)",
			"geo_enabled": true,
			"verified": true,
			"statuses_count": 34705,
			"lang": "en",
			"contributors_enabled": false,
			"is_translator": false,
			"is_translation_enabled": true,
			"profile_background_color": "6D5C18",
			"profile_background_image_url": "http://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_tile": true,
			"profile_image_url": "http://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_image_url_https": "https://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_banner_url": "https://pbs.twimg.com/profile_banners/25073877/1489657715",
			"profile_link_color": "0D5B73",
			"profile_sidebar_border_color": "BDDCAD",
			"profile_sidebar_fill_color": "C5CEC0",
			"profile_text_color": "333333",
			"profile_use_background_image": true,
			"has_extended_profile": false,
			"default_profile": false,
			"default_profile_image": false,
			"following": null,
			"follow_request_sent": null,
			"notifications": null,
			"translator_type": "regular"
		},
		"geo": null,
		"coordinates": null,
		"place": null,
		"contributors": null,
		"is_quote_status": false,
		"retweet_count": 16730,
		"favorite_count": 104961,
		"favorited": false,
		"retweeted": false,
		"lang": "en"
	},
	{
		"created_at": "Fri Mar 10 15:40:53 +0000 2017",
		"id": 840225958854561800,
		"id_str": "840225958854561792",
		"text": "Weekly Address - 11:00 A.M. at the @WhiteHouse! #MAGA🇺🇸\n➡️https://t.co/YSaPJnSX2i https://t.co/Gb8iTGzb6j",
		"truncated": false,
		"entities": {
			"hashtags": [
				{
					"text": "MAGA",
					"indices": [
						48,
						53
					]
				}
			],
			"symbols": [],
			"user_mentions": [
				{
					"screen_name": "WhiteHouse",
					"name": "The White House",
					"id": 822215673812119600,
					"id_str": "822215673812119553",
					"indices": [
						35,
						46
					]
				}
			],
			"urls": [
				{
					"url": "https://t.co/YSaPJnSX2i",
					"expanded_url": "http://45.wh.gov/hcdvxr",
					"display_url": "45.wh.gov/hcdvxr",
					"indices": [
						58,
						81
					]
				}
			],
			"media": [
				{
					"id": 840225520688095200,
					"id_str": "840225520688095232",
					"indices": [
						82,
						105
					],
					"media_url": "http://pbs.twimg.com/ext_tw_video_thumb/840225520688095232/pu/img/sYKp9sAkSO3_OQrE.jpg",
					"media_url_https": "https://pbs.twimg.com/ext_tw_video_thumb/840225520688095232/pu/img/sYKp9sAkSO3_OQrE.jpg",
					"url": "https://t.co/Gb8iTGzb6j",
					"display_url": "pic.twitter.com/Gb8iTGzb6j",
					"expanded_url": "https://twitter.com/realDonaldTrump/status/840225958854561792/video/1",
					"type": "photo",
					"sizes": {
						"thumb": {
							"w": 150,
							"h": 150,
							"resize": "crop"
						},
						"medium": {
							"w": 600,
							"h": 338,
							"resize": "fit"
						},
						"small": {
							"w": 340,
							"h": 191,
							"resize": "fit"
						},
						"large": {
							"w": 1024,
							"h": 576,
							"resize": "fit"
						}
					}
				}
			]
		},
		"extended_entities": {
			"media": [
				{
					"id": 840225520688095200,
					"id_str": "840225520688095232",
					"indices": [
						82,
						105
					],
					"media_url": "http://pbs.twimg.com/ext_tw_video_thumb/840225520688095232/pu/img/sYKp9sAkSO3_OQrE.jpg",
					"media_url_https": "https://pbs.twimg.com/ext_tw_video_thumb/840225520688095232/pu/img/sYKp9sAkSO3_OQrE.jpg",
					"url": "https://t.co/Gb8iTGzb6j",
					"display_url": "pic.twitter.com/Gb8iTGzb6j",
					"expanded_url": "https://twitter.com/realDonaldTrump/status/840225958854561792/video/1",
					"type": "video",
					"sizes": {
						"thumb": {
							"w": 150,
							"h": 150,
							"resize": "crop"
						},
						"medium": {
							"w": 600,
							"h": 338,
							"resize": "fit"
						},
						"small": {
							"w": 340,
							"h": 191,
							"resize": "fit"
						},
						"large": {
							"w": 1024,
							"h": 576,
							"resize": "fit"
						}
					},
					"video_info": {
						"aspect_ratio": [
							16,
							9
						],
						"duration_millis": 9667,
						"variants": [
							{
								"bitrate": 832000,
								"content_type": "video/mp4",
								"url": "https://video.twimg.com/ext_tw_video/840225520688095232/pu/vid/640x360/E9Tuk0AB4uza2off.mp4"
							},
							{
								"bitrate": 2176000,
								"content_type": "video/mp4",
								"url": "https://video.twimg.com/ext_tw_video/840225520688095232/pu/vid/1280x720/RsrXtV7TiI96ctiT.mp4"
							},
							{
								"bitrate": 320000,
								"content_type": "video/mp4",
								"url": "https://video.twimg.com/ext_tw_video/840225520688095232/pu/vid/320x180/OEkN0JzTjug9rjr0.mp4"
							},
							{
								"content_type": "application/x-mpegURL",
								"url": "https://video.twimg.com/ext_tw_video/840225520688095232/pu/pl/RbsvMnk96EVpUALS.m3u8"
							}
						]
					},
					"additional_media_info": {
						"monetizable": false
					}
				}
			]
		},
		"source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
		"in_reply_to_status_id": null,
		"in_reply_to_status_id_str": null,
		"in_reply_to_user_id": null,
		"in_reply_to_user_id_str": null,
		"in_reply_to_screen_name": null,
		"user": {
			"id": 25073877,
			"id_str": "25073877",
			"name": "Donald J. Trump",
			"screen_name": "realDonaldTrump",
			"location": "Washington, DC",
			"description": "45th President of the United States of America",
			"url": null,
			"entities": {
				"description": {
					"urls": []
				}
			},
			"protected": false,
			"followers_count": 27379007,
			"friends_count": 43,
			"listed_count": 67563,
			"created_at": "Wed Mar 18 13:46:38 +0000 2009",
			"favourites_count": 47,
			"utc_offset": -14400,
			"time_zone": "Eastern Time (US & Canada)",
			"geo_enabled": true,
			"verified": true,
			"statuses_count": 34705,
			"lang": "en",
			"contributors_enabled": false,
			"is_translator": false,
			"is_translation_enabled": true,
			"profile_background_color": "6D5C18",
			"profile_background_image_url": "http://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_tile": true,
			"profile_image_url": "http://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_image_url_https": "https://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_banner_url": "https://pbs.twimg.com/profile_banners/25073877/1489657715",
			"profile_link_color": "0D5B73",
			"profile_sidebar_border_color": "BDDCAD",
			"profile_sidebar_fill_color": "C5CEC0",
			"profile_text_color": "333333",
			"profile_use_background_image": true,
			"has_extended_profile": false,
			"default_profile": false,
			"default_profile_image": false,
			"following": null,
			"follow_request_sent": null,
			"notifications": null,
			"translator_type": "regular"
		},
		"geo": null,
		"coordinates": null,
		"place": null,
		"contributors": null,
		"is_quote_status": false,
		"retweet_count": 8745,
		"favorite_count": 43488,
		"favorited": false,
		"retweeted": false,
		"possibly_sensitive": false,
		"lang": "en"
	},
	{
		"created_at": "Fri Mar 10 13:45:02 +0000 2017",
		"id": 840196801009451000,
		"id_str": "840196801009451009",
		"text": "RT @DRUDGE_REPORT: GREAT AGAIN:  +235,000 https://t.co/GkockGNdtC",
		"truncated": false,
		"entities": {
			"hashtags": [],
			"symbols": [],
			"user_mentions": [
				{
					"screen_name": "DRUDGE_REPORT",
					"name": "DRUDGE REPORT",
					"id": 14669951,
					"id_str": "14669951",
					"indices": [
						3,
						17
					]
				}
			],
			"urls": [
				{
					"url": "https://t.co/GkockGNdtC",
					"expanded_url": "http://bloom.bg/2mqYtUJ",
					"display_url": "bloom.bg/2mqYtUJ",
					"indices": [
						42,
						65
					]
				}
			]
		},
		"source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
		"in_reply_to_status_id": null,
		"in_reply_to_status_id_str": null,
		"in_reply_to_user_id": null,
		"in_reply_to_user_id_str": null,
		"in_reply_to_screen_name": null,
		"user": {
			"id": 25073877,
			"id_str": "25073877",
			"name": "Donald J. Trump",
			"screen_name": "realDonaldTrump",
			"location": "Washington, DC",
			"description": "45th President of the United States of America",
			"url": null,
			"entities": {
				"description": {
					"urls": []
				}
			},
			"protected": false,
			"followers_count": 27379007,
			"friends_count": 43,
			"listed_count": 67563,
			"created_at": "Wed Mar 18 13:46:38 +0000 2009",
			"favourites_count": 47,
			"utc_offset": -14400,
			"time_zone": "Eastern Time (US & Canada)",
			"geo_enabled": true,
			"verified": true,
			"statuses_count": 34705,
			"lang": "en",
			"contributors_enabled": false,
			"is_translator": false,
			"is_translation_enabled": true,
			"profile_background_color": "6D5C18",
			"profile_background_image_url": "http://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_tile": true,
			"profile_image_url": "http://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_image_url_https": "https://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_banner_url": "https://pbs.twimg.com/profile_banners/25073877/1489657715",
			"profile_link_color": "0D5B73",
			"profile_sidebar_border_color": "BDDCAD",
			"profile_sidebar_fill_color": "C5CEC0",
			"profile_text_color": "333333",
			"profile_use_background_image": true,
			"has_extended_profile": false,
			"default_profile": false,
			"default_profile_image": false,
			"following": null,
			"follow_request_sent": null,
			"notifications": null,
			"translator_type": "regular"
		},
		"geo": null,
		"coordinates": null,
		"place": null,
		"contributors": null,
		"retweeted_status": {
			"created_at": "Fri Mar 10 13:41:13 +0000 2017",
			"id": 840195842183127000,
			"id_str": "840195842183127040",
			"text": "GREAT AGAIN:  +235,000 https://t.co/GkockGNdtC",
			"truncated": false,
			"entities": {
				"hashtags": [],
				"symbols": [],
				"user_mentions": [],
				"urls": [
					{
						"url": "https://t.co/GkockGNdtC",
						"expanded_url": "http://bloom.bg/2mqYtUJ",
						"display_url": "bloom.bg/2mqYtUJ",
						"indices": [
							23,
							46
						]
					}
				]
			},
			"source": "<a href=\"http://drudge.tw\" rel=\"nofollow\">Drudge</a>",
			"in_reply_to_status_id": null,
			"in_reply_to_status_id_str": null,
			"in_reply_to_user_id": null,
			"in_reply_to_user_id_str": null,
			"in_reply_to_screen_name": null,
			"user": {
				"id": 14669951,
				"id_str": "14669951",
				"name": "DRUDGE REPORT",
				"screen_name": "DRUDGE_REPORT",
				"location": "US",
				"description": "The DRUDGE REPORT is a U.S. based news aggregation website run by Matt Drudge(@DRUDGE).",
				"url": "http://t.co/dsLXEBfDsQ",
				"entities": {
					"url": {
						"urls": [
							{
								"url": "http://t.co/dsLXEBfDsQ",
								"expanded_url": "http://www.DRUDGEREPORT.com",
								"display_url": "DRUDGEREPORT.com",
								"indices": [
									0,
									22
								]
							}
						]
					},
					"description": {
						"urls": []
					}
				},
				"protected": false,
				"followers_count": 1188005,
				"friends_count": 2,
				"listed_count": 20892,
				"created_at": "Tue May 06 05:34:47 +0000 2008",
				"favourites_count": 0,
				"utc_offset": -25200,
				"time_zone": "Pacific Time (US & Canada)",
				"geo_enabled": false,
				"verified": false,
				"statuses_count": 188288,
				"lang": "en",
				"contributors_enabled": false,
				"is_translator": false,
				"is_translation_enabled": false,
				"profile_background_color": "FFFFFF",
				"profile_background_image_url": "http://pbs.twimg.com/profile_background_images/4623499/white.png",
				"profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/4623499/white.png",
				"profile_background_tile": false,
				"profile_image_url": "http://pbs.twimg.com/profile_images/53808884/images_normal.jpeg",
				"profile_image_url_https": "https://pbs.twimg.com/profile_images/53808884/images_normal.jpeg",
				"profile_link_color": "000000",
				"profile_sidebar_border_color": "FFFFFF",
				"profile_sidebar_fill_color": "FFFFFF",
				"profile_text_color": "000000",
				"profile_use_background_image": false,
				"has_extended_profile": false,
				"default_profile": false,
				"default_profile_image": false,
				"following": null,
				"follow_request_sent": null,
				"notifications": null,
				"translator_type": "none"
			},
			"geo": null,
			"coordinates": null,
			"place": null,
			"contributors": null,
			"is_quote_status": false,
			"retweet_count": 7819,
			"favorite_count": 30049,
			"favorited": false,
			"retweeted": false,
			"possibly_sensitive": true,
			"lang": "en"
		},
		"is_quote_status": false,
		"retweet_count": 7819,
		"favorite_count": 0,
		"favorited": false,
		"retweeted": false,
		"possibly_sensitive": false,
		"lang": "en"
	},
	{
		"created_at": "Fri Mar 10 13:32:05 +0000 2017",
		"id": 840193545046773800,
		"id_str": "840193545046773760",
		"text": "RT @foxandfriends: \"Never give up....that's the worst thing you could do. There's always a chance.\" -Kyle Coddington's message to those als…",
		"truncated": false,
		"entities": {
			"hashtags": [],
			"symbols": [],
			"user_mentions": [
				{
					"screen_name": "foxandfriends",
					"name": "FOX & friends",
					"id": 15513604,
					"id_str": "15513604",
					"indices": [
						3,
						17
					]
				}
			],
			"urls": []
		},
		"source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
		"in_reply_to_status_id": null,
		"in_reply_to_status_id_str": null,
		"in_reply_to_user_id": null,
		"in_reply_to_user_id_str": null,
		"in_reply_to_screen_name": null,
		"user": {
			"id": 25073877,
			"id_str": "25073877",
			"name": "Donald J. Trump",
			"screen_name": "realDonaldTrump",
			"location": "Washington, DC",
			"description": "45th President of the United States of America",
			"url": null,
			"entities": {
				"description": {
					"urls": []
				}
			},
			"protected": false,
			"followers_count": 27379007,
			"friends_count": 43,
			"listed_count": 67563,
			"created_at": "Wed Mar 18 13:46:38 +0000 2009",
			"favourites_count": 47,
			"utc_offset": -14400,
			"time_zone": "Eastern Time (US & Canada)",
			"geo_enabled": true,
			"verified": true,
			"statuses_count": 34705,
			"lang": "en",
			"contributors_enabled": false,
			"is_translator": false,
			"is_translation_enabled": true,
			"profile_background_color": "6D5C18",
			"profile_background_image_url": "http://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_tile": true,
			"profile_image_url": "http://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_image_url_https": "https://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_banner_url": "https://pbs.twimg.com/profile_banners/25073877/1489657715",
			"profile_link_color": "0D5B73",
			"profile_sidebar_border_color": "BDDCAD",
			"profile_sidebar_fill_color": "C5CEC0",
			"profile_text_color": "333333",
			"profile_use_background_image": true,
			"has_extended_profile": false,
			"default_profile": false,
			"default_profile_image": false,
			"following": null,
			"follow_request_sent": null,
			"notifications": null,
			"translator_type": "regular"
		},
		"geo": null,
		"coordinates": null,
		"place": null,
		"contributors": null,
		"retweeted_status": {
			"created_at": "Fri Mar 10 13:29:03 +0000 2017",
			"id": 840192780433465300,
			"id_str": "840192780433465344",
			"text": "\"Never give up....that's the worst thing you could do. There's always a chance.\" -Kyle Coddington's message to thos… https://t.co/dBEpTSiEXA",
			"truncated": true,
			"entities": {
				"hashtags": [],
				"symbols": [],
				"user_mentions": [],
				"urls": [
					{
						"url": "https://t.co/dBEpTSiEXA",
						"expanded_url": "https://twitter.com/i/web/status/840192780433465344",
						"display_url": "twitter.com/i/web/status/8…",
						"indices": [
							117,
							140
						]
					}
				]
			},
			"source": "<a href=\"https://studio.twitter.com\" rel=\"nofollow\">Media Studio</a>",
			"in_reply_to_status_id": null,
			"in_reply_to_status_id_str": null,
			"in_reply_to_user_id": null,
			"in_reply_to_user_id_str": null,
			"in_reply_to_screen_name": null,
			"user": {
				"id": 15513604,
				"id_str": "15513604",
				"name": "FOX & friends",
				"screen_name": "foxandfriends",
				"location": "New York City",
				"description": "America's #1 cable morning news show",
				"url": "https://t.co/xg790NQUNl",
				"entities": {
					"url": {
						"urls": [
							{
								"url": "https://t.co/xg790NQUNl",
								"expanded_url": "http://foxandfriends.com",
								"display_url": "foxandfriends.com",
								"indices": [
									0,
									23
								]
							}
						]
					},
					"description": {
						"urls": []
					}
				},
				"protected": false,
				"followers_count": 853044,
				"friends_count": 2740,
				"listed_count": 6924,
				"created_at": "Mon Jul 21 10:50:09 +0000 2008",
				"favourites_count": 4992,
				"utc_offset": -14400,
				"time_zone": "Eastern Time (US & Canada)",
				"geo_enabled": true,
				"verified": true,
				"statuses_count": 62863,
				"lang": "en",
				"contributors_enabled": false,
				"is_translator": false,
				"is_translation_enabled": false,
				"profile_background_color": "C0DEED",
				"profile_background_image_url": "http://pbs.twimg.com/profile_background_images/378800000073438215/a640e235e8df7d23d551f500af24d6b8.jpeg",
				"profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/378800000073438215/a640e235e8df7d23d551f500af24d6b8.jpeg",
				"profile_background_tile": false,
				"profile_image_url": "http://pbs.twimg.com/profile_images/816026255963340800/6SZPq7zi_normal.jpg",
				"profile_image_url_https": "https://pbs.twimg.com/profile_images/816026255963340800/6SZPq7zi_normal.jpg",
				"profile_banner_url": "https://pbs.twimg.com/profile_banners/15513604/1456513601",
				"profile_link_color": "0084B4",
				"profile_sidebar_border_color": "FFFFFF",
				"profile_sidebar_fill_color": "DDEEF6",
				"profile_text_color": "333333",
				"profile_use_background_image": true,
				"has_extended_profile": false,
				"default_profile": false,
				"default_profile_image": false,
				"following": null,
				"follow_request_sent": null,
				"notifications": null,
				"translator_type": "none"
			},
			"geo": null,
			"coordinates": null,
			"place": null,
			"contributors": null,
			"is_quote_status": false,
			"retweet_count": 9529,
			"favorite_count": 37267,
			"favorited": false,
			"retweeted": false,
			"possibly_sensitive": false,
			"lang": "en"
		},
		"is_quote_status": false,
		"retweet_count": 9529,
		"favorite_count": 0,
		"favorited": false,
		"retweeted": false,
		"lang": "en"
	},
	{
		"created_at": "Thu Mar 09 23:11:27 +0000 2017",
		"id": 839976956703748100,
		"id_str": "839976956703748096",
		"text": "Honored to meet this years @SenateYouth delegates w/ @VP Pence in the East Room of the @WhiteHouse. Congratulations… https://t.co/oQIx7LybCV",
		"truncated": true,
		"entities": {
			"hashtags": [],
			"symbols": [],
			"user_mentions": [
				{
					"screen_name": "SenateYouth",
					"name": "Senate Youth",
					"id": 1418226576,
					"id_str": "1418226576",
					"indices": [
						27,
						39
					]
				},
				{
					"screen_name": "VP",
					"name": "Vice President Pence",
					"id": 818910970567344100,
					"id_str": "818910970567344128",
					"indices": [
						53,
						56
					]
				},
				{
					"screen_name": "WhiteHouse",
					"name": "The White House",
					"id": 822215673812119600,
					"id_str": "822215673812119553",
					"indices": [
						87,
						98
					]
				}
			],
			"urls": [
				{
					"url": "https://t.co/oQIx7LybCV",
					"expanded_url": "https://twitter.com/i/web/status/839976956703748096",
					"display_url": "twitter.com/i/web/status/8…",
					"indices": [
						117,
						140
					]
				}
			]
		},
		"source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
		"in_reply_to_status_id": null,
		"in_reply_to_status_id_str": null,
		"in_reply_to_user_id": null,
		"in_reply_to_user_id_str": null,
		"in_reply_to_screen_name": null,
		"user": {
			"id": 25073877,
			"id_str": "25073877",
			"name": "Donald J. Trump",
			"screen_name": "realDonaldTrump",
			"location": "Washington, DC",
			"description": "45th President of the United States of America",
			"url": null,
			"entities": {
				"description": {
					"urls": []
				}
			},
			"protected": false,
			"followers_count": 27379007,
			"friends_count": 43,
			"listed_count": 67563,
			"created_at": "Wed Mar 18 13:46:38 +0000 2009",
			"favourites_count": 47,
			"utc_offset": -14400,
			"time_zone": "Eastern Time (US & Canada)",
			"geo_enabled": true,
			"verified": true,
			"statuses_count": 34705,
			"lang": "en",
			"contributors_enabled": false,
			"is_translator": false,
			"is_translation_enabled": true,
			"profile_background_color": "6D5C18",
			"profile_background_image_url": "http://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_tile": true,
			"profile_image_url": "http://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_image_url_https": "https://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_banner_url": "https://pbs.twimg.com/profile_banners/25073877/1489657715",
			"profile_link_color": "0D5B73",
			"profile_sidebar_border_color": "BDDCAD",
			"profile_sidebar_fill_color": "C5CEC0",
			"profile_text_color": "333333",
			"profile_use_background_image": true,
			"has_extended_profile": false,
			"default_profile": false,
			"default_profile_image": false,
			"following": null,
			"follow_request_sent": null,
			"notifications": null,
			"translator_type": "regular"
		},
		"geo": null,
		"coordinates": null,
		"place": null,
		"contributors": null,
		"is_quote_status": false,
		"retweet_count": 10626,
		"favorite_count": 57173,
		"favorited": false,
		"retweeted": false,
		"possibly_sensitive": false,
		"lang": "en"
	},
	{
		"created_at": "Thu Mar 09 22:36:27 +0000 2017",
		"id": 839968149890076700,
		"id_str": "839968149890076672",
		"text": "'U.S. Consumer Comfort Just Reached Its Highest Level in a Decade' ➡️https://t.co/S8nZgmeMMV https://t.co/xC0piRa6eP",
		"truncated": false,
		"entities": {
			"hashtags": [],
			"symbols": [],
			"user_mentions": [],
			"urls": [
				{
					"url": "https://t.co/S8nZgmeMMV",
					"expanded_url": "https://www.bloomberg.com/amp/news/articles/2017-03-09/u-s-consumer-comfort-reaches-decade-high-on-economic-optimism",
					"display_url": "bloomberg.com/amp/news/artic…",
					"indices": [
						69,
						92
					]
				}
			],
			"media": [
				{
					"id": 839968130189312000,
					"id_str": "839968130189312000",
					"indices": [
						93,
						116
					],
					"media_url": "http://pbs.twimg.com/media/C6gqkGaVQAAerOb.jpg",
					"media_url_https": "https://pbs.twimg.com/media/C6gqkGaVQAAerOb.jpg",
					"url": "https://t.co/xC0piRa6eP",
					"display_url": "pic.twitter.com/xC0piRa6eP",
					"expanded_url": "https://twitter.com/realDonaldTrump/status/839968149890076672/photo/1",
					"type": "photo",
					"sizes": {
						"large": {
							"w": 680,
							"h": 382,
							"resize": "fit"
						},
						"thumb": {
							"w": 150,
							"h": 150,
							"resize": "crop"
						},
						"medium": {
							"w": 680,
							"h": 382,
							"resize": "fit"
						},
						"small": {
							"w": 680,
							"h": 382,
							"resize": "fit"
						}
					}
				}
			]
		},
		"extended_entities": {
			"media": [
				{
					"id": 839968130189312000,
					"id_str": "839968130189312000",
					"indices": [
						93,
						116
					],
					"media_url": "http://pbs.twimg.com/media/C6gqkGaVQAAerOb.jpg",
					"media_url_https": "https://pbs.twimg.com/media/C6gqkGaVQAAerOb.jpg",
					"url": "https://t.co/xC0piRa6eP",
					"display_url": "pic.twitter.com/xC0piRa6eP",
					"expanded_url": "https://twitter.com/realDonaldTrump/status/839968149890076672/photo/1",
					"type": "photo",
					"sizes": {
						"large": {
							"w": 680,
							"h": 382,
							"resize": "fit"
						},
						"thumb": {
							"w": 150,
							"h": 150,
							"resize": "crop"
						},
						"medium": {
							"w": 680,
							"h": 382,
							"resize": "fit"
						},
						"small": {
							"w": 680,
							"h": 382,
							"resize": "fit"
						}
					}
				}
			]
		},
		"source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
		"in_reply_to_status_id": null,
		"in_reply_to_status_id_str": null,
		"in_reply_to_user_id": null,
		"in_reply_to_user_id_str": null,
		"in_reply_to_screen_name": null,
		"user": {
			"id": 25073877,
			"id_str": "25073877",
			"name": "Donald J. Trump",
			"screen_name": "realDonaldTrump",
			"location": "Washington, DC",
			"description": "45th President of the United States of America",
			"url": null,
			"entities": {
				"description": {
					"urls": []
				}
			},
			"protected": false,
			"followers_count": 27379007,
			"friends_count": 43,
			"listed_count": 67563,
			"created_at": "Wed Mar 18 13:46:38 +0000 2009",
			"favourites_count": 47,
			"utc_offset": -14400,
			"time_zone": "Eastern Time (US & Canada)",
			"geo_enabled": true,
			"verified": true,
			"statuses_count": 34705,
			"lang": "en",
			"contributors_enabled": false,
			"is_translator": false,
			"is_translation_enabled": true,
			"profile_background_color": "6D5C18",
			"profile_background_image_url": "http://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_tile": true,
			"profile_image_url": "http://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_image_url_https": "https://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_banner_url": "https://pbs.twimg.com/profile_banners/25073877/1489657715",
			"profile_link_color": "0D5B73",
			"profile_sidebar_border_color": "BDDCAD",
			"profile_sidebar_fill_color": "C5CEC0",
			"profile_text_color": "333333",
			"profile_use_background_image": true,
			"has_extended_profile": false,
			"default_profile": false,
			"default_profile_image": false,
			"following": null,
			"follow_request_sent": null,
			"notifications": null,
			"translator_type": "regular"
		},
		"geo": null,
		"coordinates": null,
		"place": null,
		"contributors": null,
		"is_quote_status": false,
		"retweet_count": 16347,
		"favorite_count": 68229,
		"favorited": false,
		"retweeted": false,
		"possibly_sensitive": false,
		"lang": "en"
	},
	{
		"created_at": "Thu Mar 09 17:01:17 +0000 2017",
		"id": 839883804315684900,
		"id_str": "839883804315684864",
		"text": "Despite what you hear in the press, healthcare is coming along great. We are talking to many groups and it will end in a beautiful picture!",
		"truncated": false,
		"entities": {
			"hashtags": [],
			"symbols": [],
			"user_mentions": [],
			"urls": []
		},
		"source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
		"in_reply_to_status_id": null,
		"in_reply_to_status_id_str": null,
		"in_reply_to_user_id": null,
		"in_reply_to_user_id_str": null,
		"in_reply_to_screen_name": null,
		"user": {
			"id": 25073877,
			"id_str": "25073877",
			"name": "Donald J. Trump",
			"screen_name": "realDonaldTrump",
			"location": "Washington, DC",
			"description": "45th President of the United States of America",
			"url": null,
			"entities": {
				"description": {
					"urls": []
				}
			},
			"protected": false,
			"followers_count": 27379007,
			"friends_count": 43,
			"listed_count": 67563,
			"created_at": "Wed Mar 18 13:46:38 +0000 2009",
			"favourites_count": 47,
			"utc_offset": -14400,
			"time_zone": "Eastern Time (US & Canada)",
			"geo_enabled": true,
			"verified": true,
			"statuses_count": 34705,
			"lang": "en",
			"contributors_enabled": false,
			"is_translator": false,
			"is_translation_enabled": true,
			"profile_background_color": "6D5C18",
			"profile_background_image_url": "http://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_tile": true,
			"profile_image_url": "http://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_image_url_https": "https://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_banner_url": "https://pbs.twimg.com/profile_banners/25073877/1489657715",
			"profile_link_color": "0D5B73",
			"profile_sidebar_border_color": "BDDCAD",
			"profile_sidebar_fill_color": "C5CEC0",
			"profile_text_color": "333333",
			"profile_use_background_image": true,
			"has_extended_profile": false,
			"default_profile": false,
			"default_profile_image": false,
			"following": null,
			"follow_request_sent": null,
			"notifications": null,
			"translator_type": "regular"
		},
		"geo": null,
		"coordinates": null,
		"place": null,
		"contributors": null,
		"is_quote_status": false,
		"retweet_count": 21338,
		"favorite_count": 112746,
		"favorited": false,
		"retweeted": false,
		"lang": "en"
	},
	{
		"created_at": "Thu Mar 09 13:13:54 +0000 2017",
		"id": 839826581354922000,
		"id_str": "839826581354921984",
		"text": "RT @foxnation: .@realDonaldTrump's First Full Month in Office Sees Biggest Jobs Gain 'In Years': Report: https://t.co/rx4bgI1MWK",
		"truncated": false,
		"entities": {
			"hashtags": [],
			"symbols": [],
			"user_mentions": [
				{
					"screen_name": "foxnation",
					"name": "Fox Nation",
					"id": 37764422,
					"id_str": "37764422",
					"indices": [
						3,
						13
					]
				},
				{
					"screen_name": "realDonaldTrump",
					"name": "Donald J. Trump",
					"id": 25073877,
					"id_str": "25073877",
					"indices": [
						16,
						32
					]
				}
			],
			"urls": [
				{
					"url": "https://t.co/rx4bgI1MWK",
					"expanded_url": "http://bit.ly/2n8cy9k",
					"display_url": "bit.ly/2n8cy9k",
					"indices": [
						105,
						128
					]
				}
			]
		},
		"source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
		"in_reply_to_status_id": null,
		"in_reply_to_status_id_str": null,
		"in_reply_to_user_id": null,
		"in_reply_to_user_id_str": null,
		"in_reply_to_screen_name": null,
		"user": {
			"id": 25073877,
			"id_str": "25073877",
			"name": "Donald J. Trump",
			"screen_name": "realDonaldTrump",
			"location": "Washington, DC",
			"description": "45th President of the United States of America",
			"url": null,
			"entities": {
				"description": {
					"urls": []
				}
			},
			"protected": false,
			"followers_count": 27379007,
			"friends_count": 43,
			"listed_count": 67563,
			"created_at": "Wed Mar 18 13:46:38 +0000 2009",
			"favourites_count": 47,
			"utc_offset": -14400,
			"time_zone": "Eastern Time (US & Canada)",
			"geo_enabled": true,
			"verified": true,
			"statuses_count": 34705,
			"lang": "en",
			"contributors_enabled": false,
			"is_translator": false,
			"is_translation_enabled": true,
			"profile_background_color": "6D5C18",
			"profile_background_image_url": "http://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_tile": true,
			"profile_image_url": "http://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_image_url_https": "https://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_banner_url": "https://pbs.twimg.com/profile_banners/25073877/1489657715",
			"profile_link_color": "0D5B73",
			"profile_sidebar_border_color": "BDDCAD",
			"profile_sidebar_fill_color": "C5CEC0",
			"profile_text_color": "333333",
			"profile_use_background_image": true,
			"has_extended_profile": false,
			"default_profile": false,
			"default_profile_image": false,
			"following": null,
			"follow_request_sent": null,
			"notifications": null,
			"translator_type": "regular"
		},
		"geo": null,
		"coordinates": null,
		"place": null,
		"contributors": null,
		"retweeted_status": {
			"created_at": "Thu Mar 09 01:16:12 +0000 2017",
			"id": 839645962796683300,
			"id_str": "839645962796683265",
			"text": ".@realDonaldTrump's First Full Month in Office Sees Biggest Jobs Gain 'In Years': Report: https://t.co/rx4bgI1MWK",
			"truncated": false,
			"entities": {
				"hashtags": [],
				"symbols": [],
				"user_mentions": [
					{
						"screen_name": "realDonaldTrump",
						"name": "Donald J. Trump",
						"id": 25073877,
						"id_str": "25073877",
						"indices": [
							1,
							17
						]
					}
				],
				"urls": [
					{
						"url": "https://t.co/rx4bgI1MWK",
						"expanded_url": "http://bit.ly/2n8cy9k",
						"display_url": "bit.ly/2n8cy9k",
						"indices": [
							90,
							113
						]
					}
				]
			},
			"source": "<a href=\"http://twitter.com\" rel=\"nofollow\">Twitter Web Client</a>",
			"in_reply_to_status_id": null,
			"in_reply_to_status_id_str": null,
			"in_reply_to_user_id": null,
			"in_reply_to_user_id_str": null,
			"in_reply_to_screen_name": null,
			"user": {
				"id": 37764422,
				"id_str": "37764422",
				"name": "Fox Nation",
				"screen_name": "foxnation",
				"location": "",
				"description": "Join the community that believes in the American dream.",
				"url": "http://t.co/3JIKguw0Ue",
				"entities": {
					"url": {
						"urls": [
							{
								"url": "http://t.co/3JIKguw0Ue",
								"expanded_url": "http://www.foxnation.com/",
								"display_url": "foxnation.com",
								"indices": [
									0,
									22
								]
							}
						]
					},
					"description": {
						"urls": []
					}
				},
				"protected": false,
				"followers_count": 346665,
				"friends_count": 415,
				"listed_count": 4317,
				"created_at": "Mon May 04 21:25:22 +0000 2009",
				"favourites_count": 60,
				"utc_offset": -14400,
				"time_zone": "Eastern Time (US & Canada)",
				"geo_enabled": false,
				"verified": true,
				"statuses_count": 71477,
				"lang": "en",
				"contributors_enabled": false,
				"is_translator": false,
				"is_translation_enabled": false,
				"profile_background_color": "000000",
				"profile_background_image_url": "http://pbs.twimg.com/profile_background_images/166298717/tile.jpg",
				"profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/166298717/tile.jpg",
				"profile_background_tile": true,
				"profile_image_url": "http://pbs.twimg.com/profile_images/1272378281/wp-foxnewsheadlines_normal.jpg",
				"profile_image_url_https": "https://pbs.twimg.com/profile_images/1272378281/wp-foxnewsheadlines_normal.jpg",
				"profile_banner_url": "https://pbs.twimg.com/profile_banners/37764422/1358199697",
				"profile_link_color": "8F0404",
				"profile_sidebar_border_color": "07598F",
				"profile_sidebar_fill_color": "A8A8A8",
				"profile_text_color": "000000",
				"profile_use_background_image": true,
				"has_extended_profile": false,
				"default_profile": false,
				"default_profile_image": false,
				"following": null,
				"follow_request_sent": null,
				"notifications": null,
				"translator_type": "none"
			},
			"geo": null,
			"coordinates": null,
			"place": null,
			"contributors": null,
			"is_quote_status": false,
			"retweet_count": 12472,
			"favorite_count": 48929,
			"favorited": false,
			"retweeted": false,
			"possibly_sensitive": false,
			"lang": "en"
		},
		"is_quote_status": false,
		"retweet_count": 12472,
		"favorite_count": 0,
		"favorited": false,
		"retweeted": false,
		"possibly_sensitive": false,
		"lang": "en"
	},
	{
		"created_at": "Wed Mar 08 23:54:16 +0000 2017",
		"id": 839625347524096000,
		"id_str": "839625347524096000",
		"text": "Great news. We are only just beginning. Together, we are going to #MAGA! https://t.co/BSp685Q9Qf https://t.co/K7yeBZsf6r",
		"truncated": false,
		"entities": {
			"hashtags": [
				{
					"text": "MAGA",
					"indices": [
						66,
						71
					]
				}
			],
			"symbols": [],
			"user_mentions": [],
			"urls": [
				{
					"url": "https://t.co/BSp685Q9Qf",
					"expanded_url": "https://instagram.com/p/BRZROKmg-st/",
					"display_url": "instagram.com/p/BRZROKmg-st/",
					"indices": [
						73,
						96
					]
				}
			],
			"media": [
				{
					"id": 839625331954827300,
					"id_str": "839625331954827264",
					"indices": [
						97,
						120
					],
					"media_url": "http://pbs.twimg.com/media/C6byyneWQAAviBw.jpg",
					"media_url_https": "https://pbs.twimg.com/media/C6byyneWQAAviBw.jpg",
					"url": "https://t.co/K7yeBZsf6r",
					"display_url": "pic.twitter.com/K7yeBZsf6r",
					"expanded_url": "https://twitter.com/realDonaldTrump/status/839625347524096000/photo/1",
					"type": "photo",
					"sizes": {
						"small": {
							"w": 680,
							"h": 383,
							"resize": "fit"
						},
						"medium": {
							"w": 1200,
							"h": 675,
							"resize": "fit"
						},
						"large": {
							"w": 1280,
							"h": 720,
							"resize": "fit"
						},
						"thumb": {
							"w": 150,
							"h": 150,
							"resize": "crop"
						}
					}
				}
			]
		},
		"extended_entities": {
			"media": [
				{
					"id": 839625331954827300,
					"id_str": "839625331954827264",
					"indices": [
						97,
						120
					],
					"media_url": "http://pbs.twimg.com/media/C6byyneWQAAviBw.jpg",
					"media_url_https": "https://pbs.twimg.com/media/C6byyneWQAAviBw.jpg",
					"url": "https://t.co/K7yeBZsf6r",
					"display_url": "pic.twitter.com/K7yeBZsf6r",
					"expanded_url": "https://twitter.com/realDonaldTrump/status/839625347524096000/photo/1",
					"type": "photo",
					"sizes": {
						"small": {
							"w": 680,
							"h": 383,
							"resize": "fit"
						},
						"medium": {
							"w": 1200,
							"h": 675,
							"resize": "fit"
						},
						"large": {
							"w": 1280,
							"h": 720,
							"resize": "fit"
						},
						"thumb": {
							"w": 150,
							"h": 150,
							"resize": "crop"
						}
					}
				}
			]
		},
		"source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
		"in_reply_to_status_id": null,
		"in_reply_to_status_id_str": null,
		"in_reply_to_user_id": null,
		"in_reply_to_user_id_str": null,
		"in_reply_to_screen_name": null,
		"user": {
			"id": 25073877,
			"id_str": "25073877",
			"name": "Donald J. Trump",
			"screen_name": "realDonaldTrump",
			"location": "Washington, DC",
			"description": "45th President of the United States of America",
			"url": null,
			"entities": {
				"description": {
					"urls": []
				}
			},
			"protected": false,
			"followers_count": 27379007,
			"friends_count": 43,
			"listed_count": 67563,
			"created_at": "Wed Mar 18 13:46:38 +0000 2009",
			"favourites_count": 47,
			"utc_offset": -14400,
			"time_zone": "Eastern Time (US & Canada)",
			"geo_enabled": true,
			"verified": true,
			"statuses_count": 34705,
			"lang": "en",
			"contributors_enabled": false,
			"is_translator": false,
			"is_translation_enabled": true,
			"profile_background_color": "6D5C18",
			"profile_background_image_url": "http://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_tile": true,
			"profile_image_url": "http://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_image_url_https": "https://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_banner_url": "https://pbs.twimg.com/profile_banners/25073877/1489657715",
			"profile_link_color": "0D5B73",
			"profile_sidebar_border_color": "BDDCAD",
			"profile_sidebar_fill_color": "C5CEC0",
			"profile_text_color": "333333",
			"profile_use_background_image": true,
			"has_extended_profile": false,
			"default_profile": false,
			"default_profile_image": false,
			"following": null,
			"follow_request_sent": null,
			"notifications": null,
			"translator_type": "regular"
		},
		"geo": null,
		"coordinates": null,
		"place": null,
		"contributors": null,
		"is_quote_status": false,
		"retweet_count": 22264,
		"favorite_count": 91125,
		"favorited": false,
		"retweeted": false,
		"possibly_sensitive": false,
		"lang": "en"
	},
	{
		"created_at": "Wed Mar 08 23:50:25 +0000 2017",
		"id": 839624377826230300,
		"id_str": "839624377826230272",
		"text": "Met with @RepCummings today at the @WhiteHouse. Great discussion!",
		"truncated": false,
		"entities": {
			"hashtags": [],
			"symbols": [],
			"user_mentions": [
				{
					"screen_name": "RepCummings",
					"name": "Elijah E. Cummings",
					"id": 787373558,
					"id_str": "787373558",
					"indices": [
						9,
						21
					]
				},
				{
					"screen_name": "WhiteHouse",
					"name": "The White House",
					"id": 822215673812119600,
					"id_str": "822215673812119553",
					"indices": [
						35,
						46
					]
				}
			],
			"urls": []
		},
		"source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
		"in_reply_to_status_id": null,
		"in_reply_to_status_id_str": null,
		"in_reply_to_user_id": null,
		"in_reply_to_user_id_str": null,
		"in_reply_to_screen_name": null,
		"user": {
			"id": 25073877,
			"id_str": "25073877",
			"name": "Donald J. Trump",
			"screen_name": "realDonaldTrump",
			"location": "Washington, DC",
			"description": "45th President of the United States of America",
			"url": null,
			"entities": {
				"description": {
					"urls": []
				}
			},
			"protected": false,
			"followers_count": 27379007,
			"friends_count": 43,
			"listed_count": 67563,
			"created_at": "Wed Mar 18 13:46:38 +0000 2009",
			"favourites_count": 47,
			"utc_offset": -14400,
			"time_zone": "Eastern Time (US & Canada)",
			"geo_enabled": true,
			"verified": true,
			"statuses_count": 34705,
			"lang": "en",
			"contributors_enabled": false,
			"is_translator": false,
			"is_translation_enabled": true,
			"profile_background_color": "6D5C18",
			"profile_background_image_url": "http://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_tile": true,
			"profile_image_url": "http://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_image_url_https": "https://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_banner_url": "https://pbs.twimg.com/profile_banners/25073877/1489657715",
			"profile_link_color": "0D5B73",
			"profile_sidebar_border_color": "BDDCAD",
			"profile_sidebar_fill_color": "C5CEC0",
			"profile_text_color": "333333",
			"profile_use_background_image": true,
			"has_extended_profile": false,
			"default_profile": false,
			"default_profile_image": false,
			"following": null,
			"follow_request_sent": null,
			"notifications": null,
			"translator_type": "regular"
		},
		"geo": null,
		"coordinates": null,
		"place": null,
		"contributors": null,
		"is_quote_status": false,
		"retweet_count": 7908,
		"favorite_count": 54864,
		"favorited": false,
		"retweeted": false,
		"lang": "en"
	},
	{
		"created_at": "Wed Mar 08 12:11:25 +0000 2017",
		"id": 839448469374894100,
		"id_str": "839448469374894080",
		"text": "LinkedIn Workforce Report: January and February were the strongest consecutive months for hiring since August and September 2015",
		"truncated": false,
		"entities": {
			"hashtags": [],
			"symbols": [],
			"user_mentions": [],
			"urls": []
		},
		"source": "<a href=\"http://twitter.com/download/android\" rel=\"nofollow\">Twitter for Android</a>",
		"in_reply_to_status_id": null,
		"in_reply_to_status_id_str": null,
		"in_reply_to_user_id": null,
		"in_reply_to_user_id_str": null,
		"in_reply_to_screen_name": null,
		"user": {
			"id": 25073877,
			"id_str": "25073877",
			"name": "Donald J. Trump",
			"screen_name": "realDonaldTrump",
			"location": "Washington, DC",
			"description": "45th President of the United States of America",
			"url": null,
			"entities": {
				"description": {
					"urls": []
				}
			},
			"protected": false,
			"followers_count": 27379007,
			"friends_count": 43,
			"listed_count": 67563,
			"created_at": "Wed Mar 18 13:46:38 +0000 2009",
			"favourites_count": 47,
			"utc_offset": -14400,
			"time_zone": "Eastern Time (US & Canada)",
			"geo_enabled": true,
			"verified": true,
			"statuses_count": 34705,
			"lang": "en",
			"contributors_enabled": false,
			"is_translator": false,
			"is_translation_enabled": true,
			"profile_background_color": "6D5C18",
			"profile_background_image_url": "http://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_tile": true,
			"profile_image_url": "http://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_image_url_https": "https://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_banner_url": "https://pbs.twimg.com/profile_banners/25073877/1489657715",
			"profile_link_color": "0D5B73",
			"profile_sidebar_border_color": "BDDCAD",
			"profile_sidebar_fill_color": "C5CEC0",
			"profile_text_color": "333333",
			"profile_use_background_image": true,
			"has_extended_profile": false,
			"default_profile": false,
			"default_profile_image": false,
			"following": null,
			"follow_request_sent": null,
			"notifications": null,
			"translator_type": "regular"
		},
		"geo": null,
		"coordinates": null,
		"place": null,
		"contributors": null,
		"is_quote_status": false,
		"retweet_count": 15974,
		"favorite_count": 86029,
		"favorited": false,
		"retweeted": false,
		"lang": "en"
	},
	{
		"created_at": "Wed Mar 08 11:13:44 +0000 2017",
		"id": 839433951957696500,
		"id_str": "839433951957696513",
		"text": "On International Women's Day, join me in honoring the critical role of women here in America &amp; around the world.",
		"truncated": false,
		"entities": {
			"hashtags": [],
			"symbols": [],
			"user_mentions": [],
			"urls": []
		},
		"source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
		"in_reply_to_status_id": null,
		"in_reply_to_status_id_str": null,
		"in_reply_to_user_id": null,
		"in_reply_to_user_id_str": null,
		"in_reply_to_screen_name": null,
		"user": {
			"id": 25073877,
			"id_str": "25073877",
			"name": "Donald J. Trump",
			"screen_name": "realDonaldTrump",
			"location": "Washington, DC",
			"description": "45th President of the United States of America",
			"url": null,
			"entities": {
				"description": {
					"urls": []
				}
			},
			"protected": false,
			"followers_count": 27379007,
			"friends_count": 43,
			"listed_count": 67563,
			"created_at": "Wed Mar 18 13:46:38 +0000 2009",
			"favourites_count": 47,
			"utc_offset": -14400,
			"time_zone": "Eastern Time (US & Canada)",
			"geo_enabled": true,
			"verified": true,
			"statuses_count": 34705,
			"lang": "en",
			"contributors_enabled": false,
			"is_translator": false,
			"is_translation_enabled": true,
			"profile_background_color": "6D5C18",
			"profile_background_image_url": "http://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_tile": true,
			"profile_image_url": "http://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_image_url_https": "https://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_banner_url": "https://pbs.twimg.com/profile_banners/25073877/1489657715",
			"profile_link_color": "0D5B73",
			"profile_sidebar_border_color": "BDDCAD",
			"profile_sidebar_fill_color": "C5CEC0",
			"profile_text_color": "333333",
			"profile_use_background_image": true,
			"has_extended_profile": false,
			"default_profile": false,
			"default_profile_image": false,
			"following": null,
			"follow_request_sent": null,
			"notifications": null,
			"translator_type": "regular"
		},
		"geo": null,
		"coordinates": null,
		"place": null,
		"contributors": null,
		"is_quote_status": false,
		"retweet_count": 22011,
		"favorite_count": 116537,
		"favorited": false,
		"retweeted": false,
		"lang": "en"
	},
	{
		"created_at": "Wed Mar 08 11:12:39 +0000 2017",
		"id": 839433678275153900,
		"id_str": "839433678275153921",
		"text": "I have tremendous respect for women and the many roles they serve that are vital to the fabric of our society and our economy.",
		"truncated": false,
		"entities": {
			"hashtags": [],
			"symbols": [],
			"user_mentions": [],
			"urls": []
		},
		"source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
		"in_reply_to_status_id": null,
		"in_reply_to_status_id_str": null,
		"in_reply_to_user_id": null,
		"in_reply_to_user_id_str": null,
		"in_reply_to_screen_name": null,
		"user": {
			"id": 25073877,
			"id_str": "25073877",
			"name": "Donald J. Trump",
			"screen_name": "realDonaldTrump",
			"location": "Washington, DC",
			"description": "45th President of the United States of America",
			"url": null,
			"entities": {
				"description": {
					"urls": []
				}
			},
			"protected": false,
			"followers_count": 27379007,
			"friends_count": 43,
			"listed_count": 67563,
			"created_at": "Wed Mar 18 13:46:38 +0000 2009",
			"favourites_count": 47,
			"utc_offset": -14400,
			"time_zone": "Eastern Time (US & Canada)",
			"geo_enabled": true,
			"verified": true,
			"statuses_count": 34705,
			"lang": "en",
			"contributors_enabled": false,
			"is_translator": false,
			"is_translation_enabled": true,
			"profile_background_color": "6D5C18",
			"profile_background_image_url": "http://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_tile": true,
			"profile_image_url": "http://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_image_url_https": "https://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_banner_url": "https://pbs.twimg.com/profile_banners/25073877/1489657715",
			"profile_link_color": "0D5B73",
			"profile_sidebar_border_color": "BDDCAD",
			"profile_sidebar_fill_color": "C5CEC0",
			"profile_text_color": "333333",
			"profile_use_background_image": true,
			"has_extended_profile": false,
			"default_profile": false,
			"default_profile_image": false,
			"following": null,
			"follow_request_sent": null,
			"notifications": null,
			"translator_type": "regular"
		},
		"geo": null,
		"coordinates": null,
		"place": null,
		"contributors": null,
		"is_quote_status": false,
		"retweet_count": 23497,
		"favorite_count": 122487,
		"favorited": false,
		"retweeted": false,
		"lang": "en"
	},
	{
		"created_at": "Wed Mar 08 00:14:30 +0000 2017",
		"id": 839268048313929700,
		"id_str": "839268048313929729",
		"text": "I feel sure that my friend @RandPaul will come along with the new and great health care program because he knows Obamacare is a disaster!",
		"truncated": false,
		"entities": {
			"hashtags": [],
			"symbols": [],
			"user_mentions": [
				{
					"screen_name": "RandPaul",
					"name": "Senator Rand Paul",
					"id": 216881337,
					"id_str": "216881337",
					"indices": [
						27,
						36
					]
				}
			],
			"urls": []
		},
		"source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
		"in_reply_to_status_id": null,
		"in_reply_to_status_id_str": null,
		"in_reply_to_user_id": null,
		"in_reply_to_user_id_str": null,
		"in_reply_to_screen_name": null,
		"user": {
			"id": 25073877,
			"id_str": "25073877",
			"name": "Donald J. Trump",
			"screen_name": "realDonaldTrump",
			"location": "Washington, DC",
			"description": "45th President of the United States of America",
			"url": null,
			"entities": {
				"description": {
					"urls": []
				}
			},
			"protected": false,
			"followers_count": 27379007,
			"friends_count": 43,
			"listed_count": 67563,
			"created_at": "Wed Mar 18 13:46:38 +0000 2009",
			"favourites_count": 47,
			"utc_offset": -14400,
			"time_zone": "Eastern Time (US & Canada)",
			"geo_enabled": true,
			"verified": true,
			"statuses_count": 34705,
			"lang": "en",
			"contributors_enabled": false,
			"is_translator": false,
			"is_translation_enabled": true,
			"profile_background_color": "6D5C18",
			"profile_background_image_url": "http://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_tile": true,
			"profile_image_url": "http://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_image_url_https": "https://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_banner_url": "https://pbs.twimg.com/profile_banners/25073877/1489657715",
			"profile_link_color": "0D5B73",
			"profile_sidebar_border_color": "BDDCAD",
			"profile_sidebar_fill_color": "C5CEC0",
			"profile_text_color": "333333",
			"profile_use_background_image": true,
			"has_extended_profile": false,
			"default_profile": false,
			"default_profile_image": false,
			"following": null,
			"follow_request_sent": null,
			"notifications": null,
			"translator_type": "regular"
		},
		"geo": null,
		"coordinates": null,
		"place": null,
		"contributors": null,
		"is_quote_status": false,
		"retweet_count": 15724,
		"favorite_count": 82601,
		"favorited": false,
		"retweeted": false,
		"lang": "en"
	},
	{
		"created_at": "Tue Mar 07 14:14:03 +0000 2017",
		"id": 839116941956640800,
		"id_str": "839116941956640768",
		"text": "Don't let the FAKE NEWS tell you that there is big infighting in the Trump Admin. We are getting along great, and getting major things done!",
		"truncated": false,
		"entities": {
			"hashtags": [],
			"symbols": [],
			"user_mentions": [],
			"urls": []
		},
		"source": "<a href=\"http://twitter.com/download/android\" rel=\"nofollow\">Twitter for Android</a>",
		"in_reply_to_status_id": null,
		"in_reply_to_status_id_str": null,
		"in_reply_to_user_id": null,
		"in_reply_to_user_id_str": null,
		"in_reply_to_screen_name": null,
		"user": {
			"id": 25073877,
			"id_str": "25073877",
			"name": "Donald J. Trump",
			"screen_name": "realDonaldTrump",
			"location": "Washington, DC",
			"description": "45th President of the United States of America",
			"url": null,
			"entities": {
				"description": {
					"urls": []
				}
			},
			"protected": false,
			"followers_count": 27379007,
			"friends_count": 43,
			"listed_count": 67563,
			"created_at": "Wed Mar 18 13:46:38 +0000 2009",
			"favourites_count": 47,
			"utc_offset": -14400,
			"time_zone": "Eastern Time (US & Canada)",
			"geo_enabled": true,
			"verified": true,
			"statuses_count": 34705,
			"lang": "en",
			"contributors_enabled": false,
			"is_translator": false,
			"is_translation_enabled": true,
			"profile_background_color": "6D5C18",
			"profile_background_image_url": "http://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_tile": true,
			"profile_image_url": "http://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_image_url_https": "https://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_banner_url": "https://pbs.twimg.com/profile_banners/25073877/1489657715",
			"profile_link_color": "0D5B73",
			"profile_sidebar_border_color": "BDDCAD",
			"profile_sidebar_fill_color": "C5CEC0",
			"profile_text_color": "333333",
			"profile_use_background_image": true,
			"has_extended_profile": false,
			"default_profile": false,
			"default_profile_image": false,
			"following": null,
			"follow_request_sent": null,
			"notifications": null,
			"translator_type": "regular"
		},
		"geo": null,
		"coordinates": null,
		"place": null,
		"contributors": null,
		"is_quote_status": false,
		"retweet_count": 26296,
		"favorite_count": 123586,
		"favorited": false,
		"retweeted": false,
		"lang": "en"
	},
	{
		"created_at": "Tue Mar 07 13:46:28 +0000 2017",
		"id": 839110000870109200,
		"id_str": "839110000870109184",
		"text": "I am working on a new system where there will be competition in the Drug Industry. Pricing for the American people will come way down!",
		"truncated": false,
		"entities": {
			"hashtags": [],
			"symbols": [],
			"user_mentions": [],
			"urls": []
		},
		"source": "<a href=\"http://twitter.com/download/android\" rel=\"nofollow\">Twitter for Android</a>",
		"in_reply_to_status_id": null,
		"in_reply_to_status_id_str": null,
		"in_reply_to_user_id": null,
		"in_reply_to_user_id_str": null,
		"in_reply_to_screen_name": null,
		"user": {
			"id": 25073877,
			"id_str": "25073877",
			"name": "Donald J. Trump",
			"screen_name": "realDonaldTrump",
			"location": "Washington, DC",
			"description": "45th President of the United States of America",
			"url": null,
			"entities": {
				"description": {
					"urls": []
				}
			},
			"protected": false,
			"followers_count": 27379007,
			"friends_count": 43,
			"listed_count": 67563,
			"created_at": "Wed Mar 18 13:46:38 +0000 2009",
			"favourites_count": 47,
			"utc_offset": -14400,
			"time_zone": "Eastern Time (US & Canada)",
			"geo_enabled": true,
			"verified": true,
			"statuses_count": 34705,
			"lang": "en",
			"contributors_enabled": false,
			"is_translator": false,
			"is_translation_enabled": true,
			"profile_background_color": "6D5C18",
			"profile_background_image_url": "http://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_tile": true,
			"profile_image_url": "http://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_image_url_https": "https://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_banner_url": "https://pbs.twimg.com/profile_banners/25073877/1489657715",
			"profile_link_color": "0D5B73",
			"profile_sidebar_border_color": "BDDCAD",
			"profile_sidebar_fill_color": "C5CEC0",
			"profile_text_color": "333333",
			"profile_use_background_image": true,
			"has_extended_profile": false,
			"default_profile": false,
			"default_profile_image": false,
			"following": null,
			"follow_request_sent": null,
			"notifications": null,
			"translator_type": "regular"
		},
		"geo": null,
		"coordinates": null,
		"place": null,
		"contributors": null,
		"is_quote_status": false,
		"retweet_count": 24070,
		"favorite_count": 125970,
		"favorited": false,
		"retweeted": false,
		"lang": "en"
	},
	{
		"created_at": "Tue Mar 07 13:41:58 +0000 2017",
		"id": 839108868584124400,
		"id_str": "839108868584124417",
		"text": "Don't worry, getting rid of state lines, which will promote competition, will be in phase 2 &amp; 3 of healthcare rollout. @foxandfriends",
		"truncated": false,
		"entities": {
			"hashtags": [],
			"symbols": [],
			"user_mentions": [
				{
					"screen_name": "foxandfriends",
					"name": "FOX & friends",
					"id": 15513604,
					"id_str": "15513604",
					"indices": [
						123,
						137
					]
				}
			],
			"urls": []
		},
		"source": "<a href=\"http://twitter.com/download/android\" rel=\"nofollow\">Twitter for Android</a>",
		"in_reply_to_status_id": null,
		"in_reply_to_status_id_str": null,
		"in_reply_to_user_id": null,
		"in_reply_to_user_id_str": null,
		"in_reply_to_screen_name": null,
		"user": {
			"id": 25073877,
			"id_str": "25073877",
			"name": "Donald J. Trump",
			"screen_name": "realDonaldTrump",
			"location": "Washington, DC",
			"description": "45th President of the United States of America",
			"url": null,
			"entities": {
				"description": {
					"urls": []
				}
			},
			"protected": false,
			"followers_count": 27379007,
			"friends_count": 43,
			"listed_count": 67563,
			"created_at": "Wed Mar 18 13:46:38 +0000 2009",
			"favourites_count": 47,
			"utc_offset": -14400,
			"time_zone": "Eastern Time (US & Canada)",
			"geo_enabled": true,
			"verified": true,
			"statuses_count": 34705,
			"lang": "en",
			"contributors_enabled": false,
			"is_translator": false,
			"is_translation_enabled": true,
			"profile_background_color": "6D5C18",
			"profile_background_image_url": "http://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_tile": true,
			"profile_image_url": "http://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_image_url_https": "https://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_banner_url": "https://pbs.twimg.com/profile_banners/25073877/1489657715",
			"profile_link_color": "0D5B73",
			"profile_sidebar_border_color": "BDDCAD",
			"profile_sidebar_fill_color": "C5CEC0",
			"profile_text_color": "333333",
			"profile_use_background_image": true,
			"has_extended_profile": false,
			"default_profile": false,
			"default_profile_image": false,
			"following": null,
			"follow_request_sent": null,
			"notifications": null,
			"translator_type": "regular"
		},
		"geo": null,
		"coordinates": null,
		"place": null,
		"contributors": null,
		"is_quote_status": false,
		"retweet_count": 16632,
		"favorite_count": 83288,
		"favorited": false,
		"retweeted": false,
		"lang": "en"
	},
	{
		"created_at": "Tue Mar 07 13:13:20 +0000 2017",
		"id": 839101660886614000,
		"id_str": "839101660886614016",
		"text": "For eight years Russia \"ran over\" President Obama, got stronger and stronger, picked-off Crimea and added missiles. Weak! @foxandfriends",
		"truncated": false,
		"entities": {
			"hashtags": [],
			"symbols": [],
			"user_mentions": [
				{
					"screen_name": "foxandfriends",
					"name": "FOX & friends",
					"id": 15513604,
					"id_str": "15513604",
					"indices": [
						122,
						136
					]
				}
			],
			"urls": []
		},
		"source": "<a href=\"http://twitter.com/download/android\" rel=\"nofollow\">Twitter for Android</a>",
		"in_reply_to_status_id": null,
		"in_reply_to_status_id_str": null,
		"in_reply_to_user_id": null,
		"in_reply_to_user_id_str": null,
		"in_reply_to_screen_name": null,
		"user": {
			"id": 25073877,
			"id_str": "25073877",
			"name": "Donald J. Trump",
			"screen_name": "realDonaldTrump",
			"location": "Washington, DC",
			"description": "45th President of the United States of America",
			"url": null,
			"entities": {
				"description": {
					"urls": []
				}
			},
			"protected": false,
			"followers_count": 27379007,
			"friends_count": 43,
			"listed_count": 67563,
			"created_at": "Wed Mar 18 13:46:38 +0000 2009",
			"favourites_count": 47,
			"utc_offset": -14400,
			"time_zone": "Eastern Time (US & Canada)",
			"geo_enabled": true,
			"verified": true,
			"statuses_count": 34705,
			"lang": "en",
			"contributors_enabled": false,
			"is_translator": false,
			"is_translation_enabled": true,
			"profile_background_color": "6D5C18",
			"profile_background_image_url": "http://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_tile": true,
			"profile_image_url": "http://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_image_url_https": "https://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_banner_url": "https://pbs.twimg.com/profile_banners/25073877/1489657715",
			"profile_link_color": "0D5B73",
			"profile_sidebar_border_color": "BDDCAD",
			"profile_sidebar_fill_color": "C5CEC0",
			"profile_text_color": "333333",
			"profile_use_background_image": true,
			"has_extended_profile": false,
			"default_profile": false,
			"default_profile_image": false,
			"following": null,
			"follow_request_sent": null,
			"notifications": null,
			"translator_type": "regular"
		},
		"geo": null,
		"coordinates": null,
		"place": null,
		"contributors": null,
		"is_quote_status": false,
		"retweet_count": 17593,
		"favorite_count": 79943,
		"favorited": false,
		"retweeted": false,
		"lang": "en"
	},
	{
		"created_at": "Tue Mar 07 12:13:59 +0000 2017",
		"id": 839086723552411600,
		"id_str": "839086723552411648",
		"text": "Our wonderful new Healthcare Bill is now out for review and negotiation. ObamaCare is a complete and total disaster - is imploding fast!",
		"truncated": false,
		"entities": {
			"hashtags": [],
			"symbols": [],
			"user_mentions": [],
			"urls": []
		},
		"source": "<a href=\"http://twitter.com/download/android\" rel=\"nofollow\">Twitter for Android</a>",
		"in_reply_to_status_id": null,
		"in_reply_to_status_id_str": null,
		"in_reply_to_user_id": null,
		"in_reply_to_user_id_str": null,
		"in_reply_to_screen_name": null,
		"user": {
			"id": 25073877,
			"id_str": "25073877",
			"name": "Donald J. Trump",
			"screen_name": "realDonaldTrump",
			"location": "Washington, DC",
			"description": "45th President of the United States of America",
			"url": null,
			"entities": {
				"description": {
					"urls": []
				}
			},
			"protected": false,
			"followers_count": 27379007,
			"friends_count": 43,
			"listed_count": 67563,
			"created_at": "Wed Mar 18 13:46:38 +0000 2009",
			"favourites_count": 47,
			"utc_offset": -14400,
			"time_zone": "Eastern Time (US & Canada)",
			"geo_enabled": true,
			"verified": true,
			"statuses_count": 34705,
			"lang": "en",
			"contributors_enabled": false,
			"is_translator": false,
			"is_translation_enabled": true,
			"profile_background_color": "6D5C18",
			"profile_background_image_url": "http://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_tile": true,
			"profile_image_url": "http://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_image_url_https": "https://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_banner_url": "https://pbs.twimg.com/profile_banners/25073877/1489657715",
			"profile_link_color": "0D5B73",
			"profile_sidebar_border_color": "BDDCAD",
			"profile_sidebar_fill_color": "C5CEC0",
			"profile_text_color": "333333",
			"profile_use_background_image": true,
			"has_extended_profile": false,
			"default_profile": false,
			"default_profile_image": false,
			"following": null,
			"follow_request_sent": null,
			"notifications": null,
			"translator_type": "regular"
		},
		"geo": null,
		"coordinates": null,
		"place": null,
		"contributors": null,
		"is_quote_status": false,
		"retweet_count": 15296,
		"favorite_count": 82567,
		"favorited": false,
		"retweeted": false,
		"lang": "en"
	},
	{
		"created_at": "Tue Mar 07 12:04:13 +0000 2017",
		"id": 839084268991230000,
		"id_str": "839084268991229952",
		"text": "122 vicious prisoners, released by the Obama Administration from Gitmo, have returned to the battlefield. Just another terrible decision!",
		"truncated": false,
		"entities": {
			"hashtags": [],
			"symbols": [],
			"user_mentions": [],
			"urls": []
		},
		"source": "<a href=\"http://twitter.com/download/android\" rel=\"nofollow\">Twitter for Android</a>",
		"in_reply_to_status_id": null,
		"in_reply_to_status_id_str": null,
		"in_reply_to_user_id": null,
		"in_reply_to_user_id_str": null,
		"in_reply_to_screen_name": null,
		"user": {
			"id": 25073877,
			"id_str": "25073877",
			"name": "Donald J. Trump",
			"screen_name": "realDonaldTrump",
			"location": "Washington, DC",
			"description": "45th President of the United States of America",
			"url": null,
			"entities": {
				"description": {
					"urls": []
				}
			},
			"protected": false,
			"followers_count": 27379007,
			"friends_count": 43,
			"listed_count": 67563,
			"created_at": "Wed Mar 18 13:46:38 +0000 2009",
			"favourites_count": 47,
			"utc_offset": -14400,
			"time_zone": "Eastern Time (US & Canada)",
			"geo_enabled": true,
			"verified": true,
			"statuses_count": 34705,
			"lang": "en",
			"contributors_enabled": false,
			"is_translator": false,
			"is_translation_enabled": true,
			"profile_background_color": "6D5C18",
			"profile_background_image_url": "http://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_tile": true,
			"profile_image_url": "http://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_image_url_https": "https://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_banner_url": "https://pbs.twimg.com/profile_banners/25073877/1489657715",
			"profile_link_color": "0D5B73",
			"profile_sidebar_border_color": "BDDCAD",
			"profile_sidebar_fill_color": "C5CEC0",
			"profile_text_color": "333333",
			"profile_use_background_image": true,
			"has_extended_profile": false,
			"default_profile": false,
			"default_profile_image": false,
			"following": null,
			"follow_request_sent": null,
			"notifications": null,
			"translator_type": "regular"
		},
		"geo": null,
		"coordinates": null,
		"place": null,
		"contributors": null,
		"is_quote_status": false,
		"retweet_count": 23102,
		"favorite_count": 93981,
		"favorited": false,
		"retweeted": false,
		"lang": "en"
	},
	{
		"created_at": "Tue Mar 07 03:50:49 +0000 2017",
		"id": 838960097674002400,
		"id_str": "838960097674002432",
		"text": "Thank you to @exxonmobil for your $20 billion investment that is creating more than 45,000 manufacturing &amp; construction jobs in the USA!",
		"truncated": false,
		"entities": {
			"hashtags": [],
			"symbols": [],
			"user_mentions": [
				{
					"screen_name": "exxonmobil",
					"name": "ExxonMobil",
					"id": 36665547,
					"id_str": "36665547",
					"indices": [
						13,
						24
					]
				}
			],
			"urls": []
		},
		"source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
		"in_reply_to_status_id": null,
		"in_reply_to_status_id_str": null,
		"in_reply_to_user_id": null,
		"in_reply_to_user_id_str": null,
		"in_reply_to_screen_name": null,
		"user": {
			"id": 25073877,
			"id_str": "25073877",
			"name": "Donald J. Trump",
			"screen_name": "realDonaldTrump",
			"location": "Washington, DC",
			"description": "45th President of the United States of America",
			"url": null,
			"entities": {
				"description": {
					"urls": []
				}
			},
			"protected": false,
			"followers_count": 27379007,
			"friends_count": 43,
			"listed_count": 67563,
			"created_at": "Wed Mar 18 13:46:38 +0000 2009",
			"favourites_count": 47,
			"utc_offset": -14400,
			"time_zone": "Eastern Time (US & Canada)",
			"geo_enabled": true,
			"verified": true,
			"statuses_count": 34705,
			"lang": "en",
			"contributors_enabled": false,
			"is_translator": false,
			"is_translation_enabled": true,
			"profile_background_color": "6D5C18",
			"profile_background_image_url": "http://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_tile": true,
			"profile_image_url": "http://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_image_url_https": "https://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_banner_url": "https://pbs.twimg.com/profile_banners/25073877/1489657715",
			"profile_link_color": "0D5B73",
			"profile_sidebar_border_color": "BDDCAD",
			"profile_sidebar_fill_color": "C5CEC0",
			"profile_text_color": "333333",
			"profile_use_background_image": true,
			"has_extended_profile": false,
			"default_profile": false,
			"default_profile_image": false,
			"following": null,
			"follow_request_sent": null,
			"notifications": null,
			"translator_type": "regular"
		},
		"geo": null,
		"coordinates": null,
		"place": null,
		"contributors": null,
		"is_quote_status": false,
		"retweet_count": 19676,
		"favorite_count": 100769,
		"favorited": false,
		"retweeted": false,
		"lang": "en"
	},
	{
		"created_at": "Tue Mar 07 03:49:54 +0000 2017",
		"id": 838959869772329000,
		"id_str": "838959869772328960",
		"text": "Buy American &amp; hire American are the principles at the core of my agenda, which is: JOBS, JOBS, JOBS! Thank you @exxonmobil.",
		"truncated": false,
		"entities": {
			"hashtags": [],
			"symbols": [],
			"user_mentions": [
				{
					"screen_name": "exxonmobil",
					"name": "ExxonMobil",
					"id": 36665547,
					"id_str": "36665547",
					"indices": [
						116,
						127
					]
				}
			],
			"urls": []
		},
		"source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
		"in_reply_to_status_id": null,
		"in_reply_to_status_id_str": null,
		"in_reply_to_user_id": null,
		"in_reply_to_user_id_str": null,
		"in_reply_to_screen_name": null,
		"user": {
			"id": 25073877,
			"id_str": "25073877",
			"name": "Donald J. Trump",
			"screen_name": "realDonaldTrump",
			"location": "Washington, DC",
			"description": "45th President of the United States of America",
			"url": null,
			"entities": {
				"description": {
					"urls": []
				}
			},
			"protected": false,
			"followers_count": 27379007,
			"friends_count": 43,
			"listed_count": 67563,
			"created_at": "Wed Mar 18 13:46:38 +0000 2009",
			"favourites_count": 47,
			"utc_offset": -14400,
			"time_zone": "Eastern Time (US & Canada)",
			"geo_enabled": true,
			"verified": true,
			"statuses_count": 34705,
			"lang": "en",
			"contributors_enabled": false,
			"is_translator": false,
			"is_translation_enabled": true,
			"profile_background_color": "6D5C18",
			"profile_background_image_url": "http://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_tile": true,
			"profile_image_url": "http://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_image_url_https": "https://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_banner_url": "https://pbs.twimg.com/profile_banners/25073877/1489657715",
			"profile_link_color": "0D5B73",
			"profile_sidebar_border_color": "BDDCAD",
			"profile_sidebar_fill_color": "C5CEC0",
			"profile_text_color": "333333",
			"profile_use_background_image": true,
			"has_extended_profile": false,
			"default_profile": false,
			"default_profile_image": false,
			"following": null,
			"follow_request_sent": null,
			"notifications": null,
			"translator_type": "regular"
		},
		"geo": null,
		"coordinates": null,
		"place": null,
		"contributors": null,
		"is_quote_status": false,
		"retweet_count": 16426,
		"favorite_count": 88333,
		"favorited": false,
		"retweeted": false,
		"lang": "en"
	},
	{
		"created_at": "Mon Mar 06 23:49:53 +0000 2017",
		"id": 838899465390018600,
		"id_str": "838899465390018560",
		"text": "There is an incredible spirit of optimism sweeping the country right now—we're bringing back the JOBS! https://t.co/BNSLvKiEVj",
		"truncated": false,
		"entities": {
			"hashtags": [],
			"symbols": [],
			"user_mentions": [],
			"urls": [],
			"media": [
				{
					"id": 838899082093436900,
					"id_str": "838899082093436928",
					"indices": [
						103,
						126
					],
					"media_url": "http://pbs.twimg.com/ext_tw_video_thumb/838899082093436928/pu/img/W4NLJxstg9SHJiMC.jpg",
					"media_url_https": "https://pbs.twimg.com/ext_tw_video_thumb/838899082093436928/pu/img/W4NLJxstg9SHJiMC.jpg",
					"url": "https://t.co/BNSLvKiEVj",
					"display_url": "pic.twitter.com/BNSLvKiEVj",
					"expanded_url": "https://twitter.com/realDonaldTrump/status/838899465390018560/video/1",
					"type": "photo",
					"sizes": {
						"thumb": {
							"w": 150,
							"h": 150,
							"resize": "crop"
						},
						"medium": {
							"w": 600,
							"h": 338,
							"resize": "fit"
						},
						"small": {
							"w": 340,
							"h": 191,
							"resize": "fit"
						},
						"large": {
							"w": 1024,
							"h": 576,
							"resize": "fit"
						}
					}
				}
			]
		},
		"extended_entities": {
			"media": [
				{
					"id": 838899082093436900,
					"id_str": "838899082093436928",
					"indices": [
						103,
						126
					],
					"media_url": "http://pbs.twimg.com/ext_tw_video_thumb/838899082093436928/pu/img/W4NLJxstg9SHJiMC.jpg",
					"media_url_https": "https://pbs.twimg.com/ext_tw_video_thumb/838899082093436928/pu/img/W4NLJxstg9SHJiMC.jpg",
					"url": "https://t.co/BNSLvKiEVj",
					"display_url": "pic.twitter.com/BNSLvKiEVj",
					"expanded_url": "https://twitter.com/realDonaldTrump/status/838899465390018560/video/1",
					"type": "video",
					"sizes": {
						"thumb": {
							"w": 150,
							"h": 150,
							"resize": "crop"
						},
						"medium": {
							"w": 600,
							"h": 338,
							"resize": "fit"
						},
						"small": {
							"w": 340,
							"h": 191,
							"resize": "fit"
						},
						"large": {
							"w": 1024,
							"h": 576,
							"resize": "fit"
						}
					},
					"video_info": {
						"aspect_ratio": [
							16,
							9
						],
						"duration_millis": 67701,
						"variants": [
							{
								"bitrate": 2176000,
								"content_type": "video/mp4",
								"url": "https://video.twimg.com/ext_tw_video/838899082093436928/pu/vid/1280x720/w5-WFPDOPYNxSlZO.mp4"
							},
							{
								"bitrate": 320000,
								"content_type": "video/mp4",
								"url": "https://video.twimg.com/ext_tw_video/838899082093436928/pu/vid/320x180/Oq4RlylrcT8xCGHc.mp4"
							},
							{
								"content_type": "application/x-mpegURL",
								"url": "https://video.twimg.com/ext_tw_video/838899082093436928/pu/pl/xGxm6dNIprFE32qo.m3u8"
							},
							{
								"bitrate": 832000,
								"content_type": "video/mp4",
								"url": "https://video.twimg.com/ext_tw_video/838899082093436928/pu/vid/640x360/xU5HR_EaHyR6LcM3.mp4"
							}
						]
					},
					"additional_media_info": {
						"monetizable": false
					}
				}
			]
		},
		"source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
		"in_reply_to_status_id": null,
		"in_reply_to_status_id_str": null,
		"in_reply_to_user_id": null,
		"in_reply_to_user_id_str": null,
		"in_reply_to_screen_name": null,
		"user": {
			"id": 25073877,
			"id_str": "25073877",
			"name": "Donald J. Trump",
			"screen_name": "realDonaldTrump",
			"location": "Washington, DC",
			"description": "45th President of the United States of America",
			"url": null,
			"entities": {
				"description": {
					"urls": []
				}
			},
			"protected": false,
			"followers_count": 27379007,
			"friends_count": 43,
			"listed_count": 67563,
			"created_at": "Wed Mar 18 13:46:38 +0000 2009",
			"favourites_count": 47,
			"utc_offset": -14400,
			"time_zone": "Eastern Time (US & Canada)",
			"geo_enabled": true,
			"verified": true,
			"statuses_count": 34705,
			"lang": "en",
			"contributors_enabled": false,
			"is_translator": false,
			"is_translation_enabled": true,
			"profile_background_color": "6D5C18",
			"profile_background_image_url": "http://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_tile": true,
			"profile_image_url": "http://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_image_url_https": "https://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_banner_url": "https://pbs.twimg.com/profile_banners/25073877/1489657715",
			"profile_link_color": "0D5B73",
			"profile_sidebar_border_color": "BDDCAD",
			"profile_sidebar_fill_color": "C5CEC0",
			"profile_text_color": "333333",
			"profile_use_background_image": true,
			"has_extended_profile": false,
			"default_profile": false,
			"default_profile_image": false,
			"following": null,
			"follow_request_sent": null,
			"notifications": null,
			"translator_type": "regular"
		},
		"geo": null,
		"coordinates": null,
		"place": null,
		"contributors": null,
		"is_quote_status": false,
		"retweet_count": 25387,
		"favorite_count": 109929,
		"favorited": false,
		"retweeted": false,
		"possibly_sensitive": false,
		"lang": "en"
	},
	{
		"created_at": "Mon Mar 06 21:22:15 +0000 2017",
		"id": 838862312685637600,
		"id_str": "838862312685637640",
		"text": "45,000 construction &amp; manufacturing jobs in the U.S. Gulf Coast region. $20 billion investment. We are already winning again, America!",
		"truncated": false,
		"entities": {
			"hashtags": [],
			"symbols": [],
			"user_mentions": [],
			"urls": []
		},
		"source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
		"in_reply_to_status_id": null,
		"in_reply_to_status_id_str": null,
		"in_reply_to_user_id": null,
		"in_reply_to_user_id_str": null,
		"in_reply_to_screen_name": null,
		"user": {
			"id": 25073877,
			"id_str": "25073877",
			"name": "Donald J. Trump",
			"screen_name": "realDonaldTrump",
			"location": "Washington, DC",
			"description": "45th President of the United States of America",
			"url": null,
			"entities": {
				"description": {
					"urls": []
				}
			},
			"protected": false,
			"followers_count": 27379007,
			"friends_count": 43,
			"listed_count": 67563,
			"created_at": "Wed Mar 18 13:46:38 +0000 2009",
			"favourites_count": 47,
			"utc_offset": -14400,
			"time_zone": "Eastern Time (US & Canada)",
			"geo_enabled": true,
			"verified": true,
			"statuses_count": 34705,
			"lang": "en",
			"contributors_enabled": false,
			"is_translator": false,
			"is_translation_enabled": true,
			"profile_background_color": "6D5C18",
			"profile_background_image_url": "http://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_tile": true,
			"profile_image_url": "http://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_image_url_https": "https://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_banner_url": "https://pbs.twimg.com/profile_banners/25073877/1489657715",
			"profile_link_color": "0D5B73",
			"profile_sidebar_border_color": "BDDCAD",
			"profile_sidebar_fill_color": "C5CEC0",
			"profile_text_color": "333333",
			"profile_use_background_image": true,
			"has_extended_profile": false,
			"default_profile": false,
			"default_profile_image": false,
			"following": null,
			"follow_request_sent": null,
			"notifications": null,
			"translator_type": "regular"
		},
		"geo": null,
		"coordinates": null,
		"place": null,
		"contributors": null,
		"is_quote_status": false,
		"retweet_count": 25039,
		"favorite_count": 118352,
		"favorited": false,
		"retweeted": false,
		"lang": "en"
	},
	{
		"created_at": "Mon Mar 06 21:19:04 +0000 2017",
		"id": 838861512999649300,
		"id_str": "838861512999649286",
		"text": "'President Trump Congratulates Exxon Mobil for Job-Creating Investment Program'\nhttps://t.co/adBzWhtq8S",
		"truncated": false,
		"entities": {
			"hashtags": [],
			"symbols": [],
			"user_mentions": [],
			"urls": [
				{
					"url": "https://t.co/adBzWhtq8S",
					"expanded_url": "https://www.whitehouse.gov/the-press-office/2017/03/06/president-trump-congratulates-exxon-mobil-job-creating-investment",
					"display_url": "whitehouse.gov/the-press-offi…",
					"indices": [
						80,
						103
					]
				}
			]
		},
		"source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
		"in_reply_to_status_id": null,
		"in_reply_to_status_id_str": null,
		"in_reply_to_user_id": null,
		"in_reply_to_user_id_str": null,
		"in_reply_to_screen_name": null,
		"user": {
			"id": 25073877,
			"id_str": "25073877",
			"name": "Donald J. Trump",
			"screen_name": "realDonaldTrump",
			"location": "Washington, DC",
			"description": "45th President of the United States of America",
			"url": null,
			"entities": {
				"description": {
					"urls": []
				}
			},
			"protected": false,
			"followers_count": 27379007,
			"friends_count": 43,
			"listed_count": 67563,
			"created_at": "Wed Mar 18 13:46:38 +0000 2009",
			"favourites_count": 47,
			"utc_offset": -14400,
			"time_zone": "Eastern Time (US & Canada)",
			"geo_enabled": true,
			"verified": true,
			"statuses_count": 34705,
			"lang": "en",
			"contributors_enabled": false,
			"is_translator": false,
			"is_translation_enabled": true,
			"profile_background_color": "6D5C18",
			"profile_background_image_url": "http://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_tile": true,
			"profile_image_url": "http://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_image_url_https": "https://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_banner_url": "https://pbs.twimg.com/profile_banners/25073877/1489657715",
			"profile_link_color": "0D5B73",
			"profile_sidebar_border_color": "BDDCAD",
			"profile_sidebar_fill_color": "C5CEC0",
			"profile_text_color": "333333",
			"profile_use_background_image": true,
			"has_extended_profile": false,
			"default_profile": false,
			"default_profile_image": false,
			"following": null,
			"follow_request_sent": null,
			"notifications": null,
			"translator_type": "regular"
		},
		"geo": null,
		"coordinates": null,
		"place": null,
		"contributors": null,
		"is_quote_status": false,
		"retweet_count": 12993,
		"favorite_count": 71564,
		"favorited": false,
		"retweeted": false,
		"possibly_sensitive": false,
		"lang": "en"
	},
	{
		"created_at": "Sun Mar 05 17:30:11 +0000 2017",
		"id": 838441522546769900,
		"id_str": "838441522546769923",
		"text": "Thank you for the great rallies all across the country. Tremendous support. Make America Great Again!",
		"truncated": false,
		"entities": {
			"hashtags": [],
			"symbols": [],
			"user_mentions": [],
			"urls": []
		},
		"source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
		"in_reply_to_status_id": null,
		"in_reply_to_status_id_str": null,
		"in_reply_to_user_id": null,
		"in_reply_to_user_id_str": null,
		"in_reply_to_screen_name": null,
		"user": {
			"id": 25073877,
			"id_str": "25073877",
			"name": "Donald J. Trump",
			"screen_name": "realDonaldTrump",
			"location": "Washington, DC",
			"description": "45th President of the United States of America",
			"url": null,
			"entities": {
				"description": {
					"urls": []
				}
			},
			"protected": false,
			"followers_count": 27379007,
			"friends_count": 43,
			"listed_count": 67563,
			"created_at": "Wed Mar 18 13:46:38 +0000 2009",
			"favourites_count": 47,
			"utc_offset": -14400,
			"time_zone": "Eastern Time (US & Canada)",
			"geo_enabled": true,
			"verified": true,
			"statuses_count": 34705,
			"lang": "en",
			"contributors_enabled": false,
			"is_translator": false,
			"is_translation_enabled": true,
			"profile_background_color": "6D5C18",
			"profile_background_image_url": "http://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_tile": true,
			"profile_image_url": "http://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_image_url_https": "https://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_banner_url": "https://pbs.twimg.com/profile_banners/25073877/1489657715",
			"profile_link_color": "0D5B73",
			"profile_sidebar_border_color": "BDDCAD",
			"profile_sidebar_fill_color": "C5CEC0",
			"profile_text_color": "333333",
			"profile_use_background_image": true,
			"has_extended_profile": false,
			"default_profile": false,
			"default_profile_image": false,
			"following": null,
			"follow_request_sent": null,
			"notifications": null,
			"translator_type": "regular"
		},
		"geo": null,
		"coordinates": null,
		"place": null,
		"contributors": null,
		"is_quote_status": false,
		"retweet_count": 31277,
		"favorite_count": 174600,
		"favorited": false,
		"retweeted": false,
		"lang": "en"
	},
	{
		"created_at": "Sun Mar 05 11:40:20 +0000 2017",
		"id": 838353481526313000,
		"id_str": "838353481526312961",
		"text": "Who was it that secretly said to Russian President, \"Tell Vladimir that after the election I'll have more flexibility?\" @foxandfriends",
		"truncated": false,
		"entities": {
			"hashtags": [],
			"symbols": [],
			"user_mentions": [
				{
					"screen_name": "foxandfriends",
					"name": "FOX & friends",
					"id": 15513604,
					"id_str": "15513604",
					"indices": [
						120,
						134
					]
				}
			],
			"urls": []
		},
		"source": "<a href=\"http://twitter.com/download/android\" rel=\"nofollow\">Twitter for Android</a>",
		"in_reply_to_status_id": null,
		"in_reply_to_status_id_str": null,
		"in_reply_to_user_id": null,
		"in_reply_to_user_id_str": null,
		"in_reply_to_screen_name": null,
		"user": {
			"id": 25073877,
			"id_str": "25073877",
			"name": "Donald J. Trump",
			"screen_name": "realDonaldTrump",
			"location": "Washington, DC",
			"description": "45th President of the United States of America",
			"url": null,
			"entities": {
				"description": {
					"urls": []
				}
			},
			"protected": false,
			"followers_count": 27379007,
			"friends_count": 43,
			"listed_count": 67563,
			"created_at": "Wed Mar 18 13:46:38 +0000 2009",
			"favourites_count": 47,
			"utc_offset": -14400,
			"time_zone": "Eastern Time (US & Canada)",
			"geo_enabled": true,
			"verified": true,
			"statuses_count": 34705,
			"lang": "en",
			"contributors_enabled": false,
			"is_translator": false,
			"is_translation_enabled": true,
			"profile_background_color": "6D5C18",
			"profile_background_image_url": "http://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_tile": true,
			"profile_image_url": "http://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_image_url_https": "https://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_banner_url": "https://pbs.twimg.com/profile_banners/25073877/1489657715",
			"profile_link_color": "0D5B73",
			"profile_sidebar_border_color": "BDDCAD",
			"profile_sidebar_fill_color": "C5CEC0",
			"profile_text_color": "333333",
			"profile_use_background_image": true,
			"has_extended_profile": false,
			"default_profile": false,
			"default_profile_image": false,
			"following": null,
			"follow_request_sent": null,
			"notifications": null,
			"translator_type": "regular"
		},
		"geo": null,
		"coordinates": null,
		"place": null,
		"contributors": null,
		"is_quote_status": false,
		"retweet_count": 37021,
		"favorite_count": 127774,
		"favorited": false,
		"retweeted": false,
		"lang": "en"
	},
	{
		"created_at": "Sun Mar 05 11:32:22 +0000 2017",
		"id": 838351476401520600,
		"id_str": "838351476401520640",
		"text": "Is it true the DNC would not allow the FBI access to check server or other equipment after learning it was hacked? Can that be possible?",
		"truncated": false,
		"entities": {
			"hashtags": [],
			"symbols": [],
			"user_mentions": [],
			"urls": []
		},
		"source": "<a href=\"http://twitter.com/download/android\" rel=\"nofollow\">Twitter for Android</a>",
		"in_reply_to_status_id": null,
		"in_reply_to_status_id_str": null,
		"in_reply_to_user_id": null,
		"in_reply_to_user_id_str": null,
		"in_reply_to_screen_name": null,
		"user": {
			"id": 25073877,
			"id_str": "25073877",
			"name": "Donald J. Trump",
			"screen_name": "realDonaldTrump",
			"location": "Washington, DC",
			"description": "45th President of the United States of America",
			"url": null,
			"entities": {
				"description": {
					"urls": []
				}
			},
			"protected": false,
			"followers_count": 27379007,
			"friends_count": 43,
			"listed_count": 67563,
			"created_at": "Wed Mar 18 13:46:38 +0000 2009",
			"favourites_count": 47,
			"utc_offset": -14400,
			"time_zone": "Eastern Time (US & Canada)",
			"geo_enabled": true,
			"verified": true,
			"statuses_count": 34705,
			"lang": "en",
			"contributors_enabled": false,
			"is_translator": false,
			"is_translation_enabled": true,
			"profile_background_color": "6D5C18",
			"profile_background_image_url": "http://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_tile": true,
			"profile_image_url": "http://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_image_url_https": "https://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_banner_url": "https://pbs.twimg.com/profile_banners/25073877/1489657715",
			"profile_link_color": "0D5B73",
			"profile_sidebar_border_color": "BDDCAD",
			"profile_sidebar_fill_color": "C5CEC0",
			"profile_text_color": "333333",
			"profile_use_background_image": true,
			"has_extended_profile": false,
			"default_profile": false,
			"default_profile_image": false,
			"following": null,
			"follow_request_sent": null,
			"notifications": null,
			"translator_type": "regular"
		},
		"geo": null,
		"coordinates": null,
		"place": null,
		"contributors": null,
		"is_quote_status": false,
		"retweet_count": 24795,
		"favorite_count": 97677,
		"favorited": false,
		"retweeted": false,
		"lang": "en"
	},
	{
		"created_at": "Sat Mar 04 13:19:29 +0000 2017",
		"id": 838016045222854700,
		"id_str": "838016045222854656",
		"text": "Arnold Schwarzenegger isn't voluntarily leaving the Apprentice, he was fired by his bad (pathetic) ratings, not by me. Sad end to great show",
		"truncated": false,
		"entities": {
			"hashtags": [],
			"symbols": [],
			"user_mentions": [],
			"urls": []
		},
		"source": "<a href=\"http://twitter.com/download/android\" rel=\"nofollow\">Twitter for Android</a>",
		"in_reply_to_status_id": null,
		"in_reply_to_status_id_str": null,
		"in_reply_to_user_id": null,
		"in_reply_to_user_id_str": null,
		"in_reply_to_screen_name": null,
		"user": {
			"id": 25073877,
			"id_str": "25073877",
			"name": "Donald J. Trump",
			"screen_name": "realDonaldTrump",
			"location": "Washington, DC",
			"description": "45th President of the United States of America",
			"url": null,
			"entities": {
				"description": {
					"urls": []
				}
			},
			"protected": false,
			"followers_count": 27379007,
			"friends_count": 43,
			"listed_count": 67563,
			"created_at": "Wed Mar 18 13:46:38 +0000 2009",
			"favourites_count": 47,
			"utc_offset": -14400,
			"time_zone": "Eastern Time (US & Canada)",
			"geo_enabled": true,
			"verified": true,
			"statuses_count": 34705,
			"lang": "en",
			"contributors_enabled": false,
			"is_translator": false,
			"is_translation_enabled": true,
			"profile_background_color": "6D5C18",
			"profile_background_image_url": "http://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_tile": true,
			"profile_image_url": "http://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_image_url_https": "https://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_banner_url": "https://pbs.twimg.com/profile_banners/25073877/1489657715",
			"profile_link_color": "0D5B73",
			"profile_sidebar_border_color": "BDDCAD",
			"profile_sidebar_fill_color": "C5CEC0",
			"profile_text_color": "333333",
			"profile_use_background_image": true,
			"has_extended_profile": false,
			"default_profile": false,
			"default_profile_image": false,
			"following": null,
			"follow_request_sent": null,
			"notifications": null,
			"translator_type": "regular"
		},
		"geo": null,
		"coordinates": null,
		"place": null,
		"contributors": null,
		"is_quote_status": false,
		"retweet_count": 23555,
		"favorite_count": 108339,
		"favorited": false,
		"retweeted": false,
		"lang": "en"
	},
	{
		"created_at": "Sat Mar 04 12:02:48 +0000 2017",
		"id": 837996746236182500,
		"id_str": "837996746236182529",
		"text": "How low has President Obama gone to tapp my phones during the very sacred election process. This is Nixon/Watergate. Bad (or sick) guy!",
		"truncated": false,
		"entities": {
			"hashtags": [],
			"symbols": [],
			"user_mentions": [],
			"urls": []
		},
		"source": "<a href=\"http://twitter.com/download/android\" rel=\"nofollow\">Twitter for Android</a>",
		"in_reply_to_status_id": null,
		"in_reply_to_status_id_str": null,
		"in_reply_to_user_id": null,
		"in_reply_to_user_id_str": null,
		"in_reply_to_screen_name": null,
		"user": {
			"id": 25073877,
			"id_str": "25073877",
			"name": "Donald J. Trump",
			"screen_name": "realDonaldTrump",
			"location": "Washington, DC",
			"description": "45th President of the United States of America",
			"url": null,
			"entities": {
				"description": {
					"urls": []
				}
			},
			"protected": false,
			"followers_count": 27379007,
			"friends_count": 43,
			"listed_count": 67563,
			"created_at": "Wed Mar 18 13:46:38 +0000 2009",
			"favourites_count": 47,
			"utc_offset": -14400,
			"time_zone": "Eastern Time (US & Canada)",
			"geo_enabled": true,
			"verified": true,
			"statuses_count": 34705,
			"lang": "en",
			"contributors_enabled": false,
			"is_translator": false,
			"is_translation_enabled": true,
			"profile_background_color": "6D5C18",
			"profile_background_image_url": "http://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_tile": true,
			"profile_image_url": "http://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_image_url_https": "https://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_banner_url": "https://pbs.twimg.com/profile_banners/25073877/1489657715",
			"profile_link_color": "0D5B73",
			"profile_sidebar_border_color": "BDDCAD",
			"profile_sidebar_fill_color": "C5CEC0",
			"profile_text_color": "333333",
			"profile_use_background_image": true,
			"has_extended_profile": false,
			"default_profile": false,
			"default_profile_image": false,
			"following": null,
			"follow_request_sent": null,
			"notifications": null,
			"translator_type": "regular"
		},
		"geo": null,
		"coordinates": null,
		"place": null,
		"contributors": null,
		"is_quote_status": false,
		"retweet_count": 53642,
		"favorite_count": 164741,
		"favorited": false,
		"retweeted": false,
		"lang": "en"
	},
	{
		"created_at": "Sat Mar 04 11:52:54 +0000 2017",
		"id": 837994257566863400,
		"id_str": "837994257566863360",
		"text": "I'd bet a good lawyer could make a great case out of the fact that President Obama was tapping my phones in October, just prior to Election!",
		"truncated": false,
		"entities": {
			"hashtags": [],
			"symbols": [],
			"user_mentions": [],
			"urls": []
		},
		"source": "<a href=\"http://twitter.com/download/android\" rel=\"nofollow\">Twitter for Android</a>",
		"in_reply_to_status_id": null,
		"in_reply_to_status_id_str": null,
		"in_reply_to_user_id": null,
		"in_reply_to_user_id_str": null,
		"in_reply_to_screen_name": null,
		"user": {
			"id": 25073877,
			"id_str": "25073877",
			"name": "Donald J. Trump",
			"screen_name": "realDonaldTrump",
			"location": "Washington, DC",
			"description": "45th President of the United States of America",
			"url": null,
			"entities": {
				"description": {
					"urls": []
				}
			},
			"protected": false,
			"followers_count": 27379007,
			"friends_count": 43,
			"listed_count": 67563,
			"created_at": "Wed Mar 18 13:46:38 +0000 2009",
			"favourites_count": 47,
			"utc_offset": -14400,
			"time_zone": "Eastern Time (US & Canada)",
			"geo_enabled": true,
			"verified": true,
			"statuses_count": 34705,
			"lang": "en",
			"contributors_enabled": false,
			"is_translator": false,
			"is_translation_enabled": true,
			"profile_background_color": "6D5C18",
			"profile_background_image_url": "http://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_tile": true,
			"profile_image_url": "http://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_image_url_https": "https://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_banner_url": "https://pbs.twimg.com/profile_banners/25073877/1489657715",
			"profile_link_color": "0D5B73",
			"profile_sidebar_border_color": "BDDCAD",
			"profile_sidebar_fill_color": "C5CEC0",
			"profile_text_color": "333333",
			"profile_use_background_image": true,
			"has_extended_profile": false,
			"default_profile": false,
			"default_profile_image": false,
			"following": null,
			"follow_request_sent": null,
			"notifications": null,
			"translator_type": "regular"
		},
		"geo": null,
		"coordinates": null,
		"place": null,
		"contributors": null,
		"is_quote_status": false,
		"retweet_count": 37771,
		"favorite_count": 133602,
		"favorited": false,
		"retweeted": false,
		"lang": "en"
	},
	{
		"created_at": "Sat Mar 04 11:49:00 +0000 2017",
		"id": 837993273679560700,
		"id_str": "837993273679560704",
		"text": "Is it legal for a sitting President to be \"wire tapping\" a race for president prior to an election? Turned down by court earlier. A NEW LOW!",
		"truncated": false,
		"entities": {
			"hashtags": [],
			"symbols": [],
			"user_mentions": [],
			"urls": []
		},
		"source": "<a href=\"http://twitter.com/download/android\" rel=\"nofollow\">Twitter for Android</a>",
		"in_reply_to_status_id": null,
		"in_reply_to_status_id_str": null,
		"in_reply_to_user_id": null,
		"in_reply_to_user_id_str": null,
		"in_reply_to_screen_name": null,
		"user": {
			"id": 25073877,
			"id_str": "25073877",
			"name": "Donald J. Trump",
			"screen_name": "realDonaldTrump",
			"location": "Washington, DC",
			"description": "45th President of the United States of America",
			"url": null,
			"entities": {
				"description": {
					"urls": []
				}
			},
			"protected": false,
			"followers_count": 27379007,
			"friends_count": 43,
			"listed_count": 67563,
			"created_at": "Wed Mar 18 13:46:38 +0000 2009",
			"favourites_count": 47,
			"utc_offset": -14400,
			"time_zone": "Eastern Time (US & Canada)",
			"geo_enabled": true,
			"verified": true,
			"statuses_count": 34705,
			"lang": "en",
			"contributors_enabled": false,
			"is_translator": false,
			"is_translation_enabled": true,
			"profile_background_color": "6D5C18",
			"profile_background_image_url": "http://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_tile": true,
			"profile_image_url": "http://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_image_url_https": "https://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_banner_url": "https://pbs.twimg.com/profile_banners/25073877/1489657715",
			"profile_link_color": "0D5B73",
			"profile_sidebar_border_color": "BDDCAD",
			"profile_sidebar_fill_color": "C5CEC0",
			"profile_text_color": "333333",
			"profile_use_background_image": true,
			"has_extended_profile": false,
			"default_profile": false,
			"default_profile_image": false,
			"following": null,
			"follow_request_sent": null,
			"notifications": null,
			"translator_type": "regular"
		},
		"geo": null,
		"coordinates": null,
		"place": null,
		"contributors": null,
		"is_quote_status": false,
		"retweet_count": 37003,
		"favorite_count": 125344,
		"favorited": false,
		"retweeted": false,
		"lang": "en"
	},
	{
		"created_at": "Sat Mar 04 11:42:59 +0000 2017",
		"id": 837991759045079000,
		"id_str": "837991759045079040",
		"text": "Just out: The same Russian Ambassador that met Jeff Sessions visited the Obama White House 22 times, and 4 times last year alone.",
		"truncated": false,
		"entities": {
			"hashtags": [],
			"symbols": [],
			"user_mentions": [],
			"urls": []
		},
		"source": "<a href=\"http://twitter.com/download/android\" rel=\"nofollow\">Twitter for Android</a>",
		"in_reply_to_status_id": null,
		"in_reply_to_status_id_str": null,
		"in_reply_to_user_id": null,
		"in_reply_to_user_id_str": null,
		"in_reply_to_screen_name": null,
		"user": {
			"id": 25073877,
			"id_str": "25073877",
			"name": "Donald J. Trump",
			"screen_name": "realDonaldTrump",
			"location": "Washington, DC",
			"description": "45th President of the United States of America",
			"url": null,
			"entities": {
				"description": {
					"urls": []
				}
			},
			"protected": false,
			"followers_count": 27379007,
			"friends_count": 43,
			"listed_count": 67563,
			"created_at": "Wed Mar 18 13:46:38 +0000 2009",
			"favourites_count": 47,
			"utc_offset": -14400,
			"time_zone": "Eastern Time (US & Canada)",
			"geo_enabled": true,
			"verified": true,
			"statuses_count": 34705,
			"lang": "en",
			"contributors_enabled": false,
			"is_translator": false,
			"is_translation_enabled": true,
			"profile_background_color": "6D5C18",
			"profile_background_image_url": "http://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_tile": true,
			"profile_image_url": "http://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_image_url_https": "https://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_banner_url": "https://pbs.twimg.com/profile_banners/25073877/1489657715",
			"profile_link_color": "0D5B73",
			"profile_sidebar_border_color": "BDDCAD",
			"profile_sidebar_fill_color": "C5CEC0",
			"profile_text_color": "333333",
			"profile_use_background_image": true,
			"has_extended_profile": false,
			"default_profile": false,
			"default_profile_image": false,
			"following": null,
			"follow_request_sent": null,
			"notifications": null,
			"translator_type": "regular"
		},
		"geo": null,
		"coordinates": null,
		"place": null,
		"contributors": null,
		"is_quote_status": false,
		"retweet_count": 38020,
		"favorite_count": 122791,
		"favorited": false,
		"retweeted": false,
		"lang": "en"
	},
	{
		"created_at": "Sat Mar 04 11:35:20 +0000 2017",
		"id": 837989835818287100,
		"id_str": "837989835818287106",
		"text": "Terrible! Just found out that Obama had my \"wires tapped\" in Trump Tower just before the victory. Nothing found. This is McCarthyism!",
		"truncated": false,
		"entities": {
			"hashtags": [],
			"symbols": [],
			"user_mentions": [],
			"urls": []
		},
		"source": "<a href=\"http://twitter.com/download/android\" rel=\"nofollow\">Twitter for Android</a>",
		"in_reply_to_status_id": null,
		"in_reply_to_status_id_str": null,
		"in_reply_to_user_id": null,
		"in_reply_to_user_id_str": null,
		"in_reply_to_screen_name": null,
		"user": {
			"id": 25073877,
			"id_str": "25073877",
			"name": "Donald J. Trump",
			"screen_name": "realDonaldTrump",
			"location": "Washington, DC",
			"description": "45th President of the United States of America",
			"url": null,
			"entities": {
				"description": {
					"urls": []
				}
			},
			"protected": false,
			"followers_count": 27379007,
			"friends_count": 43,
			"listed_count": 67563,
			"created_at": "Wed Mar 18 13:46:38 +0000 2009",
			"favourites_count": 47,
			"utc_offset": -14400,
			"time_zone": "Eastern Time (US & Canada)",
			"geo_enabled": true,
			"verified": true,
			"statuses_count": 34705,
			"lang": "en",
			"contributors_enabled": false,
			"is_translator": false,
			"is_translation_enabled": true,
			"profile_background_color": "6D5C18",
			"profile_background_image_url": "http://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_tile": true,
			"profile_image_url": "http://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_image_url_https": "https://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_banner_url": "https://pbs.twimg.com/profile_banners/25073877/1489657715",
			"profile_link_color": "0D5B73",
			"profile_sidebar_border_color": "BDDCAD",
			"profile_sidebar_fill_color": "C5CEC0",
			"profile_text_color": "333333",
			"profile_use_background_image": true,
			"has_extended_profile": false,
			"default_profile": false,
			"default_profile_image": false,
			"following": null,
			"follow_request_sent": null,
			"notifications": null,
			"translator_type": "regular"
		},
		"geo": null,
		"coordinates": null,
		"place": null,
		"contributors": null,
		"is_quote_status": false,
		"retweet_count": 51264,
		"favorite_count": 145599,
		"favorited": false,
		"retweeted": false,
		"lang": "en"
	},
	{
		"created_at": "Sat Mar 04 11:26:47 +0000 2017",
		"id": 837987684660412400,
		"id_str": "837987684660412416",
		"text": "The first meeting Jeff Sessions had with the Russian Amb was set up by the Obama Administration under education program for 100 Ambs......",
		"truncated": false,
		"entities": {
			"hashtags": [],
			"symbols": [],
			"user_mentions": [],
			"urls": []
		},
		"source": "<a href=\"http://twitter.com/download/android\" rel=\"nofollow\">Twitter for Android</a>",
		"in_reply_to_status_id": null,
		"in_reply_to_status_id_str": null,
		"in_reply_to_user_id": null,
		"in_reply_to_user_id_str": null,
		"in_reply_to_screen_name": null,
		"user": {
			"id": 25073877,
			"id_str": "25073877",
			"name": "Donald J. Trump",
			"screen_name": "realDonaldTrump",
			"location": "Washington, DC",
			"description": "45th President of the United States of America",
			"url": null,
			"entities": {
				"description": {
					"urls": []
				}
			},
			"protected": false,
			"followers_count": 27379007,
			"friends_count": 43,
			"listed_count": 67563,
			"created_at": "Wed Mar 18 13:46:38 +0000 2009",
			"favourites_count": 47,
			"utc_offset": -14400,
			"time_zone": "Eastern Time (US & Canada)",
			"geo_enabled": true,
			"verified": true,
			"statuses_count": 34705,
			"lang": "en",
			"contributors_enabled": false,
			"is_translator": false,
			"is_translation_enabled": true,
			"profile_background_color": "6D5C18",
			"profile_background_image_url": "http://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_tile": true,
			"profile_image_url": "http://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_image_url_https": "https://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_banner_url": "https://pbs.twimg.com/profile_banners/25073877/1489657715",
			"profile_link_color": "0D5B73",
			"profile_sidebar_border_color": "BDDCAD",
			"profile_sidebar_fill_color": "C5CEC0",
			"profile_text_color": "333333",
			"profile_use_background_image": true,
			"has_extended_profile": false,
			"default_profile": false,
			"default_profile_image": false,
			"following": null,
			"follow_request_sent": null,
			"notifications": null,
			"translator_type": "regular"
		},
		"geo": null,
		"coordinates": null,
		"place": null,
		"contributors": null,
		"is_quote_status": false,
		"retweet_count": 24761,
		"favorite_count": 89338,
		"favorited": false,
		"retweeted": false,
		"lang": "en"
	},
	{
		"created_at": "Fri Mar 03 22:13:10 +0000 2017",
		"id": 837787963027144700,
		"id_str": "837787963027144706",
		"text": "MAKE AMERICA GREAT AGAIN! https://t.co/kuQiZDz4rA",
		"truncated": false,
		"entities": {
			"hashtags": [],
			"symbols": [],
			"user_mentions": [],
			"urls": [],
			"media": [
				{
					"id": 837787554174894100,
					"id_str": "837787554174894082",
					"indices": [
						26,
						49
					],
					"media_url": "http://pbs.twimg.com/ext_tw_video_thumb/837787554174894082/pu/img/BFLdGEphlRdcMOaU.jpg",
					"media_url_https": "https://pbs.twimg.com/ext_tw_video_thumb/837787554174894082/pu/img/BFLdGEphlRdcMOaU.jpg",
					"url": "https://t.co/kuQiZDz4rA",
					"display_url": "pic.twitter.com/kuQiZDz4rA",
					"expanded_url": "https://twitter.com/realDonaldTrump/status/837787963027144706/video/1",
					"type": "photo",
					"sizes": {
						"thumb": {
							"w": 150,
							"h": 150,
							"resize": "crop"
						},
						"medium": {
							"w": 600,
							"h": 338,
							"resize": "fit"
						},
						"small": {
							"w": 340,
							"h": 191,
							"resize": "fit"
						},
						"large": {
							"w": 1024,
							"h": 576,
							"resize": "fit"
						}
					}
				}
			]
		},
		"extended_entities": {
			"media": [
				{
					"id": 837787554174894100,
					"id_str": "837787554174894082",
					"indices": [
						26,
						49
					],
					"media_url": "http://pbs.twimg.com/ext_tw_video_thumb/837787554174894082/pu/img/BFLdGEphlRdcMOaU.jpg",
					"media_url_https": "https://pbs.twimg.com/ext_tw_video_thumb/837787554174894082/pu/img/BFLdGEphlRdcMOaU.jpg",
					"url": "https://t.co/kuQiZDz4rA",
					"display_url": "pic.twitter.com/kuQiZDz4rA",
					"expanded_url": "https://twitter.com/realDonaldTrump/status/837787963027144706/video/1",
					"type": "video",
					"sizes": {
						"thumb": {
							"w": 150,
							"h": 150,
							"resize": "crop"
						},
						"medium": {
							"w": 600,
							"h": 338,
							"resize": "fit"
						},
						"small": {
							"w": 340,
							"h": 191,
							"resize": "fit"
						},
						"large": {
							"w": 1024,
							"h": 576,
							"resize": "fit"
						}
					},
					"video_info": {
						"aspect_ratio": [
							16,
							9
						],
						"duration_millis": 120555,
						"variants": [
							{
								"bitrate": 2176000,
								"content_type": "video/mp4",
								"url": "https://video.twimg.com/ext_tw_video/837787554174894082/pu/vid/1280x720/tcEPPPR5BLIe7rkL.mp4"
							},
							{
								"content_type": "application/x-mpegURL",
								"url": "https://video.twimg.com/ext_tw_video/837787554174894082/pu/pl/1jp5cHvxkUx__bOx.m3u8"
							},
							{
								"bitrate": 832000,
								"content_type": "video/mp4",
								"url": "https://video.twimg.com/ext_tw_video/837787554174894082/pu/vid/640x360/bjBnKuTBhMX43Muj.mp4"
							},
							{
								"bitrate": 320000,
								"content_type": "video/mp4",
								"url": "https://video.twimg.com/ext_tw_video/837787554174894082/pu/vid/320x180/MbkrdSQCeYxWQu5U.mp4"
							}
						]
					},
					"additional_media_info": {
						"monetizable": false
					}
				}
			]
		},
		"source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
		"in_reply_to_status_id": null,
		"in_reply_to_status_id_str": null,
		"in_reply_to_user_id": null,
		"in_reply_to_user_id_str": null,
		"in_reply_to_screen_name": null,
		"user": {
			"id": 25073877,
			"id_str": "25073877",
			"name": "Donald J. Trump",
			"screen_name": "realDonaldTrump",
			"location": "Washington, DC",
			"description": "45th President of the United States of America",
			"url": null,
			"entities": {
				"description": {
					"urls": []
				}
			},
			"protected": false,
			"followers_count": 27379007,
			"friends_count": 43,
			"listed_count": 67563,
			"created_at": "Wed Mar 18 13:46:38 +0000 2009",
			"favourites_count": 47,
			"utc_offset": -14400,
			"time_zone": "Eastern Time (US & Canada)",
			"geo_enabled": true,
			"verified": true,
			"statuses_count": 34705,
			"lang": "en",
			"contributors_enabled": false,
			"is_translator": false,
			"is_translation_enabled": true,
			"profile_background_color": "6D5C18",
			"profile_background_image_url": "http://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_tile": true,
			"profile_image_url": "http://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_image_url_https": "https://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_banner_url": "https://pbs.twimg.com/profile_banners/25073877/1489657715",
			"profile_link_color": "0D5B73",
			"profile_sidebar_border_color": "BDDCAD",
			"profile_sidebar_fill_color": "C5CEC0",
			"profile_text_color": "333333",
			"profile_use_background_image": true,
			"has_extended_profile": false,
			"default_profile": false,
			"default_profile_image": false,
			"following": null,
			"follow_request_sent": null,
			"notifications": null,
			"translator_type": "regular"
		},
		"geo": null,
		"coordinates": null,
		"place": null,
		"contributors": null,
		"is_quote_status": false,
		"retweet_count": 35927,
		"favorite_count": 123923,
		"favorited": false,
		"retweeted": false,
		"possibly_sensitive": false,
		"lang": "en"
	},
	{
		"created_at": "Fri Mar 03 21:02:23 +0000 2017",
		"id": 837770149767827500,
		"id_str": "837770149767827456",
		"text": "I hereby demand a second investigation, after Schumer, of Pelosi for her close ties to Russia, and lying about it. https://t.co/qCDljfF3wN",
		"truncated": false,
		"entities": {
			"hashtags": [],
			"symbols": [],
			"user_mentions": [],
			"urls": [
				{
					"url": "https://t.co/qCDljfF3wN",
					"expanded_url": "http://www.politico.com/story/2017/03/nancy-pelosi-sergey-kislyak-meeting-235653",
					"display_url": "politico.com/story/2017/03/…",
					"indices": [
						115,
						138
					]
				}
			]
		},
		"source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
		"in_reply_to_status_id": null,
		"in_reply_to_status_id_str": null,
		"in_reply_to_user_id": null,
		"in_reply_to_user_id_str": null,
		"in_reply_to_screen_name": null,
		"user": {
			"id": 25073877,
			"id_str": "25073877",
			"name": "Donald J. Trump",
			"screen_name": "realDonaldTrump",
			"location": "Washington, DC",
			"description": "45th President of the United States of America",
			"url": null,
			"entities": {
				"description": {
					"urls": []
				}
			},
			"protected": false,
			"followers_count": 27379007,
			"friends_count": 43,
			"listed_count": 67563,
			"created_at": "Wed Mar 18 13:46:38 +0000 2009",
			"favourites_count": 47,
			"utc_offset": -14400,
			"time_zone": "Eastern Time (US & Canada)",
			"geo_enabled": true,
			"verified": true,
			"statuses_count": 34705,
			"lang": "en",
			"contributors_enabled": false,
			"is_translator": false,
			"is_translation_enabled": true,
			"profile_background_color": "6D5C18",
			"profile_background_image_url": "http://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_tile": true,
			"profile_image_url": "http://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_image_url_https": "https://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_banner_url": "https://pbs.twimg.com/profile_banners/25073877/1489657715",
			"profile_link_color": "0D5B73",
			"profile_sidebar_border_color": "BDDCAD",
			"profile_sidebar_fill_color": "C5CEC0",
			"profile_text_color": "333333",
			"profile_use_background_image": true,
			"has_extended_profile": false,
			"default_profile": false,
			"default_profile_image": false,
			"following": null,
			"follow_request_sent": null,
			"notifications": null,
			"translator_type": "regular"
		},
		"geo": null,
		"coordinates": null,
		"place": null,
		"contributors": null,
		"is_quote_status": false,
		"retweet_count": 40395,
		"favorite_count": 123549,
		"favorited": false,
		"retweeted": false,
		"possibly_sensitive": false,
		"lang": "en"
	},
	{
		"created_at": "Fri Mar 03 20:48:21 +0000 2017",
		"id": 837766616603586600,
		"id_str": "837766616603586560",
		"text": "We must fix our education system for our kids to Make America Great Again. Wonderful day at Saint Andrew in Orlando. https://t.co/OTJaHcvLzf",
		"truncated": false,
		"entities": {
			"hashtags": [],
			"symbols": [],
			"user_mentions": [],
			"urls": [],
			"media": [
				{
					"id": 837766596982603800,
					"id_str": "837766596982603776",
					"indices": [
						117,
						140
					],
					"media_url": "http://pbs.twimg.com/media/C6BYSAHWAAAuXFo.jpg",
					"media_url_https": "https://pbs.twimg.com/media/C6BYSAHWAAAuXFo.jpg",
					"url": "https://t.co/OTJaHcvLzf",
					"display_url": "pic.twitter.com/OTJaHcvLzf",
					"expanded_url": "https://twitter.com/realDonaldTrump/status/837766616603586560/photo/1",
					"type": "photo",
					"sizes": {
						"large": {
							"w": 1024,
							"h": 396,
							"resize": "fit"
						},
						"thumb": {
							"w": 150,
							"h": 150,
							"resize": "crop"
						},
						"medium": {
							"w": 1024,
							"h": 396,
							"resize": "fit"
						},
						"small": {
							"w": 680,
							"h": 263,
							"resize": "fit"
						}
					}
				}
			]
		},
		"extended_entities": {
			"media": [
				{
					"id": 837766596982603800,
					"id_str": "837766596982603776",
					"indices": [
						117,
						140
					],
					"media_url": "http://pbs.twimg.com/media/C6BYSAHWAAAuXFo.jpg",
					"media_url_https": "https://pbs.twimg.com/media/C6BYSAHWAAAuXFo.jpg",
					"url": "https://t.co/OTJaHcvLzf",
					"display_url": "pic.twitter.com/OTJaHcvLzf",
					"expanded_url": "https://twitter.com/realDonaldTrump/status/837766616603586560/photo/1",
					"type": "photo",
					"sizes": {
						"large": {
							"w": 1024,
							"h": 396,
							"resize": "fit"
						},
						"thumb": {
							"w": 150,
							"h": 150,
							"resize": "crop"
						},
						"medium": {
							"w": 1024,
							"h": 396,
							"resize": "fit"
						},
						"small": {
							"w": 680,
							"h": 263,
							"resize": "fit"
						}
					}
				}
			]
		},
		"source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
		"in_reply_to_status_id": null,
		"in_reply_to_status_id_str": null,
		"in_reply_to_user_id": null,
		"in_reply_to_user_id_str": null,
		"in_reply_to_screen_name": null,
		"user": {
			"id": 25073877,
			"id_str": "25073877",
			"name": "Donald J. Trump",
			"screen_name": "realDonaldTrump",
			"location": "Washington, DC",
			"description": "45th President of the United States of America",
			"url": null,
			"entities": {
				"description": {
					"urls": []
				}
			},
			"protected": false,
			"followers_count": 27379007,
			"friends_count": 43,
			"listed_count": 67563,
			"created_at": "Wed Mar 18 13:46:38 +0000 2009",
			"favourites_count": 47,
			"utc_offset": -14400,
			"time_zone": "Eastern Time (US & Canada)",
			"geo_enabled": true,
			"verified": true,
			"statuses_count": 34705,
			"lang": "en",
			"contributors_enabled": false,
			"is_translator": false,
			"is_translation_enabled": true,
			"profile_background_color": "6D5C18",
			"profile_background_image_url": "http://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_tile": true,
			"profile_image_url": "http://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_image_url_https": "https://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_banner_url": "https://pbs.twimg.com/profile_banners/25073877/1489657715",
			"profile_link_color": "0D5B73",
			"profile_sidebar_border_color": "BDDCAD",
			"profile_sidebar_fill_color": "C5CEC0",
			"profile_text_color": "333333",
			"profile_use_background_image": true,
			"has_extended_profile": false,
			"default_profile": false,
			"default_profile_image": false,
			"following": null,
			"follow_request_sent": null,
			"notifications": null,
			"translator_type": "regular"
		},
		"geo": null,
		"coordinates": null,
		"place": null,
		"contributors": null,
		"is_quote_status": false,
		"retweet_count": 16724,
		"favorite_count": 84214,
		"favorited": false,
		"retweeted": false,
		"possibly_sensitive": false,
		"lang": "en"
	},
	{
		"created_at": "Fri Mar 03 17:54:30 +0000 2017",
		"id": 837722869106880500,
		"id_str": "837722869106880517",
		"text": "We should start an immediate investigation into @SenSchumer and his ties to Russia and Putin. A total hypocrite! https://t.co/Ik3yqjHzsA",
		"truncated": false,
		"entities": {
			"hashtags": [],
			"symbols": [],
			"user_mentions": [
				{
					"screen_name": "SenSchumer",
					"name": "Chuck Schumer",
					"id": 17494010,
					"id_str": "17494010",
					"indices": [
						48,
						59
					]
				}
			],
			"urls": [],
			"media": [
				{
					"id": 837722805827436500,
					"id_str": "837722805827436545",
					"indices": [
						113,
						136
					],
					"media_url": "http://pbs.twimg.com/media/C6AwdBWWgAE07ce.jpg",
					"media_url_https": "https://pbs.twimg.com/media/C6AwdBWWgAE07ce.jpg",
					"url": "https://t.co/Ik3yqjHzsA",
					"display_url": "pic.twitter.com/Ik3yqjHzsA",
					"expanded_url": "https://twitter.com/realDonaldTrump/status/837722869106880517/photo/1",
					"type": "photo",
					"sizes": {
						"large": {
							"w": 442,
							"h": 359,
							"resize": "fit"
						},
						"thumb": {
							"w": 150,
							"h": 150,
							"resize": "crop"
						},
						"medium": {
							"w": 442,
							"h": 359,
							"resize": "fit"
						},
						"small": {
							"w": 442,
							"h": 359,
							"resize": "fit"
						}
					}
				}
			]
		},
		"extended_entities": {
			"media": [
				{
					"id": 837722805827436500,
					"id_str": "837722805827436545",
					"indices": [
						113,
						136
					],
					"media_url": "http://pbs.twimg.com/media/C6AwdBWWgAE07ce.jpg",
					"media_url_https": "https://pbs.twimg.com/media/C6AwdBWWgAE07ce.jpg",
					"url": "https://t.co/Ik3yqjHzsA",
					"display_url": "pic.twitter.com/Ik3yqjHzsA",
					"expanded_url": "https://twitter.com/realDonaldTrump/status/837722869106880517/photo/1",
					"type": "photo",
					"sizes": {
						"large": {
							"w": 442,
							"h": 359,
							"resize": "fit"
						},
						"thumb": {
							"w": 150,
							"h": 150,
							"resize": "crop"
						},
						"medium": {
							"w": 442,
							"h": 359,
							"resize": "fit"
						},
						"small": {
							"w": 442,
							"h": 359,
							"resize": "fit"
						}
					}
				}
			]
		},
		"source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
		"in_reply_to_status_id": null,
		"in_reply_to_status_id_str": null,
		"in_reply_to_user_id": null,
		"in_reply_to_user_id_str": null,
		"in_reply_to_screen_name": null,
		"user": {
			"id": 25073877,
			"id_str": "25073877",
			"name": "Donald J. Trump",
			"screen_name": "realDonaldTrump",
			"location": "Washington, DC",
			"description": "45th President of the United States of America",
			"url": null,
			"entities": {
				"description": {
					"urls": []
				}
			},
			"protected": false,
			"followers_count": 27379007,
			"friends_count": 43,
			"listed_count": 67563,
			"created_at": "Wed Mar 18 13:46:38 +0000 2009",
			"favourites_count": 47,
			"utc_offset": -14400,
			"time_zone": "Eastern Time (US & Canada)",
			"geo_enabled": true,
			"verified": true,
			"statuses_count": 34705,
			"lang": "en",
			"contributors_enabled": false,
			"is_translator": false,
			"is_translation_enabled": true,
			"profile_background_color": "6D5C18",
			"profile_background_image_url": "http://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_tile": true,
			"profile_image_url": "http://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_image_url_https": "https://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_banner_url": "https://pbs.twimg.com/profile_banners/25073877/1489657715",
			"profile_link_color": "0D5B73",
			"profile_sidebar_border_color": "BDDCAD",
			"profile_sidebar_fill_color": "C5CEC0",
			"profile_text_color": "333333",
			"profile_use_background_image": true,
			"has_extended_profile": false,
			"default_profile": false,
			"default_profile_image": false,
			"following": null,
			"follow_request_sent": null,
			"notifications": null,
			"translator_type": "regular"
		},
		"geo": null,
		"coordinates": null,
		"place": null,
		"contributors": null,
		"is_quote_status": false,
		"retweet_count": 54951,
		"favorite_count": 152071,
		"favorited": false,
		"retweeted": false,
		"possibly_sensitive": false,
		"lang": "en"
	},
	{
		"created_at": "Fri Mar 03 16:41:55 +0000 2017",
		"id": 837704599704375300,
		"id_str": "837704599704375296",
		"text": "Weekly Address\nJoin me here: https://t.co/SEavQK5zy5 https://t.co/EnyXYeqgcp",
		"truncated": false,
		"entities": {
			"hashtags": [],
			"symbols": [],
			"user_mentions": [],
			"urls": [
				{
					"url": "https://t.co/SEavQK5zy5",
					"expanded_url": "http://45.wh.gov/zPTKbq",
					"display_url": "45.wh.gov/zPTKbq",
					"indices": [
						29,
						52
					]
				}
			],
			"media": [
				{
					"id": 837704543710257200,
					"id_str": "837704543710257152",
					"indices": [
						53,
						76
					],
					"media_url": "http://pbs.twimg.com/media/C6Af2BqUoAAI8Si.jpg",
					"media_url_https": "https://pbs.twimg.com/media/C6Af2BqUoAAI8Si.jpg",
					"url": "https://t.co/EnyXYeqgcp",
					"display_url": "pic.twitter.com/EnyXYeqgcp",
					"expanded_url": "https://twitter.com/realDonaldTrump/status/837704599704375296/photo/1",
					"type": "photo",
					"sizes": {
						"thumb": {
							"w": 150,
							"h": 150,
							"resize": "crop"
						},
						"small": {
							"w": 553,
							"h": 680,
							"resize": "fit"
						},
						"large": {
							"w": 832,
							"h": 1024,
							"resize": "fit"
						},
						"medium": {
							"w": 832,
							"h": 1024,
							"resize": "fit"
						}
					}
				}
			]
		},
		"extended_entities": {
			"media": [
				{
					"id": 837704543710257200,
					"id_str": "837704543710257152",
					"indices": [
						53,
						76
					],
					"media_url": "http://pbs.twimg.com/media/C6Af2BqUoAAI8Si.jpg",
					"media_url_https": "https://pbs.twimg.com/media/C6Af2BqUoAAI8Si.jpg",
					"url": "https://t.co/EnyXYeqgcp",
					"display_url": "pic.twitter.com/EnyXYeqgcp",
					"expanded_url": "https://twitter.com/realDonaldTrump/status/837704599704375296/photo/1",
					"type": "photo",
					"sizes": {
						"thumb": {
							"w": 150,
							"h": 150,
							"resize": "crop"
						},
						"small": {
							"w": 553,
							"h": 680,
							"resize": "fit"
						},
						"large": {
							"w": 832,
							"h": 1024,
							"resize": "fit"
						},
						"medium": {
							"w": 832,
							"h": 1024,
							"resize": "fit"
						}
					}
				}
			]
		},
		"source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
		"in_reply_to_status_id": null,
		"in_reply_to_status_id_str": null,
		"in_reply_to_user_id": null,
		"in_reply_to_user_id_str": null,
		"in_reply_to_screen_name": null,
		"user": {
			"id": 25073877,
			"id_str": "25073877",
			"name": "Donald J. Trump",
			"screen_name": "realDonaldTrump",
			"location": "Washington, DC",
			"description": "45th President of the United States of America",
			"url": null,
			"entities": {
				"description": {
					"urls": []
				}
			},
			"protected": false,
			"followers_count": 27379007,
			"friends_count": 43,
			"listed_count": 67563,
			"created_at": "Wed Mar 18 13:46:38 +0000 2009",
			"favourites_count": 47,
			"utc_offset": -14400,
			"time_zone": "Eastern Time (US & Canada)",
			"geo_enabled": true,
			"verified": true,
			"statuses_count": 34705,
			"lang": "en",
			"contributors_enabled": false,
			"is_translator": false,
			"is_translation_enabled": true,
			"profile_background_color": "6D5C18",
			"profile_background_image_url": "http://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_tile": true,
			"profile_image_url": "http://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_image_url_https": "https://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_banner_url": "https://pbs.twimg.com/profile_banners/25073877/1489657715",
			"profile_link_color": "0D5B73",
			"profile_sidebar_border_color": "BDDCAD",
			"profile_sidebar_fill_color": "C5CEC0",
			"profile_text_color": "333333",
			"profile_use_background_image": true,
			"has_extended_profile": false,
			"default_profile": false,
			"default_profile_image": false,
			"following": null,
			"follow_request_sent": null,
			"notifications": null,
			"translator_type": "regular"
		},
		"geo": null,
		"coordinates": null,
		"place": null,
		"contributors": null,
		"is_quote_status": false,
		"retweet_count": 10325,
		"favorite_count": 54740,
		"favorited": false,
		"retweeted": false,
		"possibly_sensitive": false,
		"lang": "en"
	},
	{
		"created_at": "Fri Mar 03 12:19:12 +0000 2017",
		"id": 837638488656920600,
		"id_str": "837638488656920576",
		"text": "It is so pathetic that the Dems have still not approved my full Cabinet.",
		"truncated": false,
		"entities": {
			"hashtags": [],
			"symbols": [],
			"user_mentions": [],
			"urls": []
		},
		"source": "<a href=\"http://twitter.com/download/android\" rel=\"nofollow\">Twitter for Android</a>",
		"in_reply_to_status_id": null,
		"in_reply_to_status_id_str": null,
		"in_reply_to_user_id": null,
		"in_reply_to_user_id_str": null,
		"in_reply_to_screen_name": null,
		"user": {
			"id": 25073877,
			"id_str": "25073877",
			"name": "Donald J. Trump",
			"screen_name": "realDonaldTrump",
			"location": "Washington, DC",
			"description": "45th President of the United States of America",
			"url": null,
			"entities": {
				"description": {
					"urls": []
				}
			},
			"protected": false,
			"followers_count": 27379007,
			"friends_count": 43,
			"listed_count": 67563,
			"created_at": "Wed Mar 18 13:46:38 +0000 2009",
			"favourites_count": 47,
			"utc_offset": -14400,
			"time_zone": "Eastern Time (US & Canada)",
			"geo_enabled": true,
			"verified": true,
			"statuses_count": 34705,
			"lang": "en",
			"contributors_enabled": false,
			"is_translator": false,
			"is_translation_enabled": true,
			"profile_background_color": "6D5C18",
			"profile_background_image_url": "http://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_tile": true,
			"profile_image_url": "http://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_image_url_https": "https://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_banner_url": "https://pbs.twimg.com/profile_banners/25073877/1489657715",
			"profile_link_color": "0D5B73",
			"profile_sidebar_border_color": "BDDCAD",
			"profile_sidebar_fill_color": "C5CEC0",
			"profile_text_color": "333333",
			"profile_use_background_image": true,
			"has_extended_profile": false,
			"default_profile": false,
			"default_profile_image": false,
			"following": null,
			"follow_request_sent": null,
			"notifications": null,
			"translator_type": "regular"
		},
		"geo": null,
		"coordinates": null,
		"place": null,
		"contributors": null,
		"is_quote_status": false,
		"retweet_count": 28239,
		"favorite_count": 138672,
		"favorited": false,
		"retweeted": false,
		"lang": "en"
	},
	{
		"created_at": "Fri Mar 03 12:00:39 +0000 2017",
		"id": 837633820417482800,
		"id_str": "837633820417482754",
		"text": "Nick Adams new book, Green Card Warrior, is a must read. The merit-based system is the way to go. Canada, Australia! @foxandfriends",
		"truncated": false,
		"entities": {
			"hashtags": [],
			"symbols": [],
			"user_mentions": [
				{
					"screen_name": "foxandfriends",
					"name": "FOX & friends",
					"id": 15513604,
					"id_str": "15513604",
					"indices": [
						117,
						131
					]
				}
			],
			"urls": []
		},
		"source": "<a href=\"http://twitter.com/download/android\" rel=\"nofollow\">Twitter for Android</a>",
		"in_reply_to_status_id": null,
		"in_reply_to_status_id_str": null,
		"in_reply_to_user_id": null,
		"in_reply_to_user_id_str": null,
		"in_reply_to_screen_name": null,
		"user": {
			"id": 25073877,
			"id_str": "25073877",
			"name": "Donald J. Trump",
			"screen_name": "realDonaldTrump",
			"location": "Washington, DC",
			"description": "45th President of the United States of America",
			"url": null,
			"entities": {
				"description": {
					"urls": []
				}
			},
			"protected": false,
			"followers_count": 27379007,
			"friends_count": 43,
			"listed_count": 67563,
			"created_at": "Wed Mar 18 13:46:38 +0000 2009",
			"favourites_count": 47,
			"utc_offset": -14400,
			"time_zone": "Eastern Time (US & Canada)",
			"geo_enabled": true,
			"verified": true,
			"statuses_count": 34705,
			"lang": "en",
			"contributors_enabled": false,
			"is_translator": false,
			"is_translation_enabled": true,
			"profile_background_color": "6D5C18",
			"profile_background_image_url": "http://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_tile": true,
			"profile_image_url": "http://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_image_url_https": "https://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_banner_url": "https://pbs.twimg.com/profile_banners/25073877/1489657715",
			"profile_link_color": "0D5B73",
			"profile_sidebar_border_color": "BDDCAD",
			"profile_sidebar_fill_color": "C5CEC0",
			"profile_text_color": "333333",
			"profile_use_background_image": true,
			"has_extended_profile": false,
			"default_profile": false,
			"default_profile_image": false,
			"following": null,
			"follow_request_sent": null,
			"notifications": null,
			"translator_type": "regular"
		},
		"geo": null,
		"coordinates": null,
		"place": null,
		"contributors": null,
		"is_quote_status": false,
		"retweet_count": 14001,
		"favorite_count": 67521,
		"favorited": false,
		"retweeted": false,
		"lang": "en"
	},
	{
		"created_at": "Fri Mar 03 02:38:48 +0000 2017",
		"id": 837492425283219500,
		"id_str": "837492425283219458",
		"text": "...is all of the illegal leaks of classified and other information. It is a total \"witch hunt!\"",
		"truncated": false,
		"entities": {
			"hashtags": [],
			"symbols": [],
			"user_mentions": [],
			"urls": []
		},
		"source": "<a href=\"http://twitter.com/download/android\" rel=\"nofollow\">Twitter for Android</a>",
		"in_reply_to_status_id": null,
		"in_reply_to_status_id_str": null,
		"in_reply_to_user_id": null,
		"in_reply_to_user_id_str": null,
		"in_reply_to_screen_name": null,
		"user": {
			"id": 25073877,
			"id_str": "25073877",
			"name": "Donald J. Trump",
			"screen_name": "realDonaldTrump",
			"location": "Washington, DC",
			"description": "45th President of the United States of America",
			"url": null,
			"entities": {
				"description": {
					"urls": []
				}
			},
			"protected": false,
			"followers_count": 27379007,
			"friends_count": 43,
			"listed_count": 67563,
			"created_at": "Wed Mar 18 13:46:38 +0000 2009",
			"favourites_count": 47,
			"utc_offset": -14400,
			"time_zone": "Eastern Time (US & Canada)",
			"geo_enabled": true,
			"verified": true,
			"statuses_count": 34705,
			"lang": "en",
			"contributors_enabled": false,
			"is_translator": false,
			"is_translation_enabled": true,
			"profile_background_color": "6D5C18",
			"profile_background_image_url": "http://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_tile": true,
			"profile_image_url": "http://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_image_url_https": "https://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_banner_url": "https://pbs.twimg.com/profile_banners/25073877/1489657715",
			"profile_link_color": "0D5B73",
			"profile_sidebar_border_color": "BDDCAD",
			"profile_sidebar_fill_color": "C5CEC0",
			"profile_text_color": "333333",
			"profile_use_background_image": true,
			"has_extended_profile": false,
			"default_profile": false,
			"default_profile_image": false,
			"following": null,
			"follow_request_sent": null,
			"notifications": null,
			"translator_type": "regular"
		},
		"geo": null,
		"coordinates": null,
		"place": null,
		"contributors": null,
		"is_quote_status": false,
		"retweet_count": 18348,
		"favorite_count": 94506,
		"favorited": false,
		"retweeted": false,
		"lang": "en"
	},
	{
		"created_at": "Fri Mar 03 02:35:33 +0000 2017",
		"id": 837491607171629000,
		"id_str": "837491607171629057",
		"text": "...to win. The Democrats are overplaying their hand. They lost the election, and now they have lost their grip on reality. The real story...",
		"truncated": false,
		"entities": {
			"hashtags": [],
			"symbols": [],
			"user_mentions": [],
			"urls": []
		},
		"source": "<a href=\"http://twitter.com/download/android\" rel=\"nofollow\">Twitter for Android</a>",
		"in_reply_to_status_id": null,
		"in_reply_to_status_id_str": null,
		"in_reply_to_user_id": null,
		"in_reply_to_user_id_str": null,
		"in_reply_to_screen_name": null,
		"user": {
			"id": 25073877,
			"id_str": "25073877",
			"name": "Donald J. Trump",
			"screen_name": "realDonaldTrump",
			"location": "Washington, DC",
			"description": "45th President of the United States of America",
			"url": null,
			"entities": {
				"description": {
					"urls": []
				}
			},
			"protected": false,
			"followers_count": 27379007,
			"friends_count": 43,
			"listed_count": 67563,
			"created_at": "Wed Mar 18 13:46:38 +0000 2009",
			"favourites_count": 47,
			"utc_offset": -14400,
			"time_zone": "Eastern Time (US & Canada)",
			"geo_enabled": true,
			"verified": true,
			"statuses_count": 34705,
			"lang": "en",
			"contributors_enabled": false,
			"is_translator": false,
			"is_translation_enabled": true,
			"profile_background_color": "6D5C18",
			"profile_background_image_url": "http://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_tile": true,
			"profile_image_url": "http://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_image_url_https": "https://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_banner_url": "https://pbs.twimg.com/profile_banners/25073877/1489657715",
			"profile_link_color": "0D5B73",
			"profile_sidebar_border_color": "BDDCAD",
			"profile_sidebar_fill_color": "C5CEC0",
			"profile_text_color": "333333",
			"profile_use_background_image": true,
			"has_extended_profile": false,
			"default_profile": false,
			"default_profile_image": false,
			"following": null,
			"follow_request_sent": null,
			"notifications": null,
			"translator_type": "regular"
		},
		"geo": null,
		"coordinates": null,
		"place": null,
		"contributors": null,
		"is_quote_status": false,
		"retweet_count": 23560,
		"favorite_count": 111401,
		"favorited": false,
		"retweeted": false,
		"lang": "en"
	},
	{
		"created_at": "Fri Mar 03 02:27:29 +0000 2017",
		"id": 837489578193846300,
		"id_str": "837489578193846278",
		"text": "...intentional. This whole narrative is a way of saving face for Democrats losing an election that everyone thought they were supposed.....",
		"truncated": false,
		"entities": {
			"hashtags": [],
			"symbols": [],
			"user_mentions": [],
			"urls": []
		},
		"source": "<a href=\"http://twitter.com/download/android\" rel=\"nofollow\">Twitter for Android</a>",
		"in_reply_to_status_id": null,
		"in_reply_to_status_id_str": null,
		"in_reply_to_user_id": null,
		"in_reply_to_user_id_str": null,
		"in_reply_to_screen_name": null,
		"user": {
			"id": 25073877,
			"id_str": "25073877",
			"name": "Donald J. Trump",
			"screen_name": "realDonaldTrump",
			"location": "Washington, DC",
			"description": "45th President of the United States of America",
			"url": null,
			"entities": {
				"description": {
					"urls": []
				}
			},
			"protected": false,
			"followers_count": 27379007,
			"friends_count": 43,
			"listed_count": 67563,
			"created_at": "Wed Mar 18 13:46:38 +0000 2009",
			"favourites_count": 47,
			"utc_offset": -14400,
			"time_zone": "Eastern Time (US & Canada)",
			"geo_enabled": true,
			"verified": true,
			"statuses_count": 34705,
			"lang": "en",
			"contributors_enabled": false,
			"is_translator": false,
			"is_translation_enabled": true,
			"profile_background_color": "6D5C18",
			"profile_background_image_url": "http://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_tile": true,
			"profile_image_url": "http://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_image_url_https": "https://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_banner_url": "https://pbs.twimg.com/profile_banners/25073877/1489657715",
			"profile_link_color": "0D5B73",
			"profile_sidebar_border_color": "BDDCAD",
			"profile_sidebar_fill_color": "C5CEC0",
			"profile_text_color": "333333",
			"profile_use_background_image": true,
			"has_extended_profile": false,
			"default_profile": false,
			"default_profile_image": false,
			"following": null,
			"follow_request_sent": null,
			"notifications": null,
			"translator_type": "regular"
		},
		"geo": null,
		"coordinates": null,
		"place": null,
		"contributors": null,
		"is_quote_status": false,
		"retweet_count": 17727,
		"favorite_count": 91593,
		"favorited": false,
		"retweeted": false,
		"lang": "en"
	},
	{
		"created_at": "Fri Mar 03 02:22:49 +0000 2017",
		"id": 837488402438176800,
		"id_str": "837488402438176769",
		"text": "Jeff Sessions is an honest man. He did not say anything wrong. He could have stated his response more accurately, but it was clearly not....",
		"truncated": false,
		"entities": {
			"hashtags": [],
			"symbols": [],
			"user_mentions": [],
			"urls": []
		},
		"source": "<a href=\"http://twitter.com/download/android\" rel=\"nofollow\">Twitter for Android</a>",
		"in_reply_to_status_id": null,
		"in_reply_to_status_id_str": null,
		"in_reply_to_user_id": null,
		"in_reply_to_user_id_str": null,
		"in_reply_to_screen_name": null,
		"user": {
			"id": 25073877,
			"id_str": "25073877",
			"name": "Donald J. Trump",
			"screen_name": "realDonaldTrump",
			"location": "Washington, DC",
			"description": "45th President of the United States of America",
			"url": null,
			"entities": {
				"description": {
					"urls": []
				}
			},
			"protected": false,
			"followers_count": 27379007,
			"friends_count": 43,
			"listed_count": 67563,
			"created_at": "Wed Mar 18 13:46:38 +0000 2009",
			"favourites_count": 47,
			"utc_offset": -14400,
			"time_zone": "Eastern Time (US & Canada)",
			"geo_enabled": true,
			"verified": true,
			"statuses_count": 34705,
			"lang": "en",
			"contributors_enabled": false,
			"is_translator": false,
			"is_translation_enabled": true,
			"profile_background_color": "6D5C18",
			"profile_background_image_url": "http://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_tile": true,
			"profile_image_url": "http://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_image_url_https": "https://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_banner_url": "https://pbs.twimg.com/profile_banners/25073877/1489657715",
			"profile_link_color": "0D5B73",
			"profile_sidebar_border_color": "BDDCAD",
			"profile_sidebar_fill_color": "C5CEC0",
			"profile_text_color": "333333",
			"profile_use_background_image": true,
			"has_extended_profile": false,
			"default_profile": false,
			"default_profile_image": false,
			"following": null,
			"follow_request_sent": null,
			"notifications": null,
			"translator_type": "regular"
		},
		"geo": null,
		"coordinates": null,
		"place": null,
		"contributors": null,
		"is_quote_status": false,
		"retweet_count": 20065,
		"favorite_count": 103744,
		"favorited": false,
		"retweeted": false,
		"lang": "en"
	},
	{
		"created_at": "Thu Mar 02 11:00:41 +0000 2017",
		"id": 837256338203881500,
		"id_str": "837256338203881472",
		"text": "Since November 8th, Election Day, the Stock Market has posted $3.2 trillion in GAINS and consumer confidence is at a 15 year high. Jobs!",
		"truncated": false,
		"entities": {
			"hashtags": [],
			"symbols": [],
			"user_mentions": [],
			"urls": []
		},
		"source": "<a href=\"http://twitter.com/download/android\" rel=\"nofollow\">Twitter for Android</a>",
		"in_reply_to_status_id": null,
		"in_reply_to_status_id_str": null,
		"in_reply_to_user_id": null,
		"in_reply_to_user_id_str": null,
		"in_reply_to_screen_name": null,
		"user": {
			"id": 25073877,
			"id_str": "25073877",
			"name": "Donald J. Trump",
			"screen_name": "realDonaldTrump",
			"location": "Washington, DC",
			"description": "45th President of the United States of America",
			"url": null,
			"entities": {
				"description": {
					"urls": []
				}
			},
			"protected": false,
			"followers_count": 27379007,
			"friends_count": 43,
			"listed_count": 67563,
			"created_at": "Wed Mar 18 13:46:38 +0000 2009",
			"favourites_count": 47,
			"utc_offset": -14400,
			"time_zone": "Eastern Time (US & Canada)",
			"geo_enabled": true,
			"verified": true,
			"statuses_count": 34705,
			"lang": "en",
			"contributors_enabled": false,
			"is_translator": false,
			"is_translation_enabled": true,
			"profile_background_color": "6D5C18",
			"profile_background_image_url": "http://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_tile": true,
			"profile_image_url": "http://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_image_url_https": "https://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_banner_url": "https://pbs.twimg.com/profile_banners/25073877/1489657715",
			"profile_link_color": "0D5B73",
			"profile_sidebar_border_color": "BDDCAD",
			"profile_sidebar_fill_color": "C5CEC0",
			"profile_text_color": "333333",
			"profile_use_background_image": true,
			"has_extended_profile": false,
			"default_profile": false,
			"default_profile_image": false,
			"following": null,
			"follow_request_sent": null,
			"notifications": null,
			"translator_type": "regular"
		},
		"geo": null,
		"coordinates": null,
		"place": null,
		"contributors": null,
		"is_quote_status": false,
		"retweet_count": 37702,
		"favorite_count": 177758,
		"favorited": false,
		"retweeted": false,
		"lang": "en"
	},
	{
		"created_at": "Wed Mar 01 13:38:44 +0000 2017",
		"id": 836933725602656300,
		"id_str": "836933725602656256",
		"text": "THANK YOU!",
		"truncated": false,
		"entities": {
			"hashtags": [],
			"symbols": [],
			"user_mentions": [],
			"urls": []
		},
		"source": "<a href=\"http://twitter.com/download/android\" rel=\"nofollow\">Twitter for Android</a>",
		"in_reply_to_status_id": null,
		"in_reply_to_status_id_str": null,
		"in_reply_to_user_id": null,
		"in_reply_to_user_id_str": null,
		"in_reply_to_screen_name": null,
		"user": {
			"id": 25073877,
			"id_str": "25073877",
			"name": "Donald J. Trump",
			"screen_name": "realDonaldTrump",
			"location": "Washington, DC",
			"description": "45th President of the United States of America",
			"url": null,
			"entities": {
				"description": {
					"urls": []
				}
			},
			"protected": false,
			"followers_count": 27379007,
			"friends_count": 43,
			"listed_count": 67563,
			"created_at": "Wed Mar 18 13:46:38 +0000 2009",
			"favourites_count": 47,
			"utc_offset": -14400,
			"time_zone": "Eastern Time (US & Canada)",
			"geo_enabled": true,
			"verified": true,
			"statuses_count": 34705,
			"lang": "en",
			"contributors_enabled": false,
			"is_translator": false,
			"is_translation_enabled": true,
			"profile_background_color": "6D5C18",
			"profile_background_image_url": "http://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_tile": true,
			"profile_image_url": "http://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_image_url_https": "https://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_banner_url": "https://pbs.twimg.com/profile_banners/25073877/1489657715",
			"profile_link_color": "0D5B73",
			"profile_sidebar_border_color": "BDDCAD",
			"profile_sidebar_fill_color": "C5CEC0",
			"profile_text_color": "333333",
			"profile_use_background_image": true,
			"has_extended_profile": false,
			"default_profile": false,
			"default_profile_image": false,
			"following": null,
			"follow_request_sent": null,
			"notifications": null,
			"translator_type": "regular"
		},
		"geo": null,
		"coordinates": null,
		"place": null,
		"contributors": null,
		"is_quote_status": false,
		"retweet_count": 27845,
		"favorite_count": 186577,
		"favorited": false,
		"retweeted": false,
		"lang": "en"
	},
	{
		"created_at": "Wed Mar 01 01:42:16 +0000 2017",
		"id": 836753422271582200,
		"id_str": "836753422271582208",
		"text": "#JointSession #MAGA🇺🇸\nhttps://t.co/RDO6Jt2pip",
		"truncated": false,
		"entities": {
			"hashtags": [
				{
					"text": "JointSession",
					"indices": [
						0,
						13
					]
				},
				{
					"text": "MAGA",
					"indices": [
						14,
						19
					]
				}
			],
			"symbols": [],
			"user_mentions": [],
			"urls": [
				{
					"url": "https://t.co/RDO6Jt2pip",
					"expanded_url": "https://twitter.com/i/live/829062103558352897",
					"display_url": "twitter.com/i/live/8290621…",
					"indices": [
						22,
						45
					]
				}
			]
		},
		"source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
		"in_reply_to_status_id": null,
		"in_reply_to_status_id_str": null,
		"in_reply_to_user_id": null,
		"in_reply_to_user_id_str": null,
		"in_reply_to_screen_name": null,
		"user": {
			"id": 25073877,
			"id_str": "25073877",
			"name": "Donald J. Trump",
			"screen_name": "realDonaldTrump",
			"location": "Washington, DC",
			"description": "45th President of the United States of America",
			"url": null,
			"entities": {
				"description": {
					"urls": []
				}
			},
			"protected": false,
			"followers_count": 27379007,
			"friends_count": 43,
			"listed_count": 67563,
			"created_at": "Wed Mar 18 13:46:38 +0000 2009",
			"favourites_count": 47,
			"utc_offset": -14400,
			"time_zone": "Eastern Time (US & Canada)",
			"geo_enabled": true,
			"verified": true,
			"statuses_count": 34705,
			"lang": "en",
			"contributors_enabled": false,
			"is_translator": false,
			"is_translation_enabled": true,
			"profile_background_color": "6D5C18",
			"profile_background_image_url": "http://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_tile": true,
			"profile_image_url": "http://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_image_url_https": "https://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_banner_url": "https://pbs.twimg.com/profile_banners/25073877/1489657715",
			"profile_link_color": "0D5B73",
			"profile_sidebar_border_color": "BDDCAD",
			"profile_sidebar_fill_color": "C5CEC0",
			"profile_text_color": "333333",
			"profile_use_background_image": true,
			"has_extended_profile": false,
			"default_profile": false,
			"default_profile_image": false,
			"following": null,
			"follow_request_sent": null,
			"notifications": null,
			"translator_type": "regular"
		},
		"geo": null,
		"coordinates": null,
		"place": null,
		"contributors": null,
		"is_quote_status": false,
		"retweet_count": 10295,
		"favorite_count": 64509,
		"favorited": false,
		"retweeted": false,
		"possibly_sensitive": false,
		"lang": "und"
	},
	{
		"created_at": "Wed Mar 01 01:30:49 +0000 2017",
		"id": 836750538943377400,
		"id_str": "836750538943377408",
		"text": "Join me live at 9:00 P.M. \n#JointAddress https://t.co/J882zbyVkJ https://t.co/gTtK3vJmkU",
		"truncated": false,
		"entities": {
			"hashtags": [
				{
					"text": "JointAddress",
					"indices": [
						27,
						40
					]
				}
			],
			"symbols": [],
			"user_mentions": [],
			"urls": [
				{
					"url": "https://t.co/J882zbyVkJ",
					"expanded_url": "http://45.wh.gov/eXTTGS",
					"display_url": "45.wh.gov/eXTTGS",
					"indices": [
						41,
						64
					]
				}
			],
			"media": [
				{
					"id": 836750534413529100,
					"id_str": "836750534413529088",
					"indices": [
						65,
						88
					],
					"media_url": "http://pbs.twimg.com/media/C5y8LYFWMAA8Cut.jpg",
					"media_url_https": "https://pbs.twimg.com/media/C5y8LYFWMAA8Cut.jpg",
					"url": "https://t.co/gTtK3vJmkU",
					"display_url": "pic.twitter.com/gTtK3vJmkU",
					"expanded_url": "https://twitter.com/realDonaldTrump/status/836750538943377408/photo/1",
					"type": "photo",
					"sizes": {
						"medium": {
							"w": 1024,
							"h": 512,
							"resize": "fit"
						},
						"thumb": {
							"w": 150,
							"h": 150,
							"resize": "crop"
						},
						"small": {
							"w": 680,
							"h": 340,
							"resize": "fit"
						},
						"large": {
							"w": 1024,
							"h": 512,
							"resize": "fit"
						}
					}
				}
			]
		},
		"extended_entities": {
			"media": [
				{
					"id": 836750534413529100,
					"id_str": "836750534413529088",
					"indices": [
						65,
						88
					],
					"media_url": "http://pbs.twimg.com/media/C5y8LYFWMAA8Cut.jpg",
					"media_url_https": "https://pbs.twimg.com/media/C5y8LYFWMAA8Cut.jpg",
					"url": "https://t.co/gTtK3vJmkU",
					"display_url": "pic.twitter.com/gTtK3vJmkU",
					"expanded_url": "https://twitter.com/realDonaldTrump/status/836750538943377408/photo/1",
					"type": "photo",
					"sizes": {
						"medium": {
							"w": 1024,
							"h": 512,
							"resize": "fit"
						},
						"thumb": {
							"w": 150,
							"h": 150,
							"resize": "crop"
						},
						"small": {
							"w": 680,
							"h": 340,
							"resize": "fit"
						},
						"large": {
							"w": 1024,
							"h": 512,
							"resize": "fit"
						}
					}
				}
			]
		},
		"source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
		"in_reply_to_status_id": null,
		"in_reply_to_status_id_str": null,
		"in_reply_to_user_id": null,
		"in_reply_to_user_id_str": null,
		"in_reply_to_screen_name": null,
		"user": {
			"id": 25073877,
			"id_str": "25073877",
			"name": "Donald J. Trump",
			"screen_name": "realDonaldTrump",
			"location": "Washington, DC",
			"description": "45th President of the United States of America",
			"url": null,
			"entities": {
				"description": {
					"urls": []
				}
			},
			"protected": false,
			"followers_count": 27379007,
			"friends_count": 43,
			"listed_count": 67563,
			"created_at": "Wed Mar 18 13:46:38 +0000 2009",
			"favourites_count": 47,
			"utc_offset": -14400,
			"time_zone": "Eastern Time (US & Canada)",
			"geo_enabled": true,
			"verified": true,
			"statuses_count": 34705,
			"lang": "en",
			"contributors_enabled": false,
			"is_translator": false,
			"is_translation_enabled": true,
			"profile_background_color": "6D5C18",
			"profile_background_image_url": "http://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_tile": true,
			"profile_image_url": "http://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_image_url_https": "https://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_banner_url": "https://pbs.twimg.com/profile_banners/25073877/1489657715",
			"profile_link_color": "0D5B73",
			"profile_sidebar_border_color": "BDDCAD",
			"profile_sidebar_fill_color": "C5CEC0",
			"profile_text_color": "333333",
			"profile_use_background_image": true,
			"has_extended_profile": false,
			"default_profile": false,
			"default_profile_image": false,
			"following": null,
			"follow_request_sent": null,
			"notifications": null,
			"translator_type": "regular"
		},
		"geo": null,
		"coordinates": null,
		"place": null,
		"contributors": null,
		"is_quote_status": false,
		"retweet_count": 7474,
		"favorite_count": 55500,
		"favorited": false,
		"retweeted": false,
		"possibly_sensitive": false,
		"lang": "en"
	},
	{
		"created_at": "Tue Feb 28 02:43:03 +0000 2017",
		"id": 836406328369242100,
		"id_str": "836406328369242113",
		"text": "I will be interviewed on @foxandfriends at 6:00 A.M. Enjoy!",
		"truncated": false,
		"entities": {
			"hashtags": [],
			"symbols": [],
			"user_mentions": [
				{
					"screen_name": "foxandfriends",
					"name": "FOX & friends",
					"id": 15513604,
					"id_str": "15513604",
					"indices": [
						25,
						39
					]
				}
			],
			"urls": []
		},
		"source": "<a href=\"http://twitter.com/download/android\" rel=\"nofollow\">Twitter for Android</a>",
		"in_reply_to_status_id": null,
		"in_reply_to_status_id_str": null,
		"in_reply_to_user_id": null,
		"in_reply_to_user_id_str": null,
		"in_reply_to_screen_name": null,
		"user": {
			"id": 25073877,
			"id_str": "25073877",
			"name": "Donald J. Trump",
			"screen_name": "realDonaldTrump",
			"location": "Washington, DC",
			"description": "45th President of the United States of America",
			"url": null,
			"entities": {
				"description": {
					"urls": []
				}
			},
			"protected": false,
			"followers_count": 27379007,
			"friends_count": 43,
			"listed_count": 67563,
			"created_at": "Wed Mar 18 13:46:38 +0000 2009",
			"favourites_count": 47,
			"utc_offset": -14400,
			"time_zone": "Eastern Time (US & Canada)",
			"geo_enabled": true,
			"verified": true,
			"statuses_count": 34705,
			"lang": "en",
			"contributors_enabled": false,
			"is_translator": false,
			"is_translation_enabled": true,
			"profile_background_color": "6D5C18",
			"profile_background_image_url": "http://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_tile": true,
			"profile_image_url": "http://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_image_url_https": "https://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_banner_url": "https://pbs.twimg.com/profile_banners/25073877/1489657715",
			"profile_link_color": "0D5B73",
			"profile_sidebar_border_color": "BDDCAD",
			"profile_sidebar_fill_color": "C5CEC0",
			"profile_text_color": "333333",
			"profile_use_background_image": true,
			"has_extended_profile": false,
			"default_profile": false,
			"default_profile_image": false,
			"following": null,
			"follow_request_sent": null,
			"notifications": null,
			"translator_type": "regular"
		},
		"geo": null,
		"coordinates": null,
		"place": null,
		"contributors": null,
		"is_quote_status": false,
		"retweet_count": 11168,
		"favorite_count": 83937,
		"favorited": false,
		"retweeted": false,
		"lang": "en"
	},
	{
		"created_at": "Mon Feb 27 21:48:21 +0000 2017",
		"id": 836332166728527900,
		"id_str": "836332166728527872",
		"text": "GOP now viewed more favorably than Dems, in Trump era (per NBC/WSJ poll) via @HotlineJosh:\nhttps://t.co/Soebxtg2Zd",
		"truncated": false,
		"entities": {
			"hashtags": [],
			"symbols": [],
			"user_mentions": [
				{
					"screen_name": "HotlineJosh",
					"name": "Josh Kraushaar",
					"id": 21612122,
					"id_str": "21612122",
					"indices": [
						77,
						89
					]
				}
			],
			"urls": [
				{
					"url": "https://t.co/Soebxtg2Zd",
					"expanded_url": "https://www.scribd.com/document/340335355/17057-NBCWSJ-February-Poll",
					"display_url": "scribd.com/document/34033…",
					"indices": [
						91,
						114
					]
				}
			]
		},
		"source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
		"in_reply_to_status_id": null,
		"in_reply_to_status_id_str": null,
		"in_reply_to_user_id": null,
		"in_reply_to_user_id_str": null,
		"in_reply_to_screen_name": null,
		"user": {
			"id": 25073877,
			"id_str": "25073877",
			"name": "Donald J. Trump",
			"screen_name": "realDonaldTrump",
			"location": "Washington, DC",
			"description": "45th President of the United States of America",
			"url": null,
			"entities": {
				"description": {
					"urls": []
				}
			},
			"protected": false,
			"followers_count": 27379007,
			"friends_count": 43,
			"listed_count": 67563,
			"created_at": "Wed Mar 18 13:46:38 +0000 2009",
			"favourites_count": 47,
			"utc_offset": -14400,
			"time_zone": "Eastern Time (US & Canada)",
			"geo_enabled": true,
			"verified": true,
			"statuses_count": 34705,
			"lang": "en",
			"contributors_enabled": false,
			"is_translator": false,
			"is_translation_enabled": true,
			"profile_background_color": "6D5C18",
			"profile_background_image_url": "http://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_tile": true,
			"profile_image_url": "http://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_image_url_https": "https://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_banner_url": "https://pbs.twimg.com/profile_banners/25073877/1489657715",
			"profile_link_color": "0D5B73",
			"profile_sidebar_border_color": "BDDCAD",
			"profile_sidebar_fill_color": "C5CEC0",
			"profile_text_color": "333333",
			"profile_use_background_image": true,
			"has_extended_profile": false,
			"default_profile": false,
			"default_profile_image": false,
			"following": null,
			"follow_request_sent": null,
			"notifications": null,
			"translator_type": "regular"
		},
		"geo": null,
		"coordinates": null,
		"place": null,
		"contributors": null,
		"is_quote_status": false,
		"retweet_count": 14862,
		"favorite_count": 71484,
		"favorited": false,
		"retweeted": false,
		"possibly_sensitive": false,
		"lang": "en"
	},
	{
		"created_at": "Mon Feb 27 17:06:23 +0000 2017",
		"id": 836261209540288500,
		"id_str": "836261209540288513",
		"text": "Great meeting with CEOs of leading U.S. health insurance companies who provide great healthcare to the American peo… https://t.co/60jigi6ffS",
		"truncated": true,
		"entities": {
			"hashtags": [],
			"symbols": [],
			"user_mentions": [],
			"urls": [
				{
					"url": "https://t.co/60jigi6ffS",
					"expanded_url": "https://twitter.com/i/web/status/836261209540288513",
					"display_url": "twitter.com/i/web/status/8…",
					"indices": [
						117,
						140
					]
				}
			]
		},
		"source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
		"in_reply_to_status_id": null,
		"in_reply_to_status_id_str": null,
		"in_reply_to_user_id": null,
		"in_reply_to_user_id_str": null,
		"in_reply_to_screen_name": null,
		"user": {
			"id": 25073877,
			"id_str": "25073877",
			"name": "Donald J. Trump",
			"screen_name": "realDonaldTrump",
			"location": "Washington, DC",
			"description": "45th President of the United States of America",
			"url": null,
			"entities": {
				"description": {
					"urls": []
				}
			},
			"protected": false,
			"followers_count": 27379007,
			"friends_count": 43,
			"listed_count": 67563,
			"created_at": "Wed Mar 18 13:46:38 +0000 2009",
			"favourites_count": 47,
			"utc_offset": -14400,
			"time_zone": "Eastern Time (US & Canada)",
			"geo_enabled": true,
			"verified": true,
			"statuses_count": 34705,
			"lang": "en",
			"contributors_enabled": false,
			"is_translator": false,
			"is_translation_enabled": true,
			"profile_background_color": "6D5C18",
			"profile_background_image_url": "http://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_tile": true,
			"profile_image_url": "http://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_image_url_https": "https://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_banner_url": "https://pbs.twimg.com/profile_banners/25073877/1489657715",
			"profile_link_color": "0D5B73",
			"profile_sidebar_border_color": "BDDCAD",
			"profile_sidebar_fill_color": "C5CEC0",
			"profile_text_color": "333333",
			"profile_use_background_image": true,
			"has_extended_profile": false,
			"default_profile": false,
			"default_profile_image": false,
			"following": null,
			"follow_request_sent": null,
			"notifications": null,
			"translator_type": "regular"
		},
		"geo": null,
		"coordinates": null,
		"place": null,
		"contributors": null,
		"is_quote_status": false,
		"retweet_count": 15584,
		"favorite_count": 90659,
		"favorited": false,
		"retweeted": false,
		"possibly_sensitive": false,
		"lang": "en"
	},
	{
		"created_at": "Sun Feb 26 20:13:52 +0000 2017",
		"id": 835946001873657900,
		"id_str": "835946001873657858",
		"text": "Big dinner with Governors tonight at White House. Much to be discussed, including healthcare.",
		"truncated": false,
		"entities": {
			"hashtags": [],
			"symbols": [],
			"user_mentions": [],
			"urls": []
		},
		"source": "<a href=\"http://twitter.com/download/android\" rel=\"nofollow\">Twitter for Android</a>",
		"in_reply_to_status_id": null,
		"in_reply_to_status_id_str": null,
		"in_reply_to_user_id": null,
		"in_reply_to_user_id_str": null,
		"in_reply_to_screen_name": null,
		"user": {
			"id": 25073877,
			"id_str": "25073877",
			"name": "Donald J. Trump",
			"screen_name": "realDonaldTrump",
			"location": "Washington, DC",
			"description": "45th President of the United States of America",
			"url": null,
			"entities": {
				"description": {
					"urls": []
				}
			},
			"protected": false,
			"followers_count": 27379007,
			"friends_count": 43,
			"listed_count": 67563,
			"created_at": "Wed Mar 18 13:46:38 +0000 2009",
			"favourites_count": 47,
			"utc_offset": -14400,
			"time_zone": "Eastern Time (US & Canada)",
			"geo_enabled": true,
			"verified": true,
			"statuses_count": 34705,
			"lang": "en",
			"contributors_enabled": false,
			"is_translator": false,
			"is_translation_enabled": true,
			"profile_background_color": "6D5C18",
			"profile_background_image_url": "http://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_tile": true,
			"profile_image_url": "http://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_image_url_https": "https://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_banner_url": "https://pbs.twimg.com/profile_banners/25073877/1489657715",
			"profile_link_color": "0D5B73",
			"profile_sidebar_border_color": "BDDCAD",
			"profile_sidebar_fill_color": "C5CEC0",
			"profile_text_color": "333333",
			"profile_use_background_image": true,
			"has_extended_profile": false,
			"default_profile": false,
			"default_profile_image": false,
			"following": null,
			"follow_request_sent": null,
			"notifications": null,
			"translator_type": "regular"
		},
		"geo": null,
		"coordinates": null,
		"place": null,
		"contributors": null,
		"is_quote_status": false,
		"retweet_count": 15952,
		"favorite_count": 107361,
		"favorited": false,
		"retweeted": false,
		"lang": "en"
	},
	{
		"created_at": "Sun Feb 26 18:16:41 +0000 2017",
		"id": 835916511944523800,
		"id_str": "835916511944523777",
		"text": "Russia talk is FAKE NEWS put out by the Dems, and played up by the media, in order to mask the big election defeat and the illegal leaks!",
		"truncated": false,
		"entities": {
			"hashtags": [],
			"symbols": [],
			"user_mentions": [],
			"urls": []
		},
		"source": "<a href=\"http://twitter.com/download/android\" rel=\"nofollow\">Twitter for Android</a>",
		"in_reply_to_status_id": null,
		"in_reply_to_status_id_str": null,
		"in_reply_to_user_id": null,
		"in_reply_to_user_id_str": null,
		"in_reply_to_screen_name": null,
		"user": {
			"id": 25073877,
			"id_str": "25073877",
			"name": "Donald J. Trump",
			"screen_name": "realDonaldTrump",
			"location": "Washington, DC",
			"description": "45th President of the United States of America",
			"url": null,
			"entities": {
				"description": {
					"urls": []
				}
			},
			"protected": false,
			"followers_count": 27379007,
			"friends_count": 43,
			"listed_count": 67563,
			"created_at": "Wed Mar 18 13:46:38 +0000 2009",
			"favourites_count": 47,
			"utc_offset": -14400,
			"time_zone": "Eastern Time (US & Canada)",
			"geo_enabled": true,
			"verified": true,
			"statuses_count": 34705,
			"lang": "en",
			"contributors_enabled": false,
			"is_translator": false,
			"is_translation_enabled": true,
			"profile_background_color": "6D5C18",
			"profile_background_image_url": "http://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_tile": true,
			"profile_image_url": "http://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_image_url_https": "https://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_banner_url": "https://pbs.twimg.com/profile_banners/25073877/1489657715",
			"profile_link_color": "0D5B73",
			"profile_sidebar_border_color": "BDDCAD",
			"profile_sidebar_fill_color": "C5CEC0",
			"profile_text_color": "333333",
			"profile_use_background_image": true,
			"has_extended_profile": false,
			"default_profile": false,
			"default_profile_image": false,
			"following": null,
			"follow_request_sent": null,
			"notifications": null,
			"translator_type": "regular"
		},
		"geo": null,
		"coordinates": null,
		"place": null,
		"contributors": null,
		"is_quote_status": false,
		"retweet_count": 24964,
		"favorite_count": 114795,
		"favorited": false,
		"retweeted": false,
		"lang": "en"
	},
	{
		"created_at": "Sun Feb 26 11:42:39 +0000 2017",
		"id": 835817351178301400,
		"id_str": "835817351178301440",
		"text": "For first time the failing @nytimes will take an ad (a bad one) to help save its failing reputation. Try reporting accurately &amp; fairly!",
		"truncated": false,
		"entities": {
			"hashtags": [],
			"symbols": [],
			"user_mentions": [
				{
					"screen_name": "nytimes",
					"name": "The New York Times",
					"id": 807095,
					"id_str": "807095",
					"indices": [
						27,
						35
					]
				}
			],
			"urls": []
		},
		"source": "<a href=\"http://twitter.com/download/android\" rel=\"nofollow\">Twitter for Android</a>",
		"in_reply_to_status_id": null,
		"in_reply_to_status_id_str": null,
		"in_reply_to_user_id": null,
		"in_reply_to_user_id_str": null,
		"in_reply_to_screen_name": null,
		"user": {
			"id": 25073877,
			"id_str": "25073877",
			"name": "Donald J. Trump",
			"screen_name": "realDonaldTrump",
			"location": "Washington, DC",
			"description": "45th President of the United States of America",
			"url": null,
			"entities": {
				"description": {
					"urls": []
				}
			},
			"protected": false,
			"followers_count": 27379007,
			"friends_count": 43,
			"listed_count": 67563,
			"created_at": "Wed Mar 18 13:46:38 +0000 2009",
			"favourites_count": 47,
			"utc_offset": -14400,
			"time_zone": "Eastern Time (US & Canada)",
			"geo_enabled": true,
			"verified": true,
			"statuses_count": 34705,
			"lang": "en",
			"contributors_enabled": false,
			"is_translator": false,
			"is_translation_enabled": true,
			"profile_background_color": "6D5C18",
			"profile_background_image_url": "http://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_tile": true,
			"profile_image_url": "http://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_image_url_https": "https://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_banner_url": "https://pbs.twimg.com/profile_banners/25073877/1489657715",
			"profile_link_color": "0D5B73",
			"profile_sidebar_border_color": "BDDCAD",
			"profile_sidebar_fill_color": "C5CEC0",
			"profile_text_color": "333333",
			"profile_use_background_image": true,
			"has_extended_profile": false,
			"default_profile": false,
			"default_profile_image": false,
			"following": null,
			"follow_request_sent": null,
			"notifications": null,
			"translator_type": "regular"
		},
		"geo": null,
		"coordinates": null,
		"place": null,
		"contributors": null,
		"is_quote_status": false,
		"retweet_count": 22085,
		"favorite_count": 110951,
		"favorited": false,
		"retweeted": false,
		"lang": "en"
	},
	{
		"created_at": "Sun Feb 26 11:33:16 +0000 2017",
		"id": 835814988686233600,
		"id_str": "835814988686233601",
		"text": "The race for DNC Chairman was, of course, totally \"rigged.\" Bernie's guy, like Bernie himself, never had a chance. Clinton demanded Perez!",
		"truncated": false,
		"entities": {
			"hashtags": [],
			"symbols": [],
			"user_mentions": [],
			"urls": []
		},
		"source": "<a href=\"http://twitter.com/download/android\" rel=\"nofollow\">Twitter for Android</a>",
		"in_reply_to_status_id": null,
		"in_reply_to_status_id_str": null,
		"in_reply_to_user_id": null,
		"in_reply_to_user_id_str": null,
		"in_reply_to_screen_name": null,
		"user": {
			"id": 25073877,
			"id_str": "25073877",
			"name": "Donald J. Trump",
			"screen_name": "realDonaldTrump",
			"location": "Washington, DC",
			"description": "45th President of the United States of America",
			"url": null,
			"entities": {
				"description": {
					"urls": []
				}
			},
			"protected": false,
			"followers_count": 27379007,
			"friends_count": 43,
			"listed_count": 67563,
			"created_at": "Wed Mar 18 13:46:38 +0000 2009",
			"favourites_count": 47,
			"utc_offset": -14400,
			"time_zone": "Eastern Time (US & Canada)",
			"geo_enabled": true,
			"verified": true,
			"statuses_count": 34705,
			"lang": "en",
			"contributors_enabled": false,
			"is_translator": false,
			"is_translation_enabled": true,
			"profile_background_color": "6D5C18",
			"profile_background_image_url": "http://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_tile": true,
			"profile_image_url": "http://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_image_url_https": "https://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_banner_url": "https://pbs.twimg.com/profile_banners/25073877/1489657715",
			"profile_link_color": "0D5B73",
			"profile_sidebar_border_color": "BDDCAD",
			"profile_sidebar_fill_color": "C5CEC0",
			"profile_text_color": "333333",
			"profile_use_background_image": true,
			"has_extended_profile": false,
			"default_profile": false,
			"default_profile_image": false,
			"following": null,
			"follow_request_sent": null,
			"notifications": null,
			"translator_type": "regular"
		},
		"geo": null,
		"coordinates": null,
		"place": null,
		"contributors": null,
		"is_quote_status": false,
		"retweet_count": 19377,
		"favorite_count": 88470,
		"favorited": false,
		"retweeted": false,
		"lang": "en"
	},
	{
		"created_at": "Sat Feb 25 22:02:22 +0000 2017",
		"id": 835610917568200700,
		"id_str": "835610917568200705",
		"text": "Congratulations to Thomas Perez, who has just been named Chairman of the DNC. I could not be happier for him, or for the Republican Party!",
		"truncated": false,
		"entities": {
			"hashtags": [],
			"symbols": [],
			"user_mentions": [],
			"urls": []
		},
		"source": "<a href=\"http://twitter.com/download/android\" rel=\"nofollow\">Twitter for Android</a>",
		"in_reply_to_status_id": null,
		"in_reply_to_status_id_str": null,
		"in_reply_to_user_id": null,
		"in_reply_to_user_id_str": null,
		"in_reply_to_screen_name": null,
		"user": {
			"id": 25073877,
			"id_str": "25073877",
			"name": "Donald J. Trump",
			"screen_name": "realDonaldTrump",
			"location": "Washington, DC",
			"description": "45th President of the United States of America",
			"url": null,
			"entities": {
				"description": {
					"urls": []
				}
			},
			"protected": false,
			"followers_count": 27379007,
			"friends_count": 43,
			"listed_count": 67563,
			"created_at": "Wed Mar 18 13:46:38 +0000 2009",
			"favourites_count": 47,
			"utc_offset": -14400,
			"time_zone": "Eastern Time (US & Canada)",
			"geo_enabled": true,
			"verified": true,
			"statuses_count": 34705,
			"lang": "en",
			"contributors_enabled": false,
			"is_translator": false,
			"is_translation_enabled": true,
			"profile_background_color": "6D5C18",
			"profile_background_image_url": "http://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_tile": true,
			"profile_image_url": "http://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_image_url_https": "https://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_banner_url": "https://pbs.twimg.com/profile_banners/25073877/1489657715",
			"profile_link_color": "0D5B73",
			"profile_sidebar_border_color": "BDDCAD",
			"profile_sidebar_fill_color": "C5CEC0",
			"profile_text_color": "333333",
			"profile_use_background_image": true,
			"has_extended_profile": false,
			"default_profile": false,
			"default_profile_image": false,
			"following": null,
			"follow_request_sent": null,
			"notifications": null,
			"translator_type": "regular"
		},
		"geo": null,
		"coordinates": null,
		"place": null,
		"contributors": null,
		"is_quote_status": false,
		"retweet_count": 29261,
		"favorite_count": 132456,
		"favorited": false,
		"retweeted": false,
		"lang": "en"
	},
	{
		"created_at": "Sat Feb 25 21:53:21 +0000 2017",
		"id": 835608648625836000,
		"id_str": "835608648625836032",
		"text": "I will not be attending the White House Correspondents' Association Dinner this year. Please wish everyone well and have a great evening!",
		"truncated": false,
		"entities": {
			"hashtags": [],
			"symbols": [],
			"user_mentions": [],
			"urls": []
		},
		"source": "<a href=\"http://twitter.com/download/android\" rel=\"nofollow\">Twitter for Android</a>",
		"in_reply_to_status_id": null,
		"in_reply_to_status_id_str": null,
		"in_reply_to_user_id": null,
		"in_reply_to_user_id_str": null,
		"in_reply_to_screen_name": null,
		"user": {
			"id": 25073877,
			"id_str": "25073877",
			"name": "Donald J. Trump",
			"screen_name": "realDonaldTrump",
			"location": "Washington, DC",
			"description": "45th President of the United States of America",
			"url": null,
			"entities": {
				"description": {
					"urls": []
				}
			},
			"protected": false,
			"followers_count": 27379007,
			"friends_count": 43,
			"listed_count": 67563,
			"created_at": "Wed Mar 18 13:46:38 +0000 2009",
			"favourites_count": 47,
			"utc_offset": -14400,
			"time_zone": "Eastern Time (US & Canada)",
			"geo_enabled": true,
			"verified": true,
			"statuses_count": 34705,
			"lang": "en",
			"contributors_enabled": false,
			"is_translator": false,
			"is_translation_enabled": true,
			"profile_background_color": "6D5C18",
			"profile_background_image_url": "http://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_tile": true,
			"profile_image_url": "http://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_image_url_https": "https://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_banner_url": "https://pbs.twimg.com/profile_banners/25073877/1489657715",
			"profile_link_color": "0D5B73",
			"profile_sidebar_border_color": "BDDCAD",
			"profile_sidebar_fill_color": "C5CEC0",
			"profile_text_color": "333333",
			"profile_use_background_image": true,
			"has_extended_profile": false,
			"default_profile": false,
			"default_profile_image": false,
			"following": null,
			"follow_request_sent": null,
			"notifications": null,
			"translator_type": "regular"
		},
		"geo": null,
		"coordinates": null,
		"place": null,
		"contributors": null,
		"is_quote_status": false,
		"retweet_count": 24220,
		"favorite_count": 125744,
		"favorited": false,
		"retweeted": false,
		"lang": "en"
	},
	{
		"created_at": "Sat Feb 25 18:12:25 +0000 2017",
		"id": 835553050530099200,
		"id_str": "835553050530099200",
		"text": "Weekly Address from @WhiteHouse: https://t.co/uaoQSHBOQB https://t.co/7eF6aC6kEC",
		"truncated": false,
		"entities": {
			"hashtags": [],
			"symbols": [],
			"user_mentions": [
				{
					"screen_name": "WhiteHouse",
					"name": "The White House",
					"id": 822215673812119600,
					"id_str": "822215673812119553",
					"indices": [
						20,
						31
					]
				}
			],
			"urls": [
				{
					"url": "https://t.co/uaoQSHBOQB",
					"expanded_url": "http://45.wh.gov/Z6FYHt",
					"display_url": "45.wh.gov/Z6FYHt",
					"indices": [
						33,
						56
					]
				}
			],
			"media": [
				{
					"id": 835553039809335300,
					"id_str": "835553039809335297",
					"indices": [
						57,
						80
					],
					"media_url": "http://pbs.twimg.com/media/C5h7EBDVUAELSSo.jpg",
					"media_url_https": "https://pbs.twimg.com/media/C5h7EBDVUAELSSo.jpg",
					"url": "https://t.co/7eF6aC6kEC",
					"display_url": "pic.twitter.com/7eF6aC6kEC",
					"expanded_url": "https://twitter.com/realDonaldTrump/status/835553050530099200/photo/1",
					"type": "photo",
					"sizes": {
						"large": {
							"w": 750,
							"h": 404,
							"resize": "fit"
						},
						"small": {
							"w": 680,
							"h": 366,
							"resize": "fit"
						},
						"thumb": {
							"w": 150,
							"h": 150,
							"resize": "crop"
						},
						"medium": {
							"w": 750,
							"h": 404,
							"resize": "fit"
						}
					}
				}
			]
		},
		"extended_entities": {
			"media": [
				{
					"id": 835553039809335300,
					"id_str": "835553039809335297",
					"indices": [
						57,
						80
					],
					"media_url": "http://pbs.twimg.com/media/C5h7EBDVUAELSSo.jpg",
					"media_url_https": "https://pbs.twimg.com/media/C5h7EBDVUAELSSo.jpg",
					"url": "https://t.co/7eF6aC6kEC",
					"display_url": "pic.twitter.com/7eF6aC6kEC",
					"expanded_url": "https://twitter.com/realDonaldTrump/status/835553050530099200/photo/1",
					"type": "photo",
					"sizes": {
						"large": {
							"w": 750,
							"h": 404,
							"resize": "fit"
						},
						"small": {
							"w": 680,
							"h": 366,
							"resize": "fit"
						},
						"thumb": {
							"w": 150,
							"h": 150,
							"resize": "crop"
						},
						"medium": {
							"w": 750,
							"h": 404,
							"resize": "fit"
						}
					}
				}
			]
		},
		"source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
		"in_reply_to_status_id": null,
		"in_reply_to_status_id_str": null,
		"in_reply_to_user_id": null,
		"in_reply_to_user_id_str": null,
		"in_reply_to_screen_name": null,
		"user": {
			"id": 25073877,
			"id_str": "25073877",
			"name": "Donald J. Trump",
			"screen_name": "realDonaldTrump",
			"location": "Washington, DC",
			"description": "45th President of the United States of America",
			"url": null,
			"entities": {
				"description": {
					"urls": []
				}
			},
			"protected": false,
			"followers_count": 27379007,
			"friends_count": 43,
			"listed_count": 67563,
			"created_at": "Wed Mar 18 13:46:38 +0000 2009",
			"favourites_count": 47,
			"utc_offset": -14400,
			"time_zone": "Eastern Time (US & Canada)",
			"geo_enabled": true,
			"verified": true,
			"statuses_count": 34705,
			"lang": "en",
			"contributors_enabled": false,
			"is_translator": false,
			"is_translation_enabled": true,
			"profile_background_color": "6D5C18",
			"profile_background_image_url": "http://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_tile": true,
			"profile_image_url": "http://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_image_url_https": "https://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_banner_url": "https://pbs.twimg.com/profile_banners/25073877/1489657715",
			"profile_link_color": "0D5B73",
			"profile_sidebar_border_color": "BDDCAD",
			"profile_sidebar_fill_color": "C5CEC0",
			"profile_text_color": "333333",
			"profile_use_background_image": true,
			"has_extended_profile": false,
			"default_profile": false,
			"default_profile_image": false,
			"following": null,
			"follow_request_sent": null,
			"notifications": null,
			"translator_type": "regular"
		},
		"geo": null,
		"coordinates": null,
		"place": null,
		"contributors": null,
		"is_quote_status": false,
		"retweet_count": 10188,
		"favorite_count": 46376,
		"favorited": false,
		"retweeted": false,
		"possibly_sensitive": false,
		"lang": "en"
	},
	{
		"created_at": "Sat Feb 25 13:27:04 +0000 2017",
		"id": 835481237879926800,
		"id_str": "835481237879926784",
		"text": "Great optimism for future of U.S. business, AND JOBS, with the DOW having an 11th straight record close. Big tax &amp; regulation cuts coming!",
		"truncated": false,
		"entities": {
			"hashtags": [],
			"symbols": [],
			"user_mentions": [],
			"urls": []
		},
		"source": "<a href=\"http://twitter.com/download/android\" rel=\"nofollow\">Twitter for Android</a>",
		"in_reply_to_status_id": null,
		"in_reply_to_status_id_str": null,
		"in_reply_to_user_id": null,
		"in_reply_to_user_id_str": null,
		"in_reply_to_screen_name": null,
		"user": {
			"id": 25073877,
			"id_str": "25073877",
			"name": "Donald J. Trump",
			"screen_name": "realDonaldTrump",
			"location": "Washington, DC",
			"description": "45th President of the United States of America",
			"url": null,
			"entities": {
				"description": {
					"urls": []
				}
			},
			"protected": false,
			"followers_count": 27379007,
			"friends_count": 43,
			"listed_count": 67563,
			"created_at": "Wed Mar 18 13:46:38 +0000 2009",
			"favourites_count": 47,
			"utc_offset": -14400,
			"time_zone": "Eastern Time (US & Canada)",
			"geo_enabled": true,
			"verified": true,
			"statuses_count": 34705,
			"lang": "en",
			"contributors_enabled": false,
			"is_translator": false,
			"is_translation_enabled": true,
			"profile_background_color": "6D5C18",
			"profile_background_image_url": "http://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_tile": true,
			"profile_image_url": "http://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_image_url_https": "https://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_banner_url": "https://pbs.twimg.com/profile_banners/25073877/1489657715",
			"profile_link_color": "0D5B73",
			"profile_sidebar_border_color": "BDDCAD",
			"profile_sidebar_fill_color": "C5CEC0",
			"profile_text_color": "333333",
			"profile_use_background_image": true,
			"has_extended_profile": false,
			"default_profile": false,
			"default_profile_image": false,
			"following": null,
			"follow_request_sent": null,
			"notifications": null,
			"translator_type": "regular"
		},
		"geo": null,
		"coordinates": null,
		"place": null,
		"contributors": null,
		"is_quote_status": false,
		"retweet_count": 20022,
		"favorite_count": 105322,
		"favorited": false,
		"retweeted": false,
		"lang": "en"
	},
	{
		"created_at": "Sat Feb 25 13:19:18 +0000 2017",
		"id": 835479283699224600,
		"id_str": "835479283699224576",
		"text": "The media has not reported that the National Debt in my first month went down by $12 billion vs a $200 billion increase in Obama first mo.",
		"truncated": false,
		"entities": {
			"hashtags": [],
			"symbols": [],
			"user_mentions": [],
			"urls": []
		},
		"source": "<a href=\"http://twitter.com/download/android\" rel=\"nofollow\">Twitter for Android</a>",
		"in_reply_to_status_id": null,
		"in_reply_to_status_id_str": null,
		"in_reply_to_user_id": null,
		"in_reply_to_user_id_str": null,
		"in_reply_to_screen_name": null,
		"user": {
			"id": 25073877,
			"id_str": "25073877",
			"name": "Donald J. Trump",
			"screen_name": "realDonaldTrump",
			"location": "Washington, DC",
			"description": "45th President of the United States of America",
			"url": null,
			"entities": {
				"description": {
					"urls": []
				}
			},
			"protected": false,
			"followers_count": 27379007,
			"friends_count": 43,
			"listed_count": 67563,
			"created_at": "Wed Mar 18 13:46:38 +0000 2009",
			"favourites_count": 47,
			"utc_offset": -14400,
			"time_zone": "Eastern Time (US & Canada)",
			"geo_enabled": true,
			"verified": true,
			"statuses_count": 34705,
			"lang": "en",
			"contributors_enabled": false,
			"is_translator": false,
			"is_translation_enabled": true,
			"profile_background_color": "6D5C18",
			"profile_background_image_url": "http://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_tile": true,
			"profile_image_url": "http://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_image_url_https": "https://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_banner_url": "https://pbs.twimg.com/profile_banners/25073877/1489657715",
			"profile_link_color": "0D5B73",
			"profile_sidebar_border_color": "BDDCAD",
			"profile_sidebar_fill_color": "C5CEC0",
			"profile_text_color": "333333",
			"profile_use_background_image": true,
			"has_extended_profile": false,
			"default_profile": false,
			"default_profile_image": false,
			"following": null,
			"follow_request_sent": null,
			"notifications": null,
			"translator_type": "regular"
		},
		"geo": null,
		"coordinates": null,
		"place": null,
		"contributors": null,
		"is_quote_status": false,
		"retweet_count": 62431,
		"favorite_count": 203424,
		"favorited": false,
		"retweeted": false,
		"lang": "en"
	},
	{
		"created_at": "Sat Feb 25 12:25:24 +0000 2017",
		"id": 835465719970218000,
		"id_str": "835465719970217984",
		"text": "Maybe the millions of people who voted to MAKE AMERICA GREAT AGAIN should have their own rally. It would be the biggest of them all!",
		"truncated": false,
		"entities": {
			"hashtags": [],
			"symbols": [],
			"user_mentions": [],
			"urls": []
		},
		"source": "<a href=\"http://twitter.com/download/android\" rel=\"nofollow\">Twitter for Android</a>",
		"in_reply_to_status_id": null,
		"in_reply_to_status_id_str": null,
		"in_reply_to_user_id": null,
		"in_reply_to_user_id_str": null,
		"in_reply_to_screen_name": null,
		"user": {
			"id": 25073877,
			"id_str": "25073877",
			"name": "Donald J. Trump",
			"screen_name": "realDonaldTrump",
			"location": "Washington, DC",
			"description": "45th President of the United States of America",
			"url": null,
			"entities": {
				"description": {
					"urls": []
				}
			},
			"protected": false,
			"followers_count": 27379007,
			"friends_count": 43,
			"listed_count": 67563,
			"created_at": "Wed Mar 18 13:46:38 +0000 2009",
			"favourites_count": 47,
			"utc_offset": -14400,
			"time_zone": "Eastern Time (US & Canada)",
			"geo_enabled": true,
			"verified": true,
			"statuses_count": 34705,
			"lang": "en",
			"contributors_enabled": false,
			"is_translator": false,
			"is_translation_enabled": true,
			"profile_background_color": "6D5C18",
			"profile_background_image_url": "http://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_tile": true,
			"profile_image_url": "http://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_image_url_https": "https://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_banner_url": "https://pbs.twimg.com/profile_banners/25073877/1489657715",
			"profile_link_color": "0D5B73",
			"profile_sidebar_border_color": "BDDCAD",
			"profile_sidebar_fill_color": "C5CEC0",
			"profile_text_color": "333333",
			"profile_use_background_image": true,
			"has_extended_profile": false,
			"default_profile": false,
			"default_profile_image": false,
			"following": null,
			"follow_request_sent": null,
			"notifications": null,
			"translator_type": "regular"
		},
		"geo": null,
		"coordinates": null,
		"place": null,
		"contributors": null,
		"is_quote_status": false,
		"retweet_count": 35008,
		"favorite_count": 160610,
		"favorited": false,
		"retweeted": false,
		"lang": "en"
	},
	{
		"created_at": "Sat Feb 25 03:09:18 +0000 2017",
		"id": 835325771858251800,
		"id_str": "835325771858251776",
		"text": "FAKE NEWS media knowingly doesn't tell the truth. A great danger to our country. The failing @nytimes has become a joke. Likewise @CNN. Sad!",
		"truncated": false,
		"entities": {
			"hashtags": [],
			"symbols": [],
			"user_mentions": [
				{
					"screen_name": "nytimes",
					"name": "The New York Times",
					"id": 807095,
					"id_str": "807095",
					"indices": [
						93,
						101
					]
				},
				{
					"screen_name": "CNN",
					"name": "CNN",
					"id": 759251,
					"id_str": "759251",
					"indices": [
						130,
						134
					]
				}
			],
			"urls": []
		},
		"source": "<a href=\"http://twitter.com/download/android\" rel=\"nofollow\">Twitter for Android</a>",
		"in_reply_to_status_id": null,
		"in_reply_to_status_id_str": null,
		"in_reply_to_user_id": null,
		"in_reply_to_user_id_str": null,
		"in_reply_to_screen_name": null,
		"user": {
			"id": 25073877,
			"id_str": "25073877",
			"name": "Donald J. Trump",
			"screen_name": "realDonaldTrump",
			"location": "Washington, DC",
			"description": "45th President of the United States of America",
			"url": null,
			"entities": {
				"description": {
					"urls": []
				}
			},
			"protected": false,
			"followers_count": 27379007,
			"friends_count": 43,
			"listed_count": 67563,
			"created_at": "Wed Mar 18 13:46:38 +0000 2009",
			"favourites_count": 47,
			"utc_offset": -14400,
			"time_zone": "Eastern Time (US & Canada)",
			"geo_enabled": true,
			"verified": true,
			"statuses_count": 34705,
			"lang": "en",
			"contributors_enabled": false,
			"is_translator": false,
			"is_translation_enabled": true,
			"profile_background_color": "6D5C18",
			"profile_background_image_url": "http://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_tile": true,
			"profile_image_url": "http://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_image_url_https": "https://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_banner_url": "https://pbs.twimg.com/profile_banners/25073877/1489657715",
			"profile_link_color": "0D5B73",
			"profile_sidebar_border_color": "BDDCAD",
			"profile_sidebar_fill_color": "C5CEC0",
			"profile_text_color": "333333",
			"profile_use_background_image": true,
			"has_extended_profile": false,
			"default_profile": false,
			"default_profile_image": false,
			"following": null,
			"follow_request_sent": null,
			"notifications": null,
			"translator_type": "regular"
		},
		"geo": null,
		"coordinates": null,
		"place": null,
		"contributors": null,
		"is_quote_status": false,
		"retweet_count": 26714,
		"favorite_count": 110292,
		"favorited": false,
		"retweeted": false,
		"lang": "en"
	},
	{
		"created_at": "Fri Feb 24 17:04:19 +0000 2017",
		"id": 835173525522624500,
		"id_str": "835173525522624512",
		"text": "Trump vows to fight 'epidemic' of human trafficking \nhttps://t.co/oDLZ2NdrtA",
		"truncated": false,
		"entities": {
			"hashtags": [],
			"symbols": [],
			"user_mentions": [],
			"urls": [
				{
					"url": "https://t.co/oDLZ2NdrtA",
					"expanded_url": "http://bigstory.ap.org/article/9517fb5ec44e4e93a275cc0722abd6a1/trump-vows-fight-epidemic-human-trafficking",
					"display_url": "bigstory.ap.org/article/9517fb…",
					"indices": [
						53,
						76
					]
				}
			]
		},
		"source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
		"in_reply_to_status_id": null,
		"in_reply_to_status_id_str": null,
		"in_reply_to_user_id": null,
		"in_reply_to_user_id_str": null,
		"in_reply_to_screen_name": null,
		"user": {
			"id": 25073877,
			"id_str": "25073877",
			"name": "Donald J. Trump",
			"screen_name": "realDonaldTrump",
			"location": "Washington, DC",
			"description": "45th President of the United States of America",
			"url": null,
			"entities": {
				"description": {
					"urls": []
				}
			},
			"protected": false,
			"followers_count": 27379007,
			"friends_count": 43,
			"listed_count": 67563,
			"created_at": "Wed Mar 18 13:46:38 +0000 2009",
			"favourites_count": 47,
			"utc_offset": -14400,
			"time_zone": "Eastern Time (US & Canada)",
			"geo_enabled": true,
			"verified": true,
			"statuses_count": 34705,
			"lang": "en",
			"contributors_enabled": false,
			"is_translator": false,
			"is_translation_enabled": true,
			"profile_background_color": "6D5C18",
			"profile_background_image_url": "http://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_tile": true,
			"profile_image_url": "http://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_image_url_https": "https://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_banner_url": "https://pbs.twimg.com/profile_banners/25073877/1489657715",
			"profile_link_color": "0D5B73",
			"profile_sidebar_border_color": "BDDCAD",
			"profile_sidebar_fill_color": "C5CEC0",
			"profile_text_color": "333333",
			"profile_use_background_image": true,
			"has_extended_profile": false,
			"default_profile": false,
			"default_profile_image": false,
			"following": null,
			"follow_request_sent": null,
			"notifications": null,
			"translator_type": "regular"
		},
		"geo": null,
		"coordinates": null,
		"place": null,
		"contributors": null,
		"is_quote_status": false,
		"retweet_count": 20509,
		"favorite_count": 92202,
		"favorited": false,
		"retweeted": false,
		"possibly_sensitive": false,
		"lang": "en"
	},
	{
		"created_at": "Fri Feb 24 13:49:27 +0000 2017",
		"id": 835124485632180200,
		"id_str": "835124485632180224",
		"text": "Going to CPAC!",
		"truncated": false,
		"entities": {
			"hashtags": [],
			"symbols": [],
			"user_mentions": [],
			"urls": []
		},
		"source": "<a href=\"http://twitter.com/download/android\" rel=\"nofollow\">Twitter for Android</a>",
		"in_reply_to_status_id": null,
		"in_reply_to_status_id_str": null,
		"in_reply_to_user_id": null,
		"in_reply_to_user_id_str": null,
		"in_reply_to_screen_name": null,
		"user": {
			"id": 25073877,
			"id_str": "25073877",
			"name": "Donald J. Trump",
			"screen_name": "realDonaldTrump",
			"location": "Washington, DC",
			"description": "45th President of the United States of America",
			"url": null,
			"entities": {
				"description": {
					"urls": []
				}
			},
			"protected": false,
			"followers_count": 27379007,
			"friends_count": 43,
			"listed_count": 67563,
			"created_at": "Wed Mar 18 13:46:38 +0000 2009",
			"favourites_count": 47,
			"utc_offset": -14400,
			"time_zone": "Eastern Time (US & Canada)",
			"geo_enabled": true,
			"verified": true,
			"statuses_count": 34705,
			"lang": "en",
			"contributors_enabled": false,
			"is_translator": false,
			"is_translation_enabled": true,
			"profile_background_color": "6D5C18",
			"profile_background_image_url": "http://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_tile": true,
			"profile_image_url": "http://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_image_url_https": "https://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_banner_url": "https://pbs.twimg.com/profile_banners/25073877/1489657715",
			"profile_link_color": "0D5B73",
			"profile_sidebar_border_color": "BDDCAD",
			"profile_sidebar_fill_color": "C5CEC0",
			"profile_text_color": "333333",
			"profile_use_background_image": true,
			"has_extended_profile": false,
			"default_profile": false,
			"default_profile_image": false,
			"following": null,
			"follow_request_sent": null,
			"notifications": null,
			"translator_type": "regular"
		},
		"geo": null,
		"coordinates": null,
		"place": null,
		"contributors": null,
		"is_quote_status": false,
		"retweet_count": 9055,
		"favorite_count": 72723,
		"favorited": false,
		"retweeted": false,
		"lang": "en"
	},
	{
		"created_at": "Fri Feb 24 12:36:34 +0000 2017",
		"id": 835106143462703100,
		"id_str": "835106143462703104",
		"text": "find the leakers within the FBI itself. Classified information is being given to media that could have a devastating effect on U.S. FIND NOW",
		"truncated": false,
		"entities": {
			"hashtags": [],
			"symbols": [],
			"user_mentions": [],
			"urls": []
		},
		"source": "<a href=\"http://twitter.com/download/android\" rel=\"nofollow\">Twitter for Android</a>",
		"in_reply_to_status_id": null,
		"in_reply_to_status_id_str": null,
		"in_reply_to_user_id": null,
		"in_reply_to_user_id_str": null,
		"in_reply_to_screen_name": null,
		"user": {
			"id": 25073877,
			"id_str": "25073877",
			"name": "Donald J. Trump",
			"screen_name": "realDonaldTrump",
			"location": "Washington, DC",
			"description": "45th President of the United States of America",
			"url": null,
			"entities": {
				"description": {
					"urls": []
				}
			},
			"protected": false,
			"followers_count": 27379007,
			"friends_count": 43,
			"listed_count": 67563,
			"created_at": "Wed Mar 18 13:46:38 +0000 2009",
			"favourites_count": 47,
			"utc_offset": -14400,
			"time_zone": "Eastern Time (US & Canada)",
			"geo_enabled": true,
			"verified": true,
			"statuses_count": 34705,
			"lang": "en",
			"contributors_enabled": false,
			"is_translator": false,
			"is_translation_enabled": true,
			"profile_background_color": "6D5C18",
			"profile_background_image_url": "http://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_tile": true,
			"profile_image_url": "http://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_image_url_https": "https://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_banner_url": "https://pbs.twimg.com/profile_banners/25073877/1489657715",
			"profile_link_color": "0D5B73",
			"profile_sidebar_border_color": "BDDCAD",
			"profile_sidebar_fill_color": "C5CEC0",
			"profile_text_color": "333333",
			"profile_use_background_image": true,
			"has_extended_profile": false,
			"default_profile": false,
			"default_profile_image": false,
			"following": null,
			"follow_request_sent": null,
			"notifications": null,
			"translator_type": "regular"
		},
		"geo": null,
		"coordinates": null,
		"place": null,
		"contributors": null,
		"is_quote_status": false,
		"retweet_count": 21915,
		"favorite_count": 101867,
		"favorited": false,
		"retweeted": false,
		"lang": "en"
	},
	{
		"created_at": "Fri Feb 24 12:31:49 +0000 2017",
		"id": 835104946034991100,
		"id_str": "835104946034991106",
		"text": "The FBI is totally unable to stop the national security \"leakers\" that have permeated our government for a long time. They can't even......",
		"truncated": false,
		"entities": {
			"hashtags": [],
			"symbols": [],
			"user_mentions": [],
			"urls": []
		},
		"source": "<a href=\"http://twitter.com/download/android\" rel=\"nofollow\">Twitter for Android</a>",
		"in_reply_to_status_id": null,
		"in_reply_to_status_id_str": null,
		"in_reply_to_user_id": null,
		"in_reply_to_user_id_str": null,
		"in_reply_to_screen_name": null,
		"user": {
			"id": 25073877,
			"id_str": "25073877",
			"name": "Donald J. Trump",
			"screen_name": "realDonaldTrump",
			"location": "Washington, DC",
			"description": "45th President of the United States of America",
			"url": null,
			"entities": {
				"description": {
					"urls": []
				}
			},
			"protected": false,
			"followers_count": 27379007,
			"friends_count": 43,
			"listed_count": 67563,
			"created_at": "Wed Mar 18 13:46:38 +0000 2009",
			"favourites_count": 47,
			"utc_offset": -14400,
			"time_zone": "Eastern Time (US & Canada)",
			"geo_enabled": true,
			"verified": true,
			"statuses_count": 34705,
			"lang": "en",
			"contributors_enabled": false,
			"is_translator": false,
			"is_translation_enabled": true,
			"profile_background_color": "6D5C18",
			"profile_background_image_url": "http://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_tile": true,
			"profile_image_url": "http://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_image_url_https": "https://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_banner_url": "https://pbs.twimg.com/profile_banners/25073877/1489657715",
			"profile_link_color": "0D5B73",
			"profile_sidebar_border_color": "BDDCAD",
			"profile_sidebar_fill_color": "C5CEC0",
			"profile_text_color": "333333",
			"profile_use_background_image": true,
			"has_extended_profile": false,
			"default_profile": false,
			"default_profile_image": false,
			"following": null,
			"follow_request_sent": null,
			"notifications": null,
			"translator_type": "regular"
		},
		"geo": null,
		"coordinates": null,
		"place": null,
		"contributors": null,
		"is_quote_status": false,
		"retweet_count": 17881,
		"favorite_count": 81352,
		"favorited": false,
		"retweeted": false,
		"lang": "en"
	},
	{
		"created_at": "Fri Feb 24 00:06:44 +0000 2017",
		"id": 834917440450609200,
		"id_str": "834917440450609152",
		"text": "Big interview tonight by Henry Kravis at The Business Council of Washington. Looking forward to it!",
		"truncated": false,
		"entities": {
			"hashtags": [],
			"symbols": [],
			"user_mentions": [],
			"urls": []
		},
		"source": "<a href=\"http://twitter.com/download/android\" rel=\"nofollow\">Twitter for Android</a>",
		"in_reply_to_status_id": null,
		"in_reply_to_status_id_str": null,
		"in_reply_to_user_id": null,
		"in_reply_to_user_id_str": null,
		"in_reply_to_screen_name": null,
		"user": {
			"id": 25073877,
			"id_str": "25073877",
			"name": "Donald J. Trump",
			"screen_name": "realDonaldTrump",
			"location": "Washington, DC",
			"description": "45th President of the United States of America",
			"url": null,
			"entities": {
				"description": {
					"urls": []
				}
			},
			"protected": false,
			"followers_count": 27379007,
			"friends_count": 43,
			"listed_count": 67563,
			"created_at": "Wed Mar 18 13:46:38 +0000 2009",
			"favourites_count": 47,
			"utc_offset": -14400,
			"time_zone": "Eastern Time (US & Canada)",
			"geo_enabled": true,
			"verified": true,
			"statuses_count": 34705,
			"lang": "en",
			"contributors_enabled": false,
			"is_translator": false,
			"is_translation_enabled": true,
			"profile_background_color": "6D5C18",
			"profile_background_image_url": "http://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_tile": true,
			"profile_image_url": "http://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_image_url_https": "https://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_banner_url": "https://pbs.twimg.com/profile_banners/25073877/1489657715",
			"profile_link_color": "0D5B73",
			"profile_sidebar_border_color": "BDDCAD",
			"profile_sidebar_fill_color": "C5CEC0",
			"profile_text_color": "333333",
			"profile_use_background_image": true,
			"has_extended_profile": false,
			"default_profile": false,
			"default_profile_image": false,
			"following": null,
			"follow_request_sent": null,
			"notifications": null,
			"translator_type": "regular"
		},
		"geo": null,
		"coordinates": null,
		"place": null,
		"contributors": null,
		"is_quote_status": false,
		"retweet_count": 8370,
		"favorite_count": 58932,
		"favorited": false,
		"retweeted": false,
		"lang": "en"
	},
	{
		"created_at": "Fri Feb 24 00:01:40 +0000 2017",
		"id": 834916167177371600,
		"id_str": "834916167177371648",
		"text": "Seven people shot and killed yesterday in Chicago. What is going on there - totally out of control. Chicago needs help!",
		"truncated": false,
		"entities": {
			"hashtags": [],
			"symbols": [],
			"user_mentions": [],
			"urls": []
		},
		"source": "<a href=\"http://twitter.com/download/android\" rel=\"nofollow\">Twitter for Android</a>",
		"in_reply_to_status_id": null,
		"in_reply_to_status_id_str": null,
		"in_reply_to_user_id": null,
		"in_reply_to_user_id_str": null,
		"in_reply_to_screen_name": null,
		"user": {
			"id": 25073877,
			"id_str": "25073877",
			"name": "Donald J. Trump",
			"screen_name": "realDonaldTrump",
			"location": "Washington, DC",
			"description": "45th President of the United States of America",
			"url": null,
			"entities": {
				"description": {
					"urls": []
				}
			},
			"protected": false,
			"followers_count": 27379007,
			"friends_count": 43,
			"listed_count": 67563,
			"created_at": "Wed Mar 18 13:46:38 +0000 2009",
			"favourites_count": 47,
			"utc_offset": -14400,
			"time_zone": "Eastern Time (US & Canada)",
			"geo_enabled": true,
			"verified": true,
			"statuses_count": 34705,
			"lang": "en",
			"contributors_enabled": false,
			"is_translator": false,
			"is_translation_enabled": true,
			"profile_background_color": "6D5C18",
			"profile_background_image_url": "http://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_tile": true,
			"profile_image_url": "http://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_image_url_https": "https://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_banner_url": "https://pbs.twimg.com/profile_banners/25073877/1489657715",
			"profile_link_color": "0D5B73",
			"profile_sidebar_border_color": "BDDCAD",
			"profile_sidebar_fill_color": "C5CEC0",
			"profile_text_color": "333333",
			"profile_use_background_image": true,
			"has_extended_profile": false,
			"default_profile": false,
			"default_profile_image": false,
			"following": null,
			"follow_request_sent": null,
			"notifications": null,
			"translator_type": "regular"
		},
		"geo": null,
		"coordinates": null,
		"place": null,
		"contributors": null,
		"is_quote_status": false,
		"retweet_count": 23511,
		"favorite_count": 109767,
		"favorited": false,
		"retweeted": false,
		"lang": "en"
	},
	{
		"created_at": "Thu Feb 23 22:53:45 +0000 2017",
		"id": 834899071982841900,
		"id_str": "834899071982841856",
		"text": "'S&amp;P 500 Edges Higher After Trump Renews Jobs Pledge' https://t.co/WtrRJVFmvU",
		"truncated": false,
		"entities": {
			"hashtags": [],
			"symbols": [],
			"user_mentions": [],
			"urls": [
				{
					"url": "https://t.co/WtrRJVFmvU",
					"expanded_url": "http://www.foxbusiness.com/markets/2017/02/23/s-p-500-edges-higher-after-trump-renews-jobs-pledge.html",
					"display_url": "foxbusiness.com/markets/2017/0…",
					"indices": [
						58,
						81
					]
				}
			]
		},
		"source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
		"in_reply_to_status_id": null,
		"in_reply_to_status_id_str": null,
		"in_reply_to_user_id": null,
		"in_reply_to_user_id_str": null,
		"in_reply_to_screen_name": null,
		"user": {
			"id": 25073877,
			"id_str": "25073877",
			"name": "Donald J. Trump",
			"screen_name": "realDonaldTrump",
			"location": "Washington, DC",
			"description": "45th President of the United States of America",
			"url": null,
			"entities": {
				"description": {
					"urls": []
				}
			},
			"protected": false,
			"followers_count": 27379007,
			"friends_count": 43,
			"listed_count": 67563,
			"created_at": "Wed Mar 18 13:46:38 +0000 2009",
			"favourites_count": 47,
			"utc_offset": -14400,
			"time_zone": "Eastern Time (US & Canada)",
			"geo_enabled": true,
			"verified": true,
			"statuses_count": 34705,
			"lang": "en",
			"contributors_enabled": false,
			"is_translator": false,
			"is_translation_enabled": true,
			"profile_background_color": "6D5C18",
			"profile_background_image_url": "http://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_tile": true,
			"profile_image_url": "http://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_image_url_https": "https://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_banner_url": "https://pbs.twimg.com/profile_banners/25073877/1489657715",
			"profile_link_color": "0D5B73",
			"profile_sidebar_border_color": "BDDCAD",
			"profile_sidebar_fill_color": "C5CEC0",
			"profile_text_color": "333333",
			"profile_use_background_image": true,
			"has_extended_profile": false,
			"default_profile": false,
			"default_profile_image": false,
			"following": null,
			"follow_request_sent": null,
			"notifications": null,
			"translator_type": "regular"
		},
		"geo": null,
		"coordinates": null,
		"place": null,
		"contributors": null,
		"is_quote_status": false,
		"retweet_count": 10698,
		"favorite_count": 56961,
		"favorited": false,
		"retweeted": false,
		"possibly_sensitive": false,
		"lang": "en"
	},
	{
		"created_at": "Wed Feb 22 12:50:56 +0000 2017",
		"id": 834384982495940600,
		"id_str": "834384982495940613",
		"text": "Very much enjoyed my tour of the Smithsonian's National Museum of African American History and Culture...A great job done by amazing people!",
		"truncated": false,
		"entities": {
			"hashtags": [],
			"symbols": [],
			"user_mentions": [],
			"urls": []
		},
		"source": "<a href=\"http://twitter.com/download/android\" rel=\"nofollow\">Twitter for Android</a>",
		"in_reply_to_status_id": null,
		"in_reply_to_status_id_str": null,
		"in_reply_to_user_id": null,
		"in_reply_to_user_id_str": null,
		"in_reply_to_screen_name": null,
		"user": {
			"id": 25073877,
			"id_str": "25073877",
			"name": "Donald J. Trump",
			"screen_name": "realDonaldTrump",
			"location": "Washington, DC",
			"description": "45th President of the United States of America",
			"url": null,
			"entities": {
				"description": {
					"urls": []
				}
			},
			"protected": false,
			"followers_count": 27379007,
			"friends_count": 43,
			"listed_count": 67563,
			"created_at": "Wed Mar 18 13:46:38 +0000 2009",
			"favourites_count": 47,
			"utc_offset": -14400,
			"time_zone": "Eastern Time (US & Canada)",
			"geo_enabled": true,
			"verified": true,
			"statuses_count": 34705,
			"lang": "en",
			"contributors_enabled": false,
			"is_translator": false,
			"is_translation_enabled": true,
			"profile_background_color": "6D5C18",
			"profile_background_image_url": "http://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_tile": true,
			"profile_image_url": "http://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_image_url_https": "https://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_banner_url": "https://pbs.twimg.com/profile_banners/25073877/1489657715",
			"profile_link_color": "0D5B73",
			"profile_sidebar_border_color": "BDDCAD",
			"profile_sidebar_fill_color": "C5CEC0",
			"profile_text_color": "333333",
			"profile_use_background_image": true,
			"has_extended_profile": false,
			"default_profile": false,
			"default_profile_image": false,
			"following": null,
			"follow_request_sent": null,
			"notifications": null,
			"translator_type": "regular"
		},
		"geo": null,
		"coordinates": null,
		"place": null,
		"contributors": null,
		"is_quote_status": false,
		"retweet_count": 16427,
		"favorite_count": 118095,
		"favorited": false,
		"retweeted": false,
		"lang": "en"
	},
	{
		"created_at": "Wed Feb 22 12:20:40 +0000 2017",
		"id": 834377364947816400,
		"id_str": "834377364947816448",
		"text": "One thing I will say about Rep. Keith Ellison, in his fight to lead the DNC, is that he was the one who predicted early that I would win!",
		"truncated": false,
		"entities": {
			"hashtags": [],
			"symbols": [],
			"user_mentions": [],
			"urls": []
		},
		"source": "<a href=\"http://twitter.com/download/android\" rel=\"nofollow\">Twitter for Android</a>",
		"in_reply_to_status_id": null,
		"in_reply_to_status_id_str": null,
		"in_reply_to_user_id": null,
		"in_reply_to_user_id_str": null,
		"in_reply_to_screen_name": null,
		"user": {
			"id": 25073877,
			"id_str": "25073877",
			"name": "Donald J. Trump",
			"screen_name": "realDonaldTrump",
			"location": "Washington, DC",
			"description": "45th President of the United States of America",
			"url": null,
			"entities": {
				"description": {
					"urls": []
				}
			},
			"protected": false,
			"followers_count": 27379007,
			"friends_count": 43,
			"listed_count": 67563,
			"created_at": "Wed Mar 18 13:46:38 +0000 2009",
			"favourites_count": 47,
			"utc_offset": -14400,
			"time_zone": "Eastern Time (US & Canada)",
			"geo_enabled": true,
			"verified": true,
			"statuses_count": 34705,
			"lang": "en",
			"contributors_enabled": false,
			"is_translator": false,
			"is_translation_enabled": true,
			"profile_background_color": "6D5C18",
			"profile_background_image_url": "http://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_tile": true,
			"profile_image_url": "http://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_image_url_https": "https://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_banner_url": "https://pbs.twimg.com/profile_banners/25073877/1489657715",
			"profile_link_color": "0D5B73",
			"profile_sidebar_border_color": "BDDCAD",
			"profile_sidebar_fill_color": "C5CEC0",
			"profile_text_color": "333333",
			"profile_use_background_image": true,
			"has_extended_profile": false,
			"default_profile": false,
			"default_profile_image": false,
			"following": null,
			"follow_request_sent": null,
			"notifications": null,
			"translator_type": "regular"
		},
		"geo": null,
		"coordinates": null,
		"place": null,
		"contributors": null,
		"is_quote_status": false,
		"retweet_count": 12293,
		"favorite_count": 80386,
		"favorited": false,
		"retweeted": false,
		"lang": "en"
	},
	{
		"created_at": "Tue Feb 21 23:23:13 +0000 2017",
		"id": 834181712783560700,
		"id_str": "834181712783560705",
		"text": "The so-called angry crowds in home districts of some Republicans are actually, in numerous cases, planned out by liberal activists. Sad!",
		"truncated": false,
		"entities": {
			"hashtags": [],
			"symbols": [],
			"user_mentions": [],
			"urls": []
		},
		"source": "<a href=\"http://twitter.com/download/android\" rel=\"nofollow\">Twitter for Android</a>",
		"in_reply_to_status_id": null,
		"in_reply_to_status_id_str": null,
		"in_reply_to_user_id": null,
		"in_reply_to_user_id_str": null,
		"in_reply_to_screen_name": null,
		"user": {
			"id": 25073877,
			"id_str": "25073877",
			"name": "Donald J. Trump",
			"screen_name": "realDonaldTrump",
			"location": "Washington, DC",
			"description": "45th President of the United States of America",
			"url": null,
			"entities": {
				"description": {
					"urls": []
				}
			},
			"protected": false,
			"followers_count": 27379007,
			"friends_count": 43,
			"listed_count": 67563,
			"created_at": "Wed Mar 18 13:46:38 +0000 2009",
			"favourites_count": 47,
			"utc_offset": -14400,
			"time_zone": "Eastern Time (US & Canada)",
			"geo_enabled": true,
			"verified": true,
			"statuses_count": 34705,
			"lang": "en",
			"contributors_enabled": false,
			"is_translator": false,
			"is_translation_enabled": true,
			"profile_background_color": "6D5C18",
			"profile_background_image_url": "http://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_tile": true,
			"profile_image_url": "http://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_image_url_https": "https://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_banner_url": "https://pbs.twimg.com/profile_banners/25073877/1489657715",
			"profile_link_color": "0D5B73",
			"profile_sidebar_border_color": "BDDCAD",
			"profile_sidebar_fill_color": "C5CEC0",
			"profile_text_color": "333333",
			"profile_use_background_image": true,
			"has_extended_profile": false,
			"default_profile": false,
			"default_profile_image": false,
			"following": null,
			"follow_request_sent": null,
			"notifications": null,
			"translator_type": "regular"
		},
		"geo": null,
		"coordinates": null,
		"place": null,
		"contributors": null,
		"is_quote_status": false,
		"retweet_count": 26421,
		"favorite_count": 119872,
		"favorited": false,
		"retweeted": false,
		"lang": "en"
	},
	{
		"created_at": "Tue Feb 21 20:46:42 +0000 2017",
		"id": 834142323881685000,
		"id_str": "834142323881684993",
		"text": "'Americans overwhelmingly oppose sanctuary cities' https://t.co/s5QvsJWA6u",
		"truncated": false,
		"entities": {
			"hashtags": [],
			"symbols": [],
			"user_mentions": [],
			"urls": [
				{
					"url": "https://t.co/s5QvsJWA6u",
					"expanded_url": "http://thehill.com/homenews/administration/320487-poll-americans-overwhelmingly-oppose-sanctuary-cities",
					"display_url": "thehill.com/homenews/admin…",
					"indices": [
						51,
						74
					]
				}
			]
		},
		"source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
		"in_reply_to_status_id": null,
		"in_reply_to_status_id_str": null,
		"in_reply_to_user_id": null,
		"in_reply_to_user_id_str": null,
		"in_reply_to_screen_name": null,
		"user": {
			"id": 25073877,
			"id_str": "25073877",
			"name": "Donald J. Trump",
			"screen_name": "realDonaldTrump",
			"location": "Washington, DC",
			"description": "45th President of the United States of America",
			"url": null,
			"entities": {
				"description": {
					"urls": []
				}
			},
			"protected": false,
			"followers_count": 27379007,
			"friends_count": 43,
			"listed_count": 67563,
			"created_at": "Wed Mar 18 13:46:38 +0000 2009",
			"favourites_count": 47,
			"utc_offset": -14400,
			"time_zone": "Eastern Time (US & Canada)",
			"geo_enabled": true,
			"verified": true,
			"statuses_count": 34705,
			"lang": "en",
			"contributors_enabled": false,
			"is_translator": false,
			"is_translation_enabled": true,
			"profile_background_color": "6D5C18",
			"profile_background_image_url": "http://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_tile": true,
			"profile_image_url": "http://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_image_url_https": "https://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_banner_url": "https://pbs.twimg.com/profile_banners/25073877/1489657715",
			"profile_link_color": "0D5B73",
			"profile_sidebar_border_color": "BDDCAD",
			"profile_sidebar_fill_color": "C5CEC0",
			"profile_text_color": "333333",
			"profile_use_background_image": true,
			"has_extended_profile": false,
			"default_profile": false,
			"default_profile_image": false,
			"following": null,
			"follow_request_sent": null,
			"notifications": null,
			"translator_type": "regular"
		},
		"geo": null,
		"coordinates": null,
		"place": null,
		"contributors": null,
		"is_quote_status": false,
		"retweet_count": 23981,
		"favorite_count": 108440,
		"favorited": false,
		"retweeted": false,
		"possibly_sensitive": false,
		"lang": "en"
	},
	{
		"created_at": "Tue Feb 21 00:38:40 +0000 2017",
		"id": 833838311315763200,
		"id_str": "833838311315763200",
		"text": "Congratulations to our new National Security Advisor, General H.R. McMaster. Video: https://t.co/BKn9r225Kk https://t.co/VBXcJ1b6Pv",
		"truncated": false,
		"entities": {
			"hashtags": [],
			"symbols": [],
			"user_mentions": [],
			"urls": [
				{
					"url": "https://t.co/BKn9r225Kk",
					"expanded_url": "https://www.facebook.com/DonaldTrump/videos/10158684611165725/",
					"display_url": "facebook.com/DonaldTrump/vi…",
					"indices": [
						84,
						107
					]
				}
			],
			"media": [
				{
					"id": 833838305447800800,
					"id_str": "833838305447800832",
					"indices": [
						108,
						131
					],
					"media_url": "http://pbs.twimg.com/media/C5JjhVxUcAAGuJp.jpg",
					"media_url_https": "https://pbs.twimg.com/media/C5JjhVxUcAAGuJp.jpg",
					"url": "https://t.co/VBXcJ1b6Pv",
					"display_url": "pic.twitter.com/VBXcJ1b6Pv",
					"expanded_url": "https://twitter.com/realDonaldTrump/status/833838311315763200/photo/1",
					"type": "photo",
					"sizes": {
						"small": {
							"w": 680,
							"h": 424,
							"resize": "fit"
						},
						"medium": {
							"w": 720,
							"h": 449,
							"resize": "fit"
						},
						"thumb": {
							"w": 150,
							"h": 150,
							"resize": "crop"
						},
						"large": {
							"w": 720,
							"h": 449,
							"resize": "fit"
						}
					}
				}
			]
		},
		"extended_entities": {
			"media": [
				{
					"id": 833838305447800800,
					"id_str": "833838305447800832",
					"indices": [
						108,
						131
					],
					"media_url": "http://pbs.twimg.com/media/C5JjhVxUcAAGuJp.jpg",
					"media_url_https": "https://pbs.twimg.com/media/C5JjhVxUcAAGuJp.jpg",
					"url": "https://t.co/VBXcJ1b6Pv",
					"display_url": "pic.twitter.com/VBXcJ1b6Pv",
					"expanded_url": "https://twitter.com/realDonaldTrump/status/833838311315763200/photo/1",
					"type": "photo",
					"sizes": {
						"small": {
							"w": 680,
							"h": 424,
							"resize": "fit"
						},
						"medium": {
							"w": 720,
							"h": 449,
							"resize": "fit"
						},
						"thumb": {
							"w": 150,
							"h": 150,
							"resize": "crop"
						},
						"large": {
							"w": 720,
							"h": 449,
							"resize": "fit"
						}
					}
				}
			]
		},
		"source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
		"in_reply_to_status_id": null,
		"in_reply_to_status_id_str": null,
		"in_reply_to_user_id": null,
		"in_reply_to_user_id_str": null,
		"in_reply_to_screen_name": null,
		"user": {
			"id": 25073877,
			"id_str": "25073877",
			"name": "Donald J. Trump",
			"screen_name": "realDonaldTrump",
			"location": "Washington, DC",
			"description": "45th President of the United States of America",
			"url": null,
			"entities": {
				"description": {
					"urls": []
				}
			},
			"protected": false,
			"followers_count": 27379007,
			"friends_count": 43,
			"listed_count": 67563,
			"created_at": "Wed Mar 18 13:46:38 +0000 2009",
			"favourites_count": 47,
			"utc_offset": -14400,
			"time_zone": "Eastern Time (US & Canada)",
			"geo_enabled": true,
			"verified": true,
			"statuses_count": 34705,
			"lang": "en",
			"contributors_enabled": false,
			"is_translator": false,
			"is_translation_enabled": true,
			"profile_background_color": "6D5C18",
			"profile_background_image_url": "http://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_tile": true,
			"profile_image_url": "http://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_image_url_https": "https://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_banner_url": "https://pbs.twimg.com/profile_banners/25073877/1489657715",
			"profile_link_color": "0D5B73",
			"profile_sidebar_border_color": "BDDCAD",
			"profile_sidebar_fill_color": "C5CEC0",
			"profile_text_color": "333333",
			"profile_use_background_image": true,
			"has_extended_profile": false,
			"default_profile": false,
			"default_profile_image": false,
			"following": null,
			"follow_request_sent": null,
			"notifications": null,
			"translator_type": "regular"
		},
		"geo": null,
		"coordinates": null,
		"place": null,
		"contributors": null,
		"is_quote_status": false,
		"retweet_count": 16212,
		"favorite_count": 95242,
		"favorited": false,
		"retweeted": false,
		"possibly_sensitive": false,
		"lang": "en"
	},
	{
		"created_at": "Mon Feb 20 21:00:37 +0000 2017",
		"id": 833783438922629100,
		"id_str": "833783438922629125",
		"text": "Just named General H.R. McMaster National Security Advisor.",
		"truncated": false,
		"entities": {
			"hashtags": [],
			"symbols": [],
			"user_mentions": [],
			"urls": []
		},
		"source": "<a href=\"http://twitter.com/download/android\" rel=\"nofollow\">Twitter for Android</a>",
		"in_reply_to_status_id": null,
		"in_reply_to_status_id_str": null,
		"in_reply_to_user_id": null,
		"in_reply_to_user_id_str": null,
		"in_reply_to_screen_name": null,
		"user": {
			"id": 25073877,
			"id_str": "25073877",
			"name": "Donald J. Trump",
			"screen_name": "realDonaldTrump",
			"location": "Washington, DC",
			"description": "45th President of the United States of America",
			"url": null,
			"entities": {
				"description": {
					"urls": []
				}
			},
			"protected": false,
			"followers_count": 27379007,
			"friends_count": 43,
			"listed_count": 67563,
			"created_at": "Wed Mar 18 13:46:38 +0000 2009",
			"favourites_count": 47,
			"utc_offset": -14400,
			"time_zone": "Eastern Time (US & Canada)",
			"geo_enabled": true,
			"verified": true,
			"statuses_count": 34705,
			"lang": "en",
			"contributors_enabled": false,
			"is_translator": false,
			"is_translation_enabled": true,
			"profile_background_color": "6D5C18",
			"profile_background_image_url": "http://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_tile": true,
			"profile_image_url": "http://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_image_url_https": "https://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_banner_url": "https://pbs.twimg.com/profile_banners/25073877/1489657715",
			"profile_link_color": "0D5B73",
			"profile_sidebar_border_color": "BDDCAD",
			"profile_sidebar_fill_color": "C5CEC0",
			"profile_text_color": "333333",
			"profile_use_background_image": true,
			"has_extended_profile": false,
			"default_profile": false,
			"default_profile_image": false,
			"following": null,
			"follow_request_sent": null,
			"notifications": null,
			"translator_type": "regular"
		},
		"geo": null,
		"coordinates": null,
		"place": null,
		"contributors": null,
		"is_quote_status": false,
		"retweet_count": 15988,
		"favorite_count": 107729,
		"favorited": false,
		"retweeted": false,
		"lang": "en"
	},
	{
		"created_at": "Mon Feb 20 14:33:33 +0000 2017",
		"id": 833686030679208000,
		"id_str": "833686030679207936",
		"text": "HAPPY PRESIDENTS DAY - MAKE AMERICA GREAT AGAIN!",
		"truncated": false,
		"entities": {
			"hashtags": [],
			"symbols": [],
			"user_mentions": [],
			"urls": []
		},
		"source": "<a href=\"http://twitter.com/download/android\" rel=\"nofollow\">Twitter for Android</a>",
		"in_reply_to_status_id": null,
		"in_reply_to_status_id_str": null,
		"in_reply_to_user_id": null,
		"in_reply_to_user_id_str": null,
		"in_reply_to_screen_name": null,
		"user": {
			"id": 25073877,
			"id_str": "25073877",
			"name": "Donald J. Trump",
			"screen_name": "realDonaldTrump",
			"location": "Washington, DC",
			"description": "45th President of the United States of America",
			"url": null,
			"entities": {
				"description": {
					"urls": []
				}
			},
			"protected": false,
			"followers_count": 27379007,
			"friends_count": 43,
			"listed_count": 67563,
			"created_at": "Wed Mar 18 13:46:38 +0000 2009",
			"favourites_count": 47,
			"utc_offset": -14400,
			"time_zone": "Eastern Time (US & Canada)",
			"geo_enabled": true,
			"verified": true,
			"statuses_count": 34705,
			"lang": "en",
			"contributors_enabled": false,
			"is_translator": false,
			"is_translation_enabled": true,
			"profile_background_color": "6D5C18",
			"profile_background_image_url": "http://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_tile": true,
			"profile_image_url": "http://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_image_url_https": "https://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_banner_url": "https://pbs.twimg.com/profile_banners/25073877/1489657715",
			"profile_link_color": "0D5B73",
			"profile_sidebar_border_color": "BDDCAD",
			"profile_sidebar_fill_color": "C5CEC0",
			"profile_text_color": "333333",
			"profile_use_background_image": true,
			"has_extended_profile": false,
			"default_profile": false,
			"default_profile_image": false,
			"following": null,
			"follow_request_sent": null,
			"notifications": null,
			"translator_type": "regular"
		},
		"geo": null,
		"coordinates": null,
		"place": null,
		"contributors": null,
		"is_quote_status": false,
		"retweet_count": 49612,
		"favorite_count": 245643,
		"favorited": false,
		"retweeted": false,
		"lang": "en"
	},
	{
		"created_at": "Mon Feb 20 14:15:42 +0000 2017",
		"id": 833681539997253600,
		"id_str": "833681539997253636",
		"text": "Give the public a break - The FAKE NEWS media is trying to say that large scale immigration in Sweden is working out just beautifully. NOT!",
		"truncated": false,
		"entities": {
			"hashtags": [],
			"symbols": [],
			"user_mentions": [],
			"urls": []
		},
		"source": "<a href=\"http://twitter.com/download/android\" rel=\"nofollow\">Twitter for Android</a>",
		"in_reply_to_status_id": null,
		"in_reply_to_status_id_str": null,
		"in_reply_to_user_id": null,
		"in_reply_to_user_id_str": null,
		"in_reply_to_screen_name": null,
		"user": {
			"id": 25073877,
			"id_str": "25073877",
			"name": "Donald J. Trump",
			"screen_name": "realDonaldTrump",
			"location": "Washington, DC",
			"description": "45th President of the United States of America",
			"url": null,
			"entities": {
				"description": {
					"urls": []
				}
			},
			"protected": false,
			"followers_count": 27379007,
			"friends_count": 43,
			"listed_count": 67563,
			"created_at": "Wed Mar 18 13:46:38 +0000 2009",
			"favourites_count": 47,
			"utc_offset": -14400,
			"time_zone": "Eastern Time (US & Canada)",
			"geo_enabled": true,
			"verified": true,
			"statuses_count": 34705,
			"lang": "en",
			"contributors_enabled": false,
			"is_translator": false,
			"is_translation_enabled": true,
			"profile_background_color": "6D5C18",
			"profile_background_image_url": "http://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_tile": true,
			"profile_image_url": "http://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_image_url_https": "https://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_banner_url": "https://pbs.twimg.com/profile_banners/25073877/1489657715",
			"profile_link_color": "0D5B73",
			"profile_sidebar_border_color": "BDDCAD",
			"profile_sidebar_fill_color": "C5CEC0",
			"profile_text_color": "333333",
			"profile_use_background_image": true,
			"has_extended_profile": false,
			"default_profile": false,
			"default_profile_image": false,
			"following": null,
			"follow_request_sent": null,
			"notifications": null,
			"translator_type": "regular"
		},
		"geo": null,
		"coordinates": null,
		"place": null,
		"contributors": null,
		"is_quote_status": false,
		"retweet_count": 35441,
		"favorite_count": 143142,
		"favorited": false,
		"retweeted": false,
		"lang": "en"
	},
	{
		"created_at": "Sun Feb 19 21:57:01 +0000 2017",
		"id": 833435244451754000,
		"id_str": "833435244451753984",
		"text": "My statement as to what's happening in Sweden was in reference to a story that was broadcast on @FoxNews concerning immigrants &amp; Sweden.",
		"truncated": false,
		"entities": {
			"hashtags": [],
			"symbols": [],
			"user_mentions": [
				{
					"screen_name": "FoxNews",
					"name": "Fox News",
					"id": 1367531,
					"id_str": "1367531",
					"indices": [
						96,
						104
					]
				}
			],
			"urls": []
		},
		"source": "<a href=\"http://twitter.com/download/android\" rel=\"nofollow\">Twitter for Android</a>",
		"in_reply_to_status_id": null,
		"in_reply_to_status_id_str": null,
		"in_reply_to_user_id": null,
		"in_reply_to_user_id_str": null,
		"in_reply_to_screen_name": null,
		"user": {
			"id": 25073877,
			"id_str": "25073877",
			"name": "Donald J. Trump",
			"screen_name": "realDonaldTrump",
			"location": "Washington, DC",
			"description": "45th President of the United States of America",
			"url": null,
			"entities": {
				"description": {
					"urls": []
				}
			},
			"protected": false,
			"followers_count": 27379007,
			"friends_count": 43,
			"listed_count": 67563,
			"created_at": "Wed Mar 18 13:46:38 +0000 2009",
			"favourites_count": 47,
			"utc_offset": -14400,
			"time_zone": "Eastern Time (US & Canada)",
			"geo_enabled": true,
			"verified": true,
			"statuses_count": 34705,
			"lang": "en",
			"contributors_enabled": false,
			"is_translator": false,
			"is_translation_enabled": true,
			"profile_background_color": "6D5C18",
			"profile_background_image_url": "http://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_tile": true,
			"profile_image_url": "http://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_image_url_https": "https://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_banner_url": "https://pbs.twimg.com/profile_banners/25073877/1489657715",
			"profile_link_color": "0D5B73",
			"profile_sidebar_border_color": "BDDCAD",
			"profile_sidebar_fill_color": "C5CEC0",
			"profile_text_color": "333333",
			"profile_use_background_image": true,
			"has_extended_profile": false,
			"default_profile": false,
			"default_profile_image": false,
			"following": null,
			"follow_request_sent": null,
			"notifications": null,
			"translator_type": "regular"
		},
		"geo": null,
		"coordinates": null,
		"place": null,
		"contributors": null,
		"is_quote_status": false,
		"retweet_count": 26582,
		"favorite_count": 113857,
		"favorited": false,
		"retweeted": false,
		"lang": "en"
	},
	{
		"created_at": "Sat Feb 18 13:51:20 +0000 2017",
		"id": 832950628750127100,
		"id_str": "832950628750127106",
		"text": "Will be having many meetings this weekend at The Southern White House. Big 5:00 P.M. speech in Melbourne, Florida. A lot to talk about!",
		"truncated": false,
		"entities": {
			"hashtags": [],
			"symbols": [],
			"user_mentions": [],
			"urls": []
		},
		"source": "<a href=\"http://twitter.com/download/android\" rel=\"nofollow\">Twitter for Android</a>",
		"in_reply_to_status_id": null,
		"in_reply_to_status_id_str": null,
		"in_reply_to_user_id": null,
		"in_reply_to_user_id_str": null,
		"in_reply_to_screen_name": null,
		"user": {
			"id": 25073877,
			"id_str": "25073877",
			"name": "Donald J. Trump",
			"screen_name": "realDonaldTrump",
			"location": "Washington, DC",
			"description": "45th President of the United States of America",
			"url": null,
			"entities": {
				"description": {
					"urls": []
				}
			},
			"protected": false,
			"followers_count": 27379007,
			"friends_count": 43,
			"listed_count": 67563,
			"created_at": "Wed Mar 18 13:46:38 +0000 2009",
			"favourites_count": 47,
			"utc_offset": -14400,
			"time_zone": "Eastern Time (US & Canada)",
			"geo_enabled": true,
			"verified": true,
			"statuses_count": 34705,
			"lang": "en",
			"contributors_enabled": false,
			"is_translator": false,
			"is_translation_enabled": true,
			"profile_background_color": "6D5C18",
			"profile_background_image_url": "http://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_tile": true,
			"profile_image_url": "http://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_image_url_https": "https://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_banner_url": "https://pbs.twimg.com/profile_banners/25073877/1489657715",
			"profile_link_color": "0D5B73",
			"profile_sidebar_border_color": "BDDCAD",
			"profile_sidebar_fill_color": "C5CEC0",
			"profile_text_color": "333333",
			"profile_use_background_image": true,
			"has_extended_profile": false,
			"default_profile": false,
			"default_profile_image": false,
			"following": null,
			"follow_request_sent": null,
			"notifications": null,
			"translator_type": "regular"
		},
		"geo": null,
		"coordinates": null,
		"place": null,
		"contributors": null,
		"is_quote_status": false,
		"retweet_count": 15459,
		"favorite_count": 100600,
		"favorited": false,
		"retweeted": false,
		"lang": "en"
	},
	{
		"created_at": "Sat Feb 18 13:31:53 +0000 2017",
		"id": 832945737625387000,
		"id_str": "832945737625387008",
		"text": "Don't believe the main stream (fake news) media.The White House is running VERY WELL. I inherited a MESS and am in the process of fixing it.",
		"truncated": false,
		"entities": {
			"hashtags": [],
			"symbols": [],
			"user_mentions": [],
			"urls": []
		},
		"source": "<a href=\"http://twitter.com/download/android\" rel=\"nofollow\">Twitter for Android</a>",
		"in_reply_to_status_id": null,
		"in_reply_to_status_id_str": null,
		"in_reply_to_user_id": null,
		"in_reply_to_user_id_str": null,
		"in_reply_to_screen_name": null,
		"user": {
			"id": 25073877,
			"id_str": "25073877",
			"name": "Donald J. Trump",
			"screen_name": "realDonaldTrump",
			"location": "Washington, DC",
			"description": "45th President of the United States of America",
			"url": null,
			"entities": {
				"description": {
					"urls": []
				}
			},
			"protected": false,
			"followers_count": 27379007,
			"friends_count": 43,
			"listed_count": 67563,
			"created_at": "Wed Mar 18 13:46:38 +0000 2009",
			"favourites_count": 47,
			"utc_offset": -14400,
			"time_zone": "Eastern Time (US & Canada)",
			"geo_enabled": true,
			"verified": true,
			"statuses_count": 34705,
			"lang": "en",
			"contributors_enabled": false,
			"is_translator": false,
			"is_translation_enabled": true,
			"profile_background_color": "6D5C18",
			"profile_background_image_url": "http://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_tile": true,
			"profile_image_url": "http://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_image_url_https": "https://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_banner_url": "https://pbs.twimg.com/profile_banners/25073877/1489657715",
			"profile_link_color": "0D5B73",
			"profile_sidebar_border_color": "BDDCAD",
			"profile_sidebar_fill_color": "C5CEC0",
			"profile_text_color": "333333",
			"profile_use_background_image": true,
			"has_extended_profile": false,
			"default_profile": false,
			"default_profile_image": false,
			"following": null,
			"follow_request_sent": null,
			"notifications": null,
			"translator_type": "regular"
		},
		"geo": null,
		"coordinates": null,
		"place": null,
		"contributors": null,
		"is_quote_status": false,
		"retweet_count": 39617,
		"favorite_count": 188567,
		"favorited": false,
		"retweeted": false,
		"lang": "en"
	},
	{
		"created_at": "Sat Feb 18 00:02:58 +0000 2017",
		"id": 832742165436579800,
		"id_str": "832742165436579840",
		"text": "Looking forward to the Florida rally tomorrow. Big crowd expected!",
		"truncated": false,
		"entities": {
			"hashtags": [],
			"symbols": [],
			"user_mentions": [],
			"urls": []
		},
		"source": "<a href=\"http://twitter.com/download/android\" rel=\"nofollow\">Twitter for Android</a>",
		"in_reply_to_status_id": null,
		"in_reply_to_status_id_str": null,
		"in_reply_to_user_id": null,
		"in_reply_to_user_id_str": null,
		"in_reply_to_screen_name": null,
		"user": {
			"id": 25073877,
			"id_str": "25073877",
			"name": "Donald J. Trump",
			"screen_name": "realDonaldTrump",
			"location": "Washington, DC",
			"description": "45th President of the United States of America",
			"url": null,
			"entities": {
				"description": {
					"urls": []
				}
			},
			"protected": false,
			"followers_count": 27379007,
			"friends_count": 43,
			"listed_count": 67563,
			"created_at": "Wed Mar 18 13:46:38 +0000 2009",
			"favourites_count": 47,
			"utc_offset": -14400,
			"time_zone": "Eastern Time (US & Canada)",
			"geo_enabled": true,
			"verified": true,
			"statuses_count": 34705,
			"lang": "en",
			"contributors_enabled": false,
			"is_translator": false,
			"is_translation_enabled": true,
			"profile_background_color": "6D5C18",
			"profile_background_image_url": "http://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_tile": true,
			"profile_image_url": "http://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_image_url_https": "https://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_banner_url": "https://pbs.twimg.com/profile_banners/25073877/1489657715",
			"profile_link_color": "0D5B73",
			"profile_sidebar_border_color": "BDDCAD",
			"profile_sidebar_fill_color": "C5CEC0",
			"profile_text_color": "333333",
			"profile_use_background_image": true,
			"has_extended_profile": false,
			"default_profile": false,
			"default_profile_image": false,
			"following": null,
			"follow_request_sent": null,
			"notifications": null,
			"translator_type": "regular"
		},
		"geo": null,
		"coordinates": null,
		"place": null,
		"contributors": null,
		"is_quote_status": false,
		"retweet_count": 14341,
		"favorite_count": 100377,
		"favorited": false,
		"retweeted": false,
		"lang": "en"
	},
	{
		"created_at": "Fri Feb 17 23:15:56 +0000 2017",
		"id": 832730328108134400,
		"id_str": "832730328108134402",
		"text": "\"One of the most effective press conferences I've ever seen!\" says Rush Limbaugh. Many agree.Yet FAKE MEDIA  calls it differently! Dishonest",
		"truncated": false,
		"entities": {
			"hashtags": [],
			"symbols": [],
			"user_mentions": [],
			"urls": []
		},
		"source": "<a href=\"http://twitter.com/download/android\" rel=\"nofollow\">Twitter for Android</a>",
		"in_reply_to_status_id": null,
		"in_reply_to_status_id_str": null,
		"in_reply_to_user_id": null,
		"in_reply_to_user_id_str": null,
		"in_reply_to_screen_name": null,
		"user": {
			"id": 25073877,
			"id_str": "25073877",
			"name": "Donald J. Trump",
			"screen_name": "realDonaldTrump",
			"location": "Washington, DC",
			"description": "45th President of the United States of America",
			"url": null,
			"entities": {
				"description": {
					"urls": []
				}
			},
			"protected": false,
			"followers_count": 27379007,
			"friends_count": 43,
			"listed_count": 67563,
			"created_at": "Wed Mar 18 13:46:38 +0000 2009",
			"favourites_count": 47,
			"utc_offset": -14400,
			"time_zone": "Eastern Time (US & Canada)",
			"geo_enabled": true,
			"verified": true,
			"statuses_count": 34705,
			"lang": "en",
			"contributors_enabled": false,
			"is_translator": false,
			"is_translation_enabled": true,
			"profile_background_color": "6D5C18",
			"profile_background_image_url": "http://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_tile": true,
			"profile_image_url": "http://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_image_url_https": "https://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
			"profile_banner_url": "https://pbs.twimg.com/profile_banners/25073877/1489657715",
			"profile_link_color": "0D5B73",
			"profile_sidebar_border_color": "BDDCAD",
			"profile_sidebar_fill_color": "C5CEC0",
			"profile_text_color": "333333",
			"profile_use_background_image": true,
			"has_extended_profile": false,
			"default_profile": false,
			"default_profile_image": false,
			"following": null,
			"follow_request_sent": null,
			"notifications": null,
			"translator_type": "regular"
		},
		"geo": null,
		"coordinates": null,
		"place": null,
		"contributors": null,
		"is_quote_status": false,
		"retweet_count": 22044,
		"favorite_count": 121874,
		"favorited": false,
		"retweeted": false,
		"lang": "en"
	}
];

/***/ }),

/***/ 148:
/***/ (function(module, exports) {

module.exports = "<app-timeline></app-timeline>\n"

/***/ }),

/***/ 149:
/***/ (function(module, exports) {

module.exports = "<app-svg (svgLoaded)=\"handleSVGLoaded($event)\"></app-svg>\n"

/***/ }),

/***/ 150:
/***/ (function(module, exports) {

module.exports = "<svg id=\"illustration\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 329.62 457.94\"><title>face</title><path id=\"face\" d=\"M831.5,382.5c-6.54-17.67,2.74-40.59-1-77s-3.48-65.48-16-66c-83.06-3.46-122.42-22.5-156-26s-49.18,53.42-61,78-16.23,40.69-26,30-23.51-12.1-26-4c-10.55,34.4-.46,42.48,4,57,7.31,23.8,7.37,30.69,20,42,3.58,3.2,3.14,19,4,23a213.17,213.17,0,0,0,31,61c6.71,9.38,57.67,85.43,131,70,29.87-6.28,67.44-21.89,76-90,5.61-41.2,16.3-33.6,20-97l.2-.57A3.22,3.22,0,0,1,831.5,382.5Z\" transform=\"translate(-530.97 -114.62)\" fill=\"#ff6f00\" fill-rule=\"evenodd\"/><path id=\"hair\" d=\"M549.5,374.5c-4.46-14.52-14.55-22.6-4-57,2.49-8.1,16.23-6.69,26,4s14.18-5.42,26-30,27.42-81.5,61-78,72.94,22.54,156,26c12.52.52,12.26,29.59,16,66s-5.54,59.33,1,77a3.22,3.22,0,0,0,.2.43c10.2-28.63,16.32-59.32,13.8-92.43,8.06,5,4.88-35.77-7-69,18.5-4.46,38.73-21.33,0-46s-72.22-67.55-163-60-125.64,85.58-129,138c-2.17,33.77-20.92,41-14,97s14,48.76,19,68c2.92,11.32,19.27,22.36,22,21-.86-4-.42-19.8-4-23C556.87,405.19,556.81,398.3,549.5,374.5Z\" transform=\"translate(-530.97 -114.62)\" fill=\"#ffe200\" fill-rule=\"evenodd\"/><g id=\"mouthBottom\"><path id=\"teeth\" d=\"M722,486h27c.7-1.62,2.25-6.08,3-6,0-.37,4.79-8.92,6-8.5-.46-.75,5.35-9.5,8-9.5,2,5,.1,5.9-5,11-1,1-4,9-5,15S732,512,722,486Z\" transform=\"translate(-530.97 -114.62)\" fill=\"#fff\" fill-rule=\"evenodd\"/><path id=\"shadow\" d=\"M711.13,484c3.88,15.63,8,38.75,31.38,37.63s29.63-19.87,31.38-40.62c-1.37,21.25-5.12,42.75-32,42.25S712,497.88,711.13,484Z\" transform=\"translate(-530.97 -114.62)\" fill-rule=\"evenodd\" opacity=\"0.3\"/></g><g id=\"mouthTop\"><path id=\"teeth-2\" data-name=\"teeth\" d=\"M722,453h8c3,3,12,3,14,1,6,3,11,1,13-1,5,0,7-1,8-4s-1-15-4-14a51.68,51.68,0,0,1-17,3C736,438,726,446,722,453Z\" transform=\"translate(-530.97 -114.62)\" fill=\"#fff\" fill-rule=\"evenodd\"/><path id=\"shadow-2\" data-name=\"shadow\" d=\"M722,453c4-7,14-15,22-15s17.34-3.37,20.38-4.25c3.88-1.12,3,2.63-8.62,4.63S734,439.13,722,453Z\" transform=\"translate(-530.97 -114.62)\" fill-rule=\"evenodd\" opacity=\"0.3\"/></g></svg>"

/***/ }),

/***/ 151:
/***/ (function(module, exports) {

module.exports = "<app-tweet [tweet]=\"tweets[currentTweetIndex]\"></app-tweet>\n\n<footer>\n  <div>\n    <input\n      type=\"range\"\n      min=\"0\"\n      step=\"1\"\n      [max]=\"tweets.length - 1\"\n      [(ngModel)]=\"currentTweetIndex\"\n      >\n\n    <input\n      type=\"range\"\n      min=\"0\"\n      max=\"0.99\"\n      step=\"0.01\"\n      [ngModel]=\"speed\"\n      (ngModelChange)=\"handleSpeedChange($event)\"\n      >\n  </div>\n\n  <span>\n    Louder tweets = oranger face.\n    By <a href=\"https://twitter.com/jessepinho\" target=\"_blank\">@jessepinho</a>.\n    {{version}}\n    <a href=\"https://github.com/jessepinho/trumpymctweetface.com\" target=\"_blank\">\n      <img src=\"/assets/github.svg\" alt=\"GitHub\" class=\"github\">\n    </a>\n  </span>\n</footer>\n"

/***/ }),

/***/ 152:
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n  <div class=\"face\">\n    <app-face [intensity]=\"intensity\"></app-face>\n  </div>\n  <a\n    href=\"https://twitter.com/realDonaldTrump/status/{{tweet?.id_str}}\"\n    target=\"_blank\"\n    class=\"text\"\n    >\n    {{tweet?.text}}\n  </a>\n</div>\n"

/***/ }),

/***/ 177:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(71);


/***/ }),

/***/ 29:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__helpers_intensity__ = __webpack_require__(81);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TwitterService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var tweets = __webpack_require__(146);
var TwitterService = (function () {
    function TwitterService() {
    }
    TwitterService.prototype.getTweets = function () {
        return tweets.map(function (_a) {
            var id_str = _a.id_str, text = _a.text;
            return ({ id_str: id_str, text: text });
        });
    };
    TwitterService.prototype.getTweetIntensity = function (tweet) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__helpers_intensity__["a" /* intensity */])(tweet.text) / this.getMaxIntensity();
    };
    TwitterService.prototype.getMaxIntensity = function () {
        if (typeof this.maxIntensity !== 'undefined') {
            return this.maxIntensity;
        }
        return this.maxIntensity = Math.max.apply(Math, tweets.map(function (_a) {
            var text = _a.text;
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__helpers_intensity__["a" /* intensity */])(text);
        }));
    };
    return TwitterService;
}());
TwitterService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])()
], TwitterService);

//# sourceMappingURL=twitter.service.js.map

/***/ }),

/***/ 70:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 70;


/***/ }),

/***/ 71:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(85);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(148),
        styles: [__webpack_require__(143)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__face_face_component__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__tweet_tweet_component__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__timeline_timeline_component__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__twitter_service__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__svg_svg_component__ = __webpack_require__(82);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__face_face_component__["a" /* FaceComponent */],
            __WEBPACK_IMPORTED_MODULE_6__tweet_tweet_component__["a" /* TweetComponent */],
            __WEBPACK_IMPORTED_MODULE_7__timeline_timeline_component__["a" /* TimelineComponent */],
            __WEBPACK_IMPORTED_MODULE_9__svg_svg_component__["a" /* SvgComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_8__twitter_service__["a" /* TwitterService */],
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_d3__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FaceComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NORMAL_SKIN_TONE = '#ffe9bf';
var NEXT_LEVEL_SKIN_TONE = '#ff6f00';
var FaceComponent = (function () {
    function FaceComponent() {
        this.faceColor = __WEBPACK_IMPORTED_MODULE_1_d3__["scaleLinear"]()
            .domain([0, 1])
            .range([NORMAL_SKIN_TONE, NEXT_LEVEL_SKIN_TONE])
            .interpolate(__WEBPACK_IMPORTED_MODULE_1_d3__["interpolateHcl"]);
        this.mouthOpening = __WEBPACK_IMPORTED_MODULE_1_d3__["scaleLinear"]()
            .domain([0, 1])
            .range([0, 30]);
    }
    FaceComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        if (changes.hasOwnProperty('intensity') && this.selection) {
            this.face
                .data([this.intensity])
                .transition()
                .duration(250)
                .attr('fill', function (d) { return _this.faceColor(d); });
            this.mouthTop
                .data([this.intensity])
                .transition()
                .duration(250)
                .attr('transform', function (d) { return "translate(0, -" + _this.mouthOpening(d) + ")"; });
            this.mouthBottom
                .data([this.intensity])
                .transition()
                .duration(250)
                .attr('transform', function (d) { return "translate(0, " + _this.mouthOpening(d) + ")"; });
        }
    };
    FaceComponent.prototype.handleSVGLoaded = function (svg) {
        this.selection = __WEBPACK_IMPORTED_MODULE_1_d3__["select"](svg);
        this.face = this.selection.select('#face');
        this.mouthTop = this.selection.select('#mouthTop');
        this.mouthBottom = this.selection.select('#mouthBottom');
    };
    return FaceComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Input */])(),
    __metadata("design:type", Number)
], FaceComponent.prototype, "intensity", void 0);
FaceComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
        selector: 'app-face',
        template: __webpack_require__(149),
        styles: [__webpack_require__(140)]
    })
], FaceComponent);

//# sourceMappingURL=face.component.js.map

/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = intensity;
function intensity(tweet) {
    var length = tweet.replace(/\s/g, '').length;
    var intenseCharacters = (tweet.match(/[A-Z\!]/g) || []).length;
    return intenseCharacters / length;
}
//# sourceMappingURL=intensity.js.map

/***/ }),

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SvgComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SvgComponent = (function () {
    function SvgComponent(element) {
        this.element = element;
        this.svgLoaded = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* EventEmitter */]();
    }
    SvgComponent.prototype.ngAfterViewInit = function () {
        var svg = this.element.nativeElement.getElementsByTagName('svg')[0];
        this.svgLoaded.emit(svg);
    };
    return SvgComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* EventEmitter */]) === "function" && _a || Object)
], SvgComponent.prototype, "svgLoaded", void 0);
SvgComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
        selector: 'app-svg',
        template: __webpack_require__(150),
        styles: [__webpack_require__(144)]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* ElementRef */]) === "function" && _b || Object])
], SvgComponent);

var _a, _b;
//# sourceMappingURL=svg.component.js.map

/***/ }),

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__twitter_service__ = __webpack_require__(29);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimelineComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var packageJSON = __webpack_require__(145);
var MAX_DURATION_PER_TWEET = 5000;
var TimelineComponent = (function () {
    function TimelineComponent(service) {
        this.service = service;
        this.currentTweetIndex = -1;
        this.speed = 0.95;
        this.tweets = this.service.getTweets();
        this.version = 'v' + packageJSON.version;
    }
    TimelineComponent.prototype.ngOnInit = function () {
        this.nextTweet();
    };
    TimelineComponent.prototype.nextTweet = function () {
        this.currentTweetIndex++;
        if (this.currentTweetIndex >= this.tweets.length) {
            this.currentTweetIndex = 0;
        }
        this.play();
    };
    TimelineComponent.prototype.play = function () {
        this.timeout = setTimeout(this.nextTweet.bind(this), MAX_DURATION_PER_TWEET * (1 - this.speed));
    };
    TimelineComponent.prototype.handleSpeedChange = function (speed) {
        this.speed = speed;
        clearTimeout(this.timeout);
        if (speed !== 0) {
            this.play();
        }
    };
    return TimelineComponent;
}());
TimelineComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
        selector: 'app-timeline',
        template: __webpack_require__(151),
        styles: [__webpack_require__(141)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__twitter_service__["a" /* TwitterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__twitter_service__["a" /* TwitterService */]) === "function" && _a || Object])
], TimelineComponent);

var _a;
//# sourceMappingURL=timeline.component.js.map

/***/ }),

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__twitter_service__ = __webpack_require__(29);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TweetComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TweetComponent = (function () {
    function TweetComponent(service) {
        this.service = service;
    }
    TweetComponent.prototype.ngOnChanges = function (changes) {
        if (changes.hasOwnProperty('tweet')) {
            this.intensity = this.service.getTweetIntensity(this.tweet);
        }
    };
    return TweetComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Input */])(),
    __metadata("design:type", Object)
], TweetComponent.prototype, "tweet", void 0);
TweetComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
        selector: 'app-tweet',
        template: __webpack_require__(152),
        styles: [__webpack_require__(142)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__twitter_service__["a" /* TwitterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__twitter_service__["a" /* TwitterService */]) === "function" && _a || Object])
], TweetComponent);

var _a;
//# sourceMappingURL=tweet.component.js.map

/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ })

},[177]);
//# sourceMappingURL=main.bundle.js.map