const base = '/';
const components = base + 'components/';
const charts = base + 'charts/';

const navItems = [{
    id: 1,
    icon: 'Home',
    label: 'Home',
    url: base
}, {
    id: 2,
    icon: 'Palette',
    label: 'Colors',
    url: base + 'colors'
}, {
    id: 3,
    icon: 'Widgets',
    label: 'Components',
    url: base + 'components',
    subIcon: 'NavigateNext',
    open: false,
    subNavItems: [{
        id: 1,
        label: 'Button',
        url: components + 'button'
    },  {
        id: 2,
        label: 'Slider',
        url: components + 'slider'
    }, {
        id: 3,
        label: 'Menu',
        url: components + 'menu'
    }, {
        id: 4,
        label: 'Tab',
        url: components + 'tab'
    }, {
        id: 5,
        label: 'AppBar',
        url: components + 'appbar'
    }, {
        id: 6,
        label: 'Expension Panel',
        url: components + 'expensionPanel'
    }, {
        id: 7,
        label: 'Progress',
        url: components + 'progress'
    }, {
        id: 8,
        label: 'Avatar',
        url: components + 'avatar'
    }, {
        id: 9,
        label: 'Icon',
        url: components + 'icon'
    }, {
        id: 10,
        label: 'List',
        url: components + 'list'
    }, {
        id: 11,
        label: 'Table',
        url: components + 'table'
    }, {
        id: 12,
        label: 'Tree View',
        url: components + 'treeView'
    }]
}, {
    id: 4,
    icon: 'Timeline',
    label: 'Charts',
    url: base + 'charts',
    subIcon: 'NavigateNext',
    open: false,
    subNavItems: [{
        id: 1,
        label: 'Arc',
        url: charts + 'arc'
    }, {
        id: 2,
        label: 'Line Mark',
        url: charts + 'lineMark'
    }, {
        id: 3,
        label: 'Bar',
        url: charts + 'bar'
    }, {
        id: 4,
        label: 'Heatmap',
        url: charts + 'heatmap'
    }, {
        id: 5,
        label: 'Area',
        url: charts + 'area'
    }, {
        id: 6,
        label: 'Label',
        url: charts + 'label'
    }]
}, {
    id: 5,
    icon: 'BlurOn',
    label: 'Iconography',
    url: base + 'iconography'
}];

export default navItems;