import React from 'react';
import { HomeIcon, UsersIcon, DocumentTextIcon, CreditCardIcon } from '@heroicons/react/24/outline';

function App() {
  const stats = [
    { name: 'Total Properties', value: '12', icon: HomeIcon },
    { name: 'Active Tenants', value: '28', icon: UsersIcon },
    { name: 'Pending Bills', value: '8', icon: DocumentTextIcon },
    { name: 'Monthly Revenue', value: '€24,500', icon: CreditCardIcon },
  ];

  const recentActivities = [
    { id: 1, title: 'New Tenant Registration', date: '2 hours ago', type: 'tenant' },
    { id: 2, title: 'Maintenance Request', date: '5 hours ago', type: 'maintenance' },
    { id: 3, title: 'Rent Payment Received', date: '1 day ago', type: 'payment' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-primary">LocationsZen</h1>
            </div>
            <div className="flex items-center">
              <button className="p-2 rounded-full hover:bg-gray-100">
                <span className="sr-only">View notifications</span>
                <div className="h-6 w-6 text-gray-400">🔔</div>
              </button>
              <div className="ml-3 relative">
                <div className="flex items-center">
                  <img
                    className="h-8 w-8 rounded-full"
                    src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg"
                    alt="User"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((item) => (
            <div
              key={item.name}
              className="bg-white overflow-hidden shadow rounded-lg"
            >
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <item.icon className="h-6 w-6 text-gray-400" aria-hidden="true" />
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 truncate">
                        {item.name}
                      </dt>
                      <dd className="text-lg font-semibold text-gray-900">
                        {item.value}
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Content Grid */}
        <div className="mt-8 grid grid-cols-1 gap-5 lg:grid-cols-2">
          {/* Properties Overview */}
          <div className="bg-white shadow rounded-lg">
            <div className="p-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                Properties Overview
              </h3>
              <div className="mt-5">
                <div className="relative h-80 bg-gray-50 rounded">
                  <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                    Property chart will be displayed here
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white shadow rounded-lg">
            <div className="p-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                Recent Activity
              </h3>
              <div className="mt-5">
                <div className="flow-root">
                  <ul className="-mb-8">
                    {recentActivities.map((activity, activityIdx) => (
                      <li key={activity.id}>
                        <div className="relative pb-8">
                          {activityIdx !== recentActivities.length - 1 ? (
                            <span
                              className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200"
                              aria-hidden="true"
                            />
                          ) : null}
                          <div className="relative flex space-x-3">
                            <div>
                              <span className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center ring-8 ring-white">
                                {activity.type === 'tenant' ? '👤' : 
                                 activity.type === 'maintenance' ? '🔧' : '💰'}
                              </span>
                            </div>
                            <div className="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                              <div>
                                <p className="text-sm text-gray-500">
                                  {activity.title}
                                </p>
                              </div>
                              <div className="text-right text-sm whitespace-nowrap text-gray-500">
                                <time dateTime={activity.date}>{activity.date}</time>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;