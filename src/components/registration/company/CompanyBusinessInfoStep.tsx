import React from 'react';
import { User, DollarSign, Target, Users } from 'lucide-react';

interface CompanyBusinessInfoStepProps {
  formData: {
    contactPerson: {
      name: string;
      department: string;
      position: string;
      phone: string;
      email: string;
    };
    budget: {
      min: number;
      max: number;
    };
    targetGenres: string[];
    targetDemographics: {
      ageGroups: string[];
      gender: string;
      regions: string[];
    };
    pastExperience: string;
    productDescription: string;
    campaignObjectives: string[];
  };
  onChange: (field: string, value: any) => void;
  onNext: () => void;
  onBack: () => void;
}

const genres = [
  'ビューティー',
  'ファッション',
  'フード',
  'テクノロジー',
  'ライフスタイル',
  'トラベル',
  'フィットネス',
  'エンタメ'
];

const ageGroups = [
  '10代',
  '20代前半',
  '20代後半',
  '30代前半',
  '30代後半',
  '40代以上'
];

const regions = [
  '全国',
  '関東',
  '関西',
  '東海',
  '北海道',
  '東北',
  '中国',
  '四国',
  '九州'
];

const objectives = [
  '認知拡大',
  '商品販売促進',
  'ブランドイメージ向上',
  'SNSフォロワー増加',
  'サイトトラフィック増加',
  'リード獲得',
  'その他'
];

const CompanyBusinessInfoStep: React.FC<CompanyBusinessInfoStepProps> = ({
  formData,
  onChange,
  onNext,
  onBack
}) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext();
  };

  const updateContactPerson = (field: string, value: string) => {
    onChange('contactPerson', {
      ...formData.contactPerson,
      [field]: value
    });
  };

  const updateBudget = (field: string, value: number) => {
    onChange('budget', {
      ...formData.budget,
      [field]: value
    });
  };

  const toggleGenre = (genre: string) => {
    const newGenres = formData.targetGenres.includes(genre)
      ? formData.targetGenres.filter(g => g !== genre)
      : [...formData.targetGenres, genre];
    onChange('targetGenres', newGenres);
  };

  const toggleAgeGroup = (age: string) => {
    const newAgeGroups = formData.targetDemographics.ageGroups.includes(age)
      ? formData.targetDemographics.ageGroups.filter(a => a !== age)
      : [...formData.targetDemographics.ageGroups, age];
    onChange('targetDemographics', {
      ...formData.targetDemographics,
      ageGroups: newAgeGroups
    });
  };

  const toggleRegion = (region: string) => {
    const newRegions = formData.targetDemographics.regions.includes(region)
      ? formData.targetDemographics.regions.filter(r => r !== region)
      : [...formData.targetDemographics.regions, region];
    onChange('targetDemographics', {
      ...formData.targetDemographics,
      regions: newRegions
    });
  };

  const toggleObjective = (objective: string) => {
    const newObjectives = formData.campaignObjectives.includes(objective)
      ? formData.campaignObjectives.filter(o => o !== objective)
      : [...formData.campaignObjectives, objective];
    onChange('campaignObjectives', newObjectives);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Contact Person */}
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">担当者情報</h3>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              担当者名
            </label>
            <div className="relative">
              <input
                type="text"
                value={formData.contactPerson.name}
                onChange={(e) => updateContactPerson('name', e.target.value)}
                className="appearance-none block w-full px-3 py-2 pl-10 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-purple-500 focus:border-purple-500"
              />
              <User className="w-5 h-5 text-gray-400 absolute left-3 top-2.5" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              部署名
            </label>
            <input
              type="text"
              value={formData.contactPerson.department}
              onChange={(e) => updateContactPerson('department', e.target.value)}
              className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-purple-500 focus:border-purple-500"
            />
          </div>
        </div>
      </div>

      {/* Budget */}
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">想定予算</h3>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              最小予算
            </label>
            <div className="relative">
              <input
                type="number"
                value={formData.budget.min}
                onChange={(e) => updateBudget('min', parseInt(e.target.value))}
                className="appearance-none block w-full px-3 py-2 pl-10 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                placeholder="30000"
              />
              <DollarSign className="w-5 h-5 text-gray-400 absolute left-3 top-2.5" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              最大予算
            </label>
            <div className="relative">
              <input
                type="number"
                value={formData.budget.max}
                onChange={(e) => updateBudget('max', parseInt(e.target.value))}
                className="appearance-none block w-full px-3 py-2 pl-10 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                placeholder="100000"
              />
              <DollarSign className="w-5 h-5 text-gray-400 absolute left-3 top-2.5" />
            </div>
          </div>
        </div>
      </div>

      {/* Target Genres */}
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">希望するインフルエンサーのジャンル</h3>
        <div className="flex flex-wrap gap-2">
          {genres.map((genre) => (
            <button
              key={genre}
              type="button"
              onClick={() => toggleGenre(genre)}
              className={`px-4 py-2 rounded-full text-sm ${
                formData.targetGenres.includes(genre)
                  ? 'bg-purple-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {genre}
            </button>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between pt-4">
        <button
          type="button"
          onClick={onBack}
          className="px-6 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
        >
          戻る
        </button>
        <button
          type="submit"
          className="px-6 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700"
        >
          次へ
        </button>
      </div>
    </form>
  );
};

export default CompanyBusinessInfoStep;