"use strict";

module.exports = function(grunt) {
  require("load-grunt-tasks")(grunt);
  grunt.loadNpmTasks('grunt-spritesmith');
  
  
  grunt.initConfig({
    less: {
      style: {
        files: {
          "build/css/style.css": "less/style.less"
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
      style: {src: "build/css/*.css"}
    },

    watch: {
      html: {
        files: ["*.html"],
        tasks: ["copy:html"],
        options: {spawn: false}
      },
      style: {
        files: ["less/**/*.less"],
        tasks: ["less", "postcss", "csso"],
        options: {
            spawn: false
          }
      }
    },
  
    
    browserSync: {
      server: {
        bsFiles: {
          src: ["build/*.html", "build/css/*.css"]
        },
        options: {
          server: './build',
          watchTask: true,
          notify: false,
          open: true,
          ui: false
        }
      }
    },
    
    clean: {
      build: ["build"]
    },
    
    copy: {
      build: {
        files: [{
          expand: true,
          src: [
            "fonts/**/*.{woff,woff2}",
            "img/**",
            "js/**",
            "*.html"
          ],
          dest: "build"
        }]
      },
      html: {
        files: [{
          expand: true,
          src: ["*.html"],
          dest: "build"
        }]
      }
    },
    
    csso: {
      style: {
        options: {
          report: "gzip"
        },
        files: {
          "build/css/style.min.css": ["build/css/style.css"]
        }
      }
    },
    
    uglify: {
      js_min: {
        files: {
          "build/js/personal-nav.min.js": ["build/js/personal-nav.js"],
          "build/js/kitchen-slider.min.js": ["build/js/kitchen-slider.js"],
          "build/js/basket-nav.min.js": ["build/js/basket-nav.js"],
          "build/js/index.min.js": ["build/js/index-control.js", "build/js/index-slider.js"],
          "build/js/personal-points.min.js": ["build/js/personal-nav.js", "build/js/gift-slider.js"],
          "build/js/personal-info.min.js": ["build/js/personal-nav.js", "build/js/personal-info-edit.js"],
          "build/js/faq.min.js": ["build/js/faq.js"],
          "build/js/personal-subscribe.min.js": ["build/js/personal-nav.js",  "build/js/subscribe-popup.js", "build/js/subscribe-counter.js"]
        }
      }
    },
    
    imagemin: {
      images: {
        options: {
          optimizationLevel: 3
        },
        files: [{
          expand: true,
          src: ["build/img/**/*.{png,jpg,gif}"]
        }]
      }
    },
    
    svgmin: {
      symbols: {
        files: [{
          expand: true,
          src: ["build/img/icons/*.svg"]
        }]
      }
    },
    
    sprite:{
      index: {
        src: "img/index-icons/*.png",
        dest: "img/sprite-index.png",
        destCss: "less/sprite-index.less",
        padding: 2
      },
      header: {
        src: "img/header-icons/*.png",
        dest: "img/sprite-header.png",
        destCss: "less/sprite-header.less",
        padding: 2
      } 
    }


  });
  
  grunt.registerTask("server", ["browserSync", "watch"]);
  grunt.registerTask("build",[
    "clean",
    "copy",
    "less",
    "postcss",
    "csso",
    "uglify",
    "svgmin"

  ]);


};
