<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ClassCompass</title>
    <!-- Tailwind CSS for styling -->
    <script src="https://cdn.tailwindcss.com"></script>
    <!-- React Libraries -->
    <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
    <!-- Babel to transpile JSX in the browser -->
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
    <style>
        body {
            background-color: #f3f4f6;
            font-family: sans-serif;
        }
        .shadow-subtle {
             box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -2px rgba(0, 0, 0, 0.05);
        }
    </style>
</head>
<body>
    <div id="root"></div>

    <script type="text/babel">
        // --- ICONS ---
        const DashboardIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="7" height="7" x="3" y="3" rx="1"/><rect width="7" height="7" x="14" y="3" rx="1"/><rect width="7" height="7" x="14" y="14" rx="1"/><rect width="7" height="7" x="3" y="14" rx="1"/></svg> );
        const SettingsIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 0 2l-.15.08a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l-.22-.38a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1 0-2l.15.08a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg> );
        const AdminIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg> );
        const CompassIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon></svg> );
        const ClipboardIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect></svg> );

        // --- AUTH & ROLES ---
        const ROLES = { ADMIN: 'Admin', TEACHER: 'Teacher', PARAPROFESSIONAL: 'Paraprofessional', SPECIALIST: 'Behavior Instructional Specialist', PARENT: 'Parent' };

        // --- MOCK DATA ---
        const mockUsers = [
          { id: 1, name: 'Dr. Evelyn Reed', role: ROLES.ADMIN },
          { id: 2, name: 'Mr. David Chen', role: ROLES.TEACHER },
          { id: 3, name: 'Ms. Maria Garcia', role: ROLES.PARAPROFESSIONAL },
          { id: 4, name: 'Dr. Sam Jones', role: ROLES.SPECIALIST },
          { id: 5, name: 'Sarah Carter', role: ROLES.PARENT },
        ];

        // --- PAGE COMPONENTS ---
        const DashboardPage = ({ currentUser }) => (
            <div>
                <h1 className="text-4xl font-bold text-gray-800 mb-2">Dashboard</h1>
                <p className="text-gray-600 mb-6">Welcome, {currentUser.name}.</p>
                <div className="p-8 bg-white rounded-2xl shadow-subtle">
                    <div className="text-center text-gray-400 p-8 border-2 border-dashed rounded-lg">
                        <p>Application features will be built here.</p>
                    </div>
                </div>
            </div>
        );
        const DataCollectionPage = () => ( <div className="w-full max-w-4xl p-8 bg-white rounded-2xl shadow-subtle"><h1 className="text-4xl font-bold text-gray-800">Data Collection</h1><p className="mt-4 text-gray-600">Data collection tools will be added here.</p></div> );
        const AdminPage = () => ( <div className="w-full max-w-4xl p-8 bg-white rounded-2xl shadow-subtle"><h1 className="text-4xl font-bold text-gray-800">Admin Panel</h1><p className="mt-4 text-gray-600">User management and system settings will go here.</p></div> );
        const SettingsPage = () => ( <div className="w-full max-w-4xl p-8 bg-white rounded-2xl shadow-subtle"><h1 className="text-4xl font-bold text-gray-800">Settings</h1><p className="mt-4 text-gray-600">User preferences and app settings will go here.</p></div> );

        // --- LOGIN SCREEN ---
        const LoginScreen = ({ onLogin }) => (
            <div className="flex min-h-screen items-center justify-center">
                <div className="w-full max-w-sm p-8 bg-white rounded-2xl shadow-lg space-y-4">
                    <div className="flex items-center space-x-3 justify-center text-amber-600">
                        <CompassIcon />
                        <h1 className="text-3xl font-bold text-gray-800">ClassCompass</h1>
                    </div>
                    <h2 className="text-center text-xl font-semibold text-gray-700 pt-4">Select a user to log in</h2>
                    <div className="space-y-2">
                        {mockUsers.map(user => (
                            <button key={user.id} onClick={() => onLogin(user)} className="w-full px-4 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-amber-100 hover:text-amber-700 transition-colors text-left">
                                <p className="font-semibold">{user.name}</p>
                                <p className="text-sm text-gray-500">{user.role}</p>
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        );

        // --- MAIN APP COMPONENT ---
        const App = () => {
          const [currentPage, setCurrentPage] = React.useState('dashboard');
          const [currentUser, setCurrentUser] = React.useState(null);
          
          const handleLogin = (user) => { setCurrentUser(user); setCurrentPage('dashboard'); };
          const handleLogout = () => { setCurrentUser(null); };

          if (!currentUser) {
            return <LoginScreen onLogin={handleLogin} />;
          }
          
          const renderPage = () => {
            switch (currentPage) {
              case 'admin': return <AdminPage />;
              case 'settings': return <SettingsPage />;
              case 'data-collection': return <DataCollectionPage />;
              case 'dashboard': default: return <DashboardPage currentUser={currentUser} />;
            }
          };
          
          const NavLink = ({ pageName, icon, children }) => (
            <button onClick={() => setCurrentPage(pageName)} className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all ${currentPage === pageName ? 'bg-amber-500 text-white shadow-md' : 'text-gray-500 hover:bg-gray-200 hover:text-gray-800'}`}>
                {icon}
                <span className="font-semibold">{children}</span>
            </button>
          );
          
          const staffRoles = [ROLES.ADMIN, ROLES.TEACHER, ROLES.PARAPROFESSIONAL, ROLES.SPECIALIST];

          return (
            <div className="flex h-screen">
              <nav className="w-64 bg-white p-6 shadow-lg flex flex-col justify-between">
                <div>
                    <div className="flex items-center space-x-3 mb-10 text-amber-600">
                        <div className="w-10 h-10 bg-amber-600 rounded-lg flex items-center justify-center text-white">
                            <CompassIcon/>
                        </div>
                        <h1 className="text-2xl font-bold text-gray-800">ClassCompass</h1>
                    </div>
                    <div className="space-y-4">
                        <NavLink pageName="dashboard" icon={<DashboardIcon />}>Dashboard</NavLink>
                        {staffRoles.includes(currentUser.role) && <NavLink pageName="data-collection" icon={<ClipboardIcon />}>Data Collection</NavLink>}
                        {currentUser.role === ROLES.ADMIN && <NavLink pageName="admin" icon={<AdminIcon />}>Admin</NavLink>}
                        <NavLink pageName="settings" icon={<SettingsIcon />}>Settings</NavLink>
                    </div>
                </div>
                <div className="text-center p-2 border-t">
                    <p className="text-sm font-semibold">{currentUser.name}</p>
                    <p className="text-xs text-gray-500">{currentUser.role}</p>
                    <button onClick={handleLogout} className="text-xs text-amber-600 hover:underline mt-2">Log Out</button>
                </div>
              </nav>
              <main className="flex-1 p-10 overflow-y-auto">{renderPage()}</main>
            </div>
          );
        }

        const container = document.getElementById('root');
        const root = ReactDOM.createRoot(container);
        root.render(<App />);
    </script>
</body>
</html>
