"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import {
  Code,
  Users,
  FileText,
  MessageSquare,
  Target,
  Briefcase,
  CheckCircle,
  Star,
  Zap,
  Shield,
  Rocket,
} from "lucide-react"

export default function EngineerTrainingLP() {
  const [hoveredService, setHoveredService] = useState<number | null>(null)

  const services = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "キャリアプランの提案",
      description: "あなたの目標に合わせた最適なキャリアパスを提案します",
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "スキルシート作成補助",
      description: "企業に響くスキルシートの作成をサポートします",
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "面接対策サポート",
      description: "実践的な面接対策で内定獲得をバックアップします",
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "案件マッチングサポート",
      description: "あなたのスキルに最適な案件をマッチングします",
    },
  ]

  const roadmapSteps = [
    { title: "LINE相談", description: "カウンセリング日程を案内" },
    { title: "Zoom面談", description: "目標・状況ヒアリング" },
    { title: "Discord招待", description: "学習・共有・案件紹介" },
    { title: "スキル判定", description: "経験者 or 未経験者の分岐" },
    { title: "サポート開始", description: "個別サポートプログラム開始" },
    { title: "案件参画", description: "継続サポートあり" },
  ]

  const faqData = [
    {
      question: "紹介料や費用はかかりますか？",
      answer: "教材費1500円のみ。他は企業負担です。",
    },
    {
      question: "実務経験がないのですが大丈夫ですか？",
      answer: "問題ありません。学習と稼働サポートがあります。",
    },
    {
      question: "登録後の流れは？",
      answer: "LINE登録 → Zoom面談 → Discordサポート＆案件紹介。",
    },
    {
      question: "パソコンは必要？",
      answer: "必須ですが中古でもOKです。",
    },
    {
      question: "年齢制限は？",
      answer: "基本は20代〜30代前半の方が対象です。",
    },
    {
      question: "地方在住でも可能？",
      answer: "全てリモート対応なので問題ありません。",
    },
  ]

  const CTAButton = ({ className = "" }: { className?: string }) => (
    <Button
      asChild
      size="lg"
      className={`bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-black font-bold px-8 py-4 rounded-full transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl ${className}`}
    >
      <a href="https://line.me/R/ti/p/@107giyet" target="_blank" rel="noopener noreferrer">
        公式LINE登録 ➡ 無料で相談
      </a>
    </Button>
  )

  return (
<div className="min-h-screen bg-gray-900 text-white">
  {/* ヘッダー（ファーストビュー） */}
  <section className="h-screen flex items-center justify-center relative overflow-hidden">
    <div className="hero-background"></div>
    <div className="hero-pattern"></div>

    <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
      <div className="mb-8">
        <Badge className="bg-yellow-400/20 text-yellow-400 border-yellow-400/30 mb-4">
          <Zap className="w-4 h-4 mr-2" />
          AI時代対応プログラム
        </Badge>
      </div>

      <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-yellow-200 to-yellow-400 bg-clip-text text-transparent leading-tight">
        AI時代に活躍できる エンジニア育成プログラム
      </h1>

      <p className="text-xl md:text-2xl mb-8 text-gray-300 font-light">現役エンジニアによるマンツーマンサポート</p>

      <div className="flex flex-col items-center gap-4">
        <CTAButton />
        <p className="text-sm text-gray-400">
          <Shield className="w-4 h-4 inline mr-1" />
          完全無料相談・成果報酬型
        </p>
      </div>
    </div>
  </section>

      {/* サービス紹介セクション */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-yellow-400">サービス紹介</h2>
            <p className="text-gray-400 text-lg">あなたの成長を全面的にサポートします</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="bg-gray-800 border-gray-700 hover:border-yellow-400/50 transition-all duration-300 transform hover:scale-105 cursor-pointer"
                onMouseEnter={() => setHoveredService(index)}
                onMouseLeave={() => setHoveredService(null)}
              >
                <CardHeader className="text-center">
                  <div
                    className={`mx-auto mb-4 p-4 rounded-full transition-colors duration-300 ${
                      hoveredService === index ? "bg-yellow-400 text-black" : "bg-gray-700 text-yellow-400"
                    }`}
                  >
                    {service.icon}
                  </div>
                  <CardTitle className="text-white">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-400 text-center">{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 料金セクション */}
      <section className="py-20 px-4 bg-gray-800/50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-yellow-400">料金について</h2>
            <p className="text-gray-400 text-lg">成果報酬型で安心してご利用いただけます</p>
          </div>

          <Card className="bg-gray-800 border-gray-700">
            <CardContent className="p-8">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-600">
                      <th className="text-left py-4 px-4 text-yellow-400 font-bold">サービス名</th>
                      <th className="text-left py-4 px-4 text-yellow-400 font-bold">料金</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-300">
                    <tr className="border-b border-gray-700">
                      <td className="py-4 px-4">初回相談</td>
                      <td className="py-4 px-4 text-green-400 font-bold">無料</td>
                    </tr>
                    <tr className="border-b border-gray-700">
                      <td className="py-4 px-4">講座受講料</td>
                      <td className="py-4 px-4">
                        <span className="text-green-400 font-bold">0円</span>
                        <span className="text-sm text-gray-400 ml-2">（途中退会時のみ5万円税別）</span>
                      </td>
                    </tr>
                    <tr className="border-b border-gray-700">
                      <td className="py-4 px-4">教材費</td>
                      <td className="py-4 px-4">1,500円（1冊のみ）</td>
                    </tr>
                    <tr className="border-b border-gray-700">
                      <td className="py-4 px-4">スキルシート作成・添削</td>
                      <td className="py-4 px-4 text-green-400 font-bold">無料</td>
                    </tr>
                    <tr className="border-b border-gray-700">
                      <td className="py-4 px-4">案件営業サポート</td>
                      <td className="py-4 px-4 text-green-400 font-bold">無料</td>
                    </tr>
                    <tr className="border-b border-gray-700">
                      <td className="py-4 px-4">面接対策</td>
                      <td className="py-4 px-4 text-green-400 font-bold">無料</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-4">稼働後サポート</td>
                      <td className="py-4 px-4 text-green-400 font-bold">無料（継続支援あり）</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* ロードマップセクション */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-yellow-400">ロードマップ</h2>
            <p className="text-gray-400 text-lg">あなたの成功までの道のりをご案内します</p>
          </div>

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-yellow-400 to-yellow-600"></div>

            {roadmapSteps.map((step, index) => (
              <div key={index} className="relative flex items-center mb-12 last:mb-0">
                <div className="absolute left-6 w-4 h-4 bg-yellow-400 rounded-full border-4 border-gray-900"></div>
                <div className="ml-16">
                  <Card className="bg-gray-800 border-gray-700 hover:border-yellow-400/50 transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <Badge className="bg-yellow-400 text-black font-bold">STEP {index + 1}</Badge>
                        <div>
                          <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                          <p className="text-gray-400">{step.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 対象者セクション */}
      <section className="py-20 px-4 bg-gray-800/50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-yellow-400">対象者</h2>
            <p className="text-gray-400 text-lg">こんな方におすすめです</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Users className="w-8 h-8" />,
                title: "異業種からの転職希望",
                subtitle: "（20〜30代）",
                description: "IT業界への転職を考えている方",
              },
              {
                icon: <Rocket className="w-8 h-8" />,
                title: "フリーランス移行検討中",
                subtitle: "の方",
                description: "独立を目指すエンジニアの方",
              },
              {
                icon: <Code className="w-8 h-8" />,
                title: "スキルチェンジ希望者",
                subtitle: "（例：フロント → バックエンド）",
                description: "技術領域を広げたい方",
              },
            ].map((target, index) => (
              <Card
                key={index}
                className="bg-gray-800 border-gray-700 hover:border-yellow-400/50 transition-all duration-300 text-center"
              >
                <CardContent className="p-8">
                  <div className="bg-yellow-400/20 text-yellow-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    {target.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{target.title}</h3>
                  <p className="text-yellow-400 font-semibold mb-4">{target.subtitle}</p>
                  <p className="text-gray-400">{target.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA中間 */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4 text-white">まずは無料相談から始めませんか？</h3>
          <p className="text-gray-400 mb-8">あなたのキャリアについて気軽にご相談ください</p>
          <CTAButton />
        </div>
      </section>

      {/* 案件紹介セクション */}
      <section className="py-20 px-4 bg-gray-800/50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-yellow-400">案件の一例</h2>
            <p className="text-gray-400 text-lg">実際の案件紹介実績をご紹介します</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-gray-800 border-gray-700 hover:border-yellow-400/50 transition-all duration-300">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center text-black font-bold text-xl">
                    S
                  </div>
                  <div>
                    <CardTitle className="text-white">Sさん</CardTitle>
                    <div className="flex items-center gap-2 mt-2">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-yellow-400 font-bold text-lg">月単価：50万円〜</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <span className="text-gray-400">業務内容：</span>
                    <span className="text-white">大手メーカーのバッチ開発</span>
                  </div>
                  <div>
                    <span className="text-gray-400">働き方：</span>
                    <span className="text-white">フルリモート・週5・準委任契約</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700 hover:border-yellow-400/50 transition-all duration-300">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center text-black font-bold text-xl">
                    O
                  </div>
                  <div>
                    <CardTitle className="text-white">Oさん</CardTitle>
                    <div className="flex items-center gap-2 mt-2">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-yellow-400 font-bold text-lg">月単価：65万円〜</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <span className="text-gray-400">業務内容：</span>
                    <span className="text-white">Java Webアプリ開発</span>
                  </div>
                  <div>
                    <span className="text-gray-400">働き方：</span>
                    <span className="text-white">週1出社・他リモート・週5・準委任契約</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* よくある質問セクション */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-yellow-400">よくある質問（Q&A）</h2>
            <p className="text-gray-400 text-lg">お客様からよくいただくご質問にお答えします</p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqData.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-gray-800 border-gray-700 rounded-lg px-6"
              >
                <AccordionTrigger className="text-white hover:text-yellow-400 transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-400 pb-6">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* 最終CTA */}
      <section className="py-20 px-4 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-white">
            あなたのエンジニアキャリアを
            <span className="text-yellow-400">次のステージ</span>へ
          </h2>
          <p className="text-xl text-gray-300 mb-8">まずは無料相談で、あなたの目標をお聞かせください</p>
          <CTAButton className="text-xl px-12 py-6" />
          <div className="mt-8 flex items-center justify-center gap-8 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span>完全無料相談</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span>成果報酬型</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span>継続サポート</span>
            </div>
          </div>
        </div>
      </section>

      {/* フッター */}
      <footer className="py-8 px-4 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-500">© 2024 エンジニア育成プログラム. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
