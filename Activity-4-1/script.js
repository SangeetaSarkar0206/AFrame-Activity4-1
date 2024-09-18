AFRAME.registerComponent ("color-toggle", {
  init : function () {
    // Event Listners
    let el = this.el;
    this.toggleColor = function () {
      el.setAttribute ("color","red")
    }
    this.el.addEventListener ("click", this.toggleColor);
  },
  remove:function () {
    this.el.removeEventListener ("click", this.toggleColor);

  }
})