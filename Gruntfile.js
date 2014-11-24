module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('bower.json'),

/* ############## COMPILE ET CONCA ############## */

    //Concaténer le JS
    concat: {
      options: {
        separator: ';'
      },

      dist: {
        src: ['src/**/*.js'],
        dest: 'build/js/main.js'
      }
    },

//compile le sass
    compass: {
      dist: {
        options: {
          sassDir: 'src/css/*',
          cssDir: 'build/css/*'
        }
      }
    },

/* ############## CONSTRUCTION DOSSIER FINAL ############## */

    //minifie le JS
    uglify: {
      dist: {
        files: {
          'build/js/main.min.js': ['src/js/*.js'],
          'build/vendor/angular.min.js' : ['bower_components/angular/angular.js'],
          'build/vendor/angular-route.min.js':['bower_components/angular-route/angular-route.js'],
          'build/vendor/kinetic.min.js':['bower_components/kineticjs/kinetic.js']
        }
      }
    },
    //Minifie le css
    cssmin: {
      add_banner: {
        files: {
          'build/css/main.min.css': ['src/css/*.css']
        }
      }
    },

    //vérifie les erreurs js
    jshint: {
      files: ['Gruntfile.js', 'src/**/*.js'],
      options: {
        // options here to override JSHint defaults
        globals: {
          jQuery: true,
          console: true,
          module: true,
          document: true
        }
      }
    },

    copy: {
      main: {
        cwd: 'src/',
        expand: true,
        src: '**',
        dest: 'build/',
      },
    },

    //Clean les dossiers
    clean: {
      js: ["build/js/*.js", "!build/js/*.min.js"],
      css: ["build/css/*.css", "!build/css/*.min.css"]
    },
      
    connect: {
        server: {
          options: {
            port: 9001,
            base: '.'
          }
        }
    }
  });

  /****** JS******/
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-concat');

  /****** CSS ******/
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  /****** MODIF HTML & DIRECTORY *****/
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-connect');

  grunt.registerTask('default', ['uglify','cssmin','copy','jshint','clean']);


};