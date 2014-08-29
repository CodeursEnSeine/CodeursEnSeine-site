module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    
    imageoptim: {
      myTask: {
        src: ['images','uploads/*','assets/*']
      }
    },

    jekyll: {
      server : {
        dest: '_site',
        server : true,
        server_port : 4000,
        auto : true
      }
    },

    browserSync: {
      files: {
          src : ['_site/stylesheets/*.css']
      },
      options: {
          watchTask: true,
          ghostMode: {
              clicks: true,
              scroll: true,
              links: true,
              forms: true
          },
          server: {
              baseDir: '_site'
          }
      },
    },

    shell: {
      jekyllBuild: {
            command: 'jekyll build'
        }
    },

    connect: {
        server: {
            options: {
                port: 4000,
                base: '_site'
            }
        }
    },

    watch: {
      livereload: {
        files: [
            '_config.yml',
            '*.html',
            '*.css',
        ],
        tasks: ['sass','shell:jekyllBuild'],
        options: {
          livereload: true
        },
      },
    }
  });

  // Load the plugin that provides the tasks.
  grunt.loadNpmTasks('grunt-imageoptim');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-jekyll');
  grunt.loadNpmTasks('grunt-browser-sync');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-shell');

  // Default task(s).
  grunt.registerTask('perf', ['imageoptim',]);
  grunt.registerTask('build', ['jekyll']);  
  grunt.registerTask('default', ['shell', 'connect','browserSync','watch']);

};
