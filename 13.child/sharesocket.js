process.on('message',function(m,socket){
    if(m === 'socket'){
        socket.end('子进程处理');
    }
});