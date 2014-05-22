/* 
 * Authour : Dulip Withanage
 * Email :  withanage@ub.uni-heidelberg.de ,dulip.withanage@gmail.com
 */

function Workspace() {
   this.left = $('#leftpane');
    this.middle = $('#middlepane');
    this.right = $('#rightpane');
    //remove classes
    
}

Workspace.prototype.formatview = function(l, m, r) {
    var width = ['col-md-3', 'col-md-6', 'col-md-9', 'col-md-12'];
   if (!l & !m & r) {
        this.right.addClass(width[3]);
       
    }
     if (m & !l & !r) {
        this.middle.addClass(width[3]);
    }
   if (l & m  & !r)  {
        this.left.addClass(width[0]);
        this.middle.addClass(width[2]);
        
    }
   if(m  & r & !l  )  {
       this.middle.addClass(width[2]);
       this.right.addClass(width[0]);
    }
    if(l & m  & r )  {
      this.left.addClass(width[0]);
      this.middle.addClass(width[1]);
      this.right.addClass(width[0]);
    }
   

};
Workspace.prototype.remove = function() {
    this.left.removeClass();
    this.middle.removeClass();
    this.right.removeClass();
    this.left.hide();
    this.middle.hide();
    this.right.hide();
};

Workspace.prototype.show = function(l, m, r) {
    
   if (l) {
        this.left.show();
    }
    if (m) {
        this.middle.show();
    }
    if (r) {
        this.right.show();
    }
};

/**
 * full view
 */
function setView(l, m, r) {
    var f = new Workspace();
    f.remove();
    f.formatview(l, m, r);
    f.show(l, m, r);
}










