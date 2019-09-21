const gulp=require('gulp');
const babel=require('gulp-babel');
//걸프 의존성을 이 곳에 씀

gulp.task('default', function(done){
	gulp.src("es6/**/*.js")
	  .pipe(babel({
		  presets: ['@babel/env']
	  }))
	.pipe(gulp.dest('dist'));

	 gulp.src("public/es6/**/*.js")
          .pipe(babel({
                  presets: ['@babel/env']
          }))
        .pipe(gulp.dest('public/dist'));
	// 걸프 작업을 여기 
  done();
});


