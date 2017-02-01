console.log(findFactors("#666666", "#fdfeff", "$color-black", 10));

function RGBtoHSL(r, g, b) {
    r = r / 255;
    g = g / 255;
    b = b / 255;

    Xmin = Math.min(r, g, b);
    Xmax = Math.max(r, g, b);

    L = (Xmax + Xmin) / 2;

    if (Xmax === Xmin) {
        S = 0;
        H = 0;
    } else {

        if (L < 1/2)
            S = (Xmax - Xmin)/(Xmax + Xmin);
        else
            S = (Xmax - Xmin)/(2 - Xmax - Xmin);

        if (r === Xmax)
            H = (g - b)/(Xmax - Xmin);
        else if (g === Xmax)
            H = 2 + (b - r)/(Xmax - Xmin);
        else if (b === Xmax)
            H = 4 + (r - g)/(Xmax - Xmin);

        if (H < 0) {
            H = H + 6;
        }

        H = H / 6;
    }

    return Array(H, S, L);
}


/* and darken */
function lightenFactor(r, g, b, r2, g2, b2, tolerance) {
    var hsl = RGBtoHSL(r, g, b);
    var hsl2 = RGBtoHSL(r2, g2, b2);

    tolerance /= 128;

    var hue1 = hsl[0];
    var hue2 = hsl2[0];
    var saturation1 = hsl[1];
    var saturation2 = hsl2[1];
    var lightness1 = hsl[2];
    var lightness2 = hsl2[2];



    if (Math.abs(hue1 - hue2) < tolerance && Math.abs(saturation1 - saturation2) < tolerance) {
        if (lightness1 !== lightness2) {
            return Math.round((lightness2 - lightness1) * 100);
        } else {
            return null;
        }
    } else {
        return null;
    }
}

/* and tint */
function shadeFactor(r, g, b, r2, g2, b2, tolerance) {
    var factor = r2 / r;

    if (factor > 1 || factor < 0){
        return null;
    }


    if (Math.abs(g * factor - g2) < tolerance && Math.abs(b * factor - b2) < tolerance)
    {
        return 100 - Math.round(factor * 100);
    }
    else
    {
        return null;
    }
}

function tintFactor(r, g, b, r2, g2, b2, tolerance) {

    console.log("*------------------------------------*");
    console.log("Red: "+r+" Green:"+g+""+", Blue:"+b);
    console.log("--------------------------------------");
    console.log("Red: "+r2+" Green:"+g2+""+", Blue:"+b2);
    console.log("*------------------------------------*");
    console.log(r-r2+" "+", g-g2"+(g-g2)+", b-b2"+(b-b2));
    console.log("*------------------------------------*");

    var factor = Math.abs((r - r2) / (r - 255));

    console.log("tintFactor: " + factor+"\n");

    //factor = +factor||0.1;
    //pocitam tu spatne faktor, factor se rovna procentum / 100.

    if (factor > 1 || factor < 0)
        return null;

    if (Math.abs(g * (1 - factor) + (255 * factor) - g2) < tolerance && Math.abs(b * (1 - factor) + (255 * factor) - b2) < tolerance)
        return Math.round(factor * 100);
    else
        return null;
}

function cutHex(h) {return (h.charAt(0)==="#") ? h.substring(1,7):h}
function hexToR(h) {return parseInt((cutHex(h)).substring(0,2),16)}
function hexToG(h) {return parseInt((cutHex(h)).substring(2,4),16)}
function hexToB(h) {return parseInt((cutHex(h)).substring(4,6),16)}
function findFactors(color1, color2, constant, tolerance) {
    var r1 = hexToR(color1);
    var g1 = hexToG(color1);
    var b1 = hexToB(color1);
    var r2 = hexToR(color2);
    var g2 = hexToG(color2);
    var b2 = hexToB(color2);


    lighten = lightenFactor(r1, g1, b1, r2, g2, b2, tolerance);
    shade = shadeFactor(r1, g1, b1, r2, g2, b2, tolerance);
    tint = tintFactor(r1, g1, b1, r2, g2, b2, tolerance);

    //console.log(r1, g1, b1, r2, g2, b2, 30);

    var result = "";

    if (lighten != null) {
        if (lighten > 0) {
            result += "lighten(" + constant + ", " + lighten + "%);\n";
        } else {
            result += "darkness(" + constant + ", " + -lighten + "%);\n";
        }
    }
    if(shade != null) {
        result += "shade(" + constant + ", " + shade + "%);\n";
    }
    if (tint != null) {
        result += "tint(" + constant + ", " + tint + "%);\n";
    }
    if (lighten == null && shade == null && tint == null)
        result += "Zvys toleranci a ja se pokusim neco najit.";
    console.log("Mozne pouzitelne funkce: ");
    return result;
}