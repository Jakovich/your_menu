"use strict";

module.exports = function(grunt) {
  require("load-grunt-tasks")(grunt);
  
  
  grunt.initConfig({
    less: {
      style: {
        files: {
          "css/style.css": "less/style.less"
        }
      }
    },
    
    postcss: {
      options: {
        processors: [
          require("autoprefixer")({browsers: [
            "last 2 versions",
            "last 3 Chrome versions",
            "last 3 Firefox versions",
            "last 2 Opera versions",
            "last 2 Edge versions"
          ]})
        ]
      },
      style: {src: "css/*.css"}
    },

    watch: {
      style: {
        files: ["less/**/*.less"],
        tasks: ["less", "postcss"],
        options: {
            spawn: false
          }
      }
    },
  
    
    browserSync: {
      server: {
        bsFiles: {
          src: ["*.html", "css/*.css"]
        },
        options: {
          server: '.',
          watchTask: true,
          notify: false,
          open: true,
          ui: false
        }
      }
    }

  });
  
  grunt.registerTask("server", ["browserSync", "watch"]);

};
