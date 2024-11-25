import React from 'react';
import { Link } from 'react-router-dom';
import { Crown } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div>
            <div className="flex items-center space-x-2 text-white mb-4">
              <Crown className="w-6 h-6" />
              <span className="text-lg font-bold">VIPキャスティング</span>
            </div>
            <p className="text-sm">
              インフルエンサーと企業を繋ぐ、
              新しいマッチングプラットフォーム。
              あなたの影響力で、新しい価値を創造しましょう。
            </p>
          </div>
          
          {/* For Influencers */}
          <div>
            <h4 className="text-white font-semibold mb-4">インフルエンサー向け</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/campaigns" className="hover:text-white transition">
                  案件を探す
                </Link>
              </li>
              <li>
                <Link to="/guide/registration" className="hover:text-white transition">
                  登録方法
                  <span className="ml-2 text-xs bg-purple-600 text-white px-2 py-0.5 rounded-full">
                    簡単3分
                  </span>
                </Link>
              </li>
              <li>
                <Link to="/guide/earnings" className="hover:text-white transition">
                  報酬について
                  <span className="ml-2 text-xs bg-green-600 text-white px-2 py-0.5 rounded-full">
                    成功報酬
                  </span>
                </Link>
              </li>
              <li>
                <Link to="/case-studies" className="hover:text-white transition">
                  成功事例
                  <span className="ml-2 text-xs bg-yellow-600 text-white px-2 py-0.5 rounded-full">
                    実績多数
                  </span>
                </Link>
              </li>
              <li>
                <Link to="/guide/safety" className="hover:text-white transition">
                  安全な取引について
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Company Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">会社情報</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="hover:text-white transition">
                  会社概要
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-white transition">
                  プライバシーポリシー
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-white transition">
                  利用規約
                </Link>
              </li>
              <li>
                <Link to="/security" className="hover:text-white transition">
                  情報セキュリティ方針
                </Link>
              </li>
              <li>
                <Link to="/careers" className="hover:text-white transition">
                  採用情報
                  <span className="ml-2 text-xs bg-blue-600 text-white px-2 py-0.5 rounded-full">
                    積極採用中
                  </span>
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Support */}
          <div>
            <h4 className="text-white font-semibold mb-4">サポート</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/help" className="hover:text-white transition">
                  ヘルプセンター
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition">
                  お問い合わせ
                </Link>
              </li>
              <li>
                <Link to="/guide/verification" className="hover:text-white transition">
                  本人確認について
                </Link>
              </li>
              <li>
                <a 
                  href="tel:0120-xxx-xxx"
                  className="hover:text-white transition flex items-center"
                >
                  <span className="mr-2">カスタマーサポート</span>
                  <span className="text-xs bg-gray-700 text-gray-300 px-2 py-0.5 rounded-full">
                    平日 10:00-18:00
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm mb-4 md:mb-0">
              © 2024 VIPキャスティング. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <a href="https://twitter.com/vipcasting" className="hover:text-white transition">
                Twitter
              </a>
              <a href="https://instagram.com/vipcasting" className="hover:text-white transition">
                Instagram
              </a>
              <a href="https://www.youtube.com/vipcasting" className="hover:text-white transition">
                YouTube
              </a>
            </div>
          </div>
          <div className="mt-4 text-xs text-gray-500 text-center md:text-left">
            VIPキャスティングは、インフルエンサーマーケティングの健全な発展を目指し、
            業界ガイドラインに準拠したサービス運営を行っています。
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;