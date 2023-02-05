import AuthLogo from './extensions/logo.png';
import MenuLogo from './extensions/logo.png';
import favicon from './extensions/favicon.ico';

const config = {

    auth: {
        logo: AuthLogo,
    },
    head: {
        favicon: favicon,
    },
    menu: {
        logo: MenuLogo,
    },
    notifications: { release: false },
    tutorials: false,

    locales: [
        // 'ar',
        // 'fr',
        // 'cs',
        // 'de',
        // 'dk',
        // 'es',
        // 'he',
        // 'id',
        // 'it',
        // 'ja',
        // 'ko',
        // 'ms',
        // 'nl',
        // 'no',
        // 'pl',
        // 'pt-BR',
        // 'pt',
        // 'ru',
        // 'sk',
        // 'sv',
        // 'th',
        // 'tr',
        // 'uk',
        // 'vi',
        'zh-Hans',
        // 'zh',
    ],

    translations: {
        'zh-Hans': {
            "global.password": "密码",
            "global.plugins": "插件",
            "global.marketplace": "市场",
            "global.settings": "设置",
            "admin.pages.MarketPlacePage.plugin.installed": "已安装",
            "app.page.not.found": "哎呀！我们似乎找不到您要查找的页面 (>_<)",
            "global.delete": "删除",
            "global.back": "返回",
            "global.content-manager": "内容管理",
            "Settings.profile.form.section.experience.interfaceLanguageHelp": "首选项更改将仅适用于您。更多信息请参见{此处}。",
            "Settings.profile.form.section.experience.mode.label": "界面模式",
            "Settings.profile.form.section.experience.mode.hint": "显示你选择的界面模式",
            "global.change-password": "更改密码",
            "global.profile": "个人资料",
            "global.save": "保存",
            "global.finish": "完成",
            "global.content-type.builder": "内容类型构建器",
            "global.documentation": "文档",
            "components.LeftMenu.collection-types": "集合类型",
            "components.LeftMenu.single-types": "单一类型",
            "app.components.LeftMenu.navbrand.title": "控制面板",
            "app.components.LeftMenu.navbrand.workplace": "工作空间",
            // "":"",
            // "":"",
            // "":"",
        },
    },

};

const bootstrap = (app) => {
    console.log(app);
};

export default {
    config,
    bootstrap,
};
