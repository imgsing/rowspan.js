initComponent: function() {
  var me = this;

  // Some other setup
      
  me.callParent(arguments);

  // Here's the trick. The view instance is constructed but not yet completely initialized.
  // The template code is copied, but the bold, red part is added
  // I didn't find another way to change the view's cellTpl for a specific grid/view
  me.view.cellTpl = new Ext.XTemplate([
         '<td <tpl if="column.rowSpan">rowSpan="{column.rowSpan}"</tpl> class="{tdCls}" {tdAttr} {[Ext.aria ? "id=\\"" + Ext.id() + "\\"" : ""]} style="width:{column.cellWidth}px;<tpl if="tdStyle">{tdStyle}</tpl>" tabindex="-1" {ariaCellAttr} data-columnid="{[values.column.getItemId()]}">',
'<div {unselectableAttr} class="' + Ext.baseCSSPrefix + 'grid-cell-inner {innerCls}" ',
'style="text-align:{align};<tpl if="style">{style}</tpl>" {ariaCellInnerAttr}>{value}</div>',
'</td>'
]);
},
