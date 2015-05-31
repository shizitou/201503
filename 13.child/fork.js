process.on('message',function(m){
    console.log('子进程 接收到消息'+JSON.stringify(m));
    process.send({age:6});
})