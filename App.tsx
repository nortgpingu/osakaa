
import React, { useState, useEffect } from 'react';
import { TabType, DailyPlan, ShoppingItem, Activity } from './types';
import { INITIAL_ITINERARY } from './constants';
import HomeView from './components/HomeView';
import ScheduleView from './components/ScheduleView';
import ShoppingView from './components/ShoppingView';
import TabBar from './components/TabBar';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('home');
  
  // 行程資料
  const [itinerary, setItinerary] = useState<DailyPlan[]>(() => {
    const saved = localStorage.getItem('kansai_itinerary');
    return saved ? JSON.parse(saved) : INITIAL_ITINERARY;
  });

  // 購物清單
  const [personalShopping, setPersonalShopping] = useState<ShoppingItem[]>(() => {
    const saved = localStorage.getItem('kansai_shopping_personal');
    return saved ? JSON.parse(saved) : [];
  });
  const [proxyShopping, setProxyShopping] = useState<ShoppingItem[]>(() => {
    const saved = localStorage.getItem('kansai_shopping_proxy');
    return saved ? JSON.parse(saved) : [];
  });

  // 分類清單
  const [categories, setCategories] = useState<string[]>(() => {
    const saved = localStorage.getItem('kansai_shopping_categories');
    return saved ? JSON.parse(saved) : ['藥妝店', '超市'];
  });

  useEffect(() => {
    localStorage.setItem('kansai_itinerary', JSON.stringify(itinerary));
  }, [itinerary]);

  useEffect(() => {
    localStorage.setItem('kansai_shopping_personal', JSON.stringify(personalShopping));
  }, [personalShopping]);

  useEffect(() => {
    localStorage.setItem('kansai_shopping_proxy', JSON.stringify(proxyShopping));
  }, [proxyShopping]);

  useEffect(() => {
    localStorage.setItem('kansai_shopping_categories', JSON.stringify(categories));
  }, [categories]);

  const updateActivities = (date: string, activities: Activity[]) => {
    setItinerary(prev => prev.map(plan => plan.date === date ? { ...plan, activities } : plan));
  };

  const updateReminder = (date: string, reminder: string) => {
    setItinerary(prev => prev.map(plan => plan.date === date ? { ...plan, reminder } : plan));
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return <HomeView itinerary={itinerary} onNavigate={setActiveTab} />;
      case 'schedule':
        return (
          <ScheduleView 
            itinerary={itinerary} 
            onUpdateActivities={updateActivities} 
            onUpdateReminder={updateReminder}
          />
        );
      case 'shopping':
        return (
          <ShoppingView 
            personalList={personalShopping} 
            proxyList={proxyShopping}
            setPersonalList={setPersonalShopping}
            setProxyList={setProxyShopping}
            categories={categories}
            setCategories={setCategories}
          />
        );
      default:
        return <HomeView itinerary={itinerary} onNavigate={setActiveTab} />;
    }
  };

  return (
    <div className="flex flex-col h-[100dvh] w-full max-w-md mx-auto bg-gray-50 overflow-hidden shadow-2xl relative border-x border-gray-200">
      <main className="flex-1 overflow-y-auto custom-scrollbar pb-20">
        {renderContent()}
      </main>
      <TabBar activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
};

export default App;
