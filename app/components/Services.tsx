'use client';

import { useState, useRef, useEffect } from 'react';

type ServiceItem = {
  title: string;
  subtitle: string;
  titleLines?: string[];
  description: string;
  borderGradient: string;
  bgClass: string;
  glow: string;
  accentStrong: string;
  accentSoft: string;
  notes?: string[];
  href: string;
  specialPageHref?: string; // 特設ページへのリンク（オプション）
};

export default function Services() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const services: ServiceItem[] = [
    {
      title: 'ベトナム拠点設立',
      subtitle: '01 ESTABLISHMENT',
      titleLines: ['現地法人・駐在員事務所', '支店設立を', 'ワンストップ支援'],
      description:
        '市場調査・進出戦略・法人設立・許認可・採用・バックオフィスまで。現地の制度と商習慣に精通したチームが、戦略から実行まで伴走します。',
      borderGradient: 'linear-gradient(135deg, #84ab52, #a0c870) 1',
      bgClass: '',
      glow: 'rgba(44,95,45,0.22)',
      accentStrong: 'rgba(102,187,106,0.40)',
      accentSoft: 'rgba(165,214,167,0.25)',
      notes: [],
      href: '/services/establishment',
    },
    {
      title: 'M&Aアドバイザリー',
      subtitle: '02 M&A ADVISORY',
      titleLines: ['クロスボーダーM&Aを', '戦略立案からPMIまで', '一気通貫で'],
      description:
        'ターゲット探索・DD・バリュエーション・契約実務・PMI設計まで。日本本社とベトナム現地の双方に通じたチームで、意思決定と推進を高速化します。',
      borderGradient: 'linear-gradient(135deg, #84ab52, #a0c870) 1',
      bgClass: '',
      glow: 'rgba(132,171,82,0.22)',
      accentStrong: 'rgba(132,171,82,0.42)',
      accentSoft: 'rgba(160,200,112,0.22)',
      href: '/services/ma',
      specialPageHref: '/services/ma',
    },
    {
      title: '会計税務コンサルティング',
      subtitle: '03 ACCOUNTING & TAX',
      titleLines: ['ベトナム会計・税務を', '現地基準で', '正確かつスムーズに'],
      description:
        '帳簿作成・月次/年次決算・税務申告・監査対応・日本連結レポーティングまで。現地基準と日本基準の「橋渡し」をワンチームで提供します。',
      borderGradient: 'linear-gradient(135deg, #2E7D32, #66BB6A) 1',
      bgClass: '',
      glow: 'rgba(46,125,50,0.22)',
      accentStrong: 'rgba(76,175,80,0.40)',
      accentSoft: 'rgba(129,199,132,0.25)',
      href: '/services/accounting',
    },
    {
      title: '法務及び労務相談',
      subtitle: '04 LEGAL & LABOR',
      titleLines: ['ベトナムの法務・労務を', '専門家チームが', 'トータルサポート'],
      description:
        '契約書レビュー・労働法対応・就業規則整備・労務トラブル対応まで。現地法規制を熟知した専門家が、リスク管理と円滑な事業運営を支援します。',
      borderGradient: 'linear-gradient(135deg, #1565C0, #42A5F5) 1',
      bgClass: '',
      glow: 'rgba(21,101,192,0.22)',
      accentStrong: 'rgba(33,150,243,0.40)',
      accentSoft: 'rgba(100,181,246,0.25)',
      href: '/services/legal-labor',
    },
    {
      title: '各種ライセンス申請',
      subtitle: '05 LICENSE APPLICATION',
      titleLines: ['事業に必要な', '各種許認可を', '迅速に取得'],
      description:
        '投資登録証明書・事業登録証明書・業種別ライセンス・労働許可証まで。複雑な申請手続きを代行し、スムーズな事業開始をサポートします。',
      borderGradient: 'linear-gradient(135deg, #F57C00, #FFB74D) 1',
      bgClass: '',
      glow: 'rgba(245,124,0,0.22)',
      accentStrong: 'rgba(255,152,0,0.40)',
      accentSoft: 'rgba(255,183,77,0.25)',
      href: '/services/license',
    },
    {
      title: 'その他業務',
      subtitle: '06 OTHER SERVICES',
      titleLines: ['多様なニーズに', '柔軟に対応する', 'サポート体制'],
      description:
        '翻訳・通訳サービス、不動産コンサルティング、信用調査、秘書代行など。ベトナムでのビジネスに関わる様々なご要望にお応えします。',
      borderGradient: 'linear-gradient(135deg, #424242, #9E9E9E) 1',
      bgClass: '',
      glow: 'rgba(120,120,120,0.22)',
      accentStrong: 'rgba(158,158,158,0.40)',
      accentSoft: 'rgba(224,224,224,0.25)',
      href: '/services/other',
    },
  ];

  // スクロール位置に基づいてcurrentIndexを更新
  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const handleScroll = () => {
      const scrollLeft = carousel.scrollLeft;
      const cardWidth = carousel.offsetWidth;
      const newIndex = Math.round(scrollLeft / cardWidth);
      setCurrentIndex(newIndex);
    };

    carousel.addEventListener('scroll', handleScroll);
    return () => carousel.removeEventListener('scroll', handleScroll);
  }, []);

  // インジケータークリックでスクロール
  const scrollToIndex = (index: number) => {
    const carousel = carouselRef.current;
    if (!carousel) return;
    const cardWidth = carousel.offsetWidth;
    carousel.scrollTo({ left: cardWidth * index, behavior: 'smooth' });
  };

  return (
    <section id="services" className="py-16 sm:py-20 md:py-24 lg:py-32 bg-white">
      {/* セクションヘッダー - 上品で控えめ */}
      <div className="text-center mb-8 sm:mb-12 md:mb-16 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <p className="text-xs sm:text-sm md:text-base text-[#84ab52] tracking-[0.25em] sm:tracking-[0.3em] uppercase font-light mb-2 sm:mb-3">
          Services
        </p>
        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light text-gray-600 tracking-wide">
          サービス紹介
        </h2>
      </div>

      {/* モバイル用カルーセル (md未満で表示) */}
      <div className="md:hidden">
        {/* カルーセルコンテナ */}
        <div
          ref={carouselRef}
          className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {services.map((service, index) => (
            <div key={index} className="flex-shrink-0 w-full snap-center px-6">
              {/* カード */}
              <div className="relative overflow-hidden rounded-2xl bg-white shadow-lg border border-gray-100">
                {/* グラデーション背景 */}
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white"></div>
                  <div
                    className="absolute top-0 right-0 w-[300px] h-[300px] rounded-full blur-3xl"
                    style={{
                      background: `radial-gradient(closest-side, ${service.accentStrong}, transparent)`,
                    }}
                  ></div>
                  <div
                    className="absolute bottom-0 left-0 w-[200px] h-[200px] rounded-full blur-3xl"
                    style={{
                      background: `radial-gradient(closest-side, ${service.accentSoft}, transparent)`,
                    }}
                  ></div>
                  {/* サブタイトルオーバーレイ */}
                  <div className="absolute bottom-4 left-4">
                    <p className="text-[10px] tracking-[0.3em] uppercase text-black/40 font-medium">
                      {service.subtitle}
                    </p>
                  </div>
                </div>

                {/* コンテンツ */}
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-light text-black leading-tight">
                    {service.titleLines?.map((line: string, i: number) => (
                      <span key={i} className="block">
                        {line}
                      </span>
                    )) || service.title}
                  </h3>
                  <p className="text-sm text-black/60 leading-relaxed line-clamp-3">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <a
                      href={service.href}
                      className="inline-flex items-center justify-center bg-[#2B2C30] text-white px-6 py-2.5 text-xs tracking-wide transition-colors hover:bg-black select-none"
                    >
                      View more
                    </a>
                    {service.specialPageHref && (
                      <a
                        href={service.specialPageHref}
                        className="inline-flex items-center justify-center bg-[#84ab52] text-white px-6 py-2.5 text-xs tracking-wide transition-colors hover:bg-[#6d9143] select-none"
                      >
                        特設ページ
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* インジケーター（ドット） */}
        <div className="flex justify-center gap-2 mt-6">
          {services.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                currentIndex === index ? 'bg-[#84ab52] w-6' : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`サービス ${index + 1} へ移動`}
            />
          ))}
        </div>

        {/* サービス一覧ボタン（モバイル） */}
        <div className="mt-8 flex justify-center px-6">
          <a
            href="/services"
            className="inline-block w-full text-center px-8 py-3 bg-[#84ab52] text-white text-sm font-light tracking-[0.15em] hover:bg-[#6d9143] transition-all duration-300 shadow-lg"
          >
            サービス一覧を表示
          </a>
        </div>
      </div>

      {/* デスクトップ用 交互レイアウト (md以上で表示) */}
      <div className="hidden md:block px-6 sm:px-8 lg:px-12">
        <div className="space-y-0 max-w-none">
          {services.map((service, index) => {
            const isEven = index % 2 === 0; // 0,2,4: Text Left / Media Right
            return (
              <section key={index} className="grid md:grid-cols-2 gap-6 md:gap-8 items-center">
                {/* Text block */}
                <div
                  className={`${isEven ? 'md:order-1' : 'md:order-2'} h-[450px] lg:h-[520px] flex`}
                >
                  <div className="space-y-4 md:space-y-5 lg:space-y-6 my-auto">
                    <p className="text-[11px] md:text-xs tracking-[0.3em] sm:tracking-[0.35em] uppercase text-black/60">
                      {service.subtitle}
                    </p>
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-light text-black leading-tight">
                      {service.titleLines?.map((line: string, i: number) => (
                        <span key={i} className="block">
                          {line}
                        </span>
                      )) || service.title}
                    </h3>
                    <p className="text-sm md:text-base lg:text-lg text-black/70 leading-relaxed max-w-prose">
                      {service.description}
                    </p>
                    <div className="flex flex-wrap gap-4">
                      <a
                        href={service.href}
                        className="inline-flex items-center justify-center bg-[#2B2C30] text-white px-8 sm:px-10 py-2.5 sm:py-3 text-xs sm:text-sm tracking-wide transition-colors hover:bg-black select-none"
                      >
                        View more
                      </a>
                      {service.specialPageHref && (
                        <a
                          href={service.specialPageHref}
                          className="inline-flex items-center justify-center bg-[#84ab52] text-white px-8 sm:px-10 py-2.5 sm:py-3 text-xs sm:text-sm tracking-wide transition-colors hover:bg-[#6d9143] select-none"
                        >
                          特設ページ
                        </a>
                      )}
                    </div>
                    {Array.isArray(service.notes) && service.notes.length > 0 && (
                      <div className="pt-2 sm:pt-3 space-y-1">
                        {service.notes.map((n, i) => (
                          <p
                            key={i}
                            className="text-[10px] md:text-xs text-black/50 leading-relaxed"
                          >
                            {n}
                          </p>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Media block（抽象グラデーション） */}
                <div className={`${isEven ? 'md:order-2' : 'md:order-1'} h-[520px]`}>
                  <div className="relative h-full w-full overflow-hidden">
                    {/* Hero風：白ベース＋大きなボケ足のカラーブロブ（角丸・枠なし） */}
                    <div className="absolute inset-0 bg-white"></div>
                    <div
                      className="absolute top-0 right-0 w-[900px] h-[900px] rounded-full blur-3xl"
                      style={{
                        background: `radial-gradient(closest-side, ${service.accentStrong}, transparent)`,
                      }}
                    ></div>
                    <div
                      className="absolute bottom-0 left-0 w-[700px] h-[700px] rounded-full blur-3xl"
                      style={{
                        background: `radial-gradient(closest-side, ${service.accentSoft}, transparent)`,
                      }}
                    ></div>
                    <div
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] rounded-full blur-3xl"
                      style={{
                        background: `radial-gradient(closest-side, ${service.accentSoft}, transparent)`,
                      }}
                    ></div>
                    {/* ごく薄いライン */}
                    <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-black/10 to-transparent"></div>
                  </div>
                </div>
              </section>
            );
          })}
          <div className="mt-12 sm:mt-16 flex justify-center">
            <a
              href="/services"
              className="inline-block px-8 sm:px-10 md:px-12 py-3 sm:py-3.5 md:py-4 bg-[#84ab52] text-white text-xs sm:text-sm md:text-base font-light tracking-[0.2em] sm:tracking-widest hover:bg-[#6d9143] transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              サービス一覧を表示
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
