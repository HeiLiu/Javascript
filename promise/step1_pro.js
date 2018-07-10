class Promise {
    constructor (executor) {
        //  pengding 等待中
        this.status = 'pending';
        this.value = undefined;
        this.reason = undefined;
        this.onRejectedCallbacks=[];
        this.onResolveCallbacks=[];
        // value executor 调用时传过来的结果
        let resolve = (value) =>{
            if(this.status == 'pending') {
                this.status = 'resolved'
                this.value = value
                this.onResolveCallbacks.forEach(fn => fn());
            }
        }
        let reject = (reason) => {
            if(this.status == 'pending'){
                this.status == 'reject';
                this.reason = reason
                this.onRejectedCallbacks.forEach(fn => fn())
            }
        }
        // resolve，reject
        executor(resolve, reject);
        // ajax setTimeout node数据库处理 fs 文件操作
    }

    then(onFullFilled, onRejected){
        console.log(this.status)
        if(this.status == 'resolved'){
            onFullFilled(this.value);
        }
        if(this.status == 'rejected'){
            onRejected(this.resason);
        }
        if(this.status == 'pending'){
            this.onResolveCallbacks.push(()=>{
                onFullFilled(this.value);
            })
        this.onRejectedCallbacks.push(()=>{
            onRejected(this.reason)
        });
        }
    }
}

const p = new Promise((resolve, reject)=>{
    // resolve('data');
    setTimeout(()=>{
        resolve('hello world');
    },1000)
    // reject('我的天啊')
}) 
p.then((data)=>{
    console.log(data)
}, (err)=>{
    console.log(err);
})
