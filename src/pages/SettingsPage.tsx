import React, { useState } from 'react';
import { Bell, Lock, Globe, Mail, Smartphone, CreditCard, AlertCircle } from 'lucide-react';

const SettingsPage = () => {
  const [notificationSettings, setNotificationSettings] = useState({
    email: {
      newCampaigns: true,
      messages: true,
      statusUpdates: true,
      newsletter: false
    },
    push: {
      newCampaigns: true,
      messages: true,
      statusUpdates: false
    }
  });

  const [privacySettings, setPrivacySettings] = useState({
    profileVisibility: 'public',
    showEarnings: false,
    allowMessages: true
  });

  const [languageSettings, setLanguageSettings] = useState({
    language: 'ja',
    timezone: 'Asia/Tokyo'
  });

  const handleNotificationChange = (type: 'email' | 'push', setting: string) => {
    setNotificationSettings(prev => ({
      ...prev,
      [type]: {
        ...prev[type],
        [setting]: !prev[type][setting as keyof typeof prev[typeof type]]
      }
    }));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-2xl font-bold mb-8">設定</h1>

        {/* Notification Settings */}
        <section className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="flex items-center gap-3 mb-6">
            <Bell className="w-6 h-6 text-purple-600" />
            <h2 className="text-xl font-semibold">通知設定</h2>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="font-medium mb-4 flex items-center gap-2">
                <Mail className="w-5 h-5" />
                メール通知
              </h3>
              <div className="space-y-4">
                {Object.entries(notificationSettings.email).map(([key, value]) => (
                  <label key={key} className="flex items-center justify-between">
                    <span className="text-gray-700">
                      {key === 'newCampaigns' && '新規案件の通知'}
                      {key === 'messages' && 'メッセージの通知'}
                      {key === 'statusUpdates' && 'ステータス更新の通知'}
                      {key === 'newsletter' && 'ニュースレター'}
                    </span>
                    <div className="relative inline-block w-10 mr-2 align-middle select-none">
                      <input
                        type="checkbox"
                        checked={value}
                        onChange={() => handleNotificationChange('email', key)}
                        className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
                      />
                      <label className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"></label>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-medium mb-4 flex items-center gap-2">
                <Smartphone className="w-5 h-5" />
                プッシュ通知
              </h3>
              <div className="space-y-4">
                {Object.entries(notificationSettings.push).map(([key, value]) => (
                  <label key={key} className="flex items-center justify-between">
                    <span className="text-gray-700">
                      {key === 'newCampaigns' && '新規案件の通知'}
                      {key === 'messages' && 'メッセージの通知'}
                      {key === 'statusUpdates' && 'ステータス更新の通知'}
                    </span>
                    <div className="relative inline-block w-10 mr-2 align-middle select-none">
                      <input
                        type="checkbox"
                        checked={value}
                        onChange={() => handleNotificationChange('push', key)}
                        className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
                      />
                      <label className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"></label>
                    </div>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Privacy Settings */}
        <section className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="flex items-center gap-3 mb-6">
            <Lock className="w-6 h-6 text-purple-600" />
            <h2 className="text-xl font-semibold">プライバシー設定</h2>
          </div>

          <div className="space-y-6">
            <div>
              <label className="block mb-2">プロフィールの公開範囲</label>
              <select
                value={privacySettings.profileVisibility}
                onChange={(e) => setPrivacySettings(prev => ({
                  ...prev,
                  profileVisibility: e.target.value
                }))}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500"
              >
                <option value="public">全体に公開</option>
                <option value="private">非公開</option>
                <option value="connections">取引のある企業のみ</option>
              </select>
            </div>

            <label className="flex items-center justify-between">
              <span className="text-gray-700">収益情報を公開する</span>
              <div className="relative inline-block w-10 mr-2 align-middle select-none">
                <input
                  type="checkbox"
                  checked={privacySettings.showEarnings}
                  onChange={() => setPrivacySettings(prev => ({
                    ...prev,
                    showEarnings: !prev.showEarnings
                  }))}
                  className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
                />
                <label className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"></label>
              </div>
            </label>

            <label className="flex items-center justify-between">
              <span className="text-gray-700">メッセージの受信を許可する</span>
              <div className="relative inline-block w-10 mr-2 align-middle select-none">
                <input
                  type="checkbox"
                  checked={privacySettings.allowMessages}
                  onChange={() => setPrivacySettings(prev => ({
                    ...prev,
                    allowMessages: !prev.allowMessages
                  }))}
                  className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
                />
                <label className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"></label>
              </div>
            </label>
          </div>
        </section>

        {/* Language and Region */}
        <section className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="flex items-center gap-3 mb-6">
            <Globe className="w-6 h-6 text-purple-600" />
            <h2 className="text-xl font-semibold">言語と地域</h2>
          </div>

          <div className="space-y-6">
            <div>
              <label className="block mb-2">言語</label>
              <select
                value={languageSettings.language}
                onChange={(e) => setLanguageSettings(prev => ({
                  ...prev,
                  language: e.target.value
                }))}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500"
              >
                <option value="ja">日本語</option>
                <option value="en">English</option>
              </select>
            </div>

            <div>
              <label className="block mb-2">タイムゾーン</label>
              <select
                value={languageSettings.timezone}
                onChange={(e) => setLanguageSettings(prev => ({
                  ...prev,
                  timezone: e.target.value
                }))}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500"
              >
                <option value="Asia/Tokyo">東京 (GMT+9:00)</option>
                <option value="Asia/Seoul">ソウル (GMT+9:00)</option>
                <option value="Asia/Shanghai">上海 (GMT+8:00)</option>
              </select>
            </div>
          </div>
        </section>

        {/* Payment Settings */}
        <section className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="flex items-center gap-3 mb-6">
            <CreditCard className="w-6 h-6 text-purple-600" />
            <h2 className="text-xl font-semibold">支払い設定</h2>
          </div>

          <div className="space-y-4">
            <div className="flex items-start gap-4 p-4 border border-gray-200 rounded-lg">
              <CreditCard className="w-8 h-8 text-purple-600" />
              <div>
                <div className="font-medium">みずほ銀行</div>
                <div className="text-gray-600">渋谷支店 普通 1234567</div>
                <div className="text-gray-600">タナカ タロウ</div>
              </div>
            </div>
            <button className="text-purple-600 hover:text-purple-500 font-medium">
              振込先を変更する
            </button>
          </div>
        </section>

        {/* Security Notice */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
          <div>
            <div className="font-medium text-yellow-800">セキュリティ保護のお願い</div>
            <div className="text-sm text-yellow-700">
              アカウントの安全性を高めるため、2段階認証の設定をお勧めします。
            </div>
            <button className="mt-2 text-yellow-800 hover:text-yellow-900 text-sm font-medium">
              2段階認証を設定する →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;