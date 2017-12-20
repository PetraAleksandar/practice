module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    watch: {
      less: {
        files: ['style/style.less'],
        tasks: ['less'],
      }
    },
    less: {
      development: {
        options: {
          paths: []
        },
        files: {
          "build/main.css": "style/style.less" // destination file and source file
        }
      }
    }
    
  });

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default', ['watch']);
};