
function router(handle,pathName,res){
   if(typeof handle[pathName] === 'function'){
        handle[pathName](res);
   }else{
        res.writeHead(200,{'Content-Type' : 'text/plan'});
        res.write('Page Not found');
        res.end();
   }
}
exports.route = router;