

(function () {
    'use strict';

    var ICONS = {
        'moon': '<path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"/>',
        'sun': '<circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/>',
        'download': '<path d="M12 15V3"/><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="m7 10 5 5 5-5"/>',
        'zap': '<path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z"/>',
        'copy': '<rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>',
        'image': '<rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/>',
        'minimize-2': '<path d="m14 10 7-7"/><path d="M20 10h-6V4"/><path d="m3 21 7-7"/><path d="M4 14h6v6"/>',
        'pencil': '<path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"/><path d="m15 5 4 4"/>',
        'file-code': '<path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"/><path d="M14 2v5a1 1 0 0 0 1 1h5"/><path d="M10 12.5 8 15l2 2.5"/><path d="m14 12.5 2 2.5-2 2.5"/>',
        'layout-grid': '<rect width="7" height="7" x="3" y="3" rx="1"/><rect width="7" height="7" x="14" y="3" rx="1"/><rect width="7" height="7" x="14" y="14" rx="1"/><rect width="7" height="7" x="3" y="14" rx="1"/>',
        'layers': '<path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"/><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"/><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"/>',
        'terminal': '<path d="M12 19h8"/><path d="m4 17 6-6-6-6"/>',
        'share-2': '<circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="m8.59 13.51 6.83 3.98"/><path d="m15.41 6.51-6.82 3.98"/>',
        'briefcase': '<path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/><rect width="20" height="14" x="2" y="6" rx="2"/>',
        'shield-check': '<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/>',
        'monitor': '<rect width="20" height="14" x="2" y="3" rx="2"/><line x1="8" x2="16" y1="21" y2="21"/><line x1="12" x2="12" y1="17" y2="21"/>',
        'notebook-text': '<path d="M2 6h4"/><path d="M2 10h4"/><path d="M2 14h4"/><path d="M2 18h4"/><rect width="16" height="20" x="4" y="2" rx="2"/><path d="M9.5 8h5"/><path d="M9.5 12H16"/><path d="M9.5 16H14"/>',
        'database-backup': '<ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 12a9 3 0 0 0 5 2.69"/><path d="M21 9.3V5"/><path d="M3 5v14a9 3 0 0 0 6.47 2.88"/><path d="M12 12v4h4"/><path d="M13 20a5 5 0 0 0 9-3 4.5 4.5 0 0 0-4.5-4.5c-1.33 0-2.54.54-3.41 1.41L12 16"/>',
        'history': '<path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/><path d="M12 7v5l4 2"/>',
        'bug': '<path d="m8 2 1.88 1.88"/><path d="M14.12 3.88 16 2"/><path d="M9 7.13v-1a3.003 3.003 0 1 1 6 0v1"/><path d="M12 20c-3.3 0-6-2.7-6-6v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3c0 3.3-2.7 6-6 6z"/><path d="M12 20v-9"/><path d="M6.53 9C4.6 8.8 3 7.1 3 5"/><path d="M6 13H2"/><path d="M3 21c0-2.1 1.7-3.9 3.8-4"/><path d="M20.97 5c0 2.1-1.6 3.8-3.5 4"/><path d="M22 13h-4"/><path d="M17.2 17c2.1.1 3.8 1.9 3.8 4"/>',
        'cpu': '<path d="M12 20v2"/><path d="M12 2v2"/><path d="M17 20v2"/><path d="M17 2v2"/><path d="M2 12h2"/><path d="M2 17h2"/><path d="M2 7h2"/><path d="M20 12h2"/><path d="M20 17h2"/><path d="M20 7h2"/><path d="M7 20v2"/><path d="M7 2v2"/><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="8" y="8" width="8" height="8" rx="1"/>',
        'star': '<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"/>',
        'palette': '<circle cx="13.5" cy="6.5" r=".5"/><circle cx="17.5" cy="10.5" r=".5"/><circle cx="8.5" cy="7.5" r=".5"/><circle cx="6.5" cy="12.5" r=".5"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/>',
        'usb': '<circle cx="10" cy="7" r="1"/><circle cx="4" cy="20" r="1"/><path d="M4.7 19.3 19 5"/><path d="m21 3-3 1 2 2Z"/><path d="M9.26 7.68 5 12l2 5"/><path d="m10 14 5 2 3.5-3.5"/><path d="m18 12 1-1 1 1-1 1Z"/>',
        'play': '<path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"/>',
        'folder-search': '<path d="M10.7 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v4.1"/><path d="m21 21-1.9-1.9"/><circle cx="17" cy="17" r="3"/>',
        'package-open': '<path d="M12 22v-9"/><path d="M15.17 2.21a1.67 1.67 0 0 1 1.63 0L21 4.57a1.93 1.93 0 0 1 0 3.36L8.82 14.79a1.655 1.655 0 0 1-1.64 0L3 12.43a1.93 1.93 0 0 1 0-3.36z"/><path d="M20 13v3.87a2.06 2.06 0 0 1-1.11 1.83l-6 3.08a1.93 1.93 0 0 1-1.78 0l-6-3.08A2.06 2.06 0 0 1 4 16.87V13"/><path d="M21 12.43a1.93 1.93 0 0 0 0-3.36L8.83 2.2a1.64 1.64 0 0 0-1.63 0L3 4.57a1.93 1.93 0 0 0 0 3.36l12.18 6.86a1.636 1.636 0 0 0 1.63 0z"/>',
        'database': '<ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5V19A9 3 0 0 0 21 19V5"/><path d="M3 12A9 3 0 0 0 21 12"/>',
        'lock': '<rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>',
        'arrow-up': '<path d="M12 19V5"/><path d="m5 12 7-7 7 7"/>',
        'circle-question-mark': '<circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><path d="M12 17h.01"/>',
        'globe': '<circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/>',
        'heart': '<path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"/>',
        'menu': '<path d="M4 5h16"/><path d="M4 12h16"/><path d="M4 19h16"/>',
        'x': '<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',
        'info': '<circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/>',
        'flask-conical': '<path d="M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2"/><path d="M6.453 15h11.094"/><path d="M8.5 2h7"/>',
        'triangle-alert': '<path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/><path d="M12 9v4"/><path d="M12 17h.01"/>',

        'trash-2': '<path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/>',

    };

    var FILL_ICONS = {
        'github': {
            vb: '0 0 512 499.368',
            body: '<path fill="currentColor" fill-rule="nonzero" d="M256.003 0C114.555 0 0 114.555 0 256.003c0 113.286 73.28 208.961 175.038 242.865 12.796 2.247 17.586-5.433 17.586-12.153 0-6.077-.309-26.225-.309-47.686-64.313 11.844-80.941-15.674-86.058-30.055-2.896-7.37-15.359-30.1-26.269-36.177-8.948-4.808-21.752-16.652-.31-16.961 20.168-.309 34.574 18.564 39.382 26.244 23.038 38.732 59.839 27.828 74.555 21.101 2.227-16.627 8.947-27.828 16.318-34.239-56.968-6.386-116.467-28.471-116.467-126.399 0-27.827 9.907-50.866 26.225-68.787-2.562-6.41-11.51-32.655 2.562-67.853 0 0 21.436-6.72 70.409 26.244 20.483-5.767 42.227-8.638 63.998-8.638 21.751 0 43.52 2.896 63.997 8.638 48.973-33.279 70.39-26.244 70.39-26.244 14.09 35.192 5.117 61.443 2.562 67.853 16.318 17.921 26.244 40.625 26.244 68.787 0 98.237-59.84 119.988-116.801 126.399 9.282 8.014 17.277 23.373 17.277 47.371 0 34.238-.309 61.751-.309 70.389 0 6.721 4.808 14.735 17.586 12.179C438.739 464.964 512 368.955 512 256.003 512 114.555 397.445 0 256.003 0z"/>'
        }
    };

    function icon(name, size) {
        var f = FILL_ICONS[name];
        if (f) {
            return '<svg xmlns="http://www.w3.org/2000/svg" width="' + (size || 24) +
                '" height="' + (size || 24) + '" viewBox="' + f.vb + '"' +
                ' aria-hidden="true" focusable="false">' + f.body + '</svg>';
        }
        return '<svg xmlns="http://www.w3.org/2000/svg" width="' + (size || 24) +
            '" height="' + (size || 24) + '" viewBox="0 0 24 24" fill="none" ' +
            'stroke="currentColor" stroke-width="2" stroke-linecap="round" ' +
            'stroke-linejoin="round" aria-hidden="true" focusable="false">' +
            (ICONS[name] || '') + '</svg>';
    }

    var EXT = {
        github:    'https://github.com/errantlauncher/ErrantLauncher',
        releases:  'https://github.com/errantlauncher/ErrantLauncher/releases',
        apiReleases: 'https://api.github.com/repos/errantlauncher/ErrantLauncher/releases'
    };

    var L10N = {
        en: {
            navDownload: 'Download', navGuide: 'Documentation', navSupport: 'Help',
            navShots: 'Screenshots',
            support: 'Donate',
            copied: 'Copied',
            footerTag: 'Portable launcher for Windows. Free, no installation.',
            fProduct: 'Product', fLegal: 'Legal', fSupport: 'Support',
            fDownload: 'Download', fGuide: 'Documentation',
            fLicense: 'License', fThirdParty: 'Third-party licenses',
            fPrivacy: 'Privacy', fEula: 'EULA', relBeta: 'Beta',
            fGithub: 'GitHub', fIssue: 'Report a problem', fHelp: 'Help',
            fDonate: 'Support the project',
            copy: '© 2026 Errant Launcher.',
            copyNote: 'Icons: Lucide (ISC).',
            shareTitle: 'Errant Launcher',
            shareText: 'Errant Launcher\nEverything you need. In one place.\nApps, files, scripts, commands, and links — organized into quick-launch cards. Arrange everything your way and keep the tools you need close at hand.',
            shareDone: 'Link copied',
            docsNav: ['User guide', 'FAQ & troubleshooting',
                      'System requirements', 'Data & portability'],
            themeDark: 'Dark', themeLight: 'Light'
        },
        ru: {
            navDownload: 'Скачать', navGuide: 'Документация', navSupport: 'Помощь',
            navShots: 'Скриншоты',
            support: 'Поддержать',
            copied: 'Скопировано',
            footerTag: 'Портативный лаунчер для Windows. Бесплатно, без установки.',
            fProduct: 'Продукт', fLegal: 'Правовая информация', fSupport: 'Поддержка',
            fDownload: 'Скачать', fGuide: 'Документация',
            fLicense: 'Лицензия', fThirdParty: 'Сторонние лицензии',
            fPrivacy: 'Конфиденциальность', fEula: 'EULA', relBeta: 'Бета',
            fGithub: 'GitHub', fIssue: 'Сообщить о проблеме', fHelp: 'Помощь',
            fDonate: 'Поддержать проект',
            copy: '© 2026 Errant Launcher.',
            copyNote: 'Иконки: Lucide (ISC).',
            shareTitle: 'Errant Launcher',
            shareText: 'Errant Launcher\nВсё нужное. В одном месте.\nПрограммы, файлы, скрипты, команды и ссылки — в карточках быстрого запуска. Организуй всё по-своему и держи нужные инструменты под рукой.',
            shareDone: 'Ссылка скопирована',
            docsNav: ['Руководство пользователя', 'FAQ и решение проблем',
                      'Системные требования', 'Данные и переносимость'],
            themeDark: 'Тёмная', themeLight: 'Светлая'
        },
    };

    var LANGS = [
        ['en', 'English'], ['ru', 'Р�?�?�?кий']
    ];
    var T = L10N.en;

    function sub(root, path) {
        return root + path;
    }

    function navLinks(root) {
        return [
            { id: 'download',    href: loc(root, 'download/index.html'),    label: T.navDownload, ic: 'download' },
            { id: 'docs',        href: loc(root, 'docs/guide/index.html'),        label: T.navGuide,    ic: 'notebook-text' },
            { id: 'shots',       href: loc(root, 'screenshots/index.html'),   label: T.navShots,    ic: 'image' },
            { id: 'support',     href: loc(root, 'help/index.html'),     label: T.navSupport,  ic: 'circle-question-mark' }
        ];
    }

    var LANG = 'en';
    function langPrefix(l) { return l === 'en' ? '' : l + '/'; }

    function loc(root, path) { return root + langPrefix(LANG) + path; }

    function renderLangMenu(root, pageId) {
        var cur = (document.querySelector('[data-site-header]') || {}).dataset || {};
        var lang = cur.lang || 'en';
        var items = LANGS.map(function (l) {
            var href = root + langPrefix(l[0]) + (pageId ? pageId + '/index.html' : 'index.html');
            var on = l[0] === lang ? ' class="on"' : '';
            return '<a href="' + href + '"' + on + '>' + l[0].toUpperCase() + '</a>';
        }).join('');
        return '<span class="lang-switch">' + items + '</span>';
    }

    function renderHeader(root, active, pageId) {
        var nav = navLinks(root).map(function (l) {
            var cur = l.id === active ? ' class="on" aria-current="page"' : '';
            return '<a href="' + l.href + '"' + cur + '>' + icon(l.ic, 16) + '<span>' + l.label + '</span></a>';
        }).join('');
        var actions =
            '<a href="' + loc(root, 'donate/index.html') + '"' +
                (active === 'donate' ? ' class="on" aria-current="page"' : '') + '>' +
                icon('heart', 16) + '<span>' + T.support + '</span></a>' +
            '<a href="' + EXT.github + '" rel="noopener" title="GitHub">' +
                icon('github', 16) + '<span>GitHub</span></a>';
            actions += renderLangMenu(root, pageId) + '<span class="theme-toggle">' +
                '<button type="button" data-theme-set="dark" title="' + T.themeDark + '">' + icon('moon', 16) + '</button>' +
                '<button type="button" data-theme-set="light" title="' + T.themeLight + '">' + icon('sun', 16) + '</button>' +
            '</span>';
        return '<div class="container">' +
            '<a class="brand" href="' + loc(root, 'index.html') + '">' +
                '<img src="' + root + 'assets/img/logo.svg" alt="" width="24" height="25">' +
                '<span>Errant <span class="accent">Launcher</span></span>' +
            '</a>' +
            '<nav class="main-nav">' + nav + '</nav>' +
            '<div class="header-actions">' + actions + '</div>' +
            '<button class="nav-burger" type="button" data-nav-open aria-label="Menu">' + icon('menu', 22) + '</button>' +
        '</div>' +
        '<div class="nav-backdrop" data-nav-backdrop></div>' +
        '<div class="nav-drawer" data-nav-drawer>' +
            '<button class="nav-close" type="button" data-nav-close aria-label="Close">' + icon('x', 20) + '</button>' +
            '<nav class="main-nav">' + nav + '</nav>' +
            '<div class="header-actions">' + actions + '</div>' +
        '</div>';
    }

    function renderFooter(root) {
        var t = T;
        return '<div class="container">' +
            '<div class="footer-grid">' +
                '<div class="footer-brand">' +
                    '<img src="' + root + 'assets/img/logo.svg" alt="Errant Launcher">' +
                    '<p>' + t.footerTag + '</p>' +
                '</div>' +
                '<div class="footer-col"><b>' + t.fProduct + '</b>' +
                    '<a href="' + loc(root, 'download/index.html') + '">' + t.fDownload + '</a>' +
                    '<a href="' + loc(root, 'docs/guide/index.html') + '">' + t.fGuide + '</a>' +
                    '<a href="' + loc(root, 'donate/index.html') + '">' + t.fDonate + '</a>' +
                    '<a href="' + EXT.github + '" rel="noopener">' + t.fGithub + '</a>' +
                '</div>' +
                '<div class="footer-col"><b>' + t.fLegal + '</b>' +
                    '<a href="' + loc(root, 'license/index.html') + '">' + t.fLicense + '</a>' +
                    '<a href="' + loc(root, 'third-party-notices/index.html') + '">' + t.fThirdParty + '</a>' +
                    '<a href="' + loc(root, 'privacy/index.html') + '">' + t.fPrivacy + '</a>' +
                    '<a href="' + loc(root, 'eula/index.html') + '">' + t.fEula + '</a>' +
                '</div>' +
                '<div class="footer-col"><b>' + t.fSupport + '</b>' +
                    '<a href="' + loc(root, 'help/index.html') + '">' + t.fHelp + '</a>' +
                    '<a href="' + loc(root, 'support/index.html') + '">' + t.fIssue + '</a>' +
                '</div>' +
            '</div>' +
            '<div class="footer-bottom">' +
                '<span>' + t.copy + '</span>' +
                '<span>' + t.copyNote + '</span>' +
            '</div>' +
        '</div>';
    }

    var DOCS_SLUGS = ['guide', 'faq', 'requirements', 'data'];
    var DOCS_ICONS = { guide: 'notebook-text', faq: 'circle-question-mark',
                       requirements: 'monitor', data: 'database-backup' };

    function renderDocsNav(el, root) {
        var active = el.dataset.active || '';
        var base = loc(root, 'docs/');
        el.innerHTML = DOCS_SLUGS.map(function (s, i) {
            var href = base + (s ? s + '/index.html' : 'index.html');
            return '<a href="' + href + '"' +
                (s === active ? ' class="active" aria-current="page"' : '') +
                '>' + icon(DOCS_ICONS[s], 20) + '<span>' + T.docsNav[i] + '</span></a>';
        }).join('');
    }

    var _relPromise;
    function getOfferedRelease() {
        if (!_relPromise) {
            var MAX_PAGES = 5, stable = null, beta = null;
            var loadPage = function (page) {
                return fetch(EXT.apiReleases + '?per_page=100&page=' + page).then(function (r) {
                    if (!r.ok) throw new Error('HTTP ' + r.status);
                    return r.json();
                }).then(function (list) {
                    (list || []).forEach(function (rel) {
                        if (rel.draft) return;
                        if (!rel.prerelease && !stable) stable = rel;
                        if (rel.prerelease && !beta) beta = rel;
                    });
                    if (stable || !list || list.length < 100 || page >= MAX_PAGES) return;
                    return loadPage(page + 1);
                });
            };
            _relPromise = loadPage(1).then(function () {
                return stable || beta;
            }).catch(function () { return null; });
        }
        return _relPromise;
    }

    function initLatestRelease() {
        var wrap = document.querySelector('[data-latest]');
        if (!wrap) return;

        var t = T;

        getOfferedRelease().then(function (d) {
            if (!d) return;
            var assets = d.assets || [];
            var pick = function (archRe) {
                var good = function (a) {
                    return archRe.test(a.name) && !/arm/i.test(a.name);
                };
                return assets.filter(function (a) { return /\.exe$/i.test(a.name) && good(a); })[0] ||
                       assets.filter(function (a) { return /\.zip$/i.test(a.name) && good(a); })[0];
            };
            var byArch = { x64: pick(/x64/i) };
            if (!byArch.x64) return;

            wrap.querySelectorAll('[data-rel-ver]').forEach(function (el) {
                el.textContent = (d.tag_name || '').replace(/^v/i, '');
            });
            wrap.querySelectorAll('[data-rel-badge]').forEach(function (el) {
                el.hidden = !d.prerelease;
                if (d.prerelease) el.textContent = t.relBeta;
            });
            Object.keys(byArch).forEach(function (arch) {
                var a = byArch[arch];
                var card = wrap.matches('[data-arch="' + arch + '"]') ? wrap
                           : wrap.querySelector('[data-arch="' + arch + '"]');
                if (!card) return;
                var btn = card.querySelector('[data-dl]');
                btn.href = a.browser_download_url;
                btn.title = a.name;
                var size = card.querySelector('[data-size]');
                if (size && a.size) size.textContent = '· ' + (a.size / 1048576).toFixed(0) + ' MB';
                var row = card.querySelector('[data-sha-row]');
                var sha = card.querySelector('[data-sha]');
                var digest = (a.digest || '').replace(/^sha256:/i, '');
                if (sha && row && digest) {
                    sha.textContent = digest;
                    var cp = row.querySelector('[data-copy]');
                    if (cp) { cp.dataset.copy = digest; cp.disabled = false; }
                }
            });
        });
    }

    function initCopyButtons(t) {
        document.addEventListener('click', function (e) {
            var btn = e.target.closest('[data-copy]');
            if (!btn) return;
            var label = btn.textContent;
            var done = function () {
                btn.textContent = t.copied;
                setTimeout(function () { btn.textContent = label; }, 1500);
            };
            if (navigator.clipboard && navigator.clipboard.writeText) {
                navigator.clipboard.writeText(btn.dataset.copy).then(done);
            } else {
                var ta = document.createElement('textarea');
                ta.value = btn.dataset.copy;
                document.body.appendChild(ta);
                ta.select();
                document.execCommand('copy');
                ta.remove();
                done();
            }
        });
    }



    document.addEventListener('DOMContentLoaded', function () {
        var header = document.querySelector('[data-site-header]');
        var footer = document.querySelector('[data-site-footer]');
        var ds = ((header || footer || {}).dataset) || {};
        var root = ds.root || '';
        var lang = ds.lang || 'en';
        LANG = lang;
        T = L10N[lang] || L10N.en;

        if (header) {
            header.innerHTML = renderHeader(root, header.dataset.active, header.dataset.page || '');
        }
        if (footer) footer.innerHTML = renderFooter(root);

        document.querySelectorAll('[data-docs-nav]').forEach(function (el) {
            renderDocsNav(el, el.dataset.root || root);
        });
        initLatestRelease();
        initCopyButtons(T);

        var theme = document.documentElement.dataset.theme || 'dark';
        var setTheme = function (v) {
            document.documentElement.dataset.theme = v;
            try { localStorage.setItem('el-theme', v); } catch (e) {}
            document.querySelectorAll('[data-theme-set]').forEach(function (b) {
                b.classList.toggle('on', b.dataset.themeSet === v);
            });
        };
        document.addEventListener('click', function (e) {
            var b = e.target.closest('[data-theme-set]');
            if (b) setTheme(b.dataset.themeSet);

            if (e.target.closest('[data-nav-open]')) {
                document.querySelector('[data-nav-drawer]').classList.add('open');
                document.querySelector('[data-nav-backdrop]').classList.add('open');
                return;
            }
            if (e.target.closest('[data-nav-close]') || e.target.closest('[data-nav-backdrop]')) {
                document.querySelector('[data-nav-drawer]').classList.remove('open');
                document.querySelector('[data-nav-backdrop]').classList.remove('open');
            }
            if (e.target.closest('.nav-drawer a')) {
                document.querySelector('[data-nav-drawer]').classList.remove('open');
                document.querySelector('[data-nav-backdrop]').classList.remove('open');
            }

            var sh = e.target.closest('[data-share]');
            if (sh) {
                e.preventDefault();
                if (navigator.share) {
                    navigator.share({ title: T.shareTitle, text: T.shareText,
                        url: 'https://errantlauncher.com/' }).catch(function () {});
                } else if (navigator.clipboard) {
                    navigator.clipboard.writeText('https://errantlauncher.com/');
                    var sp = sh.querySelector('span');
                    if (sp) {
                        var old = sp.textContent;
                        sp.textContent = T.shareDone;
                        setTimeout(function () { sp.textContent = old; }, 1600);
                    }
                }
            }
        });
        setTheme(theme);


        document.querySelectorAll('i[data-icon]').forEach(function (el) {
            el.outerHTML = icon(el.dataset.icon, el.dataset.size || 18);
        });

        var topBtn = document.createElement('button');
        topBtn.className = 'to-top';
        topBtn.type = 'button';
        topBtn.setAttribute('aria-label', 'Back to top');
        topBtn.innerHTML = icon('arrow-up', 18);
        document.body.appendChild(topBtn);
        window.addEventListener('scroll', function () {
            topBtn.classList.toggle('show', window.scrollY > 600);
        }, { passive: true });
        topBtn.addEventListener('click', function () {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });

        if ('IntersectionObserver' in window) {
            var io = new IntersectionObserver(function (entries) {
                entries.forEach(function (e) {
                    if (e.isIntersecting) {
                        e.target.classList.add('in');
                        io.unobserve(e.target);
                    }
                });
            }, { threshold: .08 });
            document.querySelectorAll('main section').forEach(function (s) {
                s.classList.add('reveal');
                io.observe(s);
            });
        }

    });
})();
