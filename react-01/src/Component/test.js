var log1 = function(msg, result) {
	console.log('Log: ',msg);
	result(msg);
}

log1('부팅 시작', function(result){
	log1('네트워크 설정 중', function(result){
		log1('유저 프로필 설정 중', function(result){
			console.log('마지막 로그: ', result);
		})
	})
});

var log2 = function(msg) {
	return new Promise(function(resolve, reject){
		console.log('Log: ',msg);
		resolve(msg);
	});
}

log2('부팅 시작').then(function(result){
	return log2('네트워크 설정 중');
}).then(function(result){
	return log2('유저 프로필 설정 중');
}).then(function(result){
	console.log('마지막 로그: ',result)
}).catch(function(error){
	console.log(error);
})

var log3 = function(msg){
	return new Promise(function(resolve,reject){
		resolve(msg);
	})
}

var logger=async function(){
	console.log('Log: ',await log3('부팅 시작'));
	console.log('Log: ',await log3('네트워크 설정 중'));
	console.log('Log: ',await log3('유저 프로필 설정 중'));
	return '유저 프로필 설정 중';
}

logger().then(function(result){
	console.log('마지막 로그: '+ result);
})