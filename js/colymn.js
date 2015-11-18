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

        function rep(pr) {
            return RegExp(pr + "-(col|center)-", "g");
        }

        function rez(p) {
            return RegExp(p + "-center-\\d+(px|em)", "g");
        }

        function reg(pre, mid) {
            return RegExp(pre + "-" + mid + "-\\d+-\\d+", "g");
        }

        function testy(alpha) {
            return alpha.test(q[g].className);
        }

        function matchy2(gamma) {
            return q[g].className.match(gamma).toString().match(/(\d+|px|em)/g);
        }

        function lfr(delta) {
            var j = matchy2(delta);
            var bv = j[0] / j[1] * ((100 + margin) - margin * j[1]) + margin * j[0] - margin;
            var par = parseFloat(q[g].parentNode.style.width);
            var tet = 100 / par * -(bv + margin) + "%";
            return tet;
        }

        function wid(qas) {
            var n = matchy2(qas);
            var amm = (n[0] * 100) / (n[1]) - ((n[1] - n[0]) * margin / n[1]) + "%";
            return amm;
        }

        function svgg(c) {
            while (c.nodeName !== "svg" && (c = c.parentNode) && c.nodeName !== "svg");
            return !!c;
        }
        var mmm = 0;
        for (var x = 0; x < c.length; x++) {
            if (!svgg(c[x])) {
                var q = c[x].children;
                for (var g = 0; g < q.length; ++g) {
                    var m = q[g].style;
                    var joe = "xx";
                    if ((a > pp) && (b > a) && (testy(rep("pp")))) {
                        joe = "pp";
                    }
                    if ((a > pl) && (a > b) && (testy(rep("pl")))) {
                        joe = "pl";
                    }
                    if ((a > tp) && (b > a) && (testy(rep("tp")))) {
                        joe = "tp";
                    }
                    if ((a > tl) && (a > b) && (testy(rep("tl")))) {
                        joe = "tl";
                    }
                    if ((a > dt) && (testy(rep("dt")))) {
                        joe = "dt";
                    }
                    if ((a >= hd) && (testy(rep("hd")))) {
                        joe = "hd";
                    }
                    var ss = reg(joe, "left"),
                        rr = reg(joe, "right"),
                        tt = reg(joe, "(col|offset)"),
                        uu = reg(joe, "(left|right)"),
                        yy = reg(joe, "center"),
                        zz = reg(joe, "col"),
                        ll = rep("\\w+"),
                        vv = rez(joe);

                    // resets
                    if (testy(ll)) {
                        m.position = "relative";
                        m.display = "block";
                        m.marginRight = 0;
                        m.marginLeft = 0;
                        m.float = "none";
                        m.width = 100 + "%";
                    }

                    // if fixed width
                    if (testy(vv)) {
                        var we = matchy2(vv);
                        m.display = "block";
                        m.marginRight = "auto";
                        m.marginLeft = "auto";
                        m.float = "none";
                        m.width = we[0] + we[1];
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
                        if (matchy2(zz)[0] === "0") {
                            m.display = "none";
                        }

                        // if not left or right
                        if (!testy(uu)) {

                            // if not offset
                            var yu = matchy2(tt);
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
        }
    };
    a(function() {
        colymn();
    });
})();


colymn();
