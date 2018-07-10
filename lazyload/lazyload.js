/**
 * @author HeiLiu
 * @date 2018年5月4日 青年节
 * @problem 解决前端图片下载优化
 */
//服务于任何图片元素 img幕后 再将origin_src设置过去
var LazyLoadImage = (function(){
    // 变量的冒泡查找
    return {
        setSrc: function(ele){
            // console.log('下载图片');
            const url = ele.getAttribute('origin_src')?ele.getAttribute('origin_src'):'';
            if(!url) return;  

            const oImg = document.createElement('img');
            oImg.style.display = 'none';
            document.body.appendChild(oImg);
            // 不会影响页面 none会离开文档流
            oImg.style.display = 'none';
            // 注册事件 当设置了图片的src之后 就会启动http请求
            // 图片下载完成之后 onload注册的时间回调函数就会被执行
            // 图片的下载是异步的 因为图片太大
            oImg.onload = function(){
                // console.log('picture loaded');
                ele.src = url;
                
                // 删除一个节点 先找到父节点 在进行删除 
                // document.body.removeChild(oImg);
                
                // ele.parentNode.removeChild(oImg);
                ele.parentNode.removeChild(this);
                console.log(document.body.childNodes[0]);
            }
            oImg.src = url;
            console.log('123');
        }
    }
})();