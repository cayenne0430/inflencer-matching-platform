import React, { useState } from 'react';
import { Camera, Instagram, Twitter, Youtube, Facebook, Link as LinkIcon, Save, AlertCircle } from 'lucide-react';
import { useAuthStore } from '../store/authStore';

interface SocialLink {
  platform: string;
  username: string;
  url: string;
  followers: number;
}

interface Achievement {
  id: string;
  title: string;
  date: string;
  description: string;
}

const ProfilePage = () => {
  const { user } = useAuthStore();
  const [isEditing, setIsEditing] = useState(false);
  const [profileImage, setProfileImage] = useState('https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200');
  const [formData, setFormData] = useState({
    name: user?.name || '',
    bio: '美容とライフスタイルに関する情報を発信しています。自然派コスメと持続可能なライフスタイルに興味があります。',
    email: user?.email || '',
    phone: '090-1234-5678',
    location: '東京都',
    categories: ['ビューティー', 'ライフスタイル', 'サステナビリティ'],
    socialLinks: [
      { platform: 'Instagram', username: '@beauty_life', url: 'https://instagram.com/beauty_life', followers: 15000 },
      { platform: 'Twitter', username: '@beauty_life', url: 'https://twitter.com/beauty_life', followers: 8000 },
      { platform: 'Youtube', username: 'Beauty Life Channel', url: 'https://youtube.com/c/beautylife', followers: 5000 }
    ] as SocialLink[],
    achievements: [
      {
        id: '1',
        title: '化粧品ブランドAのアンバサダー就任',
        date: '2024-01',
        description: '年間を通じて商品開発やプロモーションに参加'
      },
      {
        id: '2',
        title: 'ビューティーアワード2023受賞',
        date: '2023-12',
        description: 'インフルエンサー部門で優秀賞を受賞'
      }
    ] as Achievement[]
  });

  const handleSave = () => {
    // TODO: API call to save profile data
    setIsEditing(false);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const getSocialIcon = (platform: string) => {
    switch (platform) {
      case 'Instagram':
        return <Instagram className="w-5 h-5" />;
      case 'Twitter':
        return <Twitter className="w-5 h-5" />;
      case 'Youtube':
        return <Youtube className="w-5 h-5" />;
      case 'Facebook':
        return <Facebook className="w-5 h-5" />;
      default:
        return <LinkIcon className="w-5 h-5" />;
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          {/* Header */}
          <div className="relative h-48 bg-gradient-to-r from-purple-600 to-purple-900">
            <div className="absolute -bottom-16 left-8">
              <div className="relative">
                <img
                  src={profileImage}
                  alt="Profile"
                  className="w-32 h-32 rounded-full border-4 border-white object-cover"
                />
                {isEditing && (
                  <label className="absolute bottom-0 right-0 bg-purple-600 text-white p-2 rounded-full cursor-pointer hover:bg-purple-500 transition">
                    <Camera className="w-5 h-5" />
                    <input
                      type="file"
                      className="hidden"
                      accept="image/*"
                      onChange={handleImageChange}
                    />
                  </label>
                )}
              </div>
            </div>
            <div className="absolute top-4 right-4">
              {isEditing ? (
                <button
                  onClick={handleSave}
                  className="bg-white text-purple-600 px-4 py-2 rounded-lg hover:bg-purple-50 transition flex items-center gap-2"
                >
                  <Save className="w-4 h-4" />
                  保存
                </button>
              ) : (
                <button
                  onClick={() => setIsEditing(true)}
                  className="bg-white text-purple-600 px-4 py-2 rounded-lg hover:bg-purple-50 transition"
                >
                  編集
                </button>
              )}
            </div>
          </div>

          {/* Profile Info */}
          <div className="pt-20 px-8 pb-8">
            <div className="mb-8">
              {isEditing ? (
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="text-2xl font-bold mb-2 px-2 py-1 border border-gray-300 rounded"
                />
              ) : (
                <h1 className="text-2xl font-bold mb-2">{formData.name}</h1>
              )}
              {isEditing ? (
                <textarea
                  value={formData.bio}
                  onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                  className="w-full px-2 py-1 border border-gray-300 rounded"
                  rows={3}
                />
              ) : (
                <p className="text-gray-600">{formData.bio}</p>
              )}
            </div>

            {/* Contact Information */}
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h2 className="text-lg font-semibold mb-4">連絡先情報</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">メールアドレス</label>
                    {isEditing ? (
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3 py-2 border border-gray-300 rounded"
                      />
                    ) : (
                      <div className="text-gray-800">{formData.email}</div>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">電話番号</label>
                    {isEditing ? (
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3 py-2 border border-gray-300 rounded"
                      />
                    ) : (
                      <div className="text-gray-800">{formData.phone}</div>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">活動地域</label>
                    {isEditing ? (
                      <input
                        type="text"
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        className="w-full px-3 py-2 border border-gray-300 rounded"
                      />
                    ) : (
                      <div className="text-gray-800">{formData.location}</div>
                    )}
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-lg font-semibold mb-4">カテゴリー</h2>
                <div className="flex flex-wrap gap-2">
                  {formData.categories.map((category, index) => (
                    <span
                      key={index}
                      className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm"
                    >
                      {category}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mb-8">
              <h2 className="text-lg font-semibold mb-4">SNSアカウント</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {formData.socialLinks.map((link, index) => (
                  <div
                    key={index}
                    className="flex items-center p-4 border border-gray-200 rounded-lg"
                  >
                    <div className="text-purple-600 mr-4">
                      {getSocialIcon(link.platform)}
                    </div>
                    <div>
                      <div className="font-medium">{link.username}</div>
                      <div className="text-sm text-gray-500">
                        フォロワー: {link.followers.toLocaleString()}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div>
              <h2 className="text-lg font-semibold mb-4">実績</h2>
              <div className="space-y-4">
                {formData.achievements.map((achievement) => (
                  <div
                    key={achievement.id}
                    className="border-l-4 border-purple-600 pl-4 py-2"
                  >
                    <div className="font-medium">{achievement.title}</div>
                    <div className="text-sm text-gray-500">{achievement.date}</div>
                    <div className="text-gray-600 mt-1">
                      {achievement.description}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Verification Notice */}
        <div className="mt-6 bg-yellow-50 border border-yellow-200 rounded-lg p-4 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
          <div>
            <div className="font-medium text-yellow-800">本人確認が必要です</div>
            <div className="text-sm text-yellow-700">
              より多くの案件に応募するために、本人確認書類を提出してください。
            </div>
            <button className="mt-2 text-yellow-800 hover:text-yellow-900 text-sm font-medium">
              本人確認を開始する →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;