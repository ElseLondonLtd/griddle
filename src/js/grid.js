(() => {

    let GridToggle = function() {
        this.gridToggleButton = $('#grid-toggle-button')
        this.html = $('html')

        const gridVisibleClass = 'grid-is-visible'

        this.toggleGrid = () => {
            if (this.html.hasClass( gridVisibleClass )) {
                this.html.removeClass( gridVisibleClass )
                this.gridToggleButton.removeClass('button--active')
            } else {
                this.html.addClass( gridVisibleClass )
                this.gridToggleButton.addClass('button--active')
            }
            return true 
        }

        this.gridToggleButton.on('click', this.toggleGrid)
    }

    let LayoutToggle = function() {
        this.layoutToggleButton = $('#layout-toggle-button')
        this.html = $('html')

        const layoutVisibleClass = 'layout-is-visible'

        this.toggleLayout = () => {
            if (this.html.hasClass( layoutVisibleClass )) {
                this.html.removeClass( layoutVisibleClass )
                this.layoutToggleButton.removeClass('button--active')
            } else {
                this.html.addClass( layoutVisibleClass )
                this.layoutToggleButton.addClass('button--active')
            }
            return true 
        }

        this.layoutToggleButton.on('click', this.toggleLayout)
    }
    
    $(window).on('load', () => {
        let GRIDTOGGLE      = new GridToggle()
        let LAYOUTTOGGLE    = new LayoutToggle()
    })
})()