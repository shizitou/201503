
    console.log('tick1');
    setImmediate(function(){
        console.log('setImmediate1');
    });
    setImmediate(function(){
        console.log('setImmediate2');
    });

    process.nextTick(function(){
        console.log('tick2');
        process.nextTick(function(){
            console.log('tick3');
            setImmediate(function(){
                console.log('setImmediate3');
            });
            process.nextTick(function(){
                console.log('tick4');
            })
        })
    })
