Package.on_use(function(api){
  console.log("include lib package");
});

Package.on_test(function(api){
  console.log("test lib package");
  api.use(['munit']);
  api.add_files(['munit-test.js'], ['client', 'server']);
})


