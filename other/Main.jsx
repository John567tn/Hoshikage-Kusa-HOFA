import React, { useState } from 'react';
import { 
  Bell, 
  MapPin, 
  Calendar, 
  Menu, 
  X, 
  ChevronRight, 
  Users, 
  ShieldAlert, 
  CheckCircle, 
  BookOpen,
  Info,
  Leaf,
  Gavel,
  MessageCircle,
  AlertTriangle,
  Ticket,
  ExternalLink,
  Clock,
  Camera,
  Home,
  Megaphone,
  Image as ImageIcon,
  Heart,
  UserPlus,
  QrCode,
  ArrowRight
} from 'lucide-react';

const App = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // --- 自定义图标/Logo 配置 ---
  // 你可以将下面的路径替换为你自己的图片路径，例如 "logo.png" 或网络链接
  const communityLogo = "https://pan.quark.cn/s/82c6c2226484"; 

  // 社区基础数据
  const communityInfo = {
    name: "Hoshikage Kusa • HOFA",
    cnName: "Hoshikage Kusa 星影茸 • HOFA",
    description: "各位兽兽、飞友的小社区",
    tagline: "在这里，每一片星影都值得被温柔对待。"
  };

  // 侧边栏菜单配置
  const menuItems = [
    { id: 'home', label: '社区首页', icon: <Home size={20} /> },
    { id: 'events', label: '兽聚资讯', icon: <Ticket size={20} /> },
    { id: 'rules', label: '社区公约', icon: <Gavel size={20} /> },
    { id: 'join', label: '加入社区', icon: <UserPlus size={20} /> },
    { id: 'notices', label: '公告通知', icon: <Megaphone size={20} /> },
    { id: 'gallery', label: '精彩相册', icon: <ImageIcon size={20} /> },
  ];

  // 兽聚资讯数据
  const events = [
    {
      id: 1,
      title: "Test01",
      date: "Test01",
      location: "Test01",
      tag: "Test01",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      title: "Test02",
      date: "Test02",
      location: "Test02",
      tag: "Test02",
      image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=800&q=80"
    }
  ];

  // 社区分支群组
  const groupBranches = [
    {
      id: 1,
      name: "Hoshikage Kusa 星影茸 • HOFA ",
      type: "社区主群",
      description: "社区的主群，欢迎所有兽兽&飞友加入。",
      count: "10+ 成员",
      color: "from-emerald-500 to-teal-600"
    },
    {
      id: 2,
      name: "分支-福瑞(待创建)",
      type: "福瑞",
      description: "兽兽、Fursuiter 专属频道。",
      count: "0 成员",
      color: "from-blue-500 to-indigo-600"
    },
    {
      id: 3,
      name: "分支-飞友(待创建)",
      type: "飞友",
      description: "航空爱好者、模拟飞行玩家的集合点。",
      count: "0 成员",
      color: "from-sky-400 to-blue-500"
    }
  ];

  // 公告数据
  const notices = [
    { id: 1, type: "普通通知", title: "群内昵称格式修改通知", date: "2025-12-16", content: "请务必按照格式修改：【福瑞/飞友】+ QQ名称。未修改者将无法获得分支群分配。" },
    { id: 2, type: "管理员招募", title: "社区主群常驻管理员与非常驻管理员目前正接受申请", date: "2025-12-15", content: "福瑞＆飞友社区-[Hoshikage Kusa 星影茸• HOFA] 正在紧锣密鼓的筹划中，现需要招募两名常驻furry管理员以及三名非常驻管理员，详情请联系Ryuuge Kisaki(3780090971)/Gokugo極伍(2179287841)" }
  ];

  return (
    <div className="flex min-h-screen bg-[#f8f9fa] text-slate-800">
      
      {/* --- 侧边栏 (Sidebar) --- */}
      <aside className={`
        fixed inset-y-0 left-0 z-50 w-64 bg-slate-900 text-white transform transition-transform duration-300 ease-in-out
        ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0
      `}>
        <div className="flex flex-col h-full">
          {/* Logo 区域 - 已替换为自定义图片 */}
          <div className="p-6 border-b border-slate-800 flex items-center gap-3">
            <div className="w-10 h-10 bg-white rounded-lg overflow-hidden shadow-lg shrink-0">
              <img 
                src={communityLogo} 
                alt="Logo" 
                className="w-full h-full object-cover"
                onError={(e) => { e.target.src = "https://via.placeholder.com/40?text=Logo" }} // 备选方案
              />
            </div>
            <div>
              <h1 className="font-black text-lg leading-tight">星影茸</h1>
              <p className="text-[10px] text-slate-400 uppercase tracking-widest">Hoshikage Kusa</p>
            </div>
          </div>

          {/* 导航链接 */}
          <nav className="flex-1 px-4 py-6 space-y-2">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => { setActiveTab(item.id); setIsMobileMenuOpen(false); }}
                className={`
                  w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200
                  ${activeTab === item.id 
                    ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-900/20' 
                    : 'text-slate-400 hover:bg-slate-800 hover:text-white'}
                `}
              >
                {item.icon}
                <span className="font-medium">{item.label}</span>
              </button>
            ))}
          </nav>

          {/* 底部版权 */}
          <div className="p-6 border-t border-slate-800">
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <Heart size={12} className="text-red-500" />
              <span>Hoshikage Kusa 星影茸 • HOFA</span>
            </div>
          </div>
        </div>
      </aside>

      {/* --- 主内容区域 (Main) --- */}
      <main className="flex-1 md:ml-64 min-h-screen flex flex-col">
        
        {/* 顶部移动端导航头 - 已替换为自定义图片 */}
        <header className="md:hidden flex items-center justify-between p-4 bg-white border-b sticky top-0 z-40">
          <div className="flex items-center gap-2">
            <img 
              src={communityLogo} 
              alt="Logo" 
              className="w-8 h-8 rounded-md object-cover" 
              onError={(e) => { e.target.src = "https://via.placeholder.com/32?text=H" }}
            />
            <span className="font-bold">星影茸 • HOFA</span>
          </div>
          <button onClick={() => setIsMobileMenuOpen(true)} className="p-2 text-slate-600">
            <Menu size={24} />
          </button>
        </header>

        {/* 内容容器 */}
        <div className="p-6 md:p-10 flex-grow max-w-6xl w-full mx-auto">
          
          {/* --- 首页 (Home) --- */}
          {activeTab === 'home' && (
            <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4">
              <div className="bg-white rounded-[2rem] p-8 md:p-16 relative overflow-hidden shadow-sm border border-slate-100">
                <div className="absolute top-0 right-0 p-12 opacity-5 scale-150 grayscale">
                  <img src={communityLogo} alt="Background Watermark" className="w-64 h-64 object-contain" />
                </div>
                <div className="relative z-10">
                  <span className="inline-block px-4 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-bold mb-4">Official Website</span>
                  <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 leading-tight">
                    欢迎来到 <span className="text-emerald-500">Hoshikage Kusa</span> <br />
                    星影茸 • HOFA 社区。
                  </h2>
                  <p className="text-lg text-slate-500 max-w-xl leading-relaxed">
                    {communityInfo.tagline} 这里是属于兽兽和飞友的小社区，欢迎加入～
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-emerald-600 text-white p-8 rounded-[2rem] shadow-xl shadow-emerald-100 relative group cursor-pointer" onClick={() => setActiveTab('events')}>
                  <div className="absolute top-6 right-6 opacity-20 group-hover:scale-110 transition-transform"><Ticket size={40} /></div>
                  <h3 className="text-xl font-bold mb-1">兽聚情报</h3>
                  <p className="opacity-80 text-sm mb-6">规划你的面基之旅</p>
                  <ArrowRight size={20} />
                </div>
                <div className="bg-slate-900 text-white p-8 rounded-[2rem] shadow-xl shadow-slate-200 relative group cursor-pointer" onClick={() => setActiveTab('rules')}>
                  <div className="absolute top-6 right-6 opacity-20 group-hover:scale-110 transition-transform"><ShieldAlert size={40} /></div>
                  <h3 className="text-xl font-bold mb-1">社区公约</h3>
                  <p className="opacity-80 text-sm mb-6">共同维护社区环境</p>
                  <ArrowRight size={20} />
                </div>
                <div className="bg-white border border-slate-200 p-8 rounded-[2rem] shadow-sm relative group cursor-pointer hover:border-emerald-500 transition-colors" onClick={() => setActiveTab('join')}>
                  <div className="absolute top-6 right-6 text-emerald-600 opacity-20 group-hover:scale-110 transition-transform"><UserPlus size={40} /></div>
                  <h3 className="text-xl font-bold mb-1 text-slate-900">加入我们</h3>
                  <p className="text-slate-500 text-sm mb-6">发现同好分支群</p>
                  <ArrowRight size={20} className="text-emerald-600" />
                </div>
              </div>
            </div>
          )}

          {/* --- 加入社区 (Join) --- */}
          {activeTab === 'join' && (
            <div className="animate-in fade-in max-w-5xl">
              <div className="mb-10">
                <h2 className="text-3xl font-black mb-2">加入社区</h2>
                <p className="text-slate-500 text-lg">寻找你的归属分支，开启交流之旅。</p>
              </div>

              {/* 入群须知 */}
              <div className="bg-white rounded-[2rem] p-8 border border-slate-100 mb-10 flex flex-col md:flex-row gap-8 items-center shadow-sm">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center shrink-0">
                  <div className="w-full h-full flex items-center justify-center">
                    <Info size={32} />
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-lg mb-2">申请前必看</h4>
                  <ul className="text-slate-600 text-sm space-y-2 list-disc list-inside">
                    <li>入群后请第一时间修改群昵称：<span className="font-bold text-emerald-600 underline">【福瑞/飞友】+ 名称</span></li>
                    <li>严禁政治、敏感、R18、网暴开盒等违规内容。</li>
                    <li>申请时请正确填写问题。</li>
                  </ul>
                </div>
                <div className="p-4 bg-slate-50 rounded-2xl border border-dashed border-slate-300">
                  <div className="flex items-center gap-3 text-slate-500 font-bold mb-2 text-xs uppercase tracking-widest">
                    <QrCode size={14} /> 审核通道
                  </div>
                  <div className="w-24 h-24 bg-slate-200 rounded-lg flex items-center justify-center italic text-[10px] text-slate-400 text-center px-2">
                    [审核员/二维码 占位]
                  </div>
                </div>
              </div>

              {/* 分支展示 */}
              <div className="grid md:grid-cols-3 gap-6">
                {groupBranches.map(group => (
                  <div key={group.id} className="group relative bg-white rounded-[2rem] border border-slate-100 p-8 hover:shadow-xl hover:shadow-slate-200/50 transition-all cursor-default">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${group.color} text-white flex items-center justify-center mb-6 shadow-lg shadow-emerald-500/10`}>
                      <Users size={24} />
                    </div>
                    <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded uppercase mb-4 inline-block">{group.type}</span>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{group.name}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed mb-6 h-10 line-clamp-2">{group.description}</p>
                    <div className="flex items-center justify-between mt-auto pt-6 border-t border-slate-50">
                      <span className="text-xs font-medium text-slate-400">{group.count}</span>
                      <button className="text-emerald-600 group-hover:translate-x-1 transition-transform">
                        <ArrowRight size={20} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* 找不到群？ */}
              <div className="mt-12 text-center p-10 bg-slate-900 rounded-[2rem] text-white overflow-hidden relative">
                <div className="absolute -bottom-10 -right-10 opacity-10 rotate-12">
                  <MessageCircle size={200} />
                </div>
                <h4 className="text-2xl font-bold mb-4">没有找到感兴趣的领域？</h4>
                <p className="text-slate-400 mb-8 max-w-md mx-auto">没关系！你可以先加入社区总群，在群内联系管理员开设新的分支群。</p>
                <button className="px-8 py-3 bg-emerald-500 hover:bg-emerald-600 rounded-full font-bold transition shadow-lg shadow-emerald-500/20">联系群主/审核</button>
              </div>
            </div>
          )}

          {/* --- 兽聚资讯 (Events) --- */}
          {activeTab === 'events' && (
            <div className="animate-in fade-in">
              <div className="flex justify-between items-end mb-10">
                <div>
                  <h2 className="text-3xl font-black mb-2">兽聚资讯</h2>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                {events.map(event => (
                  <div key={event.id} className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-xl transition-all group">
                    <div className="h-56 relative overflow-hidden">
                      <img src={event.image} alt={event.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-bold text-emerald-600">{event.tag}</span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-4">{event.title}</h3>
                      <div className="space-y-2 text-sm text-slate-500 mb-6">
                        <div className="flex items-center gap-2"><Calendar size={16} /> {event.date}</div>
                        <div className="flex items-center gap-2"><MapPin size={16} /> {event.location}</div>
                      </div>
                      <button className="w-full py-3 bg-slate-50 text-slate-700 font-bold rounded-xl hover:bg-emerald-600 hover:text-white transition">查看活动详情</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* --- 社区规则 (Rules) --- */}
          {activeTab === 'rules' && (
            <div className="animate-in fade-in max-w-3xl">
              <h2 className="text-3xl font-black mb-8">社区规则</h2>
              <div className="space-y-6">
                {[
                  { id: "2.1", title: "政治与敏感话题", content: "严禁讨论政治、敏感、国家相关问题。本社区旨在提供轻松的交流环境。", penalty: "直接踢出" },
                  { id: "2.2", title: "内容底线", content: "严禁发布 R18、过度擦边、易让人不适、恐、谣、暴等内容。", penalty: "1次" },
                  { id: "2.7", title: "文明交流", content: "严禁引战、吵架、挑衅他人或道德绑架。请保持友善。", penalty: "2次" },
                  { id: "2.8", title: "消息频率", content: "严禁短时间内连续刷屏超过 5 条及以上。", penalty: "3次" }
                ].map(rule => (
                  <div key={rule.id} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex gap-6">
                    <div className="w-12 h-12 bg-red-50 text-red-500 rounded-xl flex items-center justify-center font-bold shrink-0">
                      {rule.id}
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <h4 className="font-bold text-lg">{rule.title}</h4>
                        <span className="text-[10px] bg-red-100 text-red-700 px-2 py-0.5 rounded uppercase font-bold">{rule.penalty}</span>
                      </div>
                      <p className="text-slate-500 text-sm leading-relaxed">{rule.content}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-10 p-6 bg-amber-50 rounded-2xl border border-amber-100 text-amber-800 text-sm italic">
                “网络不是法外之地，这个社区是属于全体群友/社区人员的希望各位都能遵守以上的规则，让各位都能有一个愉快和谐的社区环境去聊天/讨论。”
              </div>
            </div>
          )}

          {/* --- 公告通知 (Notices) --- */}
          {activeTab === 'notices' && (
             <div className="animate-in fade-in max-w-4xl">
              <h2 className="text-3xl font-black mb-8">社区公告</h2>
              <div className="space-y-4">
                {notices.map(notice => (
                  <div key={notice.id} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:border-emerald-200 transition group">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl">
                          <Megaphone size={20} />
                        </div>
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-[10px] font-bold bg-emerald-600 text-white px-2 py-0.5 rounded">{notice.type}</span>
                            <span className="text-xs text-slate-400 font-mono">{notice.date}</span>
                          </div>
                          <h4 className="font-bold text-slate-800 group-hover:text-emerald-600 transition">{notice.title}</h4>
                          <p className="text-sm text-slate-500 mt-2 leading-relaxed">{notice.content}</p>
                        </div>
                      </div>
                      <button className="text-slate-400 hover:text-emerald-600 transition whitespace-nowrap"><ChevronRight /></button>
                    </div>
                  </div>
                ))}
              </div>
             </div>
          )}

          {/* --- 相册 (Gallery) --- */}
          {activeTab === 'gallery' && (
            <div className="animate-in fade-in">
              <div className="mb-10">
                <h2 className="text-3xl font-black mb-2">社区相册</h2>
                <p className="text-slate-500">定格毛茸茸的快乐时光</p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[1, 2, 3, 4, 5, 6, 7, 8].map(i => (
                  <div key={i} className="aspect-square rounded-2xl overflow-hidden bg-slate-200 relative group cursor-pointer shadow-sm">
                    <img src={`https://picsum.photos/seed/${i + 50}/600`} alt="Gallery" className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <Camera className="text-white" size={24} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </main>

      {/* 侧边栏遮罩 (移动端) */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </div>
  );
};

export default App;