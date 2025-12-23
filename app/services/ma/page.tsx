import Contact from '@/app/components/Contact';

export const metadata = {
  title: 'M&Aアドバイザリー | Kurosawa Consulting Vietnam',
  description:
    'クロスボーダーM&Aを戦略立案からPMIまで一気通貫でサポート。日本本社とベトナム現地の双方に通じたチームで、意思決定と推進を高速化します。',
};

export default function MAPage() {
  return (
    <div className="min-h-screen">
      <main>
        {/* ヒーローセクション */}
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
          {/* 背景グラデーション */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460]"></div>
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-[#84ab52]/20 via-transparent to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-[#84ab52]/10 to-transparent rounded-full blur-3xl"></div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
            <div className="max-w-3xl">
              <p className="text-[#84ab52] text-sm tracking-[0.3em] uppercase font-light mb-4">
                M&A Advisory
              </p>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-white leading-tight mb-6">
                <span className="block">クロスボーダーM&Aを</span>
                <span className="block">戦略立案からPMIまで</span>
                <span className="block text-[#84ab52]">一気通貫で</span>
              </h1>
              <p className="text-lg md:text-xl text-white/70 font-light leading-relaxed">
                ターゲット探索・DD・バリュエーション・契約実務・PMI設計まで。
                日本本社とベトナム現地の双方に通じたチームで、意思決定と推進を高速化します。
              </p>
            </div>
          </div>
        </section>

        {/* サービス概要セクション */}
        <section className="py-20 md:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="text-center mb-16">
              <p className="text-[#84ab52] text-sm tracking-[0.3em] uppercase font-light mb-3">
                Our Services
              </p>
              <h2 className="text-2xl md:text-3xl font-light text-gray-800">
                M&Aアドバイザリーサービス
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* サービス項目 */}
              {[
                {
                  title: 'ターゲット探索',
                  description: 'ベトナム市場における最適なM&A候補先の発掘・選定をサポートします。',
                  icon: '🔍',
                },
                {
                  title: 'デューデリジェンス',
                  description: '財務・税務・法務DDを現地専門家チームが一貫して実施します。',
                  icon: '📊',
                },
                {
                  title: 'バリュエーション',
                  description: '適正な企業価値評価を複数手法で算定し、交渉をサポートします。',
                  icon: '💰',
                },
                {
                  title: '契約実務',
                  description: 'SPA・SHA等の契約書作成・レビュー・交渉を支援します。',
                  icon: '📝',
                },
                {
                  title: 'PMI設計',
                  description: '統合後のシナジー創出に向けたPMI計画策定を支援します。',
                  icon: '🔄',
                },
                {
                  title: 'クロージング支援',
                  description: '行政手続き・登記変更等のクロージング実務を代行します。',
                  icon: '✅',
                },
              ].map((service, index) => (
                <div
                  key={index}
                  className="p-8 bg-gray-50 hover:bg-white hover:shadow-lg transition-all duration-300 border border-gray-100"
                >
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-lg font-medium text-gray-800 mb-3">{service.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* プロセスセクション */}
        <section className="py-20 md:py-28 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="text-center mb-16">
              <p className="text-[#84ab52] text-sm tracking-[0.3em] uppercase font-light mb-3">
                Process
              </p>
              <h2 className="text-2xl md:text-3xl font-light text-gray-800">M&A実行プロセス</h2>
            </div>

            <div className="relative">
              {/* プロセスライン */}
              <div className="hidden md:block absolute top-8 left-0 right-0 h-0.5 bg-[#84ab52]/30"></div>

              <div className="grid md:grid-cols-5 gap-8">
                {[
                  { step: '01', title: '戦略策定', desc: '目的整理・ターゲット条件定義' },
                  { step: '02', title: '候補探索', desc: 'ロングリスト作成・アプローチ' },
                  { step: '03', title: 'DD実施', desc: '財務・税務・法務デューデリジェンス' },
                  { step: '04', title: '交渉・契約', desc: '価格交渉・契約書締結' },
                  { step: '05', title: 'PMI', desc: '統合計画策定・実行支援' },
                ].map((process, index) => (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-[#84ab52] text-white rounded-full flex items-center justify-center text-lg font-light relative z-10">
                      {process.step}
                    </div>
                    <h3 className="text-lg font-medium text-gray-800 mb-2">{process.title}</h3>
                    <p className="text-sm text-gray-600">{process.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 強みセクション */}
        <section className="py-20 md:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-[#84ab52] text-sm tracking-[0.3em] uppercase font-light mb-3">
                  Why Choose Us
                </p>
                <h2 className="text-2xl md:text-3xl font-light text-gray-800 mb-6">
                  私たちが選ばれる理由
                </h2>
                <div className="space-y-6">
                  {[
                    {
                      title: '日越バイリンガルチーム',
                      description:
                        '日本とベトナム両国のビジネス慣習・法制度に精通した専門家チームが対応します。',
                    },
                    {
                      title: 'ワンストップサービス',
                      description: '戦略策定からPMIまで、M&Aプロセス全体を一貫してサポートします。',
                    },
                    {
                      title: '豊富な実績',
                      description:
                        '製造業・サービス業など幅広い業種でのクロスボーダーM&A支援実績があります。',
                    },
                  ].map((item, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="w-1 bg-[#84ab52] flex-shrink-0"></div>
                      <div>
                        <h3 className="text-lg font-medium text-gray-800 mb-2">{item.title}</h3>
                        <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 装飾的な背景 */}
              <div className="relative h-[400px] hidden md:block">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white rounded-2xl"></div>
                <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-bl from-[#84ab52]/20 to-transparent rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-gradient-to-tr from-[#84ab52]/10 to-transparent rounded-full blur-3xl"></div>
              </div>
            </div>
          </div>
        </section>

        {/* お問い合わせセクション（共通コンポーネント） */}
        <Contact />
      </main>
    </div>
  );
}
