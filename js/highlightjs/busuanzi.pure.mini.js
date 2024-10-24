var bszCaller, bszTag;

!function () {
    var c, d, e, a = false, b = [];

    ready = function (c) {
        return a || "interactive" === document.readyState || "complete" === document.readyState ?
            c.call(document) : b.push(function () {
                return c.call(this);
            }), this;
    };

    d = function () {
        for (var a = 0, c = b.length; a < c; a++) {
            b[a].apply(document);
        }
        b = [];
    };

    e = function () {
        if (!a) {
            a = true;
            d.call(window);
            if (document.removeEventListener) {
                document.removeEventListener("DOMContentLoaded", e, false);
            } else if (document.attachEvent) {
                document.detachEvent("onreadystatechange", e);
                if (window == window.top) {
                    clearInterval(c);
                    c = null;
                }
            }
        }
    };

    if (document.addEventListener) {
        document.addEventListener("DOMContentLoaded", e, false);
    } else if (document.attachEvent) {
        document.attachEvent("onreadystatechange", function () {
            if (/loaded|complete/.test(document.readyState)) e();
        });
        if (window == window.top) {
            c = setInterval(function () {
                try {
                    if (!a) document.documentElement.doScroll("left");
                } catch (b) {
                    return;
                }
                e();
            }, 5);
        }
    }
}();

bszCaller = {
    fetch: function (a, b) {
        var c = "BusuanziCallback_" + Math.floor(1099511627776 * Math.random());
        window[c] = this.evalCall(b);
        a = a.replace("=BusuanziCallback", "=" + c);
        scriptTag = document.createElement("SCRIPT");
        scriptTag.type = "text/javascript";
        scriptTag.defer = true;
        scriptTag.src = a;
        document.getElementsByTagName("HEAD")[0].appendChild(scriptTag);
    },
    evalCall: function (a) {
        return function (b) {
            ready(function () {
                try {
                    a(b);
                    scriptTag.parentElement.removeChild(scriptTag);
                } catch (c) {
                    bszTag.hides();
                }
            });
        };
    }
};

bszCaller.fetch("//busuanzi.ibruce.info/busuanzi?jsonpCallback=BusuanziCallback", function (a) {
    bszTag.texts(a);
    bszTag.shows();
});

bszTag = {
    bszs: ["site_pv", "page_pv", "site_uv"],
    texts: function (data) {
        this.bszs.forEach(function (id) {
            var element = document.getElementById("busuanzi_value_" + id);
            if (element) {
                element.innerHTML = data[id];
            }
        });
    },
    hides: function () {
        this.bszs.forEach(function (id) {
            var container = document.getElementById("busuanzi_container_" + id);
            if (container) {
                container.style.display = "none";
            }
        });
    },
    shows: function () {
        this.bszs.forEach(function (id) {
            var container = document.getElementById("busuanzi_container_" + id);
            if (container) {
                container.style.display = "inline";
            }
        });
    }
};

bszCaller.fetch("//busuanzi.ibruce.info/busuanzi?jsonpCallback=BusuanziCallback", function (data) {
    bszTag.texts(data);
    bszTag.shows();
});