import React, { createContext, useContext, useState, useEffect } from 'react';

// 语言文本配置
const translations = {
  en: {
    // 首页
    heroTitle: "Creating cover images for your blogs is now super easy",
    createNow: "Create Now",
    whyCoverImagesTitle: "Why cover images are more important than you think?",
    blogPostsCount: "Around <span>7 million</span> blog posts are published daily. And with the rise of new-age blogging tools, it will only go up.",
    conversionRate: "A good cover image can lead to <span>higher conversion rate</span> than a random stock image.",
    secondsTitle: "With coverview, you can create cover images in <span>seconds</span>",
    step1Title: "Step 1",
    step1Desc: "Add your blog title and author name",
    step2Title: "Step 2",
    step2Desc: "Customize with colors, fonts and icons",
    step3Title: "Step 3",
    step3Desc: "Choose your style from different themes",
    step3Features: "Unsplash integration, custom icon for personal branding and more.",
    platformSupport: "Supports platforms like Hashnode or Dev.to",
    simpleTitle: "Simple, quick, and easy to use",
    simpleDesc: "So you can focus on writing your blog and never worry about those cover images.",
    tryNow: "It's Free! Try Now →",
    madeWith: "Made with 💛 by",
    howToUse: "How to use",
    github: "Github",
    buyMeACoffee: "Buy me a coffee",
    
    // 顶部导航
    starOnGithub: "⭐ Star on Github",
    shareOnTwitter: "Share on Twitter",
    
    // 编辑器
    blogTitle: "Blog Title",
    enterTitle: "Enter title here",
    author: "Author",
    icon: "Icon",
    font: "Font",
    color: "Color",
    platform: "Platform",
    resetAll: "Reset All",
    themes: "Themes",
    
    // FAQ页面
    faqTitle: "Frequently asked questions",
    whatIsCoverview: "What is Coverview?",
    whatIsOverviewAnswer: "Coverview is a tool to create cover images for your blogs quickly and easily.",
    isItFree: "Is Coverview free?",
    isItFreeAnswer: "Yes! Coverview is absolutely free to use.",
    customLogo: "Can I upload my custom brand logo?",
    customLogoAnswer: "Yes.Just search and select <span>custom</span> in icon section and you can upload your own logo to personalize your cover images.",
    example: "example",
    nonTechnical: "Can I use coverview for non-technical/personal blogs?",
    nonTechnicalAnswer: "Yes! Why not? Even though coverview was built with technical blogs in mind, you can still use it for your personal blogs. Check out the stylish theme for more.",
    whyUse: "Why use Coverview?",
    whyUseAnswer: "Because it's simple, quick and easy to use. Why spend hours designing when you can create cover images in seconds?",
    sponsor: "Want to support/sponsor the project?",
    sponsorAnswer: "If coverview adds value in your life and you wish to support this project, you can <a>sponsor me on Github</a> or <a>buy me a coffee</a>.",
    clickMe: "Want to know a secret? Click me",
    blogTip: "Blog titles with a minimum of 8 words have 21% better click-through"
  },
  zh: {
    // 首页
    heroTitle: "为你的博客创建封面图片现在超级简单",
    createNow: "立即创建",
    whyCoverImagesTitle: "为什么封面图片比你想象的更重要？",
    blogPostsCount: "每天大约有<span>700万</span>篇博客文章发布。随着新时代博客工具的兴起，这个数字只会增加。",
    conversionRate: "一个好的封面图片可以带来比随机库存图片<span>更高的转化率</span>。",
    secondsTitle: "使用coverview，你可以在<span>几秒钟</span>内创建封面图片",
    step1Title: "步骤 1",
    step1Desc: "添加你的博客标题和作者名称",
    step2Title: "步骤 2",
    step2Desc: "用颜色、字体和图标进行自定义",
    step3Title: "步骤 3",
    step3Desc: "从不同的主题中选择你的风格",
    step3Features: "Unsplash集成，个人品牌的自定义图标等等。",
    platformSupport: "支持Hashnode或Dev.to等平台",
    simpleTitle: "简单、快速且易于使用",
    simpleDesc: "这样你就可以专注于写博客，不用担心那些封面图片。",
    tryNow: "它是免费的！立即尝试 →",
    madeWith: "由 💛 制作",
    howToUse: "如何使用",
    github: "Github",
    buyMeACoffee: "给我买杯咖啡",
    
    // 顶部导航
    starOnGithub: "⭐ 在Github上收藏",
    shareOnTwitter: "在Twitter上分享",
    
    // 编辑器
    blogTitle: "博客标题",
    enterTitle: "在此输入标题",
    author: "作者",
    icon: "图标",
    font: "字体",
    color: "颜色",
    platform: "平台",
    resetAll: "重置所有",
    themes: "主题",
    
    // FAQ页面
    faqTitle: "常见问题",
    whatIsCoverview: "什么是Coverview？",
    whatIsOverviewAnswer: "Coverview是一个快速轻松创建博客封面图片的工具。",
    isItFree: "Coverview是免费的吗？",
    isItFreeAnswer: "是的！Coverview完全免费使用。",
    customLogo: "我可以上传自定义品牌标志吗？",
    customLogoAnswer: "是的。只需在图标部分搜索并选择<span>custom</span>，你就可以上传自己的标志来个性化你的封面图片。",
    example: "示例",
    nonTechnical: "我可以将coverview用于非技术/个人博客吗？",
    nonTechnicalAnswer: "是的！为什么不呢？尽管coverview最初是为技术博客设计的，但你仍然可以将它用于个人博客。查看stylish主题了解更多。",
    whyUse: "为什么使用Coverview？",
    whyUseAnswer: "因为它简单、快速且易于使用。当你可以在几秒钟内创建封面图片时，为什么还要花费数小时进行设计呢？",
    sponsor: "想要支持/赞助这个项目？",
    sponsorAnswer: "如果coverview在你的生活中增添了价值，你希望支持这个项目，你可以<a>在Github上赞助我</a>或<a>给我买杯咖啡</a>。",
    clickMe: "想知道一个秘密吗？点击我",
    blogTip: "至少包含8个字的博客标题点击率高21%"
  }
};

// 创建语言上下文
const LanguageContext = createContext();

// 语言提供者组件
export const LanguageProvider = ({ children }) => {
  // 从localStorage获取语言设置，默认为英文
  const [language, setLanguage] = useState(() => {
    const savedLanguage = localStorage.getItem('language');
    return savedLanguage || 'en';
  });

  // 切换语言的函数
  const toggleLanguage = () => {
    const newLanguage = language === 'en' ? 'zh' : 'en';
    setLanguage(newLanguage);
    localStorage.setItem('language', newLanguage);
  };

  // 获取当前语言的翻译文本
  const t = (key) => {
    const text = translations[language][key] || key;
    return text;
  };

  // 当语言变化时保存到localStorage
  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

// 使用语言的自定义钩子
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}; 