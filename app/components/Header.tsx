'use client';

import { useRef, useState, useEffect } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const closeServicesTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // スクロール位置を監視
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    // 初期状態を設定
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const clearCloseServicesTimer = () => {
    if (closeServicesTimerRef.current) {
      clearTimeout(closeServicesTimerRef.current);
      closeServicesTimerRef.current = null;
    }
  };

  const openServices = () => {
    clearCloseServicesTimer();
    setIsServicesOpen(true);
  };

  const scheduleCloseServices = () => {
    clearCloseServicesTimer();
    closeServicesTimerRef.current = setTimeout(() => {
      setIsServicesOpen(false);
    }, 200);
  };

  const serviceCategories = [
    {
      title: '設立・投資サポート',
      items: [
        { name: 'ライセンス取得', href: '/services/license' },
        { name: 'ビジネスパートナー紹介', href: '/services/partners' },
        { name: 'M&Aコンサル', href: '/services/ma' },
      ],
    },
    {
      title: '会計・税務アドバイザリー',
      items: [
        { name: '企業評価（バリュエーション）', href: '/services/valuation' },
        { name: '財務・税務DD', href: '/services/dd' },
        { name: '顧問契約', href: '/services/retainer' },
      ],
    },
    {
      title: 'その他のサービス',
      items: [
        { name: '翻訳サービス', href: '/services/translation' },
        { name: '個人情報保護対応', href: '/services/privacy' },
        { name: '債権回収', href: '/services/debt-collection' },
        { name: '不動産コンサル', href: '/services/real-estate' },
        { name: '信用調査', href: '/services/credit-check' },
        { name: '秘書代行', href: '/services/secretarial' },
      ],
    },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white border-b border-gray-100' : 'bg-transparent border-b border-white/10'
      }`}
    >
      {/* 背景装飾 - さわやかな緑のグラデーション（スクロール時のみ） */}
      <div
        className={`absolute inset-0 overflow-hidden pointer-events-none transition-opacity duration-300 ${
          isScrolled ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-bl from-[#A5D6A7]/20 via-[#C8E6C9]/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-gradient-to-br from-[#81C784]/15 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-8 lg:px-12 relative z-10">
        <div className="flex justify-between items-center h-20">
          {/* ロゴ */}
          <Link href="/" className="flex items-center">
            <div className="flex items-center gap-3">
              <div className="flex gap-0.5">
                <div
                  className={`w-2 h-8 transition-colors duration-300 ${
                    isScrolled ? 'bg-[#C8102E]' : 'bg-white'
                  }`}
                ></div>
                <div
                  className={`w-2 h-8 transition-colors duration-300 ${
                    isScrolled ? 'bg-[#2C5F2D]' : 'bg-white'
                  }`}
                ></div>
              </div>
              <span
                className={`text-lg font-light tracking-wider transition-colors duration-300 ${
                  isScrolled ? 'text-[#2E2E2E]' : 'text-white'
                }`}
              >
                Kurosawa Consulting Vietnam
              </span>
            </div>
          </Link>

          {/* デスクトップナビゲーション */}
          <nav className="hidden lg:flex items-center space-x-10">
            <Link
              href="/"
              className={`text-[13px] font-light tracking-wide transition-colors duration-300 ${
                isScrolled ? 'text-gray-600 hover:text-[#C8102E]' : 'text-white/90 hover:text-white'
              }`}
            >
              ホーム
            </Link>

            {/* サービスドロップダウン */}
            <div
              className="relative"
              onMouseEnter={openServices}
              onMouseLeave={scheduleCloseServices}
            >
              <button
                className={`text-[13px] font-light tracking-wide flex items-center gap-1 transition-colors duration-300 ${
                  isScrolled
                    ? 'text-gray-600 hover:text-[#C8102E]'
                    : 'text-white/90 hover:text-white'
                }`}
              >
                サービス
                <svg
                  className={`w-3 h-3 transition-transform duration-300 ease-out ${
                    isServicesOpen ? 'rotate-180' : 'rotate-0'
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {/* ドロップダウンメニュー - アニメーション付き */}
              <div
                className={`absolute top-full left-0 mt-2 w-[560px] bg-white border border-gray-100 shadow-lg p-4 grid grid-cols-2 gap-4 origin-top transition-all duration-300 ease-out ${
                  isServicesOpen
                    ? 'opacity-100 scale-y-100 translate-y-0 pointer-events-auto'
                    : 'opacity-0 scale-y-95 -translate-y-2 pointer-events-none'
                }`}
                onMouseEnter={openServices}
                onMouseLeave={scheduleCloseServices}
              >
                {serviceCategories.map((cat, catIndex) => (
                  <div
                    key={cat.title}
                    className={`transition-all duration-300 ease-out ${
                      isServicesOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                    }`}
                    style={{
                      transitionDelay: isServicesOpen ? `${catIndex * 50}ms` : '0ms',
                    }}
                  >
                    <div className="px-3 pb-2 text-[11px] tracking-[0.2em] text-[#C8102E] font-light">
                      {cat.title}
                    </div>
                    <ul className="border-t border-gray-50">
                      {cat.items.map((item) => (
                        <li key={item.name}>
                          <Link
                            href={item.href}
                            className="block px-3 py-2 text-sm font-light text-gray-600 hover:bg-gray-50 hover:text-[#C8102E] tracking-wide transition-colors duration-200"
                          >
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <Link
              href="/works"
              className={`text-[13px] font-light tracking-wide transition-colors duration-300 ${
                isScrolled ? 'text-gray-600 hover:text-[#C8102E]' : 'text-white/90 hover:text-white'
              }`}
            >
              実績・お客様の声
            </Link>
            <Link
              href="/pricing"
              className={`text-[13px] font-light tracking-wide transition-colors duration-300 ${
                isScrolled ? 'text-gray-600 hover:text-[#C8102E]' : 'text-white/90 hover:text-white'
              }`}
            >
              料金プラン
            </Link>
            <Link
              href="/faq"
              className={`text-[13px] font-light tracking-wide transition-colors duration-300 ${
                isScrolled ? 'text-gray-600 hover:text-[#C8102E]' : 'text-white/90 hover:text-white'
              }`}
            >
              よくある質問
            </Link>
            <Link
              href="/about"
              className={`text-[13px] font-light tracking-wide transition-colors duration-300 ${
                isScrolled ? 'text-gray-600 hover:text-[#C8102E]' : 'text-white/90 hover:text-white'
              }`}
            >
              会社概要
            </Link>
            <Link
              href="/contact"
              className={`px-8 py-2.5 text-[13px] font-light tracking-wide transition-all duration-300 ${
                isScrolled
                  ? 'bg-[#C8102E] text-white hover:bg-[#A00D24]'
                  : 'bg-white text-[#2E2E2E] hover:bg-white/90'
              }`}
            >
              無料相談
            </Link>
          </nav>

          {/* モバイルメニューボタン - アニメーション強化 */}
          <button
            className={`lg:hidden p-2 rounded transition-colors duration-300 ${
              isScrolled ? 'hover:bg-gray-50' : 'hover:bg-white/10'
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="メニュー"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span
                className={`block h-px transition-all duration-300 ease-out ${
                  isScrolled ? 'bg-gray-600' : 'bg-white'
                } ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}
              ></span>
              <span
                className={`block h-px transition-all duration-300 ease-out ${
                  isScrolled ? 'bg-gray-600' : 'bg-white'
                } ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}
              ></span>
              <span
                className={`block h-px transition-all duration-300 ease-out ${
                  isScrolled ? 'bg-gray-600' : 'bg-white'
                } ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}
              ></span>
            </div>
          </button>
        </div>

        {/* モバイルメニュー - アニメーション付き */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-out ${
            isMenuOpen ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'
          } ${isScrolled ? 'border-t border-gray-100 bg-white' : 'border-t border-white/10 bg-black/20 backdrop-blur-md'}`}
        >
          <div className="py-6">
            <nav className="flex flex-col space-y-4">
              <Link
                href="/"
                className={`text-sm font-light tracking-wide transition-colors duration-300 ${
                  isScrolled
                    ? 'text-gray-600 hover:text-[#C8102E]'
                    : 'text-white/90 hover:text-white'
                }`}
              >
                ホーム
              </Link>

              {/* モバイル用サービスメニュー - アニメーション付き */}
              <div>
                <button
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className={`text-sm font-light tracking-wide flex items-center gap-1 w-full transition-colors duration-300 ${
                    isScrolled
                      ? 'text-gray-600 hover:text-[#C8102E]'
                      : 'text-white/90 hover:text-white'
                  }`}
                >
                  サービス
                  <svg
                    className={`w-3 h-3 transition-transform duration-300 ease-out ${
                      isServicesOpen ? 'rotate-180' : 'rotate-0'
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                <div
                  className={`ml-4 space-y-4 overflow-hidden transition-all duration-300 ease-out ${
                    isServicesOpen ? 'max-h-[600px] mt-2 opacity-100' : 'max-h-0 mt-0 opacity-0'
                  }`}
                >
                  {serviceCategories.map((cat, catIndex) => (
                    <div
                      key={cat.title}
                      className={`transition-all duration-300 ease-out ${
                        isServicesOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'
                      }`}
                      style={{
                        transitionDelay: isServicesOpen ? `${catIndex * 50}ms` : '0ms',
                      }}
                    >
                      <div
                        className={`text-xs tracking-[0.2em] font-light mb-2 transition-colors duration-300 ${
                          isScrolled ? 'text-[#C8102E]' : 'text-white'
                        }`}
                      >
                        {cat.title}
                      </div>
                      <div className="ml-3 space-y-1">
                        {cat.items.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            className={`block text-sm font-light tracking-wide transition-colors duration-300 ${
                              isScrolled
                                ? 'text-gray-500 hover:text-[#C8102E]'
                                : 'text-white/70 hover:text-white'
                            }`}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <Link
                href="/works"
                className={`text-sm font-light tracking-wide transition-colors duration-300 ${
                  isScrolled
                    ? 'text-gray-600 hover:text-[#C8102E]'
                    : 'text-white/90 hover:text-white'
                }`}
              >
                実績・お客様の声
              </Link>
              <Link
                href="/pricing"
                className={`text-sm font-light tracking-wide transition-colors duration-300 ${
                  isScrolled
                    ? 'text-gray-600 hover:text-[#C8102E]'
                    : 'text-white/90 hover:text-white'
                }`}
              >
                料金プラン
              </Link>
              <Link
                href="/faq"
                className={`text-sm font-light tracking-wide transition-colors duration-300 ${
                  isScrolled
                    ? 'text-gray-600 hover:text-[#C8102E]'
                    : 'text-white/90 hover:text-white'
                }`}
              >
                よくある質問
              </Link>
              <Link
                href="/about"
                className={`text-sm font-light tracking-wide transition-colors duration-300 ${
                  isScrolled
                    ? 'text-gray-600 hover:text-[#C8102E]'
                    : 'text-white/90 hover:text-white'
                }`}
              >
                会社概要
              </Link>
              <Link
                href="/contact"
                className={`text-sm font-light tracking-wide transition-colors duration-300 ${
                  isScrolled
                    ? 'text-[#C8102E] hover:text-[#A00D24]'
                    : 'text-white hover:text-white/80'
                }`}
              >
                無料相談
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
