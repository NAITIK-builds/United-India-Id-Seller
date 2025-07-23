import { useState } from 'react';
import { accounts } from '../data/accounts';
import { ImageWithLoader } from '../components/ui/image-with-loader';

const PlatformLogo = ({ platform }: { platform: string }) => {
  const logoProps = "w-8 h-8";

  switch (platform) {
    case 'Free Fire':
      return (
        <div className="w-20 h-20 bg-gradient-to-br from-orange-400 via-orange-500 to-red-500 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
          <svg className={logoProps} viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 16 L12 6 L16 16 L12 13 Z"/>
            <circle cx="12" cy="10" r="2"/>
          </svg>
        </div>
      );
    case 'Instagram':
      return (
        <div className="w-20 h-20 bg-gradient-to-br from-purple-500 via-pink-500 to-red-500 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
          <svg className={logoProps} viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" xmlns="http://www.w3.org/2000/svg">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
            <path d="m16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
          </svg>
        </div>
      );
    case 'YouTube':
      return (
        <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
          <svg className={logoProps} viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
            <path d="M23 7s-.2-1.4-.8-2c-.8-.8-1.6-.8-2-.9C17.3 4 12 4 12 4s-5.3 0-8.2.1c-.4.1-1.2.1-2 .9-.6.6-.8 2-.8 2S1 8.5 1 10v1.5c0 1.5 0 3 0 3s.2 1.4.8 2c.8.8 1.8.8 2.2.9 1.6.2 8 .2 8 .2s5.3 0 8.2-.1c.4-.1 1.2-.1 2-.9.6-.6.8-2 .8-2s0-1.5 0-3V10c0-1.5 0-3 0-3z"/>
            <polygon points="10,15 15,12 10,9" fill="#FF0000"/>
          </svg>
        </div>
      );
    case 'Telegram':
      return (
        <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
          <svg className={logoProps} viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
          </svg>
        </div>
      );
    default:
      return <div className="w-20 h-20"></div>;
  }
};

const platforms = [
  { 
    name: 'Free Fire', 
    available: true, 
    description: 'Premium accounts with rare skins and items',
    color: 'from-orange-50 to-red-50',
    textColor: 'text-orange-600',
    borderColor: 'border-orange-100 hover:border-orange-200'
  },
  { 
    name: 'Instagram', 
    available: false, 
    description: 'Verified accounts with large followings',
    color: 'from-purple-50 to-pink-50',
    textColor: 'text-gray-400',
    borderColor: 'border-purple-100 hover:border-purple-200'
  },
  { 
    name: 'YouTube', 
    available: false, 
    description: 'Monetized channels with subscribers',
    color: 'from-red-50 to-red-50',
    textColor: 'text-gray-400',
    borderColor: 'border-red-100 hover:border-red-200'
  },
  { 
    name: 'Telegram', 
    available: false, 
    description: 'Premium accounts with members',
    color: 'from-blue-50 to-blue-50',
    textColor: 'text-gray-400',
    borderColor: 'border-blue-100 hover:border-blue-200'
  },
];

export default function Index() {
  const [selectedPlatform, setSelectedPlatform] = useState<string | null>(null);
  const [showAccountGrid, setShowAccountGrid] = useState(false);
  const [selectedAccount, setSelectedAccount] = useState<any>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showToast, setShowToast] = useState(false);

  const openPlatformModal = (platform: string) => {
    setSelectedPlatform(platform);
  };

  const closePlatformModal = () => {
    setSelectedPlatform(null);
    setShowAccountGrid(false);
  };

  const handleBuyAccount = () => {
    if (selectedPlatform === 'Free Fire') {
      setShowAccountGrid(true);
    } else {
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
      closePlatformModal();
    }
  };

  const handleSellAccount = () => {
    window.open('https://wa.me/919214695258?text=I%20want%20to%20sell%20account', '_blank');
  };

  const openAccountDetails = (account: any) => {
    setSelectedAccount(account);
    setCurrentImageIndex(0);
  };

  const closeAccountDetails = () => {
    setSelectedAccount(null);
  };

  const nextImage = () => {
    if (selectedAccount) {
      setCurrentImageIndex((prev) => 
        prev === selectedAccount.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedAccount) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedAccount.images.length - 1 : prev - 1
      );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {!showAccountGrid ? (
        <div className="max-w-7xl mx-auto px-4 py-16">
          {/* Decorative Background Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
            <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{ animationDelay: '4s' }}></div>
          </div>

          <div className="relative z-10">
            {/* Header Section */}
            <div className="text-center mb-16">
              <div className="mb-8">
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 mb-6 tracking-tight">
                  Buy/Sell
                </h1>
                <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mb-6"></div>
                <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed font-light">
                  The ultimate marketplace for premium gaming and social media accounts
                </p>
              </div>
              
              {/* Sell Your Account Button */}
              <button
                onClick={handleSellAccount}
                className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white transition-all duration-300 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full shadow-lg hover:shadow-xl hover:scale-105 hover:from-green-600 hover:to-emerald-700 focus:outline-none focus:ring-4 focus:ring-green-200"
              >
                <span className="relative z-10">Sell Your Account</span>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-green-600 to-emerald-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <svg className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </div>

            {/* Platform Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {platforms.map((platform, index) => (
                <div
                  key={platform.name}
                  className={`group relative bg-gradient-to-br ${platform.color} backdrop-blur-sm rounded-3xl p-8 text-center hover:shadow-2xl transition-all duration-500 border-2 ${platform.borderColor} hover:-translate-y-2 cursor-pointer`}
                  style={{ animationDelay: `${index * 150}ms` }}
                  onClick={() => openPlatformModal(platform.name)}
                >
                  {/* Platform Logo */}
                  <div className="flex justify-center mb-6">
                    <PlatformLogo platform={platform.name} />
                  </div>
                  
                  {/* Platform Name */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors">
                    {platform.name}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                    {platform.description}
                  </p>
                  
                  {/* Browse Accounts Button */}
                  <button
                    className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${
                      platform.available
                        ? `${platform.textColor} bg-white/50 hover:bg-white/80 hover:scale-105 shadow-md hover:shadow-lg`
                        : 'text-gray-400 bg-gray-100/50 cursor-not-allowed'
                    }`}
                    disabled={!platform.available}
                  >
                    Browse Accounts
                  </button>

                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                </div>
              ))}
            </div>

            {/* Trust Indicators */}
            <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 border border-gray-200 mb-16">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Verified Accounts</h4>
                    <p className="text-gray-600 text-sm">All accounts are verified and legitimate</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Secure Payments</h4>
                    <p className="text-gray-600 text-sm">Your transactions are protected</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Instant Delivery</h4>
                    <p className="text-gray-600 text-sm">Get your account details immediately</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="text-center">
              <div className="text-gray-500 text-sm">
                © 2025 Buy/sell | Buy and sell premium accounts securely
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* Free Fire Accounts Grid */
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">
                Free Fire Accounts
              </h2>
              <p className="text-gray-600 mt-1">
                Choose from our premium collection of Free Fire accounts
              </p>
            </div>
            <button
              onClick={() => setShowAccountGrid(false)}
              className="self-start sm:self-auto bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg transition-colors duration-200 flex items-center space-x-2"
            >
              <span>←</span>
              <span>Back</span>
            </button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {accounts.map((account) => (
              <div
                key={account.id}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-200 hover:border-gray-300 group cursor-pointer transform hover:-translate-y-1"
                onClick={() => openAccountDetails(account)}
              >
                <div className="aspect-video bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center overflow-hidden">
                  {account.images && account.images.length > 0 ? (
                    <ImageWithLoader
                      src={account.images[0]}
                      alt={account.name + ' cover'}
                      className="w-full h-full"
                    />
                  ) : (
                    <span className="text-6xl">🎮</span>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {account.name}
                  </h3>
                  <div className="space-y-2 mb-4">
                    <p className="text-gray-600 text-sm">UID: {account.uid}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-700 font-medium">Level {account.level}</span>
                      <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                        {account.rank}
                      </span>
                    </div>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-green-700 font-bold text-lg">₹{account.price.toLocaleString()}</span>
                      <span className="text-xs text-gray-400">INR</span>
                    </div>
                  </div>
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-colors duration-200 font-medium">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Platform Selection Modal */}
      {selectedPlatform && !showAccountGrid && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white/95 backdrop-blur-md rounded-3xl p-8 max-w-md w-full shadow-2xl border border-white/20">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                {selectedPlatform}
              </h2>
              <p className="text-gray-600">What would you like to do?</p>
            </div>
            <div className="space-y-4">
              <button
                onClick={() => {
                  if (selectedPlatform === 'Free Fire') {
                    handleBuyAccount();
                  } else {
                    setShowToast(true);
                    setTimeout(() => setShowToast(false), 3000);
                    closePlatformModal();
                  }
                }}
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-4 rounded-2xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                Buy Account
              </button>
              <button
                onClick={handleSellAccount}
                className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white py-4 rounded-2xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                Sell Account
              </button>
              <button
                onClick={closePlatformModal}
                className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 py-4 rounded-2xl font-semibold transition-all duration-300"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Account Details Modal */}
      {selectedAccount && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50 overflow-y-auto">
          <div className="bg-white/95 backdrop-blur-md rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-white/20">
            {/* Header */}
            <div className="sticky top-0 bg-white/90 backdrop-blur-md border-b border-gray-200 px-6 py-4 flex items-center justify-between rounded-t-3xl">
              <h2 className="text-2xl font-bold text-gray-900">{selectedAccount.name}</h2>
              <button
                onClick={closeAccountDetails}
                className="text-gray-400 hover:text-gray-600 p-2 rounded-full hover:bg-gray-100 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="p-6">
              {/* Account Info */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                <div className="space-y-6">
                  <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Account Details</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600">UID:</span>
                        <span className="font-medium text-gray-900">{selectedAccount.uid}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Level:</span>
                        <span className="font-medium text-gray-900">{selectedAccount.level}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Rank:</span>
                        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm font-medium">
                          {selectedAccount.rank}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Price:</span>
                        <span className="font-bold text-green-700 text-lg">₹{selectedAccount.price.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Description</h3>
                    <p className="text-gray-700 leading-relaxed">
                      {selectedAccount.description}
                    </p>
                  </div>
                </div>

                {/* Media Gallery */}
                <div className="space-y-6">
                  <div className="relative bg-gray-100 rounded-2xl overflow-hidden aspect-video">
                    <ImageWithLoader
                      src={selectedAccount.images[currentImageIndex]}
                      alt={`${selectedAccount.name} screenshot ${currentImageIndex + 1}`}
                      className="w-full h-full"
                    />
                    
                    {/* Navigation Arrows */}
                    {selectedAccount.images.length > 1 && (
                      <>
                        <button
                          onClick={prevImage}
                          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm hover:bg-white text-gray-800 rounded-full w-10 h-10 flex items-center justify-center shadow-lg transition-all hover:scale-110"
                        >
                          ‹
                        </button>
                        <button
                          onClick={nextImage}
                          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm hover:bg-white text-gray-800 rounded-full w-10 h-10 flex items-center justify-center shadow-lg transition-all hover:scale-110"
                        >
                          ›
                        </button>
                      </>
                    )}
                    
                    {/* Image Counter */}
                    <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-black/60 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
                      {currentImageIndex + 1} / {selectedAccount.images.length}
                    </div>
                  </div>

                  {/* Video Preview */}
                  <div className="bg-gray-100 rounded-2xl overflow-hidden">
                    <video
                      src={selectedAccount.video}
                      controls
                      className="w-full h-48 object-cover"
                      onError={(e) => {
                        const target = e.target as (EventTarget & HTMLVideoElement) | null;
                        if (target && 'parentElement' in target && target.parentElement) {
                          target.style.display = 'none';
                          target.parentElement.innerHTML = '<div class="w-full h-48 flex items-center justify-center text-gray-500 bg-gray-100 rounded-2xl">Video preview not available</div>';
                        }
                      }}
                    >
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="text-center">
                <button
                  onClick={() => {
                    const acc = selectedAccount;
                    const message =
                      `🔰 Free Fire Account Purchase Request 🔰\n\n` +
                      `👤 Name: ${acc.name}\n` +
                      `🆔 UID: ${acc.uid}\n` +
                      `🎮 Level: ${acc.level}\n` +
                      `🏆 Rank: ${acc.rank}\n` +
                      `💰 Price: ₹${acc.price.toLocaleString()}\n\n` +
                      `📝 Description:\n${acc.description}\n\n` +
                      `📩 Please let me know the next steps to proceed. Thank you!`;
                    const url = `https://wa.me/919214695258?text=${encodeURIComponent(message)}`;
                    window.open(url, '_blank');
                  }}
                  className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                >
                  Contact to Purchase
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Toast Notification */}
      {showToast && (
        <div className="fixed top-6 right-6 bg-gradient-to-r from-red-500 to-red-600 text-white px-6 py-4 rounded-2xl shadow-lg z-50 flex items-center space-x-3 backdrop-blur-sm">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L5.082 15.5c-.77.833.192 2.5 1.732 2.5z" />
          </svg>
          <span className="font-medium">Accounts not available for this platform</span>
        </div>
      )}
    </div>
  );
}
