var addStyleJs = (function (dom) {
    var cache = {}, /*缓存加载过的css或者js*/
        funct;
    /**
     * HTML动态加载css或者js
     * @path {String} src 或 link 地址必须带有后缀名.js或者.css
     * @callback {Function} 加载成功的回掉函数
     * */
    funct = function (path, callback) {
        if (!path) { /*检查路径是否为空*/
            throw new Error("请输入path路径!");
        };
        var fn = Object.prototype.toString.call(callback) == "[object Function]" ? callback : function () { };
        console.log(path)
        if (".js" == path.substr(-3)) { /*检查路径后缀名是否为.js*/
            addJs(path, fn);
        } else if (".css" == path.substr(-4)) { /*检查路径后缀名是否为.css*/
            addCss(path, fn);
        } else {
            throw new Error('请输入正确的path路径!');
        }
    };
    /**
     * HTML 动态添加 CSS
     * @path {String}  link 地址必须带有后缀名.css
     * @callback {Function} 加载成功的回掉函数
     * */
    function addCss(path, callback) {
        if (!checkcache(path)) { /*检查是否加载过*/
            var head = dom.getElementsByTagName('head')[0];
            var link = dom.createElement('link');
            link.href = path;
            link.rel = 'stylesheet';
            link.type = 'text/css';
            head.appendChild(link); /*添加到HTML中*/
            link.onload = link.onreadystatechange = function () { /*判断是否加载成功*/
                if (!this.readyState || this.readyState === "loaded" || this.readyState === "complete") {
                    link.onload = link.onreadystatechange = null;
                    callback();
                }
            };
            cache[path] = 1; /*存储加载过的css路径,值设为1*/
        }
    };
    /**
     * HTML动态加载js
     * @path {String} src 地址必须带有后缀名.js
     * @callback {Function} 加载成功的回掉函数
     * */
    function addJs(path, callback) {
        if (!checkcache(path)) { /*检查是否加载过*/
            var head = dom.getElementsByTagName('head')[0];
            var script = dom.createElement('script');
            script.src = path;
            script.type = 'text/javascript';
            head.appendChild(script); /*添加到HTML中*/
            script.onload = script.onreadystatechange = function () { /*判断是否加载成功*/
                if (!this.readyState || this.readyState === "loaded" || this.readyState === "complete") {
                    script.onload = script.onreadystatechange = null;
                    callback();
                }
            };
            cache[path] = 1; /*存储加载过的js路径,值设为1*/
        }
    };
    /**
     * 检查是否加载
     * @path {String} 路径
     * */
    function checkcache(path) {
        if (cache[path]) { /*判断是否加载过的js路径*/
            return true;
        } else {
            return false;
        }
    };
    return funct;
}(document));
// addStyleJs("https://www.delac.io/WOW/dist/wow.min.js")
// addStyleJs("https://wowjs.uk/css/libs/animate.css")

// addStyleJs("https://www.jq22.com/demo/jqueryCountup20161120/js/jquery.countup.min.js")
addStyleJs("https://www.jq22.com/demo/jqueryCountup20161120/js/jquery.waypoints.min.js")
addStyleJs("https://60.205.202.147/static/countup.js")
$(document).ready(function () {
    const option={
        delay: 10,
        time: 2000,
    }
    //科研人员
    $($('.subName.defProSet')[0]).html(`<span class="personnel-num">${100}</span>+`)
    //企业孵化
    $($('.subName.defProSet')[1]).html(`<span class="enterprises-num">${500}</span>+`)
    //年产值
    $($('.subName.defProSet')[2]).html(`<span class="outputvalue-num">${60}</span>亿`)
    //知识产权
    $($('.subName.defProSet')[3]).html(`<span class="propertyRight-num">${1000}</span>+`)
    
    $('.personnel-num').countUp(option)
    $('.enterprises-num').countUp(option)
    $('.outputvalue-num').countUp(option)
    $('.propertyRight-num').countUp(option)

    console.log($('banner_style_11_1649667969232'));
    console.log(111)
    console.log($(document))
})



