initComponent: function() {
  var me = this;

  // Some other setup
      
  me.callParent(arguments);
  
  me.view.cellTpl = new Ext.XTemplate([
         '<td <tpl if="column.rowSpan">rowSpan="{column.rowSpan}"</tpl> class="{tdCls}" {tdAttr} {[Ext.aria ? "id=\\"" + Ext.id() + "\\"" : ""]} style="width:{column.cellWidth}px;<tpl if="tdStyle">{tdStyle}</tpl>" tabindex="-1" {ariaCellAttr} data-columnid="{[values.column.getItemId()]}">',
'<div {unselectableAttr} class=",
'</td>'
]);
},
