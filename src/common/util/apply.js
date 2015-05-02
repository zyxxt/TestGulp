/**
 * Created by zyt on 15-5-2.
 */

function apply (src, dest, defaults) {
    src = src || {};
    if (defaults) {
        apply(src, defaults);
    }
    if (dest) {
        for (var key in dest) {
            if (dest.hasOwnProperty(key)) {
                src[key] = dest[key];
            }
        }
    }

    return src;
}
