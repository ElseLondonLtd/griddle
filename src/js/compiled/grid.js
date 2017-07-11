(() => {

    let GridToggle = function () {
        this.gridToggleButton = $('#grid-toggle-button');
        this.html = $('html');

        const gridVisibleClass = 'grid-is-visible';

        this.toggleGrid = () => {
            if (this.html.hasClass(gridVisibleClass)) {
                this.html.removeClass(gridVisibleClass);
                this.gridToggleButton.removeClass('button--active');
            } else {
                this.html.addClass(gridVisibleClass);
                this.gridToggleButton.addClass('button--active');
            }
            return true;
        };

        this.gridToggleButton.on('click', this.toggleGrid);
    };

    let LayoutToggle = function () {
        this.layoutToggleButton = $('#layout-toggle-button');
        this.html = $('html');

        const layoutVisibleClass = 'layout-is-visible';

        this.toggleLayout = () => {
            if (this.html.hasClass(layoutVisibleClass)) {
                this.html.removeClass(layoutVisibleClass);
                this.layoutToggleButton.removeClass('button--active');
            } else {
                this.html.addClass(layoutVisibleClass);
                this.layoutToggleButton.addClass('button--active');
            }
            return true;
        };

        this.layoutToggleButton.on('click', this.toggleLayout);
    };

    let MetricsToggle = function () {
        this.metricsToggleButton = $('#metrics-toggle-button');
        this.html = $('html');

        const metricsVisibleClass = 'metrics-is-visible';

        this.toggleMetrics = () => {
            if (this.html.hasClass(metricsVisibleClass)) {
                this.html.removeClass(metricsVisibleClass);
                this.metricsToggleButton.removeClass('button--active');
            } else {
                this.html.addClass(metricsVisibleClass);
                this.metricsToggleButton.addClass('button--active');
            }
            return true;
        };

        this.metricsToggleButton.on('click', this.toggleMetrics);
    };

    let MetricsUpdate = function () {
        this.page = $('html');
        this.container = $('#content-container');

        this.metricPage = $('#page-width');
        this.metricContainer = $('#container-width');
        this.metricMargins = $('#outer-margins');
        this.metricAtoms = $('#atoms-per-column');
        this.metricColWidth = $('#column-width');

        setInterval(() => {

            window.requestAnimFrame(() => {
                let pageWidth = this.page.innerWidth();
                this.metricPage.html(pageWidth + 'px');

                let containerWidth = this.container.width();
                this.metricContainer.html(containerWidth + 'px');

                let margins = pageWidth - containerWidth;
                this.metricMargins.html(margins + 'px');

                let atoms = (containerWidth - 192) / 12 / 8;
                this.metricAtoms.html(atoms);

                let columnWidth = atoms * 8;
                this.metricColWidth.html(columnWidth + 'px');
            });
        }, 24);
    };

    const PageConfig = function () {
        window.requestAnimFrame = function () {
            return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function (callback) {
                window.setTimeout(callback, 1000 / 60);
            };
        }();
    };

    $(window).on('load', () => {

        PageConfig();

        let GRIDTOGGLE = new GridToggle();
        let LAYOUTTOGGLE = new LayoutToggle();
        let METRICSTOGGLE = new MetricsToggle();
        let METRICS = new MetricsUpdate();
    });
})();
