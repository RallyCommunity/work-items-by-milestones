Ext.define('CustomApp', {
    extend: 'Rally.app.App',
    componentCls: 'app',
    items:{ html:'<a href="https://help.rallydev.com/apps/2.0/doc/">App SDK 2.0 Docs</a>'},
    launch: function() {
        this.add({
            xtype:'rallygrid',
            enableRanking: true,
	    storeConfig: {
                models: ['UserStory', 'PortfolioItem/Feature'],
                pageSize: 200,
                limit: Infinity,
                fetch: ['Name','FormattedID','LastUpdateDate'],
                filters: [
                    {
                       property: 'Milestones.FormattedID',
                       value: 'MI1' 
                    }
                ]
		
            },
            columnCfgs: [
                {text: 'ID', dataIndex: 'FormattedID', xtype: 'templatecolumn',
                    tpl: Ext.create('Rally.ui.renderer.template.FormattedIDTemplate')},
                {text: 'Name', dataIndex: 'Name'}
            ]
        });
    }
});
