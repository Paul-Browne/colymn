(function() {

    // debounced resize event
    function a(b, c) {
        var d = [window.innerWidth];
        return window.addEventListener("resize", function() {
            var e = window.innerWidth,
                f = d.length;
            d.push(e);
            if (d[f] !== d[f - 1]) {
                clearTimeout(c);
                c = setTimeout(b, 200);
            }
        }), b;
    }
    
    colymn = function() {
        var a = window.innerWidth,
            b = window.innerHeight,
            c = document.querySelectorAll("*"),
            d = document.querySelectorAll(".colymn-clearfix"),
            margin = 4,
            pp = 300,
            pl = 300,
            tp = 440,
            tl = 640,
            dt = 1024,
            hd = 1440;
            
        // remove all clearing divs
        for (var z = 0; z < d.length; z++) {
            d[z].parentNode.removeChild(d[z]);
        }
        function reg(pre, mid) {
            return RegExp(pre + "-" + mid + "-\\d+-\\d+", "g");
        }
        function testy(alpha) {
            return alpha.test(q[g].className);
        }
        function matchy(gamma) {
            return q[g].className.match(gamma).toString().match(/\d+/g);
        }
        function lfr(delta) {
            var j = matchy(delta);
            var bv = j[0] / j[1] * ((100 + margin) - margin * j[1]) + margin * j[0] - margin;
            var par = parseFloat(q[g].parentNode.style.width);
            var tet = 100 / par * -(bv + margin) + "%";
            return tet;
        }
        function wid(qas) {
            var n = matchy(qas);
            var amm = (n[0] * 100) / (n[1]) - ((n[1] - n[0]) * margin / n[1]) + "%";
            return amm;
        }
        var mmm = 0;
        for (var x = 0; x < c.length; x++) {
            var q = c[x].children;
            for (var g = 0; g < q.length; ++g) {
                var m = q[g].style;
                var joe = "xx";
                if ((a > pp) && (b > a) && (testy(reg("pp", "c\\w+")))) {
                    joe = "pp";
                }
                if ((a > pl) && (a > b) && (testy(reg("pl", "c\\w+")))) {
                    joe = "pl";
                }
                if ((a > tp) && (b > a) && (testy(reg("tp", "c\\w+")))) {
                    joe = "tp";
                }
                if ((a > tl) && (a > b) && (testy(reg("tl", "c\\w+")))) {
                    joe = "tl";
                }
                if ((a > dt) && (testy(reg("dt", "c\\w+")))) {
                    joe = "dt";
                }
                if ((a >= hd) && (testy(reg("hd", "c\\w+")))) {
                    joe = "hd";
                }
                var ss = reg(joe, "left"),
                    rr = reg(joe, "right"),
                    tt = reg(joe, "(col|offset)"),
                    uu = reg(joe, "(left|right)"),
                    yy = reg(joe, "center"),
                    zz = reg(joe, "col"),
                    ll = reg(joe, "(col|center)");
                
                // resets
                if (testy(ll)) {
                    m.position = "relative";
                    m.display = "block";
                    m.marginRight = 0;
                    m.marginLeft = 0;
                    m.float = "none";
                    m.width = 100 + "%";
                }
                
                // if center type
                if (testy(yy)) {
                    m.width = wid(yy);
                    m.float = "none";
                    m.marginRight = "auto";
                    m.marginLeft = "auto";
                }
                
                // if column type
                if (testy(zz)) {
                    m.width = wid(zz);
                    m.float = "left";
                    m.marginLeft = margin + "%";
                    if (matchy(zz)[0] === "0") {
                        m.display = "none";
                    }
                    
                    // if not left or right
                    if (!testy(uu)) {
                    
                        // if not offset
                        var yu = matchy(tt);
                        if (!yu[2]) {
                            yu[2] = 0;
                            yu[3] = 1;
                        }
                        
                        // if first
                        if (mmm <= 0.01) {
                            m.marginLeft = 0;
                        }
                        
                        // if type offset
                        if (yu[2]) {
                            var vat = yu[2] / yu[3] * ((100 + margin) - margin * yu[3]) + margin * yu[2];
                            m.marginLeft = vat + margin + "%";
                    
                            // if first and offset
                            if (mmm <= 0.01) {
                                m.marginLeft = vat + "%";
                            }
                        }
                        mmm += (yu[0] / yu[1]) + (yu[2] / yu[3]);
                        // if last column in row
                        if (mmm >= 0.99) {
                            mmm -= 1;
                            var n = document.createElement("div");
                            n.style.clear = "both";
                            n.className = "colymn-clearfix";
                            q[g].parentNode.insertBefore(n, q[g].nextSibling);
                        }
                    }
                    // if type left
                    if (testy(ss)) {
                        m.marginRight = margin + "%";
                        m.marginLeft = lfr(ss);
                    }
                    // if type right
                    if (testy(rr)) {
                        m.float = "right";
                        m.marginLeft = margin + "%";
                        m.marginRight = lfr(rr);
                    }
                }
            }
        }
    };
    a(function() {
        colymn();
    });
})();

