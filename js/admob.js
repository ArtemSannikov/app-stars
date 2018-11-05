var admobid = {};

if( /(android)/i.test(navigator.userAgent) ) { // Для Android & amazon-fireos
	admobid = {
		banner: 'ca-app-pub-2338676251368727/3632990733', // or DFP format "/6253334/dfp_example_ad"
	};
}else if(/(ipod|iphone|ipad)/i.test(navigator.userAgent)) { // Для iOS
	admobid = {
		banner: 'ca-app-pub-2338676251368727/3632990733', // or DFP format "/6253334/dfp_example_ad"
	};
}else{ // Для  Windows phone
	admobid = {
		banner: 'ca-app-pub-2338676251368727/3632990733', // or DFP format "/6253334/dfp_example_ad"
	};
}

//Создаём баннер
function initApp() {
	// this will create a banner on startup
	AdMob.createBanner( {
		adId: admobid.banner,
		position: AdMob.AD_POSITION.BOTTOM_CENTER,
		autoShow: true
		//isTesting: true, //если приложение в тестовом режиме и нужно показывать тестовую рекламу 
		overlap: false,
		offsetTopBar: false,
		bgColor: 'black'
	});
}

//Выводим баннер
if(( /(ipad|iphone|ipod|android|windows phone)/i.test(navigator.userAgent) )) {
	document.addEventListener('deviceready', initApp, false);
}else{
	initApp();
}