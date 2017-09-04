module.exports = {
    getElement: function (value) { //Find an element with a string, jQuery object, array, or html element.
        var rtn = false;
        if (typeof value == "string") {
            rtn = document.querySelector(value);
        }else if (typeof value == "object") {
            if (value instanceof (jQuery || Array)) {
                rtn = value[0];
            }else{
                rtn = value;
            }
        }
        return rtn;
    }
};